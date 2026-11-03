# FitOutPermits.ae

Next.js static export deployed to Cloudflare Pages. Production origin:
`https://fitoutpermits.ae`. Google Tag Manager container: `GTM-NLBG5N2V`.

## Build and check

Use Node.js 22 or 24 and npm. From this checkout:

```sh
make install
make check
make start
```

`make check` runs ESLint, TypeScript, sync safety tests, the full static build
and deployment verification. `make start` serves `out/` through Wrangler, including Cloudflare
header and redirect rules. `make dev` starts Next.js development mode.

## Production and preview behavior

- Leave `NEXT_PUBLIC_SITE_URL` unset in production, or set it to
  `https://fitoutpermits.ae`. A trailing slash is accepted.
- For staging, set `NEXT_PUBLIC_SITE_URL` to the staging deployment's own
  origin **before building**. These builds emit `noindex, nofollow` metadata,
  block crawling in `robots.txt`, and publish an empty sitemap.
- Production builds allow indexing and publish canonical sitemap URLs.
  `/design-styles` and 404 pages remain `noindex`.
- Cloudflare `_headers` additionally sends `X-Robots-Tag: noindex, nofollow`
  on every hostname except `https://fitoutpermits.ae`, protecting preview
  hostnames even when they serve the production artifact. On another hosting
  platform, configure equivalent host-based headers.
- If using `www.fitoutpermits.ae`, configure a Cloudflare redirect to the
  canonical domain. Indexing and GTM are enabled on the apex domain only.
- GTM's bootstrap is included in the HTML head and loads the container once,
  only when the browser is on HTTPS at exactly `fitoutpermits.ae`. It stays
  inactive on localhost, Pages URLs, staging and other domains. A noscript
  tracker is intentionally omitted because it cannot check the hostname in a
  shared static export. Manage GA4, Ads and other tags in GTM itself.

Example staging check:

```sh
NEXT_PUBLIC_SITE_URL=https://staging.fitoutpermits.ae make check
```

Rebuild for production after testing staging; public environment values are
embedded at build time. `.env.example` documents the public configuration.

## Sync staging source to the production repository

Clone the production repository beside this checkout as `fitoutpermit-prod-v2`,
or pass its existing absolute path as `PROD_DIR`:

```sh
make sync-to-prod-dry-run PROD_DIR=/absolute/path/to/production-repo
make sync-to-prod PROD_DIR=/absolute/path/to/production-repo
```

The apply command always previews the changes, then asks for confirmation.
After reviewing a dry run, automation can use `CONFIRM=1`. The destination must
be a separate Git checkout with no uncommitted changes. The sync includes
deletions of obsolete application files, while preserving Git history, local
environment files, dependencies, build outputs and `wrangler.*` hosting config.
It excludes research assets and local agent tooling. Review the resulting
production diff before committing and pushing; sync never commits or pushes.

## Cloudflare deployment

For a Git-connected Pages project, set the build command to `npm run check`
and output directory to `out`. Configure the production and staging environment
URLs as described above. The production Pages project must have
`fitoutpermits.ae` attached as a custom domain.

The repo sync safety tests run with `make check` locally. They require Bash,
Git and rsync; the Cloudflare build check does not require rsync.

For a manual deployment from the production checkout, confirm its local
`wrangler.toml` names the production Pages project, then run:

```sh
make deploy
```

Wrangler is version-pinned in the lockfile. `make deploy` runs all checks before
uploading. Hosting configuration is deliberately preserved during source sync;
this staging checkout's existing `wrangler.toml` is not copied into production.

After deployment, check the live homepage response has no `noindex` header,
check `/robots.txt` and `/sitemap.xml`, and use GTM Tag Assistant on the canonical
domain to confirm the published container's tags fire. The local checks validate
the bootstrap and export; live tag behavior also depends on the GTM container's
published configuration.

## Dependency maintenance

Next.js is on the patched 15.5 release line; PostCSS is overridden to the
patched 8.5 release line to replace Next.js's older bundled dependency.
Cloudflare Wrangler and Sharp are also updated. `npm audit --omit=dev` reports
no known vulnerabilities. The full audit still reports moderate advisories in
the development-only ESLint/minimatch dependency tree; resolving those requires
a separate lint-tooling migration. These tools are not shipped in `out/`.
