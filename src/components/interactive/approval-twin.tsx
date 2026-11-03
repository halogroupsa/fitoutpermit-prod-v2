"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Flame,
  Layers3,
  Ruler,
  ShieldCheck,
  Wind,
  Zap,
} from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import styles from "./approval-twin.module.css";

type TwinView = "drawing" | "completion";
type LayerKey = "architecture" | "electrical" | "hvac" | "fire";

const DRAWING_LAYERS = [
  {
    key: "architecture" as const,
    ref: "A-101",
    label: "Architecture",
    icon: Ruler,
    title: "The spatial baseline",
    body: "Existing, demolition and proposed conditions are drawn as separate sequences—the first thing every Dubai authority checks—so the reviewer sees exactly what changes.",
    checks: ["Existing / demolition / proposed sequence", "Partitions, doors and room uses", "Dimensions, levels and authority title block"],
  },
  {
    key: "electrical" as const,
    ref: "E-201",
    label: "Electrical",
    icon: Zap,
    title: "The honest load picture",
    body: "Power, lighting and equipment loads are coordinated against the proposed layout, with schedules DEWA and the reviewing authority can actually verify.",
    checks: ["Connected-load and DB schedules", "Single-line diagram and isolators", "Emergency and exit-lighting circuits"],
  },
  {
    key: "hvac" as const,
    ref: "M-301",
    label: "HVAC",
    icon: Wind,
    title: "Air, heat and ceiling coordination",
    body: "Supply, return and extract routes are coordinated with ceilings, partitions and life-safety devices—including fire dampers wherever ducts cross compartment lines.",
    checks: ["Airflow and equipment schedules", "Duct routes and fire dampers", "Fresh-air and extract strategy"],
  },
  {
    key: "fire" as const,
    ref: "FLS-401",
    label: "Fire & life safety",
    icon: Flame,
    title: "The safe route through the plan",
    body: "Egress, detection and suppression are drawn to the UAE Fire & Life Safety Code as one coordinated story, ready for Dubai Civil Defence review.",
    checks: ["Occupant load and travel distances", "Detector and sprinkler coverage", "Emergency lighting and exit signage"],
  },
];

const COMPLETION_STAGES = [
  {
    ref: "C-01",
    label: "Approved baseline",
    title: "Start with what was approved",
    body: "The stamped drawing set and permit trail establish the version the site is inspected against—completion is a match check, not a fresh design review.",
    checks: ["Stamped approved drawing set", "Valid fit-out permit", "Recorded revision history"],
    position: { left: "20%", top: "30%" },
  },
  {
    ref: "C-02",
    label: "Site alignment",
    title: "Match the site to the file",
    body: "A pre-walk against the approved drawings finds undocumented changes before the official inspection does, while they are still manageable.",
    checks: ["Partitions and door positions", "MEP device locations", "Deviation and snag list"],
    position: { left: "49%", top: "55%" },
  },
  {
    ref: "C-03",
    label: "Safety clearances",
    title: "Close every life-safety condition",
    body: "Dubai Civil Defence clears the life-safety systems first: final inspection, test certificates and every observation closed—before the authority's own visit.",
    checks: ["Civil Defence final inspection", "Fire-system test certificates", "Observation closure"],
    position: { left: "72%", top: "28%" },
  },
  {
    ref: "C-04",
    label: "Handover file",
    title: "Issue a file that survives handover",
    body: "The completion certificate makes the unit legal to occupy—and it sits with as-builts, clearances and test records, not as a loose PDF nobody can find later.",
    checks: ["Building completion certificate", "As-built drawings and test records", "Landlord and insurer documentation"],
    position: { left: "77%", top: "72%" },
  },
];

