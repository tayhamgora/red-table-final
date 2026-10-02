"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { nav, routes, serviceLinks, site } from "@/lib/site";

// Scroll position (px) after which the header switches to the solid cream style.
const SOLID_AFTER = 80;

// Pages that should keep a parent nav item underlined.
// Weddings is its own nav item, so it isn't listed here.
const NESTED: Record<string, string[]> = {
  "/catering-services": ["/corporate-catering", "/live-stations"],
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";

  const matches = (base: string) =>
    pathname === base || pathname.startsWith(`${base}/`);

  return matches(href) || (NESTED[href] ?? []).some(matches);
}

function Chevron({
  open,
  className = "h-3 w-3",
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menus whenever the page changes.
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Transparent only near the top of the page.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SOLID_AFTER);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  // Hide on scroll down, show on scroll up. Never hide while the mobile menu is open.
  useEffect(() => {
    if (open) {
      setHidden(false);
      return;
    }

    let lastY = window.scrollY;
    const minDelta = 6; // ignore tiny scroll jitters

    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < minDelta) return;

      if (y <= SOLID_AFTER) {
        setHidden(false);
      } else if (y > lastY) {
        setHidden(true); // scrolling down -> hide
      } else {
        setHidden(false); // scrolling up -> show
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Close the services dropdown when the header slides away.
  useEffect(() => {
    if (hidden) setServicesOpen(false);
  }, [hidden]);

  // Close the services dropdown on Escape or on a click outside it.
  useEffect(() => {
    if (!servicesOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    const onPointer = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [servicesOpen]);

  // Solid (original) style whenever we're past the hero or the mobile menu is open.
  const solid = scrolled || open;

  const iconButton = solid
    ? "border-line text-ink hover:border-ink"
    : "border-white/60 text-white hover:border-white";

  return (
    <header
      className={`site-header ${hidden ? "site-header--hidden" : ""} ${
        solid ? "site-header--solid" : ""
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-10">
        <Link href={routes.home} className="shrink-0" aria-label="Red Table home">
          <Logo
            variant="ink"
            priority
            className={`h-9 w-[5.75rem] transition sm:h-10 sm:w-[6.5rem] ${
              solid ? "" : "brightness-0 invert"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);

            const color = solid
              ? active
                ? "text-ink"
                : "text-ink/70 hover:text-ink"
              : active
                ? "text-white"
                : "text-white/85 hover:text-white";

            const underline = active
              ? `underline decoration-2 underline-offset-[6px] ${
                  solid ? "decoration-black" : "decoration-white"
                }`
              : "no-underline";

            const linkClass = `text-[13px] font-medium tracking-[0.04em] transition-colors ${color} ${underline}`;

            if (item.href !== routes.services) {
              return (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.href}
                ref={servicesRef}
                className="relative flex items-center gap-1.5"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onBlur={(event) => {
                  if (
                    !event.currentTarget.contains(
                      event.relatedTarget as Node | null,
                    )
                  ) {
                    setServicesOpen(false);
                  }
                }}
              >
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
                <button
                  type="button"
                  aria-label="Show services menu"
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  onClick={() => setServicesOpen((value) => !value)}
                  className={`inline-flex h-6 w-5 items-center justify-center transition-colors ${color}`}
                >
                  <Chevron open={servicesOpen} />
                </button>

                {servicesOpen ? (
                  <div id="services-menu" className="absolute left-0 top-full pt-6">
                    <div className="min-w-[15rem] border border-line bg-cream py-2 shadow-[0_18px_40px_-20px_rgba(28,27,24,0.5)]">
                      {serviceLinks.map((service) => {
                        const current = pathname === service.href;
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block px-5 py-2.5 text-[13px] font-medium tracking-[0.04em] text-ink transition-colors hover:bg-paper ${
                              current ? "bg-paper" : ""
                            }`}
                          >
                            {service.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <WhatsAppLink
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${iconButton}`}
            iconClassName="h-[18px] w-[18px]"
          >
            <span className="sr-only">Chat on WhatsApp</span>
          </WhatsAppLink>

          <Link
            href={routes.contact}
            className={`hidden h-10 items-center rounded-full px-5 text-[12px] font-medium tracking-[0.06em] transition-colors sm:inline-flex ${
              solid
                ? "bg-ink text-cream hover:bg-charcoal"
                : "bg-cream text-ink hover:bg-white"
            }`}
          >
            Plan Your Event
          </Link>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${iconButton}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`lg:hidden ${open ? "block" : "hidden"}`}>
        <nav
          className="flex min-h-[calc(100svh-4.25rem)] max-h-[calc(100svh-4.25rem)] flex-col justify-between overflow-y-auto bg-cream px-6 pb-10 pt-2"
          aria-label="Mobile"
        >
          <div className="flex flex-col">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              const activeStyle = active
                ? "underline decoration-black decoration-2 underline-offset-[8px]"
                : "";

              if (item.href !== routes.services) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`border-b border-line py-4 font-display text-3xl text-ink ${activeStyle}`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href} className="border-b border-line">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`py-4 font-display text-3xl text-ink ${activeStyle}`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Show services links"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services"
                      onClick={() => setMobileServicesOpen((value) => !value)}
                      className="flex h-11 w-11 items-center justify-center text-ink"
                    >
                      <Chevron open={mobileServicesOpen} className="h-4 w-4" />
                    </button>
                  </div>
                  {mobileServicesOpen ? (
                    <div id="mobile-services" className="flex flex-col pb-3 pl-4">
                      {serviceLinks
                        .filter((service) => service.href !== routes.services)
                        .map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="py-2 text-lg text-stone"
                          >
                            {service.label}
                          </Link>
                        ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="space-y-4 pt-8 text-sm text-stone">
            <a href={site.phoneHref} className="block text-ink">
              {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="block">
              {site.email}
            </a>
            <WhatsAppLink className="inline-flex items-center gap-2 text-ink">
              Message on WhatsApp
            </WhatsAppLink>
          </div>
        </nav>
      </div>
    </header>
  );
}