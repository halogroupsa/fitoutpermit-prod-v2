import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactForm } from "@/components/interactive/contact-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Free Fit-Out Permit Check — Dubai",
  description:
    "Contact FitOutPermits.ae for a free permit scope review: WhatsApp, phone or email. Al Quoz, Dubai — serving every UAE jurisdiction. Response within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="container-page py-10 md:py-14">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 max-w-3xl text-hero">
          Send the unit. Get the map.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
          Location, current status, intended works — that&rsquo;s all we need for the free scope
          review: authority map, document checklist, government-fee estimate and a fixed quote.
        </p>
      </section>

      <section className="container-page grid gap-10 pb-16 md:pb-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="border border-rule p-5 sm:p-8">
          <ContactForm />
        </div>

        <div>
          <ul className="grid gap-5 border border-rule p-5 text-sm sm:p-7">
            <li>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-semibold hover:text-accent-deep">
                <MessageCircle size={17} aria-hidden className="text-accent" />
                WhatsApp — fastest response
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneE164}`} className="flex items-center gap-3 hover:text-accent-deep">
                <Phone size={17} aria-hidden className="text-accent" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-accent-deep">
                <Mail size={17} aria-hidden className="text-accent" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={17} aria-hidden className="mt-0.5 shrink-0 text-accent" />
              <span>
                {SITE.address.line1}, {SITE.address.line2}
                <br />
                {SITE.address.city}, {SITE.address.country}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={17} aria-hidden className="text-accent" />
              {SITE.hours}
            </li>
          </ul>

          <div className="mt-4 border border-rule">
            <iframe
              title="FitOutPermits.ae — Halo office, Al Quoz, Dubai"
              src={`https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}&z=14&output=embed`}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-ink-mute">
            Part of the Halo group · Al Quoz 1, Dubai
          </p>
        </div>
      </section>
    </>
  );
}
