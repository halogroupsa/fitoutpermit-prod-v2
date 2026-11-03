import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AUTHORITIES, authorityBySlug } from "@/data/authorities";
import { PROJECT_TYPES } from "@/data/project-types";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqVisual } from "@/components/sections/faq-visual";
import { SpecStrip } from "@/components/sections/spec-strip";
import { DossierContents } from "@/components/sections/dossier-contents";
import {
  ChecklistBlock,
  ClauseHeading,
  FeesBlock,
  RelatedLinks,
  ReviewNote,
  StepsBlock,
  WarningsBlock,
} from "@/components/sections/detail-blocks";
import { faqSchema, serviceSchema, JsonLd } from "@/lib/schema";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return AUTHORITIES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = authorityBySlug(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.metaDescription,
    keywords: a.keywords,
    alternates: { canonical: `/approvals/${a.slug}` },
    openGraph: { title: a.title, description: a.metaDescription, url: `/approvals/${a.slug}` },
  };
}

export default async function AuthorityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = authorityBySlug(slug);
  if (!a) notFound();

  const related = a.related
    .map((s) => AUTHORITIES.find((x) => x.slug === s))
    .filter(Boolean)
    .map((x) => ({ href: `/approvals/${x!.slug}`, label: x!.name, sub: x!.jurisdiction }));
  const relatedProjects = a.relatedProjects
    .map((s) => PROJECT_TYPES.find((x) => x.slug === s))
    .filter(Boolean)
    .map((x) => ({ href: `/permits/${x!.slug}`, label: x!.name, sub: x!.metaDescription.slice(0, 70) + "…" }));

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: a.title, description: a.metaDescription, path: `/approvals/${a.slug}` }),
          faqSchema(a.faqs),
        ]}
      />
      <Breadcrumbs items={[{ label: "Authorities", href: "/approvals" }, { label: a.name }]} />
      <PageHero
        eyebrow={`Authority dossier · ${a.shortName}`}
        title={a.title.split("|")[0].trim()}
        lead={a.metaDescription}
        image={a.heroImage}
        meta={a.jurisdiction}
      />

      <SpecStrip
        specs={[
          { label: "Authority", value: a.shortName },
          { label: "Documents", value: String(a.documents.length) },
          { label: "Process", value: `${a.steps.length} steps` },
          { label: "Reviewed", value: SITE.lastReviewed },
        ]}
      />

      <div className="container-page">
        {/* Intro */}
        <section className="section-sm">
          <div className="reveal grid gap-5">
            {a.intro.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft first:font-medium first:text-ink">
                {p}
              </p>
            ))}
          </div>
          <ReviewNote date={SITE.lastReviewed} className="mt-6" />
        </section>

        {/* Navigable dossier body: sticky contents rail + numbered clauses */}
        <div className="lg:grid lg:gap-x-14 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 pt-8">
              <DossierContents
                items={[
                  { id: "when-required", no: "01", label: `When ${a.shortName} approval is required` },
                  { id: "documents", no: "02", label: "Documents you'll need" },
                  { id: "process", no: "03", label: "The process, step by step" },
                  { id: "fees", no: "04", label: "Fees & charges" },
                  { id: "rejections", no: "05", label: "Common rejection reasons" },
                  { id: "timeline", no: "06", label: "Timeline" },
                  { id: "faqs", no: "07", label: "FAQs" },
                  { id: "related", no: "08", label: "Related authorities" },
                ]}
              />
            </div>
          </aside>

          <div className="min-w-0">
            {/* When required */}
            <section id="when-required" className="section-sm scroll-mt-28">
              <ClauseHeading no="01" title={`When ${a.shortName} approval is required`} />
              <ul className="reveal grid gap-0">
                {a.whenRequired.map((w, i) => (
                  <li key={i} className="ledger-row grid-cols-[2.6rem_1fr] gap-x-3 !py-3.5">
                    <span className="ref-no">{String(i + 1).padStart(2, "0")}</span>
                    <span className="max-w-3xl text-base leading-relaxed text-ink-soft">{w}</span>
                  </li>
                ))}
              </ul>
            </section>

            <ChecklistBlock id="documents" no="02" title="Documents you'll need" items={a.documents} />
            <StepsBlock id="process" no="03" title="The process, step by step" steps={a.steps} />
            <FeesBlock id="fees" no="04" title="Fees & charges" fees={a.fees} note={a.feesNote} />
            <WarningsBlock id="rejections" no="05" title="Common rejection reasons" items={a.rejectionReasons} />

            {/* Timeline */}
            <section id="timeline" className="section-sm scroll-mt-28">
              <ClauseHeading no="06" title="Timeline" />
              <p className="reveal max-w-3xl text-base leading-relaxed text-ink-soft">{a.timelineNote}</p>
            </section>

            {/* FAQs */}
            <section id="faqs" className="section-sm scroll-mt-28">
              <ClauseHeading no="07" title={`${a.shortName} approval — FAQs`} />
              <div className="grid gap-8 lg:grid-cols-[minmax(11rem,0.6fr)_minmax(0,1.4fr)] lg:gap-10">
                <FaqVisual className="hidden lg:block lg:sticky lg:top-28 lg:self-start" />
                <div className="reveal">
                  <Accordion items={a.faqs} />
                </div>
              </div>
            </section>

            <RelatedLinks id="related" no="08" title="Related authorities" links={related} />
            <RelatedLinks no="09" title="Common project types here" links={relatedProjects} />
            <div className="pb-6" />
          </div>
        </div>
      </div>

      <CtaBand
        title={`Need ${a.shortName} approval? Start with the free check.`}
        lead={`Send the unit location and intended works — we'll confirm the exact ${a.name} requirements, fees and a fixed quote within one business day.`}
      />
    </>
  );
}
