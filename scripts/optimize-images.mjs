#!/usr/bin/env node
/**
 * Optimize source images → responsive WebP.
 *
 * Reads from   _source-images/<folder>/*
 * Writes to    public/img/<folder>/<base>-<size>.webp
 * Manifest at  src/data/images.json  (base, sizes[], largest, width, height)
 *
 * Drop real photography into _source-images/ using the file names listed in
 * IMAGE_PROMPTS.md (they replace the generated placeholders), then re-run:
 *   npm run assets:images
 *
 * Sizes: 480, 768, 1200, 1600, 2000 (px wide). Quality 80. Idempotent.
 */
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
// Raw originals live OUTSIDE public/ so they are never shipped to the static
// export — only the optimized webp variants under public/img/ are deployed.
const SRC = path.resolve(ROOT, "_source-images");
const OUT = path.resolve(ROOT, "public/img");
const MANIFEST = path.resolve(ROOT, "src/data/images.json");

const FOLDERS = ["hero", "authorities", "projects", "services", "process", "about", "jurisdictions", "cta"];

const SIZES = [480, 768, 1200, 1600, 2000];
const QUALITY = 80;
const EXTS = [".jpg", ".jpeg", ".png", ".webp"];

async function ensureDir(d) {
  await fs.mkdir(d, { recursive: true });
}

async function needsRebuild(src, dest) {
  try {
    const [s, d] = await Promise.all([fs.stat(src), fs.stat(dest)]);
    return s.mtimeMs > d.mtimeMs;
  } catch {
    return true;
  }
}

function baseNameOf(file) {
  return path
    .basename(file, path.extname(file))
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

let made = 0;
let skipped = 0;
let failed = 0;
const manifest = {};

async function processFolder(folder) {
  const srcDir = path.join(SRC, folder);
  try {
    await fs.access(srcDir);
  } catch {
    console.warn(`  ! missing source folder: ${folder}`);
    return;
  }
  const outDir = path.join(OUT, folder);
  await ensureDir(outDir);

  const entries = (await fs.readdir(srcDir)).filter((f) =>
    EXTS.includes(path.extname(f).toLowerCase()),
  );
  entries.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const items = [];
  for (const file of entries) {
    const srcPath = path.join(srcDir, file);
    const base = baseNameOf(file);

    let meta;
    try {
      meta = await sharp(srcPath).metadata();
    } catch (e) {
      console.error(`  ✗ meta ${srcPath}: ${e.message}`);
      failed++;
      continue;
    }
    const srcW = meta.width ?? 0;
    const srcH = meta.height ?? 0;
    const produced = [];

    for (const size of SIZES) {
      if (srcW && size > srcW * 1.1) continue; // never upscale
      const out = path.join(outDir, `${base}-${size}.webp`);
      produced.push(size);
      if (!(await needsRebuild(srcPath, out))) {
        skipped++;
        continue;
      }
      try {
        await sharp(srcPath, { failOn: "none" })
          .rotate()
          .resize({ width: size, withoutEnlargement: true })
          .webp({ quality: QUALITY, effort: 5 })
          .toFile(out);
        made++;
      } catch (e) {
        console.error(`  ✗ ${out}: ${e.message}`);
        failed++;
      }
    }

    // Always keep at least the source-width bucket if nothing matched
    if (produced.length === 0 && srcW) {
      const size = SIZES.find((s) => s >= srcW) ?? SIZES[SIZES.length - 1];
      const out = path.join(outDir, `${base}-${size}.webp`);
      try {
        await sharp(srcPath, { failOn: "none" })
          .rotate()
          .resize({ width: size, withoutEnlargement: true })
          .webp({ quality: QUALITY, effort: 5 })
          .toFile(out);
        produced.push(size);
        made++;
      } catch (e) {
        console.error(`  ✗ ${out}: ${e.message}`);
        failed++;
      }
    }

    if (produced.length) {
      items.push({
        base,
        sizes: produced.sort((a, b) => a - b),
        largest: Math.max(...produced),
        width: srcW,
        height: srcH,
      });
    }
  }

  manifest[folder] = items;
  console.log(`· ${folder.padEnd(14)} ${items.length} images`);
}

async function main() {
  console.log("fitoutpermits.ae image optimization → WebP");
  console.log(`  src: ${SRC}`);
  console.log(`  out: ${OUT}\n`);
  await ensureDir(OUT);

  for (const folder of FOLDERS) {
    await processFolder(folder);
  }

  await ensureDir(path.dirname(MANIFEST));
  await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\nManifest → ${path.relative(ROOT, MANIFEST)}`);
  console.log(`Done. made=${made} skipped=${skipped} failed=${failed}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
