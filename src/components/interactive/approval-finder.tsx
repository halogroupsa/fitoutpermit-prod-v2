"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, RotateCcw } from "lucide-react";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";
import { AUTHORITIES } from "@/data/authorities";

/**
 * Approval Finder — five questions, no contact gate.
 * Output: authority map + consent chain + realistic timeline for the combo.
 */

type AreaOption = {
  label: string;
  hint: string;
  authority: string; // primary authority slug
  developer?: string; // developer NOC slug
};

const AREAS: AreaOption[] = [
  { label: "Mainland Dubai", hint: "Business Bay, Downtown, Deira, Al Quoz, Sheikh Zayed Rd…", authority: "dubai-municipality-approval" },
  { label: "TECOM district", hint: "Internet City, Media City, d3, Studio City…", authority: "dda-approval" },
  { label: "JLT", hint: "Jumeirah Lakes Towers (DMCC)", authority: "dmcc-approval" },
  { label: "Palm Jumeirah / Dubai World", hint: "Trakhees jurisdiction", authority: "trakhees-approval", developer: "nakheel-noc" },
  { label: "DIFC", hint: "Gate District & DIFC buildings", authority: "difc-fit-out-approval" },
  { label: "JAFZA", hint: "Jebel Ali Free Zone", authority: "jafza-approval" },
  { label: "Dubai South", hint: "Business Park, Logistics District, DWC", authority: "dubai-south-approval" },
  { label: "Silicon Oasis", hint: "DSO / DIEZ", authority: "dubai-silicon-oasis-approval" },
  { label: "Healthcare City", hint: "DHCC free zone", authority: "dhcc-approval" },
  { label: "Emaar community", hint: "Dubai Hills, Arabian Ranches, Downtown towers…", authority: "dubai-municipality-approval", developer: "emaar-noc" },
  { label: "Nakheel community", hint: "JVC, Al Furjan, Discovery Gardens…", authority: "dubai-municipality-approval", developer: "nakheel-noc" },
];

const PROJECTS = [
  { label: "Office", weeks: [2, 4], extras: [] as string[] },
  { label: "Restaurant / café", weeks: [4, 8], extras: ["food", "dewa"] },
  { label: "Retail shop", weeks: [3, 6], extras: [] as string[] },
  { label: "Clinic / pharmacy", weeks: [6, 10], extras: ["dha", "dewa"] },
  { label: "Salon / spa", weeks: [3, 6], extras: ["dewa"] },
  { label: "Gym / fitness", weeks: [3, 6], extras: ["dewa"] },
  { label: "Warehouse / industrial", weeks: [3, 6], extras: ["dewa"] },
  { label: "Villa renovation", weeks: [4, 8], extras: ["dewa"] },
];

const SCOPES = [
  { key: "partitions", label: "Partitions / ceilings change", dcd: true },
  { key: "structure", label: "Structural work (walls, slabs, mezzanine)", dcd: true, weeks: 2 },
  { key: "kitchen", label: "Commercial kitchen / cooking", dcd: true, food: true, dewa: true },
  { key: "power", label: "Significant new electrical load", dewa: true },
  { key: "signage", label: "External signage / shopfront", signage: true },
  { key: "outdoor", label: "Outdoor seating / works near the road", rta: true },
];

function authority(slug: string) {
  return AUTHORITIES.find((a) => a.slug === slug);
}

