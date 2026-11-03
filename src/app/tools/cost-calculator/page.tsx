import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CostCalculator } from "@/components/interactive/cost-calculator";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Fit-Out Permit Cost Calculator Dubai | Instant Fee Estimate",
  description:
    "Instant Dubai fit-out permit fee estimate: DM's AED 1/sq ft, Civil Defence charges, food-safety and DHA add-ons by project type — free calculator, no contact details required.",
  alternates: { canonical: "/tools/cost-calculator" },
};

export default function CostCalculatorPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Tools" }, { label: "Cost Calculator" }]} />
      <section className="container-page py-10 md:py-14">
        <p className="eyebrow">Free tool · no sign-up</p>
        <h1 className="mt-4 max-w-3xl text-hero">
          What will the permit actually cost?
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
          Government fees are formula-driven and predictable — everyone in this market just
          refuses to publish them. Enter your area and project type for the honest estimate.
        </p>
      </section>
      <section className="container-page pb-16 md:pb-24">
        <CostCalculator />
      </section>
      <CtaBand />
    </>
  );
}
