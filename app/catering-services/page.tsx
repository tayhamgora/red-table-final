import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { faqs, routes } from "@/lib/site";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Catering Services in Lahore",
  description:
    "Full-service catering in Lahore for weddings, corporate events, and private dinners. Buffets, live stations, and on-site hospitality from Red Table in Gulberg.",
  path: routes.services,
  keywords: [
    "catering services in Lahore",
    "catering services Lahore",
    "food catering Lahore",
    "outdoor catering Lahore",
    "buffet catering Lahore",
    "event catering services",
  ],
});

const offerings = [
  {
    href: routes.weddings,
    title: "Wedding catering",
    copy: "Mehndi, Barat, and Walima service with menus that stay consistent across a three-day function.",
  },
  {
    href: routes.corporate,
    title: "Corporate catering",
    copy: "Conferences, executive lunches, launches, and staff events, served to the programme.",
  },
  {
    href: routes.live,
    title: "Live culinary stations",
    copy: "BBQ, tandoor, tawa, and street-food counters, cooked in front of guests.",
  },
  {
    href: routes.menus,
    title: "Menu packages",
    copy: "Six menu packages to start from. We adjust the dishes, live stations, and desserts to your guest list, so nothing here is fixed.",
  },
];

export default function CateringServicesPage() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Catering Services", path: routes.services },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Catering Services in Lahore",
          description:
            "Full-service wedding, corporate, and private catering across Lahore.",
          path: routes.services,
        })}
      />
      <JsonLd data={faqJsonLd([...faqs.services])} />

      <PageHero
        kicker="Red Table"
        title="Catering Services in Lahore"
        lede="Menu planning, live cooking, buffet presentation, and service staff, all from one team and one kitchen in Gulberg."
        imageSrc="/img1.jpg"
        imageAlt="Buffet catering station by Red Table in Lahore"
        crumbs={[
          { label: "Home", href: routes.home },
          { label: "Catering services" },
        ]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="max-w-3xl space-y-5 text-sm leading-7 text-stone">
            <p>
            When you're hosting, you want a team that can cook for a crowd without losing flavour. That's how Red Table works: generous portions, familiar Pakistani and continental dishes, and service that keeps to the schedule.
            </p>
            <p>
            We cater in homes, farmhouses, hotels, and offices across Lahore, from a seated family dinner to a thousand-guest wedding. The standard doesn't change: food cooked right, presented cleanly, and topped up before the trays run low.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {offerings.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-line bg-cream p-8 transition-colors hover:border-ink"
              >
                <h2 className="font-display text-3xl text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone">{item.copy}</p>
                <p className="mt-6 text-[12px] tracking-[0.14em] text-ink uppercase">
                  Open page →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <h2 className="font-display text-4xl text-ink">
            What a Red Table service includes
          </h2>
          <ul className="mt-8 max-w-3xl space-y-3 text-sm leading-7 text-stone">
            <li>Menu design around guest count, venue, and dietary notes</li>
            <li>Live BBQ, tandoor, tawa, or Asian live-kitchen stations</li>
            <li>Buffet architecture, salad bars, and dessert counters</li>
            <li>Service staff, timing, and replenishment through the event</li>
          </ul>
          <div className="mt-12">
            <FaqList items={faqs.services} />
          </div>
        </div>
      </section>

      <CtaBand title="Book catering services in Lahore" />
    </main>
  );
}
