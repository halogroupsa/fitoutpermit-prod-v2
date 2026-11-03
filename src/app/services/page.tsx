import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, FileCheck2, Receipt, UserRound } from "lucide-react";
import { SERVICES, serviceBySlug } from "@/data/services";
import { pickFaqs } from "@/data/faqs";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { LandingFaq } from "@/components/sections/landing-faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { SmartImage } from "@/components/ui/smart-image";
import { ServiceIndex, type ServiceIndexGroup } from "@/components/interactive/service-index";
import { JsonLd } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fit-Out Approval Services Dubai | Permits, Drawings, NOCs & Rescue",
  description:
    "Everything the approvals side of a Dubai fit-out needs: permit management, permit-grade drawings, fire & life safety, NOC coordination, completion certificates, signage, food safety, rescue and white-label support.",
  alternates: { canonical: "/services" },
};

/* One-line descriptors for the index — written for scanning, grounded in each
   service dossier's own copy. */
const BLURBS: Record<string, string> = {
  "drawing-preparation":
    "Permit-grade architectural, MEP and fire sets — coordinated, code-referenced, engineer-stamped.",
  "fire-life-safety":
    "The full Civil Defence cycle: drawings, registered specialists, pre-walked inspections.",
  "authority-noc-coordination":
    "Landlord, developer and service-authority consents — sequenced, chased, deposits recovered.",
  "renovation-modification-permits":
    "Approval history, as-built reality and current code — reconciled before the authority finds the gap.",
  "signage-permits":
    "Design compliance, permits and sign-off, so the shopfront lights up when the shop does.",
  "food-safety-approvals":
    "Kitchen layouts that pass the Food Safety Department's workflow review the first time.",
  "completion-certificates":
    "Final inspections, snag closure and the certificate that makes the unit legal to occupy.",
  "regularisation-approval-rescue":
    "Rejected, stalled or built without approval — audited honestly, fixed at a fixed price.",
};

function indexItem(slug: string) {
  const s = serviceBySlug(slug)!;
  return { slug: s.slug, name: s.name, blurb: BLURBS[slug] ?? s.intro[0], heroImage: s.heroImage };
}

const GROUPS: ServiceIndexGroup[] = [
  {
    refNo: "02",
    label: "Build the package",
    items: ["drawing-preparation", "fire-life-safety", "authority-noc-coordination"].map(indexItem),
  },
  {
    refNo: "03",
    label: "Specialist tracks",
    items: ["renovation-modification-permits", "signage-permits", "food-safety-approvals"].map(indexItem),
  },
  {
    refNo: "04",
    label: "Close out & rescue",
    items: ["completion-certificates", "regularisation-approval-rescue"].map(indexItem),
  },
];

const PROMISES = [
  {
    icon: BadgeCheck,
    label: "Fixed fees",
    body: "Quoted after the free scope review — before you commit to anything.",
  },
  {
    icon: Receipt,
    label: "Costs passed through",
    body: "Government charges at cost, receipts attached. Never marked up.",
  },
  {
    icon: UserRound,
    label: "One accountable owner",
    body: "A single project manager from the first NOC to the completion certificate.",
  },
];

