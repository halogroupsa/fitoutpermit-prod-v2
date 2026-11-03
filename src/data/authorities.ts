import type { AuthorityPage } from "./types";

/**
 * Authority approval pages — the core SEO cluster.
 * Every entry is a real, differentiated page: /approvals/<slug>
 * Content reviewed July 2026. Requirements vary by building, community and
 * scope; each page carries a disclaimer and a "last reviewed" date.
 */
export const AUTHORITIES: AuthorityPage[] = [
  {
    slug: "dubai-municipality-approval",
    name: "Dubai Municipality",
    shortName: "DM",
    title: "Dubai Municipality Fit-Out Approval | Documents, Fees & Process",
    metaDescription:
      "Dubai Municipality (DM) fit-out approval explained: when a DM permit is required, documents and drawings, Dubai BPS submission, fees and completion certificates. Managed end-to-end by FitOutPermits.ae.",
    keywords: [
      "dubai municipality approval",
      "dm approval",
      "dubai municipality permit",
      "dubai municipality fit out permit",
      "dubai building permit system",
      "building permit dubai",
    ],
    heroImage: {
      folder: "authorities",
      base: "dubai-municipality",
      alt: "Engineer reviewing approved fit-out drawings in front of a Dubai mainland commercial tower",
    },
    jurisdiction: "Mainland (onshore) Dubai — commercial, residential and industrial buildings outside free zones",
    intro: [
      "Dubai Municipality (DM) is the permitting authority for most onshore buildings in Dubai. If your office, shop, restaurant, clinic or warehouse sits on mainland land — not inside a free zone or a master developer's private jurisdiction — your fit-out permit is issued by DM through the Dubai Building Permit System (Dubai BPS).",
      "A DM fit-out permit is a technical review, not a formality. Architectural, structural and MEP drawings are checked against the Dubai Building Code, accessibility requirements and Al Sa'fat green-building rules before any work may start on site. We prepare, stamp and submit the full package, answer engineer comments, and stay engaged through inspection and the Building Completion Certificate.",
    ],
    whenRequired: [
      "Any internal modification to a mainland unit: partitions, ceilings, flooring build-ups, pantry or toilet additions",
      "Change of use — for example a retail unit becoming a cafeteria or a villa becoming a nursery",
      "MEP alterations: new electrical loads, drainage points, HVAC ducting or fire-protection changes",
      "Structural work of any kind, including slab openings, mezzanines and wall removals",
      "Reinstatement or renovation of an existing fitted unit before a new tenancy",
    ],
    documents: [
      "Valid trade licence of the tenant (or owner's title deed for villas)",
      "Ejari / tenancy contract for the unit",
      "Landlord or building-management No Objection Certificate (NOC)",
      "Appointed contractor's DM licence and registration",
      "Architectural fit-out drawings (existing + proposed)",
      "MEP drawings — electrical load schedule, drainage, HVAC layouts",
      "Structural calculations and drawings, where structure is affected",
      "Fire & life-safety drawings referenced to the UAE Fire and Life Safety Code",
      "Affection plan / site plan for villa and plot-level works",
      "Emirates ID and passport copy of the authorised signatory",
    ],
    steps: [
      {
        title: "Pre-submission review",
        body: "We survey the unit, collect existing drawings, and check the proposed layout against the Dubai Building Code and the building's own regulations before anything is uploaded. Most rejections are avoidable at this stage.",
      },
      {
        title: "Drawing preparation & engineer stamping",
        body: "Architectural, MEP and (where needed) structural drawings are prepared to DM submission standards and stamped through licensed engineers.",
      },
      {
        title: "Dubai BPS submission",
        body: "The application is filed on the Dubai Building Permit System with the correct activity codes, consultant and contractor assignments, and the full document set.",
      },
      {
        title: "Comment resolution",
        body: "DM engineers review the package — including the automated BPS compliance scan — and raise comments. We answer each comment technically and resubmit until the permit is released.",
      },
      {
        title: "Permit issue & works",
        body: "The fit-out permit is issued and site work may legally start. We keep the permit, insurances and site board requirements in order during the works.",
      },
      {
        title: "Inspection & completion certificate",
        body: "On completion we arrange the DM inspection, close any site observations, and obtain the Building Completion Certificate so the unit can be legally occupied.",
      },
    ],
    fees: [
      { item: "DM fit-out permit fee", amount: "AED 1.00 per sq ft of built-up area", note: "capped for large industrial facilities" },
      { item: "Typical government fees — small office or retail unit", amount: "AED 1,000 – 3,500" },
      { item: "Knowledge & innovation fees", amount: "AED 20 per transaction", note: "applied on most DM transactions" },
      { item: "Completion certificate fee", amount: "from AED 500", note: "varies with project category" },
    ],
    feesNote:
      "Government fees are pass-through and depend on area, activity and scope. We quote our professional fee fixed and separate, before submission — no surprises inside the government total.",
    rejectionReasons: [
      "Drawings not matching site conditions found during inspection",
      "Missing landlord NOC or expired Ejari at the time of submission",
      "Electrical load schedules exceeding the building's approved capacity",
      "Fire & life-safety layouts not referenced to the current UAE code edition",
      "Unlicensed or wrongly-categorised contractor assigned to the application",
      "Change of use applied for without the required planning pre-approval",
    ],
    timelineNote:
      "A clean, complete DM submission for a standard commercial unit typically clears initial review within 5–10 working days; comment rounds add time, which is why our pre-submission check matters. Authority processing times are set by DM and can vary.",
    faqs: [
      {
        q: "Do I need a DM permit for minor works like painting or carpet replacement?",
        a: "Purely decorative works with no partition, ceiling, MEP or fire-system changes generally fall under minor-works allowances, but most buildings still require a landlord NOC. Anything touching partitions, ceilings, electrical circuits or plumbing needs a DM fit-out permit. We confirm the exact scope threshold for your building before you spend anything.",
      },
      {
        q: "What is Dubai BPS?",
        a: "The Dubai Building Permit System is Dubai Municipality's online permitting platform. All fit-out applications, consultant and contractor assignments, comment rounds and completion certificates are processed through it, including an automated AI compliance pre-scan of submitted drawings.",
      },
      {
        q: "Can work start while the DM application is under review?",
        a: "No. Starting fit-out works before the permit is issued exposes the tenant and the contractor to fines, stop-work orders and complications at completion-certificate stage. The reliable way to protect an opening date is to submit early and submit clean.",
      },
      {
        q: "Who applies — the tenant, the contractor or the consultant?",
        a: "The application is filed under a registered consultant and contractor, on behalf of the tenant or owner. As your permit consultant we coordinate all three roles so you sign once and we run the rest.",
      },
      {
        q: "How much does a DM fit-out permit cost in total?",
        a: "For a typical 1,000–2,000 sq ft commercial unit, government fees usually land between AED 1,500 and 3,500, driven mainly by the AED 1/sq ft permit fee. Our consultancy fee is quoted fixed after a free scope review. Use our permit cost calculator for an instant estimate.",
      },
    ],
    related: ["dubai-civil-defence-approval", "dewa-approval-noc", "rta-noc"],
    relatedProjects: ["office-fit-out-permit", "restaurant-fit-out-approval", "villa-renovation-permit"],
  },
  {
    slug: "dubai-civil-defence-approval",
    name: "Dubai Civil Defence",
    shortName: "DCD",
    title: "Dubai Civil Defence (DCD) Approval | Fire Safety Fit-Out Permits",
    metaDescription:
      "Dubai Civil Defence approval for fit-outs: when DCD review is mandatory, fire & life-safety drawings, approved contractors, inspection and completion. FitOutPermits.ae manages the full DCD cycle.",
    keywords: [
      "dcd approval",
      "civil defence approval",
      "dubai civil defence noc",
      "fire safety approval dubai",
      "dcd inspection",
    ],
    heroImage: {
      folder: "authorities",
      base: "civil-defence",
      alt: "Fire sprinkler and smoke detector installation being inspected inside a Dubai commercial fit-out",
    },
    jurisdiction: "All of Dubai — every emirate-wide project that alters fire and life-safety systems",
    intro: [
      "Dubai Civil Defence (DCD) reviews and approves anything in a fit-out that touches fire and life safety: sprinklers, smoke detection, emergency lighting, exit routes, fire-rated partitions, kitchen suppression systems and smoke-control provisions. DCD approval runs alongside your building authority permit — DM, Trakhees, DDA or a free zone — and both must be closed before a unit can open.",
      "DCD work is unforgiving on detail. Drawings must follow the UAE Fire and Life Safety Code of Practice, systems must be designed and installed by DCD-registered specialist contractors, and the final inspection checks the site against the approved drawings line by line. We design the approval strategy, manage the registered specialists, and walk the inspection with you.",
    ],
    whenRequired: [
      "Any change to sprinkler, detection, alarm or emergency-lighting layouts",
      "New partitions or ceilings that alter escape routes, travel distances or compartmentation",
      "Restaurant and commercial-kitchen fit-outs (hood suppression, gas detection, ducting)",
      "Change of occupancy classification — e.g. retail to assembly, office to clinic",
      "Warehouse racking, mezzanines and any high-hazard storage arrangement",
      "Buildings with a Civil Defence-monitored alarm system (most towers) — even for modest layout changes",
    ],
    documents: [
      "Building authority permit application reference (DM / Trakhees / DDA / free zone)",
      "Fire & life-safety drawings: detection, alarm, sprinkler, emergency lighting, exits",
      "Compartmentation and travel-distance layouts with occupancy calculations",
      "Specifications and DCD-approval certificates of the fire-protection materials used",
      "Appointment of DCD-registered fire-protection contractor(s)",
      "Trade licence and unit tenancy documents",
      "Third-party inspection certificates where the building type requires them",
    ],
    steps: [
      {
        title: "Life-safety scoping",
        body: "We map your layout against the UAE Fire and Life Safety Code — occupancy load, exits, travel distances, compartmentation — and identify exactly which DCD systems are affected before design begins.",
      },
      {
        title: "Fire & life-safety drawing package",
        body: "Detection, alarm, sprinkler, emergency lighting and exit-signage drawings are produced to DCD submission standards and coordinated with the architectural layout.",
      },
      {
        title: "DCD submission",
        body: "The package is submitted through the DCD engineering portal with the correct consultant and specialist-contractor registrations attached.",
      },
      {
        title: "Comment resolution & approval",
        body: "DCD reviewers raise technical comments; we resolve them and secure drawing approval so protected works can proceed.",
      },
      {
        title: "Installation by registered specialists",
        body: "Fire-protection systems are installed, modified and tested by DCD-registered contractors — a legal requirement, not a preference.",
      },
      {
        title: "Final inspection & completion",
        body: "We book the DCD inspection, attend on site, close observations, and obtain the Civil Defence completion approval your building authority needs to release its own certificate.",
      },
    ],
    fees: [
      { item: "DCD drawing review fee", amount: "from AED 300", note: "scales with floor area and system count" },
      { item: "Inspection fee", amount: "from AED 500" },
      { item: "System modification approvals", amount: "varies", note: "per system affected — detection, suppression, smoke control" },
    ],
    feesNote:
      "DCD fees depend on floor area and which systems are touched. They are modest next to the cost of a failed inspection — a re-inspection cycle can cost weeks of rent and a missed opening date.",
    rejectionReasons: [
      "Travel distances or dead-end corridors exceeding code limits after new partitions",
      "Sprinkler head layout not recalculated for the new ceiling plan",
      "Kitchen hood suppression missing or not matched to the cooking line",
      "Non-DCD-listed materials specified for fire-rated assemblies",
      "Works installed by a contractor without the required DCD specialist registration",
      "As-built site conditions deviating from the approved drawings at inspection",
    ],
    timelineNote:
      "Drawing review typically takes 5–10 working days per round. The critical path is almost always installation quality: sites that match their approved drawings pass first inspection; sites that improvised do not.",
    faqs: [
      {
        q: "My fit-out doesn't touch fire systems — do I still need DCD?",
        a: "If partitions, ceilings or the use of the space change, DCD review is almost always required because escape routes, detector coverage and sprinkler spacing are affected even when you don't touch the systems directly. Genuinely cosmetic works may be exempt; we confirm this in writing during scoping.",
      },
      {
        q: "Can any MEP contractor modify sprinklers or fire alarms?",
        a: "No. Fire-protection systems in Dubai may only be installed or modified by contractors holding the relevant DCD specialist registration. Using an unregistered contractor is a common and expensive mistake — the work must be redone and re-inspected.",
      },
      {
        q: "What happens at the DCD final inspection?",
        a: "An inspector walks the site against the approved drawings: detector and sprinkler positions, exit signage, emergency lighting operation, fire-rated construction, and system test certificates. We attend every inspection we manage and pre-walk the site beforehand so surprises happen before the inspector arrives, not during.",
      },
      {
        q: "Is DCD approval separate from my DM or free-zone permit?",
        a: "Yes — it is a parallel approval. Your building authority will not issue its completion certificate until Civil Defence has cleared the fire and life-safety scope. We run both tracks together so neither waits on the other.",
      },
    ],
    related: ["dubai-municipality-approval", "trakhees-approval", "dda-approval"],
    relatedProjects: ["restaurant-fit-out-approval", "warehouse-modification-permit", "gym-fit-out-approval"],
  },
  {
    slug: "dda-approval",
    name: "Dubai Development Authority",
    shortName: "DDA",
    title: "DDA Fit-Out Approval | TECOM, d3, Internet & Media City Permits",
    metaDescription:
      "DDA fit-out permit for TECOM free zones: Dubai Internet City, Media City, d3, Studio City and more. Requirements, documents, fees and process — managed end-to-end by FitOutPermits.ae.",
    keywords: [
      "dda approval",
      "dda fitout permit",
      "tecom fit out approval",
      "dubai design district approval",
      "d3 fit out permit",
      "dubai internet city fit out",
    ],
    heroImage: {
      folder: "authorities",
      base: "dda",
      alt: "Modern creative office fit-out in progress inside a Dubai Design District building",
    },
    jurisdiction: "TECOM Group free zones — Internet City, Media City, d3, Studio City, Science Park, Knowledge Park and others",
    intro: [
      "The Dubai Development Authority (DDA) regulates construction and fit-out across the TECOM Group business districts: Dubai Internet City, Dubai Media City, Dubai Design District (d3), Dubai Studio City, Dubai Science Park, Dubai Knowledge Park, Dubai Production City and more. If your unit sits in one of these communities, your fit-out permit comes from DDA — not Dubai Municipality.",
      "DDA runs a disciplined, digital-first process through its e-services portal, with clearly published fit-out guidelines per community. It expects consultant-led submissions, coordinated MEP documentation and Civil Defence alignment. We handle DDA daily and know each community's building-specific quirks — from d3's design-led review culture to the older Internet City towers' as-built discrepancies.",
    ],
    whenRequired: [
      "Any fit-out, reconfiguration or renovation of a unit inside a DDA-regulated community",
      "Office downsizing/combining — splitting or merging units changes the approved layout",
      "MEP changes: supplementary AC, IT room cooling, additional power or wet points",
      "Signage inside and outside the unit, including reception branding visible from common areas",
      "Reinstatement works at the end of a lease — DDA permits apply both ways",
    ],
    documents: [
      "Trade licence (free-zone licence for the community)",
      "Lease agreement / unit handover letter",
      "Building management NOC (TECOM community management)",
      "Consultant and contractor appointments — both registered with DDA",
      "Architectural drawings: existing, demolition and proposed layouts",
      "MEP drawing set with load schedules and chilled-water/DX tie-ins",
      "Fire & life-safety drawings for parallel DCD processing",
      "Contractor insurances: workmen's compensation and third-party liability",
    ],
    steps: [
      {
        title: "Community & building check",
        body: "DDA communities each publish fit-out guidelines, and individual buildings add their own rules. We verify both, plus the unit's as-built status, before design starts.",
      },
      {
        title: "Drawing package to DDA standards",
        body: "Architectural and MEP sets are produced with DDA title blocks, existing/demolition/proposed sequencing and the load documentation reviewers expect.",
      },
      {
        title: "e-Services submission",
        body: "We file through the DDA portal under registered consultant and contractor accounts, with building management's NOC attached.",
      },
      {
        title: "Parallel DCD track",
        body: "Fire & life-safety drawings run to Dubai Civil Defence at the same time, so neither approval waits on the other.",
      },
      {
        title: "Permit release & works",
        body: "Once DDA comments are cleared, the fit-out permit is released, hoarding and site access are arranged with community management, and works begin.",
      },
      {
        title: "Completion & closeout",
        body: "We coordinate the DDA completion inspection, DCD clearance and building handover documentation so the unit is legally ready to occupy.",
      },
    ],
    fees: [
      { item: "DDA fit-out permit fee", amount: "scales with unit area", note: "published per community in the DDA fee schedule" },
      { item: "Typical government fees — mid-size office", amount: "AED 1,500 – 4,000" },
      { item: "Community management deposits", amount: "refundable", note: "held by TECOM building management against common-area damage" },
    ],
    feesNote:
      "DDA and community-management charges vary by district and building. We confirm the exact fee stack in writing during scoping, and refundable deposits are flagged separately from true costs.",
    rejectionReasons: [
      "Consultant or contractor not registered with DDA at submission time",
      "Missing community-management NOC — the most common DDA bounce",
      "AC modifications exceeding the unit's chilled-water allocation",
      "Layouts inconsistent with the community's published fit-out guidelines",
      "Drawings missing the existing/demolition/proposed sequence DDA requires",
    ],
    timelineNote:
      "DDA initial review typically returns within about 5 working days per round. Standard office fit-outs with clean packages regularly achieve permit release in 2–3 weeks including the building NOC.",
    faqs: [
      {
        q: "My company is in Dubai Internet City — is my permit DM or DDA?",
        a: "DDA. Dubai Municipality does not issue fit-out permits inside TECOM communities. Your submission, inspection and completion all run through DDA e-services, with Civil Defence in parallel.",
      },
      {
        q: "Does DDA require a registered consultant even for a small office?",
        a: "Yes — DDA applications are filed under consultants and contractors registered with the authority. That's part of what you engage us for: registration, stamping and submission are included in the service.",
      },
      {
        q: "How is d3 different from other DDA communities?",
        a: "Dubai Design District applies additional design-review attention to visible elements — storefronts, signage, and anything affecting the district's public realm. Retail and F&B units in d3 should budget an extra design-review loop.",
      },
      {
        q: "Do I need a separate reinstatement permit when I leave?",
        a: "Yes. Returning a unit to its handover condition is itself permitted work in DDA communities. We handle reinstatement permits as a standalone service, often on tight lease-exit deadlines.",
      },
    ],
    related: ["dubai-civil-defence-approval", "dmcc-approval", "difc-fit-out-approval"],
    relatedProjects: ["office-fit-out-permit", "retail-shop-approval", "salon-fit-out-approval"],
  },
  {
    slug: "trakhees-approval",
    name: "Trakhees",
    shortName: "Trakhees",
    title: "Trakhees Approval | Fit-Out Permits for Palm, JAFZA Areas & PCFC Zones",
    metaDescription:
      "Trakhees fit-out approval for Palm Jumeirah, Dubai World communities and PCFC jurisdictions: CED engineering review, documents, fees, inspections. FitOutPermits.ae manages it end-to-end.",
    keywords: [
      "trakhees approval",
      "trakhees fit out permit",
      "trakhees ced",
      "palm jumeirah fit out approval",
      "trakhees approved engineer",
    ],
    heroImage: {
      folder: "authorities",
      base: "trakhees",
      alt: "Beachfront restaurant fit-out under construction on Palm Jumeirah with Dubai skyline behind",
    },
    jurisdiction: "PCFC jurisdictions — Palm Jumeirah, Dubai World communities, Dragon Mart, National Industries Park and select waterfront districts",
    intro: [
      "Trakhees is the licensing and engineering arm of the Ports, Customs & Free Zone Corporation (PCFC). Its Civil Engineering Department (CED) is the building authority for some of Dubai's highest-value retail and hospitality real estate — Palm Jumeirah, Dubai World communities and several waterfront and industrial districts.",
      "Trakhees CED runs one of the most engineering-rigorous reviews in the emirate: registered engineers, structured document control, and inspections that check installed work against stamped drawings. Restaurants, beach clubs and retail units on the Palm live under this regime. We are fluent in it — from Nakheel's parallel landlord requirements to CED's inspection sequencing.",
    ],
    whenRequired: [
      "Fit-out or renovation of any unit in a Trakhees-regulated community (hotels, malls and towers on Palm Jumeirah included)",
      "F&B fit-outs — kitchens, gas systems, grease management and outdoor seating all trigger CED review",
      "Structural changes: mezzanines, slab penetrations, facade and balcony alterations",
      "MEP modifications, including kitchen extract routes and additional cooling",
      "Signage and external branding in Trakhees jurisdictions",
    ],
    documents: [
      "Trade licence and tenancy/lease documents",
      "Landlord NOC (frequently Nakheel or the master community, in parallel)",
      "Trakhees-registered consultant and contractor appointments",
      "Architectural, MEP and structural drawing sets stamped by Trakhees-approved engineers",
      "Fire & life-safety package for the DCD track",
      "HSE documentation: method statements, risk assessments, site safety plan",
      "Third-party structural review where the scope demands it",
    ],
    steps: [
      {
        title: "Jurisdiction & landlord mapping",
        body: "Trakhees projects usually carry two gatekeepers — CED and the master developer. We confirm both sets of requirements before design, because their comments interact.",
      },
      {
        title: "Engineering package",
        body: "Drawings are produced and stamped by Trakhees-registered engineers, with the HSE documentation CED expects attached from day one.",
      },
      {
        title: "CED submission",
        body: "The application is filed with Trakhees CED with landlord NOCs, insurances and engineer registrations in place.",
      },
      {
        title: "Comment rounds",
        body: "CED reviews are detailed; we answer comments with engineering responses, not paperwork shuffles, which is what keeps rounds short.",
      },
      {
        title: "Permit & supervised works",
        body: "Works proceed under the stamped drawings with the site inspections CED schedules mid-works for larger scopes.",
      },
      {
        title: "Final inspection & completion",
        body: "We manage the CED completion inspection, snag closure and certificate release, plus the landlord's own handover sign-off.",
      },
    ],
    fees: [
      { item: "CED permit fees", amount: "scale with built-up area and scope" },
      { item: "Typical government fees — restaurant on the Palm", amount: "AED 3,000 – 8,000", note: "F&B scopes sit at the higher end" },
      { item: "HSE / site registrations", amount: "varies", note: "per contractor mobilisation" },
    ],
    feesNote:
      "Trakhees scopes usually carry two fee stacks — authority and master developer. Our quotation separates both, itemised, before you commit to a lease timeline.",
    rejectionReasons: [
      "Engineers or contractors not carrying current Trakhees registration",
      "Kitchen extract and fresh-air routes not coordinated with base-building risers",
      "Missing or expired landlord NOC at submission",
      "HSE documentation treated as an afterthought — CED reads it",
      "Structural scope submitted without the required calculations package",
    ],
    timelineNote:
      "Allow 2–4 weeks for first approval on straightforward scopes, longer for F&B and structural work. The Palm's premium buildings add landlord review time — start the NOC early; it is the most common critical-path item.",
    faqs: [
      {
        q: "Is Trakhees the same as Nakheel?",
        a: "No. Nakheel is the master developer and landlord of communities like Palm Jumeirah; Trakhees CED is the government building authority for the same areas. A typical Palm project needs Nakheel's NOC and Trakhees' permit — we run both in parallel.",
      },
      {
        q: "Do Trakhees projects need specially registered engineers?",
        a: "Yes. Drawings must be prepared and stamped by engineers registered with Trakhees, and contractors must hold Trakhees registration to mobilise. This is built into our service.",
      },
      {
        q: "Why are restaurant approvals on the Palm slower?",
        a: "F&B triggers every review track at once: CED engineering, Civil Defence suppression and gas, food-safety layout review, landlord design approval and often outdoor-seating consent. Sequenced correctly they overlap; sequenced badly they queue. Sequencing is our job.",
      },
      {
        q: "Does Trakhees inspect during the works, not just at the end?",
        a: "For larger and structural scopes, yes — CED schedules staged inspections. Sites that follow their stamped drawings sail through; undocumented site changes are where projects lose weeks.",
      },
    ],
    related: ["nakheel-noc", "dubai-civil-defence-approval", "jafza-approval"],
    relatedProjects: ["restaurant-fit-out-approval", "retail-shop-approval", "hotel-fit-out-approval"],
  },
  {
    slug: "dmcc-approval",
    name: "DMCC / Concordia",
    shortName: "DMCC",
    title: "DMCC Fit-Out Approval JLT | Concordia Permit Process & Fees",
    metaDescription:
      "DMCC fit-out approval in JLT through Concordia: documents, process, fees and inspections for offices, retail and restaurants in Jumeirah Lakes Towers. Managed end-to-end by FitOutPermits.ae.",
    keywords: [
      "dmcc approval",
      "concordia approval",
      "concordia fit out approval jlt",
      "jlt fit out permit",
      "dmcc renovation permit",
    ],
    heroImage: {
      folder: "authorities",
      base: "dmcc",
      alt: "Office fit-out installation inside a Jumeirah Lakes Towers high-rise with lake views",
    },
    jurisdiction: "Jumeirah Lakes Towers (JLT) — the DMCC free zone, administered day-to-day through Concordia",
    intro: [
      "Fit-outs in Jumeirah Lakes Towers are approved inside the DMCC free zone's own framework, with Concordia acting as the community's facilities and fit-out management gateway for most towers. If your office, shop or restaurant is in JLT, your permit path is DMCC/Concordia — with Dubai Civil Defence running in parallel for fire and life safety.",
      "JLT's towers vary enormously in age, riser capacity and documentation quality, which is exactly where experience pays. We know which buildings demand chilled-water recalculations, which enforce strict working-hours and hoisting rules, and how to keep Concordia's review and DCD's approval moving on the same clock.",
    ],
    whenRequired: [
      "Office, retail and F&B fit-outs anywhere in the JLT free zone",
      "Unit combinations and subdivisions — common in JLT's investor-owned towers",
      "MEP alterations: supplementary cooling, kitchen extract, additional wet points",
      "Renovation or reinstatement between tenancies",
      "Signage and shopfront changes at podium retail levels",
    ],
    documents: [
      "DMCC trade licence (or landlord documents for owner works)",
      "Lease / title deed and unit plan",
      "Concordia fit-out application forms and building NOC",
      "Contractor registration, insurances and security deposits",
      "Architectural and MEP drawing sets (existing + proposed)",
      "Fire & life-safety drawings for DCD",
      "Method statements, work-hours plan and hoisting arrangements for tower logistics",
    ],
    steps: [
      {
        title: "Tower-specific scoping",
        body: "Each JLT tower has its own handbook: deposits, working hours, riser access, lift protection. We collect the building's actual rules before pricing or programming anything.",
      },
      {
        title: "Drawing package",
        body: "Architectural and MEP sets are prepared to Concordia's submission standard, with chilled-water and electrical loads reconciled to the tower's allocations.",
      },
      {
        title: "Concordia submission & deposits",
        body: "We file the fit-out application, place the refundable deposits, and schedule the pre-fit-out unit inspection where the building requires one.",
      },
      {
        title: "DCD parallel track",
        body: "Fire and life-safety drawings run to Civil Defence simultaneously; JLT towers are DCD-monitored, so this track is never optional.",
      },
      {
        title: "Permit, works & tower logistics",
        body: "Works proceed under Concordia's site rules — hoisting slots, protection, permits-to-work. We keep the paperwork side airtight so your contractor keeps site access.",
      },
      {
        title: "Completion, inspection & deposit recovery",
        body: "Final inspections are closed with Concordia and DCD, completion documents issued, and your deposits recovered — a step surprisingly many tenants forget.",
      },
    ],
    fees: [
      { item: "Concordia fit-out application & review", amount: "AED 1,000 – 3,000 typical", note: "varies by tower and unit size" },
      { item: "Refundable fit-out deposit", amount: "AED 5,000 – 20,000", note: "returned after clean handover" },
      { item: "DCD review & inspection fees", amount: "from AED 800 combined" },
    ],
    feesNote:
      "JLT's real cost variable is the refundable deposit and tower logistics, not the review fee. We flag refundable versus non-refundable clearly in every quotation.",
    rejectionReasons: [
      "Cooling loads exceeding the unit's chilled-water allocation",
      "Missing building-specific forms — JLT towers do not share one checklist",
      "Contractor insurances not naming the building and Concordia as required",
      "Kitchen extract proposed through facades or corridors instead of designated risers",
      "Fit-out started before deposit placement and pre-inspection — an instant stop-work",
    ],
    timelineNote:
      "Straightforward JLT office fit-outs typically secure approval in 1–3 weeks. F&B units depend heavily on extract riser availability — we verify that before you sign the lease, not after.",
    faqs: [
      {
        q: "Is Concordia a government authority?",
        a: "Concordia is the community management company that administers fit-out approvals and site rules across most of JLT on behalf of the DMCC free zone. Civil Defence remains the government authority for fire and life safety, and both must clear your project.",
      },
      {
        q: "Can I open a restaurant in any JLT tower?",
        a: "No — kitchen extract riser capacity is the deciding factor and many towers have none spare. We run a pre-lease feasibility check on the specific unit before you commit; it is the highest-value hour you'll spend on the project.",
      },
      {
        q: "How do I get my fit-out deposit back?",
        a: "Clean completion: final inspections passed, common areas undamaged, waste cleared, and closeout documents submitted. We track the deposit as a deliverable of the project, with the handover evidence Concordia expects.",
      },
      {
        q: "Do DMCC approvals cover signage?",
        a: "Podium and external signage needs its own approval round with community management, and internally-illuminated or large-format signage may add DCD electrical review. We bundle signage into the main application where the tower allows it.",
      },
    ],
    related: ["dda-approval", "dubai-civil-defence-approval", "dewa-approval-noc"],
    relatedProjects: ["office-fit-out-permit", "restaurant-fit-out-approval", "cafe-fit-out-approval"],
  },
  {
    slug: "jafza-approval",
    name: "JAFZA",
    shortName: "JAFZA",
    title: "JAFZA Fit-Out Approval | Jebel Ali Free Zone Permits & EHS",
    metaDescription:
      "JAFZA fit-out and modification approvals in Jebel Ali Free Zone: offices, warehouses, industrial units. EHS requirements, documents, fees and inspections managed by FitOutPermits.ae.",
    keywords: [
      "jafza approval",
      "jafza fit out permit",
      "jebel ali free zone approval",
      "jafza warehouse modification",
      "jafza ehs",
    ],
    heroImage: {
      folder: "authorities",
      base: "jafza",
      alt: "Industrial warehouse fit-out with mezzanine steel structure inside Jebel Ali Free Zone",
    },
    jurisdiction: "Jebel Ali Free Zone — offices, warehouses, industrial and logistics facilities",
    intro: [
      "Fit-outs and facility modifications inside Jebel Ali Free Zone are approved by JAFZA's engineering and EHS departments, under the wider Trakhees/PCFC regulatory umbrella. The stakes are industrial-scale: mezzanines, racking, cold rooms, production lines, hazardous-material stores and heavy power upgrades — alongside conventional office fit-outs in JAFZA's office parks.",
      "JAFZA reviews are engineering-led and safety-led in equal measure. Structural calculations, fire strategy and EHS compliance carry as much weight as the drawings themselves. We manage the full cycle — from concept compliance checks that protect your lease decision, through permits, staged inspections and the completion certificates your operations licence depends on.",
    ],
    whenRequired: [
      "Warehouse modifications: mezzanines, racking above threshold heights, cold rooms, internal offices",
      "Industrial installations: production equipment with structural, power or extract implications",
      "Office fit-outs in JAFZA One and the free zone's office buildings",
      "Electrical load increases, standby generation and solar installations",
      "Any change affecting the facility's approved fire strategy or hazardous-material storage",
    ],
    documents: [
      "JAFZA licence and lease agreement for the facility",
      "Consultant and contractor registrations (Trakhees/JAFZA-recognised)",
      "Architectural and structural drawings with calculations for mezzanines/racking",
      "MEP drawings including revised electrical load schedules",
      "Fire strategy and life-safety drawings for the DCD-equivalent review",
      "EHS documentation: risk assessments, method statements, chemical inventories where relevant",
      "Equipment specifications for process installations",
    ],
    steps: [
      {
        title: "Feasibility & compliance check",
        body: "Before you commit capital, we verify the facility can legally host the intended modification — structural capacity, fire strategy headroom, power availability and EHS classification.",
      },
      {
        title: "Engineering package",
        body: "Structural calculations, architectural and MEP drawings are produced to JAFZA submission standards by registered engineers.",
      },
      {
        title: "JAFZA / EHS submission",
        body: "Applications are filed with the engineering department and EHS in the sequence JAFZA expects, with contractor registrations and insurances attached.",
      },
      {
        title: "Comment resolution & permit",
        body: "We close technical comments and secure the modification permit before mobilisation.",
      },
      {
        title: "Staged inspections",
        body: "Structural and fire-safety milestones are inspected during the works; we schedule and attend each one.",
      },
      {
        title: "Completion certification",
        body: "Final inspections are closed and completion certificates issued — the documents your operational and insurance compliance rest on.",
      },
    ],
    fees: [
      { item: "JAFZA engineering review fees", amount: "scale with scope and area" },
      { item: "Typical government fees — warehouse mezzanine", amount: "AED 3,000 – 10,000" },
      { item: "EHS reviews & registrations", amount: "varies", note: "by activity classification" },
    ],
    feesNote:
      "Industrial scopes vary too widely for a single fee table — we provide a written government-fee estimate per project, separated from our fixed professional fee.",
    rejectionReasons: [
      "Mezzanine or racking submitted without full structural calculations",
      "Fire strategy not updated for changed storage heights or commodity classes",
      "Electrical upgrades exceeding the substation allocation without a power application",
      "EHS documentation missing chemical inventories or process risk assessments",
      "Works begun before permit — JAFZA enforcement is strict and visible",
    ],
    timelineNote:
      "Office fit-outs run 2–3 weeks to permit on clean packages. Industrial modifications depend on structural and EHS review depth — typically 3–6 weeks. Build this into equipment delivery schedules early.",
    faqs: [
      {
        q: "Is JAFZA approval the same as Trakhees approval?",
        a: "They're related — JAFZA sits within the PCFC family, and Trakhees CED handles engineering review for many scopes — but the application path, EHS involvement and inspection regime inside the free zone are JAFZA-specific. We manage whichever combination your facility triggers.",
      },
      {
        q: "Do I need approval for warehouse racking?",
        a: "Above modest heights, yes — racking is a structural and fire-safety matter: seismic checks, aisle widths, in-rack sprinklers and commodity classification all come into review. Unapproved racking is a frequent insurance-claim failure point.",
      },
      {
        q: "Can I install solar panels on my JAFZA facility?",
        a: "Yes, with structural verification of the roof, electrical integration approval and the free zone's permit. It's a well-trodden path now and we manage it as a standard scope.",
      },
      {
        q: "What's the biggest cause of delay in JAFZA projects?",
        a: "Submitting the modification as if it were a simple fit-out. Industrial scopes are engineering projects; when the structural and EHS story is complete on day one, JAFZA moves quickly.",
      },
    ],
    related: ["trakhees-approval", "dubai-civil-defence-approval", "dewa-approval-noc"],
    relatedProjects: ["warehouse-modification-permit", "office-fit-out-permit"],
  },
  {
    slug: "dewa-approval-noc",
    name: "DEWA",
    shortName: "DEWA",
    title: "DEWA Approval & NOC | Electrical Load, Meters and Connections",
    metaDescription:
      "DEWA approvals for fit-outs: NOCs, electrical load increases, new meters, temporary connections and inspections. FitOutPermits.ae coordinates DEWA alongside your fit-out permit.",
    keywords: [
      "dewa approval",
      "dewa noc",
      "dewa load increase",
      "dewa new connection",
      "dewa approved contractor",
    ],
    heroImage: {
      folder: "authorities",
      base: "dewa",
      alt: "Electrical distribution board installation for a commercial fit-out in Dubai",
    },
    jurisdiction: "All of Dubai — electricity and water connections, loads and meters",
    intro: [
      "The Dubai Electricity and Water Authority (DEWA) approves the electrical and water side of your fit-out: new meters, load increases, temporary construction supplies, and any work that touches the connection between your unit and the grid. Most fit-outs of substance — commercial kitchens, clinics, gyms, salons — need a DEWA interaction alongside their building permit.",
      "DEWA work must be designed and executed through DEWA-approved contractors, and its inspection regime checks installations against the approved single-line diagrams. We calculate loads honestly, file the applications, and coordinate the inspections so power is live when your programme needs it — not weeks after handover.",
    ],
    whenRequired: [
      "Electrical load increase — new kitchens, HVAC, medical or gym equipment routinely exceed base allocations",
      "New or separated meters when units are split, combined or sublet",
      "Temporary construction power for the fit-out works themselves",
      "Water connection changes: new pantries, additional toilets, commercial kitchens",
      "Any modification to the unit's main distribution board or rising-main connection",
    ],
    documents: [
      "Trade licence and Ejari / lease for the premises",
      "Landlord NOC for load or meter changes",
      "Single-line diagrams and load schedules by a DEWA-approved electrical contractor",
      "Approved fit-out permit reference from the building authority",
      "Passport/Emirates ID of the authorised signatory",
      "Existing DEWA account details or final bill for meter transactions",
    ],
    steps: [
      {
        title: "Load assessment",
        body: "We calculate the true connected and demand loads of your fitted unit, compare them to the existing allocation, and determine whether an increase application is needed at all — often it isn't, and that saves weeks.",
      },
      {
        title: "Design & documentation",
        body: "Single-line diagrams and load schedules are prepared by DEWA-approved contractors to DEWA's submission standard.",
      },
      {
        title: "NOC / application filing",
        body: "The correct DEWA service is applied for — load increase, new meter, temporary supply — with the landlord and building-authority documents attached.",
      },
      {
        title: "Installation & inspection",
        body: "Works proceed with the approved contractor; DEWA inspects the installation against the approved diagrams before energising.",
      },
      {
        title: "Meter release & activation",
        body: "Meters are installed or re-rated, the account is activated, and your unit has legal, billed power and water matched to its actual demand.",
      },
    ],
    fees: [
      { item: "Load increase / connection fees", amount: "per kW of additional demand", note: "per DEWA's published tariff" },
      { item: "Meter installation & security deposits", amount: "AED 2,000+ commercial", note: "deposit scales with expected consumption" },
      { item: "Temporary construction supply", amount: "varies", note: "by duration and capacity" },
    ],
    feesNote:
      "DEWA charges are tariff-based and predictable once the load is known — which is why the load assessment comes first. Deposits are refundable account items, not costs.",
    rejectionReasons: [
      "Load schedules inflated with unrealistic diversity assumptions",
      "Non-DEWA-approved contractor preparing or executing the electrical works",
      "Installation deviating from the approved single-line diagram at inspection",
      "Missing landlord NOC for the additional building load",
      "Meter applications with unresolved previous accounts on the premises",
    ],
    timelineNote:
      "Simple NOCs and meter transactions clear in days. Load increases involving the building's rising mains — or, rarely, the local substation — take longer; the load assessment tells us which path you're on before we promise dates.",
    faqs: [
      {
        q: "How do I know if my fit-out needs a DEWA load increase?",
        a: "Compare the fitted unit's demand load to its existing allocation. A standard office usually fits; a commercial kitchen, clinic, gym or salon usually doesn't. We run this calculation as part of every fit-out scope — it's the difference between a permit condition discovered in week one versus week ten.",
      },
      {
        q: "Can my regular electrician do DEWA works?",
        a: "Only DEWA-approved contractors can design, submit and execute works touching DEWA's network and metering. Fit-out wiring inside the unit is the fit-out contractor's job; the connection side is regulated.",
      },
      {
        q: "Does DEWA approval replace my building permit?",
        a: "No — they're complementary. The building authority approves the fit-out; DEWA approves the power and water serving it. Restaurants and clinics typically need both plus Civil Defence, all sequenced together.",
      },
      {
        q: "What is a DEWA NOC, exactly?",
        a: "A no-objection confirmation from DEWA for works near or affecting its assets — excavations, connections, load changes. Which flavour you need depends on scope; filing the wrong one is a common DIY delay.",
      },
    ],
    related: ["dubai-municipality-approval", "rta-noc", "dubai-civil-defence-approval"],
    relatedProjects: ["restaurant-fit-out-approval", "clinic-fit-out-approval", "gym-fit-out-approval"],
  },
  {
    slug: "rta-noc",
    name: "RTA",
    shortName: "RTA",
    title: "RTA NOC Dubai | Roads & Transport Authority No Objection Certificates",
    metaDescription:
      "RTA NOC in Dubai explained: when road, access, parking or right-of-way works need Roads & Transport Authority clearance, documents, timelines and how to check RTA NOC status. FitOutPermits.ae manages the process.",
    keywords: [
      "rta noc",
      "rta noc status",
      "rta no objection certificate",
      "rta noc for trade license",
      "road works noc dubai",
    ],
    heroImage: {
      folder: "authorities",
      base: "rta",
      alt: "Street-level retail frontage on a Dubai road with marked parking and access works",
    },
    jurisdiction: "All of Dubai — anything touching roads, access, parking, right-of-way or transport infrastructure",
    intro: [
      "The Roads and Transport Authority (RTA) issues No Objection Certificates for works and activities that touch Dubai's road network and right-of-way: new or modified access points, parking layout changes, valet operations, works near roads and metro infrastructure, hoarding that encroaches on footpaths, and certain trade-licence activities that depend on transport infrastructure.",
      "For fit-out projects, RTA typically enters the picture at street level — restaurants adding outdoor seating toward the footpath, showrooms changing customer access, drive-through configurations, loading-bay changes, or construction logistics that occupy any part of the public realm. We identify the trigger early, file the correct NOC category and track it to release.",
    ],
    whenRequired: [
      "Outdoor seating, kiosks or displays extending toward the public footpath",
      "New, widened or relocated vehicle access to a plot",
      "Parking layout changes, valet stands and drive-through lanes",
      "Construction logistics on or beside the road: hoarding, cranes, skips, temporary parking suspensions",
      "Works within RTA's protection zones — near roads, bridges, or Metro/tram infrastructure",
      "Trade-licence activities RTA reviews (transport-related businesses)",
    ],
    documents: [
      "Site plan / affection plan showing the plot and adjacent right-of-way",
      "Layout drawings of the proposed works with dimensions to the road edge",
      "Trade licence and landlord NOC",
      "Traffic-management plan for works affecting live traffic or pedestrians",
      "Building-authority permit reference for the parent fit-out",
      "Appointed contractor details and insurances",
    ],
    steps: [
      {
        title: "Trigger check",
        body: "We establish whether your scope actually enters RTA jurisdiction — many applicants file NOCs they don't need, and others discover missing ones at inspection. Both cost weeks.",
      },
      {
        title: "Category & drawings",
        body: "RTA NOCs are category-specific. We prepare the drawings and traffic-management documentation for the correct category the first time.",
      },
      {
        title: "Submission & tracking",
        body: "The application is filed through RTA's NOC portal and actively tracked — 'submitted' is not a status we consider progress.",
      },
      {
        title: "Comment resolution",
        body: "RTA comments usually concern sight lines, pedestrian clearances and traffic management; we resolve them with revised drawings quickly.",
      },
      {
        title: "NOC release & compliance",
        body: "The NOC is released with conditions; we brief your contractor on them, because NOC conditions are inspected, not filed and forgotten.",
      },
    ],
    fees: [
      { item: "RTA NOC application fees", amount: "vary by category", note: "many standard NOCs are low-cost or free" },
      { item: "Right-of-way occupation charges", amount: "time-based", note: "for hoarding, lane or parking suspensions" },
    ],
    feesNote:
      "RTA fees are modest; the real cost of getting this wrong is programme time. An access or seating scheme designed without RTA input can force redesign after the interior is already approved.",
    rejectionReasons: [
      "Sight-line obstructions at vehicle access points",
      "Pedestrian clearance below minimums after seating or display encroachment",
      "Traffic-management plans missing for works beside live lanes",
      "Conflicts with existing RTA assets — signals, stops, crossings, Metro protection zones",
      "Applications filed in the wrong NOC category",
    ],
    timelineNote:
      "Simple NOCs release within about a week; schemes affecting live traffic or Metro protection zones take longer and may involve multiple RTA departments. We sequence RTA with your main permit so neither blocks the other.",
    faqs: [
      {
        q: "How do I check my RTA NOC status?",
        a: "Through the RTA NOC portal using your application reference. When we manage the application, status-chasing is our job — you get told when something needs your decision, not when something needs a refresh button.",
      },
      {
        q: "Does a restaurant with outdoor seating always need RTA?",
        a: "Only when the seating extends into or affects the public right-of-way — footpaths, parking or road reserve. Seating on private podium or plot area is a landlord and municipality matter. The site plan answers it in a day.",
      },
      {
        q: "Why would a fit-out ever involve the Metro?",
        a: "Buildings near Metro or tram lines sit inside protection zones where even hoarding, cranage and certain MEP works need RTA rail clearance. JLT, Marina and Sheikh Zayed Road frontages hit this constantly.",
      },
      {
        q: "Can you get an RTA NOC retroactively?",
        a: "Regularisation is possible but slower and pricier than doing it right, and enforcement can suspend the non-compliant element meanwhile. If you've already built it, we can regularise it — but if you're reading this before building, don't.",
      },
    ],
    related: ["dubai-municipality-approval", "dewa-approval-noc", "dubai-civil-defence-approval"],
    relatedProjects: ["restaurant-fit-out-approval", "retail-shop-approval", "cafe-fit-out-approval"],
  },
  {
    slug: "dha-approval",
    name: "Dubai Health Authority",
    shortName: "DHA",
    title: "DHA Approval | Clinic, Pharmacy & Medical Facility Fit-Out Permits",
    metaDescription:
      "DHA facility approval for clinics, pharmacies and medical centres in Dubai: layout requirements, room standards, documents and the approval sequence with DM/free zone and Civil Defence. FitOutPermits.ae manages it.",
    keywords: [
      "dha approval",
      "dha clinic approval",
      "clinic fit out approval dubai",
      "pharmacy license dubai",
      "dha facility license",
    ],
    heroImage: {
      folder: "authorities",
      base: "dha",
      alt: "Newly fitted medical clinic consultation room in Dubai with examination bed and clinical finishes",
    },
    jurisdiction: "All of Dubai (outside DHCC) — healthcare facility layouts and licensing",
    intro: [
      "Every clinic, medical centre, pharmacy, dental practice and day surgery in Dubai needs its physical facility approved by the Dubai Health Authority (DHA) before a facility licence is issued. DHA reviews the layout itself: room sizes, clinical flows, sterilisation provisions, accessibility, finishes and signage — against its published health facility guidelines.",
      "The trap for healthcare operators is sequence. The DHA layout approval, the building authority's fit-out permit, Civil Defence and DEWA all interlock — and a layout that sails through the building permit can still fail DHA's clinical review. We design the approval sequence so the facility you build is the facility DHA licenses, first time.",
    ],
    whenRequired: [
      "New clinic, polyclinic, dental, day-surgery or diagnostic facility fit-outs",
      "Pharmacy fit-outs — retail and clinical",
      "Expansion or reconfiguration of licensed facilities: added treatment rooms, imaging, labs",
      "Relocation of an existing licence to new premises",
      "Adding regulated services (aesthetics, physiotherapy, IV therapy) to an existing layout",
    ],
    documents: [
      "DHA initial approval of the healthcare activity and professional licences in progress",
      "Detailed architectural layout with room schedules, dimensions and clinical zoning",
      "MEP drawings: medical gas (where applicable), HVAC with clinical air-change rates, drainage",
      "Finishes schedule — clinical areas have specific washability and flooring requirements",
      "Equipment layout for treatment, sterilisation (CSSD) and imaging rooms",
      "Trade licence / free-zone licence and tenancy documents",
      "Building authority and Civil Defence application references",
    ],
    steps: [
      {
        title: "Pre-lease feasibility",
        body: "We test the shortlisted unit against DHA's spatial minimums — room counts, corridor widths, accessible toilets, sterilisation flow — before you sign. Undersized units are the most expensive mistake in healthcare fit-outs.",
      },
      {
        title: "DHA-compliant layout design",
        body: "The clinical layout is developed to DHA's health facility guidelines for your specific activity mix, alongside the building-authority drawing set.",
      },
      {
        title: "Parallel submissions",
        body: "DHA layout approval, the building fit-out permit (DM, DDA, Trakhees or free zone) and DCD run in a coordinated sequence — each attached to the same drawing baseline.",
      },
      {
        title: "Comment resolution",
        body: "DHA clinical comments and building-authority technical comments are resolved on one coordinated drawing set, so approvals never diverge.",
      },
      {
        title: "Fit-out & clinical fit checks",
        body: "During works we hold the build to the approved clinical layout — a moved wall that seems harmless can invalidate the DHA approval.",
      },
      {
        title: "Final inspections & facility licence",
        body: "Building completion, DCD clearance and the DHA facility inspection are closed in order, ending with the facility licence that lets you treat patients.",
      },
    ],
    fees: [
      { item: "DHA facility/layout review fees", amount: "per DHA's schedule", note: "varies by facility category" },
      { item: "Building authority + DCD fees", amount: "as per the parent jurisdiction" },
      { item: "Typical combined government fees — small clinic", amount: "AED 5,000 – 12,000" },
    ],
    feesNote:
      "Healthcare projects carry three or four parallel fee stacks. Our quotation lists every authority's fees separately with what triggers each — clarity your business plan can actually use.",
    rejectionReasons: [
      "Treatment rooms below DHA minimum dimensions",
      "Missing or wrongly-located sterilisation / dirty utility provisions",
      "Clinical flows crossing — sterile and soiled paths sharing corridors",
      "HVAC not meeting clinical air-change or pressure requirements",
      "Accessible toilet and reception provisions not meeting accessibility code",
      "Finishes unsuitable for infection control in clinical zones",
    ],
    timelineNote:
      "A well-sequenced clinic approval cycle — DHA layout, building permit, DCD, build, inspections, facility licence — typically runs 8–14 weeks end to end. The sequence, not any single authority, is what we compress.",
    faqs: [
      {
        q: "Which comes first — DHA approval or the fit-out permit?",
        a: "DHA layout approval should lead, because clinical comments change walls. The building permit follows on the DHA-cleared layout, and DCD runs alongside. Building first and asking DHA later is how clinics end up demolishing new partitions.",
      },
      {
        q: "Do pharmacies have different layout rules?",
        a: "Yes — dispensing counters, controlled-drug storage, shelving clearances and the dispensing workflow have their own DHA requirements, and mall pharmacies add landlord design rules on top. It's a compact but dense approval.",
      },
      {
        q: "My clinic is in Dubai Healthcare City — is that still DHA?",
        a: "No. DHCC facilities are regulated by DHCA within the free zone, with its own facility standards. The clinical logic is similar; the process and portal are different. We work in both jurisdictions.",
      },
      {
        q: "Can I fit out a normal office unit as a clinic?",
        a: "Sometimes — zoning, drainage capacity, HVAC and accessibility decide it. That's a feasibility question we answer before lease signature, because retrofitting drainage into a tower office floor is possible but never cheap.",
      },
    ],
    related: ["dhcc-approval", "dubai-municipality-approval", "dubai-civil-defence-approval"],
    relatedProjects: ["clinic-fit-out-approval", "pharmacy-fit-out-approval", "salon-fit-out-approval"],
  },
  {
    slug: "nakheel-noc",
    name: "Nakheel",
    shortName: "Nakheel",
    title: "Nakheel NOC | Villa Modifications & Fit-Outs in Nakheel Communities",
    metaDescription:
      "Nakheel NOC for villa modifications, extensions and commercial fit-outs across Palm Jumeirah, JVC, Discovery Gardens and other Nakheel communities. Process, documents and fees — managed by FitOutPermits.ae.",
    keywords: [
      "nakheel noc",
      "nakheel approval",
      "villa modification nakheel",
      "palm jumeirah villa extension",
      "nakheel noc charges",
    ],
    heroImage: {
      folder: "authorities",
      base: "nakheel",
      alt: "Villa extension construction in a Nakheel master community with palm-lined street",
    },
    jurisdiction: "Nakheel master communities — Palm Jumeirah, Jumeirah Village, Discovery Gardens, Jumeirah Islands, Al Furjan and more",
    intro: [
      "Nakheel is the master developer of some of Dubai's largest communities, and any modification within them — villa extensions, pool additions, landscape walls, pergolas, commercial fit-outs in Nakheel-owned retail — needs Nakheel's No Objection Certificate before the government authority (Trakhees or Dubai Municipality, depending on the community) will issue its permit.",
      "Nakheel's review protects community design guidelines: setbacks, heights, external materials, streetscape appearance and infrastructure loads. We prepare NOC packages that answer those concerns on first submission, then carry the same drawings through Trakhees or DM so the two approvals never contradict each other.",
    ],
    whenRequired: [
      "Villa extensions, additional floors and room conversions in Nakheel communities",
      "Swimming pools, pergolas, garden rooms and landscape structures",
      "Facade, boundary-wall and driveway modifications",
      "Commercial unit fit-outs in Nakheel retail assets (Palm strips, community centres)",
      "Any external works visible from the street or common areas",
    ],
    documents: [
      "Title deed and owner's passport/Emirates ID (or tenancy + owner NOC for tenants)",
      "Community-specific NOC application forms",
      "Architectural drawings: site plan with setbacks, elevations, sections of the proposed works",
      "Structural drawings and calculations for extensions and pools",
      "Contractor's licence and Nakheel registration where the community requires it",
      "Neighbour consent letters for works affecting shared boundaries (community-specific)",
    ],
    steps: [
      {
        title: "Community guideline check",
        body: "Each Nakheel community has its own modification guidelines — plot coverage, height, style constraints. We verify your concept against the current guideline document before drawing anything.",
      },
      {
        title: "NOC drawing package",
        body: "Drawings are prepared to Nakheel's submission format with the setback, elevation and material information its reviewers check first.",
      },
      {
        title: "Nakheel NOC submission",
        body: "The application is filed with the community's modification team, fees paid, and review tracked.",
      },
      {
        title: "Government permit",
        body: "With the NOC released, the same package is carried into Trakhees or Dubai Municipality for the statutory building/fit-out permit.",
      },
      {
        title: "Works with community compliance",
        body: "Nakheel communities enforce working hours, access routes and site conduct; we brief contractors so security incidents never stall the programme.",
      },
      {
        title: "Completion & closeout",
        body: "Final inspections close both the government permit and Nakheel's own completion sign-off, protecting your title position for future sale.",
      },
    ],
    fees: [
      { item: "Nakheel NOC fee", amount: "AED 500 – 5,000+", note: "by community and modification type" },
      { item: "Refundable security deposit", amount: "community-specific", note: "returned after compliant completion" },
      { item: "Government permit fees", amount: "per Trakhees / DM schedules", note: "in addition to Nakheel's" },
    ],
    feesNote:
      "Nakheel charges vary noticeably between communities — Palm Jumeirah villa NOCs sit at the premium end. We confirm the current fee sheet for your specific community before you commit.",
    rejectionReasons: [
      "Extensions exceeding plot-coverage or height limits for the community",
      "External materials or colours outside the community palette",
      "Setback encroachments toward neighbours or the street",
      "Structural proposals without calculations for pools and slabs",
      "Works started before NOC — Nakheel security reports are systematic",
    ],
    timelineNote:
      "Nakheel NOC review typically runs 2–4 weeks depending on community and season, then the government permit follows. For villa projects, start the NOC while your interior design is still being finalised — the tracks overlap well.",
    faqs: [
      {
        q: "I own my villa — why does Nakheel get a say?",
        a: "Freehold ownership in a master community comes with the community's declaration and design guidelines attached to the title. Nakheel's NOC confirms your modification respects them. It protects your asset value too — unapproved works surface at every resale.",
      },
      {
        q: "Is the Nakheel NOC enough to start building?",
        a: "No — it's the community's consent, not the government's permit. Trakhees or Dubai Municipality (depending on the community) still issues the statutory permit. We run both as one project.",
      },
      {
        q: "Do internal-only villa renovations need Nakheel?",
        a: "Purely internal, non-structural works often don't need a full NOC, but most communities still require notification and contractor access registration. Structural, plumbing and anything visible externally does need the NOC. We confirm per community in writing.",
      },
      {
        q: "What are typical Nakheel NOC charges?",
        a: "From a few hundred dirhams for minor works to several thousand for major extensions and pools, plus a refundable deposit. The exact sheet depends on your community — ask us with your plot details and we'll confirm same-day.",
      },
    ],
    related: ["trakhees-approval", "dubai-municipality-approval", "emaar-noc"],
    relatedProjects: ["villa-renovation-permit", "restaurant-fit-out-approval"],
  },
  {
    slug: "emaar-noc",
    name: "Emaar",
    shortName: "Emaar",
    title: "Emaar NOC | Unit Modifications & Fit-Outs in Emaar Communities",
    metaDescription:
      "Emaar NOC for apartment and villa modifications, commercial fit-outs in Downtown Dubai, Dubai Hills, Arabian Ranches and other Emaar communities. Process and documents — managed by FitOutPermits.ae.",
    keywords: [
      "emaar noc",
      "emaar approval",
      "emaar noc process",
      "downtown dubai fit out",
      "dubai hills villa modification",
    ],
    heroImage: {
      folder: "authorities",
      base: "emaar",
      alt: "Apartment renovation works in a Downtown Dubai tower with Burj Khalifa visible through the window",
    },
    jurisdiction: "Emaar master communities — Downtown Dubai, Dubai Marina (Emaar assets), Dubai Hills Estate, Arabian Ranches, Emirates Living and more",
    intro: [
      "Emaar's community management must issue a No Objection Certificate before modification works start in its communities — apartment renovations in Downtown and Dubai Marina towers, villa extensions in Arabian Ranches and Dubai Hills, and fit-outs in Emaar's retail and office assets. The government permit from Dubai Municipality follows the NOC, not the other way round.",
      "Emaar's review is orderly but document-heavy: owners association rules, tower-specific technical conditions, contractor registrations, insurances and deposits. We've processed Emaar NOCs across its portfolio and keep current copies of each community's modification guidelines, which is most of the battle.",
    ],
    whenRequired: [
      "Apartment renovations: kitchens, bathrooms, flooring with acoustic implications, wall changes",
      "Villa modifications and extensions in Emaar's landed communities",
      "MEP alterations — plumbing reroutes, AC modifications, electrical upgrades",
      "Commercial fit-outs in Emaar-managed retail and office buildings",
      "Balcony, terrace and external works of any kind",
    ],
    documents: [
      "Title deed and owner ID (tenants add tenancy contract + owner's consent)",
      "Emaar community modification application and undertaking forms",
      "Drawings of the proposed works — architectural and MEP as scope demands",
      "Contractor trade licence, insurances and Emaar registration",
      "Refundable deposit payment confirmation",
      "Acoustic underlay specifications for hard-flooring changes in towers (tower-specific)",
    ],
    steps: [
      {
        title: "Community rules check",
        body: "We pull the current modification guidelines for your specific tower or community — Emaar updates them, and last year's checklist causes this year's rejection.",
      },
      {
        title: "NOC package & submission",
        body: "Forms, drawings, contractor documents and deposits are compiled and filed with Emaar community management.",
      },
      {
        title: "Emaar technical review",
        body: "Emaar reviews against tower structure, acoustics, MEP risers and community aesthetics; we resolve comments quickly because the reviewers' concerns are predictable when you've done this at volume.",
      },
      {
        title: "DM permit",
        body: "With the NOC issued, the statutory Dubai Municipality permit follows on the same drawings for scopes that require it.",
      },
      {
        title: "Works under community rules",
        body: "Working hours, lift protection, material movement and waste rules are enforced by tower teams; we keep your contractor compliant and your neighbours unbothered.",
      },
      {
        title: "Completion & deposit recovery",
        body: "Final inspection with community management, closeout documents, and recovery of your refundable deposit.",
      },
    ],
    fees: [
      { item: "Emaar NOC / admin fee", amount: "AED 500 – 2,000 typical", note: "by community and scope" },
      { item: "Refundable modification deposit", amount: "AED 2,000 – 10,000+", note: "scales with works risk" },
      { item: "DM permit fees", amount: "per DM schedule", note: "for permit-level scopes" },
    ],
    feesNote:
      "Most Emaar costs are refundable deposits rather than fees. We track deposits to recovery as a standard deliverable — money left behind with community management is depressingly common.",
    rejectionReasons: [
      "Hard flooring proposed without the tower's required acoustic rating",
      "Wet-area relocations over other units' dry areas",
      "Contractor not registered with Emaar or underinsured",
      "Structural wall changes proposed without engineering substantiation",
      "External appearance changes — balconies, windows — outside community rules",
    ],
    timelineNote:
      "Straightforward apartment renovation NOCs release in about 1–2 weeks; villa extensions and structural scopes take longer and then add DM permit time. Emaar's process rewards complete first submissions disproportionately.",
    faqs: [
      {
        q: "Do I need an Emaar NOC for a kitchen renovation?",
        a: "Yes — any works beyond decoration in an Emaar community need at least the community's modification NOC, and kitchen scopes (plumbing, electrical, sometimes gas) usually also need a DM permit. The NOC-first sequence is mandatory.",
      },
      {
        q: "Can tenants apply, or only owners?",
        a: "Tenants can, with the owner's written consent attached. In practice we coordinate signatures from both sides — it's routine.",
      },
      {
        q: "Why do towers care about my flooring choice?",
        a: "Impact noise. Emaar towers specify minimum acoustic performance for hard-flooring installations because your tile is your downstairs neighbour's ceiling. Approved underlay specifications solve it — retrofitting after a complaint doesn't.",
      },
      {
        q: "How long does an Emaar NOC take?",
        a: "One to two weeks for clean apartment-scope submissions, longer for villas and structural works. The variable is completeness: Emaar's checklist is long but public, and we submit against the current version.",
      },
    ],
    related: ["dubai-municipality-approval", "nakheel-noc", "dewa-approval-noc"],
    relatedProjects: ["villa-renovation-permit", "office-fit-out-permit"],
  },
  {
    slug: "difc-fit-out-approval",
    name: "DIFC",
    shortName: "DIFC",
    title: "DIFC Fit-Out Approval | Dubai International Financial Centre Permits",
    metaDescription:
      "DIFC fit-out approval process: Gate District and DIFC building permits, documents, landlord coordination and inspections for offices, retail and F&B. Managed by FitOutPermits.ae.",
    keywords: [
      "difc fit out",
      "difc fit out approval",
      "difc permit",
      "gate district office fit out",
      "difc restaurant approval",
    ],
    heroImage: {
      folder: "authorities",
      base: "difc",
      alt: "Premium financial-district office fit-out in DIFC with the Gate building in view",
    },
    jurisdiction: "Dubai International Financial Centre — the DIFC free zone's own building-control regime",
    intro: [
      "The Dubai International Financial Centre operates its own building-control framework, independent of Dubai Municipality. Fit-outs in the Gate District, DIFC towers and DIFC-regulated retail and F&B spaces are approved through DIFC's permitting process, coordinated with each building's owner and Dubai Civil Defence.",
      "DIFC clients expect — and get — a premium process: strong document control, insurance scrutiny, out-of-hours works management and high finish standards. Law firms, funds, private-banking suites and the district's restaurant scene all pass through the same gate. We run DIFC fit-outs with the discretion and precision the district assumes.",
    ],
    whenRequired: [
      "Office fit-outs and reconfigurations throughout DIFC's commercial buildings",
      "Retail and F&B fit-outs in Gate Avenue and DIFC retail precincts",
      "MEP alterations: supplementary cooling for server rooms, kitchen extract, power upgrades",
      "Reinstatements at lease end — DIFC landlords enforce them rigorously",
      "Signage and storefront works across the district",
    ],
    documents: [
      "DIFC-registered entity licence and lease documentation",
      "Building owner's consent / landlord NOC",
      "Consultant and contractor documentation with DIFC-acceptable insurances",
      "Architectural, MEP and fire & life-safety drawing sets",
      "Method statements, logistics and out-of-hours works plans",
      "Fit-out deposit confirmations per building policy",
    ],
    steps: [
      {
        title: "Building & landlord alignment",
        body: "DIFC buildings are individually managed with their own technical conditions; we align the landlord's fit-out manual with DIFC's permit requirements before design freezes.",
      },
      {
        title: "Permit package",
        body: "Drawings and documentation are compiled to DIFC's submission standard — insurance certificates and method statements included, because DIFC actually checks them.",
      },
      {
        title: "DIFC submission & DCD track",
        body: "The permit application is filed with DIFC building control while Civil Defence reviews fire and life safety in parallel.",
      },
      {
        title: "Approval & mobilisation",
        body: "With the permit issued, hoarding, access cards and logistics slots are arranged under the building's rules — often night-works-only for occupied floors.",
      },
      {
        title: "Works & inspections",
        body: "Staged and final inspections verify the build against approved drawings; DIFC's inspectors are thorough and appointment-precise.",
      },
      {
        title: "Completion & handover file",
        body: "Completion certificates, as-builts, test certificates and warranty documentation are compiled into the handover file DIFC landlords expect.",
      },
    ],
    fees: [
      { item: "DIFC permit fees", amount: "scale with project value/area" },
      { item: "Typical government/authority fees — mid-size office", amount: "AED 3,000 – 8,000" },
      { item: "Building deposits & access charges", amount: "per building policy", note: "largely refundable" },
    ],
    feesNote:
      "DIFC projects price like the district: professional, documented, and worth doing once. Our quotations separate DIFC fees, building charges and our fixed fee line by line.",
    rejectionReasons: [
      "Insurance certificates below the building's required cover levels",
      "Server-room cooling proposed without landlord riser capacity confirmation",
      "Out-of-hours logistics plans missing for occupied-floor works",
      "Fire-stopping details absent at tenancy boundary penetrations",
      "F&B extract routes not pre-agreed with the building owner",
    ],
    timelineNote:
      "Clean office packages typically reach permit in 2–3 weeks. F&B in Gate Avenue and tower podiums adds landlord design review — start that track at heads-of-terms stage, not after lease signing.",
    faqs: [
      {
        q: "Is a DIFC fit-out permit different from a DM permit?",
        a: "Yes — DIFC has its own building-control regime and DM is not involved. Civil Defence remains the fire authority. If you've done mainland fit-outs before, expect a similar logic with stricter documentation.",
      },
      {
        q: "Can works happen during office hours in DIFC?",
        a: "Noisy and disruptive works on occupied floors are typically restricted to nights and weekends, per building policy. We build realistic programmes around each building's actual rules rather than optimistic ones around none.",
      },
      {
        q: "Who inspects fit-outs in DIFC?",
        a: "DIFC building control inspects against the permit, DCD inspects fire and life safety, and the landlord's team verifies compliance with the building's fit-out manual. Three inspections, one coordinated closeout — ours.",
      },
      {
        q: "Do small suite reconfigurations still need a permit?",
        a: "Almost always, yes — partition, ceiling, electrical or fire-device changes trigger the permit path regardless of area. The process scales down for small scopes; skipping it doesn't.",
      },
    ],
    related: ["dda-approval", "dmcc-approval", "dubai-civil-defence-approval"],
    relatedProjects: ["office-fit-out-permit", "restaurant-fit-out-approval", "retail-shop-approval"],
  },
  {
    slug: "dubai-south-approval",
    name: "Dubai South",
    shortName: "Dubai South",
    title: "Dubai South Fit-Out Approval | Logistics, Aviation & Business Park Permits",
    metaDescription:
      "Dubai South fit-out and modification approvals: business park offices, logistics district warehouses and aviation-linked facilities. Process, documents and fees — managed by FitOutPermits.ae.",
    keywords: [
      "dubai south approval",
      "dubai south fit out permit",
      "dubai south warehouse approval",
      "business park dubai south office fit out",
      "dwc fit out",
    ],
    heroImage: {
      folder: "authorities",
      base: "dubai-south",
      alt: "Modern logistics facility fit-out near Al Maktoum International Airport in Dubai South",
    },
    jurisdiction: "Dubai South free zone — Business Park, Logistics District, Aviation District and residential districts around Al Maktoum International",
    intro: [
      "Dubai South — the emirate's aerotropolis around Al Maktoum International Airport — runs its own approvals for fit-outs and facility modifications across its Business Park offices, Logistics District warehouses and Aviation District facilities. E-commerce fulfilment, freight, aviation services and the Expo City hinterland have made it one of Dubai's fastest-growing permit jurisdictions.",
      "The free zone's process is modern and service-oriented, but logistics and aviation scopes bring real engineering review: racking, automation, cold chains, dangerous goods and airside-adjacent security constraints. We handle both ends — the two-week office fit-out and the multi-phase fulfilment centre.",
    ],
    whenRequired: [
      "Office fit-outs in Business Park and headquarters buildings",
      "Warehouse modifications: mezzanines, racking, automation, cold rooms, offices-in-warehouse",
      "Aviation-linked facilities with airside adjacency or special security requirements",
      "MEP upgrades: power for automation, additional cooling, compressed-air plants",
      "F&B and retail units serving the districts",
    ],
    documents: [
      "Dubai South licence and lease/plot documents",
      "Consultant and contractor registrations acceptable to the free zone",
      "Architectural and structural drawings (calculations for mezzanines/racking)",
      "MEP drawing sets with load schedules",
      "Fire strategy and life-safety package for Civil Defence processing",
      "EHS and operational documentation for industrial scopes",
    ],
    steps: [
      {
        title: "District & facility scoping",
        body: "Business Park, Logistics District and Aviation District each apply different technical and security conditions; we map yours before design.",
      },
      {
        title: "Engineering & drawing package",
        body: "Drawings and calculations are prepared to the free zone's submission standard, with fire strategy aligned to the facility's storage and process reality.",
      },
      {
        title: "Free-zone submission",
        body: "The application is filed with Dubai South's building-approvals team with all registrations and insurances in place.",
      },
      {
        title: "DCD & parallel clearances",
        body: "Civil Defence review runs in parallel; aviation-adjacent facilities add security clearances we sequence into the same window.",
      },
      {
        title: "Permit & staged works",
        body: "Works proceed with the staged inspections industrial scopes attract; we manage the inspection calendar against your operational deadlines.",
      },
      {
        title: "Completion & operational handover",
        body: "Completion certificates and as-built documentation are closed out so operations, insurance and customs registrations can proceed without snags.",
      },
    ],
    fees: [
      { item: "Dubai South permit fees", amount: "scale with area and scope" },
      { item: "Typical fees — Business Park office", amount: "AED 1,500 – 4,000" },
      { item: "Typical fees — warehouse modification", amount: "AED 3,000 – 10,000+" },
    ],
    feesNote:
      "Logistics scopes vary with structural and fire-strategy depth. We publish the fee estimate in the feasibility note before you commit to racking suppliers or automation vendors.",
    rejectionReasons: [
      "Racking and mezzanine proposals without structural calculations",
      "Fire strategy not matching commodity classes and storage heights",
      "Power demands exceeding the plot's allocation without an upgrade application",
      "Missing security documentation for aviation-adjacent facilities",
      "Cold-room installations without condensate and insulation details",
    ],
    timelineNote:
      "Offices clear in 2–3 weeks on clean packages. Warehouse modifications typically run 3–6 weeks to permit depending on structural and fire-strategy review. Automation-heavy fulfilment projects should engage us at facility-selection stage.",
    faqs: [
      {
        q: "Is Dubai South the same as DWC?",
        a: "Dubai World Central (DWC) is the airport code and the district's earlier name; Dubai South is the free zone and master development around it. Approvals run through Dubai South's own building-approvals function.",
      },
      {
        q: "Can I put a mezzanine office inside my Dubai South warehouse?",
        a: "Yes — with structural calculations, fire-strategy updates (often additional sprinkler coverage and detection) and the free zone's modification permit. It's one of the most common scopes we run there.",
      },
      {
        q: "Do e-commerce automation installations need approval?",
        a: "Substantial ones do: conveyor and ASRS systems carry structural loads, electrical demands and fire-protection implications that trigger engineering review. Vendors rarely mention this; your permit consultant should.",
      },
      {
        q: "How does Expo City relate to Dubai South approvals?",
        a: "Expo City is its own jurisdiction adjacent to Dubai South, with a separate approvals process. If your unit is inside Expo City proper, the path differs — tell us the exact address and we'll confirm the authority same-day.",
      },
    ],
    related: ["jafza-approval", "dubai-civil-defence-approval", "dubai-silicon-oasis-approval"],
    relatedProjects: ["warehouse-modification-permit", "office-fit-out-permit"],
  },
  {
    slug: "dubai-silicon-oasis-approval",
    name: "Dubai Silicon Oasis",
    shortName: "DSO",
    title: "Dubai Silicon Oasis (DSO) Fit-Out Approval | DIEZ Permits",
    metaDescription:
      "Dubai Silicon Oasis fit-out approvals under DIEZ: offices, tech facilities, retail and residential modifications in DSO. Documents, process and fees — managed by FitOutPermits.ae.",
    keywords: [
      "dso approval",
      "dubai silicon oasis fit out",
      "diez approval",
      "dso office fit out permit",
      "silicon oasis renovation permit",
    ],
    heroImage: {
      folder: "authorities",
      base: "dso",
      alt: "Technology company office fit-out in Dubai Silicon Oasis with exposed-services ceiling",
    },
    jurisdiction: "Dubai Silicon Oasis — part of the Dubai Integrated Economic Zones Authority (DIEZ)",
    intro: [
      "Dubai Silicon Oasis operates its own building-approvals regime under the Dubai Integrated Economic Zones Authority (DIEZ). Fit-outs in DSO's office towers, tech park buildings, retail units and residential communities are permitted through the free zone's engineering department, with Civil Defence in parallel — Dubai Municipality is not the authority here.",
      "DSO's tenant mix skews technical: electronics companies, labs, light manufacturing and data-heavy offices with real power and cooling appetites. Its reviewers are correspondingly comfortable with technical submissions — and correspondingly unimpressed by thin ones. We submit engineering-complete packages the first time.",
    ],
    whenRequired: [
      "Office and headquarters fit-outs across DSO's commercial buildings",
      "Lab, light-industrial and R&D facility modifications",
      "Server-room and high-density power installations",
      "Retail and F&B fit-outs in DSO's community retail",
      "Residential modifications in DSO's apartment communities (Cedre Villas etc. via community rules)",
    ],
    documents: [
      "DSO/DIEZ licence and lease documentation",
      "Consultant and contractor appointments with acceptable registrations",
      "Architectural drawing set: existing, demolition, proposed",
      "MEP drawings with electrical load schedules and cooling calculations",
      "Fire & life-safety drawings for DCD processing",
      "Method statements and insurances per DSO's fit-out guidelines",
    ],
    steps: [
      {
        title: "Scope & building check",
        body: "We verify the building's technical allocations — power, cooling, riser space — against your requirements before design, which is where tech fit-outs live or die.",
      },
      {
        title: "Drawing package",
        body: "Architectural and MEP sets are prepared to DSO's submission standard with the load documentation its engineers expect.",
      },
      {
        title: "DSO submission",
        body: "The application is filed with DSO's engineering department; DCD runs in parallel on fire and life safety.",
      },
      {
        title: "Comment resolution & permit",
        body: "Technical comments are closed with engineering answers and the fit-out permit is released.",
      },
      {
        title: "Works & inspections",
        body: "Works proceed under the free zone's site rules with staged inspections for MEP-heavy scopes.",
      },
      {
        title: "Completion certificate",
        body: "Final inspections close with DSO and DCD, and the completion certificate is issued for occupancy.",
      },
    ],
    fees: [
      { item: "DSO permit fees", amount: "scale with unit area" },
      { item: "Typical fees — standard office", amount: "AED 1,500 – 3,500" },
      { item: "DCD review & inspection", amount: "from AED 800 combined" },
    ],
    feesNote:
      "DSO's fee schedule is straightforward; the budgeting risk is technical (power and cooling upgrades), not administrative. Our feasibility note prices both.",
    rejectionReasons: [
      "Server-room cooling proposed beyond the building's condenser-water capacity",
      "Electrical loads exceeding allocation without an upgrade application",
      "Incomplete existing/demolition/proposed drawing sequences",
      "Lab and industrial scopes missing extract and chemical-storage details",
      "Contractor insurances below the free zone's minimums",
    ],
    timelineNote:
      "Standard offices clear in about 2 weeks on complete packages; lab and high-power scopes add engineering review time. DSO is one of the more predictable jurisdictions when the package is genuinely complete.",
    faqs: [
      {
        q: "Is DSO approval now a DIEZ approval?",
        a: "DSO sits under the DIEZ umbrella (alongside DAFZA and CommerCity), but fit-out approvals still run through DSO's own engineering function. The practical process for your unit is unchanged: DSO permit plus DCD.",
      },
      {
        q: "Can I build a server room in a DSO office?",
        a: "Usually yes — subject to structural loading, cooling capacity and fire-suppression review. Small comms rooms are routine; dense server rooms need the building's capacity confirmed first, which we do at feasibility stage.",
      },
      {
        q: "Does DSO allow light manufacturing in office buildings?",
        a: "No — manufacturing belongs in the designated industrial zones within DSO, with the matching licence and facility approvals. Zoning misalignment is a lease-signing mistake we can spot in an hour.",
      },
      {
        q: "Who approves villa modifications in Cedre Villas?",
        a: "The community management's modification process within DSO's jurisdiction. It behaves like a master-developer NOC plus free-zone permit; we run it end to end.",
      },
    ],
    related: ["dda-approval", "dubai-south-approval", "dubai-civil-defence-approval"],
    relatedProjects: ["office-fit-out-permit", "warehouse-modification-permit"],
  },
  {
    slug: "dhcc-approval",
    name: "Dubai Healthcare City",
    shortName: "DHCC",
    title: "DHCC Approval | Medical Fit-Out Permits in Dubai Healthcare City",
    metaDescription:
      "Dubai Healthcare City fit-out approvals: DHCA facility standards, clinic and hospital fit-out permits, documents and inspections inside the DHCC free zone. Managed by FitOutPermits.ae.",
    keywords: [
      "dhcc approval",
      "dubai healthcare city fit out",
      "dhca facility approval",
      "dhcc clinic fit out",
      "medical fit out dubai",
    ],
    heroImage: {
      folder: "authorities",
      base: "dhcc",
      alt: "Specialist medical clinic fit-out in Dubai Healthcare City with reception and clinical corridor",
    },
    jurisdiction: "Dubai Healthcare City free zone — clinical and healthcare-support facilities under DHCA regulation",
    intro: [
      "Dubai Healthcare City runs a dual review that exists nowhere else in the emirate: the free zone's building-control function approves the fit-out itself, while the Dubai Healthcare City Authority's regulatory arm approves the clinical facility standards — room configurations, clinical flows, medical gas, infection control. Both must align before a healthcare operator can be licensed.",
      "DHCC hosts everything from single-specialty clinics to hospitals and labs, and its facility standards draw on international healthcare-design benchmarks. We manage the full interlock: clinical layout approval, fit-out permit, Civil Defence, and the facility inspections that release your operating licence.",
    ],
    whenRequired: [
      "New clinic, hospital department, lab or pharmacy fit-outs within DHCC",
      "Reconfiguration of licensed clinical spaces — added modalities, treatment rooms, imaging",
      "Non-clinical fit-outs in DHCC's office and retail spaces",
      "Medical-gas, imaging-shielding and specialist MEP installations",
      "Relocations of licensed facilities within the free zone",
    ],
    documents: [
      "DHCC licence documentation and lease agreement",
      "Clinical layout drawings with room schedules against DHCA facility standards",
      "Architectural and MEP fit-out drawing sets",
      "Medical gas, shielding and specialist services drawings where applicable",
      "Fire & life-safety package for DCD processing",
      "Consultant and contractor registrations and insurances",
      "Infection-control risk assessment for works in operating facilities",
    ],
    steps: [
      {
        title: "Clinical facility planning",
        body: "The layout is designed against DHCA's facility standards for your specialty mix — before any fit-out submission, because clinical comments redraw walls.",
      },
      {
        title: "Dual-track submission",
        body: "Clinical standards review and the building fit-out permit are filed in coordinated sequence, on one drawing baseline.",
      },
      {
        title: "DCD & specialist reviews",
        body: "Civil Defence, medical-gas and shielding reviews (for imaging) run in parallel with the main tracks.",
      },
      {
        title: "Permit & controlled works",
        body: "Works proceed with the infection-control constraints active healthcare buildings demand — dust control, negative pressure, out-of-hours noisy works.",
      },
      {
        title: "Inspections & clinical verification",
        body: "Building completion, DCD clearance and DHCA's facility inspection are closed in order.",
      },
      {
        title: "Operating licence release",
        body: "With the facility verified, the clinical operating licence proceeds — the point of the whole exercise.",
      },
    ],
    fees: [
      { item: "DHCC building-permit fees", amount: "scale with area and scope" },
      { item: "DHCA facility review fees", amount: "per regulatory schedule" },
      { item: "Typical combined fees — specialist clinic", amount: "AED 6,000 – 15,000" },
    ],
    feesNote:
      "Healthcare fit-outs in DHCC carry the emirate's most layered fee structure. Our proposal maps every authority, fee and trigger — your CFO gets one table, not five portals.",
    rejectionReasons: [
      "Room dimensions or clinical adjacencies below DHCA facility standards",
      "Sterile/soiled flow crossings in the clinical layout",
      "Medical-gas installations without certified design documentation",
      "Imaging rooms lacking shielding calculations",
      "Works methodology missing infection-control measures for occupied buildings",
    ],
    timelineNote:
      "Plan 10–16 weeks from concept to operating-ready for a specialist clinic, driven by the dual clinical/building review. Early clinical-layout approval is the single biggest schedule lever — we front-load it.",
    faqs: [
      {
        q: "Is DHCC regulated by DHA?",
        a: "No — inside the free zone, the Dubai Healthcare City Authority regulates both facilities and professionals. The clinical logic resembles DHA's but the standards, portal and inspectors are DHCC's own. We work in both regimes weekly.",
      },
      {
        q: "Can I fit out a lab or pharma facility in DHCC?",
        a: "Yes — labs, pharmacies and healthcare-support facilities are core DHCC activities, each with facility standards covering ventilation, containment and workflows. The permit path is the same dual track with deeper MEP review.",
      },
      {
        q: "My clinic is operating — can I renovate without closing?",
        a: "Usually, with a phased works plan, infection-control risk assessment and out-of-hours scheduling. DHCC reviews the methodology, not just the drawings. We've kept clinics seeing patients through full renovations.",
      },
      {
        q: "Do DHCC office fit-outs (non-clinical) follow the same process?",
        a: "Non-clinical offices skip the clinical-standards track and run as a straightforward free-zone fit-out permit plus DCD — faster and cheaper. Mixed-use suites with any clinical activity join the dual track.",
      },
    ],
    related: ["dha-approval", "dubai-civil-defence-approval", "dda-approval"],
    relatedProjects: ["clinic-fit-out-approval", "pharmacy-fit-out-approval"],
  },
];

export function authorityBySlug(slug: string) {
  return AUTHORITIES.find((a) => a.slug === slug);
}
