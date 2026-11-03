export const CANONICAL_URL = "https://fitoutpermits.ae";
export const PRODUCTION_HOST = new URL(CANONICAL_URL).hostname;
export const GTM_ID = "GTM-NLBG5N2V";

// NEXT_PUBLIC_* values are baked into the static export. Normalize the root
// slash so https://fitoutpermits.ae/ has the same production behavior.
const configuredUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || CANONICAL_URL,
);

if (
  !["http:", "https:"].includes(configuredUrl.protocol) ||
  configuredUrl.pathname !== "/" ||
  configuredUrl.search ||
  configuredUrl.hash ||
  configuredUrl.username ||
  configuredUrl.password
) {
  throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, query, or credentials.");
}

export const SITE_URL = configuredUrl.origin;
export const IS_PRODUCTION_SITE = SITE_URL === CANONICAL_URL;
