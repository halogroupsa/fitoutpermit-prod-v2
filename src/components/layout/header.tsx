"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { SITE } from "@/lib/site";
import { MEGA_NAV, SIMPLE_NAV, HOME_LINK, sectionBase } from "@/lib/nav";
import { DesktopNav } from "@/components/layout/mega-menu";

/** Which mega section, if any, contains the current path — for the mobile drawer. */
function currentSectionId(pathname: string): string | null {
  return MEGA_NAV.find((m) => pathname.startsWith(sectionBase(m.href)))?.id ?? null;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [mobileSection, setMobileSection] = useState<string | null>(
    () => currentSectionId(pathname) ?? "authorities",
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    const section = currentSectionId(pathname);
    if (section) setMobileSection(section);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Top hairline strip — the "filing reference" bar */}
      <div className="hidden border-b border-rule bg-paper-warm md:block">
        <div className="container-wide flex h-8 items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
            Fit-out permits &amp; authority approvals · Dubai, UAE
          </p>
          <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.16em] text-ink-mute">
            <span className="text-accent-deep">{SITE.stats.permits.toLocaleString()}+ permits processed</span>
            <a href={`tel:${SITE.phoneE164}`} className="hover:text-accent-deep">
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky inset-x-0 top-0 z-40 border-b bg-paper transition-shadow duration-base ease-out-soft",
          scrolled ? "border-rule shadow-[0_1px_0_rgba(22,19,14,0.08)]" : "border-rule",
        )}
      >
        <div className="container-wide relative flex h-[var(--header-h)] items-center gap-4 xl:gap-6">
          {/* Mobile menu button — left */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center border border-ink/15 text-ink xl:hidden"
          >
            <Menu size={20} aria-hidden />
          </button>

          <Link
            href="/"
            className="absolute left-1/2 inline-flex -translate-x-1/2 items-center xl:static xl:left-auto xl:translate-x-0"
            aria-label="FitOutPermits.ae — home"
          >
            <Image
              src="/images/logo.png"
              alt="FitOutPermits.ae — Driven by Halo"
              width={244}
              height={50}
              priority
              className="h-9 w-auto shrink-0 sm:h-10 lg:h-11"
            />
          </Link>

          {/* Desktop mega-menu navigation */}
          <DesktopNav />

          <div className="ml-auto flex items-center gap-3">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold hidden shrink-0 whitespace-nowrap md:inline-flex"
            >
              <MessageCircle size={15} aria-hidden />
              Free Permit Check
            </a>
            {/* Mobile call icon — right */}
            <a
              href={`tel:${SITE.phoneE164}`}
              aria-label={`Call ${SITE.phone}`}
              className="inline-flex h-10 w-10 items-center justify-center border border-ink/15 text-ink md:hidden"
            >
              <Phone size={18} aria-hidden />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn("fixed inset-0 z-50 xl:hidden", mobileOpen ? "visible" : "invisible")}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={cn(
            "absolute inset-0 bg-carbon/50 transition-opacity duration-base",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 flex h-full w-[min(420px,92vw)] flex-col overflow-y-auto bg-paper shadow-xl transition-transform duration-base ease-out-soft",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-rule px-6 py-4">
            <Image
              src="/images/logo.png"
              alt="FitOutPermits.ae"
              width={180}
              height={37}
              className="h-8 w-auto"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center border border-ink/15"
            >
              <X size={20} aria-hidden />
            </button>
          </div>

          <nav className="px-6 pb-4" aria-label="Mobile">
            <Link
              href={HOME_LINK.href}
              onClick={() => setMobileOpen(false)}
              aria-current={pathname === HOME_LINK.href ? "page" : undefined}
              className={cn(
                "block border-b border-rule/70 py-3.5 font-display text-lg transition-colors",
                pathname === HOME_LINK.href ? "text-accent-deep" : "text-ink hover:text-accent-deep",
              )}
            >
              {HOME_LINK.label}
            </Link>

            {MEGA_NAV.map((menu) => {
              const isSectionOpen = mobileSection === menu.id;
              const isSectionHere = pathname.startsWith(sectionBase(menu.href));
              const items = menu.columns.flatMap((c) => c.items);
              return (
                <div key={menu.id} className="border-b border-rule/70">
                  <button
                    type="button"
                    aria-expanded={isSectionOpen}
                    onClick={() => setMobileSection(isSectionOpen ? null : menu.id)}
                    className={cn(
                      "flex w-full items-center justify-between py-3.5 text-left font-display text-lg transition-colors",
                      isSectionHere ? "text-accent-deep" : "text-ink",
                    )}
                  >
                    {menu.label}
                    <ChevronDown
                      size={18}
                      aria-hidden
                      className={cn(
                        "text-ink-mute transition-transform duration-base ease-out-soft",
                        isSectionOpen && "-rotate-180 text-accent-deep",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-base ease-out-soft",
                      isSectionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <ul className="pb-3">
                        {items.map((item, i) => {
                          const isCurrent = item.href === pathname;
                          return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              aria-current={isCurrent ? "page" : undefined}
                              className={cn(
                                "relative flex items-start gap-3 py-2",
                                isCurrent && "before:absolute before:inset-y-1 before:-left-3 before:w-0.5 before:bg-accent",
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-1 font-mono text-2xs tracking-[0.12em]",
                                  isCurrent ? "text-accent-deep" : "text-ink-mute",
                                )}
                              >
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span>
                                <span
                                  className={cn(
                                    "block text-sm font-semibold leading-snug",
                                    isCurrent ? "text-accent-deep" : "text-ink",
                                  )}
                                >
                                  {item.label}
                                </span>
                                <span className="block text-xs leading-snug text-ink-mute">
                                  {item.desc}
                                </span>
                              </span>
                            </Link>
                          </li>
                          );
                        })}
                      </ul>
                      <Link
                        href={menu.href}
                        onClick={() => setMobileOpen(false)}
                        className="mb-3 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-accent-deep"
                      >
                        {menu.hubLabel}
                        <ArrowRight size={13} aria-hidden />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {SIMPLE_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-rule/70 py-3.5 font-display text-lg text-ink transition-colors hover:text-accent-deep"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto grid gap-2 px-6 pb-6 pt-2">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold justify-center"
            >
              <MessageCircle size={15} aria-hidden />
              Free Permit Check
            </a>
            <a href={`tel:${SITE.phoneE164}`} className="mt-2 text-center text-sm text-ink-mute">
              Or call {SITE.phone}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
