import type { Faq } from "./types";

/** Site-wide FAQ page content, grouped for readability + FAQPage schema. */
export const FAQ_GROUPS: { group: string; items: Faq[] }[] = [
  {
    group: "The basics",
    items: [
      {
        q: "What is a fit-out permit and do I really need one?",
        a: "A fit-out permit is the government authorisation to modify the interior of a unit — partitions, ceilings, MEP, fire systems, structure. In Dubai, virtually every commercial fit-out and most meaningful residential renovations require one before work starts. Working without it risks fines, stop-work orders, insurance invalidity and problems at every future licence renewal or property transaction.",
      },
      {
        q: "Which authority issues my permit?",
        a: "It depends entirely on your unit's address: Dubai Municipality for mainland, DDA for TECOM districts, DMCC/Concordia for JLT, Trakhees for Palm Jumeirah and PCFC areas, DIFC for the financial centre, and each free zone (JAFZA, Dubai South, DSO, DHCC) for its own territory. Master communities like Emaar's and Nakheel's add a developer NOC on top. Our free Approval Finder tool answers this in under a minute.",
      },
      {
        q: "What does FitOutPermits.ae actually do?",
        a: "We manage the entire approvals side of a fit-out: jurisdiction mapping, landlord and developer NOCs, permit-grade drawings with engineer stamping, authority submissions, comment resolution, Civil Defence coordination, inspections and the completion certificate. One project manager, one tracker, every authority.",
      },
      {
        q: "Are you a fit-out contractor?",
        a: "No — deliberately. We are approvals specialists and never compete for construction or design work. That independence is why contractors and design firms hand us their permits: their client relationships and drawings stay protected.",
      },
    ],
  },
  {
    group: "Cost & timelines",
    items: [
      {
        q: "How much does a fit-out permit cost in Dubai?",
        a: "Government fees are formula-driven — Dubai Municipality's headline rate is AED 1 per sq ft of built-up area, and a typical small commercial unit lands between AED 1,500 and 4,000 across authorities. Restaurants and clinics run higher due to extra approval tracks. Our consultancy fee is quoted fixed after a free scope review, with government fees passed through at cost. Try the cost calculator on this site for an instant estimate.",
      },
      {
        q: "How long does approval take?",
        a: "A clean package for a standard commercial unit typically reaches permit in 2–4 weeks from landlord NOC, with authority review rounds of 5–10 working days. Restaurants, clinics and structural scopes run longer because more authorities are involved. The biggest variable is package quality — which is the part we control.",
      },
      {
        q: "Can you guarantee approval by a specific date?",
        a: "No honest consultant can — authorities control their own clocks. What we guarantee is our side of it: complete first submissions, same-week comment responses, parallel-tracked approvals and weekly status you can read in one page. That's what reduces avoidable delay, which is the delay that matters.",
      },
      {
        q: "What are your fees?",
        a: "Fixed, quoted after a free scope review, and separated from government fees which we pass through at cost with receipts. No percentage-of-project pricing, no fees hidden inside 'government charges'.",
      },
    ],
  },
  {
    group: "Process & problems",
    items: [
      {
        q: "Can I start work while approval is pending?",
        a: "No. Starting before the permit is issued exposes you to fines, stop-work orders and complications that resurface at completion stage and beyond. The reliable way to protect an opening date is submitting early and clean — not building early.",
      },
      {
        q: "My permit application was rejected. Can you take it over?",
        a: "Yes — approval rescue is one of our core services. We audit the comment history, identify the real objection, fix the package and resubmit. Consultant reassignment is a standard authority process. The initial autopsy is free.",
      },
      {
        q: "We did works without a permit years ago. Can that be fixed?",
        a: "Almost always. Regularisation involves as-built documentation, structural verification where needed, and retrospective submissions to the developer and authority. It's slower than doing it right the first time but clears titles, unblocks transactions and restores insurance validity. We handle it discreetly and constantly.",
      },
      {
        q: "Do you handle the Civil Defence side too?",
        a: "Yes — DCD drawings, submissions, registered specialist-contractor coordination, and inspection management including our standard pre-walk before every official visit. Fire and life safety is a track we never subcontract away.",
      },
    ],
  },
  {
    group: "Working with us",
    items: [
      {
        q: "Do you work with our existing designer and contractor?",
        a: "Yes — that's the normal arrangement. We slot in as the approvals specialist alongside your team, upgrade design drawings to permit grade where needed, and provide the authority registrations your team may lack. Where you have no team yet, we can introduce registered contractors without taking a margin on them.",
      },
      {
        q: "Do you cover Abu Dhabi and other emirates?",
        a: "Yes — Dubai is our core, and we run Abu Dhabi, Sharjah and northern-emirates approvals through the same managed process, most often for multi-site rollout clients.",
      },
      {
        q: "Who is behind FitOutPermits.ae?",
        a: "We're part of Halo (halo.ae) — a Dubai-based group with 25+ years across interiors, joinery and property services, operating from Al Quoz. FitOutPermits.ae is the group's dedicated authority-approvals practice, with 2,500+ permits processed across 20+ UAE authorities.",
      },
      {
        q: "How do we start?",
        a: "Send the unit location, current status and intended works via WhatsApp or the contact form. You'll get the authority map, document checklist, government-fee estimate and a fixed quote — free, usually within one business day.",
      },
    ],
  },
];

export const ALL_FAQS: Faq[] = FAQ_GROUPS.flatMap((g) => g.items);

/** Curated picks for landing-page FAQ sections. Throws at build time if a
 * question is renamed, so a stale prefix can't silently drop the entry. */
export function pickFaqs(prefixes: string[]): Faq[] {
  return prefixes.map((p) => {
    const hit = ALL_FAQS.find((f) => f.q.startsWith(p));
    if (!hit) throw new Error(`pickFaqs: no FAQ starts with "${p}"`);
    return hit;
  });
}
