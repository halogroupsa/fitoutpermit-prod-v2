import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Building2, KeyRound, Layers } from "lucide-react";
import { AUTHORITIES } from "@/data/authorities";
import { pickFaqs } from "@/data/faqs";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { LandingFaq } from "@/components/sections/landing-faq";
import { JurisdictionMap } from "@/components/sections/jurisdiction-map";
import { SectionHeading } from "@/components/ui/section-heading";
import { SmartImage } from "@/components/ui/smart-image";
import { JsonLd } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Authority Approvals Dubai | DM, DCD, Trakhees, DDA & Free Zones",
  description:
    "Every Dubai fit-out authority in one place: Dubai Municipality, Civil Defence, DDA, Trakhees, DMCC, JAFZA, DIFC, DEWA, RTA and more — requirements, documents, fees and process for each.",
  alternates: { canonical: "/approvals" },
};

/* The registry's three sections. An authority added to the data but not yet
   filed here falls back into Section A, so nothing silently disappears. */
const BUILDING_CONTROL_SLUGS = [
  "dubai-municipality-approval",
  "dda-approval",
  "trakhees-approval",
  "dmcc-approval",
  "difc-fit-out-approval",
  "jafza-approval",
  "dubai-south-approval",
  "dubai-silicon-oasis-approval",
  "dhcc-approval",
];
const EMIRATE_WIDE_SLUGS = ["dubai-civil-defence-approval", "dewa-approval-noc", "rta-noc", "dha-approval"];
const DEVELOPER_SLUGS = ["nakheel-noc", "emaar-noc"];

function bySlugs(slugs: string[]) {
  return slugs.map((s) => AUTHORITIES.find((a) => a.slug === s)).filter((a) => a !== undefined);
}

