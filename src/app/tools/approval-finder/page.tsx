import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ApprovalFinder } from "@/components/interactive/approval-finder";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Approval Finder | Which Fit-Out Approvals Do I Need in Dubai?",
  description:
    "Free interactive tool: answer five questions about your Dubai unit and project, get your authority map, NOC chain and a realistic approvals timeline — no contact details required.",
  alternates: { canonical: "/tools/approval-finder" },
};

export default function ApprovalFinderPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Tools" }, { label: "Approval Finder" }]} />
      <section className="container-page py-10 md:py-14">
        <p className="eyebrow">Free tool · no sign-up</p>
        <h1 className="mt-4 max-w-3xl text-hero">
          Which approvals does your project need?
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
          Dubai runs a dozen parallel permit regimes. Five questions map yours: the authority
          that owns your permit, the NOCs that come first, and how long the approvals realistically take.
        </p>
      </section>
      <section className="container-page pb-16 md:pb-24">
        <ApprovalFinder />
      </section>
      <CtaBand />
    </>
  );
}
