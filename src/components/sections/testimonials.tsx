"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Quote, Star } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS, REVIEW_SUMMARY, type Testimonial } from "@/data/testimonials";

const AUTO_ROTATE_MS = 7000;
const SWIPE_THRESHOLD = 45;
const COUNT = TESTIMONIALS.length;

/**
 * Client stories presented as a 3D coverflow "wheel". The active card faces the
 * viewer while its neighbours rotate back in perspective, so advancing spins the
 * ring rather than sliding a strip. On mobile a single card is shown and it
 * rotates in/out; the whole stage is swipeable via pointer/touch drag.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [stageHeight, setStageHeight] = useState<number | undefined>(undefined);
  const dragStart = useRef<number | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (userPaused) return;

    const timeout = window.setTimeout(() => {
      setActive((current) => (current + 1) % COUNT);
    }, AUTO_ROTATE_MS);

    return () => window.clearTimeout(timeout);
  }, [active, userPaused]);

  // Size the stage to the active card's natural height, so it hugs whatever is
  // on screen — no clipping, and no dead space when a card is short. Cards are
  // absolutely stacked, so the stage needs an explicit height to occupy.
  useEffect(() => {
    const measure = () => {
      const card = cardRefs.current[active];
      if (card) setStageHeight(card.offsetHeight);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const go = (index: number) => {
    setActive(((index % COUNT) + COUNT) % COUNT);
  };

  // Shortest signed distance around the ring, so wrapping spins the short way.
  const ringOffset = (index: number) => {
    let offset = ((index - active) % COUNT + COUNT) % COUNT;
    if (offset > COUNT / 2) offset -= COUNT;
    return offset;
  };

  const onPointerDown = (event: React.PointerEvent) => {
    dragStart.current = event.clientX;
  };

  const onPointerUp = (event: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const delta = event.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    go(active + (delta < 0 ? 1 : -1));
  };

  return (
    <section
      className="home-testimonials section relative isolate overflow-hidden border-t border-paper/10"
      aria-labelledby="testimonials-heading"
      aria-roledescription="carousel"
    >
      <div className="container-page relative z-10">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <SectionHeading
            id="testimonials-heading"
            refNo="07"
            eyebrow="Client proof"
            title="When the pressure was on, the permit moved."
            lead="Six projects. Six different approval paths. One clear result: the client could keep building."
            onDark
          />

          <div className="testimonial-rating justify-self-start lg:justify-self-end">
            <div className="flex items-center gap-3">
              <strong className="font-display text-2xl leading-none text-paper">
                {REVIEW_SUMMARY.rating.toFixed(1)}
              </strong>
              <div>
                <div className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={14} className="fill-accent-soft text-accent-soft" />
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-paper/65">
                  <CountUp end={REVIEW_SUMMARY.count} suffix="+" /> client reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tstm-stage mt-10 sm:mt-12"
          style={stageHeight ? { height: stageHeight } : undefined}
          role="group"
          aria-roledescription="slide"
          aria-label={`Testimonial ${active + 1} of ${COUNT}`}
          aria-live={userPaused ? "polite" : "off"}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (dragStart.current = null)}
        >
          <div className="tstm-track">
            {TESTIMONIALS.map((testimonial, index) => {
              const offset = ringOffset(index);
              const hidden = Math.abs(offset) > 2;
              return (
                <div
                  key={testimonial.ref}
                  className="tstm-item"
                  data-pos={hidden ? undefined : offset}
                  data-hidden={hidden ? "true" : undefined}
                  aria-hidden={offset !== 0}
                >
                  <TestimonialCard
                    ref={(node) => {
                      cardRefs.current[index] = node;
                    }}
                    testimonial={testimonial}
                    position={index + 1}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-2" role="group" aria-label="Choose a testimonial">
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.ref}
                type="button"
                onClick={() => go(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={index === active}
                className="testimonial-selector"
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="testimonial-timer" aria-hidden="true">
              <span
                key={`${active}-${userPaused}`}
                className={userPaused ? "testimonial-timer-fill is-paused" : "testimonial-timer-fill"}
              />
            </div>
            <button
              type="button"
              onClick={() => setUserPaused((current) => !current)}
              aria-label={userPaused ? "Resume automatic testimonial rotation" : "Pause automatic testimonial rotation"}
              aria-pressed={userPaused}
              className="flex h-11 w-11 items-center justify-center border border-paper/25 bg-carbon/55 text-paper/75 transition-colors duration-base hover:border-accent-soft hover:text-accent-soft focus-visible:border-accent-soft"
            >
              {userPaused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            </button>
            <NavButton label="Previous testimonial" onClick={() => go(active - 1)}>
              <ChevronLeft size={18} aria-hidden="true" />
            </NavButton>
            <NavButton label="Next testimonial" onClick={() => go(active + 1)}>
              <ChevronRight size={18} aria-hidden="true" />
            </NavButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = forwardRef<
  HTMLElement,
  { testimonial: Testimonial; position: number }
>(function TestimonialCard({ testimonial, position }, ref) {
  return (
    <figure
      ref={ref}
      className="testimonial-card flex flex-col p-6 sm:p-7"
      aria-label={`Testimonial ${position} of ${TESTIMONIALS.length}`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-2xs uppercase leading-relaxed tracking-[0.15em] text-accent-soft">
          {testimonial.project}
        </p>
        <span className="font-mono text-2xs tabular-nums tracking-[0.12em] text-paper/35">
          {String(position).padStart(2, "0")}
        </span>
      </div>

      <blockquote className="relative mt-8">
        <Quote
          size={34}
          strokeWidth={1}
          aria-hidden="true"
          className="absolute -left-1 -top-4 text-accent/30"
        />
        <p className="relative text-sm leading-[1.7] text-paper/90">
          {testimonial.quote}
        </p>
      </blockquote>

      <figcaption className="mt-8 border-t border-paper/15 pt-5">
        <p className="font-mono text-2xs uppercase tracking-[0.15em] text-paper/40">
          Outcome
        </p>
        <p className="mt-1.5 font-display text-lg leading-snug text-accent-soft">
          {testimonial.outcome}
        </p>
        <div className="mt-5 border-t border-paper/10 pt-4">
          <p className="font-display text-lg text-paper">{testimonial.name}</p>
          <p className="mt-1 text-xs leading-relaxed text-paper/50">
            {testimonial.role} · {testimonial.company}
          </p>
          <p className="mt-2 font-mono text-2xs uppercase tracking-[0.12em] text-paper/40">
            {testimonial.authorities.join(" · ")}
          </p>
        </div>
      </figcaption>
    </figure>
  );
});

function NavButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center border border-paper/25 bg-carbon/55 text-paper/75 transition-colors duration-base hover:border-accent-soft hover:text-accent-soft focus-visible:border-accent-soft"
    >
      {children}
    </button>
  );
}
