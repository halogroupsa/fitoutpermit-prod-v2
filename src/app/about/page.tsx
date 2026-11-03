import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { SmartImage } from "@/components/ui/smart-image";
import { CountUp } from "@/components/ui/count-up";
import { ClauseHeading } from "@/components/sections/detail-blocks";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Dubai's Fit-Out Permit Specialists — Driven by Halo",
  description:
    "FitOutPermits.ae is the dedicated authority-approvals practice of the Halo group: 25+ years in Dubai interiors and property, 2,500+ permits processed across 20+ UAE authorities, based in Al Quoz.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const year = new Date().getFullYear();
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />

      <section className="container-page grid gap-10 py-10 md:py-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow">About us</p>
          <h1 className="mt-4 text-hero">
            The approvals desk of a group that has built Dubai interiors for {SITE.stats.yearsHalo}+ years.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            FitOutPermits.ae is the dedicated authority-approvals practice of{" "}
            <a href={SITE.parentUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent-deep underline decoration-accent/40 underline-offset-4 hover:text-ink">
              Halo
            </a>{" "}
            — the Dubai group behind halo.ae and joinery.ae. We spun the permits function into its
            own brand for one reason: approvals deserve specialists, not whoever on the project
            team was free that week.
          </p>
        </div>
        <div className="border border-rule">
          <SmartImage
            folder="about"
            base="team"
            alt="The FitOutPermits.ae approvals team at the Halo office in Al Quoz, Dubai"
            ratio="4 / 3"
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="w-full"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-rule bg-carbon text-paper">
        <div className="container-page">
          <dl className="grid grid-cols-2 divide-x divide-paper/12 md:grid-cols-4">
            {[
              { end: SITE.stats.permits, suffix: "+", label: "Permits processed" },
              { end: SITE.stats.authorities, suffix: "+", label: "UAE authorities" },
              { end: SITE.stats.yearsHalo, suffix: "+", label: "Years of Halo expertise" },
              { end: year - SITE.stats.yearsHalo, suffix: "", label: "Group established" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-8 text-center sm:px-6 md:py-10">
                <dd className="font-display text-2xl leading-none">
                  <CountUp end={s.end} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 font-mono text-2xs uppercase tracking-[0.16em] text-paper/55">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page section-sm max-w-none">
        <div className="mx-auto max-w-4xl">
          <ClauseHeading no="01" title="Why we exist" />
          <div className="reveal grid gap-5 text-base leading-relaxed text-ink-soft">
            <p>
              Halo's contracting and joinery teams spent two decades watching the same failure
              repeat across Dubai: excellent fit-out projects losing weeks — sometimes seasons —
              to approvals nobody truly owned. Drawings bounced between authorities, NOCs started
              late, inspections failed on details that were knowable in advance.
            </p>
            <p>
              So the group built what it wished existed: a desk that does only approvals, across
              every Dubai jurisdiction, with the registrations, portal fluency and authority
              relationships that come from filing daily at volume. First for Halo's own projects.
              Then, because the market kept asking, for everyone's.
            </p>
            <p>
              The independence is deliberate and permanent: we do not design interiors and we do
              not build them. Contractors and design studios are our clients and partners, never
              our competitors — which is exactly why they trust us with their drawings.
            </p>
          </div>

          <div className="mt-14">
            <ClauseHeading no="02" title="How we work" />
          </div>
          <ul className="reveal grid gap-0">
            {[
              ["One accountable project manager", "Every project gets a named owner for its NOCs, submissions, comments, inspections and certificate. Weekly one-page status. No portal-password roulette."],
              ["Fixed fees, pass-through costs", "Consultancy quoted fixed before we start; government fees at cost with receipts. If a proposal hides margin in the government column, it isn't ours."],
              ["Complete first submissions", "Fresh surveys, coordinated drawings, code references current. The fastest comment round is the one that never opens."],
              ["Honest timelines", "Authorities control their clocks; we control everything else. We promise our side and publish how the rest behaves."],
            ].map(([title, body], i) => (
              <li key={title} className="ledger-row grid-cols-[2.6rem_1fr] gap-x-4">
                <span className="ref-no">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg">{title}</h3>
                  <p className="mt-1.5 max-w-3xl text-base leading-relaxed text-ink-soft">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <ClauseHeading no="03" title="The Halo group" />
          </div>
          <div className="reveal grid gap-5 text-base leading-relaxed text-ink-soft">
            <p>
              Halo operates from a 15,000 sq ft facility on Marabea Street, Al Quoz — the working
              heart of Dubai's fit-out industry. The group spans interior contracting and
              renovation (halo.ae), bespoke joinery manufacturing (joinery.ae), and authority
              approvals (this practice). {SITE.stats.yearsHalo}+ years, one postcode, and the kind
              of institutional memory about Dubai's buildings that doesn't fit in a database.
            </p>
          </div>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a href={SITE.parentUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              halo.ae <ArrowRight size={14} aria-hidden />
            </a>
            <a href="https://joinery.ae" target="_blank" rel="noopener noreferrer" className="btn-outline">
              joinery.ae <ArrowRight size={14} aria-hidden />
            </a>
            <Link href="/for-contractors" className="btn-primary">
              Partner with us <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
