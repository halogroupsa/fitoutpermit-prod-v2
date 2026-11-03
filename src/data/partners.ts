/**
 * Trusted-partner roster — the developers, hospitality groups and brands we file
 * alongside. Rendered as a logo marquee on the home page.
 *
 * Logos live under public/img/partners/. Each entry carries a `logo` path plus a
 * short `sector`; the marquee renders the logo, falling back to the wordmark when
 * no logo is present.
 */
export type Partner = {
  name: string;
  /** what they are, in the roster — kept short (developer, hospitality group…) */
  sector: string;
  /** optional logo under public/img/partners/ */
  logo?: string;
};

export const PARTNERS: Partner[] = [
  { name: "Dubai Properties", sector: "Developer", logo: "/img/partners/partner_dubai_properties.webp" },
  { name: "Iskon", sector: "Developer", logo: "/img/partners/partner_iskon.webp" },
  { name: "Jumeirah", sector: "Hospitality group", logo: "/img/partners/partner_jumeirah.webp" },
  { name: "Majid Al Futtaim", sector: "Developer", logo: "/img/partners/partner_majid_al_futtain.webp" },
  { name: "One&Only", sector: "Hospitality group", logo: "/img/partners/partner_oneandonly.webp" },
  { name: "Rotana", sector: "Hospitality group", logo: "/img/partners/partner_rotana.webp" },
  { name: "Sheraton", sector: "Hospitality group", logo: "/img/partners/partner_sheraton.webp" },
  { name: "Siemens", sector: "Technology", logo: "/img/partners/partner_siemens.webp" },
];