function FloorPlan({ activeLayer }: { activeLayer: LayerKey }) {
  return (
    <svg className={styles.plan} viewBox="0 0 820 540" role="img" aria-labelledby="plan-title" aria-describedby="plan-desc">
      <title id="plan-title">Interactive coordinated fit-out drawing</title>
      <desc id="plan-desc">A sample office plan showing architectural, electrical, HVAC, and fire and life-safety layers.</desc>
      <defs>
        <pattern id="approval-twin-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" className={styles.gridLine} />
        </pattern>
        <marker id="approval-twin-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className={styles.arrowHead} />
        </marker>
      </defs>

      <rect width="820" height="540" className={styles.planPaper} />
      <rect width="820" height="540" fill="url(#approval-twin-grid)" />

      <g className={styles.titleBlock}>
        <path d="M25 455H795V515H25Z M580 455V515 M690 455V515 M25 485H795" />
        <text x="38" y="478">FITOUTPERMITS.AE / COORDINATION STUDY</text>
        <text x="38" y="504">SAMPLE OFFICE FIT-OUT · NOT FOR CONSTRUCTION</text>
        <text x="594" y="478">SCALE</text><text x="594" y="504">1:100</text>
        <text x="704" y="478">SHEET</text><text x="704" y="504">{DRAWING_LAYERS.find((layer) => layer.key === activeLayer)?.ref}</text>
      </g>

      <g className={styles.architecture} data-active={activeLayer === "architecture"}>
        <path d="M70 62H735V414H70V385 M70 330V62 M70 250H182 M260 250H405 M475 250H735 M405 62V165 M405 225V414 M575 62V145 M575 205V250 M182 250V335 M182 390V414 M575 310V414" />
        <path d="M90 385V394H715V82H90V330" className={styles.wallInner} />
        <path d="M182 244V256 M260 244V256 M405 244V256 M475 244V256 M399 165H411 M399 225H411 M569 145H581 M569 205H581 M176 335H188 M176 390H188 M569 250H581 M569 310H581 M64 330H76 M64 385H76" />
        <path d="M182 250a78 78 0 0 0 78 78 M405 250a70 70 0 0 0 70 70 M405 165a60 60 0 0 1 60 60 M575 145a60 60 0 0 1 60 60 M182 335a55 55 0 0 1 55 55 M575 250a60 60 0 0 1 60 60 M70 330a55 55 0 0 0-55 55" className={styles.doorSwing} />
        <text x="205" y="155">OPEN OFFICE</text>
        <text x="456" y="125">MEETING 01</text>
        <text x="610" y="125">MEETING 02</text>
        <text x="235" y="340">RECEPTION</text>
        <text x="455" y="340">PANTRY</text>
        <text x="605" y="340">SERVICES</text>
        <text x="100" y="288">ENTRY</text>
        <path d="M70 42H735 M70 36V48 M735 36V48" className={styles.dimension} />
        <text x="377" y="34">13 850</text>
      </g>

      <g className={styles.electrical} data-active={activeLayer === "electrical"}>
        <path d="M120 115H350V205H120Z M445 100H535V190H445Z M615 100H690V190H615Z M230 285H345V365H230Z M450 285H535V365H450Z" />
        {[[150, 158], [245, 158], [340, 158], [490, 145], [652, 145], [288, 325], [475, 325], [650, 325]].map(([x, y], index) => <circle key={index} cx={x} cy={y} r="9" />)}
        <path d="M104 100V218 M104 100H350 M104 218H350 M430 82H705V214 M430 214H705 M214 270V380H550 M550 270V380" className={styles.circuit} />
        <text x="89" y="93">DB-1</text>
      </g>

      <g className={styles.hvac} data-active={activeLayer === "hvac"}>
        <path d="M105 96H365V136H520V94H700 M365 136V232H670 M365 136V335H540 M540 335H690" />
        <path d="M165 95V136 M275 95V136 M474 116V156 M590 211V251 M460 315V355 M640 315V355" className={styles.grille} />
        <path d="M105 96h70 M105 106h70 M520 94h70 M520 104h70" className={styles.airMark} />
        <text x="110" y="82">SA</text><text x="525" y="80">RA</text>
      </g>

      <g className={styles.fire} data-active={activeLayer === "fire"}>
        <path d="M665 386V280H440V195H220V358H100" markerEnd="url(#approval-twin-arrow)" />
        {[{x:145,y:120},{x:290,y:120},{x:475,y:120},{x:650,y:120},{x:285,y:330},{x:485,y:330},{x:650,y:330},{x:148,y:310}].map((p, index) => (
          <g key={index}><circle cx={p.x} cy={p.y} r="11" /><path d={`M${p.x - 7} ${p.y}h14M${p.x} ${p.y - 7}v14`} /></g>
        ))}
        <path d="M122 312l-27 16 27 16z" className={styles.exitSign} />
        <text x="70" y="440">EXIT · TRAVEL DISTANCE 19.1 M</text>
      </g>

      <g className={styles.planNotes}>
        <path d="M590 430H795" /><text x="600" y="446">LAYER COORDINATION / REV 03</text>
      </g>
    </svg>
  );
}

