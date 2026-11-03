import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqVisual } from "@/components/sections/faq-visual";
import { faqSchema, JsonLd } from "@/lib/schema";
import type { Faq } from "@/data/types";

interface LandingFaqProps {
  refNo?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  faqs: Faq[];
}

/** Closing FAQ section for index pages — the home page's FAQ idiom, reusable. */
export function LandingFaq({ refNo, eyebrow = "Questions", title, lead, faqs }: LandingFaqProps) {
  return (
    <section className="section border-t border-rule bg-paper-warm/60">
      <JsonLd data={faqSchema(faqs)} />
      <div className="container-page">
        <SectionHeading refNo={refNo} eyebrow={eyebrow} title={title} lead={lead} className="mb-10" />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <FaqVisual className="hidden lg:block lg:sticky lg:top-28 lg:self-start" />
          <div className="reveal">
            <Accordion items={faqs} />
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-deep hover:text-ink"
            >
              All questions <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
