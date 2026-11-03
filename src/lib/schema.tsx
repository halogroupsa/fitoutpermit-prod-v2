import { SITE } from "@/lib/site";
import type { Faq } from "@/data/types";

/**
 * JSON-LD builders. Only verifiable facts — no fabricated ratings/reviews.
 * The ProfessionalService entity is the local-SEO anchor for Google Maps:
 * keep name/address/phone identical to the Google Business Profile.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: "Fit Out Permits Dubai",
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    image: `${SITE.url}/images/logo.png`,
    description: SITE.description,
    slogan: "Fit-out permits, approved. Drawings to completion certificate.",
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: "AED",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
      addressLocality: SITE.address.city,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    hasMap: SITE.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Halo",
      url: SITE.parentUrl,
    },
    sameAs: [SITE.social.instagram, SITE.social.linkedin, SITE.parentUrl],
    knowsAbout: [
      "Fit-out permits Dubai",
      "Dubai Municipality approvals",
      "Dubai Civil Defence approvals",
      "Trakhees approvals",
      "DDA fit-out permits",
      "Building completion certificates",
    ],
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: { "@type": "City", name: "Dubai" },
    serviceType: "Fit-out permit and authority approval consultancy",
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    image: opts.image ?? `${SITE.url}/images/logo.png`,
    author: { "@id": `${SITE.url}/#organization` },
    publisher: { "@id": `${SITE.url}/#organization` },
    dateModified: "2026-07-13",
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
