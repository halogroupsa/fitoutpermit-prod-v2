"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { SmartImage } from "@/components/ui/smart-image";
import { MEGA_NAV, SIMPLE_NAV, HOME_LINK, sectionBase, type MegaMenu } from "@/lib/nav";

/**
 * Desktop primary navigation — a set of dossier-style disclosure menus.
 * Every link and its label is rendered into the DOM up-front (crawlable, SEO-safe);
 * the panels are only hidden with visibility, and preview thumbnails mount lazily
 * on first open. Hover-intent, keyboard focus and click all open the same panel.
 */
export function DesktopNav() {
  const pathname = usePathname();
  const [openId, setOpenId] = useState<string | null>(null);
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState<Set<string>>(new Set());
  /** Per-menu left offset (px), so each panel drops under its own trigger. */
  const [lefts, setLefts] = useState<Record<string, number>>({});

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const panelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const layerRef = useRef<HTMLDivElement>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenId(null), 170);
  }, [cancelClose]);

  /** Align a panel's left edge under its trigger, clamped inside the header row. */
  const positionPanel = useCallback((id: string) => {
    const layer = layerRef.current;
    const trig = triggerRefs.current[id];
    const panel = panelRefs.current[id];
    if (!layer || !trig || !panel) return;
    const layerRect = layer.getBoundingClientRect();
    const trigRect = trig.getBoundingClientRect();
    const gutter = parseFloat(getComputedStyle(layer).paddingLeft) || 24;
    const panelW = panel.offsetWidth;
    const maxLeft = layerRect.width - gutter - panelW;
    const left = Math.max(gutter, Math.min(trigRect.left - layerRect.left, maxLeft));
    setLefts((prev) => (prev[id] === left ? prev : { ...prev, [id]: left }));
  }, []);

  const open = useCallback(
    (id: string) => {
      cancelClose();
      // Preselect the row for the page you're currently on, else the first row.
      const items = MEGA_NAV.find((m) => m.id === id)?.columns.flatMap((c) => c.items) ?? [];
      const currentIdx = items.findIndex((it) => it.href === pathname);
      setActive(currentIdx >= 0 ? currentIdx : 0);
      setMounted((prev) => (prev.has(id) ? prev : new Set(prev).add(id)));
      setOpenId(id);
      positionPanel(id);
    },
    [cancelClose, positionPanel, pathname],
  );

  const close = useCallback(
    (refocus?: string) => {
      cancelClose();
      setOpenId(null);
      if (refocus) triggerRefs.current[refocus]?.focus();
    },
    [cancelClose],
  );

  // Close on navigation.
  useEffect(() => {
    setOpenId(null);
  }, [pathname]);

  // Escape closes and returns focus to the active trigger.
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(openId);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openId, close]);

  // Keep the open panel anchored to its trigger across viewport resizes.
  useEffect(() => {
    if (!openId) return;
    const onResize = () => positionPanel(openId);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [openId, positionPanel]);

  const openMenu = MEGA_NAV.find((m) => m.id === openId) ?? null;

  return (
    // Static wrapper (not a positioning context) so panels resolve to the header
    // row; being a shared DOM ancestor lets pointer-leave ignore trigger→panel moves.
    <div
      className="hidden items-center gap-0.5 xl:flex xl:gap-1"
      onPointerLeave={scheduleClose}
      onPointerEnter={cancelClose}
    >
      <nav className="flex items-center" aria-label="Primary">
        <Link
          href={HOME_LINK.href}
          onPointerEnter={scheduleClose}
          aria-current={pathname === HOME_LINK.href ? "page" : undefined}
          className={cn(
            "relative inline-flex items-center px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-fast",
            "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-rule-strong after:transition-transform after:duration-base after:ease-out-soft",
            pathname === HOME_LINK.href ? "text-accent-deep after:scale-x-100" : "text-ink hover:text-accent-deep",
          )}
        >
          {HOME_LINK.label}
        </Link>

        {MEGA_NAV.map((menu) => {
          const isOpen = openId === menu.id;
          const isHere = pathname.startsWith(sectionBase(menu.href));
          return (
            <button
              key={menu.id}
              type="button"
              ref={(el) => {
                triggerRefs.current[menu.id] = el;
              }}
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls={`megapanel-${menu.id}`}
              onPointerEnter={() => open(menu.id)}
              onClick={() => (isOpen ? close() : open(menu.id))}
              onFocus={() => open(menu.id)}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  open(menu.id);
                  requestAnimationFrame(() =>
                    panelRefs.current[menu.id]?.querySelector<HTMLAnchorElement>("a[data-row]")?.focus(),
                  );
                }
              }}
              className={cn(
                "relative inline-flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-fast",
                "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-base after:ease-out-soft",
                isOpen ? "text-accent-deep after:scale-x-100" : "text-ink hover:text-accent-deep",
                isHere && !isOpen && "text-accent-deep after:scale-x-100 after:bg-rule-strong",
              )}
            >
              {menu.label}
              <ChevronDown
                size={14}
                aria-hidden
                className={cn("mt-px transition-transform duration-base ease-out-soft", isOpen && "-rotate-180")}
              />
            </button>
          );
        })}

        {SIMPLE_NAV.map((item) => {
          const isHere = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onPointerEnter={scheduleClose}
              className={cn(
                "relative inline-flex items-center px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-fast",
                "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-rule-strong after:transition-transform after:duration-base after:ease-out-soft",
                isHere ? "text-accent-deep after:scale-x-100" : "text-ink hover:text-accent-deep",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Click-catcher scrim — a full-viewport-width dim anchored to the header
          bottom, so it focuses the panel without touching the bar itself. */}
      <div
        aria-hidden
        onClick={() => close()}
        onPointerEnter={scheduleClose}
        className={cn(
          "absolute left-1/2 top-full z-30 h-screen w-screen -translate-x-1/2 bg-carbon/20 transition-opacity duration-base",
          openMenu ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Panel layer — full-bleed under the header; each panel is x-positioned
          under its own trigger via the measured `left`. */}
      <div
        ref={layerRef}
        className="absolute left-0 right-0 top-full z-40 pt-2"
        style={{ paddingLeft: "var(--space-gutter)", paddingRight: "var(--space-gutter)" }}
      >
        {MEGA_NAV.map((menu) => (
          <Panel
            key={menu.id}
            menu={menu}
            isOpen={openId === menu.id}
            mounted={mounted.has(menu.id)}
            active={active}
            currentPath={pathname}
            left={lefts[menu.id]}
            setActive={setActive}
            onClose={close}
            panelRef={(el) => {
              panelRefs.current[menu.id] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Panel({
  menu,
  isOpen,
  mounted,
  active,
  currentPath,
  left,
  setActive,
  onClose,
  panelRef,
}: {
  menu: MegaMenu;
  isOpen: boolean;
  mounted: boolean;
  active: number;
  currentPath: string;
  left?: number;
  setActive: (i: number) => void;
  onClose: () => void;
  panelRef: (el: HTMLDivElement | null) => void;
}) {
  const items = menu.columns.flatMap((c) => c.items);
  const activeItem = items[active] ?? items[0];
  let cursor = -1; // running index across columns for ref numbers + preview mapping

  return (
    <div
      id={`megapanel-${menu.id}`}
      ref={panelRef}
      role="group"
      aria-label={menu.label}
      style={{ left: left != null ? `${left}px` : undefined }}
      className={cn(
        "border-t-2 border-accent bg-paper shadow-[0_28px_60px_-32px_rgba(22,19,14,0.55)]",
        "transition-[opacity,transform] duration-base ease-out-soft",
        menu.width === "wide"
          ? "w-[min(62rem,calc(100vw-2*var(--space-gutter)))]"
          : "w-[min(34rem,calc(100vw-2*var(--space-gutter)))]",
        isOpen ? "translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0",
        // Stacked at top-2; horizontal offset comes from `left` (under the trigger).
        "absolute top-2 left-[var(--space-gutter)]",
      )}
    >
      {/* Mono header strip — the filing label */}
      <div className="flex items-center justify-between border-b border-rule bg-paper-warm px-5 py-2.5">
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-ink-mute">
          {menu.label}
        </span>
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent-deep">
          {menu.eyebrow}
        </span>
      </div>

      <div className={cn("grid", menu.width === "wide" ? "md:grid-cols-[1fr_19rem]" : "md:grid-cols-[1fr_15rem]")}>
        {/* Link columns */}
        <div className={cn("grid gap-x-4 p-4", menu.width === "wide" ? "sm:grid-cols-2" : "grid-cols-1")}>
          {menu.columns.map((col) => (
            <div key={col.heading} className="min-w-0">
              <p className="eyebrow px-3 pb-1.5 pt-2 text-xs">{col.heading}</p>
              <ul>
                {col.items.map((item) => {
                  cursor += 1;
                  const idx = cursor;
                  const isActive = idx === active;
                  const isCurrent = item.href === currentPath;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        data-row
                        aria-current={isCurrent ? "page" : undefined}
                        onClick={onClose}
                        onPointerEnter={() => setActive(idx)}
                        onFocus={() => setActive(idx)}
                        className={cn(
                          "group relative flex items-start gap-3 px-3 py-2 transition-colors duration-fast",
                          isActive ? "bg-paper-warm" : "hover:bg-paper-warm/60",
                          // Persistent "you are here" rail, independent of hover.
                          isCurrent && "before:absolute before:inset-y-1 before:left-0 before:w-0.5 before:bg-accent",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 font-mono text-2xs tracking-[0.12em] transition-colors",
                            isActive || isCurrent ? "text-accent-deep" : "text-ink-mute",
                          )}
                        >
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">
                          <span
                            className={cn(
                              "flex items-center gap-1 text-sm font-semibold leading-snug transition-colors",
                              isActive ? "text-accent-deep" : "text-ink group-hover:text-accent-deep",
                            )}
                          >
                            {item.label}
                            <ArrowRight
                              size={13}
                              aria-hidden
                              className={cn(
                                "shrink-0 -translate-x-1 opacity-0 transition-all duration-base ease-out-soft",
                                isActive && "translate-x-0 opacity-100",
                              )}
                            />
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-ink-mute">
                            {item.desc}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Preview — a mounted drawing sheet that swaps with the hovered row */}
        <Link
          href={activeItem.href}
          onClick={onClose}
          onPointerEnter={() => {
            const i = items.findIndex((it) => it.href === activeItem.href);
            if (i >= 0) setActive(i);
          }}
          className="group hidden border-l border-rule bg-paper-warm/40 p-4 md:block"
          tabIndex={-1}
          aria-hidden
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-rule bg-paper-deep">
            {mounted &&
              items.map((it, i) => (
                <SmartImage
                  key={it.img.base + it.href}
                  folder={it.img.folder}
                  base={it.img.base}
                  alt=""
                  sizes="(min-width: 1024px) 320px, 40vw"
                  className={cn(
                    "absolute inset-0 h-full w-full transition-opacity duration-base ease-out-soft",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
            {/* Corner filing tab */}
            <span className="absolute left-0 top-0 z-10 bg-carbon/85 px-2 py-1 font-mono text-2xs uppercase tracking-[0.14em] text-accent-soft">
              Preview
            </span>
          </div>
          <p className="mt-3 font-display text-lg leading-tight text-ink">{activeItem.label}</p>
          <p className="mt-1 text-sm leading-snug text-ink-mute">{activeItem.desc}</p>
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent-deep transition-colors group-hover:text-accent">
            Open
            <ArrowUpRight size={13} aria-hidden />
          </span>
        </Link>
      </div>

      {/* Footer — the hub link, and an optional helper */}
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-rule bg-paper px-5 py-3">
        <Link
          href={menu.href}
          onClick={onClose}
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent-deep"
        >
          {menu.hubLabel}
          <ArrowRight
            size={14}
            aria-hidden
            className="transition-transform duration-base ease-out-soft group-hover:translate-x-0.5"
          />
        </Link>
        {menu.footer && (
          <Link
            href={menu.footer.href}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-mute transition-colors hover:text-accent-deep"
          >
            {menu.footer.label}
            <ArrowUpRight size={12} aria-hidden />
          </Link>
        )}
      </div>
    </div>
  );
}
