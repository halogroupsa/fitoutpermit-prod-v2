import type { Metadata } from "next";
import { ArticleArchive } from "@/components/article-archive";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CtaBand } from "@/components/sections/cta-band";
import { LandingFaq } from "@/components/sections/landing-faq";
import { SmartImage } from "@/components/ui/smart-image";
import { GUIDES } from "@/data/guides";
import { pickFaqs } from "@/data/faqs";
import { archivePath } from "@/lib/archive-pagination";
import { srcsetFor } from "@/lib/images";
import { SITE } from "@/lib/site";

const title = "Dubai fit-out permit guides";
const description = "Check what to prepare for a Dubai fit-out, from permits and owner consent to drawings, inspections and handover.";

export function resourcesArchiveMetadata(page = 1): Metadata {
  return {
    title: page === 1 ? "Fit-Out Permit Guides Dubai | Costs, Process, Documents & Timelines" : `${title} | Page ${page}`,
    description: page === 1 ? description : `Page ${page} of the FitOutPermits.ae guides to Dubai permit approvals, consent and completion.`,
    alternates: { canonical: archivePath(page) },
  };
}

export function ResourcesArchivePage({ page = 1 }: { page?: number }) {
  const articles = GUIDES.map((guide) => {
    const { folder, base, alt } = guide.heroImage;
    const { srcset, fallback } = srcsetFor(folder, base);
    return {
      href: `/resources/${guide.slug}`,
      title: guide.name,
      description: guide.metaDescription,
      keywords: guide.keywords,
      date: guide.publishedAt ?? SITE.lastReviewedAt,
      dateLabel: guide.publishedAt ? "Published" : "Reviewed",
      image: { src: fallback, srcSet: srcset, alt },
    };
  }).sort((left, right) => right.date.localeCompare(left.date));

  return (
    <>
      <Breadcrumbs items={[{ label: "Guides" }]} />
      <section className="border-b border-rule">
        <div className="container-page grid items-center gap-7 py-8 sm:grid-cols-[1.15fr_1fr] md:gap-12 md:py-12">
          <div>
            <h1 className="max-w-2xl text-hero">{title}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">{description}</p>
          </div>
          {page === 1 && (
            <SmartImage
              folder="process"
              base="drawings-desk"
              alt="Fit-out plans laid out on a review desk"
              ratio="2 / 1"
              priority
              sizes="(min-width: 640px) 42vw, 92vw"
            />
          )}
        </div>
      </section>

      <div className="container-page">
        <ArticleArchive articles={articles} archivePage={page} />
      </div>

      {page === 1 && (
        <LandingFaq
          title="Questions about fit-out approvals"
          lead="Common questions about applications, approval timelines and the team."
          faqs={pickFaqs([
            "My permit application was rejected. Can you take it over?",
            "How long does approval take?",
            "Do you cover Abu Dhabi and other emirates?",
            "Who is behind FitOutPermits.ae?",
          ])}
        />
      )}
      <CtaBand />
    </>
  );
}
