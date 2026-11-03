/** Shared shapes for the data-driven SEO pages. */

export type ImageRef = {
  /** folder under public/img/ */
  folder: string;
  /** base name of the optimized webp set */
  base: string;
  alt: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type ProcessStep = {
  title: string;
  body: string;
};

export type FeeRow = {
  item: string;
  amount: string;
  note?: string;
};

export type AuthorityPage = {
  slug: string;
  /** full authority name, e.g. "Dubai Municipality" */
  name: string;
  /** short label used in chips / the finder, e.g. "DM" */
  shortName: string;
  /** SEO <title> */
  title: string;
  metaDescription: string;
  keywords: string[];
  heroImage: ImageRef;
  /** one-line jurisdiction summary, e.g. "Mainland Dubai — onshore commercial & residential buildings" */
  jurisdiction: string;
  /** intro paragraphs (2-3) */
  intro: string[];
  whenRequired: string[];
  documents: string[];
  steps: ProcessStep[];
  fees: FeeRow[];
  feesNote: string;
  rejectionReasons: string[];
  timelineNote: string;
  faqs: Faq[];
  /** slugs of related authorities */
  related: string[];
  /** slugs of related project types */
  relatedProjects: string[];
};

export type ServicePage = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  heroImage: ImageRef;
  intro: string[];
  /** what's included — bullets */
  includes: string[];
  /** who it's for */
  audience: string[];
  steps: ProcessStep[];
  faqs: Faq[];
  related: string[];
  relatedAuthorities: string[];
};

export type ProjectTypePage = {
  slug: string;
  name: string;
  /** e.g. "Office" — used in cards */
  shortName: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  heroImage: ImageRef;
  intro: string[];
  /** authorities typically involved, with reason */
  authoritiesInvolved: { slug: string; reason: string }[];
  documents: string[];
  watchouts: string[];
  steps: ProcessStep[];
  timelineNote: string;
  faqs: Faq[];
  relatedProjects: string[];
};

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type GuidePage = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  heroImage: ImageRef;
  intro: string[];
  sections: GuideSection[];
  faqs: Faq[];
  relatedGuides: string[];
};
