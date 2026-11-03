"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { SmartImage } from "@/components/ui/smart-image";

/**
 * The permit journey as an interactive ledger — hover/tap a row,
 * the plate on the right follows. The site's signature component.
 */
const STEPS = [
  {
    no: "01",
    title: "Scope review",
    detail:
      "Unit details in, authority map out: jurisdiction, consent chain, document checklist, government-fee estimate and a fixed quote. Free, within one business day.",
    image: { folder: "process", base: "site-survey", alt: "Site survey of a unit before fit-out permit application" },
    tag: "FREE · DAY 1",
  },
  {
    no: "02",
    title: "NOC chain",
    detail:
      "Landlord, building management and master-developer consents — started immediately, because this chain is the true critical path of most Dubai fit-outs.",
    image: { folder: "services", base: "noc", alt: "No-objection certificates being processed" },
    tag: "WEEK 1",
  },
  {
    no: "03",
    title: "Permit-grade drawings",
    detail:
      "Fresh survey, coordinated architectural + MEP + fire sets, engineer stamping through the right authority registrations. Authorities approve drawings — so we make them unarguable.",
    image: { folder: "services", base: "drawings", alt: "Coordinated permit drawings being prepared" },
    tag: "WEEK 1–2",
  },
  {
    no: "04",
    title: "Submission & comments",
    detail:
      "Filed on the correct portal with the correct codes; Civil Defence in parallel. Comments get engineering answers within days — the cadence portals reward.",
    image: { folder: "services", base: "permit-management", alt: "Authority portal submission and comment tracking" },
    tag: "WEEK 2–4",
  },
  {
    no: "05",
    title: "Compliant works",
    detail:
      "Your contractor builds to the stamped drawings while we keep permits, insurances and site documentation inspection-ready. Deviations get amended, not discovered.",
    image: { folder: "hero", base: "hero-site", alt: "Fit-out construction proceeding under a valid permit" },
    tag: "BUILD PHASE",
  },
  {
    no: "06",
    title: "Inspection & completion",
    detail:
      "We pre-walk every inspection before the inspector arrives, close observations fast, and deliver the completion certificate with the full handover file. Deposits recovered.",
    image: { folder: "services", base: "completion", alt: "Final inspection and completion certificate handover" },
    tag: "CLOSEOUT",
  },
];

export function ProcessLedger() {
  const [active, setActive] = useState(0);

  return (
    <div className="section-process-ledger reveal grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
      <ol className="order-2 lg:order-1">
        {STEPS.map((s, i) => (
          <li key={s.no}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={active === i}
              className={cn(
                "ledger-row w-full grid-cols-[3rem_1fr] gap-x-4 text-left transition-colors sm:grid-cols-[3.5rem_1fr_auto]",
                active === i && "bg-paper-warm/70",
              )}
            >
              <span
                className={cn(
                  "font-display text-xl leading-none transition-colors",
                  active === i ? "text-accent" : "text-ink-mute/50",
                )}
              >
                {s.no}
              </span>
              <span>
                <span className="block font-display text-lg sm:text-xl">{s.title}</span>
                <span
                  className={cn(
                    "mt-1.5 block max-w-xl text-sm leading-relaxed text-ink-soft transition-opacity sm:text-base",
                    active === i ? "opacity-100" : "opacity-70",
                  )}
                >
                  {s.detail}
                </span>
              </span>
              <span className="ref-no hidden self-start pt-1 sm:block">{s.tag}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="order-1 lg:order-2">
        <div className="lg:sticky lg:top-28">
          <div className="relative border border-rule">
            <SmartImage
              key={STEPS[active].image.base + active}
              folder={STEPS[active].image.folder}
              base={STEPS[active].image.base}
              alt={STEPS[active].image.alt}
              ratio="4 / 3"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="w-full"
            />
            <div className="absolute left-4 top-4 bg-paper px-3 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-ink">
              STEP {STEPS[active].no} — {STEPS[active].tag}
            </div>
          </div>
          <p className="mt-3 flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
            <span>The permit journey</span>
            <span className="stamp border-approve text-2xs text-approve">Approved</span>
          </p>
        </div>
      </div>
    </div>
  );
}