export default function ServicesIndex() {
  const flagship = serviceBySlug("fit-out-permit-management")!;
  const whiteLabel = serviceBySlug("white-label-approvals")!;

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Fit-out approval services in Dubai",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${SITE.url}/services/${s.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* Split editorial opener with the engagement promises under a hairline */}
      <section className="border-b border-rule">
        <div className="container-page grid gap-10 py-10 md:py-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 max-w-3xl text-hero">
              The approvals side of your fit-out, as a service.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              Take the whole journey or the piece that&rsquo;s stuck. Ten services, one way of
              working — and every engagement starts the same way: a free scope review that tells
              you what your project actually needs before anyone is hired.
            </p>
            <div className="mt-9 grid gap-6 border-t border-rule pt-7 sm:grid-cols-3">
              {PROMISES.map((p) => (
                <div key={p.label}>
                  <p.icon size={20} aria-hidden className="text-accent" />
                  <p className="mt-3 font-display text-lg leading-snug">{p.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-mute">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative border border-rule">
            <SmartImage
              folder={flagship.heroImage.folder}
              base={flagship.heroImage.base}
              alt={flagship.heroImage.alt}
              ratio="4 / 3"
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="w-full"
            />
            <span className="stamp absolute right-4 top-4 bg-paper/92 px-3 py-1.5 text-xs text-accent-deep">
              Scope review · Free
            </span>
            <div className="absolute -bottom-px -left-px h-10 w-10 border-b-4 border-l-4 border-accent" aria-hidden />
          </div>
        </div>
      </section>

      {/* 01 — the flagship, given the whole desk */}
      <section className="section desert-contours border-b border-rule bg-paper-warm">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              refNo="01"
              eyebrow="The core service"
              title="Fit-Out Permit Management"
              lead={flagship.intro[0]}
            />
            <ul className="reveal mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {flagship.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                  <Check size={15} aria-hidden className="mt-1 shrink-0 text-accent-deep" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="reveal mt-9 flex flex-wrap gap-4">
              <Link href={`/services/${flagship.slug}`} className="btn-primary">
                The full service dossier
                <ArrowRight size={14} aria-hidden />
              </Link>
              <Link href="/contact" className="btn-outline">
                Start the free scope review
              </Link>
            </div>
          </div>
          <div className="reveal self-center">
            <div className="relative border border-rule">
              <SmartImage
                folder="services"
                base="noc"
                alt="Signed no-objection certificates and approval letters organised in a project dossier"
                ratio="4 / 3"
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="w-full"
              />
            </div>
            <p className="border border-t-0 border-rule bg-carbon px-4 py-3 font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-paper/70">
              DM · DCD · DDA · Trakhees · DMCC · DIFC · free zones —{" "}
              <span className="text-accent-soft">run as one programme</span>
            </p>
          </div>
        </div>
      </section>

      {/* 02–04 — the index, with a live preview plate */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="The full index"
            title="Or take just the piece that's stuck"
            lead="Every service below runs standalone — its own fixed fee, its own tracker — and each one hands over cleanly to the next when you want to extend."
            className="mb-12"
          />
          <div className="reveal">
            <ServiceIndex groups={GROUPS} />
          </div>
        </div>
      </section>

      {/* How every engagement runs — the flagship's own process, page-wide */}
      <section className="section border-t border-rule bg-paper-warm/60">
        <div className="container-page">
          <SectionHeading
            refNo="05"
            eyebrow="How it runs"
            title="Every engagement, the same four moves"
            lead="Whichever service you take, the shape is identical — which is why the tracker is readable and the quote holds."
            className="mb-12"
          />
          <ol className="reveal grid gap-px border border-rule bg-rule md:grid-cols-2 xl:grid-cols-4">
            {flagship.steps.map((step, i) => (
              <li key={step.title} className="desert-contours flex flex-col bg-paper p-6">
                <span className="ref-no">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-lg leading-snug">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 — white-label, the trade-facing offer, on its own dark band */}
      <section className="services-whitelabel border-t border-paper/25 text-paper">
        <div className="container-page section-sm">
          <div className="reveal max-w-3xl">
            <div className="flex items-baseline gap-4">
              <span className="ref-no text-paper/40">06</span>
              <p className="eyebrow eyebrow-on-dark">For contractors, designers &amp; PMs</p>
            </div>
            <h2 className="mt-4 text-3xl text-paper">
              Your approvals department. Your brand on the door.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/75">
              We run permits under your client relationship — strictly non-competing, drawings and
              client details under NDA, priced for volume. Your PMs run projects; we run the
              portals.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {["Non-competing by design", "NDA as standard", "Volume or per-project pricing", "A tracker your clients can read"].map(
                (chip) => (
                  <li
                    key={chip}
                    className="flex items-center gap-2 border border-paper/30 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-paper/75"
                  >
                    <FileCheck2 size={13} aria-hidden className="text-accent-soft" />
                    {chip}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={`/services/${whiteLabel.slug}`} className="btn-gold">
                White-label approvals
                <ArrowRight size={14} aria-hidden />
              </Link>
              <Link href="/for-contractors" className="btn-outline btn-outline-on-dark">
                How we work with firms
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LandingFaq
        refNo="07"
        title="Working with us, before you commit"
        lead="Fees, boundaries and fit — the questions clients and firms ask before the first engagement."
        faqs={pickFaqs([
          "What does FitOutPermits.ae actually do?",
          "Are you a fit-out contractor?",
          "What are your fees?",
          "Do you work with our existing designer and contractor?",
          "How do we start?",
        ])}
      />

      <CtaBand
        title="Not sure which service fits? Describe the project instead."
        lead="Send the unit location, current status and intended works — we'll map the services your project actually needs, with a fixed quote for each. Free, usually within one business day."
      />
    </>
  );
}
