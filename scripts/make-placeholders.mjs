#!/usr/bin/env node
/**
 * Generate placeholder source images for every slot the site references,
 * so the project builds and previews before real photography exists.
 *
 * Writes JPEGs into _source-images/<folder>/<base>.jpg — the exact paths the
 * real photos should later replace (see IMAGE_PROMPTS.md). Never overwrites
 * an existing file, so real photos are safe once dropped in.
 *
 * Look: quiet architectural duotone plates (paper/ink/gold), drafting hatch,
 * mono label — deliberately obvious as placeholders without looking broken.
 */
import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.resolve(ROOT, "_source-images");

/** Every image slot referenced by the site. Keep in sync with IMAGE_PROMPTS.md */
const SLOTS = {
  hero: ["hero-skyline", "hero-drawings", "hero-site", "hero-handover"],
  authorities: [
    "dubai-municipality", "civil-defence", "dda", "trakhees", "dmcc",
    "jafza", "dewa", "rta", "dha", "nakheel", "emaar", "difc",
    "dubai-south", "dso", "dhcc",
  ],
  projects: [
    "office", "restaurant", "cafe", "retail", "clinic", "pharmacy",
    "salon", "gym", "warehouse", "villa", "hotel", "nursery",
  ],
  services: [
    "permit-management", "drawings", "fire-safety", "noc", "completion",
    "renovation", "signage", "food-safety", "rescue", "white-label",
  ],
  process: ["site-survey", "drawings-desk", "inspection"],
  about: ["team", "office-halo"],
  jurisdictions: [
    "business-bay", "tecom-d3", "jlt", "palm-jumeirah", "difc", "jafza",
    "dubai-south", "silicon-oasis", "healthcare-city", "dubai-hills",
    "jvc-nakheel",
  ],
};

const W = 1920;
const H = 1280;
const PAPER = "#f1ecdf";
const INK = "#16130e";
const GOLD = "#b3862f";
const RULE = "#c8bda2";

function plateSvg(folder, base) {
  const label = `${folder} / ${base}`.toUpperCase();
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hatch" width="14" height="14" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="14" stroke="${INK}" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <path d="M 64 0 L 0 0 0 64" fill="none" stroke="${INK}" stroke-opacity="0.06" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect x="60" y="60" width="${W - 120}" height="${H - 120}" fill="url(#hatch)" stroke="${RULE}" stroke-width="2"/>
  <rect x="60" y="60" width="${W - 120}" height="8" fill="${GOLD}"/>
  <text x="${W / 2}" y="${H / 2 - 24}" text-anchor="middle" font-family="Menlo, monospace" font-size="44" letter-spacing="10" fill="${INK}" fill-opacity="0.72">${label}</text>
  <text x="${W / 2}" y="${H / 2 + 44}" text-anchor="middle" font-family="Menlo, monospace" font-size="26" letter-spacing="6" fill="${INK}" fill-opacity="0.4">PLACEHOLDER — SEE IMAGE_PROMPTS.MD</text>
  <g transform="translate(${W / 2}, ${H / 2 + 150}) rotate(-4)">
    <rect x="-150" y="-34" width="300" height="68" fill="none" stroke="${GOLD}" stroke-width="4"/>
    <text x="0" y="12" text-anchor="middle" font-family="Menlo, monospace" font-size="30" letter-spacing="8" fill="${GOLD}">PENDING</text>
  </g>
</svg>`;
}

let made = 0;
let kept = 0;

async function main() {
  for (const [folder, bases] of Object.entries(SLOTS)) {
    const dir = path.join(SRC, folder);
    await fs.mkdir(dir, { recursive: true });
    for (const base of bases) {
      const out = path.join(dir, `${base}.jpg`);
      try {
        await fs.access(out);
        kept++; // never overwrite — a real photo may already live here
        continue;
      } catch {}
      await sharp(Buffer.from(plateSvg(folder, base)))
        .jpeg({ quality: 82 })
        .toFile(out);
      made++;
    }
  }
  console.log(`Placeholders: made=${made} kept-existing=${kept}`);
  console.log("Now run: npm run assets:images");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
