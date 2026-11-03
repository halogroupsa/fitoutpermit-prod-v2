import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { AUTHORITIES } from "@/data/authorities";
import { SERVICES } from "@/data/services";
import { PROJECT_TYPES } from "@/data/project-types";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule bg-carbon text-paper">
      {/* Index rows — the dossier's table of contents */}
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Image
            src="/images/logo.png"
            alt="FitOutPermits.ae — Driven by Halo"
            width={220}
            height={45}
            className="h-10 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/65">
            Dubai&rsquo;s fit-out permit consultants. {SITE.stats.permits.toLocaleString()}+ permits
            processed across {SITE.stats.authorities}+ UAE authorities — drawings, NOCs,
            submissions, inspections and completion certificates, managed end-to-end.
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-accent-soft">
            A{" "}
            <a
              href={SITE.parentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent-soft/40 underline-offset-4 hover:text-accent"
            >
              Halo
            </a>{" "}
            company · Est. {year - SITE.stats.yearsHalo}
          </p>
        </div>

        <nav aria-label="Authorities">
          <p className="eyebrow eyebrow-on-dark mb-4">Authorities</p>
          <ul className="grid gap-2 text-sm text-paper/70">
            {AUTHORITIES.map((a) => (
              <li key={a.slug}>
                <Link href={`/approvals/${a.slug}`} className="hover:text-accent-soft">
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services and project types">
          <p className="eyebrow eyebrow-on-dark mb-4">Services</p>
          <ul className="grid gap-2 text-sm text-paper/70">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-accent-soft">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow eyebrow-on-dark mb-4 mt-8">Project types</p>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-paper/70">
            {PROJECT_TYPES.map((p) => (
              <li key={p.slug}>
                <Link href={`/permits/${p.slug}`} className="hover:text-accent-soft">
                  {p.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow eyebrow-on-dark mb-4">Contact</p>
          <ul className="grid gap-3 text-sm text-paper/70">
            <li>
              <a href={`tel:${SITE.phoneE164}`} className="inline-flex items-center gap-2.5 hover:text-accent-soft">
                <Phone size={15} aria-hidden /> {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-accent-soft"
              >
                <MessageCircle size={15} aria-hidden /> WhatsApp us
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 hover:text-accent-soft">
                <Mail size={15} aria-hidden /> {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-1 shrink-0" aria-hidden />
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-soft"
              >
                {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city},{" "}
                {SITE.address.country}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock size={15} aria-hidden /> {SITE.hours}
            </li>
          </ul>
          <div className="mt-6 grid gap-2 text-sm text-paper/70">
            <p className="eyebrow eyebrow-on-dark mb-1">Tools &amp; guides</p>
            <Link href="/tools/approval-finder" className="hover:text-accent-soft">
              Which approvals do I need? →
            </Link>
            <Link href="/tools/cost-calculator" className="hover:text-accent-soft">
              Permit cost calculator →
            </Link>
            <Link href="/resources" className="hover:text-accent-soft">
              Permit guides →
            </Link>
            <Link href="/for-contractors" className="hover:text-accent-soft">
              For contractors &amp; designers →
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/12">
        <div className="container-page flex flex-col gap-2 py-5 font-mono text-2xs uppercase tracking-[0.14em] text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName} · fitoutpermits.ae — driven by{" "}
            <a href={SITE.parentUrl} className="underline underline-offset-2 hover:text-accent-soft">
              halo.ae
            </a>
          </p>
          <span aria-hidden className="hidden h-3 w-px bg-paper/20 md:block" />
          <p>
            Content last reviewed {SITE.lastReviewed} · requirements vary by project &amp; authority
          </p>
          <span aria-hidden className="hidden h-3 w-px bg-paper/20 md:block" />
          <p>
            Digital Experience by Designs Frontier
          </p>
        </div>
      </div>
    </footer>
  );
}
