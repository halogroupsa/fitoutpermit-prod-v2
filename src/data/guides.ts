import type { GuidePage } from "./types";

/**
 * Long-form guides — the informational SEO layer.
 * URL: /resources/<slug>
 */
export const GUIDES: GuidePage[] = [
  {
    slug: "request-a-revision-to-approved-fit-out-drawings-dubai",
    name: "How to request a revision to approved fit-out drawings in Dubai",
    title: "How to request a revision to approved fit-out drawings in Dubai",
    metaDescription: "A fit-out layout has changed after approval. Prepare the stamped set, proposed revisions and change log before asking which review route applies in Dubai.",
    publishedAt: "2026-11-27",
    keywords: ["fit-out design revision Dubai", "revise approved fit-out drawings", "DDA fit-out design revision"],
    heroImage: { folder: "process", base: "drawings-desk", alt: "Printed floor plans and drawing tools on a desk" },
    intro: [
      "If your approved fit-out layout changes before work starts, have your appointed team compare the new layout with the stamped set and confirm whether a revision submission is needed. Keep the affected work on hold while the team gets direction from the relevant reviewer.",
      "For projects within its jurisdiction, Dubai Development Authority lists a design revision service that includes fit-out work. Its guidance lists the contractor as requester for fit-out revisions. Ask your team which process applies to your unit and the proposed change."
    ],
    sections: [
      {
        heading: "Keep the approved set and the new set side by side",
        paragraphs: [
          "Suppose you move a store partition to gain space for a staff area. Mark the approved line and the proposed line. Ask the designer which other drawings need updating, such as the reflected ceiling plan or the drawings for services serving the rooms.",
          "Set out changes by drawing number, revision and reason. Make the summary clear enough that the reviewer can see the difference without opening both sets and searching room by room."
        ]
      },
      {
        heading: "Ask which reviews the proposal affects",
        paragraphs: [
          "Ask the appointed team whether the change affects circulation, fire and life safety, ventilation or another discipline. Confirm whether the landlord or building manager needs to review the revised scope or update a consent it already issued. Give the reviewer the permit reference and the relevant stamped sheets."
        ]
      },
      {
        heading: "Give site one drawing set to use",
        bullets: [
          "Record the current approved revision and which sheets the team is proposing to replace.",
          "Share the revised set and the reviewer’s response with the trades working in the affected area.",
          "Ask who will acknowledge receipt and remove superseded copies from site before the affected work is released."
        ]
      }
    ],
    faqs: [
      { q: "Who applies for a DDA fit-out design revision?", a: "Dubai Development Authority lists the contractor as requester for fit-out design revisions. Confirm that DDA applies to your project before using its process." },
      { q: "What if the work has already been built?", a: "Tell the appointed team what has been built, share photos and ask the relevant reviewer which process applies. The site condition may require a different route from a proposal that has yet to be built." }
    ],
    relatedGuides: ["landlord-noc-vs-authority-approval", "completion-certificate-guide"],
    relatedLinks: [{ href: "/services/drawing-preparation", label: "Fit-out drawing preparation in Dubai", sub: "Review the drawing set before submission" }],
    sources: [{ href: "https://dda.gov.ae/en/planning-development/design/design-revision", label: "Dubai Development Authority design revision service" }]
  },
  {
    slug: "villa-renovation-approval-checklist-dubai",
    name: "Which villa renovation changes should you discuss with the approving authority?",
    title: "Which villa renovation changes should you discuss with the approving authority?",
    metaDescription: "Check which changes to a Dubai villa to raise with community management and the relevant authority, and what to send for an initial review.",
    publishedAt: "2026-11-26",
    keywords: ["villa renovation approval checklist Dubai", "Dubai villa modification approval", "villa renovation NOC"],
    heroImage: {
      folder: "projects",
      base: "villa",
      alt: "Dubai villa exterior beside construction formwork",
    },
    intro: [
      "Flag changes to structure, exterior appearance or built-up area, along with any kitchen or bathroom move that affects drainage, ventilation or shared services. Mark each change on the approved villa layout and ask the community manager and appointed team which approvals apply to your plot.",
      "Send the villa number, plot reference and a marked drawing to the community or property manager. Ask which authority reviews the proposed scope and what the manager needs for its own review. If you have an appointed consultant, ask them to confirm the route before any work starts.",
    ],
    sections: [
      {
        heading: "Highlight anything that changes the structure or exterior",
        paragraphs: [
          "Flag new wall openings, work that could affect beams or slabs, and any addition that changes built-up area. If you are enclosing a terrace or adding an extension, show where it sits against the existing house and plot boundary. Ask what a consultant needs to verify and which drawings are required.",
          "Show changes visible from outside, such as new window openings, façade finishes or a pergola. Keep photos of the current elevations with the plan. Emaar’s home modification guidance, for example, addresses pergolas and kitchens separately and sets limits on external alterations in its communities.",
        ],
      },
      {
        heading: "Mark relocated kitchens, bathrooms and equipment",
        paragraphs: [
          "Give the reviewer the existing and proposed positions of sinks, wet areas and equipment. Name any changes proposed to drainage, ventilation or external outlets. Ask the appointed team to describe any impact on shared services or adjoining structures for the review.",
          "Describe like-for-like replacements and layout changes as separate items. If the scope is mostly finishes, show the rooms and work involved anyway. Ask about the property’s community consent and site access rules. Emaar’s published FAQs, for example, say that kitchen and bathroom renovations in its communities require a community NOC.",
        ],
      },
      {
        heading: "Send the minimum information for an informed reply",
        bullets: [
          "Property details, latest available approved drawings and relevant approvals for previous work.",
          "A simple existing and proposed layout with affected walls, openings and exterior areas marked.",
          "Photos of the affected area and a description of the work, including any item still under investigation.",
          "A request to confirm the responsible reviewers, application route, required drawings and party who files them.",
        ],
      },
      {
        heading: "Make each proposed change easy to review",
        paragraphs: [
          "For a proposed kitchen move, mark the old and proposed positions on the same plan. Add where the team expects to route the new drainage and extract, and ask the reviewer which drawings and checks are needed. If the route is still under review, label it as provisional.",
          "List a new garden-facing opening and a terrace enclosure as separate items. Attach an elevation photo for the opening and a sketch showing the enclosure against the approved footprint. Ask who reviews the structural and external changes, then record the reply against each item before instructing the affected work.",
        ],
      },
      {
        heading: "Keep the approval route with the agreed scope",
        paragraphs: [
          "Record what each reviewer asks for. The community’s consent and the authority’s permit can be separate steps. Dubai Development Authority, for example, provides a Building Modification Permit route for eligible completed buildings within its jurisdiction. Have your project team confirm which route applies to your villa.",
          "If the design changes after review, send the updated drawing and ask whether the submission or existing approvals need updating. Pass the written response and the correct drawing revision to the contractor before agreeing a start date for the affected work.",
        ],
      },
    ],
    faqs: [
      {
        q: "What should I send if I am unsure whether a wall is structural?",
        a: "Mark the wall on the existing layout, add photographs and tell the appointed consultant what opening or removal you are considering. Ask them to establish what can be verified from the drawings and what needs a site check before the work can be designed or submitted.",
      },
      {
        q: "Can a community NOC be the only approval I need?",
        a: "Ask the community manager and the responsible authority or consultant to confirm the route for your plot and exact scope. A community NOC records the community’s consent, and the relevant authority may also require a separate permit.",
      },
    ],
    relatedGuides: ["landlord-noc-vs-authority-approval", "dm-vs-dda-vs-trakhees"],
    relatedLinks: [
      { href: "/permits/villa-renovation-permit", label: "Dubai villa renovation permit support", sub: "Check the approval route for your proposed works" },
    ],
    sources: [
      { href: "https://dda.gov.ae/en/planning-development/construction/permits-nocs/building-modification-permit", label: "Dubai Development Authority Building Modification Permit" },
      { href: "https://www.ecm.ae/en/communities/arabian-ranches/lifestyle/faqs/home-modifications-arabian-ranches/", label: "Emaar Community Management’s Arabian Ranches home modification guidance" },
      { href: "https://www.emaar.com/en/faq", label: "Emaar’s FAQs on kitchen, bathroom and outdoor modifications" },
    ],
  },
  {
    slug: "office-fit-out-permit-before-signing-a-dubai-lease",
    name: "What to prepare for an office fit-out permit before signing a Dubai lease",
    title: "What to prepare for an office fit-out permit before signing a Dubai lease",
    metaDescription: "Ask for the right office fit-out permit documents before signing a Dubai lease. Check the landlord’s consent, approved drawings, access and who files the application.",
    publishedAt: "2026-11-25",
    keywords: [
      "office fit out permit documents Dubai",
      "Dubai office fit-out lease checklist"
    ],
    heroImage: {
      folder: "projects",
      base: "office",
      alt: "Modern office with glazed meeting rooms and an open work area"
    },
    intro: [
      "Before you sign a Dubai office lease, ask for the building’s fit-out rules, the latest approved drawings for the unit and written confirmation of whether the owner will support your proposed works. If a document can only be issued later, find out who will provide it and when it is needed.",
      "Imagine the agent shows you a fitted office and says a new meeting room will be easy to add. Mark the partition and door on the plan. Then ask who can check the layout against the existing ventilation, ceiling services and fire-safety systems. The answer can change what you agree to take on with the lease."
    ],
    sections: [
      {
        heading: "Confirm who reviews the works for this unit",
        paragraphs: [
          "Send the building name, unit number, plot details if available and a short description of the work to building management. Ask who reviews the fit-out and which forms or building rules it uses. If you are considering changes to the use, structure or floor area, flag them before relying on a standard fit-out route. Dubai Development Authority (DDA), for example, directs certain changes of that kind to a building modification application.",
          "Ask who signs the owner’s no-objection certificate (NOC) and when it can be issued. Find out whether management reviews the drawings separately and issues its own permission for contractor access. In Jumeirah Lakes Towers, confirm the applicable DMCC and Concordia steps for the specific premises and scope."
        ]
      },
      {
        heading: "Ask for the documents that explain what you are taking over",
        paragraphs: [
          "Request the latest approved layout and any available drawings for the systems you expect to change. Ask about previous fit-out approvals and completion records for the unit. If the office came from a former tenant, have the proposed contractor compare the current rooms with those records during an agreed site visit."
        ],
        bullets: [
          "Confirm exactly which office and floor are named in the draft lease and approval records.",
          "Ask which partitions, ceilings and services the landlord will hand over and who deals with any work left by the previous tenant.",
          "Get the current building fit-out manual or checklist, including working hours, contractor registration, delivery access and any deposits that apply."
        ]
      },
      {
        heading: "Set a date and an owner for each application document",
        paragraphs: [
          "Some documents can be collected during due diligence. Others depend on the tenancy or the design being agreed. DDA’s published fit-out checklist, for example, includes a tenant’s contractor appointment letter, a copy of Ejari, the building owner’s NOC, relevant authority NOCs and stamped approved and proposed drawings. Use the checklist for your own authority to confirm its exact submission requirements.",
          "Write the owner and expected date next to each outstanding item. If the lease or tenancy registration has to be in place before filing, ask the landlord when it will be available. Give your consultant enough access to verify what the drawings show and agree who updates the submission if the scope changes."
        ]
      },
      {
        heading: "Put approvals and access on the same lease timeline",
        paragraphs: [
          "Compare the proposed rent start, survey access, approval submission and the date contractors can work in the unit. Ask when you can book the loading bay or lift and what the building needs to release a work permit, where applicable. Raise any gap with the landlord and your leasing adviser while you are still discussing the terms.",
          "Ask what the contractor has to hand over at the end. DDA, for example, has a separate fit-out completion service and lists the Dubai Civil Defence completion certificate among its supporting documents. Put the applicable inspections and closeout responsibilities on the programme before committing to a move-in date."
        ]
      }
    ],
    faqs: [
      {
        q: "Can the review start before I sign the lease?",
        a: "You can ask for the rules, confirm the likely approval route and arrange a survey with the owner’s permission. The formal application follows the applicable authority’s requirements. DDA’s published checklist includes an Ejari copy, so confirm when you can obtain it before putting a submission date in the programme."
      },
      {
        q: "Does a previously fitted office have an approval I can rely on?",
        a: "Ask for the previous approval and completion records and compare them with the office as it stands. Then give your proposed changes to building management or the appointed consultant to confirm what review, consent or permit is needed for that scope."
      }
    ],
    relatedGuides: [
      "fit-out-permit-documents-checklist",
      "landlord-noc-vs-authority-approval"
    ],
    relatedLinks: [
      {
        href: "/permits/office-fit-out-permit",
        label: "Office fit-out permit support",
        sub: "Confirm the route and document list for your unit"
      }
    ],
    sources: [
      {
        href: "https://dda.gov.ae/en/planning-development/construction/permits-nocs/fit-out-permit",
        label: "Dubai Development Authority fit-out permit"
      },
      {
        href: "https://dda.gov.ae/en/planning-development/construction/inspections-completions/fit-out-completion-certificate",
        label: "Dubai Development Authority fit-out completion certificate"
      },
      {
        href: "https://dmcc.ae/hubfs/2509857/C5-Migrated-Files/All-Files/NOC_for_Licenced_Co._Fit_Out.pdf",
        label: "DMCC application guideline for a fit-out NOC to Concordia"
      }
    ]
  },
  {
    slug: "fit-out-permit-process-dubai",
    name: "The Complete Dubai Fit-Out Permit Process",
    title: "Fit-Out Permit Process in Dubai (2026) | Step-by-Step Guide",
    metaDescription:
      "How fit-out permits work in Dubai in 2026: authorities, NOCs, drawings, submission, comments, inspections and completion certificates — the complete step-by-step process explained.",
    keywords: [
      "how to get fit out permit dubai",
      "fit out permit process",
      "fit out approval process dubai",
      "dubai fit out permit steps",
    ],
    heroImage: {
      folder: "hero",
      base: "hero-site",
      alt: "Two site staff inspecting an unfinished commercial interior",
    },
    intro: [
      "Every commercial fit-out in Dubai — office, shop, restaurant, clinic, warehouse — needs a permit before work starts, and a completion certificate before the space is legally occupied. The process is consistent in shape across the emirate, but the details change with jurisdiction: mainland units answer to Dubai Municipality, while free zones and master developments run their own building-control regimes.",
      "This guide walks the whole path in order: identifying your authority, securing consents, preparing drawings, surviving review, building compliantly and closing out. It reflects the process as of July 2026; requirements vary by building and scope, and the authorities update their systems regularly.",
    ],
    sections: [
      {
        heading: "Step 1 — Identify your authority",
        paragraphs: [
          "Your unit's address decides everything. Mainland Dubai (most of the city) is Dubai Municipality territory, permitted through the Dubai BPS portal. TECOM districts — Internet City, Media City, d3 — belong to the DDA. JLT is DMCC via Concordia. Palm Jumeirah and PCFC areas run through Trakhees. DIFC, Dubai South, Silicon Oasis, JAFZA and Healthcare City each run their own regimes. Master communities like Emaar's and Nakheel's add a developer NOC on top of the government permit.",
          "Getting this wrong wastes weeks: applications filed with the wrong authority don't get forwarded, they get abandoned. If you're unsure, our free Approval Finder answers it in under a minute.",
        ],
      },
      {
        heading: "Step 2 — Secure the consent chain",
        paragraphs: [
          "Before any authority reviews your drawings, private consents come first: the landlord's NOC, building or community management's technical conditions, and in master communities the developer's modification NOC. Buildings attach conditions — working hours, deposits, insurance minimums, contractor registration — that flow into your programme and budget.",
        ],
        bullets: [
          "Landlord NOC — the universal prerequisite; authorities won't review without it",
          "Building management technical conditions and refundable deposits",
          "Master developer NOC (Emaar, Nakheel, Meraas communities)",
          "Special consents: neighbours (villas), mall design review (retail)",
        ],
      },
      {
        heading: "Step 3 — Prepare permit-grade drawings",
        paragraphs: [
          "Authorities approve drawings, not descriptions. A permit package includes architectural sets (existing, demolition, proposed), MEP drawings with realistic load schedules, and fire & life-safety layouts referenced to the UAE Fire and Life Safety Code — stamped by engineers registered with the reviewing authority. Design-intent drawings from your interior designer are the starting point, not the submission.",
          "The single highest-leverage investment in the whole process is a fresh site survey: as-built conditions in Dubai buildings routinely differ from archived drawings, and packages built on wrong baselines collect comments proportionally.",
        ],
      },
      {
        heading: "Step 4 — Submit and resolve comments",
        paragraphs: [
          "Submission happens through the authority's portal under registered consultant and contractor accounts. Reviewers respond with comments — technical queries and corrections — in rounds. A clean package typically survives one round; a poor one can cycle for months. Comments deserve engineering answers, not paperwork shuffles: reviewers approve applications that resolve their concerns, and remember the ones that argue.",
          "Civil Defence review runs in parallel for any scope touching fire and life safety — which, given that partitions and ceilings change egress and detector coverage, means nearly every real fit-out.",
        ],
      },
      {
        heading: "Step 5 — Build compliantly",
        paragraphs: [
          "The permit authorises the works shown — exactly those. Site changes that feel trivial (a moved door, a lowered bulkhead, swapped materials) can invalidate the approval at inspection. Disciplined sites document deviations as they arise and amend the permit where needed; undisciplined ones discover them during the final inspection, in front of the inspector.",
        ],
      },
      {
        heading: "Step 6 — Inspections and the completion certificate",
        paragraphs: [
          "On completion, the authority and Civil Defence inspect the site against the approved drawings. Observations are issued, closed and re-verified, and the completion certificate follows. That certificate — not the furniture delivery — is what makes the unit legal to occupy, keeps trade-licence renewals smooth and satisfies insurers. Skipping it is the most common and least wise shortcut in the market.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does the whole fit-out permit process take in Dubai?",
        a: "For a standard commercial unit with a clean package: 2–4 weeks from NOC to permit, then the construction period, then 1–2 weeks of inspections and certification. The variance is almost entirely package quality and consent-chain speed — which is why specialists exist.",
      },
      {
        q: "Can I start work while the permit is under review?",
        a: "No — starting before permit issue risks fines, stop-work orders and complications that follow the unit for years. Early starts save days and routinely cost months.",
      },
      {
        q: "Do I need a consultant, or can I apply myself?",
        a: "Most authorities require applications under registered consultants and contractors, and the drawing standards effectively assume professional preparation. Even where self-filing is technically possible, the rejection economics argue against it.",
      },
    ],
    relatedGuides: ["fit-out-permit-cost-dubai", "fit-out-permit-documents-checklist", "fit-out-permit-timeline-dubai"],
  },
  {
    slug: "fit-out-permit-cost-dubai",
    name: "Fit-Out Permit Costs in Dubai",
    title: "Fit-Out Permit Cost Dubai (2026) | Fees Breakdown by Authority",
    metaDescription:
      "What a fit-out permit costs in Dubai in 2026: DM's AED 1/sq ft fee, DCD charges, free-zone fees, deposits and consultancy costs — a transparent breakdown with worked examples.",
    keywords: [
      "fit out permit cost",
      "fit out approval cost dubai",
      "authority approval fees dubai",
      "dm permit fees",
    ],
    heroImage: {
      folder: "services",
      base: "permit-management",
      alt: "Tablet and application paperwork spread across a desk",
    },
    intro: [
      "Almost every consultancy in this market answers the cost question with 'contact us.' Here is the actual structure instead. Fit-out permit costs in Dubai stack four layers: government fees (formula-driven and predictable), refundable deposits (returned if you behave), consultancy fees (the market's least transparent layer) and the hidden fourth — the cost of delay, which dwarfs the other three when approvals go wrong.",
      "Figures below reflect published schedules and our project experience as of July 2026. Exact fees vary by authority, area and scope; our calculator gives an instant estimate for your numbers, and our proposals itemise every layer separately.",
    ],
    sections: [
      {
        heading: "Government fees — the predictable layer",
        paragraphs: [
          "Dubai Municipality's headline fit-out permit fee is area-based — AED 1.00 per square foot of built-up area — plus small fixed charges (knowledge and innovation fees, typically AED 20 each per transaction) and a completion-certificate fee from around AED 500. Free zones and Trakhees publish their own schedules, generally scaling with area; DCD charges review and inspection fees from a few hundred dirhams, scaling with systems affected.",
        ],
        bullets: [
          "1,000 sq ft mainland office: roughly AED 1,500–2,500 total government fees",
          "3,000 sq ft restaurant (DM + food safety + DCD + DEWA): roughly AED 6,000–12,000",
          "JLT office via DMCC/Concordia: review fees AED 1,000–3,000 plus refundable deposit",
          "Villa extension (developer NOC + DM + DEWA): typically AED 4,000–12,000",
        ],
      },
      {
        heading: "Deposits — refundable if you finish properly",
        paragraphs: [
          "Buildings and communities hold fit-out deposits — AED 5,000–20,000 is common in towers — against common-area damage and proper closeout. They come back after clean completion, which makes the completion certificate a financial document, not just a legal one. Unrecovered deposits are one of the quiet leaks of the Dubai fit-out market; track them as receivables from day one.",
        ],
      },
      {
        heading: "Consultancy fees — what the market hides",
        paragraphs: [
          "Approvals consultancy for a straightforward commercial unit typically runs in the mid-four to low-five figures (AED), scaling with authority count and scope complexity — restaurants and clinics sit above offices; multi-authority and structural scopes above those. Anyone quoting without seeing the unit and scope is guessing; anyone bundling government fees into one opaque number is hiding the margin in the government's column.",
          "Our rule: fixed fee quoted after a free scope review, government fees passed through at cost with receipts. If a proposal you're holding doesn't separate those layers, ask why.",
        ],
      },
      {
        heading: "The fourth cost — delay",
        paragraphs: [
          "Rent on a dark unit, staff hired for an opening that slips, franchise deadlines, seasonal windows missed: delay costs are the largest line item on most troubled projects and appear on no invoice. A rejected submission cycle typically costs 2–6 weeks. Priced against your rent, the case for doing approvals properly makes itself — it's the cheapest insurance in construction.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the DM fee for a fit-out permit?",
        a: "The core fee is AED 1.00 per square foot of built-up area, with a cap applying to very large industrial facilities, plus small fixed transaction fees and a completion-certificate fee. A 2,000 sq ft unit therefore pays roughly AED 2,000 in the headline fee.",
      },
      {
        q: "Are government fees negotiable?",
        a: "No — they're published schedules, which is precisely why they should be passed through at cost. The negotiable layer is consultancy, and the honest lever there is scope clarity, not haggling.",
      },
      {
        q: "Why do quotes for the same project differ so much?",
        a: "Usually because they're not quoting the same thing: different assumed scopes, government fees bundled versus separated, drawings included versus excluded, completion certificate included versus abandoned. Normalise the scopes and the spread narrows fast.",
      },
    ],
    relatedGuides: ["fit-out-permit-process-dubai", "fit-out-permit-timeline-dubai", "fit-out-permit-documents-checklist"],
  },
  {
    slug: "fit-out-permit-documents-checklist",
    name: "Fit-Out Permit Documents Checklist",
    title: "Fit-Out Permit Documents Dubai | The Complete 2026 Checklist",
    metaDescription:
      "Every document a Dubai fit-out permit needs in 2026: trade licence, Ejari, NOCs, drawings, contractor registrations and more — organised as the checklist authorities actually review against.",
    keywords: [
      "fit out permit documents",
      "documents required for fit out permit dubai",
      "fit out approval checklist",
      "noc documents fit out",
    ],
    heroImage: {
      folder: "services",
      base: "noc",
      alt: "Organised document checklist folder with NOCs, licences and drawings tabbed for submission",
    },
    intro: [
      "Incomplete documentation is the most preventable cause of fit-out delay in Dubai — portals happily accept partial applications and let them sit. This is the complete checklist we run internally, organised the way reviewers actually consume it: corporate documents, property documents, consents, drawings, and contractor credentials.",
      "Requirements vary by authority and scope; items below are marked accordingly. Treat this as the superset — your project needs most of it, and knowing which parts it doesn't need is half the consulting.",
    ],
    sections: [
      {
        heading: "Corporate & identity documents",
        bullets: [
          "Trade licence — valid, with an activity matching the intended use of the unit",
          "Emirates ID + passport copy of the authorised signatory",
          "Power of attorney / authorisation letter where an agent signs",
          "For new businesses: initial approval from DED or the free zone",
        ],
      },
      {
        heading: "Property documents",
        bullets: [
          "Tenancy contract and Ejari registration (mainland) or free-zone lease",
          "Title deed for owned property; affection plan for villas and plots",
          "Existing unit drawings / handover documentation from the landlord",
          "Previous permits and completion certificates where the unit was fitted before",
        ],
      },
      {
        heading: "Consents (the NOC chain)",
        bullets: [
          "Landlord NOC — universal; authorities will not review without it",
          "Building/community management technical NOC with conditions",
          "Master developer NOC (Emaar, Nakheel, Meraas communities)",
          "DEWA NOC for load, meter or connection-affecting works",
          "RTA NOC where access, parking or right-of-way is touched",
          "Neighbour consents where community rules require them (villas)",
        ],
      },
      {
        heading: "Drawings & technical documents",
        bullets: [
          "Architectural set: existing, demolition, proposed — engineer-stamped",
          "MEP set: electrical loads, drainage, water, HVAC layouts",
          "Fire & life-safety drawings to the UAE Fire and Life Safety Code",
          "Structural drawings + calculations where structure is affected",
          "Specialist packages by scope: kitchen/food-flow, medical layout (DHA), acoustic reports (gyms/towers)",
        ],
      },
      {
        heading: "Contractor & consultant credentials",
        bullets: [
          "Contractor trade licence with the correct activity classification",
          "Authority registrations (DM/Trakhees/DDA/free zone as applicable)",
          "Insurances: workmen's compensation + third-party liability at the building's minimums",
          "DCD specialist registrations for fire-system works",
          "Consultant appointment and engineer registration for stamping",
        ],
      },
    ],
    faqs: [
      {
        q: "What's the most commonly missing document?",
        a: "The building-management NOC — everyone remembers the landlord, and towers frequently require a second, technical consent from the managing agent with its own checklist and deposit. Second place: contractor insurance certificates that don't meet the building's stated minimums.",
      },
      {
        q: "Do documents need attestation or translation?",
        a: "Standard corporate and property documents in English or Arabic generally file as-is. Foreign documents (overseas POAs, parent-company papers) may need legalisation. We flag exactly which, per case, before anything is couriered anywhere.",
      },
      {
        q: "How current must everything be?",
        a: "Licences, Ejari and insurances must be valid at submission and stay valid through review — a licence expiring mid-review stalls the application. We diarise expiry dates across the document set as standard practice.",
      },
    ],
    relatedGuides: ["office-fit-out-permit-before-signing-a-dubai-lease", "fit-out-permit-process-dubai", "landlord-noc-vs-authority-approval", "fit-out-permit-cost-dubai"],
  },
  {
    slug: "dm-vs-dda-vs-trakhees",
    name: "DM vs DDA vs Trakhees — Which Authority Governs Your Unit?",
    title: "DM vs DDA vs Trakhees | Which Dubai Authority Approves Your Fit-Out?",
    metaDescription:
      "Dubai Municipality, DDA, Trakhees, DMCC, DIFC or a free zone — how to tell which authority governs your fit-out, how their processes differ, and what changes in documents, fees and timelines.",
    keywords: [
      "dm vs dda",
      "trakhees vs dubai municipality",
      "which authority fit out dubai",
      "dubai free zone fit out approval",
    ],
    heroImage: {
      folder: "authorities",
      base: "dda",
      alt: "Dubai skyline spanning mainland, free zone and waterfront jurisdictions at dusk",
    },
    intro: [
      "Dubai runs multiple parallel building-control regimes, and your unit's address — not your preference — decides which one owns your fit-out. Filing with the wrong authority doesn't get you redirected; it gets you ignored. This guide maps the jurisdictions and compares how the big three (DM, DDA, Trakhees) actually differ in practice.",
      "The comparison matters beyond trivia: jurisdictions differ in portals, registration requirements, drawing conventions, fee structures and inspection culture. A contractor brilliant in DM territory can flounder in Trakhees; a package perfect for DDA needs rework for DIFC.",
    ],
    sections: [
      {
        heading: "The jurisdiction map",
        bullets: [
          "Dubai Municipality — mainland Dubai: most of the city, Al Quoz, Deira, Business Bay, Downtown buildings on mainland title",
          "DDA — TECOM districts: Internet City, Media City, d3, Studio City, Science Park, Knowledge Park, Production City",
          "Trakhees — PCFC areas: Palm Jumeirah, Dubai World communities, Dragon Mart, National Industries Park",
          "DMCC/Concordia — JLT's towers and podium retail",
          "DIFC — the financial centre's own building control",
          "JAFZA, Dubai South, DSO, DHCC — each free zone runs its own regime",
          "Master communities (Emaar, Nakheel) — developer NOC on top of the government authority",
        ],
      },
      {
        heading: "Dubai Municipality — the default and the biggest",
        paragraphs: [
          "DM handles the emirate's volume through the Dubai BPS portal, with an automated compliance pre-scan, published fee formulas (AED 1/sq ft headline) and the deepest bench of registered consultants and contractors. Its process rewards familiarity with the portal's activity codes and sequencing; its inspectors are pragmatic and volume-calibrated. If you only ever learn one regime, it's this one — but Dubai won't let you stop there.",
        ],
      },
      {
        heading: "DDA — digital-first and guideline-driven",
        paragraphs: [
          "DDA publishes per-community fit-out guidelines and runs a disciplined e-services process with roughly 5-working-day review cycles. It expects consultant-led submissions with existing/demolition/proposed sequences, and its communities add landlord-side technical conditions through TECOM management. Practically: faster and more predictable than DM for clean packages, less forgiving of improvisation.",
        ],
      },
      {
        heading: "Trakhees — the engineering heavyweight",
        paragraphs: [
          "Trakhees CED runs the most engineering-rigorous review of the three: registered-engineer stamping, HSE documentation read in earnest, staged inspections for bigger scopes, and a double gate in most of its territory because Nakheel's landlord NOC runs alongside. Palm Jumeirah F&B is the regime's final exam. Budget more time and more engineering — and get waterfront real estate in return.",
        ],
      },
      {
        heading: "What actually changes for your project",
        bullets: [
          "Registrations: your consultant and contractor must hold the specific authority's registration — check before appointing",
          "Portals & formats: title blocks, drawing sequences and activity codes differ; native-looking packages review faster",
          "Fees: same order of magnitude everywhere, different formulas — see our cost guide",
          "Timelines: DDA fastest on clean packages, DM most variable with volume, Trakhees most thorough",
          "Inspections: all inspect against approved drawings; Trakhees and DIFC most exactingly",
        ],
      },
    ],
    faqs: [
      {
        q: "My building is in Business Bay — DM or something else?",
        a: "Business Bay is mainland: Dubai Municipality, plus your tower management's NOC. The confusion usually comes from towers with free-zone-sounding names — title, not branding, decides jurisdiction.",
      },
      {
        q: "Can one consultant handle all jurisdictions?",
        a: "Only if they genuinely hold the registrations and portal access for each — many claim, fewer do. Ask specifically which authorities they've submitted to in the last quarter. (Our answer: all of the above, weekly.)",
      },
      {
        q: "Which jurisdiction is 'easiest'?",
        a: "The one your package respects. Every regime moves quickly for complete, code-referenced, correctly-formatted submissions and slowly for the other kind. That said: clean DDA submissions enjoy the most predictable clock.",
      },
    ],
    relatedGuides: ["fit-out-permit-process-dubai", "fit-out-permit-timeline-dubai", "fit-out-permit-cost-dubai"],
  },
  {
    slug: "fit-out-permit-timeline-dubai",
    name: "Fit-Out Permit Timelines in Dubai",
    title: "How Long Does a Fit-Out Permit Take in Dubai? | 2026 Timelines",
    metaDescription:
      "Real fit-out permit timelines in Dubai for 2026: NOC, drawing, review and inspection durations by authority and project type — and where the weeks are actually won and lost.",
    keywords: [
      "fit out permit timeline",
      "how long fit out approval dubai",
      "dubai permit processing time",
      "fit out approval duration",
    ],
    heroImage: {
      folder: "process",
      base: "site-survey",
      alt: "Project timeline board tracking permit milestones for a Dubai fit-out",
    },
    intro: [
      "The honest answer to 'how long does a fit-out permit take?' is a distribution, not a number — and the shape of that distribution is mostly in your control. Authority review clocks are the visible part; the invisible parts (consent chains, drawing quality, comment-response speed) decide whether your project sits at the fast or slow end.",
      "Below are the durations we actually observe across jurisdictions and project types as of July 2026, and — more usefully — the specific places where weeks are won and lost.",
    ],
    sections: [
      {
        heading: "The baseline anatomy",
        bullets: [
          "Consent chain (landlord + building + developer NOCs): 3 days – 4 weeks — the most variable stage of all",
          "Survey & permit-grade drawings: 1–2 weeks for standard commercial scopes",
          "Authority review: ~5–10 working days per round; clean packages need one round",
          "DCD parallel review: 5–10 working days, overlapping the main track",
          "Inspections & completion certificate: 1–2 weeks after works complete",
        ],
      },
      {
        heading: "By project type (lease-to-legal-opening)",
        bullets: [
          "Standard office: 8–12 weeks including construction",
          "Café, light menu: 6–10 weeks",
          "Full restaurant: 10–16 weeks — kitchen approvals dominate",
          "Clinic: 10–14 weeks with the DHA sequence run correctly",
          "Retail in malls: 4–8 weeks to permit through design review, then works",
          "Warehouse mezzanine: 3–6 weeks to permit, then fabrication",
          "Villa extension: 6–10 weeks of approvals before construction",
        ],
      },
      {
        heading: "Where weeks are lost",
        paragraphs: [
          "Four failure modes account for most delay: consent chains started late (the landlord NOC should begin the day heads-of-terms agree); drawings inherited from wrong as-builts (every inherited error returns as a comment); slow comment responses (a comment answered in one day versus two weeks compounds across rounds); and works deviating from approved drawings (discovered at inspection, when everything is expensive).",
        ],
      },
      {
        heading: "Where weeks are won",
        paragraphs: [
          "Parallelism is the honest accelerant: DCD alongside the main permit, DEWA feasibility during design, signage started with the fit-out rather than after it, food-safety layout in the same package as the building permit. None of it requires favours — just a programme someone actually owns. That, and submitting clean: the fastest comment round is the one that never opens.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can permits be expedited officially?",
        a: "Some authorities offer priority channels for specific transaction types, but the real expedite is structural: complete packages, instant comment turnaround and parallel tracks. 'Fast-track' promises that ignore those fundamentals are marketing.",
      },
      {
        q: "What's the fastest realistic path for an office?",
        a: "With a cooperative landlord and existing as-builts: NOC week one, drawings week two, submission week two, permit week three or four. We've done faster; we don't promise faster.",
      },
      {
        q: "Does Ramadan / summer affect timelines?",
        a: "Reduced working hours shift review cadence somewhat, and Q4 clusters renovation demand at developer NOC desks. Plan around the calendar, don't fight it.",
      },
    ],
    relatedGuides: ["fit-out-permit-process-dubai", "common-rejection-reasons", "fit-out-permit-cost-dubai"],
  },
  {
    slug: "common-rejection-reasons",
    name: "Why Fit-Out Permits Get Rejected in Dubai",
    title: "Fit-Out Permit Rejected? | Top Rejection Reasons in Dubai & Fixes",
    metaDescription:
      "The most common reasons Dubai fit-out permits and drawings get rejected — DM, DCD, DDA and free zones — and how each is prevented or fixed. From the approval-rescue desk at FitOutPermits.ae.",
    keywords: [
      "fit out permit rejected dubai",
      "dubai municipality drawing comments",
      "dcd rejection reasons",
      "permit rejection dubai",
    ],
    heroImage: {
      folder: "services",
      base: "rescue",
      alt: "Marked-up rejected drawing set with authority comment annotations awaiting resolution",
    },
    intro: [
      "We run an approval-rescue desk, which means rejected applications arrive on our table weekly — and the same dozen causes account for nearly all of them. None are mysterious. Most are preventable at a cost of hours; all are fixable at a cost of weeks.",
      "Here is the honest taxonomy: what actually gets rejected, why, and what prevention and cure each cause has. If your application is currently stuck, this list is probably describing it.",
    ],
    sections: [
      {
        heading: "Documentation failures (the avoidable third)",
        bullets: [
          "Missing building-management NOC — the single most common bounce in tower projects",
          "Expired trade licence, Ejari or insurance mid-review",
          "Contractor lacking the specific authority's registration or activity class",
          "Wrong signatory: applications signed by someone without documented authority",
        ],
        paragraphs: [
          "Prevention is a checklist run properly once. Cure is assembling the missing item and resubmitting — cheap, but each cycle costs a review round.",
        ],
      },
      {
        heading: "Drawing failures (the technical third)",
        bullets: [
          "Drawings based on wrong as-builts — every inherited error returns as a comment",
          "Load schedules exceeding the building's electrical or cooling allocation",
          "Missing existing/demolition/proposed sequence where the authority requires it",
          "Uncoordinated disciplines: architectural and MEP sets that contradict each other",
          "Code references to superseded editions of the fire and building codes",
        ],
        paragraphs: [
          "Prevention is a fresh survey and a coordinated package. Cure is re-drawing — which is why the prevention is the bargain of the process.",
        ],
      },
      {
        heading: "Life-safety failures (the serious third)",
        bullets: [
          "Travel distances and dead-ends exceeding limits after new partitions",
          "Sprinkler and detector layouts not recalculated for the new ceiling plan",
          "Occupancy increases (class studios, dining areas) without exit-capacity math",
          "Non-DCD-listed materials in fire-rated assemblies",
          "Kitchen suppression missing or mismatched to the cooking line",
        ],
        paragraphs: [
          "These are the rejections to be grateful for — the code is written in other cities' fire reports. Prevention is scoping the layout against egress rules before design freezes; cure is redesign, honestly done.",
        ],
      },
      {
        heading: "If you're currently rejected",
        paragraphs: [
          "Read the comments as a reviewer wrote them, not as a setback: they are a literal to-do list. Identify the real objection (occasionally politer than the stated one), answer each item technically, change nothing else silently, and resubmit fast — applications age badly in portals. Or hand it to our rescue desk: the autopsy is free, and third submissions we run tend to be final ones.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a rejection put my project on a blacklist?",
        a: "No — rejection is a routine review outcome, not a sanction. What damages projects is leaving comments unresolved for months or resubmitting the same package unchanged hoping for a different reviewer. The system rewards responsiveness.",
      },
      {
        q: "How many comment rounds is normal?",
        a: "One round on a professionally prepared package; two on complicated scopes. Three or more signals a package problem, not an authority problem — audit before resubmitting again.",
      },
      {
        q: "Can you take over an application mid-rejection?",
        a: "Yes — consultant/contractor reassignment is a standard authority process, and inherited rescues are a core service. Bring the comment sheets; we'll tell you within days what the real problem is and what fixing it costs.",
      },
    ],
    relatedGuides: ["fit-out-permit-process-dubai", "fit-out-permit-documents-checklist", "fit-out-permit-timeline-dubai"],
  },
  {
    slug: "completion-certificate-guide",
    name: "Completion Certificates After Fit-Out",
    title: "Completion Certificate After Fit-Out Dubai | Why It Matters & How",
    metaDescription:
      "The building completion certificate after a Dubai fit-out: why it's legally and financially essential, the inspection process, and how to obtain one — including years later. By FitOutPermits.ae.",
    keywords: [
      "completion certificate fit out",
      "building completion certificate dubai",
      "fit out inspection dubai",
      "occupancy certificate dubai",
    ],
    heroImage: {
      folder: "services",
      base: "completion",
      alt: "Two reviewers checking a ceiling in a fitted office",
    },
    intro: [
      "The completion certificate is the least glamorous document in a fit-out and the one that determines whether everything before it legally happened. It certifies that the works match the approved drawings and the space is fit to occupy — and its absence surfaces at the worst moments: licence renewals, insurance claims, lease disputes and property sales.",
      "This guide covers what the certificate is, how the inspection process runs, and — because the market needs it — how to obtain one months or years after everyone went home.",
    ],
    sections: [
      {
        heading: "What it is and who needs it",
        paragraphs: [
          "Issued by your building authority (DM, Trakhees, DDA, the free zone) after final inspections — with Civil Defence clearance as a prerequisite where fire scope existed — the completion certificate closes the permit and certifies legal occupancy. Tenants need it for licence and lease compliance; landlords for re-letting and asset documentation; buyers and lenders check for it with increasing rigour.",
        ],
      },
      {
        heading: "The inspection process",
        bullets: [
          "Book final inspections once works genuinely match the approved drawings",
          "DCD inspects fire and life safety first where in scope — its clearance feeds the authority",
          "The authority inspects against the permit set; observations are issued in writing",
          "Observations are corrected, evidence submitted, re-verification passed",
          "Certificate issued; as-builts and test certificates complete the handover file",
        ],
      },
      {
        heading: "Why projects skip it (and why that's expensive)",
        paragraphs: [
          "The failure is structural: by inspection time the contractor is paid and demobilised, the tenant is trading, and nobody's contract clearly owns the paperwork. The unclosed permit then compounds quietly — renewals hit blocks, insurers find their excuse, deposits stay unrecovered, and the eventual retroactive closure costs more than the original would have. Assign closeout ownership in the contract, or to us.",
        ],
      },
      {
        heading: "Getting one retroactively",
        paragraphs: [
          "Retroactive completion is routine work: audit the permit trail, survey the as-built against what was approved, regularise deviations (amendments or corrective works), appoint a closure contractor if the original vanished, pass inspections, certificate issued. Timeline runs from two weeks (compliant, well-documented) to a few months (deviated, undocumented). The audit itself takes days and prices the rest honestly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the completion certificate the same as an occupancy certificate?",
        a: "Terminology varies by authority, but for fit-outs the completion certificate is the document certifying the works are complete per approval and the space may be occupied. Whole-building occupancy certification is a separate, larger instrument.",
      },
      {
        q: "We're trading without one. What's the actual risk?",
        a: "Licence-renewal blocks, insurance-claim vulnerability, lease-dispute exposure and transaction friction if the business or property sells. Each is low-probability per month and high-cost when it lands — the classic case for cheap insurance, which retroactive closure is.",
      },
      {
        q: "Who books the final inspection?",
        a: "The registered consultant or contractor on the permit — one reason vanished contractors strand projects. Reassignment to a new registered party solves it; we do this constantly.",
      },
    ],
    relatedGuides: ["fit-out-permit-process-dubai", "common-rejection-reasons", "landlord-noc-vs-authority-approval"],
  },
  {
    slug: "landlord-noc-vs-authority-approval",
    name: "Landlord NOC vs Authority Approval",
    title: "Landlord NOC vs Authority Approval Dubai | What's the Difference?",
    metaDescription:
      "Landlord NOCs, developer NOCs and government permits in Dubai fit-outs: what each consent is, the order they come in, and why having one never substitutes for another. By FitOutPermits.ae.",
    keywords: [
      "landlord noc fit out",
      "noc vs permit dubai",
      "building noc dubai",
      "developer noc fit out",
    ],
    heroImage: {
      folder: "hero",
      base: "hero-handover",
      alt: "A document on a reception desk in a finished commercial interior at dusk",
    },
    intro: [
      "'The landlord already approved it' might be the most expensive sentence in Dubai fit-outs — usually spoken just before unpermitted work starts. Landlord consent and government approval are different instruments from different parties protecting different interests, and every fit-out needs its full chain, in order.",
      "This guide untangles the three consent layers — landlord/building, master developer, government authority — and the sequence that makes them move fastest.",
    ],
    sections: [
      {
        heading: "Layer 1 — Landlord & building management (private consent)",
        paragraphs: [
          "The landlord's NOC is the property owner permitting changes to their asset; building management adds technical conditions — working hours, deposits, insurance minimums, contractor registration, protection requirements. This layer is contractual, not statutory: it can be stricter than the law (and in premium towers, is) but can never substitute for it. No authority reviews an application without it attached.",
        ],
      },
      {
        heading: "Layer 2 — Master developer (community consent)",
        paragraphs: [
          "In Emaar, Nakheel, Meraas and similar master communities, the developer's modification NOC enforces community design guidelines: setbacks, heights, external appearance, acoustic rules in towers. It sits between the landlord layer and the government layer, and for villa works it's frequently the longest-lead consent of the three. Freehold ownership does not exempt you — the guidelines travel with the title.",
        ],
      },
      {
        heading: "Layer 3 — Government authority (statutory approval)",
        paragraphs: [
          "The permit from DM, Trakhees, DDA, DIFC or your free zone is the state authorising the works themselves — reviewed against building codes, fire codes and planning rules by licensed engineers, enforced by inspection, and closed by a completion certificate. It is the only layer that makes construction lawful. Private consents are prerequisites for it, never replacements.",
        ],
      },
      {
        heading: "The sequence that works",
        bullets: [
          "Start the landlord/building NOC the day commercial terms agree — it gates everything",
          "In master communities, run the developer NOC immediately after (or parallel where allowed)",
          "Prepare permit drawings while consents process — the tracks overlap well",
          "Submit to the authority with the full consent chain attached",
          "At completion, close conditions in reverse: authority certificate, developer sign-off, deposit recovery",
        ],
      },
    ],
    faqs: [
      {
        q: "The landlord approved — can strip-out at least start?",
        a: "Strip-out is works: in most jurisdictions it needs the permit (or a specific demolition/strip-out permit) too. Some buildings allow soft strip-out under their own supervision — get that in writing from building management, and know it doesn't extend one millimetre past what it says.",
      },
      {
        q: "Can a landlord refuse an NOC arbitrarily?",
        a: "Leases govern this — most give landlords broad discretion over alterations, which is why fit-out expectations belong in lease negotiations, not after signature. Practically, complete professional applications with clear reinstatement undertakings get consents that vague requests don't.",
      },
      {
        q: "Who chases all these consents in a normal project?",
        a: "Contractually it lands on the tenant, who typically delegates to whoever seems willing. Making it a defined, owned scope — ours — is the single most reliable schedule improvement available in Dubai fit-outs.",
      },
    ],
    relatedGuides: ["fit-out-permit-documents-checklist", "fit-out-permit-process-dubai", "completion-certificate-guide"],
  },
];

export function guideBySlug(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}
