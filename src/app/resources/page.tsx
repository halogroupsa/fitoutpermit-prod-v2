import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GUIDES } from "@/data/guides";
import { pickFaqs } from "@/data/faqs";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { LandingFaq } from "@/components/sections/landing-faq";
import { SmartImage } from "@/components/ui/smart-image";

export const metadata: Metadata = {
  title: "Fit-Out Permit Guides Dubai | Costs, Process, Documents & Timelines",
  description:
    "Free, specific guides to Dubai fit-out permits: the full process, real costs, document checklists, authority comparisons, timelines, rejection reasons and completion certificates.",
  alternates: { canonical: "/resources" },
};

const TOPICS = [
  "Process",
  "Costs",
  "Documents",
  "Timelines",
  "Authorities",
  "Rejections",
  "Completion",
  "NOCs",
];

export default function ResourcesIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Guides" }]} />

      {/* Split editorial hero — a published-knowledge plate. Topic taxonomy on
          the left echoes the dossier-contents strip; reading desk on the right. */}
      <section className="border-b border-rule">
        <div className="container-page grid gap-10 py-10 md:py-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow">Guides</p>
            <h1 className="mt-4 max-w-2xl text-hero">
              The questions everyone else answers with &ldquo;contact us&rdquo;.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              Costs with numbers, timelines with dates, checklists you can actually run. Written by
              the team that files these applications daily — reviewed {new Date().getFullYear() === 2026 ? "July 2026" : "regularly"}.
            </p>
            <div className="mt-9 border-t border-rule pt-7">
              <p className="ref-no mb-3">What&rsquo;s covered</p>
              <ul className="flex flex-wrap gap-2">
                {TOPICS.map((t) => (
                  <li
                    key={t}
                    className="border border-rule-strong bg-paper px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative border border-rule">
            <SmartImage
              folder="process"
              base="drawings-desk"
              alt="Fit-out permit drawings and reference documents laid out on a review desk"
              ratio="4 / 3"
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="w-full"
            />
            <span className="stamp absolute right-4 top-4 bg-paper/92 px-3 py-1.5 text-xs text-accent-deep">
              {GUIDES.length} guides · Free
            </span>
            <div className="absolute -bottom-px -left-px h-10 w-10 border-b-4 border-l-4 border-accent" aria-hidden />
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-0 border-t border-rule md:grid-cols-2 md:gap-x-14">
          {GUIDES.map((g, i) => (
            <Link
              key={g.slug}
              href={`/resources/${g.slug}`}
              className="group grid grid-cols-[2.8rem_1fr_auto] items-baseline gap-3 border-b border-rule py-7"
            >
              <span className="font-display text-xl leading-none text-ink-mute/50 transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <h2 className="font-display text-xl leading-snug transition-colors group-hover:text-accent-deep">
                  {g.name}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-mute">
                  {g.metaDescription}
                </p>
              </span>
              <ArrowRight
                size={16}
                aria-hidden
                className="self-center transition-transform group-hover:translate-x-1 group-hover:text-accent-deep"
              />
            </Link>
          ))}
        </div>
      </section>

      <LandingFaq
        title="Quick answers. The guides hold the long versions."
        lead="When one paragraph is enough, it's here — when it isn't, the matching guide above goes deeper."
        faqs={pickFaqs([
          "My permit application was rejected. Can you take it over?",
          "How long does approval take?",
          "Do you cover Abu Dhabi and other emirates?",
          "Who is behind FitOutPermits.ae?",
        ])}
      />

      <CtaBand />
    </>
  );
}
