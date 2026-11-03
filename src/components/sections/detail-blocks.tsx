import Link from "next/link";
import { ArrowRight, Check, CircleAlert, FileText } from "lucide-react";
import { cn } from "@/lib/cn";
import type { FeeRow, ProcessStep } from "@/data/types";

/** Anchor-target section wrapper — clears the sticky header on hash scroll. */
function Block({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("section-sm", id && "scroll-mt-28", className)}>
      {children}
    </section>
  );
}

/** Numbered clause header used inside detail pages. */
export function ClauseHeading({ no, title }: { no: string; title: string }) {
  return (
    <div className="reveal mb-6 flex items-baseline gap-4 border-b-2 border-ink pb-3">
      <span className="ref-no">{no}</span>
      <h2 className="font-display text-xl">{title}</h2>
    </div>
  );
}

export function ChecklistBlock({ no, title, items, id }: { no: string; title: string; items: string[]; id?: string }) {
  return (
    <Block id={id} className="block-checklist">
      <ClauseHeading no={no} title={title} />
      <ul className="reveal grid gap-0 md:grid-cols-2 md:gap-x-10">
        {items.map((item, i) => (
          <li key={i} className="ledger-row grid-cols-[1.6rem_1fr] gap-x-3 !py-3.5">
            <Check size={16} aria-hidden className="mt-1 text-approve" />
            <span className="text-base leading-relaxed text-ink-soft">{item}</span>
          </li>
        ))}
      </ul>
    </Block>
  );
}

export function StepsBlock({ no, title, steps, id }: { no: string; title: string; steps: ProcessStep[]; id?: string }) {
  return (
    <Block id={id} className="block-steps">
      <ClauseHeading no={no} title={title} />
      {/* Connected timeline — numbered nodes threaded on a single spine, so the
          process reads as a sequence rather than a stack of rows. */}
      <ol className="reveal">
        {steps.map((s, i) => (
          <li key={i} className="grid grid-cols-[2.25rem_1fr] gap-4 sm:gap-5">
            <div className="relative flex justify-center">
              <span
                aria-hidden
                className={cn(
                  "absolute left-1/2 top-0 w-px -translate-x-1/2 bg-rule-strong",
                  i === steps.length - 1 ? "h-9" : "h-full",
                )}
              />
              <span className="relative z-[1] grid h-9 w-9 place-items-center border border-rule-strong bg-paper font-mono text-xs text-accent-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="min-w-0 pb-9 pt-1 last:pb-0">
              <h3 className="font-display text-lg leading-snug">{s.title}</h3>
              <p className="mt-1.5 max-w-3xl text-base leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Block>
  );
}

export function FeesBlock({ no, title, fees, note, id }: { no: string; title: string; fees: FeeRow[]; note: string; id?: string }) {
  return (
    <Block id={id} className="block-fees">
      <ClauseHeading no={no} title={title} />
      <div className="reveal overflow-x-auto">
        <table className="w-full min-w-[560px] border border-rule text-sm">
          <thead>
            <tr className="bg-carbon text-left text-paper">
              <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.14em]">Item</th>
              <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.14em]">Indicative amount</th>
              <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.14em]">Note</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((f, i) => (
              <tr key={i} className="border-t border-rule odd:bg-paper even:bg-paper-warm/50">
                <td className="px-4 py-3 font-medium">{f.item}</td>
                <td className="px-4 py-3 text-ink-soft">{f.amount}</td>
                <td className="px-4 py-3 text-ink-mute">{f.note ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="reveal mt-4 flex max-w-3xl items-start gap-2.5 text-sm leading-relaxed text-ink-mute">
        <FileText size={15} aria-hidden className="mt-0.5 shrink-0 text-accent" />
        {note}
      </p>
    </Block>
  );
}

export function WarningsBlock({ no, title, items, id }: { no: string; title: string; items: string[]; id?: string }) {
  return (
    <Block id={id} className="block-warnings">
      <ClauseHeading no={no} title={title} />
      <ul className="reveal grid gap-3 md:grid-cols-2">
        {items.map((r, i) => (
          <li
            key={i}
            className="flex items-start gap-3 border border-rule bg-paper-warm/60 p-4 text-base leading-relaxed text-ink-soft"
          >
            <CircleAlert size={16} aria-hidden className="mt-0.5 shrink-0 text-accent-deep" />
            {r}
          </li>
        ))}
      </ul>
    </Block>
  );
}

export function RelatedLinks({
  no,
  title,
  links,
  id,
}: {
  no: string;
  title: string;
  links: { href: string; label: string; sub?: string }[];
  id?: string;
}) {
  if (!links.length) return null;
  return (
    <Block id={id} className="block-related-links">
      <ClauseHeading no={no} title={title} />
      <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="dossier-card group flex items-start justify-between gap-3 p-5">
            <span>
              <span className="block font-display text-base leading-snug transition-colors group-hover:text-accent-deep">
                {l.label}
              </span>
              {l.sub && <span className="mt-1 block text-xs text-ink-mute">{l.sub}</span>}
            </span>
            <ArrowRight size={15} aria-hidden className="mt-1 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-accent-deep" />
          </Link>
        ))}
      </div>
    </Block>
  );
}

/** "Last reviewed" disclaimer — trust + freshness signal on regulatory pages. */
export function ReviewNote({ date, className = "" }: { date: string; className?: string }) {
  return (
    <p className={`reveal border-l-2 border-rule bg-paper-warm/40 px-4 py-3 text-xs leading-relaxed text-ink-mute ${className}`}>
      Content last reviewed {date}. Requirements vary by building, community and scope — confirm
      your project&rsquo;s specifics with us before committing to a lease or programme.
    </p>
  );
}
