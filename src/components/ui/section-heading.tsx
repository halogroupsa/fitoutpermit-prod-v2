import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  id?: string;
  refNo?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  onDark?: boolean;
  className?: string;
}

/** Standard dossier section header: mono ref number + eyebrow + display title. */
export function SectionHeading({ id, refNo, eyebrow, title, lead, onDark, className }: SectionHeadingProps) {
  return (
    <header className={cn("reveal max-w-3xl", className)}>
      <div className="flex items-baseline gap-4">
        {refNo && <span className={cn("ref-no", onDark && "text-paper/40")}>{refNo}</span>}
        <p className={cn("eyebrow", onDark && "eyebrow-on-dark")}>{eyebrow}</p>
      </div>
      <h2
        id={id}
        className={cn(
          "mt-4 text-3xl",
          onDark && "text-paper",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-5 text-base leading-relaxed text-ink-soft", onDark && "text-paper/70")}>
          {lead}
        </p>
      )}
    </header>
  );
}
