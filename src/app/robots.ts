import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { IS_PRODUCTION_SITE } from "@/lib/deployment";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Staging/preview deployments (non-canonical NEXT_PUBLIC_SITE_URL) stay out
  // of the index entirely.
  if (!IS_PRODUCTION_SITE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    // /design-styles is an internal reference page — noindex'd and kept
    // out of the sitemap; disallow it here as well.
    rules: { userAgent: "*", allow: "/", disallow: "/design-styles" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
