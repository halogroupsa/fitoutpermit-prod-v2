import Link from "next/link";
import { SITE } from "@/lib/site";

export type Crumb = { label: string; href?: string };

/** Breadcrumb trail + BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      ...items.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        ...(c.href ? { item: `${SITE.url}${c.href}` } : {}),
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
        <li>
          <Link href="/" className="hover:text-accent-deep">
            Home
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden>/</span>
            {c.href ? (
              <Link href={c.href} className="hover:text-accent-deep">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink-soft">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
