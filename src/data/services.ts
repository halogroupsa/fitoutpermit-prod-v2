import type { ServicePage } from "./types";

/**
 * Service pages — what we actually do.
 * URL: /services/<slug>
 */
export const SERVICES: ServicePage[] = [
  {
    slug: "fit-out-permit-management",
    name: "Fit-Out Permit Management",
    title: "Fit-Out Permit Management Dubai | End-to-End Approval Service",
    metaDescription:
      "Complete fit-out permit management in Dubai: jurisdiction mapping, drawings, submissions, comment resolution, inspections and completion certificates — one accountable project manager at FitOutPermits.ae.",
    keywords: [
      "fit out permit dubai",
      "fit out approval dubai",
      "fit out permit consultant",
      "authority approvals dubai",
    ],
    heroImage: {
      folder: "services",
      base: "permit-management",
      alt: "Permit consultant reviewing a stamped approval package across a desk of fit-out drawings",
    },
    intro: [
      "This is the core service: we take a fit-out project from 'which authority even governs this unit?' to a completion certificate in hand — one project manager, one document baseline, one tracker you can actually read. Dubai Municipality, Civil Defence, DDA, Trakhees, DMCC, DIFC, the free zones and the master developers: whichever combination your unit triggers, we run all of it as a single programme.",
      "We are approvals specialists, not a fit-out contractor — we never compete for your construction work. Contractors, interior designers and project managers hand us their approvals precisely because their client relationship stays theirs, their drawings stay confidential, and their programme stops leaking weeks into authority portals.",
    ],
    includes: [
      "Jurisdiction and authority mapping for the specific unit",
      "Landlord and building-management NOC coordination",
      "Permit-grade drawing preparation and engineer stamping",
      "All authority submissions, fees handling and tracking",
      "Technical comment resolution across every review round",
      "Inspection scheduling, attendance and snag closure",
      "Completion certificates and full handover file",
    ],
    audience: [
      "Business owners fitting out offices, shops, restaurants and clinics",
      "Fit-out contractors who want approvals off their critical path",
      "Interior designers and architects needing a licensed submission partner",
      "Landlords and asset managers regularising or re-letting units",
    ],
    steps: [
      { title: "Scope review — free", body: "Send us the unit details and intended works; we return the authority map, document checklist, government-fee estimate and a fixed consultancy quote." },
      { title: "Document & drawing assembly", body: "We collect what exists, survey what doesn't, and produce the permit-grade package once — reused across every authority that needs it." },
      { title: "Submissions & tracking", body: "Every application filed, every status tracked, every comment answered. You get a weekly one-page status, not a portal login and good luck." },
      { title: "Inspections & completion", body: "We attend inspections, close observations and deliver the completion certificate with the full document file." },
    ],
    faqs: [
      {
        q: "How is this different from asking my contractor to handle permits?",
        a: "Contractors are excellent at building and typically hate portal work — approvals get delegated to whoever is free, and the programme pays. We do only approvals, at volume, across every Dubai jurisdiction, with the registrations and authority relationships that come from that focus. Most of our work arrives from contractors, not in spite of them.",
      },
      {
        q: "What does the service cost?",
        a: "A fixed consultancy fee quoted after the free scope review, plus government fees at cost with receipts — never marked up, never bundled. Typical small-commercial scopes start around the cost of two weeks of the rent you'd otherwise lose to a rejected submission.",
      },
      {
        q: "Do you handle projects outside Dubai?",
        a: "Yes — Abu Dhabi, Sharjah and the northern emirates through the same managed process, most often for multi-site rollouts anchored in Dubai.",
      },
    ],
    related: ["drawing-preparation", "authority-noc-coordination", "completion-certificates"],
    relatedAuthorities: ["dubai-municipality-approval", "dda-approval", "trakhees-approval"],
  },
  {
    slug: "drawing-preparation",
    name: "Drawing Preparation & Engineering",
    title: "Fit-Out Drawings Dubai | Permit-Grade Architectural & MEP Drawings",
    metaDescription:
      "Permit-ready architectural, MEP and fire & life-safety drawings for Dubai fit-out approvals — prepared, coordinated and engineer-stamped for DM, DDA, Trakhees, DCD and free-zone submissions.",
    keywords: [
      "fit out drawings dubai",
      "mep drawings dubai",
      "permit drawings dubai",
      "engineer stamped drawings dubai",
    ],
    heroImage: {
      folder: "services",
      base: "drawings",
      alt: "Architect drafting coordinated MEP and architectural fit-out drawings on large monitors",
    },
    intro: [
      "Authorities approve drawings, not intentions. The single biggest driver of fast approvals is a coordinated, code-referenced, correctly-formatted drawing package — existing, demolition and proposed architectural sets, MEP with honest load schedules, and fire & life-safety layouts referenced to the current UAE code edition, all stamped by engineers registered with the reviewing authority.",
      "We produce permit-grade packages from scratch or upgrade design-intent drawings your interior designer already made. Design drawings sell a vision; permit drawings answer a reviewer's checklist. Knowing the difference — per authority, per building type — is the service.",
    ],
    includes: [
      "As-built site surveys where existing drawings are missing or wrong",
      "Architectural sets: existing / demolition / proposed with authority title blocks",
      "MEP drawings: electrical loads, drainage, HVAC, water — coordinated, not stacked",
      "Fire & life-safety layouts to the UAE Fire and Life Safety Code",
      "Structural drawings and calculations through licensed structural engineers",
      "Engineer stamping via registrations for DM, Trakhees, DDA and free zones",
    ],
    audience: [
      "Interior designers whose concept drawings need a permit-grade sibling",
      "Contractors needing fast, correct submission sets",
      "Tenants whose landlords demand drawings before the NOC",
      "Owners regularising works that were built without documentation",
    ],
    steps: [
      { title: "Survey & baseline", body: "We verify site reality first — as-builts in older Dubai buildings routinely diverge from archives, and inherited errors become authority comments." },
      { title: "Coordinated production", body: "Architectural, MEP and fire sets are produced on one coordinated model so reviewers never catch the disciplines disagreeing." },
      { title: "Code & authority formatting", body: "Each authority's title blocks, sequences and annotation conventions applied — packages that look native to the reviewer read faster." },
      { title: "Stamp & submit", body: "Registered engineers stamp; the package enters the portal the same week." },
    ],
    faqs: [
      {
        q: "My designer already made drawings — why do I need more?",
        a: "Design drawings communicate intent to clients and contractors. Permit drawings answer authority checklists: load schedules, travel distances, code references, existing-versus-proposed sequences, engineer stamps. We convert rather than redraw where quality allows, which keeps cost proportionate.",
      },
      {
        q: "Can you produce drawings for a unit with no existing plans?",
        a: "Yes — we survey and produce the as-built baseline first. It's a day or two on site for most commercial units and it eliminates the largest single source of authority comments.",
      },
      {
        q: "Do you stamp drawings prepared by others?",
        a: "Our engineers stamp what they've verified. We review external drawings, correct what's needed, then stamp — stamping unreviewed work is how consultancies lose registrations, and registrations are the product.",
      },
    ],
    related: ["fit-out-permit-management", "fire-life-safety", "regularisation-approval-rescue"],
    relatedAuthorities: ["dubai-municipality-approval", "dubai-civil-defence-approval", "trakhees-approval"],
  },
  {
    slug: "fire-life-safety",
    name: "Fire & Life-Safety Approvals",
    title: "Fire & Life Safety Approval Dubai | DCD Drawings, Systems & Inspections",
    metaDescription:
      "Dubai Civil Defence approvals managed end-to-end: fire & life-safety drawings, DCD-registered specialist coordination, kitchen suppression, inspections and clearances by FitOutPermits.ae.",
    keywords: [
      "fire safety approval dubai",
      "dcd drawings",
      "fire and life safety dubai",
      "civil defence inspection dubai",
    ],
    heroImage: {
      folder: "services",
      base: "fire-safety",
      alt: "Fire suppression system above a commercial kitchen line during installation and testing",
    },
    intro: [
      "Fire and life safety is the approval track that can't be charmed, rushed or worked around — and it shouldn't be. Dubai Civil Defence reviews every fit-out that touches detection, suppression, exits or compartmentation, and its inspectors verify the built site against the approved drawings before anyone occupies the space.",
      "Our fire & life-safety service covers the full DCD cycle: code-referenced drawings, submission and comment resolution, coordination of the DCD-registered specialist contractors the law requires, and inspection management with a pre-walk before every official visit. Restaurants, warehouses, nurseries and hotels — the higher the stakes, the more this service earns.",
    ],
    includes: [
      "Life-safety scoping: occupancy, egress, travel distances, compartmentation",
      "Fire & life-safety drawing packages to the UAE code",
      "DCD portal submissions and technical comment resolution",
      "Registered specialist contractor coordination (detection, suppression, kitchen systems)",
      "Material and system approval verification (DCD-listed products only)",
      "Inspection pre-walks, attendance and observation closure",
    ],
    audience: [
      "Restaurant and cloud-kitchen operators with suppression and gas scopes",
      "Contractors needing a dedicated DCD track owner",
      "Warehouse operators with racking and commodity-class questions",
      "Hotel and school operators in occupied, life-safety-critical buildings",
    ],
    steps: [
      { title: "Scoping against code", body: "The layout is tested against occupancy and egress rules before design freezes — moving a wall on paper is free." },
      { title: "Drawings & submission", body: "The DCD package is produced and filed, with the specialist-contractor registrations attached correctly the first time." },
      { title: "Installation with registered specialists", body: "We coordinate the DCD-registered installers whose involvement is a legal requirement, not a preference." },
      { title: "Pre-walk & inspection", body: "We walk the site against the approved drawings before DCD does, so the official visit confirms rather than discovers." },
    ],
    faqs: [
      {
        q: "Why did my fit-out fail its DCD inspection?",
        a: "Nearly always: the site doesn't match the approved drawings — heads moved for a light fitting, a corridor narrowed for a cupboard, a non-listed material substituted to save money. The fix is disciplined installation and a pre-walk, which is precisely what this service provides.",
      },
      {
        q: "Do small offices really need DCD approval?",
        a: "If partitions or ceilings change, detector coverage and egress change — so yes, in almost every real fit-out. The review is proportionate for small scopes; skipping it surfaces at completion-certificate stage and unwinds expensively.",
      },
      {
        q: "Can you fix a failed inspection someone else managed?",
        a: "Yes — inspection rescue is routine work: we audit the site against the approved drawings, produce the deviation list, manage corrections and re-book the inspection. Faster than the blame meeting you were about to have.",
      },
    ],
    related: ["fit-out-permit-management", "drawing-preparation", "food-safety-approvals"],
    relatedAuthorities: ["dubai-civil-defence-approval", "dubai-municipality-approval", "jafza-approval"],
  },
  {
    slug: "authority-noc-coordination",
    name: "Landlord & Authority NOC Coordination",
    title: "NOC Coordination Dubai | Landlord, Developer & Authority NOCs",
    metaDescription:
      "NOC coordination in Dubai: landlord and building-management NOCs, Nakheel and Emaar developer consents, DEWA and RTA no-objection certificates — sequenced and secured by FitOutPermits.ae.",
    keywords: [
      "landlord noc fit out",
      "building management noc",
      "nakheel noc",
      "emaar noc",
      "dewa noc",
    ],
    heroImage: {
      folder: "services",
      base: "noc",
      alt: "Signed no-objection certificates and approval letters organised in a project dossier",
    },
    intro: [
      "Every Dubai fit-out starts with a chain of consents before the first authority ever sees a drawing: the landlord's NOC, the building or community management's technical conditions, the master developer's approval in Nakheel and Emaar territory, and service-authority NOCs from DEWA or RTA where the scope touches their networks. The chain is sequential, undocumented tribal knowledge in most buildings — and it is where most fit-out programmes quietly lose their first month.",
      "We run NOC chains for a living. We know which landlords want drawings before consenting and which consent before drawings; which towers take three days and which take three weeks; and how to run developer, landlord and authority consents in parallel when the documents allow it.",
    ],
    includes: [
      "Landlord and building-management NOC applications and follow-up",
      "Master developer NOCs: Nakheel, Emaar, Meraas, Dubai Hills and community managements",
      "DEWA NOCs for load, meter and connection-affecting works",
      "RTA NOCs for access, right-of-way and roadside scopes",
      "Neighbour consents where community rules require them",
      "Deposit placement, tracking — and recovery at project end",
    ],
    audience: [
      "Tenants starting a fit-out and facing the first wall of paperwork",
      "Contractors who need consents to mobilise on a signed programme",
      "Villa owners in master communities beginning modifications",
      "Brokers and leasing teams who want deals to survive the fit-out stage",
    ],
    steps: [
      { title: "Consent mapping", body: "Every required NOC for the unit and scope is identified up front with its owner, dependencies and realistic duration." },
      { title: "Parallel processing", body: "Applications that can overlap, do; the truly sequential ones are front-loaded so they never block downstream tracks." },
      { title: "Condition management", body: "NOCs arrive with conditions; we translate them into the drawing set and contractor obligations before they become inspection findings." },
      { title: "Closeout & deposits", body: "At completion we close every consent's conditions and recover the deposits most tenants forget they placed." },
    ],
    faqs: [
      {
        q: "The landlord is slow with the NOC — can you actually speed that up?",
        a: "Usually, yes: most 'slow' NOCs are incomplete applications waiting silently in a queue. Complete submissions against the building's actual checklist, with the insurance certificates and undertakings pre-attached, move visibly faster. Persistence with the right documents beats persistence alone.",
      },
      {
        q: "What's the difference between a landlord NOC and the permit?",
        a: "The NOC is private consent — the owner permitting works to their asset. The permit is public consent — the government authorising the works themselves. You need both, in that order, and authorities will not review applications without the NOC attached.",
      },
      {
        q: "Can you recover a fit-out deposit from years ago?",
        a: "Often — if completion evidence exists or can be reconstructed. We've recovered deposits owners had written off. Send the details; the review costs nothing.",
      },
    ],
    related: ["fit-out-permit-management", "completion-certificates", "regularisation-approval-rescue"],
    relatedAuthorities: ["nakheel-noc", "emaar-noc", "dewa-approval-noc"],
  },
  {
    slug: "completion-certificates",
    name: "Building Completion Certificates",
    title: "Building Completion Certificate Dubai | Fit-Out Closeout Service",
    metaDescription:
      "Building completion certificate in Dubai: final inspections, snag closure, as-builts and the certificate that makes your fit-out legal to occupy — obtained by FitOutPermits.ae, including stalled projects.",
    keywords: [
      "building completion certificate dubai",
      "completion certificate dubai municipality",
      "fit out completion certificate",
      "bcc dubai",
    ],
    heroImage: {
      folder: "services",
      base: "completion",
      alt: "Final inspection walkthrough of a completed Dubai office fit-out with certificate documents in hand",
    },
    intro: [
      "A fit-out isn't finished when the furniture arrives — it's finished when the completion certificate is issued. That document is what makes the unit legal to occupy, keeps trade-licence renewals smooth, satisfies insurers when they actually check, and protects everyone when the unit changes hands. It's also the step most likely to be abandoned, because the contractor has been paid and everyone's tired.",
      "We close projects out professionally: final inspections booked and attended, observations resolved, as-builts and test certificates compiled, and the certificate obtained — including for projects that stalled months or years ago with permits open and nobody answering the portal.",
    ],
    includes: [
      "Completion inspection booking and attendance (authority + DCD)",
      "Observation and snag management to clearance",
      "As-built drawings and test-certificate compilation",
      "Completion certificate issuance and delivery of the full handover file",
      "Dormant-project revival: reopening stalled applications and expired permits",
      "Occupancy-affecting documentation for landlords and insurers",
    ],
    audience: [
      "Tenants whose contractor finished the work but not the paperwork",
      "Landlords with units carrying open permits from previous tenants",
      "Businesses whose licence renewal or insurance audit surfaced a missing certificate",
      "Buyers and sellers of fitted units needing clean documentation",
    ],
    steps: [
      { title: "File audit", body: "We audit the permit trail: what was approved, what was built, what's open. For stalled projects this recovers the true starting position." },
      { title: "Gap closure", body: "Missing documents, expired registrations and site deviations are corrected — the honest fixing that certificates require." },
      { title: "Inspections", body: "Authority and DCD final inspections are booked, pre-walked and attended; observations get closed, not debated." },
      { title: "Certificate & file", body: "The completion certificate is issued and delivered inside a complete handover file that survives future scrutiny." },
    ],
    faqs: [
      {
        q: "We've been operating for a year without a completion certificate. How bad is that?",
        a: "Common, fixable, and worth fixing before it finds you — typically via a licence renewal block, an insurance claim question or a landlord dispute. Retroactive completion is routine work for us; the sooner it starts, the fewer complications have accumulated.",
      },
      {
        q: "The contractor who did the work has vanished. Can we still get the certificate?",
        a: "Yes — a new registered contractor can be appointed for closure purposes, deviations documented and regularised, and the certificate obtained. The vanished-contractor closeout is practically a product category for us.",
      },
      {
        q: "How long does a completion certificate take?",
        a: "For a compliant, well-documented project: one to two weeks including inspections. For stalled or deviated projects: depends on the gaps — the file audit gives you a real answer in days, free.",
      },
    ],
    related: ["fit-out-permit-management", "regularisation-approval-rescue", "authority-noc-coordination"],
    relatedAuthorities: ["dubai-municipality-approval", "dubai-civil-defence-approval", "dda-approval"],
  },
  {
    slug: "renovation-modification-permits",
    name: "Renovation & Modification Permits",
    title: "Renovation Permit Dubai | Office, Villa & Commercial Modifications",
    metaDescription:
      "Renovation and modification permits in Dubai: offices, villas, retail units and warehouses — developer NOCs, DM/Trakhees permits, structural approvals and completion managed by FitOutPermits.ae.",
    keywords: [
      "renovation permit dubai",
      "villa renovation permit dubai",
      "office renovation permit",
      "modification permit dubai",
    ],
    heroImage: {
      folder: "services",
      base: "renovation",
      alt: "Renovation works in progress in a Dubai commercial unit with protected flooring and new partitions",
    },
    intro: [
      "Renovations carry a permit trap new-build fit-outs don't: the existing conditions. What was approved originally, what was changed since without paperwork, and what current code demands of any space you now touch — the delta between those three defines your real scope, and discovering it during authority review instead of before costs weeks.",
      "Our renovation service starts with that archaeology: we pull the property's approval history, survey the as-built reality, and design the permit strategy around the gap. Villas in master communities, offices between tenancies, retail refreshes and warehouse reconfigurations — the pattern holds everywhere.",
    ],
    includes: [
      "Approval-history retrieval and as-built verification",
      "Developer/community NOCs for master-community properties",
      "DM, Trakhees and free-zone renovation permits",
      "Structural approvals for wall removals, openings and extensions",
      "Legacy-deviation regularisation folded into the new permit",
      "Inspections and completion certification",
    ],
    audience: [
      "Villa owners upgrading, extending or adding pools",
      "Tenants renovating previously fitted commercial units",
      "Landlords refreshing units between tenancies",
      "Buyers who inherited undocumented modifications",
    ],
    steps: [
      { title: "History & survey", body: "The property's approval record is retrieved and reconciled against a fresh survey — the delta is your true scope." },
      { title: "Strategy & NOCs", body: "Developer and landlord consents are secured on a permit strategy that handles legacy deviations honestly." },
      { title: "Permit & works", body: "The renovation permit is issued; works proceed with staged inspections where structure is touched." },
      { title: "Completion", body: "Closeout leaves the property cleaner-documented than we found it — which pays at every future transaction." },
    ],
    faqs: [
      {
        q: "Do I need a permit to remove an internal wall?",
        a: "Yes — wall removals need structural assessment (even 'non-load-bearing' walls can brace or carry services), a permit, and inspection. In apartments and villas, add the community NOC. It's a modest process for a genuinely modest wall; it's essential for the other kind.",
      },
      {
        q: "The previous owner modified the villa without permits. Is that now my problem?",
        a: "Legally the property's problem, practically the current owner's — it surfaces at sale, refinancing and major renovation. The good news: regularisation alongside your planned renovation is efficient, since surveys, drawings and inspections overlap. One programme, both problems solved.",
      },
      {
        q: "Can renovations happen while the space stays in use?",
        a: "Frequently, with phasing and interim life-safety measures approved as part of the permit — offices, clinics and hotels do it constantly. The methodology gets reviewed as seriously as the end state, so it must be designed, not improvised.",
      },
    ],
    related: ["fit-out-permit-management", "completion-certificates", "regularisation-approval-rescue"],
    relatedAuthorities: ["nakheel-noc", "emaar-noc", "dubai-municipality-approval"],
  },
  {
    slug: "signage-permits",
    name: "Signage Permits",
    title: "Signage Permit Dubai | Signboard License & Approval Service",
    metaDescription:
      "Signage permits in Dubai: shopfront signboards, illuminated signs, mall signage and free-zone sign approvals — design compliance, permits and inspections by FitOutPermits.ae.",
    keywords: [
      "signage permit dubai",
      "signboard license dubai",
      "shop sign approval dubai",
      "illuminated sign permit dubai",
    ],
    heroImage: {
      folder: "services",
      base: "signage",
      alt: "Illuminated shopfront sign being installed on a Dubai retail facade with a crane at dusk",
    },
    intro: [
      "Signage is the small approval with outsized blocking power: stores physically ready to trade wait dark because the signboard — the last item on everyone's list — turned out to need municipality permission, landlord design approval, sometimes DCD electrical review, and occasionally RTA clearance for projection over the public realm. Each is quick; the pile-up is not.",
      "We run signage as its own disciplined track from week one: design compliance against the municipality's signage code and the landlord's criteria, permit submission with the right supporting drawings, and installation sign-off. For multi-branch brands we maintain the signage playbook per jurisdiction so branch two through twenty never re-learn branch one's lessons.",
    ],
    includes: [
      "Signage design compliance review (municipality code + landlord criteria)",
      "DM signboard permits and annual signage licensing",
      "Free-zone and mall signage approvals",
      "DCD review coordination for illuminated and electrically-supplied signs",
      "RTA clearance where signage projects over the right-of-way",
      "Installation supervision and completion documentation",
    ],
    audience: [
      "Retail and F&B brands opening or rebranding",
      "Signage fabricators whose clients need the paperwork handled",
      "Building owners standardising tenant signage",
      "Multi-branch operators tired of re-solving signage per branch",
    ],
    steps: [
      { title: "Design compliance", body: "The sign design is checked against the applicable codes and criteria before fabrication money is spent." },
      { title: "Approvals", body: "Municipality/zone permits, landlord consent and any DCD or RTA reviews run as one coordinated mini-programme." },
      { title: "Fabrication & installation", body: "Fabrication proceeds against approved drawings; installation follows the permit's method and safety conditions." },
      { title: "Sign-off", body: "Final documentation closes the permit — and renewals are diarised where the licence is annual." },
    ],
    faqs: [
      {
        q: "Do all shop signs in Dubai need a permit?",
        a: "External and shopfront signage effectively always does — mainland via the municipality's signage regime, free zones via the zone authority, malls via the landlord plus authority where power or structure is involved. Internal signage invisible from outside is generally exempt.",
      },
      {
        q: "How long does a signage permit take?",
        a: "Compliant designs typically clear in one to two weeks per approving party — the reason we run parties in parallel and start early. The classic failure mode is starting signage the week the shop wants to open.",
      },
      {
        q: "Our sign was installed without a permit. Now what?",
        a: "Regularise before enforcement finds it — fines and forced removal both exist. If the design would have been compliant, retrospective approval is usually smooth; if not, we redesign to the nearest compliant option and manage the swap.",
      },
    ],
    related: ["fit-out-permit-management", "authority-noc-coordination", "fire-life-safety"],
    relatedAuthorities: ["dubai-municipality-approval", "rta-noc", "dda-approval"],
  },
  {
    slug: "food-safety-approvals",
    name: "Food Safety Approvals",
    title: "Food Safety Approval Dubai | Kitchen Layout & Food Permit Service",
    metaDescription:
      "Dubai Municipality food safety approvals: kitchen layout review, food-flow compliance, grease management and inspections for restaurants, cafés, cloud kitchens and food retail — by FitOutPermits.ae.",
    keywords: [
      "food safety approval dubai",
      "dubai municipality food permit",
      "kitchen layout approval dubai",
      "food license dubai",
    ],
    heroImage: {
      folder: "services",
      base: "food-safety",
      alt: "Commercial kitchen layout with stainless steel prep lines arranged for compliant food flow",
    },
    intro: [
      "Dubai Municipality's Food Safety Department reviews the layout of every food premises before it operates: receiving, storage, preparation, cooking, service and waste must flow without crossing; surfaces, sinks and grease management must meet standard; and the design must match the menu actually served. It's a workflow review disguised as a drawing review — and kitchens designed for beauty routinely fail it.",
      "We design and shepherd food-premises layouts through the review: restaurants, cafés, cloud kitchens, catering units, supermarkets and food trucks' commissaries. Done in coordination with DCD's suppression review and the fit-out permit, the food-safety track adds days, not months.",
    ],
    includes: [
      "Kitchen layout design/review for food-flow compliance",
      "Food-safety submission drawings and equipment schedules",
      "Grease-trap and waste-management provisions",
      "Coordination with DCD kitchen-suppression scope",
      "Pre-opening inspection preparation and attendance",
      "PIC (Person In Charge) and operational-readiness guidance",
    ],
    audience: [
      "Restaurant, café and cloud-kitchen founders",
      "F&B groups rolling out multiple concepts",
      "Supermarkets and food retail with in-store production",
      "Kitchen designers and contractors needing the compliance layer",
    ],
    steps: [
      { title: "Menu-to-layout mapping", body: "The menu defines processes; processes define zones, equipment and flows. We design or audit the layout from the menu backward." },
      { title: "Submission & review", body: "Food-safety drawings are filed alongside the fit-out permit so both reviews progress on the same baseline." },
      { title: "Build compliance", body: "Surfaces, sinks, drainage and grease provisions are held to the approved layout through construction." },
      { title: "Inspection & opening", body: "The pre-opening food-safety inspection is pre-walked and attended — the kitchen opens on the first visit, not the third." },
    ],
    faqs: [
      {
        q: "What does the food-safety review actually check?",
        a: "Flow separation (raw/cooked, clean/dirty, receiving-to-service), hand-wash and prep-sink counts and positions, surface materials, temperature-controlled storage, grease management, pest-proofing and waste routes — sized against your actual menu and volume. Design for it and the review is quick.",
      },
      {
        q: "Do cloud kitchens need the same approval?",
        a: "Yes — the food-safety scope is identical to a restaurant's kitchen (often stricter given volume), with the dining room's requirements swapped for delivery-handover provisions. Multi-brand operations should design flows per brand line from the start.",
      },
      {
        q: "Can you fix a kitchen that failed inspection?",
        a: "Yes — most failures are flow crossings, missing sinks or grease-management gaps, all correctable with targeted works. We audit against the inspector's report, fix the real causes and re-book. Repeat failures are almost always partial fixes; we don't do partial.",
      },
    ],
    related: ["fire-life-safety", "fit-out-permit-management", "drawing-preparation"],
    relatedAuthorities: ["dubai-municipality-approval", "dubai-civil-defence-approval", "dewa-approval-noc"],
  },
  {
    slug: "regularisation-approval-rescue",
    name: "Approval Rescue & Regularisation",
    title: "Permit Rejected in Dubai? | Approval Rescue & Regularisation Service",
    metaDescription:
      "Rejected fit-out permit, stalled application, works done without approval or failed inspection in Dubai? FitOutPermits.ae audits, fixes and regularises — the approval rescue specialists.",
    keywords: [
      "fit out permit rejected dubai",
      "permit rejected dubai",
      "regularisation dubai municipality",
      "failed dcd inspection",
      "unapproved works dubai",
    ],
    heroImage: {
      folder: "services",
      base: "rescue",
      alt: "Consultant auditing a rejected permit file with marked-up drawings and authority comment sheets",
    },
    intro: [
      "This service exists for the projects nobody advertises: the submission rejected three times, the application stalled since last year, the mezzanine built without approval, the inspection failed and re-failed, the contractor who disappeared with the portal password. Dubai's system is navigable from every one of those positions — with the right audit, the right honesty and the right sequence.",
      "Rescue starts with truth: we audit what was approved, what was built and what was claimed, and give you the real position with a fixed price to clean it. No lectures about how it happened. Authorities respond well to competent regularisation — they see it as the system working — and we've built a practice on exactly that.",
    ],
    includes: [
      "Rejected-application autopsy and resubmission strategy",
      "Stalled/dormant application revival and portal recovery",
      "Unapproved-works regularisation (mezzanines, extensions, layout changes)",
      "Failed-inspection audits and correction management",
      "Expired-permit renewals with works part-complete",
      "Enforcement-notice response and violation clearance",
    ],
    audience: [
      "Owners and tenants with rejected or stalled applications",
      "Buyers/sellers whose transaction surfaced undocumented works",
      "Businesses served violation or enforcement notices",
      "Contractors inheriting another firm's abandoned approvals mess",
    ],
    steps: [
      { title: "Forensic audit", body: "Permit trail, portal history, site survey: we establish the true position — usually better than feared, occasionally worse, always actionable." },
      { title: "Fixed-price rescue plan", body: "You get the honest gap list, the sequence to close it, and a fixed fee. Decisions become easy when the position is real." },
      { title: "Execution", body: "Resubmissions, regularisation filings, corrective works coordination and inspection management — run at rescue tempo." },
      { title: "Clean close", body: "The project ends with valid permits, passed inspections and a completion certificate — as if it had always been done right." },
    ],
    faqs: [
      {
        q: "My application was rejected twice. Will a third try look bad?",
        a: "Rounds don't carry stigma — unresolved comments do. Reviewers see thousands of applications; what they remember is whether comments were actually answered. Our autopsy identifies the real objection (often not the literally stated one) and answers it technically. Third submissions we run tend to be last submissions.",
      },
      {
        q: "We built without a permit. Will regularising trigger fines?",
        a: "Sometimes, and they're usually modest against the alternative: enforcement discovery, forced stoppage, insurance invalidity and blocked transactions. We'll estimate exposure honestly before you commit — regularisation is almost always the cheaper branch of the decision tree.",
      },
      {
        q: "How fast can a stalled project restart?",
        a: "The audit takes days. Revival speed then depends on what expired: registrations and permits can be renewed, deviated works documented, new contractors appointed. Most dormant files we take on are moving again within two to three weeks.",
      },
    ],
    related: ["completion-certificates", "drawing-preparation", "fit-out-permit-management"],
    relatedAuthorities: ["dubai-municipality-approval", "dubai-civil-defence-approval", "trakhees-approval"],
  },
  {
    slug: "white-label-approvals",
    name: "White-Label Approvals for Firms",
    title: "White-Label Permit Support Dubai | For Contractors & Design Firms",
    metaDescription:
      "White-label authority-approvals support for Dubai fit-out contractors, interior designers and PMs: we run permits under your client relationship — confidential, non-competing, volume-priced. FitOutPermits.ae.",
    keywords: [
      "fit out permit consultant",
      "approvals outsourcing dubai",
      "permit support for contractors",
      "white label approvals",
    ],
    heroImage: {
      folder: "services",
      base: "white-label",
      alt: "Contractor and permit consultant coordinating over drawings in a Dubai fit-out site office",
    },
    intro: [
      "For fit-out contractors, interior designers and project managers, approvals are the profit leak that never shows on the tender: senior staff babysitting portals, programmes hostage to comment rounds, and clients who blame the builder for the authority's clock. Our white-label service removes the leak — we become your approvals department, invisible to your client, priced for volume.",
      "The arrangement is strictly non-competing: we do not do fit-out contracting or interior design, your drawings and client details stay confidential under NDA, and your client sees your brand throughout. What changes is that submissions go out permit-grade, comments get answered same-week, and your PMs run projects instead of portals.",
    ],
    includes: [
      "Dedicated approvals desk under your workflow and branding",
      "All authority submissions, tracking and comment resolution",
      "Drawing upgrades to permit grade from your design sets",
      "NOC chains, inspections and completion certificates",
      "Monthly volume pricing or per-project fixed fees",
      "A live tracker your PMs and your clients can read",
    ],
    audience: [
      "Fit-out contractors running multiple concurrent sites",
      "Interior design studios without in-house submission engineers",
      "Project-management firms offering approvals as part of their scope",
      "MEP and specialist contractors needing authority interfaces handled",
    ],
    steps: [
      { title: "Onboarding", body: "NDA, document standards, portal arrangements and a pilot project — most firms test us on their ugliest stalled approval, which suits us." },
      { title: "Pipeline integration", body: "Your project intake feeds our approvals desk; every project gets the same day-one authority map and tracker." },
      { title: "Volume operation", body: "Submissions, comments, inspections and certificates run on our systems under your flag, at a cadence portals reward." },
      { title: "Quarterly review", body: "Cycle times, first-pass rates and fee efficiency reviewed quarterly — the numbers make the renewal decision for you." },
    ],
    faqs: [
      {
        q: "Will our clients know you're involved?",
        a: "Only if you want them to. Documents and correspondence carry your brand where regulations allow; where an authority requires our named registration (engineer stamping, portal roles), it appears as your appointed consultant — standard industry structure your client will recognise as normal.",
      },
      {
        q: "Why wouldn't we just hire an approvals engineer in-house?",
        a: "One good hire covers one jurisdiction well and costs AED 300k+ loaded — then leaves. We give you a desk that already holds every jurisdiction's registrations, absorbs volume spikes across concurrent projects, and never resigns during your biggest month. Several clients came to us after exactly that hire left.",
      },
      {
        q: "What volumes qualify for monthly pricing?",
        a: "From roughly three concurrent projects the monthly desk beats per-project fees. Below that, per-project fixed pricing keeps it simple. We'll model both against your last year's pipeline — the maths takes an hour.",
      },
    ],
    related: ["fit-out-permit-management", "drawing-preparation", "completion-certificates"],
    relatedAuthorities: ["dubai-municipality-approval", "dda-approval", "dmcc-approval"],
  },
];

export function serviceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
