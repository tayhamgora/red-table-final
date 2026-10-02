import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { faqs, routes, site, testimonials } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Catering Services in Lahore | Red Table Catering & Events",
  },
  description:
    "Red Table offers catering services in Lahore for weddings, corporate events, and private dinners. Live BBQ, tandoor stations, and full event hospitality from Gulberg.",
  keywords: [
    "catering services in Lahore",
    "catering in Lahore",
    "best catering in Lahore",
    "catering Gulberg Lahore",
    "event catering Lahore",
    "food catering services Lahore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Catering Services in Lahore | Red Table",
    description:
      "Wedding, corporate, and private catering from Gulberg, Lahore. Live stations, buffets, and on-time service.",
    url: siteUrl,
  },
};

const highlights = [
  {
    href: routes.weddings,
    title: "Wedding Catering",
    copy: "Mehndi, Barat, and Walima menus with live stations and consistent service across multi-day functions.",
  },
  {
    href: routes.corporate,
    title: "Corporate Catering",
    copy: "Conferences, executive lunches, and company milestones served on schedule.",
  },
  {
    href: routes.live,
    title: "Live BBQ & Stations",
    copy: "Grills, tandoor, tawa, and street-food counters that keep guests gathered and the evening lively.",
  },
];

export default function Home() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Home", path: routes.home }])}
      />
      <JsonLd data={faqJsonLd([...faqs.home])} />

      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-ivory">
        <Image
          src="/img8.jpg"
          alt="Live grilled chops at a Red Table catering event in Lahore"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        <Image
          src="/img1.jpg"
          alt="Buffet catering station by Red Table in Lahore"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/40" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-36 pb-16 sm:px-6 sm:pt-44 sm:pb-20 lg:px-10 lg:pb-24">
          <p className="text-[11px] tracking-[0.28em] text-bronze-soft uppercase">
            Gulberg · Lahore
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.7rem] leading-[1.05] font-medium tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            Catering Services in Lahore
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-ivory/75 sm:text-lg">
            {site.tagline} Elevated presentation, and service that holds the schedule.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ivory/60 sm:text-base">
            {site.about}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={routes.contact}
              className="inline-flex h-12 items-center justify-center rounded-full bg-ivory px-7 text-[12px] tracking-[0.18em] text-ink uppercase transition-colors hover:bg-white"
            >
              Request an Event Proposal
            </Link>
            <Link
              href={routes.menus}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-[12px] tracking-[0.18em] text-ivory uppercase transition-colors hover:border-ivory"
            >
              View Menu Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <p className="section-kicker">What we cater</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
            Wedding, corporate, and live-station catering across Lahore
          </h2>
          <div className="mt-14 grid gap-px bg-line md:grid-cols-3">
            {highlights.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-cream px-0 py-10 transition-colors hover:bg-paper md:px-8 md:py-12"
              >
                <p className="font-display text-4xl text-bronze">
                  0{index + 1}
                </p>
                <h3 className="mt-6 font-display text-2xl text-ink sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-stone">
                  {item.copy}
                </p>
                <p className="mt-6 text-[12px] tracking-[0.14em] text-ink uppercase">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <p className="section-kicker">Why hosts book Red Table</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
          One less thing to worry about on your day
          </h2>
          <div className="mt-10 max-w-3xl space-y-5 text-sm leading-7 text-stone">
            <p>
            When you're hosting, you need three things: food your guests talk about, enough of it, and a team that keeps to the schedule. That's what we've done for more than twenty years, from our kitchen.
            </p>
            <p>
              From our kitchen and office in Main Gulberg we staff weddings,
              corporate lunches, and private dinners across the city. Live BBQ,
              tandoor, and tawa stations sit beside plated starters and dessert
              counters when the event calls for it.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={routes.services}
              className="inline-flex h-11 items-center rounded-full border border-line px-5 text-[12px] tracking-[0.14em] text-ink uppercase"
            >
              All catering services
            </Link>
            <Link
              href={routes.gallery}
              className="inline-flex h-11 items-center rounded-full border border-line px-5 text-[12px] tracking-[0.14em] text-ink uppercase"
            >
              View the gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <p className="section-kicker !text-bronze-soft">Client impressions</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl sm:text-5xl">
            Trusted for defining moments in Lahore
          </h2>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="border-t border-white/10 pt-8">
                <p className="line-clamp-6 text-sm leading-7 text-ivory/72">
                  {item.quote}
                </p>
                <footer className="mt-8">
                  <p className="text-sm text-ivory">{item.name}</p>
                  <p className="mt-1 text-[11px] tracking-[0.16em] text-ivory/45 uppercase">
                    {item.event}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
          <p className="section-kicker">Questions</p>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
            Catering in Lahore, answered
          </h2>
          <div className="mt-10">
            <FaqList items={faqs.home} />
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
