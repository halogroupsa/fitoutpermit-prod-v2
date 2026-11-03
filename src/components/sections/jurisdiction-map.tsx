"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { cn } from "@/lib/cn";
import { SmartImage } from "@/components/ui/smart-image";
import { AUTHORITIES } from "@/data/authorities";

/**
 * "Who governs your unit?" — interactive jurisdiction explorer.
 * Pick an area of Dubai; see the authority that owns your permit.
 */
const AREAS: { area: string; hint: string; img: string; authority: string; extras?: string[] }[] = [
  { area: "Business Bay / Downtown / Deira / Al Quoz", hint: "Mainland Dubai", img: "business-bay", authority: "dubai-municipality-approval", extras: ["dubai-civil-defence-approval", "dewa-approval-noc"] },
  { area: "Internet City / Media City / d3", hint: "TECOM districts", img: "tecom-d3", authority: "dda-approval", extras: ["dubai-civil-defence-approval"] },
  { area: "JLT — Jumeirah Lakes Towers", hint: "DMCC free zone", img: "jlt", authority: "dmcc-approval", extras: ["dubai-civil-defence-approval"] },
  { area: "Palm Jumeirah / Dubai World", hint: "PCFC jurisdiction", img: "palm-jumeirah", authority: "trakhees-approval", extras: ["nakheel-noc", "dubai-civil-defence-approval"] },
  { area: "DIFC — Gate District", hint: "Financial centre", img: "difc", authority: "difc-fit-out-approval", extras: ["dubai-civil-defence-approval"] },
  { area: "Jebel Ali Free Zone", hint: "Industrial & logistics", img: "jafza", authority: "jafza-approval", extras: ["dubai-civil-defence-approval", "dewa-approval-noc"] },
  { area: "Dubai South / DWC", hint: "Aerotropolis", img: "dubai-south", authority: "dubai-south-approval", extras: ["dubai-civil-defence-approval"] },
  { area: "Silicon Oasis", hint: "DIEZ zone", img: "silicon-oasis", authority: "dubai-silicon-oasis-approval", extras: ["dubai-civil-defence-approval"] },
  { area: "Healthcare City", hint: "DHCA regime", img: "healthcare-city", authority: "dhcc-approval", extras: ["dubai-civil-defence-approval"] },
  { area: "Dubai Hills / Arabian Ranches / Emirates Living", hint: "Emaar communities", img: "dubai-hills", authority: "emaar-noc", extras: ["dubai-municipality-approval", "dewa-approval-noc"] },
  { area: "JVC / Al Furjan / Discovery Gardens", hint: "Nakheel communities", img: "jvc-nakheel", authority: "nakheel-noc", extras: ["dubai-municipality-approval"] },
];

function authorityMeta(slug: string) {
  return AUTHORITIES.find((a) => a.slug === slug);
}

const AUTO_ROTATE_MS = 4500;

export function JurisdictionMap() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const current = AREAS[active];
  const main = authorityMeta(current.authority);
  const extras = (current.extras ?? []).map(authorityMeta).filter(Boolean);

  // Center the active card by scrolling ONLY the track horizontally — never the
  // page (scrollIntoView would move the whole window vertically too).
  useEffect(() => {
    const track = trackRef.current;
    const card = track?.children[active] as HTMLElement | undefined;
    if (!track || !card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const target =
      track.scrollLeft + (cardRect.left - trackRect.left) - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  // Auto-advance, unless paused (hover/focus) or the user prefers reduced motion.
  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % AREAS.length), AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [paused]);

  function scrollByCards(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * Math.round(track.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <div
      className="section-jurisdiction-map reveal border border-rule"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Area carousel */}
      <div className="relative border-b border-rule">
        <div className="flex items-center justify-between gap-4 border-b border-rule px-5 py-3">
          <p className="ref-no">Select your area</p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous areas"
              onClick={() => scrollByCards(-1)}
              className="grid h-8 w-8 place-items-center border border-rule-strong text-ink-soft transition-colors hover:border-accent hover:text-accent-deep"
            >
              <ChevronLeft size={16} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next areas"
              onClick={() => scrollByCards(1)}
              className="grid h-8 w-8 place-items-center border border-rule-strong text-ink-soft transition-colors hover:border-accent hover:text-accent-deep"
            >
              <ChevronRight size={16} aria-hidden />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          role="tablist"
          aria-label="Dubai areas"
          className="flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth"
        >
          {AREAS.map((a, i) => (
            <button
              key={a.area}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "flex w-[13rem] shrink-0 snap-start flex-col gap-2 border-r border-rule px-5 py-4 text-left transition-colors last:border-r-0 sm:w-[15rem]",
                active === i ? "bg-carbon text-paper" : "hover:bg-paper-warm",
              )}
            >
              <span className="flex items-center justify-between">
                <span className={cn("ref-no", active === i && "text-accent-soft")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowRight
                  size={15}
                  aria-hidden
                  className={cn("transition-transform", active === i ? "translate-x-0 text-accent-soft" : "-translate-x-1 opacity-30")}
                />
              </span>
              <span>
                <span className="block text-sm font-semibold leading-snug">{a.area}</span>
                <span className={cn("mt-1 block text-xs", active === i ? "text-paper/55" : "text-ink-mute")}>
                  {a.hint}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Result panel */}
      <div className="jurisdiction-desert relative grid overflow-hidden gap-x-8 gap-y-6 bg-paper-warm p-5 sm:p-7 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <svg
          className="jurisdiction-desert-lines"
          viewBox="0 0 1200 520"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M-80 405 C105 280 222 270 374 348 S650 432 826 303 S1100 238 1280 334" />
          <path d="M-100 455 C90 340 260 332 422 404 S702 472 884 360 S1115 300 1300 390" />
          <path d="M-120 505 C92 420 286 398 470 455 S755 516 940 430 S1150 380 1320 448" />
          <path d="M695 337 C815 245 958 223 1085 270 S1235 335 1300 315" />
        </svg>
        {/* Left — authority detail */}
        <div className="relative z-[1] flex flex-col">
          <p className="eyebrow flex items-center gap-2">
            <MapPin size={13} aria-hidden />
            Your permit authority
          </p>
          <h3 className="mt-3 font-display text-xl">{main?.name}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
            {main?.jurisdiction}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">{main?.intro[0]}</p>

          {extras.length > 0 && (
            <div className="mt-5">
              <p className="ref-no mb-2">Usually alongside</p>
              <div className="flex flex-wrap gap-2">
                {extras.map((e) => (
                  <Link
                    key={e!.slug}
                    href={`/approvals/${e!.slug}`}
                    className="border border-rule-strong bg-paper px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft transition-colors hover:border-accent hover:text-accent-deep"
                  >
                    {e!.shortName}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/approvals/${main?.slug}`} className="btn-primary">
              {main?.shortName} approval guide
              <ArrowRight size={14} aria-hidden />
            </Link>
            <Link href="/tools/approval-finder" className="btn-outline">
              Full approval finder
            </Link>
          </div>
        </div>

        {/* Right — area photograph */}
        <figure className="relative z-[1] min-h-[16rem] overflow-hidden border border-rule">
          <SmartImage
            key={current.img}
            folder="jurisdictions"
            base={current.img}
            alt={current.area}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="absolute inset-0 h-full w-full"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-carbon/85 to-transparent px-4 py-3 text-paper">
            <span className="text-sm font-semibold leading-snug">{current.area}</span>
            <span className="ref-no shrink-0 text-accent-soft">{current.hint}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
