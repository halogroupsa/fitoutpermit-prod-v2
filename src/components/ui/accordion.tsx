"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Faq } from "@/data/types";

/**
 * Ledger-style FAQ accordion — hairline rows, mono index numbers,
 * native height animation via grid-template-rows.
 */
export function Accordion({ items, defaultOpen = 0 }: { items: Faq[]; defaultOpen?: number }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-t border-rule last:border-b">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="grid w-full grid-cols-[2.6rem_1fr_2rem] items-baseline gap-2 py-5 text-left"
            >
              <span className="ref-no">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={cn(
                  "text-base font-semibold leading-snug transition-colors sm:text-lg",
                  isOpen ? "text-accent-deep" : "text-ink",
                )}
              >
                {item.q}
              </span>
              <span className="justify-self-end">
                <Plus
                  size={18}
                  aria-hidden
                  className={cn(
                    "transition-transform duration-base ease-out-soft",
                    isOpen && "rotate-45 text-accent-deep",
                  )}
                />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-slow ease-out-soft",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="grid grid-cols-[2.6rem_1fr] gap-2 pb-6 pr-8">
                  <span aria-hidden />
                  <span className="max-w-3xl text-base leading-relaxed text-ink-soft">
                    {item.a}
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
