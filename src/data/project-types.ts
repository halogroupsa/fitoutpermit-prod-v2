import type { ProjectTypePage } from "./types";

/**
 * Project-type permit pages — the high-intent conversion cluster.
 * URL: /permits/<slug>
 */
export const PROJECT_TYPES: ProjectTypePage[] = [
  {
    slug: "office-fit-out-permit",
    name: "Office Fit-Out Permits",
    shortName: "Office",
    title: "Office Fit-Out Permit Dubai | Approvals for Offices & Workspaces",
    metaDescription:
      "Office fit-out permit in Dubai: which authority approves your office (DM, DDA, DIFC, DMCC), documents, timelines and costs. FitOutPermits.ae manages approvals so your workspace opens on time.",
    keywords: [
      "office fit out permit",
      "office fit out approval dubai",
      "office renovation permit dubai",
      "office fit out dubai",
    ],
    heroImage: {
      folder: "projects",
      base: "office",
      alt: "Contemporary Dubai office fit-out with glazed meeting rooms and open workspace nearing completion",
    },
    intro: [
      "Every office fit-out in Dubai needs a permit before the first partition goes up — the only question is which authority issues it. Mainland offices answer to Dubai Municipality; Internet City and Media City to DDA; JLT to DMCC/Concordia; DIFC to its own building control. Getting the jurisdiction right on day one shapes everything that follows.",
      "We manage office fit-out approvals end to end: jurisdiction confirmation, landlord NOC, drawing preparation, submission, Civil Defence coordination, and the completion certificate your Ejari, licence renewal and insurance quietly depend on. Your project manager and designer stay focused on the workspace; we own the paperwork and the clock.",
    ],
    authoritiesInvolved: [
      { slug: "dubai-municipality-approval", reason: "Mainland office buildings — permit via Dubai BPS" },
      { slug: "dda-approval", reason: "TECOM districts: Internet City, Media City, d3 and more" },
      { slug: "dmcc-approval", reason: "JLT towers — via Concordia" },
      { slug: "difc-fit-out-approval", reason: "DIFC's own building-control regime" },
      { slug: "dubai-civil-defence-approval", reason: "Always — partitions and ceilings change escape routes and detector coverage" },
    ],
    documents: [
      "Trade licence and tenancy contract / Ejari",
      "Landlord or building-management NOC",
      "Architectural drawings: existing, demolition, proposed",
      "MEP drawings with electrical load schedule and AC layout",
      "Fire & life-safety drawings",
      "Contractor licence, registrations and insurances",
    ],
    watchouts: [
      "Glass partitions and cellular offices change occupancy and travel distances — DCD review is triggered even when 'nothing structural' happens",
      "Supplementary AC for meeting rooms and server rooms can exceed the unit's cooling allocation",
      "Older towers' as-built drawings rarely match reality — survey first, or the permit drawings inherit the errors",
      "Reinstatement obligations at lease end are their own permit — budget it at lease signing, not at exit",
    ],
    steps: [
      { title: "Jurisdiction & NOC", body: "We confirm the authority, pull the building's fit-out rules and secure the landlord NOC — the true critical path in most office projects." },
      { title: "Drawings & submission", body: "Permit-grade architectural, MEP and fire drawings are prepared from a fresh site survey and submitted with the full document set." },
      { title: "Comments to permit", body: "Authority and Civil Defence comments are resolved technically until the permit releases — typically one round when the package starts clean." },
      { title: "Works & inspections", body: "Your contractor builds; we keep permits, inspections and site documentation compliant throughout." },
      { title: "Completion certificate", body: "Final inspections close and the completion certificate is issued — the document that makes your office legally occupiable." },
    ],
    timelineNote:
      "A standard office permit releases in 1–3 weeks after NOC, depending on jurisdiction. End-to-end including completion, a 5,000 sq ft office typically runs 8–12 weeks — approvals overlap the design and procurement period when sequenced properly.",
    faqs: [
      {
        q: "Do I need a permit for an open-plan refresh with no new walls?",
        a: "If ceilings, electrical circuits, AC or fire devices are touched — which a real refresh almost always does — yes. Furniture-only changes generally don't need a permit but usually still need building-management notification.",
      },
      {
        q: "Can I use my own designer and contractor?",
        a: "Yes. We work alongside your appointed team as the approvals specialist — or bring registered consultants and contractors where your team lacks a required registration. We never compete for your fit-out contract.",
      },
      {
        q: "What does an office fit-out permit cost in Dubai?",
        a: "Government fees for a typical 1,000–3,000 sq ft office run roughly AED 1,500–4,000 depending on jurisdiction. Our fixed consultancy fee is quoted after a free scope review — use the cost calculator on this site for an instant estimate.",
      },
    ],
    relatedProjects: ["retail-shop-approval", "clinic-fit-out-approval", "warehouse-modification-permit"],
  },
  {
    slug: "restaurant-fit-out-approval",
    name: "Restaurant Fit-Out Approvals",
    shortName: "Restaurant",
    title: "Restaurant Approval Dubai | Fit-Out Permits, Food Safety & DCD",
    metaDescription:
      "Restaurant fit-out approval in Dubai: building permit, food safety layout, Civil Defence kitchen suppression, gas, DEWA and signage — sequenced end-to-end by FitOutPermits.ae so you open on schedule.",
    keywords: [
      "restaurant approval dubai",
      "restaurant fit out permit dubai",
      "restaurant license dubai requirements",
      "commercial kitchen approval dubai",
    ],
    heroImage: {
      folder: "projects",
      base: "restaurant",
      alt: "Restaurant fit-out in Dubai with open commercial kitchen line and dining area under final styling",
    },
    intro: [
      "Restaurants are the most approval-dense fit-outs in Dubai. A single opening can involve the building authority, Dubai Municipality food safety, Civil Defence kitchen suppression, gas system approval, DEWA load increase, grease-trap drainage, outdoor-seating consent and signage permits — each with its own reviewers, and each able to delay your opening independently.",
      "Our restaurant service exists to make those tracks run in parallel instead of in sequence. We map every approval on day one against your target opening date, secure the kitchen-critical items early (extract riser, gas feasibility, grease drainage), and manage all submissions on one coordinated drawing set.",
    ],
    authoritiesInvolved: [
      { slug: "dubai-municipality-approval", reason: "Building permit (mainland) + food-safety layout review" },
      { slug: "dubai-civil-defence-approval", reason: "Kitchen hood suppression, gas detection, occupancy and exits" },
      { slug: "dewa-approval-noc", reason: "Kitchens almost always exceed base electrical allocations" },
      { slug: "trakhees-approval", reason: "Palm Jumeirah and PCFC-jurisdiction restaurants" },
      { slug: "rta-noc", reason: "Outdoor seating toward the public realm; valet arrangements" },
    ],
    documents: [
      "Trade licence (restaurant activity) and tenancy contract",
      "Landlord NOC including kitchen extract and gas confirmation",
      "Architectural layout with dining occupancy and kitchen zoning",
      "Kitchen layout with equipment schedule and food-flow diagram",
      "MEP set: extract, fresh air, gas line, grease drainage, power loads",
      "Fire-suppression and detection drawings for DCD",
      "Facade/signage drawings where shopfront changes",
    ],
    watchouts: [
      "No extract riser, no restaurant — verify duct routing before signing the lease, not after",
      "Grease traps need drainage capacity and access; retrofitting into towers is costly",
      "LPG versus electric kitchens change the DCD scope substantially",
      "Food-safety layout review checks flows (receiving → storage → prep → service) — pretty plans that cross-contaminate get bounced",
      "Outdoor seating on public footpaths adds RTA; on private podium it's the landlord — know which yours is",
    ],
    steps: [
      { title: "Pre-lease feasibility", body: "Extract, gas, drainage, power and occupancy are verified for the specific unit — the hour that saves restaurateurs the most money of any we sell." },
      { title: "Approval map & programme", body: "Every required approval is mapped against your opening date with owners and durations — one page, no surprises." },
      { title: "Coordinated submissions", body: "Building permit, food-safety layout, DCD and DEWA applications run in parallel on one drawing baseline." },
      { title: "Works & specialist systems", body: "Suppression, gas and extract installations proceed with DCD-registered specialists while general fit-out advances." },
      { title: "Inspections & opening", body: "DCD, food-safety and completion inspections are sequenced tightly; you open with every certificate in the file." },
    ],
    timelineNote:
      "From lease to legal opening, a well-run Dubai restaurant project typically takes 10–16 weeks; kitchen-critical approvals dominate the path. Every week saved on approvals is a week less rent paid dark.",
    faqs: [
      {
        q: "What approvals does a restaurant need in Dubai?",
        a: "Typically: fit-out permit from the building authority, Dubai Municipality food-safety layout approval, Civil Defence approval for suppression and gas, DEWA load approval, grease-management drainage sign-off, and signage/outdoor-seating consents. Free-zone locations swap the building authority but keep the rest.",
      },
      {
        q: "Can I convert a retail shop into a restaurant?",
        a: "Sometimes — it's a change of use requiring planning consent plus the full kitchen feasibility set: extract, drainage, gas and power. Some units convert easily; many can't at any sensible cost. We answer definitively before you commit.",
      },
      {
        q: "How much are the government fees for a restaurant fit-out?",
        a: "Across authorities, typically AED 5,000–15,000 for a mid-size restaurant, driven by area and systems. Our proposal itemises each authority's fees separately from our fixed fee.",
      },
      {
        q: "Do cloud kitchens go through the same process?",
        a: "The kitchen-side approvals are identical — food safety, DCD, extract, grease — minus dining occupancy and usually minus signage. Multi-brand cloud kitchens add per-brand licensing questions we coordinate with your licensing agent.",
      },
    ],
    relatedProjects: ["cafe-fit-out-approval", "hotel-fit-out-approval", "retail-shop-approval"],
  },
  {
    slug: "cafe-fit-out-approval",
    name: "Café & Cafeteria Approvals",
    shortName: "Café",
    title: "Cafeteria License & Café Fit-Out Approval Dubai | Cost & Process",
    metaDescription:
      "Café and cafeteria fit-out approval in Dubai: cafeteria licence cost, food-safety layout, DCD requirements and fit-out permits for coffee shops and cafeterias. Managed by FitOutPermits.ae.",
    keywords: [
      "cafeteria license in dubai",
      "cafeteria license cost in dubai",
      "cafe fit out approval dubai",
      "coffee shop permit dubai",
    ],
    heroImage: {
      folder: "projects",
      base: "cafe",
      alt: "Specialty coffee shop fit-out in Dubai with espresso bar counter and seating in warm daylight",
    },
    intro: [
      "Cafés and cafeterias sit in a lighter approval class than full restaurants — until espresso machines, panini grills and shisha or baking equipment start changing the answer. The permit path depends on your menu's cooking intensity: a true 'cafeteria' with light food prep runs leaner on extract and suppression than a café with a real kitchen.",
      "We scope café projects around that distinction. Where the menu allows, we design the approval strategy to stay inside lighter extract and suppression classes — legitimately, with the authority's blessing — which saves real fit-out cost. Where the menu doesn't, we tell you before the lease is signed.",
    ],
    authoritiesInvolved: [
      { slug: "dubai-municipality-approval", reason: "Fit-out permit (mainland) + food-safety layout" },
      { slug: "dubai-civil-defence-approval", reason: "Detection, exits; suppression where cooking class demands" },
      { slug: "dewa-approval-noc", reason: "Espresso and kitchen equipment loads routinely exceed retail allocations" },
      { slug: "rta-noc", reason: "Pavement seating and kiosk placements toward the public realm" },
    ],
    documents: [
      "Trade licence (cafeteria/coffee-shop activity) and tenancy contract",
      "Landlord NOC with extract/equipment confirmation",
      "Layout with counter, prep and seating zoning",
      "Equipment schedule with electrical loads",
      "Food-flow diagram for the food-safety review",
      "MEP and fire-safety drawing sets",
    ],
    watchouts: [
      "The menu defines the approval class — adding a fryer later can reopen the whole DCD scope",
      "Mall cafés add landlord design review and often night-works-only fit-out windows",
      "Kiosks in common areas have their own approval logic — smaller footprint, surprisingly similar paperwork",
      "Shisha service is a separate permit regime with location restrictions — verify before leasing",
    ],
    steps: [
      { title: "Menu-based scoping", body: "Cooking processes are classified first — they determine extract, suppression and food-safety scope more than the floor area does." },
      { title: "Feasibility & NOC", body: "Unit capability (power, extract, drainage) is verified and the landlord NOC secured." },
      { title: "Submissions", body: "Fit-out permit, food-safety layout and DCD run in parallel on one drawing set." },
      { title: "Works & inspections", body: "Fit-out proceeds; food-safety and DCD inspections are pre-walked so first visits pass." },
      { title: "Opening file", body: "Completion certificate and all clearances compiled — your licence renewal and insurers will ask for them eventually." },
    ],
    timelineNote:
      "Light-menu cafés move fast: permits in 2–3 weeks, opening in 6–10 weeks from lease. Full-kitchen cafés follow restaurant timelines. The cafeteria licence itself (DED/free zone) runs parallel to the physical approvals.",
    faqs: [
      {
        q: "How much does a cafeteria licence cost in Dubai?",
        a: "The DED trade-licence side typically runs AED 10,000–15,000 per year for a mainland cafeteria (licence, activity and municipality fees), before the physical fit-out approvals. Fit-out government fees add roughly AED 2,000–6,000 depending on scope. We quote the physical-approvals side precisely after seeing the unit.",
      },
      {
        q: "Can I open a café without a kitchen extract riser?",
        a: "With a genuinely light menu — coffee, cold prep, reheat-only — often yes, using recirculating or code-compliant low-emission equipment. The classification must be agreed with the food-safety reviewer up front; we handle exactly that conversation.",
      },
      {
        q: "Is a coffee kiosk easier to approve than a café?",
        a: "Physically smaller, administratively similar: landlord consent, food-safety review, power and sometimes water/drainage solutions, plus DCD if the host building's systems are affected. Timeline is usually shorter; diligence is the same.",
      },
    ],
    relatedProjects: ["restaurant-fit-out-approval", "retail-shop-approval", "salon-fit-out-approval"],
  },
  {
    slug: "retail-shop-approval",
    name: "Retail Shop Approvals",
    shortName: "Retail",
    title: "Retail Shop Fit-Out Permit Dubai | Mall & High-Street Approvals",
    metaDescription:
      "Retail fit-out approval in Dubai: shop permits for malls and high streets, landlord design review, DCD, signage and completion. FitOutPermits.ae keeps store openings on schedule.",
    keywords: [
      "shop fit out permit dubai",
      "retail fit out approval",
      "retail shop approval dubai",
      "mall shop fit out dubai",
    ],
    heroImage: {
      folder: "projects",
      base: "retail",
      alt: "High-end retail store fit-out in a Dubai mall with shopfront glazing being installed",
    },
    intro: [
      "Retail lives and dies by opening dates, and in Dubai the approval track is where opening dates are won. Mall stores answer to two masters — the landlord's design-review team and the government authority — while high-street units add RTA and municipality signage layers. Multi-store rollouts multiply everything by the number of jurisdictions involved.",
      "We run retail approvals as a production line: jurisdiction and landlord requirements confirmed at LOI stage, design-review and permit submissions overlapped, DCD sequenced around the mall's night-works windows, and signage approved with the store — not after it. For brands rolling out multiple locations, we operate as one accountable approvals partner across every jurisdiction in the UAE.",
    ],
    authoritiesInvolved: [
      { slug: "dubai-municipality-approval", reason: "Mainland malls and high-street units" },
      { slug: "dda-approval", reason: "d3 and TECOM-district retail" },
      { slug: "trakhees-approval", reason: "Palm Jumeirah and Nakheel-mall retail" },
      { slug: "dubai-civil-defence-approval", reason: "Sprinkler and detection re-layout under new ceilings; storage classification" },
      { slug: "rta-noc", reason: "High-street frontage works, loading and display encroachments" },
    ],
    documents: [
      "Trade licence and lease/LOI documents",
      "Mall design-review submission (concept + detailed) where applicable",
      "Architectural and shopfront drawings",
      "MEP set with lighting loads and AC re-balancing",
      "Fire & life-safety drawings including back-of-house storage",
      "Signage drawings with dimensions, materials and illumination details",
    ],
    watchouts: [
      "Mall design review is a real gate — brand-standard storefronts still get comments in Dubai malls",
      "Sprinkler re-layout under feature ceilings is the most common retail DCD comment",
      "Stockroom racking above threshold heights changes the fire classification",
      "Signage approval is separate nearly everywhere — treat it as its own mini-project or it becomes the last thing blocking opening",
    ],
    steps: [
      { title: "LOI-stage requirements", body: "Jurisdiction, landlord manual and realistic approval timeline confirmed before lease commitment." },
      { title: "Design review + permit in parallel", body: "Mall design comments and authority technical review run simultaneously on a managed drawing baseline." },
      { title: "DCD & signage tracks", body: "Fire approval and signage consent progress alongside — never after — the main permit." },
      { title: "Fit-out under mall rules", body: "Night works, hoarding graphics, delivery slots: we keep the contractor compliant and the mall relationship healthy." },
      { title: "Inspection & opening", body: "Authority, DCD and mall inspections close in sequence; the store opens with its full certificate file." },
    ],
    timelineNote:
      "Mall units typically run 4–8 weeks from design-review submission to permit, then works. High-street units are faster on landlord review, slower on signage/RTA. Rollout brands: give us the pipeline and we'll pre-clear jurisdictions before sites are even signed.",
    faqs: [
      {
        q: "Does a simple shop refresh need a permit?",
        a: "If ceilings, lighting circuits, sprinkler heads or the shopfront change — yes, plus mall design review. Visual-merchandising-only refreshes usually need just landlord notification. The line sits at the ceiling grid, roughly.",
      },
      {
        q: "Who approves shop signage in Dubai?",
        a: "Mainland: Dubai Municipality signage permit, plus the landlord. Free zones: the zone authority. Malls: the mall's design team plus the authority where structure or power is involved. Illuminated and rooftop signage add reviews. It's genuinely its own discipline — we run it as one.",
      },
      {
        q: "Can you handle multi-store rollouts across the UAE?",
        a: "Yes — that's a core use case. One point of contact, one document standard, one tracker across DM, DDA, Trakhees, malls, and the other emirates' municipalities as you expand.",
      },
    ],
    relatedProjects: ["restaurant-fit-out-approval", "salon-fit-out-approval", "pharmacy-fit-out-approval"],
  },
  {
    slug: "clinic-fit-out-approval",
    name: "Clinic Fit-Out Approvals",
    shortName: "Clinic",
    title: "Clinic Fit-Out Approval Dubai | DHA Layout & Permit Management",
    metaDescription:
      "Clinic fit-out approval in Dubai: DHA layout requirements, building permits, Civil Defence and the licensing sequence for medical and dental clinics. Managed end-to-end by FitOutPermits.ae.",
    keywords: [
      "clinic fit out approval dubai",
      "clinic approval dubai",
      "dha clinic layout requirements",
      "dental clinic fit out dubai",
    ],
    heroImage: {
      folder: "projects",
      base: "clinic",
      alt: "Dental clinic fit-out in Dubai with treatment chairs installed and clinical lighting",
    },
    intro: [
      "A clinic fit-out is two projects wearing one hoarding: a construction project answering to the building authority, and a clinical facility answering to DHA (or DHCA in Healthcare City). The layouts that satisfy one can fail the other — which is why clinics built without approval sequencing so often end up moving walls twice.",
      "We run the sequence that works: DHA layout approval first, building permit on the cleared layout, Civil Defence in parallel, and clinical fit checks during construction so the facility that gets inspected is the facility that was approved. Dental, GP, aesthetics, physio, diagnostics — the choreography is our daily work.",
    ],
    authoritiesInvolved: [
      { slug: "dha-approval", reason: "Clinical layout standards and the facility licence" },
      { slug: "dhcc-approval", reason: "Clinics inside Dubai Healthcare City (DHCA regime instead of DHA)" },
      { slug: "dubai-municipality-approval", reason: "Building fit-out permit for mainland clinics" },
      { slug: "dubai-civil-defence-approval", reason: "Occupancy, exits and detection for clinical premises" },
      { slug: "dewa-approval-noc", reason: "Medical equipment and sterilisation loads exceed office allocations" },
    ],
    documents: [
      "DHA initial approval for the healthcare activity",
      "Clinical layout with room schedule against DHA facility standards",
      "Architectural and MEP fit-out sets (clinical air changes, drainage, medical gas where used)",
      "Finishes schedule meeting infection-control requirements",
      "Trade licence, tenancy and landlord NOC",
      "Building authority and DCD application documents",
    ],
    watchouts: [
      "Room-size minimums are absolute — an undersized treatment room fails no matter how nice the finish",
      "X-ray/imaging rooms need shielding calculations and reports before DHA will pass the facility",
      "Sterilisation flow (dirty → clean) must be designed in; it cannot be annotated in later",
      "Tower office floors often lack the drainage a clinic needs — feasibility before lease, always",
    ],
    steps: [
      { title: "Pre-lease clinical feasibility", body: "The unit is tested against DHA spatial and services requirements before you sign — the most valuable step in the entire sequence." },
      { title: "DHA layout approval", body: "The clinical layout is designed and cleared with DHA first, so later comments don't redraw approved walls." },
      { title: "Building permit + DCD", body: "The fit-out permit and fire approvals run on the DHA-cleared layout in parallel tracks." },
      { title: "Construction with clinical holds", body: "We hold the build to the approved clinical layout through inspections at the moments that matter." },
      { title: "Facility inspection & licence", body: "Building completion, DCD clearance and the DHA facility inspection close in order; the facility licence follows." },
    ],
    timelineNote:
      "Lease-to-licence for a standard clinic runs 10–14 weeks when the sequence is right. The same project run out of sequence routinely doubles that — clinical comments after construction are the expensive kind.",
    faqs: [
      {
        q: "What are DHA's room size requirements for clinics?",
        a: "DHA's facility guidelines set minimum dimensions per room type — consultation, treatment, dental operatory and so on — along with corridor, reception and accessibility requirements. We design your layout against the current standards for your exact activity list, which is what the approval actually checks.",
      },
      {
        q: "Can I fit out a clinic in a residential villa?",
        a: "Only where zoning permits healthcare use, and villa conversions add parking, accessibility and drainage questions. Some corridors of Dubai allow it well; many don't. It's a one-day feasibility check with us before you commit either way.",
      },
      {
        q: "How much does a clinic fit-out approval cost?",
        a: "Combined government fees (DHA, building authority, DCD, DEWA) typically run AED 5,000–12,000 for a small-to-mid clinic. Our fixed fee covers the whole multi-authority sequence — quoted after a feasibility review of your unit and activity list.",
      },
    ],
    relatedProjects: ["pharmacy-fit-out-approval", "salon-fit-out-approval", "office-fit-out-permit"],
  },
  {
    slug: "pharmacy-fit-out-approval",
    name: "Pharmacy Fit-Out Approvals",
    shortName: "Pharmacy",
    title: "Pharmacy Fit-Out & License Approval Dubai | DHA Requirements",
    metaDescription:
      "Pharmacy fit-out approval in Dubai: DHA layout requirements, controlled-drug storage, dispensing workflow, building permits and inspections — managed end-to-end by FitOutPermits.ae.",
    keywords: [
      "pharmacy license dubai",
      "pharmacy fit out dubai",
      "dha pharmacy requirements",
      "pharmacy approval dubai",
    ],
    heroImage: {
      folder: "projects",
      base: "pharmacy",
      alt: "Modern pharmacy fit-out in Dubai with dispensing counter and medicine shelving being stocked",
    },
    intro: [
      "Pharmacies are compact, dense approvals: DHA reviews the dispensing workflow, controlled-drug storage, shelving clearances and pharmacist visibility lines, while the building authority permits the physical fit-out and Civil Defence checks life safety. Mall pharmacies add landlord design review; standalone units add signage and sometimes RTA frontage questions.",
      "We handle pharmacy approvals as a fixed, repeatable sequence — which is also why pharmacy chains use us for rollouts. The DHA layout gets it right the first time, the building permit follows without divergence, and the facility inspection finds exactly what was approved.",
    ],
    authoritiesInvolved: [
      { slug: "dha-approval", reason: "Pharmacy layout standards, controlled-drug storage and the facility licence" },
      { slug: "dubai-municipality-approval", reason: "Building fit-out permit for mainland locations" },
      { slug: "dubai-civil-defence-approval", reason: "Detection, exits and storage classification" },
      { slug: "dewa-approval-noc", reason: "Refrigeration and HVAC loads for medicine storage" },
    ],
    documents: [
      "DHA initial approval for the pharmacy activity",
      "Layout with dispensing counter, shelving plan and controlled-drug cabinet location",
      "Cold-storage specification for temperature-controlled medicines",
      "Architectural and MEP fit-out drawings",
      "Trade licence, tenancy contract and landlord NOC",
      "Signage drawings including the green-cross and naming requirements",
    ],
    watchouts: [
      "Controlled-drug storage has fixed physical requirements — anchoring, location, access control",
      "Medicine fridges need dedicated, monitored power; a tripped breaker is a stock write-off",
      "Minimum area and counter-visibility rules catch small mall units — check before leasing",
      "Pharmacist line-of-sight to the trading area is a layout requirement, not a suggestion",
    ],
    steps: [
      { title: "Unit feasibility", body: "Area, visibility, power and cold-chain provisions verified against DHA requirements before lease." },
      { title: "DHA layout approval", body: "Dispensing workflow and storage layout cleared with DHA first." },
      { title: "Permit & DCD", body: "Building permit and fire approvals processed on the cleared layout." },
      { title: "Fit-out & cold chain", body: "Construction proceeds with the storage, refrigeration and security details held to the approved drawings." },
      { title: "Inspection & licence", body: "Facility inspection passes on first visit because the site matches the file; the pharmacy licence follows." },
    ],
    timelineNote:
      "A pharmacy typically runs 8–12 weeks lease-to-licence. Chain rollouts compress further once the prototype layout is pre-cleared — ask us about programme pricing.",
    faqs: [
      {
        q: "What does DHA check in a pharmacy layout?",
        a: "Dispensing counter position and visibility, shelving clearances, controlled-drug cabinet placement and security, cold-storage provision, pharmacist workflow and public accessibility. It's a workflow review as much as a spatial one — design it that way from the start.",
      },
      {
        q: "Can a pharmacy open inside a supermarket or mall?",
        a: "Yes — in-store and mall pharmacies are common, adding the host's design review and shared-services coordination to the DHA track. The approval logic is unchanged; the coordination load roughly doubles.",
      },
      {
        q: "Do online/delivery pharmacies need the same fit-out approvals?",
        a: "The licensed premises behind them do — storage, cold chain and controlled-drug rules apply regardless of whether customers walk in. Dark-store pharmacy facilities are a growing scope for us.",
      },
    ],
    relatedProjects: ["clinic-fit-out-approval", "retail-shop-approval", "warehouse-modification-permit"],
  },
  {
    slug: "salon-fit-out-approval",
    name: "Salon & Spa Approvals",
    shortName: "Salon",
    title: "Salon Approval Dubai | Beauty Salon & Spa Fit-Out Permits",
    metaDescription:
      "Salon fit-out approval in Dubai: municipality health requirements, ventilation, plumbing, building permits and DCD for beauty salons, barbershops and spas. Managed by FitOutPermits.ae.",
    keywords: [
      "salon approval dubai",
      "beauty salon license dubai",
      "salon fit out dubai",
      "spa approval dubai",
    ],
    heroImage: {
      folder: "projects",
      base: "salon",
      alt: "Beauty salon fit-out in Dubai with styling stations, mirrors and wash units being installed",
    },
    intro: [
      "Salons, barbershops and spas carry a health-regulated fit-out layer most tenants don't expect: municipality public-health requirements govern washing points, sterilisation areas, ventilation rates, treatment-room privacy and floor drainage — on top of the ordinary fit-out permit and Civil Defence review.",
      "The classic salon mistake is designing the interior first and discovering the plumbing second. Wash units, pedicure stations and treatment rooms all want water and drainage where tower slabs rarely offer it. We test that feasibility before design money is spent, then sequence health review, permit and DCD as one programme.",
    ],
    authoritiesInvolved: [
      { slug: "dubai-municipality-approval", reason: "Fit-out permit + public-health layout requirements (mainland)" },
      { slug: "dda-approval", reason: "Salons in TECOM communities" },
      { slug: "dubai-civil-defence-approval", reason: "Occupancy, exits and detection changes" },
      { slug: "dewa-approval-noc", reason: "Water heaters, styling equipment and spa loads" },
    ],
    documents: [
      "Trade licence (salon/spa activities) and tenancy contract",
      "Landlord NOC including plumbing modification consent",
      "Layout with stations, wash points, sterilisation area and treatment rooms",
      "Plumbing and drainage drawings",
      "Ventilation design with the air-change rates health review expects",
      "Fire & life-safety drawings",
    ],
    watchouts: [
      "Ladies' salon privacy requirements affect layout and glazing — plan them, don't retrofit film",
      "Chemical treatments (keratin, nail bars) raise ventilation requirements measurably",
      "Pedicure chairs need floor drainage most units don't have — the discovery that resets budgets",
      "Spa wet areas (steam, sauna) escalate both DCD and municipal review — a spa is not a big salon",
    ],
    steps: [
      { title: "Wet-point feasibility", body: "Water, drainage and ventilation capability of the unit confirmed against your station count before design." },
      { title: "Health-compliant layout", body: "The layout is designed to municipality public-health requirements from the first sketch." },
      { title: "Permit + DCD submissions", body: "Fit-out permit and fire approvals run in parallel on the health-compliant layout." },
      { title: "Works & inspections", body: "Plumbing and ventilation installations held to drawings; health and completion inspections pre-walked." },
      { title: "Licence activation", body: "With the facility passed, your salon activity licence completes and stations can trade." },
    ],
    timelineNote:
      "A salon typically runs 6–10 weeks lease-to-opening; spas with wet areas run longer. Drainage feasibility is the schedule-killer — it's also a same-week answer if you ask before signing.",
    faqs: [
      {
        q: "What are the municipality requirements for salons in Dubai?",
        a: "Expect requirements on washing facilities per station count, sterilisation provision, ventilation rates, surface finishes, treatment-room configuration and staff hygiene facilities. They're specific and inspected; we design to the current standard for your exact activity list.",
      },
      {
        q: "Can I open a home salon in Dubai?",
        a: "Home-based salon licensing exists in limited forms with its own rules, but commercial-grade services in villas generally require proper zoning and the full facility approvals. We can assess your specific plan quickly.",
      },
      {
        q: "Does a barbershop need the same approvals as a ladies' salon?",
        a: "The same core set — health layout, permit, DCD — with lighter privacy requirements and usually simpler treatment scopes. Add wet shaves and skin treatments and the sterilisation requirements step up accordingly.",
      },
    ],
    relatedProjects: ["clinic-fit-out-approval", "retail-shop-approval", "gym-fit-out-approval"],
  },
  {
    slug: "gym-fit-out-approval",
    name: "Gym & Fitness Approvals",
    shortName: "Gym",
    title: "Gym Approval Dubai | Fitness Studio Fit-Out Permits & Requirements",
    metaDescription:
      "Gym fit-out approval in Dubai: structural loading, acoustics, ventilation, DCD occupancy and municipality requirements for gyms and fitness studios. Managed by FitOutPermits.ae.",
    keywords: [
      "gym approval dubai",
      "gym fit out dubai",
      "fitness studio permit dubai",
      "gym license dubai requirements",
    ],
    heroImage: {
      folder: "projects",
      base: "gym",
      alt: "Boutique fitness studio fit-out in Dubai with rubber flooring and rigs being installed",
    },
    intro: [
      "Gyms stress buildings in ways ordinary fit-outs don't: free-weight zones load slabs, dropped bars hammer acoustics, group classes spike occupancy, and ventilation needs jump well past office rates. Approvals reflect all of it — structural verification, acoustic treatment, DCD occupancy review and municipality facility requirements arrive together.",
      "We approach gym approvals structurally first. Slab capacity and acoustic strategy get engineered answers before the layout is frozen, because those two topics generate almost every gym rejection and every downstairs-neighbour complaint that follows a rushed opening.",
    ],
    authoritiesInvolved: [
      { slug: "dubai-municipality-approval", reason: "Fit-out permit + facility requirements (mainland)" },
      { slug: "dubai-civil-defence-approval", reason: "Occupancy load, exits and detection for assembly-type use" },
      { slug: "dewa-approval-noc", reason: "Cardio equipment, HVAC upgrades and sauna/steam loads" },
      { slug: "dda-approval", reason: "Studios in TECOM communities" },
    ],
    documents: [
      "Trade licence (fitness activity) and tenancy contract",
      "Landlord NOC — often with structural and acoustic conditions attached",
      "Layout with equipment zoning and occupancy calculations",
      "Structural assessment for free-weight and rig zones",
      "Acoustic treatment specification (floor build-ups, isolation)",
      "Ventilation design and MEP drawings",
      "Fire & life-safety drawings",
    ],
    watchouts: [
      "Mezzanine and podium slabs need verification before the first rack is ordered",
      "Acoustic complaints can shut a trading gym — isolation is cheaper during fit-out by an order of magnitude",
      "Group-class studios flip DCD occupancy math; exits sized for retail may not survive it",
      "Pools, saunas and cryo add whole approval chapters — declare them at scoping",
    ],
    steps: [
      { title: "Structural & acoustic feasibility", body: "Slab capacity and noise transmission are assessed for the specific unit — before lease where possible." },
      { title: "Engineered layout", body: "Equipment zoning, floor build-ups and ventilation are engineered into the permit drawings, not added after comments." },
      { title: "Permit + DCD", body: "Building permit and fire review run in parallel, with occupancy calculations that survive scrutiny." },
      { title: "Works & verification", body: "Floor systems and isolation are installed to spec — we verify, because this is the item neighbours will test nightly." },
      { title: "Inspection & opening", body: "Completion and facility inspections close; the gym opens without a complaints file waiting to happen." },
    ],
    timelineNote:
      "Boutique studios run 6–10 weeks lease-to-open; full-service gyms with wet areas 12–16. Structural verification is a week that saves a quarter.",
    faqs: [
      {
        q: "Do gyms need structural approval in Dubai?",
        a: "Any meaningful free-weight zone should be structurally verified, and authorities and landlords increasingly require it explicitly. Rigs, platforms and heavy racks concentrate loads that standard commercial slabs weren't sized around.",
      },
      {
        q: "What stops most gym approvals?",
        a: "Acoustics and occupancy. Dropped weights over occupied floors and class studios exceeding exit capacity are the two recurring comment sources — both solvable cheaply at design stage and expensively after.",
      },
      {
        q: "Can I open a gym in a warehouse?",
        a: "Often, and it solves the slab and acoustics problems elegantly — but it introduces change-of-use, fire-strategy and parking questions in industrial jurisdictions like Al Quoz or JAFZA. It's one of our most common feasibility briefs.",
      },
    ],
    relatedProjects: ["warehouse-modification-permit", "salon-fit-out-approval", "office-fit-out-permit"],
  },
  {
    slug: "warehouse-modification-permit",
    name: "Warehouse Modification Permits",
    shortName: "Warehouse",
    title: "Warehouse Modification Permit Dubai | Mezzanine & Racking Approvals",
    metaDescription:
      "Warehouse modification approval in Dubai: mezzanine floors, racking, cold rooms and in-warehouse offices across Al Quoz, JAFZA, DIP and Dubai South. Structural and fire approvals by FitOutPermits.ae.",
    keywords: [
      "warehouse approval dubai",
      "mezzanine floor approval dubai",
      "warehouse modification permit",
      "racking approval dubai",
    ],
    heroImage: {
      folder: "projects",
      base: "warehouse",
      alt: "Warehouse mezzanine steel structure being erected inside a Dubai industrial facility",
    },
    intro: [
      "Warehouse modifications are engineering approvals in industrial clothing. Mezzanines, high racking, cold rooms, in-warehouse offices and process equipment all carry structural calculations, fire-strategy revisions and sometimes power upgrades — reviewed by whichever authority governs your district: Dubai Municipality in Al Quoz and Ras Al Khor, JAFZA in Jebel Ali, Dubai South, DIP or DSO.",
      "The commercial stakes are insurance-grade: unapproved mezzanines and racking invalidate policies and surface brutally during fire incidents, audits and facility sales. We regularise existing non-compliant installations too — quietly, methodically, and faster than owners expect once the engineering story is assembled.",
    ],
    authoritiesInvolved: [
      { slug: "dubai-municipality-approval", reason: "Al Quoz, Ras Al Khor and mainland industrial areas" },
      { slug: "jafza-approval", reason: "Jebel Ali Free Zone facilities" },
      { slug: "dubai-south-approval", reason: "Logistics District and aviation-linked facilities" },
      { slug: "dubai-civil-defence-approval", reason: "Fire strategy: commodity classes, storage heights, in-rack protection" },
      { slug: "dewa-approval-noc", reason: "Cold rooms, automation and process power upgrades" },
    ],
    documents: [
      "Trade licence and lease/title documents for the facility",
      "Structural drawings and calculations for mezzanines/racking",
      "Architectural layout: existing and proposed",
      "Fire-strategy revision matching storage heights and commodity classes",
      "MEP drawings for power, lighting and ventilation changes",
      "EHS documentation where the jurisdiction requires it",
    ],
    watchouts: [
      "Mezzanines change your fire strategy even when 'it's just storage' — sprinkler coverage and exits follow",
      "Racking above ~7.5m triggers high-piled storage review in most jurisdictions",
      "Cold rooms need condensate drainage and insulation fire ratings — the two forgotten line items",
      "An unapproved mezzanine discovered during facility sale can stall the transaction for months",
    ],
    steps: [
      { title: "Feasibility & jurisdiction", body: "Structure, fire strategy and power headroom verified against your intended modification; authority path confirmed." },
      { title: "Engineering package", body: "Calculations, drawings and fire-strategy revisions prepared by registered engineers." },
      { title: "Submission & comments", body: "Authority and Civil Defence reviews run in parallel; comments get engineering answers." },
      { title: "Fabrication & staged inspection", body: "Steel goes up under the staged inspections industrial scopes attract." },
      { title: "Completion & compliance file", body: "Completion certificates and as-builts close out — the file your insurer and future buyer will ask for." },
    ],
    timelineNote:
      "Standard mezzanine approvals run 3–6 weeks to permit depending on jurisdiction; regularisation of existing works takes longer but is nearly always achievable. Cold-chain and automation projects should engage at equipment-selection stage.",
    faqs: [
      {
        q: "Do I need approval for warehouse racking?",
        a: "Above modest heights, yes — racking is reviewed structurally (including seismic checks) and for fire protection: commodity classification, aisle widths, in-rack sprinklers. If your racking went up without approval, regularising it now is dramatically cheaper than explaining it after an incident.",
      },
      {
        q: "Can I add an office inside my warehouse?",
        a: "Yes — in-warehouse offices are routine but permitted works: structure (if mezzanine-mounted), fire separation, ventilation and sometimes additional exits. Jurisdiction determines the flavour; the requirement itself is universal.",
      },
      {
        q: "How do I regularise an unapproved mezzanine?",
        a: "A structural assessment of the as-built steel, retrospective calculations and drawings, fire-strategy alignment, then a regularisation submission with the authority. We've done this many times; the sequence matters and honesty with the authority works better than owners fear.",
      },
    ],
    relatedProjects: ["office-fit-out-permit", "gym-fit-out-approval", "retail-shop-approval"],
  },
  {
    slug: "villa-renovation-permit",
    name: "Villa Renovation Permits",
    shortName: "Villa",
    title: "Villa Renovation Permit Dubai | Extension & Modification Approvals",
    metaDescription:
      "Villa renovation permit in Dubai: extensions, pools, structural changes and developer NOCs across Emirates Hills, Palm Jumeirah, Dubai Hills, Arabian Ranches and mainland Dubai. Managed by FitOutPermits.ae.",
    keywords: [
      "villa renovation permit dubai",
      "villa extension permit dubai",
      "home renovation approval dubai",
      "villa modification dubai",
    ],
    heroImage: {
      folder: "projects",
      base: "villa",
      alt: "Luxury Dubai villa renovation with new extension formwork and landscaped garden works",
    },
    intro: [
      "Renovating a villa in Dubai involves more approvals than most owners expect: the master developer's NOC (Emaar, Nakheel, Dubai Hills, Meraas — whoever governs your community), then the government permit from Dubai Municipality or Trakhees, plus DEWA for load changes and Civil Defence where layouts or villa use change. Extensions, pools and structural work sit squarely in permit territory; even 'internal' renovations usually need community consent.",
      "We run villa projects for owners who want the works legal, the title clean and the neighbours undisturbed. One team handles developer NOC, permit, inspections and completion — with the drawings, calculations and contractor documentation prepared once and reused across every gate.",
    ],
    authoritiesInvolved: [
      { slug: "nakheel-noc", reason: "Palm Jumeirah, JVC, Al Furjan and other Nakheel communities" },
      { slug: "emaar-noc", reason: "Dubai Hills, Arabian Ranches, Emirates Living and Emaar towers" },
      { slug: "dubai-municipality-approval", reason: "The statutory building permit for most mainland communities" },
      { slug: "trakhees-approval", reason: "Palm Jumeirah and PCFC-jurisdiction villas" },
      { slug: "dewa-approval-noc", reason: "Load increases for extensions, pools and outdoor kitchens" },
    ],
    documents: [
      "Title deed and owner identification",
      "Developer/community NOC application with drawings",
      "Architectural drawings: site plan with setbacks, floor plans, elevations",
      "Structural drawings and calculations for extensions, pools and openings",
      "MEP drawings for electrical, drainage and AC changes",
      "Contractor licence, registrations and insurances",
    ],
    watchouts: [
      "Plot-coverage and height limits decide extension feasibility — check before buying furniture for rooms that can't exist",
      "Pools need structural, drainage and fencing review; near boundary walls they get interesting",
      "Unapproved works surface at resale, every time — Dubai's conveyancing now checks",
      "Tenant-commissioned works need owner consent in writing at NOC stage, not verbally at inspection",
    ],
    steps: [
      { title: "Community & feasibility check", body: "Your community's modification guidelines, plot coverage and setback rules are checked against the concept before design spend." },
      { title: "Developer NOC", body: "The NOC package is prepared and cleared with the master developer — the gate that guards all the others." },
      { title: "Government permit", body: "DM or Trakhees permit follows on the same drawings, with structural calculations where scope demands." },
      { title: "Works & inspections", body: "Construction proceeds under community site rules with the staged inspections structural scopes attract." },
      { title: "Completion & title protection", body: "Completion certificates close with the authority and the developer — your asset stays clean for financing and resale." },
    ],
    timelineNote:
      "Modest internal renovations clear in 2–4 weeks of approvals; extensions and pools run 6–10 weeks through NOC and permit before construction. Peak renovation season (Q4) slows developer NOC desks — plan around it.",
    faqs: [
      {
        q: "Do I need a permit to renovate my villa's interior?",
        a: "Structural, electrical, plumbing or layout changes — yes, plus your community's NOC. Pure décor (paint, flooring without acoustic implications, furniture) generally doesn't, though gated communities often still want contractor registration for access. We confirm your exact scope's requirements in writing, free.",
      },
      {
        q: "How much does a villa extension permit cost?",
        a: "Developer NOC fees (AED 500–5,000+ by community), DM/Trakhees permit fees scaling with built-up area, and DEWA charges if loads increase — typically AED 4,000–12,000 in government/developer fees for a meaningful extension, before consultancy. Our proposal itemises it per your community.",
      },
      {
        q: "Can you legalise works a previous owner did without permits?",
        a: "Usually yes — regularisation involves as-built documentation, structural verification and retrospective submissions to the developer and authority. It's slower than doing it right originally, but it clears titles and unlocks stalled sales. A common and satisfying assignment.",
      },
    ],
    relatedProjects: ["office-fit-out-permit", "gym-fit-out-approval", "restaurant-fit-out-approval"],
  },
  {
    slug: "hotel-fit-out-approval",
    name: "Hotel & Hospitality Approvals",
    shortName: "Hotel",
    title: "Hotel Fit-Out Approval Dubai | Hospitality Renovation Permits",
    metaDescription:
      "Hotel fit-out and renovation approvals in Dubai: guestroom refurbishments, F&B outlets, spas and public areas — DTCM alignment, building permits and DCD managed by FitOutPermits.ae.",
    keywords: [
      "hotel fit out approval",
      "hotel renovation permit dubai",
      "hospitality fit out dubai",
      "hotel f&b outlet approval",
    ],
    heroImage: {
      folder: "projects",
      base: "hotel",
      alt: "Hotel lobby renovation in Dubai with hoarding separating works from operating guest areas",
    },
    intro: [
      "Hotel projects run approvals inside operating buildings with reputations to protect. Guestroom refurbishments, lobby transformations, new F&B outlets and spa builds each carry the standard permit stack — building authority, Civil Defence, often food safety and DEWA — executed under phasing, noise and life-safety constraints an operating hotel cannot compromise.",
      "We work with owners, operators and project managers on hospitality scopes across mainland and free-zone jurisdictions, keeping DTCM classification requirements aligned with the physical works. The craft is phased approvals: floors and outlets move through permits and inspections in waves that match the hotel's occupancy calendar.",
    ],
    authoritiesInvolved: [
      { slug: "dubai-municipality-approval", reason: "Building permits for mainland hotels + food-safety for F&B outlets" },
      { slug: "dubai-civil-defence-approval", reason: "Life safety in occupied high-rise hospitality — the non-negotiable track" },
      { slug: "trakhees-approval", reason: "Palm Jumeirah and PCFC-jurisdiction resorts" },
      { slug: "dewa-approval-noc", reason: "Kitchen, spa and chiller upgrades" },
      { slug: "rta-noc", reason: "Porte-cochère, valet and access works" },
    ],
    documents: [
      "Hotel licence and ownership/operator documentation",
      "Phasing plan mapping works zones against operating areas",
      "Architectural and MEP drawing sets per phase",
      "Fire & life-safety drawings with interim life-safety measures for occupied phases",
      "F&B outlet packages: kitchen, extract, suppression, food-flow",
      "Contractor registrations, insurances and hotel-compliant method statements",
    ],
    watchouts: [
      "Interim life-safety measures during phased works are reviewed as seriously as the end state",
      "Guestroom corridors are escape routes — hoarding designs are DCD business, not just aesthetics",
      "New F&B outlets inside hotels still need their full independent approval stack",
      "DTCM classification criteria can be affected by renovations — keep the classification file in view",
    ],
    steps: [
      { title: "Programme & phasing design", body: "Approval strategy is built around the occupancy calendar — which floors, when, and what interim measures keep the building compliant throughout." },
      { title: "Phase permits", body: "Each phase's permit and DCD package is submitted against the master baseline, so approvals arrive as the programme needs them." },
      { title: "Occupied-building works", body: "Works run under hotel-grade method statements: noise windows, service-lift logistics, life-safety continuity." },
      { title: "Rolling inspections", body: "Phases close through inspection as the next opens — the hotel never holds a floor hostage to paperwork." },
      { title: "Completion & classification", body: "Final certificates consolidate across phases; DTCM classification documentation is updated where the product changed." },
    ],
    timelineNote:
      "Guestroom-floor phases typically permit in 2–3 weeks each once the master baseline is approved. The programme win comes from pipelining: phase N builds while phase N+1 permits.",
    faqs: [
      {
        q: "Does a guestroom soft refurbishment need permits?",
        a: "FF&E-only refreshes generally don't; anything touching bathrooms, electrical, ceilings or corridor doors does — and in a high-rise hotel, DCD's interest arrives quickly. The phasing plan should classify rooms honestly; inspectors do.",
      },
      {
        q: "Can a hotel restaurant be renovated while the hotel operates?",
        a: "Yes — with hoarding, extract continuity for neighbouring kitchens, interim egress and noise management all engineered and approved. It's routine when planned, and a guest-complaint generator when not.",
      },
      {
        q: "Who approves hotels in Dubai — DTCM or the municipality?",
        a: "Both, differently: DTCM classifies and licenses the hotel product; the building authority (DM/Trakhees/free zone) permits the physical works; DCD owns life safety. Renovations touch all three files — we keep them consistent.",
      },
    ],
    relatedProjects: ["restaurant-fit-out-approval", "gym-fit-out-approval", "retail-shop-approval"],
  },
  {
    slug: "nursery-school-approval",
    name: "Nursery & School Approvals",
    shortName: "Nursery",
    title: "Nursery Approval Dubai | School & Early-Learning Fit-Out Permits",
    metaDescription:
      "Nursery and school fit-out approvals in Dubai: KHDA alignment, municipality requirements, Civil Defence child-safety review and outdoor-area rules. Managed end-to-end by FitOutPermits.ae.",
    keywords: [
      "nursery approval dubai",
      "nursery license dubai requirements",
      "school fit out dubai",
      "khda nursery requirements",
    ],
    heroImage: {
      folder: "projects",
      base: "nursery",
      alt: "Bright nursery classroom fit-out in Dubai with child-scale furniture and soft flooring installed",
    },
    intro: [
      "Educational premises carry Dubai's most protective approval regime. Nurseries and schools are reviewed for child-scaled life safety — evacuation, finishes, fixed furniture, outdoor shading, kitchen and food service, transport drop-off — across the building authority, Civil Defence, the municipality's health functions and the education regulator's (KHDA) premises requirements.",
      "We manage nursery and school fit-outs from premises selection: many buildings simply cannot host an early-learning facility at reasonable cost, and knowing that before lease saves operators their launch term. Where the premises work, we sequence education-regulator alignment with the physical approvals so the licence lands when the fit-out does.",
    ],
    authoritiesInvolved: [
      { slug: "dubai-municipality-approval", reason: "Building permit, health and food-service review for mainland premises" },
      { slug: "dubai-civil-defence-approval", reason: "Child-occupancy life safety — the defining review of the project" },
      { slug: "dewa-approval-noc", reason: "Kitchen, HVAC and outdoor-cooling loads" },
      { slug: "rta-noc", reason: "Drop-off, parking and pedestrian-safety arrangements" },
    ],
    documents: [
      "Trade licence path and KHDA initial-approval documentation",
      "Premises layout with classroom areas, child-capacity calculations and age zoning",
      "Evacuation strategy sized for assisted-evacuation of young children",
      "Outdoor play-area layout with shading and safety surfacing",
      "Kitchen/food-service package where meals are prepared",
      "Architectural, MEP and fire drawing sets; landlord NOC",
    ],
    watchouts: [
      "Ground-floor egress expectations make tower floors mostly unviable for nurseries — premises selection is the project",
      "Outdoor play space minimums (shaded, per child) filter out many otherwise attractive villas",
      "Finishes, guarding heights, door hardware and fixed furniture are reviewed at child scale",
      "Transport and drop-off arrangements bring RTA review in urban locations",
    ],
    steps: [
      { title: "Premises feasibility", body: "Candidate buildings are screened against child-occupancy life safety, outdoor-space and zoning rules before lease negotiations get serious." },
      { title: "Regulator alignment", body: "KHDA premises expectations are built into the layout alongside municipality and DCD requirements from day one." },
      { title: "Permit & DCD submissions", body: "Building permit and child-occupancy fire review proceed on the aligned layout." },
      { title: "Works & child-scale verification", body: "Construction is held to the safety details — guarding, finishes, hardware — that inspections will measure." },
      { title: "Inspections & licence", body: "Authority, DCD and health inspections close in sequence, feeding the education licence that lets you enrol." },
    ],
    timelineNote:
      "Nursery projects typically run 12–20 weeks from premises confirmation to licence, dominated by premises feasibility and child-safety review. Operators targeting a September opening should have premises confirmed by spring.",
    faqs: [
      {
        q: "Can any villa become a nursery in Dubai?",
        a: "No — zoning, plot access, outdoor space, parking and evacuation capability filter hard. Some communities zone specific villas for nurseries; most don't. Premises screening is the first thing we do, and it regularly redirects operators before an unworkable lease is signed.",
      },
      {
        q: "What does Civil Defence require for nurseries?",
        a: "Child-occupancy egress (assisted evacuation assumptions, travel distances, refuge strategy), age-appropriate detection and alarm audibility, finishes and compartmentation suited to sleeping infants where applicable. It is the strictest DCD review most consultants ever see — rightly.",
      },
      {
        q: "Do school renovations during term time get approved?",
        a: "Yes, with phasing that isolates works from occupied areas and preserves egress — similar logic to hotels, applied more conservatively. Summer works windows remain the schedule anchor for major scopes.",
      },
    ],
    relatedProjects: ["clinic-fit-out-approval", "villa-renovation-permit", "office-fit-out-permit"],
  },
];

export function projectTypeBySlug(slug: string) {
  return PROJECT_TYPES.find((p) => p.slug === slug);
}
