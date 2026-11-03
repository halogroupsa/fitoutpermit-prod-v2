"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";

/**
 * Permit cost calculator — government-fee estimate from published structures.
 * DM headline: AED 1.00 / sq ft BUA. Other jurisdictions modelled as ranges.
 * Deliberately conservative and labelled indicative; consultancy quoted separately.
 */

const JURISDICTIONS = [
  { label: "Dubai Municipality (mainland)", perSqft: [1.0, 1.0], fixed: [540, 720] },
  { label: "DDA (TECOM districts)", perSqft: [0.8, 1.4], fixed: [800, 1500] },
  { label: "DMCC / Concordia (JLT)", perSqft: [0.6, 1.2], fixed: [1000, 2200] },
  { label: "Trakhees (Palm / PCFC)", perSqft: [1.0, 1.8], fixed: [1200, 2500] },
  { label: "DIFC", perSqft: [1.2, 2.0], fixed: [1500, 3000] },
  { label: "Free zone (JAFZA / Dubai South / DSO)", perSqft: [0.8, 1.6], fixed: [1000, 2500] },
] as const;

const PROJECT_ADDONS = [
  { label: "Office / retail (standard)", dcd: [800, 1500], extra: [0, 0], extraLabel: null },
  { label: "Restaurant / café", dcd: [1500, 3500], extra: [1500, 4000], extraLabel: "Food safety + DEWA load" },
  { label: "Clinic / pharmacy", dcd: [1200, 2500], extra: [2500, 6000], extraLabel: "DHA facility review + DEWA" },
  { label: "Gym / salon", dcd: [1000, 2200], extra: [800, 2500], extraLabel: "DEWA load / health review" },
  { label: "Warehouse modification", dcd: [1500, 4000], extra: [1000, 4000], extraLabel: "Structural review" },
  { label: "Villa renovation", dcd: [0, 800], extra: [1500, 6000], extraLabel: "Developer NOC + DEWA" },
] as const;

const fmt = (n: number) => `AED ${Math.round(n).toLocaleString()}`;

export function CostCalculator() {
  const [sqft, setSqft] = useState(1500);
  const [jur, setJur] = useState(0);
  const [proj, setProj] = useState(0);

  const est = useMemo(() => {
    const j = JURISDICTIONS[jur];
    const p = PROJECT_ADDONS[proj];
    const permitLow = sqft * j.perSqft[0] + j.fixed[0];
    const permitHigh = sqft * j.perSqft[1] + j.fixed[1];
    const low = permitLow + p.dcd[0] + p.extra[0];
    const high = permitHigh + p.dcd[1] + p.extra[1];
    return { j, p, permitLow, permitHigh, low, high };
  }, [sqft, jur, proj]);

  const whatsapp = useMemo(() => {
    const text = encodeURIComponent(
      `Hello, I used the cost calculator on fitoutpermits.ae.\nJurisdiction: ${est.j.label}\nProject: ${est.p.label}\nArea: ${sqft.toLocaleString()} sq ft\nEstimated government fees: ${fmt(est.low)} – ${fmt(est.high)}\nCould you confirm and quote the consultancy fee?`,
    );
    return `https://wa.me/${SITE.whatsapp}?text=${text}`;
  }, [est, sqft]);

  return (
    <div className="grid gap-0 border border-rule lg:grid-cols-[1.1fr_1fr]">
      {/* Inputs */}
      <div className="border-b border-rule p-5 sm:p-8 lg:border-b-0 lg:border-r">
        <label htmlFor="sqft" className="eyebrow">
          Unit area — built-up, sq ft
        </label>
        <div className="mt-3 flex items-center gap-4">
          <input
            id="sqft"
            type="range"
            min={200}
            max={20000}
            step={100}
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className="h-[3px] flex-1 cursor-pointer appearance-none bg-rule-strong accent-[#b3862f]"
          />
          <input
            type="number"
            aria-label="Area in square feet"
            value={sqft}
            min={100}
            max={100000}
            onChange={(e) => setSqft(Math.max(100, Number(e.target.value) || 100))}
            className="w-28 border border-rule bg-paper px-3 py-2 text-right font-mono text-sm"
          />
        </div>

        <p className="eyebrow mt-8">Jurisdiction</p>
        <div className="mt-3 grid gap-2">
          {JURISDICTIONS.map((j, i) => (
            <button
              key={j.label}
              type="button"
              onClick={() => setJur(i)}
              className={cn(
                "border border-rule px-4 py-2.5 text-left text-sm font-medium transition-colors hover:border-accent",
                jur === i && "border-accent bg-paper-warm",
              )}
            >
              {j.label}
            </button>
          ))}
        </div>

        <p className="eyebrow mt-8">Project type</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {PROJECT_ADDONS.map((p, i) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setProj(i)}
              className={cn(
                "border border-rule px-4 py-2.5 text-left text-sm font-medium transition-colors hover:border-accent",
                proj === i && "border-accent bg-paper-warm",
              )}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Output */}
      <div className="desert-contours flex flex-col bg-paper-warm p-5 sm:p-8">
        <p className="eyebrow">Estimated government fees</p>
        <p className="mt-3 font-display text-3xl leading-none">
          {fmt(est.low)} <span className="text-ink-mute">–</span> {fmt(est.high)}
        </p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-mute">
          {sqft.toLocaleString()} sq ft · {est.j.label}
        </p>

        <dl className="mt-7 border-t border-rule-strong">
          <div className="ledger-row grid-cols-[1fr_auto] !py-3 text-sm">
            <dt className="text-ink-soft">Fit-out permit fee ({est.j.label.split(" (")[0]})</dt>
            <dd className="font-mono">{fmt(est.permitLow)} – {fmt(est.permitHigh)}</dd>
          </div>
          <div className="ledger-row grid-cols-[1fr_auto] !py-3 text-sm">
            <dt className="text-ink-soft">Civil Defence review & inspection</dt>
            <dd className="font-mono">{fmt(est.p.dcd[0])} – {fmt(est.p.dcd[1])}</dd>
          </div>
          {est.p.extraLabel && (
            <div className="ledger-row grid-cols-[1fr_auto] !py-3 text-sm">
              <dt className="text-ink-soft">{est.p.extraLabel}</dt>
              <dd className="font-mono">{fmt(est.p.extra[0])} – {fmt(est.p.extra[1])}</dd>
            </div>
          )}
        </dl>

        <div className="mt-6 grid gap-2 text-sm leading-relaxed text-ink-soft">
          <p>
            <strong>Not included:</strong> refundable building deposits (AED 2,000–20,000,
            returned after clean completion) and our fixed consultancy fee — quoted after a free
            scope review, never bundled into government numbers.
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <MessageCircle size={15} aria-hidden />
            Get the exact quote
          </a>
          <Link href="/resources/fit-out-permit-cost-dubai" className="btn-outline">
            Read the cost guide
          </Link>
        </div>
        <p className="mt-5 font-mono text-2xs uppercase tracking-[0.12em] text-ink-mute">
          Indicative estimate from published fee structures, {SITE.lastReviewed}. Actual fees
          depend on scope &amp; authority schedules.
        </p>
      </div>
    </div>
  );
}
