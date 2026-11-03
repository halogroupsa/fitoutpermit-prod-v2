import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqVisual } from "@/components/sections/faq-visual";
import { ClauseHeading } from "@/components/sections/detail-blocks";
import { FAQ_GROUPS, ALL_FAQS } from "@/data/faqs";
import { faqSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FAQ | Fit-Out Permits & Approvals in Dubai, Answered",
  description:
    "Fit-out permit questions answered plainly: costs, timelines, authorities, rejections, regularisation and how FitOutPermits.ae works. No 'contact us for details' answers.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(ALL_FAQS)} />
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <section className="container-page py-10 md:py-14">
        <p className="eyebrow">FAQ</p>
        <h1 className="mt-4 max-w-3xl text-hero">
          Asked constantly. Answered plainly.
        </h1>
      </section>

      <section className="container-page grid gap-10 pb-16 lg:grid-cols-[minmax(12rem,0.62fr)_minmax(0,1.38fr)] lg:gap-12 md:pb-24">
        <FaqVisual className="hidden lg:block lg:sticky lg:top-28 lg:self-start" />
        <div className="grid gap-14">
          {FAQ_GROUPS.map((g, i) => (
            <div key={g.group}>
            <ClauseHeading no={String(i + 1).padStart(2, "0")} title={g.group} />
            <Accordion items={g.items} defaultOpen={i === 0 ? 0 : -1} />
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
