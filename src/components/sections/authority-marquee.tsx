import { AUTHORITIES } from "@/data/authorities";

/** Continuous mono ticker of every authority we file with. */
export function AuthorityMarquee() {
  const names = AUTHORITIES.map((a) => a.name);
  const row = [...names, ...names];
  return (
    <div className="section-authority-marquee overflow-hidden border-b border-rule bg-paper-warm py-3" aria-hidden>
      <div className="marquee-track items-center gap-10">
        {row.map((n, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 font-mono text-xs uppercase tracking-[0.2em] text-ink-mute"
          >
            {n}
            <span className="text-accent">✓</span>
          </span>
        ))}
      </div>
    </div>
  );
}
