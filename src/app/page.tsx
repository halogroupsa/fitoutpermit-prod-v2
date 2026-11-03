import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, Compass, LifeBuoy } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { AuthorityMarquee } from "@/components/sections/authority-marquee";
import { PartnerMarquee } from "@/components/sections/partner-marquee";
import { Testimonials } from "@/components/sections/testimonials";
import { BuildTimelapse } from "@/components/sections/build-timelapse";
import { ApprovalDesk } from "@/components/sections/approval-desk";
import { JurisdictionMap } from "@/components/sections/jurisdiction-map";
import { ProcessLedger } from "@/components/sections/process-ledger";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqVisual } from "@/components/sections/faq-visual";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { SmartImage } from "@/components/ui/smart-image";
import { PROJECT_TYPES } from "@/data/project-types";
import { GUIDES } from "@/data/guides";
import { ALL_FAQS } from "@/data/faqs";
import { faqSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const HOME_FAQS = ALL_FAQS.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />
      <Hero />
      <AuthorityMarquee />
      <BuildTimelapse />
      <ApprovalDesk />

      {/* Jurisdiction explorer */}
      <section className="home-jurisdictions section border-t border-rule bg-paper">
        <div className="container-page">
          <SectionHeading
            refNo="02"
            eyebrow="Jurisdictions"
            title="Who governs your unit?"
            lead="Dubai runs multiple parallel building-control regimes — your address decides which one owns your permit. Pick your area:"
            className="mb-10"
          />
          <JurisdictionMap />
        </div>
      </section>

      {/* Process */}
      <section className="home-process section border-t border-rule">
        <div className="container-page">
          <SectionHeading
            refNo="03"
            eyebrow="The permit journey"
            title="Six steps. One owner. No surprises."
            lead="From free scope review to completion certificate — this is the sequence, and where each week is won."
            className="mb-12"
          />
          <ProcessLedger />
        </div>
      </section>

      {/* Project types */}
      <section className="home-project-types section border-t border-rule">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              refNo="04"
              eyebrow="Project types"
              title="Approvals by what you're building"
              lead="Every project type triggers a different authority mix. Pick yours for the exact documents, watch-outs and timeline."
            />
            <Link href="/permits" className="btn-outline reveal shrink-0">
              All project types
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
          <div className="reveal grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {PROJECT_TYPES.slice(0, 8).map((p, i) => (
              <Link
                key={p.slug}
                href={`/permits/${p.slug}`}
                className="dossier-card group flex flex-col"
              >
                <SmartImage
                  folder={p.heroImage.folder}
                  base={p.heroImage.base}
                  alt={p.heroImage.alt}
                  ratio="4 / 3"
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 46vw"
                  className="w-full"
                />
                <div className="flex flex-1 items-start justify-between gap-2 p-4">
                  <div>
                    <span className="ref-no">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-1 font-display text-base leading-snug sm:text-lg">
                      {p.shortName}
                    </h3>
                  </div>
                  <ArrowRight
                    size={16}
                    aria-hidden
                    className="mt-1 shrink-0 -translate-x-1 opacity-0 transition-all duration-base group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-accent-deep"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="home-tools section border-t border-rule">
        <div className="container-page">
          <SectionHeading
            refNo="05"
            eyebrow="Free tools"
            title="Answers before anyone asks for your number"
            lead="Nobody else in this market publishes their process. We built tools on top of ours."
            className="mb-10"
          />
          <div className="reveal grid gap-4 md:grid-cols-2">
            <Link
              href="/tools/approval-finder"
              className="dossier-card desert-contours group flex flex-col justify-between p-7 sm:p-9"
            >
              <div>
                <Compass size={26} aria-hidden className="text-accent" />
                <h3 className="mt-4 font-display text-xl">Approval Finder</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                  Answer five questions about your unit and project. Get your authority map, the
                  NOCs you'll need, and a realistic timeline — in under a minute, no contact
                  details required.
                </p>
              </div>
              <span className="btn-primary mt-7 self-start transition-colors group-hover:bg-accent">
                Find my approvals
                <ArrowRight size={14} aria-hidden />
              </span>
            </Link>
            <Link
              href="/tools/cost-calculator"
              className="dossier-card desert-contours group flex flex-col justify-between p-7 sm:p-9"
            >
              <div>
                <Calculator size={26} aria-hidden className="text-accent" />
                <h3 className="mt-4 font-display text-xl">Permit Cost Calculator</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                  Dubai Municipality charges AED 1 per sq ft — plus fixed fees, DCD charges and
                  deposits. Enter your area and project type for an instant government-fee
                  estimate.
                </p>
              </div>
              <span className="btn-primary mt-7 self-start transition-colors group-hover:bg-accent">
                Estimate my fees
                <ArrowRight size={14} aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Rescue strip */}
      <section className="home-rescue border-t border-paper/25">
        <div className="home-rescue-content container-page section-sm">
          <div className="reveal flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <LifeBuoy size={26} aria-hidden className="mt-1 shrink-0 text-accent" />
              <div>
                <h2 className="font-display text-xl text-paper">
                  Rejected? Stalled? Built without a permit?
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-paper/80">
                  Our approval-rescue desk audits the real position and quotes a fixed price to
                  clean it — rejected submissions, dormant applications, unapproved works,
                  failed inspections. The autopsy is free.
                </p>
              </div>
            </div>
            <Link href="/services/regularisation-approval-rescue" className="btn-primary shrink-0">
              Approval rescue
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="home-guides section border-t border-rule">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              refNo="06"
              eyebrow="Guides"
              title="The knowledge, published"
              lead="Costs, timelines, documents, rejection reasons — the questions everyone else answers with 'contact us'."
            />
            <Link href="/resources" className="btn-outline reveal shrink-0">
              All guides
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
          <div className="home-guides-grid reveal grid gap-0 md:grid-cols-2 md:gap-x-12">
            {GUIDES.slice(0, 6).map((g, i) => (
              <Link
                key={g.slug}
                href={`/resources/${g.slug}`}
                className="ledger-row group grid-cols-[2.6rem_1fr_auto] items-baseline gap-3"
              >
                <span className="ref-no">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-display text-lg leading-snug transition-colors group-hover:text-accent-deep">
                    {g.name}
                  </span>
                  <span className="mt-1 block max-w-lg text-sm text-ink-mute">
                    {g.intro[0].slice(0, 110)}…
                  </span>
                </span>
                <ArrowRight
                  size={15}
                  aria-hidden
                  className="self-center transition-transform group-hover:translate-x-1 group-hover:text-accent-deep"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted partners */}
      <PartnerMarquee />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ excerpt */}
      <section className="home-faq section border-t border-rule bg-paper-warm/60">
        <div className="container-page">
          <SectionHeading
            refNo="08"
            eyebrow="Questions"
            title="Asked constantly. Answered plainly."
            className="mb-10"
          />
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <FaqVisual className="hidden lg:block lg:sticky lg:top-28 lg:self-start" />
            <div className="reveal">
              <Accordion items={HOME_FAQS} />
              <Link
                href="/faq"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-deep hover:text-ink"
              >
                All questions <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
