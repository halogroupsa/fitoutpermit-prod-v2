import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECT_TYPES } from "@/data/project-types";
import { pickFaqs } from "@/data/faqs";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { LandingFaq } from "@/components/sections/landing-faq";
import { SmartImage } from "@/components/ui/smart-image";

export const metadata: Metadata = {
  title: "Fit-Out Permits by Project Type | Office, Restaurant, Clinic & More",
  description:
    "Dubai fit-out approvals by project type: offices, restaurants, cafés, retail, clinics, pharmacies, salons, gyms, warehouses, villas, hotels and nurseries — the exact authority mix for each.",
  alternates: { canonical: "/permits" },
};

const HERO_TILES = [
  "office-fit-out-permit",
  "restaurant-fit-out-approval",
  "retail-shop-approval",
  "clinic-fit-out-approval",
  "gym-fit-out-approval",
  "warehouse-modification-permit",
]
  .map((slug) => PROJECT_TYPES.find((p) => p.slug === slug))
  .filter((p) => p !== undefined);

const HERO_STATS = [
  { figure: String(PROJECT_TYPES.length), label: "project types on file" },
  { figure: "20+", label: "UAE authorities mapped" },
  { figure: "1", label: "managed process" },
];

export default function PermitsIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Project types" }]} />

      {/* Split editorial hero — text plate left, a contact sheet of project
          types right, signalling the variety the index covers. */}
      <section className="border-b border-rule">
        <div className="container-page grid gap-10 py-10 md:py-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow">Project types</p>
            <h1 className="mt-4 max-w-2xl text-hero">
              Approvals by what you&rsquo;re building.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              A restaurant triggers five authorities; an office two; a clinic four in a strict
              sequence. Each dossier covers the mix, documents, watch-outs and timelines for that
              project type.
            </p>
            <dl className="mt-9 grid max-w-lg grid-cols-3 gap-6 border-t border-rule pt-7">
              {HERO_STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl leading-none text-accent-deep">{s.figure}</dt>
                  <dd className="mt-2 text-sm leading-snug text-ink-mute">{s.label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/tools/approval-finder" className="btn-primary">
                Find my approvals
                <ArrowRight size={14} aria-hidden />
              </Link>
              <Link href="/approvals" className="btn-outline">
                Browse authorities
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-2">
              {HERO_TILES.map((p) => (
                <Link
                  key={p.slug}
                  href={`/permits/${p.slug}`}
                  className="group relative overflow-hidden border border-rule"
                >
                  <SmartImage
                    folder={p.heroImage.folder}
                    base={p.heroImage.base}
                    alt={p.heroImage.alt}
                    ratio="1 / 1"
                    sizes="(min-width: 1024px) 15vw, 30vw"
                    className="w-full transition-transform duration-base group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-carbon/85 to-transparent px-2.5 py-2 font-mono text-2xs uppercase tracking-[0.12em] text-paper">
                    {p.shortName}
                  </span>
                </Link>
              ))}
            </div>
            <span className="stamp absolute -top-3 -right-2 bg-paper px-3 py-1.5 text-xs text-accent-deep">
              {PROJECT_TYPES.length} dossiers
            </span>
            <div className="absolute -bottom-px -left-px h-10 w-10 border-b-4 border-l-4 border-accent" aria-hidden />
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {PROJECT_TYPES.map((p, i) => (
            <Link key={p.slug} href={`/permits/${p.slug}`} className="dossier-card group flex flex-col">
              <SmartImage
                folder={p.heroImage.folder}
                base={p.heroImage.base}
                alt={p.heroImage.alt}
                ratio="4 / 3"
                sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 46vw"
                className="w-full"
              />
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <span className="ref-no">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-1 font-display text-base leading-snug transition-colors group-hover:text-accent-deep sm:text-lg">
                  {p.name}
                </h2>
                <span className="mt-auto inline-flex items-center gap-2 pt-3 text-xs font-semibold text-accent-deep sm:text-sm">
                  Open the dossier
                  <ArrowRight size={13} aria-hidden className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <LandingFaq
        title="The basics, before you pick a dossier"
        lead="What a permit is, what it costs and how long it takes — the answers that apply to every project type. The type-specific ones live inside each dossier."
        faqs={pickFaqs([
          "What is a fit-out permit and do I really need one?",
          "How much does a fit-out permit cost in Dubai?",
          "How long does approval take?",
          "Can you guarantee approval by a specific date?",
        ])}
      />

      <CtaBand />
    </>
  );
}
