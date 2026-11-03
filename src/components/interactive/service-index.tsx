"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { SmartImage } from "@/components/ui/smart-image";
import type { ImageRef } from "@/data/types";

export type ServiceIndexItem = {
  slug: string;
  name: string;
  blurb: string;
  heroImage: ImageRef;
};

export type ServiceIndexGroup = {
  refNo: string;
  label: string;
  items: ServiceIndexItem[];
};

/**
 * Editorial service index: a ledger of services on the left, a sticky preview
 * plate on the right that swaps to whichever row is under the cursor or focus.
 * Below lg the plate is hidden and the ledger stands alone.
 */
export function ServiceIndex({ groups }: { groups: ServiceIndexGroup[] }) {
  const all = groups.flatMap((g) => g.items);
  const [active, setActive] = useState(all[0]);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-14">
      <div>
        {groups.map((group) => (
          <section key={group.refNo} className="mb-10 last:mb-0">
            <header className="flex items-baseline gap-4 border-b-2 border-ink pb-3">
              <span className="ref-no">{group.refNo}</span>
              <h3 className="eyebrow">{group.label}</h3>
            </header>
            <ul>
              {group.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    onMouseEnter={() => setActive(item)}
                    onFocus={() => setActive(item)}
                    className={cn(
                      "ledger-row group grid-cols-[1fr_auto] items-center gap-4 px-2 transition-colors",
                      active.slug === item.slug && "bg-paper-warm/70",
                    )}
                  >
                    <span>
                      <span
                        className={cn(
                          "block font-display text-xl leading-snug transition-colors group-hover:text-accent-deep",
                          active.slug === item.slug && "text-accent-deep",
                        )}
                      >
                        {item.name}
                      </span>
                      <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-ink-mute">
                        {item.blurb}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      aria-hidden
                      className={cn(
                        "shrink-0 -translate-x-1 opacity-30 transition-all group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-accent-deep",
                        active.slug === item.slug && "translate-x-0 opacity-100 text-accent-deep",
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Preview plate — follows the reader's cursor down the ledger */}
      <div className="hidden lg:block">
        <div className="sticky top-28 border border-rule bg-paper">
          <SmartImage
            key={active.slug}
            folder={active.heroImage.folder}
            base={active.heroImage.base}
            alt={active.heroImage.alt}
            ratio="4 / 3"
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="w-full"
          />
          <div className="flex items-center justify-between gap-3 border-t border-rule px-5 py-4">
            <span className="font-display text-lg leading-snug">{active.name}</span>
            <Link
              href={`/services/${active.slug}`}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent-deep hover:text-ink"
            >
              Open
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
          <div className="absolute -bottom-px -left-px h-8 w-8 border-b-4 border-l-4 border-accent" aria-hidden />
        </div>
      </div>
    </div>
  );
}
