import type { Metadata } from "next";

// Internal design reference — kept out of search engines and the sitemap.
export const metadata: Metadata = {
  title: "Design Styles — Internal Reference",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

/* The canonical type scale — mirror of src/styles/tokens.css.
   If a size is added or changed there, update this table. */
const TYPE_SCALE = [
  { cls: "text-2xs", token: "--text-2xs", size: "0.6875rem · 11px", role: "Micro mono annotation — stamps, indices, legal footer" },
  { cls: "text-xs", token: "--text-xs", size: "0.75rem · 12px", role: "Mono labels, eyebrows, breadcrumbs, ref numbers" },
  { cls: "text-sm", token: "--text-sm", size: "0.875rem · 14px", role: "Secondary body, captions, buttons, menu descriptions" },
  { cls: "text-base", token: "--text-base", size: "1rem · 16px", role: "Body copy, list items" },
  { cls: "text-lg", token: "--text-lg", size: "clamp 1.05 → 1.175rem", role: "Card titles, emphasized copy" },
  { cls: "text-xl", token: "--text-xl", size: "clamp 1.2 → 1.5rem", role: "Sub-section titles" },
  { cls: "text-2xl", token: "--text-2xl", size: "clamp 1.4 → 2rem", role: "Panel headings, large stat numerals" },
  { cls: "text-3xl", token: "--text-3xl", size: "clamp 1.5 → 2.2rem", role: "Section headings (SectionHeading)" },
  { cls: "text-4xl", token: "--text-4xl", size: "clamp 2.05 → 3.65rem", role: "Page-level statements, big numerals" },
  { cls: "text-display", token: "--text-display", size: "clamp 2.4 → 5.7rem", role: "Editorial display moments" },
  { cls: "text-hero", token: "--text-hero", size: "clamp 1.9 → 3.4rem", role: "Hero / page H1" },
] as const;

const COLORS = [
  { name: "paper", varName: "--color-paper", hex: "#f8f6f1" },
  { name: "paper-warm", varName: "--color-paper-warm", hex: "#f1ecdf" },
  { name: "paper-deep", varName: "--color-paper-deep", hex: "#e5ddc9" },
  { name: "ink", varName: "--color-ink", hex: "#16130e" },
  { name: "ink-soft", varName: "--color-ink-soft", hex: "#3c372e" },
  { name: "ink-mute", varName: "--color-ink-mute", hex: "#7b7466" },
  { name: "carbon", varName: "--color-carbon", hex: "#14100a" },
  { name: "carbon-deep", varName: "--color-carbon-deep", hex: "#0b0804" },
  { name: "accent", varName: "--color-accent", hex: "#b3862f" },
  { name: "accent-soft", varName: "--color-accent-soft", hex: "#d8bc7c" },
  { name: "accent-deep", varName: "--color-accent-deep", hex: "#7f5e1e" },
  { name: "steel", varName: "--color-steel", hex: "#4d6072" },
  { name: "approve", varName: "--color-approve", hex: "#3e6b4f" },
  { name: "rule", varName: "--color-rule", hex: "#e0d9c8" },
  { name: "rule-strong", varName: "--color-rule-strong", hex: "#c8bda2" },
] as const;

const WEIGHTS = [
  { w: "300", name: "Light" },
  { w: "400", name: "Regular" },
  { w: "500", name: "Medium" },
  { w: "600", name: "Semibold" },
  { w: "700", name: "Bold" },
  { w: "800", name: "Extrabold" },
] as const;

function SpecimenLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-2xs uppercase tracking-[0.16em] text-ink-mute">
      {children}
    </p>
  );
}

