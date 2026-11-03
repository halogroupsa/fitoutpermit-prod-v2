"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type DossierSection = { id: string; no: string; label: string };

/**
 * Sticky "dossier contents" rail with scroll-spy. The active row is the
 * top-most section currently inside the reading band, so the rail tracks the
 * reader down a long regulatory page. Degrades to a plain anchor list without JS.
 */
export function DossierContents({ items }: { items: DossierSection[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const inBand = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inBand[0]) setActive(inBand[0].target.id);
      },
      // Reading band: a section is "active" once its top passes ~28% down the
      // viewport, until it leaves through the top third.
      { rootMargin: "-28% 0px -62% 0px", threshold: 0 },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page">
      <p className="ref-no mb-4">Dossier contents</p>
      <ul className="grid border-l border-rule">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="-ml-px">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "grid grid-cols-[1.9rem_1fr] items-baseline gap-2 border-l-2 py-2.5 pl-4 transition-colors",
                  isActive
                    ? "border-accent text-ink"
                    : "border-transparent text-ink-mute hover:border-rule-strong hover:text-ink-soft",
                )}
              >
                <span className={cn("ref-no", isActive && "text-accent-deep")}>{item.no}</span>
                <span className="text-sm leading-snug">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
