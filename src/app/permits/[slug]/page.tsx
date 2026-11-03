import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PROJECT_TYPES, projectTypeBySlug } from "@/data/project-types";
import { AUTHORITIES } from "@/data/authorities";
import { PageHero } from "@/components/sections/page-hero";
import { FaqVisual } from "@/components/sections/faq-visual";
import { SpecStrip } from "@/components/sections/spec-strip";
import { DossierContents } from "@/components/sections/dossier-contents";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import { CtaBand } from "@/components/sections/cta-band";
import {
  ChecklistBlock,
  ClauseHeading,
  RelatedLinks,
  ReviewNote,
  StepsBlock,
  WarningsBlock,
} from "@/components/sections/detail-blocks";
import { faqSchema, serviceSchema, JsonLd } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return PROJECT_TYPES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projectTypeBySlug(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: { canonical: `/permits/${p.slug}` },
    openGraph: { title: p.title, description: p.metaDescription, url: `/permits/${p.slug}` },
  };
}

export default async function ProjectTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projectTypeBySlug(slug);
  if (!p) notFound();

  const relatedProjects = p.relatedProjects
    .map((s) => PROJECT_TYPES.find((x) => x.slug === s))
    .filter(Boolean)
    .map((x) => ({ href: `/permits/${x!.slug}`, label: x!.name }));

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: p.title, description: p.metaDescription, path: `/permits/${p.slug}` }),
          faqSchema(p.faqs),
        ]}
      />
      <Breadcrumbs items={[{ label: "Project types", href: "/permits" }, { label: p.shortName }]} />
      <PageHero
        eyebrow={`Project dossier · ${p.shortName}`}
        title={p.title.split("|")[0].trim()}
        lead={p.intro[0]}
        image={p.heroImage}
      />

      <SpecStrip
        specs={[
          { label: "Authorities", value: String(p.authoritiesInvolved.length) },
          { label: "Documents", value: String(p.documents.length) },
          { label: "Watch-outs", value: String(p.watchouts.length) },
          { label: "Process", value: `${p.steps.length} steps` },
        ]}
      />

      <div className="container-page">
        <section className="section-sm">
          <div className="reveal grid gap-5">
            {p.intro.slice(1).map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </div>
          <ReviewNote date={SITE.lastReviewed} className="mt-6" />
        </section>

        <div className="lg:grid lg:gap-x-14 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 pt-8">
              <DossierContents
                items={[
                  { id: "authorities", no: "01", label: "Authorities involved" },
                  { id: "documents", no: "02", label: "Core documents" },
                  { id: "watchouts", no: "03", label: "Watch-outs" },
                  { id: "process", no: "04", label: "How we run it" },
                  { id: "timeline", no: "05", label: "Timeline" },
                  { id: "faqs", no: "06", label: "FAQs" },
                  { id: "related", no: "07", label: "Related project types" },
                ]}
              />
            </div>
          </aside>

          <div className="min-w-0">
            {/* Authorities involved */}
            <section id="authorities" className="section-sm scroll-mt-28">
              <ClauseHeading no="01" title="Authorities typically involved" />
              <div className="reveal grid gap-4 md:grid-cols-2">
                {p.authoritiesInvolved.map((ai) => {
                  const a = AUTHORITIES.find((x) => x.slug === ai.slug);
                  if (!a) return null;
                  return (
                    <Link
                      key={ai.slug}
                      href={`/approvals/${a.slug}`}
                      className="dossier-card group flex items-start justify-between gap-4 p-5"
                    >
                      <span>
                        <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent-deep">
                          {a.shortName}
                        </span>
                        <span className="mt-1 block font-display text-lg leading-snug transition-colors group-hover:text-accent-deep">
                          {a.name}
                        </span>
                        <span className="mt-1.5 block text-sm leading-relaxed text-ink-mute">{ai.reason}</span>
                      </span>
                      <ArrowRight size={15} aria-hidden className="mt-1 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-accent-deep" />
                    </Link>
                  );
                })}
              </div>
            </section>

            <ChecklistBlock id="documents" no="02" title="Core documents" items={p.documents} />
            <WarningsBlock id="watchouts" no="03" title="Watch-outs that decide your programme" items={p.watchouts} />
            <StepsBlock id="process" no="04" title="How we run it" steps={p.steps} />

            <section id="timeline" className="section-sm scroll-mt-28">
              <ClauseHeading no="05" title="Timeline" />
              <p className="reveal max-w-3xl text-base leading-relaxed text-ink-soft">{p.timelineNote}</p>
            </section>

            <section id="faqs" className="section-sm scroll-mt-28">
              <ClauseHeading no="06" title={`${p.shortName} approvals — FAQs`} />
              <div className="grid gap-8 lg:grid-cols-[minmax(11rem,0.6fr)_minmax(0,1.4fr)] lg:gap-10">
                <FaqVisual className="hidden lg:block lg:sticky lg:top-28 lg:self-start" />
                <div className="reveal">
                  <Accordion items={p.faqs} />
                </div>
              </div>
            </section>

            <RelatedLinks id="related" no="07" title="Related project types" links={relatedProjects} />
            <div className="pb-6" />
          </div>
        </div>
      </div>

      <CtaBand
        title={`Planning a ${p.shortName.toLowerCase()} project? Get the map first.`}
        lead="Unit location + intended works = authority map, document checklist, fee estimate and a fixed quote. Free, within one business day — and before you sign anything irreversible."
      />
    </>
  );
}
