import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDES, guideBySlug } from "@/data/guides";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqVisual } from "@/components/sections/faq-visual";
import { DossierContents } from "@/components/sections/dossier-contents";
import { ClauseHeading, RelatedLinks, ReviewNote } from "@/components/sections/detail-blocks";
import { articleSchema, faqSchema, JsonLd } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.metaDescription,
    keywords: g.keywords,
    alternates: { canonical: `/resources/${g.slug}` },
    openGraph: { title: g.title, description: g.metaDescription, url: `/resources/${g.slug}`, type: "article" },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) notFound();

  const related = g.relatedGuides
    .map((s) => GUIDES.find((x) => x.slug === s))
    .filter(Boolean)
    .map((x) => ({ href: `/resources/${x!.slug}`, label: x!.name }));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ headline: g.title, description: g.metaDescription, path: `/resources/${g.slug}` }),
          faqSchema(g.faqs),
        ]}
      />
      <Breadcrumbs items={[{ label: "Guides", href: "/resources" }, { label: g.name }]} />

      <div className="container-page py-10 md:py-14">
        <div className="lg:grid lg:gap-x-12 lg:grid-cols-[13rem_minmax(0,74ch)] lg:justify-center xl:gap-x-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <DossierContents
                items={[
                  ...g.sections.map((s, i) => ({
                    id: `s-${i}`,
                    no: String(i + 1).padStart(2, "0"),
                    label: s.heading,
                  })),
                  { id: "faqs", no: "FAQ", label: "Questions on this topic" },
                ]}
              />
            </div>
          </aside>

          <article className="mx-auto w-full min-w-0 max-w-[74ch] lg:max-w-none">
            <p className="eyebrow">Guide · {SITE.lastReviewed}</p>
            <h1 className="mt-4 text-3xl">{g.title.split("|")[0].trim()}</h1>
            <div className="mt-6 grid gap-5">
              {g.intro.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-soft first:font-medium first:text-ink">
                  {p}
                </p>
              ))}
            </div>
            <ReviewNote date={SITE.lastReviewed} className="mt-6" />

            {g.sections.map((s, i) => (
              <section key={i} id={`s-${i}`} className="mt-12 scroll-mt-28">
                <ClauseHeading no={String(i + 1).padStart(2, "0")} title={s.heading} />
                {s.paragraphs?.map((p, j) => (
                  <p key={j} className="reveal mt-4 leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="reveal mt-4">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="ledger-row grid-cols-[2.2rem_1fr] gap-x-3 !py-3">
                        <span className="ref-no">{String(j + 1).padStart(2, "0")}</span>
                        <span className="text-base leading-relaxed text-ink-soft">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section id="faqs" className="mt-14 scroll-mt-28">
              <ClauseHeading no="FAQ" title="Questions on this topic" />
              <div className="grid gap-8 md:grid-cols-[minmax(10rem,0.58fr)_minmax(0,1.42fr)] md:gap-10">
                <FaqVisual className="hidden md:block md:sticky md:top-28 md:self-start" />
                <Accordion items={g.faqs} />
              </div>
            </section>

            <div className="mt-14">
              <RelatedLinks no="→" title="Keep reading" links={related} />
            </div>
          </article>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
