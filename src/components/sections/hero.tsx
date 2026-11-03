"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, MessageCircle, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";
import { SmartImage } from "@/components/ui/smart-image";
import { CountUp } from "@/components/ui/count-up";

const SLIDES = [
  {
    base: "hero-skyline",
    alt: "Dubai skyline at golden hour spanning mainland and free-zone districts",
    caption: "Every jurisdiction in Dubai",
  },
  {
    base: "hero-drawings",
    alt: "Engineer stamping approved fit-out drawings at a drafting desk",
    caption: "Permit-grade drawings, stamped in-house",
  },
  {
    base: "hero-site",
    alt: "Commercial fit-out site in Dubai under compliant construction",
    caption: "Works that match their approvals",
  },
  {
    base: "hero-handover",
    alt: "Completed Dubai fit-out being handed over with completion certificate",
    caption: "Closed out to completion certificate",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 32 }, [
    Autoplay({ delay: 5200, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-hero relative bg-carbon text-paper" aria-label="Introduction">
      {/* Slides */}
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef} aria-hidden>
        <div className="flex h-full">
          {SLIDES.map((s, i) => (
            <div key={s.base} className="relative h-full min-w-0 flex-[0_0_100%]">
              <SmartImage
                folder="hero"
                base={s.base}
                alt={s.alt}
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-vignette)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-left)" }} />
      </div>

      {/* Content */}
      <div className="container-page relative flex min-h-[86svh] flex-col justify-end pb-14 pt-32 md:min-h-[88svh] md:pb-20">
        <div className="max-w-3xl">
          <p className="eyebrow eyebrow-on-dark flex items-center gap-3">
            <BadgeCheck size={15} aria-hidden className="text-accent-soft" />
            Dubai&rsquo;s fit-out permit consultants — driven by Halo
          </p>
          <h1 className="mt-5 text-hero text-paper">
            Fit-out permits, approved.
            <br />
            <span className="text-accent-soft">Drawings to completion certificate.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/80">
            Dubai Municipality, Civil Defence, Trakhees, DDA, DMCC and every free zone —
            one team manages your NOCs, drawings, submissions, comments and inspections.
            We don&rsquo;t build interiors. We get them approved.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/tools/approval-finder" className="btn-gold">
              Which approvals do I need?
              <ArrowRight size={15} aria-hidden />
            </Link>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-outline-on-dark"
            >
              <MessageCircle size={15} aria-hidden />
              WhatsApp a specialist
            </a>
          </div>
        </div>

        {/* Trust strip */}
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-paper/20 pt-8 sm:grid-cols-4">
          {[
            { end: SITE.stats.permits, suffix: "+", label: "Permits processed" },
            { end: SITE.stats.authorities, suffix: "+", label: "UAE authorities covered" },
            { end: SITE.stats.yearsHalo, suffix: "+", label: "Years of Halo group expertise" },
            { end: SITE.stats.responseHours, suffix: "h", label: "Typical first response" },
          ].map((s) => (
            <div key={s.label}>
              <dt className="order-2 mt-1 font-mono text-xs uppercase tracking-[0.16em] text-paper/55">
                {s.label}
              </dt>
              <dd className="order-1 font-display text-2xl leading-none text-paper">
                <CountUp end={s.end} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        {/* Slide progress */}
        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2" role="tablist" aria-label="Hero slides">
          {SLIDES.map((s, i) => (
            <button
              key={s.base}
              role="tab"
              aria-selected={selected === i}
              aria-label={`Slide ${i + 1}: ${s.caption}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-[3px] flex-1 max-w-24 overflow-hidden bg-paper/25 transition-colors",
                selected === i && "bg-accent-soft",
              )}
            />
          ))}
          <span className="ref-no w-full text-paper/50 sm:w-auto sm:shrink-0">
            {String(selected + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")} ·{" "}
            {SLIDES[selected].caption}
          </span>
        </div>
      </div>
    </section>
  );
}
