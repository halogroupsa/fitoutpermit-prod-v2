import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, serviceBySlug } from "@/data/services";
import { AUTHORITIES } from "@/data/authorities";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import { CtaBand } from "@/components/sections/cta-band";
import { ApprovalTwin } from "@/components/interactive/approval-twin";
import { FaqVisual } from "@/components/sections/faq-visual";
import { SpecStrip } from "@/components/sections/spec-strip";
import { DossierContents, type DossierSection } from "@/components/sections/dossier-contents";
import {
  ChecklistBlock,
  ClauseHeading,
  RelatedLinks,
  StepsBlock,
} from "@/components/sections/detail-blocks";
import { faqSchema, serviceSchema, JsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.title, description: s.metaDescription, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  const related = s.related
    .map((r) => SERVICES.find((x) => x.slug === r))
    .filter(Boolean)
    .map((x) => ({ href: `/services/${x!.slug}`, label: x!.name }));
  const relatedAuthorities = s.relatedAuthorities
    .map((r) => AUTHORITIES.find((x) => x.slug === r))
    .filter(Boolean)
    .map((x) => ({ href: `/approvals/${x!.slug}`, label: x!.name, sub: x!.jurisdiction }));

  const approvalTwinView =
    s.slug === "drawing-preparation"
      ? "drawing"
      : s.slug === "completion-certificates"
        ? "completion"
        : null;
  const sectionNo = (plain: string, withTwin: string) => approvalTwinView ? withTwin : plain;

  const toc: DossierSection[] = [
    ...(approvalTwinView ? [{ id: "approval-twin", no: "01", label: "The approval twin" }] : []),
    { id: "included", no: sectionNo("01", "02"), label: "What's included" },
    { id: "audience", no: sectionNo("02", "03"), label: "Who this is for" },
    { id: "process", no: sectionNo("03", "04"), label: "How it runs" },
    { id: "faqs", no: sectionNo("04", "05"), label: "FAQs" },
    { id: "related", no: sectionNo("05", "06"), label: "Related services" },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: s.name, description: s.metaDescription, path: `/services/${s.slug}` }),
          faqSchema(s.faqs),
        ]}
      />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: s.name }]} />
      <PageHero
        eyebrow="Service"
        title={s.name}
        lead={s.intro[0]}
        image={s.heroImage}
      />

      <SpecStrip
        specs={[
          { label: "Inclusions", value: String(s.includes.length) },
          { label: "Process", value: `${s.steps.length} steps` },
          { label: "Fees", value: "Fixed" },
          { label: "Gov. charges", value: "At cost" },
        ]}
      />

      <div className="container-page">
        <section className="section-sm">
          <div className="reveal grid gap-5">
            {s.intro.slice(1).map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </section>

        <div className="lg:grid lg:gap-x-14 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 pt-8">
              <DossierContents items={toc} />
            </div>
          </aside>

          <div className="min-w-0">
            {approvalTwinView ? (
              <div id="approval-twin" className="scroll-mt-28">
                <ApprovalTwin initialView={approvalTwinView} no="01" />
              </div>
            ) : null}

            <ChecklistBlock id="included" no={sectionNo("01", "02")} title="What's included" items={s.includes} />

            <section id="audience" className="section-sm scroll-mt-28">
              <ClauseHeading no={sectionNo("02", "03")} title="Who this is for" />
              <ul className="reveal grid gap-3 md:grid-cols-2">
                {s.audience.map((aud, i) => (
                  <li key={i} className="flex items-start gap-3 border border-rule bg-paper-warm/60 p-4 text-base leading-relaxed text-ink-soft">
                    <span className="ref-no mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    {aud}
                  </li>
                ))}
              </ul>
            </section>

            <StepsBlock id="process" no={sectionNo("03", "04")} title="How it runs" steps={s.steps} />

            <section id="faqs" className="section-sm scroll-mt-28">
              <ClauseHeading no={sectionNo("04", "05")} title="FAQs" />
              <div className="grid gap-8 lg:grid-cols-[minmax(11rem,0.6fr)_minmax(0,1.4fr)] lg:gap-10">
                <FaqVisual className="hidden lg:block lg:sticky lg:top-28 lg:self-start" />
                <div className="reveal">
                  <Accordion items={s.faqs} />
                </div>
              </div>
            </section>

            <RelatedLinks id="related" no={sectionNo("05", "06")} title="Related services" links={related} />
            <RelatedLinks no={sectionNo("06", "07")} title="Authorities this touches" links={relatedAuthorities} />
            <div className="pb-6" />
          </div>
        </div>
      </div>

      <CtaBand
        title={`Ready to hand over the ${s.name.toLowerCase()}?`}
      />
    </>
  );
}
