import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { AUTHORITIES } from "@/data/authorities";
import { SERVICES } from "@/data/services";
import { PROJECT_TYPES } from "@/data/project-types";
import { GUIDES } from "@/data/guides";
import { archivePages, archivePath } from "@/lib/archive-pagination";
import { IS_PRODUCTION_SITE } from "@/lib/deployment";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!IS_PRODUCTION_SITE) return [];

  const lastModified = new Date();
  const base = SITE.url;
  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/approvals`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/permits`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}${archivePath()}`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...archivePages(GUIDES.length).map((page) => ({ url: `${base}${archivePath(page)}` })),
    { url: `${base}/tools/approval-finder`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/tools/cost-calculator`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/for-contractors`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
  for (const a of AUTHORITIES) {
    entries.push({ url: `${base}/approvals/${a.slug}`, lastModified, changeFrequency: "monthly", priority: 0.9 });
  }
  for (const s of SERVICES) {
    entries.push({ url: `${base}/services/${s.slug}`, lastModified, changeFrequency: "monthly", priority: 0.85 });
  }
  for (const p of PROJECT_TYPES) {
    entries.push({ url: `${base}/permits/${p.slug}`, lastModified, changeFrequency: "monthly", priority: 0.85 });
  }
  for (const g of GUIDES) {
    entries.push({ url: `${base}/resources/${g.slug}`, lastModified: g.publishedAt ?? SITE.lastReviewedAt, changeFrequency: "monthly", priority: 0.7 });
  }
  return entries;
}
