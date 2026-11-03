import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE } from "@/lib/site";

export function ApprovalDesk() {
  return (
    <section className="approval-desk section border-b border-rule" aria-label="The approval desk">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.91fr)_minmax(31rem,1.09fr)] lg:items-center lg:gap-16 xl:gap-24">
        <div className="approval-desk-copy">
          <SectionHeading
            refNo="01"
            eyebrow="The approval desk / Dubai"
            title="The permit partner your project team can keep."
            lead="FitOutPermits.ae is Halo's dedicated authority-approvals practice. We work behind the scenes for contractors, designers, landlord representatives and owners — keeping drawings protected while moving every approval forward."
          />

          <ul className="approval-desk-points mt-8 max-w-xl" aria-label="What makes FitOutPermits different">
            {[
              ["Independent by design", "We do not tender for your fit-out or design work. Your client relationship stays yours."],
              ["One desk, from drawing to certificate", "A named project manager owns submissions, authority comments, inspections and the close-out."],
              ["Built on real Dubai fit-out experience", `The Halo group brings ${SITE.stats.yearsHalo}+ years of local delivery knowledge to every approval file.`],
            ].map(([title, body]) => (
              <li key={title}>
                <Check size={15} strokeWidth={2.6} aria-hidden />
                <span>
                  <strong className="text-lg">{title}</strong>
                  <span className="mt-1.5 text-sm leading-relaxed">{body}</span>
                </span>
              </li>
            ))}
          </ul>

          <Link href="/about" className="btn-primary mt-9">
            Meet the approvals desk <ArrowRight size={14} aria-hidden />
          </Link>
        </div>

        <div className="approval-desk-visual reveal" aria-label="Fit-out permit drawings and inspection work">
          <div className="approval-desk-landscape" aria-hidden />
          <div className="approval-desk-main">
            <SmartImage
              folder="process"
              base="drawings-desk"
              alt="Fit-out drawings prepared for authority submission"
              ratio="1 / 1"
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-full w-full"
            />
          </div>
          <div className="approval-desk-inspection">
            <SmartImage
              folder="process"
              base="inspection"
              alt="Fit-out site inspection in progress"
              ratio="4 / 5"
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="h-full w-full"
            />
          </div>
          <div className="approval-desk-file" aria-hidden>
            <span>Fit-out permit file</span>
            <strong>{SITE.stats.permits.toLocaleString()}+</strong>
            <em>approvals processed</em>
          </div>
          <div className="approval-desk-seal" aria-hidden>
            <span>Drawings kept</span>
            <strong>Protected</strong>
            <span>by an independent desk</span>
          </div>
        </div>
      </div>
    </section>
  );
}
