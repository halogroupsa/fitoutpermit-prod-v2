/**
 * Primary navigation model — drives the desktop mega-menus and the mobile drawer
 * from one source. Server-safe: pure data, no client imports, so the link markup
 * is rendered into the initial HTML and stays fully crawlable.
 *
 * Voice note: every description is a hand-written one-liner in the dossier tone —
 * a filing annotation, not filler. Thumbnails reference the existing optimized
 * webp sets under public/img (see src/data/images.json).
 */

export type MegaItem = {
  label: string;
  href: string;
  /** one-line filing annotation shown under the label and in the preview */
  desc: string;
  /** optimized image set: public/img/<folder>/<base>-<size>.webp */
  img: { folder: string; base: string };
};

export type MegaColumn = {
  heading: string;
  items: MegaItem[];
};

export type MegaMenu = {
  id: string;
  label: string;
  /** the section hub page — the crawl target and "view all" link */
  href: string;
  hubLabel: string;
  /** mono strip shown top-right of the panel */
  eyebrow: string;
  /** controls panel width; wide = two columns + preview, narrow = one column + preview */
  width: "wide" | "narrow";
  columns: MegaColumn[];
  /** optional helper link pinned to the panel footer */
  footer?: { label: string; href: string };
};

export type SimpleLink = { label: string; href: string };

/** Section base used for the "you are here" state, e.g. "/tools/x" -> "/tools". */
export function sectionBase(href: string) {
  return "/" + (href.split("/")[1] ?? "");
}

/** The home link, pinned first in both navigations. */
export const HOME_LINK: SimpleLink = { label: "Home", href: "/" };

