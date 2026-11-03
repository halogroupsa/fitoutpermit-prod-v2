import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Handshake, Lock, Scale, Timer } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqVisual } from "@/components/sections/faq-visual";
import { SmartImage } from "@/components/ui/smart-image";
import { ClauseHeading } from "@/components/sections/detail-blocks";
import { Accordion } from "@/components/ui/accordion";
import { serviceBySlug } from "@/data/services";
import { faqSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "For Contractors & Design Firms | White-Label Approvals Partner Dubai",
  description:
    "Fit-out contractors, interior designers and PMs: outsource authority approvals to a non-competing specialist desk. Your brand, our registrations — volume pricing, every UAE jurisdiction.",
  alternates: { canonical: "/for-contractors" },
};

export default function ForContractorsPage() {
  const svc = serviceBySlug("white-label-approvals")!;

  return (
    <>
      <JsonLd data={faqSchema(svc.faqs)} />
      <Breadcrumbs items={[{ label: "For contractors & designers" }]} />

      <section className="container-page grid gap-10 py-10 md:py-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow">B2B · white-label</p>
          <h1 className="mt-4 text-hero">
            Your approvals department. Our desk.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            For fit-out contractors, design studios and project managers: we run your permits
            under your client relationship — every UAE jurisdiction, volume pricing, strictly
            non-competing. Your PMs run projects. We run portals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-gold">
              Start with a pilot project <ArrowRight size={14} aria-hidden />
            </Link>
            <Link href="/services/white-label-approvals" className="btn-outline">
              Full service detail
            </Link>
          </div>
        </div>
        <div className="border border-rule">
          <SmartImage
            folder="services"
            base="white-label"
            alt="Contractor and approvals consultant coordinating on site in Dubai"
            ratio="4 / 3"
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="w-full"
          />
        </div>
      </section>

      <section className="container-page section-sm">
        <ClauseHeading no="01" title="The deal, plainly" />
        <div className="reveal grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Lock,
              title: "Non-competing, by charter",
              body: "No contracting. No design. Your drawings and client details under NDA. We physically cannot steal your project — it's not a service we sell.",
            },
            {
              icon: Handshake,
              title: "Your brand forward",
              body: "Documents and correspondence carry your flag wherever regulation allows; where an authority needs our registration, we appear as your appointed consultant.",
            },
            {
              icon: Timer,
              title: "Portal-speed responses",
              body: "Comments answered same-week, inspections pre-walked, statuses tracked live. The cadence authorities reward, applied to your whole pipeline.",
            },
            {
              icon: Scale,
              title: "Volume pricing",
              body: "From ~3 concurrent projects, the monthly desk beats per-project fees — and always beats a senior hire who covers one jurisdiction and eventually resigns.",
            },
          ].map((c) => (
            <div key={c.title} className="dossier-card p-6">
              <c.icon size={22} aria-hidden className="text-accent" />
              <h3 className="mt-3 font-display text-lg">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page section-sm">
        <ClauseHeading no="02" title="What your firm hands over" />
        <ul className="reveal grid gap-0 md:grid-cols-2 md:gap-x-10">
          {svc.includes.map((item, i) => (
            <li key={i} className="ledger-row grid-cols-[2.2rem_1fr] gap-x-3 !py-3.5">
              <span className="ref-no">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-base leading-relaxed text-ink-soft">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page section-sm">
        <ClauseHeading no="03" title="Questions firms ask" />
        <div className="grid gap-8 lg:grid-cols-[minmax(12rem,0.62fr)_minmax(0,1.38fr)] lg:gap-12">
          <FaqVisual className="hidden lg:block lg:sticky lg:top-28 lg:self-start" />
          <div className="reveal">
            <Accordion items={svc.faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Test us on your ugliest stalled approval."
        lead="Most firms pilot with the file nobody wants to touch. Suits us — rescued approvals make the best references. NDA first, then send the mess."
      />
    </>
  );
}
