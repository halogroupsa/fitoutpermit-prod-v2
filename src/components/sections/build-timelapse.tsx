"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

/* Phase start times must track the beats of the source film
   (public/videos/approved_construction.mp4, 15 s). */
const PHASES = [
  {
    at: 0,
    no: "P-1",
    label: "Approval issued",
    body: "The stamped drawing that lets a site start — placed on the plot in Al Furjan.",
  },
  {
    at: 3,
    no: "P-2",
    label: "Structure rises",
    body: "Foundation poured, columns and slabs climb — on the approved footprint, nothing else.",
  },
  {
    at: 8.2,
    no: "P-3",
    label: "Facade & finishes",
    body: "Glass and cladding installed floor by floor, exactly to the drawings on file.",
  },
  {
    at: 12.4,
    no: "P-4",
    label: "Completion certified",
    body: "Scaffold down, lights on — the file closes with a completion certificate.",
  },
] as const;

export function BuildTimelapse() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress(video.currentTime / video.duration);
    let current = 0;
    for (let i = 0; i < PHASES.length; i++) {
      if (video.currentTime >= PHASES[i].at) current = i;
    }
    setActive(current);
  };

  const seekTo = (at: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = at;
    video.play().catch(() => {});
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <section
      ref={sectionRef}
      className="build-timelapse border-t border-rule"
      aria-label="From approved drawing to finished building"
    >
      <div className="container-page section grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-x-16">
        <SectionHeading
          onDark
          eyebrow="Approval, made visible / Al Furjan"
          title="One stamp. Then the site moves."
          lead="Every building in Dubai starts as a stamped drawing. The approval is the moment a plan on the sand becomes a structure on the skyline — and that moment is the part we own."
        />

        <div className="build-frame reveal lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="build-frame-head" aria-hidden>
            <span>Sheet A-01 — Al Furjan, Dubai</span>
            <span>Time-lapse · 15 s</span>
          </div>
          <div className="build-frame-stage">
            <video
              ref={videoRef}
              className="build-video"
              src="/videos/approved_construction.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              aria-label="Time-lapse: an approved architectural plan on an empty Al Furjan plot becomes a finished five-storey building"
            />
            <button
              type="button"
              className="build-play"
              onClick={togglePlay}
              aria-label={playing ? "Pause time-lapse" : "Play time-lapse"}
            >
              {playing ? (
                <Pause size={14} strokeWidth={2.4} aria-hidden />
              ) : (
                <Play size={14} strokeWidth={2.4} aria-hidden />
              )}
            </button>
          </div>
          <div className="build-frame-foot">
            <span className="build-frame-stamp" aria-hidden>
              Approved
            </span>
            <span className="build-progress" aria-hidden>
              <span style={{ transform: `scaleX(${progress})` }} />
            </span>
            <span className="build-frame-phase" aria-live="off">
              {PHASES[active].label}
            </span>
          </div>
        </div>

        <ol className="build-phases lg:col-start-1 lg:row-start-2" aria-label="The journey from approval to handover">
          {PHASES.map((phase, i) => (
            <li key={phase.no}>
              <button
                type="button"
                onClick={() => seekTo(phase.at)}
                className={cn("build-phase", i === active && "is-active")}
                aria-current={i === active ? "step" : undefined}
              >
                <span className="build-phase-no">{phase.no}</span>
                <span>
                  <strong>{phase.label}</strong>
                  <span>{phase.body}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