/** The dropdown-bearing sections, in header order. */
export const MEGA_NAV: MegaMenu[] = [
  {
    id: "authorities",
    label: "Authorities",
    href: "/approvals",
    hubLabel: "View all 20+ authorities",
    eyebrow: "20+ Dubai authorities",
    width: "wide",
    footer: {
      label: "Not sure which authority governs your unit? Use the Approval Finder",
      href: "/tools/approval-finder",
    },
    columns: [
      {
        heading: "Government",
        items: [
          {
            label: "Dubai Municipality",
            href: "/approvals/dubai-municipality-approval",
            desc: "Mainland onshore fit-out permits via Dubai BPS.",
            img: { folder: "authorities", base: "dubai-municipality" },
          },
          {
            label: "Dubai Civil Defence",
            href: "/approvals/dubai-civil-defence-approval",
            desc: "Fire & life-safety NOC on virtually every fit-out.",
            img: { folder: "authorities", base: "civil-defence" },
          },
          {
            label: "Dubai Development Authority",
            href: "/approvals/dda-approval",
            desc: "TECOM free zones — Internet City, Media City, d3.",
            img: { folder: "authorities", base: "dda" },
          },
          {
            label: "Trakhees",
            href: "/approvals/trakhees-approval",
            desc: "Palm Jumeirah & PCFC building control.",
            img: { folder: "authorities", base: "trakhees" },
          },
        ],
      },
      {
        heading: "Free zones & communities",
        items: [
          {
            label: "DMCC / Concordia",
            href: "/approvals/dmcc-approval",
            desc: "JLT towers — fit-out approvals via Concordia.",
            img: { folder: "authorities", base: "dmcc" },
          },
          {
            label: "DIFC",
            href: "/approvals/difc-fit-out-approval",
            desc: "The centre's own building-control regime.",
            img: { folder: "authorities", base: "difc" },
          },
          {
            label: "JAFZA",
            href: "/approvals/jafza-approval",
            desc: "Jebel Ali free-zone unit modifications.",
            img: { folder: "authorities", base: "jafza" },
          },
          {
            label: "DEWA",
            href: "/approvals/dewa-approval-noc",
            desc: "Power, water & connection NOCs.",
            img: { folder: "authorities", base: "dewa" },
          },
        ],
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    hubLabel: "View all services",
    eyebrow: "End-to-end approvals",
    width: "wide",
    columns: [
      {
        heading: "Core approvals",
        items: [
          {
            label: "Fit-Out Permit Management",
            href: "/services/fit-out-permit-management",
            desc: "End to end — one manager, one tracker.",
            img: { folder: "services", base: "permit-management" },
          },
          {
            label: "Drawing Preparation & Engineering",
            href: "/services/drawing-preparation",
            desc: "Permit-grade architectural & MEP drawings.",
            img: { folder: "services", base: "drawings" },
          },
          {
            label: "Fire & Life-Safety Approvals",
            href: "/services/fire-life-safety",
            desc: "DCD-compliant fire strategy & NOCs.",
            img: { folder: "services", base: "fire-safety" },
          },
          {
            label: "NOC Coordination",
            href: "/services/authority-noc-coordination",
            desc: "Landlord & authority no-objection chains.",
            img: { folder: "services", base: "noc" },
          },
        ],
      },
      {
        heading: "Specialist & handover",
        items: [
          {
            label: "Completion Certificates",
            href: "/services/completion-certificates",
            desc: "Final inspection to legal occupancy.",
            img: { folder: "services", base: "completion" },
          },
          {
            label: "Approval Rescue & Regularisation",
            href: "/services/regularisation-approval-rescue",
            desc: "Unpermitted or stalled work, put right.",
            img: { folder: "services", base: "rescue" },
          },
          {
            label: "Signage Permits",
            href: "/services/signage-permits",
            desc: "Shopfront & external signage approvals.",
            img: { folder: "services", base: "signage" },
          },
          {
            label: "White-Label Approvals",
            href: "/services/white-label-approvals",
            desc: "An approvals desk for contractors & designers.",
            img: { folder: "services", base: "white-label" },
          },
        ],
      },
    ],
  },
  {
    id: "projects",
    label: "Project Types",
    href: "/permits",
    hubLabel: "View all project types",
    eyebrow: "By what you're building",
    width: "wide",
    columns: [
      {
        heading: "Commercial & retail",
        items: [
          {
            label: "Office Fit-Out Permits",
            href: "/permits/office-fit-out-permit",
            desc: "Workspaces across every jurisdiction.",
            img: { folder: "projects", base: "office" },
          },
          {
            label: "Restaurant Fit-Out Approvals",
            href: "/permits/restaurant-fit-out-approval",
            desc: "Kitchens, food safety & Civil Defence.",
            img: { folder: "projects", base: "restaurant" },
          },
          {
            label: "Café & Cafeteria Approvals",
            href: "/permits/cafe-fit-out-approval",
            desc: "Cafés and cafeterias, start to open.",
            img: { folder: "projects", base: "cafe" },
          },
          {
            label: "Retail Shop Approvals",
            href: "/permits/retail-shop-approval",
            desc: "Mall units and high-street shops.",
            img: { folder: "projects", base: "retail" },
          },
        ],
      },
      {
        heading: "Health, wellness & industrial",
        items: [
          {
            label: "Clinic Fit-Out Approvals",
            href: "/permits/clinic-fit-out-approval",
            desc: "DHA / DHCC medical fit-outs.",
            img: { folder: "projects", base: "clinic" },
          },
          {
            label: "Salon & Spa Approvals",
            href: "/permits/salon-fit-out-approval",
            desc: "Salons, spas & wellness spaces.",
            img: { folder: "projects", base: "salon" },
          },
          {
            label: "Gym & Fitness Approvals",
            href: "/permits/gym-fit-out-approval",
            desc: "Studios and fitness floors.",
            img: { folder: "projects", base: "gym" },
          },
          {
            label: "Warehouse Modifications",
            href: "/permits/warehouse-modification-permit",
            desc: "Racking, mezzanines & industrial units.",
            img: { folder: "projects", base: "warehouse" },
          },
        ],
      },
    ],
  },
  {
    id: "guides",
    label: "Guides",
    href: "/resources",
    hubLabel: "View all guides",
    eyebrow: "Plain-English references",
    width: "wide",
    columns: [
      {
        heading: "Start here",
        items: [
          {
            label: "The Complete Permit Process",
            href: "/resources/fit-out-permit-process-dubai",
            desc: "Every step of a Dubai fit-out, in order.",
            img: { folder: "process", base: "drawings-desk" },
          },
          {
            label: "Fit-Out Permit Costs",
            href: "/resources/fit-out-permit-cost-dubai",
            desc: "Government fees & what really drives cost.",
            img: { folder: "hero", base: "hero-handover" },
          },
          {
            label: "Documents Checklist",
            href: "/resources/fit-out-permit-documents-checklist",
            desc: "Everything a clean submission needs.",
            img: { folder: "process", base: "site-survey" },
          },
        ],
      },
      {
        heading: "Choose & avoid delays",
        items: [
          {
            label: "DM vs DDA vs Trakhees",
            href: "/resources/dm-vs-dda-vs-trakhees",
            desc: "Which authority governs your unit.",
            img: { folder: "hero", base: "hero-skyline" },
          },
          {
            label: "Permit Timelines",
            href: "/resources/fit-out-permit-timeline-dubai",
            desc: "How long each stage actually takes.",
            img: { folder: "process", base: "inspection" },
          },
          {
            label: "Why Permits Get Rejected",
            href: "/resources/common-rejection-reasons",
            desc: "The avoidable mistakes, and the fix.",
            img: { folder: "hero", base: "hero-drawings" },
          },
        ],
      },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    href: "/tools/approval-finder",
    hubLabel: "Open the Approval Finder",
    eyebrow: "Free · no sign-up",
    width: "narrow",
    columns: [
      {
        heading: "Free tools",
        items: [
          {
            label: "Approval Finder",
            href: "/tools/approval-finder",
            desc: "Answer a few questions, get your authority map.",
            img: { folder: "process", base: "site-survey" },
          },
          {
            label: "Cost Calculator",
            href: "/tools/cost-calculator",
            desc: "Estimate government fees and timeline.",
            img: { folder: "hero", base: "hero-handover" },
          },
        ],
      },
    ],
  },
];

/** Plain top-level links with no dropdown, in header order (after the mega items). */
export const SIMPLE_NAV: SimpleLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