export default function ApprovalsIndex() {
  const filed = new Set([...BUILDING_CONTROL_SLUGS, ...EMIRATE_WIDE_SLUGS, ...DEVELOPER_SLUGS]);
  const buildingControl = [...bySlugs(BUILDING_CONTROL_SLUGS), ...AUTHORITIES.filter((a) => !filed.has(a.slug))];
  const emirateWide = bySlugs(EMIRATE_WIDE_SLUGS);
  const developers = bySlugs(DEVELOPER_SLUGS);

  /* Continuous registry numbering across all three sections. */
  const indexOf = (slug: string) =>
    String([...buildingControl, ...emirateWide, ...developers].findIndex((a) => a.slug === slug) + 1).padStart(2, "0");

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dubai fit-out approval authorities",
    itemListElement: AUTHORITIES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.name,
      url: `${SITE.url}/approvals/${a.slug}`,
    })),
  };

  const sections = [
    { href: "#building-control", label: "Building-control regimes", count: buildingControl.length, icon: Building2 },
    { href: "#emirate-wide", label: "Emirate-wide authorities", count: emirateWide.length, icon: Layers },
    { href: "#developer-nocs", label: "Master-developer NOCs", count: developers.length, icon: KeyRound },
  ];

  return (
    <>
      <JsonLd data={itemList} />
      <Breadcrumbs items={[{ label: "Authorities" }]} />

      {/* Registry opener — dark filing-room band over a fixed skyline */}
      <section className="approvals-registry mt-6 text-paper">
        <div className="container-page section-sm">
          <div className="reveal max-w-3xl">
            <p className="eyebrow eyebrow-on-dark">The authority registry</p>
            <h1 className="mt-4 text-hero text-paper">
              Every approval authority in Dubai. One dossier per regime.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/75">
              Your unit&rsquo;s address decides which of these owns your permit. Each dossier covers
              when approval is required, the documents, the process, indicative fees, rejection
              reasons and timelines — as we run them daily.
            </p>
          </div>

          <div className="reveal mt-10 grid gap-px border border-paper/20 bg-paper/20 sm:grid-cols-3">
            {sections.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="group flex items-start justify-between gap-4 bg-carbon-deep/80 p-5 transition-colors hover:bg-carbon-deep/60"
              >
                <span>
                  <s.icon size={20} aria-hidden className="text-accent-soft" />
                  <span className="mt-3 block font-display text-lg leading-snug text-paper">
                    {s.label}
                  </span>
                  <span className="mt-1 block font-mono text-xs uppercase tracking-[0.14em] text-paper/50">
                    {String(s.count).padStart(2, "0")} dossiers on file
                  </span>
                </span>
                <ArrowDownRight
                  size={16}
                  aria-hidden
                  className="mt-1 shrink-0 text-paper/40 transition-all group-hover:translate-y-0.5 group-hover:text-accent-soft"
                />
              </a>
            ))}
          </div>

          <p className="reveal mt-8 font-mono text-xs uppercase tracking-[0.16em] text-paper/45">
            {String(AUTHORITIES.length).padStart(2, "0")} authorities on file · Reviewed {SITE.lastReviewed}
          </p>
        </div>
      </section>

      {/* What every dossier contains — sets the reading contract up front */}
      <section className="border-b border-rule bg-paper-warm/60">
        <div className="container-page flex flex-wrap items-baseline gap-x-6 gap-y-2 py-4">
          <span className="eyebrow">Inside every dossier</span>
          {["When required", "Documents", "Process", "Fees", "Rejection reasons", "Timeline", "FAQs"].map((item, i) => (
            <span key={item} className="flex items-baseline gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-mute">
              <span className="text-accent-deep">{String(i + 1).padStart(2, "0")}</span>
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Section A — building-control regimes */}
      <section id="building-control" className="section scroll-mt-24">
        <div className="container-page">
          <SectionHeading
            refNo="REG A"
            eyebrow="Building-control regimes"
            title="Exactly one of these owns your permit"
            lead="Dubai runs parallel building-control regimes — mainland, free zones and the PCFC territories. Your address places you under precisely one of them, and its rules, portal and reviewers are yours for the whole project."
            className="mb-10"
          />
          <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buildingControl.map((a) => (
              <Link key={a.slug} href={`/approvals/${a.slug}`} className="dossier-card group flex flex-col">
                <SmartImage
                  folder={a.heroImage.folder}
                  base={a.heroImage.base}
                  alt={a.heroImage.alt}
                  ratio="16 / 9"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                  className="w-full"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="ref-no">{indexOf(a.slug)}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent-deep">
                      {a.shortName}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl leading-snug transition-colors group-hover:text-accent-deep">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{a.jurisdiction}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-accent-deep">
                    Read the dossier
                    <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section B — emirate-wide authorities */}
      <section id="emirate-wide" className="section scroll-mt-24 border-t border-rule bg-paper-warm/60">
        <div className="container-page">
          <SectionHeading
            refNo="REG B"
            eyebrow="Emirate-wide authorities"
            title="These stack on top, wherever you are"
            lead="They don't replace your building-control regime — they review alongside it. Civil Defence for anything touching fire and life safety, DEWA for power and water, RTA for roads and access, DHA for healthcare layouts."
            className="mb-10"
          />
          <div className="reveal grid gap-4 md:grid-cols-2">
            {emirateWide.map((a) => (
              <Link
                key={a.slug}
                href={`/approvals/${a.slug}`}
                className="dossier-card group grid grid-cols-[minmax(7rem,38%)_1fr] items-stretch"
              >
                <SmartImage
                  folder={a.heroImage.folder}
                  base={a.heroImage.base}
                  alt={a.heroImage.alt}
                  sizes="(min-width: 768px) 18vw, 38vw"
                  className="h-full min-h-[9rem] border-r border-rule"
                />
                <div className="flex min-w-0 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="ref-no">{indexOf(a.slug)}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent-deep">
                      {a.shortName}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl leading-snug transition-colors group-hover:text-accent-deep">
                    {a.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{a.jurisdiction}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-accent-deep">
                    Read the dossier
                    <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section C — master-developer NOCs */}
      <section id="developer-nocs" className="section scroll-mt-24 border-t border-rule">
        <div className="container-page">
          <SectionHeading
            refNo="REG C"
            eyebrow="Master-developer NOCs"
            title="The private consent before the public one"
            lead="In master communities the developer's no-objection certificate comes first — authorities won't open a review without it. It's the landlord layer of the approval stack, and it has its own checklists, deposits and clocks."
            className="mb-10"
          />
          <div className="reveal grid gap-4 md:grid-cols-2">
            {developers.map((a) => (
              <Link
                key={a.slug}
                href={`/approvals/${a.slug}`}
                className="dossier-card desert-contours group flex flex-col justify-between"
              >
                <SmartImage
                  folder={a.heroImage.folder}
                  base={a.heroImage.base}
                  alt={a.heroImage.alt}
                  ratio="21 / 9"
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="w-full"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="ref-no">{indexOf(a.slug)}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent-deep">
                      {a.shortName} NOC
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl leading-snug transition-colors group-hover:text-accent-deep">
                    {a.name}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-mute">{a.jurisdiction}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-accent-deep">
                    Read the dossier
                    <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locate your regime — the interactive explorer, for readers who arrived
          knowing their address rather than their authority */}
      <section className="section border-t border-rule bg-paper">
        <div className="container-page">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              refNo="REG D"
              eyebrow="Locate your regime"
              title="Know the address, not the authority?"
              lead="Pick your area of Dubai and the registry opens to the right page — the regime that owns your permit, plus the authorities that usually review alongside it."
            />
            <Link href="/tools/approval-finder" className="btn-outline reveal shrink-0">
              Full approval finder
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
          <JurisdictionMap />
        </div>
      </section>

      <LandingFaq
        refNo="REG E"
        title="Asked before every submission"
        lead="The questions that decide an approval strategy — answered plainly here, and in depth inside each dossier."
        faqs={pickFaqs([
          "Which authority issues my permit?",
          "Do you handle the Civil Defence side too?",
          "Can I start work while approval is pending?",
          "We did works without a permit years ago.",
        ])}
      />

      <CtaBand
        title="Not sure which of the fifteen applies? That's the free part."
        lead="Send the unit location and intended works — we'll return the exact authority map for your project, the documents each one wants, and a fixed quote. Usually within one business day."
      />
    </>
  );
}
