import { SITE_URL } from "./deployment";

export { CANONICAL_URL } from "./deployment";

export const SITE = {
  name: "FitOutPermits.ae",
  legalName: "Halo Works LLC",
  parentBrand: "Halo",
  parentUrl: "https://halo.ae",
  tagline: "Fit-Out Permits & Authority Approvals, Dubai",
  description:
    "FitOutPermits.ae — Dubai's fit-out permit consultants, driven by Halo. Dubai Municipality, Civil Defence, Trakhees, DDA, DMCC and 20+ authority approvals managed end-to-end: drawings, NOCs, submissions, inspections and completion certificates. 2,500+ permits processed.",
  url: SITE_URL,
  phone: "+971 55 969 3009",
  phoneE164: "+971559693009",
  whatsapp: "971559693009",
  whatsappUrl:
    "https://wa.me/971559693009?text=Hello%2C%20I%20need%20help%20with%20a%20fit-out%20permit%20in%20Dubai.",
  email: "hello@fitoutpermits.ae",
  address: {
    line1: "Marabea Street, Al Quoz 1",
    line2: "P.O. Box 26800",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  geo: { lat: 25.1585, lng: 55.2422 },
  mapsUrl: "https://maps.google.com/?q=Halo+Al+Quoz+Dubai",
  social: {
    instagram: "https://instagram.com/halo.uae",
    linkedin: "https://www.linkedin.com/company/halo-ae",
  },
  hours: "Monday – Saturday, 8:30 am – 6:00 pm",
  stats: {
    permits: 2500,
    authorities: 20,
    yearsHalo: 25,
    responseHours: 4,
  },
  lastReviewed: "July 2026",
} as const;

export const NAV_MAIN = [
  { label: "Authorities", href: "/approvals" },
  { label: "Services", href: "/services" },
  { label: "Project Types", href: "/permits" },
  { label: "Tools", href: "/tools/approval-finder" },
  { label: "Guides", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
