/**
 * Client testimonials — rendered as an interactive "client file" dossier on the
 * home page. Each entry references the project type and authorities involved, so
 * the proof reads like a case file rather than a generic star review.
 *
 * Replace the quotes/names with real, permissioned client references before go-live.
 */

export type Testimonial = {
  /** file reference shown in the dossier, e.g. "07-03" */
  ref: string;
  quote: string;
  name: string;
  /** role · company, e.g. "Operations Director" */
  role: string;
  company: string;
  /** short project label, e.g. "Restaurant fit-out, Palm Jumeirah" */
  project: string;
  /** authority short codes involved — DM, DCD, DDA, Trakhees, DMCC… */
  authorities: string[];
  /** the outcome headline for this file, e.g. "Permit in 12 working days" */
  outcome: string;
};

/** Overall review summary shown alongside the featured testimonial. */
export const REVIEW_SUMMARY = {
  rating: 4.9,
  count: 180,
  source: "Google reviews & direct client references",
} as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    ref: "07-01",
    quote:
      "We had a lease clock running and a landlord that wouldn't extend. FitOutPermits took the drawings, cleared Trakhees and Civil Defence in parallel, and we opened on the date we'd promised the investors. No drama, no last-minute surprises.",
    name: "Rana K.",
    role: "Operations Director",
    company: "Vero Hospitality",
    project: "Restaurant fit-out, Palm Jumeirah",
    authorities: ["Trakhees", "DCD"],
    outcome: "Permit in 12 working days",
  },
  {
    ref: "07-02",
    quote:
      "Two previous submissions had bounced before we called them. They rebuilt the package, answered every DDA comment technically, and it cleared first round after that. The difference was knowing exactly what the reviewer wanted to see.",
    name: "Marcus D.",
    role: "Project Manager",
    company: "Northline Contracting",
    project: "Office fit-out, Dubai Design District",
    authorities: ["DDA", "DCD"],
    outcome: "Approved first round, zero rejections",
  },
  {
    ref: "07-03",
    quote:
      "A clinic is four approvals pretending to be one. They sequenced DHA, the DM permit and Civil Defence so nothing got built twice — the layout we approved was the layout DHA licensed. That sequencing saved us weeks and a wall we'd have had to demolish.",
    name: "Dr. Aisha M.",
    role: "Founder",
    company: "Meridian Medical Centre",
    project: "Clinic fit-out, Jumeirah",
    authorities: ["DHA", "DM", "DCD"],
    outcome: "Facility licensed in 9 weeks, end to end",
  },
  {
    ref: "07-04",
    quote:
      "We were rolling out six units across different jurisdictions and every one had a different authority mix. Having one team hold all of them — DM, RTA, the mall landlords — meant I got status, not excuses. That's rarer than it should be.",
    name: "Tom R.",
    role: "Retail Rollout Lead",
    company: "Summit Retail Group",
    project: "Multi-unit retail rollout, Dubai",
    authorities: ["DM", "RTA", "DCD"],
    outcome: "Six stores, six permits, one timeline",
  },
  {
    ref: "07-05",
    quote:
      "The part nobody tells you about JLT is the deposit and the tower logistics. They ran Concordia and DCD together, kept our contractor on site, and then actually recovered the fit-out deposit at the end — which I'd written off.",
    name: "Priya S.",
    role: "Tenant Representative",
    company: "Onyx Workspace",
    project: "Office fit-out, Jumeirah Lakes Towers",
    authorities: ["DMCC", "DCD"],
    outcome: "Deposit recovered in full at handover",
  },
  {
    ref: "07-06",
    quote:
      "We'd already built — and then got flagged. I thought we were finished. Their rescue desk audited the real position, quoted a fixed price to regularise it, and cleaned it up without the site being shut for weeks. Honest about what was fixable and what wasn't.",
    name: "Karim H.",
    role: "Owner",
    company: "Maison Kitchens",
    project: "Regularisation, restaurant, Business Bay",
    authorities: ["DM", "DCD"],
    outcome: "Unapproved works regularised, site kept open",
  },
];
