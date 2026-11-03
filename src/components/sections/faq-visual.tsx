import { cn } from "@/lib/cn";

/** A quiet editorial image that gives wide FAQ layouts a useful visual anchor. */
export function FaqVisual({ className }: { className?: string }) {
  return (
    <figure className={cn("faq-visual", className)}>
      <div className="aspect-[4/3] overflow-hidden border border-rule bg-paper-warm">
        <img
          src="/img/faq/permit-review-desk-landscape.webp"
          width={1448}
          height={1086}
          alt="Fit-out drawings and permit folders on a site-review desk"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </figure>
  );
}