export function ApprovalTwin({ initialView = "drawing", no = "01" }: { initialView?: TwinView; no?: string }) {
  const [view, setView] = useState<TwinView>(initialView);
  const [activeLayer, setActiveLayer] = useState<LayerKey>("architecture");
  const [activeStage, setActiveStage] = useState(0);

  const layer = DRAWING_LAYERS.find((item) => item.key === activeLayer) ?? DRAWING_LAYERS[0];
  const stage = COMPLETION_STAGES[activeStage];

  return (
    <section className="section-sm" aria-labelledby="approval-twin-title">
      <div className={styles.heading}>
        <span className="ref-no">{no}</span>
        <div>
          <span className={styles.eyebrow}>Interactive · The approval twin</span>
          <h2 id="approval-twin-title" className="font-display text-xl">One space. Two proofs.</h2>
        </div>
        <p>Explore how a coordinated drawing package becomes the evidence trail for a clean completion certificate.</p>
      </div>

      <div className={styles.shell}>
        <div className={styles.viewTabs} role="group" aria-label="Approval twin view">
          <button
            type="button"
            aria-pressed={view === "drawing"}
            aria-controls="approval-twin-panel"
            className={styles.viewTab}
            data-active={view === "drawing"}
            onClick={() => setView("drawing")}
          >
            <span>01</span>
            <span><strong>Prepare</strong> the permit set</span>
            <Layers3 aria-hidden size={19} />
          </button>
          <button
            type="button"
            aria-pressed={view === "completion"}
            aria-controls="approval-twin-panel"
            className={styles.viewTab}
            data-active={view === "completion"}
            onClick={() => setView("completion")}
          >
            <span>02</span>
            <span><strong>Prove</strong> the built result</span>
            <ClipboardCheck aria-hidden size={19} />
          </button>
        </div>

        <div id="approval-twin-panel" className={styles.panel}>
          <div className={styles.viewport}>
            {view === "drawing" ? (
              <>
                <div className={styles.planMeta}>
                  <span>COORDINATION MODEL</span>
                  <span>REV 03 / PERMIT ISSUE</span>
                </div>
                <FloorPlan activeLayer={activeLayer} />
                <div className={styles.layerTabs} role="group" aria-label="Drawing discipline">
                  {DRAWING_LAYERS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        aria-pressed={activeLayer === item.key}
                        data-active={activeLayer === item.key}
                        onClick={() => setActiveLayer(item.key)}
                      >
                        <Icon aria-hidden size={16} />
                        <span>{item.label}</span>
                        <small>{item.ref}</small>
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className={styles.siteView}>
                <SmartImage
                  folder="services"
                  base="completion"
                  alt="Inspector walking through a completed office fit-out"
                  sizes="(min-width: 1024px) 850px, 100vw"
                />
                <div className={styles.siteShade} />
                <div className={styles.siteHeader}>
                  <span>SITE / FILE ALIGNMENT</span>
                  <span>COMPLETION WALKTHROUGH</span>
                </div>
                {COMPLETION_STAGES.map((item, index) => (
                  <button
                    key={item.ref}
                    type="button"
                    className={styles.marker}
                    data-active={activeStage === index}
                    style={item.position}
                    aria-label={`${index + 1}. ${item.label}`}
                    aria-pressed={activeStage === index}
                    onClick={() => setActiveStage(index)}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </button>
                ))}
                <div className={styles.photoCaption}>Select a numbered inspection point</div>
              </div>
            )}
          </div>

          <aside className={styles.detail} aria-live="polite">
            <div className={styles.detailTopline}>
              <span>{view === "drawing" ? layer.ref : stage.ref}</span>
              <span>{view === "drawing" ? "Reviewer view" : `Walkthrough ${activeStage + 1} / ${COMPLETION_STAGES.length}`}</span>
            </div>
            <div className={styles.detailIcon}>
              {view === "drawing" ? <layer.icon aria-hidden size={23} /> : activeStage === COMPLETION_STAGES.length - 1 ? <ShieldCheck aria-hidden size={23} /> : <ClipboardCheck aria-hidden size={23} />}
            </div>
            <h3>{view === "drawing" ? layer.title : stage.title}</h3>
            <p>{view === "drawing" ? layer.body : stage.body}</p>
            <div className={styles.checkLabel}>{view === "drawing" ? "What this sheet resolves" : "Typical evidence"}</div>
            <ul>
              {(view === "drawing" ? layer.checks : stage.checks).map((item) => (
                <li key={item}><Check aria-hidden size={15} />{item}</li>
              ))}
            </ul>
            {view === "completion" ? (
              <div className={styles.progress} aria-label={`Walkthrough progress: ${activeStage + 1} of ${COMPLETION_STAGES.length}`}>
                <div><span>File progression</span><strong>{String(activeStage + 1).padStart(2, "0")} / {String(COMPLETION_STAGES.length).padStart(2, "0")}</strong></div>
                <span><i style={{ transform: `scaleX(${(activeStage + 1) / COMPLETION_STAGES.length})` }} /></span>
              </div>
            ) : null}
            <button
              type="button"
              className={styles.nextAction}
              onClick={() => {
                if (view === "drawing") {
                  const next = (DRAWING_LAYERS.findIndex((item) => item.key === activeLayer) + 1) % DRAWING_LAYERS.length;
                  setActiveLayer(DRAWING_LAYERS[next].key);
                } else {
                  setActiveStage((activeStage + 1) % COMPLETION_STAGES.length);
                }
              }}
            >
              Next {view === "drawing" ? "discipline" : "inspection point"}
              <ArrowRight aria-hidden size={16} />
            </button>
          </aside>
        </div>

        <div className={styles.footnote}>
          <span>Why it matters</span>
          <p>A completion inspection is not a fresh design review. It proves the built space matches the approved baseline, with the required clearances and records ready.</p>
          <small>Illustrative workflow · exact requirements vary by authority, building and scope.</small>
        </div>
      </div>
    </section>
  );
}
