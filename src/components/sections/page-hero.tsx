import { SmartImage } from "@/components/ui/smart-image";
import type { ImageRef } from "@/data/types";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  image: ImageRef;
  meta?: string;
}

/** Split editorial page opener: text plate left, photograph right. */
export function PageHero({ eyebrow, title, lead, image, meta }: PageHeroProps) {
  return (
    <section className="section-page-hero border-b border-rule">
      <div className="container-page grid gap-8 py-10 md:py-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-hero">{title}</h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">{lead}</p>
          )}
          {meta && (
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
              {meta}
            </p>
          )}
        </div>
        <div className="relative border border-rule">
          <SmartImage
            folder={image.folder}
            base={image.base}
            alt={image.alt}
            ratio="4 / 3"
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="w-full"
          />
          <div className="absolute -bottom-px -left-px h-10 w-10 border-b-4 border-l-4 border-accent" aria-hidden />
        </div>
      </div>
    </section>
  );
}