export default function DesignStylesPage() {
  return (
    <>
      <section className="container-page py-10 md:py-14">
        <p className="eyebrow">Internal · Not indexed</p>
        <h1 className="mt-4 max-w-3xl text-hero">Design styles</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
          The canonical typography, colour and component reference for
          fitoutpermits.ae. Every size on this page is a token — if a style is
          not here, it does not exist.
        </p>
      </section>

      {/* ============ Type scale ============ */}
      <section className="container-page section-sm">
        <p className="eyebrow">01 · Type scale</p>
        <div className="mt-6 border-t border-rule">
          {TYPE_SCALE.map((t) => (
            <div
              key={t.cls}
              className="grid gap-2 border-b border-rule py-5 md:grid-cols-[14rem_1fr] md:items-baseline md:gap-8"
            >
              <div>
                <p className="font-mono text-xs tracking-[0.08em] text-accent-deep">.{t.cls}</p>
                <p className="mt-1 font-mono text-2xs uppercase tracking-[0.12em] text-ink-mute">
                  {t.token} · {t.size}
                </p>
                <p className="mt-1 text-sm text-ink-mute">{t.role}</p>
              </div>
              <p className={`${t.cls} min-w-0 font-display leading-tight`}>
                Permit approved, keys handed over.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Type roles in context ============ */}
      <section className="container-page section-sm">
        <p className="eyebrow">02 · Roles in context</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <div className="dossier-card p-7">
            <SpecimenLabel>Section header pattern</SpecimenLabel>
            <div className="mt-5 flex items-baseline gap-4">
              <span className="ref-no">REF 04</span>
              <p className="eyebrow">Approvals desk</p>
            </div>
            <h2 className="mt-4 text-3xl">One desk for every authority.</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Lead paragraph — text-base, ink-soft, relaxed leading. Sets up
              the section in one or two sentences.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Body copy — text-base at 16px. Dubai Municipality, DDA, Trakhees,
              JAFZA and DCD each read drawings differently; we submit in the
              format each one expects.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-mute">
              Caption / secondary — text-sm. Indicative figures only; final
              fees are confirmed on scope.
            </p>
          </div>
          <div className="dossier-card bg-carbon p-7 text-paper">
            <SpecimenLabel>Mono annotation voice (dark)</SpecimenLabel>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-accent-soft">
              Label — text-xs mono · file no. FP-2214
            </p>
            <p className="mt-3 font-mono text-2xs uppercase tracking-[0.14em] text-paper/50">
              Micro annotation — text-2xs mono · rev 03 · issued for approval
            </p>
            <p className="mt-6 font-display text-2xl text-accent-soft">14 days</p>
            <p className="mt-1 font-mono text-2xs uppercase tracking-[0.14em] text-paper/50">
              Stat numeral — text-2xl display
            </p>
            <div className="mt-7">
              <span className="stamp border-approve-soft text-2xs text-approve-soft">
                Approved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Font families & weights ============ */}
      <section className="container-page section-sm">
        <p className="eyebrow">03 · Families &amp; weights</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="dossier-card p-7">
            <SpecimenLabel>Display — Land Rover Web</SpecimenLabel>
            <p className="mt-4 font-display text-2xl leading-tight">
              Fit-out permits, cleared for work.
            </p>
            <p className="mt-3 text-sm text-ink-mute">
              Headings and titles only. Ships in a single bold cut.
            </p>
          </div>
          <div className="dossier-card p-7">
            <SpecimenLabel>Sans — Manrope</SpecimenLabel>
            <div className="mt-4 grid gap-1.5">
              {WEIGHTS.map((w) => (
                <p key={w.w} className="text-base" style={{ fontWeight: Number(w.w) }}>
                  {w.w} {w.name} — Approvals without the runaround
                </p>
              ))}
            </div>
          </div>
          <div className="dossier-card p-7">
            <SpecimenLabel>Mono — ui-monospace</SpecimenLabel>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
              Annotation voice · DM-BLD-0148
            </p>
            <p className="mt-3 text-sm text-ink-mute">
              Labels, eyebrows, reference numbers and stamps. Always uppercase,
              always tracked, never below text-2xs.
            </p>
          </div>
        </div>
      </section>

      {/* ============ Colour tokens ============ */}
      <section className="container-page section-sm">
        <p className="eyebrow">04 · Colour tokens</p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {COLORS.map((c) => (
            <div key={c.name} className="border border-rule">
              <div className="h-16" style={{ backgroundColor: `var(${c.varName})` }} />
              <div className="border-t border-rule px-3 py-2">
                <p className="font-mono text-2xs uppercase tracking-[0.1em] text-ink">{c.name}</p>
                <p className="font-mono text-2xs uppercase tracking-[0.1em] text-ink-mute">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ Buttons & interactive ============ */}
      <section className="container-page section-sm pb-24">
        <p className="eyebrow">05 · Buttons &amp; marks</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="dossier-card p-7">
            <SpecimenLabel>Buttons — text-sm, uppercase, tracked</SpecimenLabel>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button type="button" className="btn-primary">Start your permit</button>
              <button type="button" className="btn-gold">Get a quote</button>
              <button type="button" className="btn-outline">See the process</button>
            </div>
          </div>
          <div className="dossier-card p-7">
            <SpecimenLabel>Document marks</SpecimenLabel>
            <div className="mt-5 flex flex-wrap items-center gap-6">
              <span className="stamp text-xs text-approve">Approved</span>
              <span className="ref-no">REF 12</span>
              <span className="eyebrow">Eyebrow label</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