export function ApprovalFinder() {
  const [step, setStep] = useState(0);
  const [area, setArea] = useState<number | null>(null);
  const [project, setProject] = useState<number | null>(null);
  const [scopes, setScopes] = useState<Set<string>>(new Set());

  const toggleScope = (key: string) => {
    setScopes((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const result = useMemo(() => {
    if (area === null || project === null) return null;
    const a = AREAS[area];
    const p = PROJECTS[project];
    const chosen = SCOPES.filter((s) => scopes.has(s.key));

    const slugs = new Set<string>([a.authority]);
    if (a.developer) slugs.add(a.developer);

    const needsDcd = chosen.some((s) => "dcd" in s && s.dcd) || p.label !== "Office" || scopes.has("partitions");
    if (needsDcd) slugs.add("dubai-civil-defence-approval");
    if (p.extras.includes("dewa") || chosen.some((s) => "dewa" in s && s.dewa)) slugs.add("dewa-approval-noc");
    if (p.extras.includes("dha")) slugs.add("dha-approval");
    if (chosen.some((s) => "rta" in s && s.rta)) slugs.add("rta-noc");

    // Healthcare City replaces DHA with its own regime
    if (a.authority === "dhcc-approval") slugs.delete("dha-approval");

    const foodSafety = p.extras.includes("food") || chosen.some((s) => "food" in s && s.food);
    const signage = chosen.some((s) => "signage" in s && s.signage);

    let [wMin, wMax] = p.weeks;
    if (scopes.has("structure")) {
      wMin += 1;
      wMax += 2;
    }

    return {
      area: a,
      project: p,
      authorities: [...slugs].map(authority).filter(Boolean),
      foodSafety,
      signage,
      weeks: [wMin, wMax] as const,
    };
  }, [area, project, scopes]);

  const whatsapp = useMemo(() => {
    if (!result) return SITE.whatsappUrl;
    const text = encodeURIComponent(
      `Hello, I used the Approval Finder on fitoutpermits.ae.\nArea: ${result.area.label}\nProject: ${result.project.label}\nScope: ${[...scopes].join(", ") || "standard fit-out"}\nCould you confirm the requirements and send a quote?`,
    );
    return `https://wa.me/${SITE.whatsapp}?text=${text}`;
  }, [result, scopes]);

  const steps = ["Location", "Project", "Scope", "Result"];

  return (
    <div className="border border-rule">
      {/* Progress */}
      <div className="grid grid-cols-4 border-b border-rule">
        {steps.map((s, i) => (
          <div
            key={s}
            aria-current={step === i ? "step" : undefined}
            className={cn(
              "border-r border-rule px-3 py-2.5 font-mono text-2xs uppercase tracking-[0.14em] last:border-r-0 sm:text-xs",
              i < step && "bg-paper-warm text-accent-deep",
              i === step && "bg-carbon text-paper",
              i > step && "text-ink-mute",
            )}
          >
            {String(i + 1).padStart(2, "0")} {s}
          </div>
        ))}
      </div>

      <div className="p-5 sm:p-8">
        {step === 0 && (
          <fieldset>
            <legend className="font-display text-xl">Where is the unit?</legend>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {AREAS.map((a, i) => (
                <button
                  key={a.label}
                  type="button"
                  onClick={() => {
                    setArea(i);
                    setStep(1);
                  }}
                  className={cn(
                    "group flex items-start justify-between gap-3 border border-rule px-4 py-3.5 text-left transition-colors hover:border-accent hover:bg-paper-warm",
                    area === i && "border-accent bg-paper-warm",
                  )}
                >
                  <span>
                    <span className="block text-sm font-semibold">{a.label}</span>
                    <span className="block text-xs text-ink-mute">{a.hint}</span>
                  </span>
                  <ArrowRight size={14} aria-hidden className="mt-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend className="font-display text-xl">What are you building?</legend>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => {
                    setProject(i);
                    setStep(2);
                  }}
                  className={cn(
                    "border border-rule px-4 py-3.5 text-left text-sm font-semibold transition-colors hover:border-accent hover:bg-paper-warm",
                    project === i && "border-accent bg-paper-warm",
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="font-display text-xl">Which apply? (any or none)</legend>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {SCOPES.map((s) => (
                <label
                  key={s.key}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 border border-rule px-4 py-3.5 text-sm transition-colors hover:border-accent",
                    scopes.has(s.key) && "border-accent bg-paper-warm",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={scopes.has(s.key)}
                    onChange={() => toggleScope(s.key)}
                    className="h-4 w-4 accent-[#b3862f]"
                  />
                  <span className="font-medium">{s.label}</span>
                </label>
              ))}
            </div>
            <button type="button" onClick={() => setStep(3)} className="btn-gold mt-7">
              Show my approval map
              <ArrowRight size={14} aria-hidden />
            </button>
          </fieldset>
        )}

        {step === 3 && result && (
          <div>
            <p className="eyebrow">Your approval map</p>
            <h3 className="mt-3 font-display text-xl">
              {result.project.label} · {result.area.label}
            </h3>

            <ol className="mt-6">
              {result.authorities.map((a, i) => (
                <li key={a!.slug} className="ledger-row grid-cols-[2.4rem_1fr_auto] items-center gap-3 !py-3.5">
                  <span className="ref-no">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <Link href={`/approvals/${a!.slug}`} className="font-semibold hover:text-accent-deep">
                      {a!.name}
                    </Link>
                    <span className="block text-xs text-ink-mute">{a!.jurisdiction}</span>
                  </span>
                  <Link
                    href={`/approvals/${a!.slug}`}
                    className="font-mono text-xs uppercase tracking-[0.12em] text-accent-deep hover:text-ink"
                  >
                    Dossier →
                  </Link>
                </li>
              ))}
              {result.foodSafety && (
                <li className="ledger-row grid-cols-[2.4rem_1fr] items-center gap-3 !py-3.5">
                  <span className="ref-no">+</span>
                  <span className="text-sm text-ink-soft">
                    <Link href="/services/food-safety-approvals" className="font-semibold hover:text-accent-deep">
                      Dubai Municipality food-safety layout review
                    </Link>{" "}
                    — kitchens and food premises
                  </span>
                </li>
              )}
              {result.signage && (
                <li className="ledger-row grid-cols-[2.4rem_1fr] items-center gap-3 !py-3.5">
                  <span className="ref-no">+</span>
                  <span className="text-sm text-ink-soft">
                    <Link href="/services/signage-permits" className="font-semibold hover:text-accent-deep">
                      Signage permit
                    </Link>{" "}
                    — run it parallel to the main permit, not after
                  </span>
                </li>
              )}
            </ol>

            <div className="mt-6 border border-rule bg-paper-warm/60 p-5">
              <p className="ref-no">Realistic approvals window (permit stage)</p>
              <p className="mt-1 font-display text-2xl">
                {result.weeks[0]}–{result.weeks[1]} weeks
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                Assuming a complete package and a responsive landlord. The landlord/developer NOC
                chain is usually the critical path — start it the day commercial terms agree.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <MessageCircle size={15} aria-hidden />
                Confirm this with a specialist
              </a>
              <Link href="/tools/cost-calculator" className="btn-outline">
                Estimate the fees
              </Link>
              <button
                type="button"
                onClick={() => {
                  setStep(0);
                  setArea(null);
                  setProject(null);
                  setScopes(new Set());
                }}
                className="btn-outline"
              >
                <RotateCcw size={14} aria-hidden />
                Start over
              </button>
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.12em] text-ink-mute">
              Indicative only — buildings add their own conditions. The free specialist check makes it exact.
            </p>
          </div>
        )}

        {step > 0 && step < 3 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-mute hover:text-ink"
          >
            <ArrowLeft size={14} aria-hidden /> Back
          </button>
        )}
      </div>
    </div>
  );
}
