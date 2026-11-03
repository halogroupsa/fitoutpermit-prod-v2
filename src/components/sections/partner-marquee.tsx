import { PARTNERS } from "@/data/partners";
import { SectionHeading } from "@/components/ui/section-heading";

/**
 * Trusted-partner logo marquee — a single belt that rotates infinitely like a
 * wheel. The roster is duplicated so the -50% translate loops seamlessly.
 * Hovering pauses; reduced-motion collapses it to a wrapped, static grid.
 */
export function PartnerMarquee() {
  // Build a set wide enough to exceed the viewport, then duplicate it so the
  // -50% translate loops seamlessly with no empty gap on wide screens.
  const half = [...PARTNERS, ...PARTNERS];
  const row = [...half, ...half];

  return (
    <section className="section-sm border-t border-rule bg-paper-warm/60">
      <div className="container-page">
        <SectionHeading
          eyebrow="Trusted by"
          title="The developers, contractors and brands we file alongside"
          className="mb-10"
        />
      </div>

      <div className="partner-marquee reveal overflow-hidden">
        <div
          className="marquee-track marquee-track--slow items-center"
          aria-hidden
        >
          {row.map((p, i) => (
            <span
              key={`${p.name}-${i}`}
              className="flex h-20 w-48 shrink-0 items-center justify-center px-4 sm:w-56"
            >
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  className="max-h-12 w-auto max-w-full object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-14"
                />
              ) : (
                <span className="font-display text-xl uppercase tracking-[0.06em] text-ink-soft/70 sm:text-2xl">
                  {p.name}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
