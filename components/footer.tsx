import Link from "next/link";
import { Logo } from "@/components/logo";
import { InstagramIcon } from "@/components/icons";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { footerLinks, routes, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 md:grid-cols-12 lg:px-10 lg:py-20">
        <div className="md:col-span-5">
          <Link href={routes.home} aria-label="Red Table home">
            <Logo variant="ivory" className="h-12 w-[7.75rem]" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-ivory/65">
          Catering Lahore's weddings, offices, and family dinners for over twenty years.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] tracking-[0.22em] text-bronze-soft uppercase">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/75">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] tracking-[0.22em] text-bronze-soft uppercase">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/75">
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-ivory">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="transition-colors hover:text-ivory">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ivory"
              >
                {site.address}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <WhatsAppLink className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[11px] tracking-[0.16em] text-ivory uppercase transition-colors hover:border-ivory">
              WhatsApp
            </WhatsAppLink>
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory transition-colors hover:border-ivory"
              aria-label="Red Table on Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-[12px] text-ivory/45 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} Red Table Catering. All rights reserved.</p>
          <p>Catering services in Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
