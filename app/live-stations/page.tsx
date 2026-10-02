import type { Metadata } from "next";
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
  title: "Live BBQ & Culinary Stations in Lahore",
  description:
    "Live BBQ catering in Lahore plus tandoor, tawa, and street-food stations. Interactive live cooking for weddings and corporate events from Red Table.",
  path: routes.live,
  keywords: [
    "live BBQ catering Lahore",
    "live BBQ Lahore",
    "live tandoor catering",
    "live cooking stations Lahore",
    "BBQ catering Lahore",
    "live food stations wedding",
  ],
});

const stations = [
  {
    title: "Live BBQ",
    copy: "Chicken malai boti, kababs, sajji, and chops grilled in view of the guests.",
  },
  {
    title: "Live Tandoor",
    copy: "Assorted naan cooked throughout service so bread never sits under a cloth.",
  },
  {
    title: "Tawa & Street",
    copy: "Qeema chops, pathooray chanay, bun kabab, and live jalebi for Mehndi energy.",
  },
  {
    title: "Asian Live Kitchen",
    copy: "Egg fried rice, tarragon chicken, and kung pao, cooked fresh at the station.",
  },
];

export default function LiveStationsPage() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Live Stations", path: routes.live },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Live BBQ and Culinary Stations in Lahore",
          description:
            "Live BBQ, tandoor, tawa, and Asian live-kitchen catering in Lahore.",
          path: routes.live,
        })}
      />
      <JsonLd data={faqJsonLd([...faqs.live])} />

      <PageHero
        kicker="Live stations"
        title="Live BBQ and Culinary Stations"
        lede="We set up grill, tandoor, tawa, and live-kitchen counters that bring heat, smell, and movement to the room."
        imageSrc="/img8.jpg"
        imageAlt="Live grilled chops at a Red Table catering event in Lahore"
        crumbs={[
          { label: "Home", href: routes.home },
          { label: "Live stations" },
        ]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="max-w-3xl space-y-5 text-sm leading-7 text-stone">
            <p>
            Live BBQ is one of the things hosts ask us for most. The smell of the grill, naan coming straight out of the tandoor, and a chef working a tawa give a venue life that a covered buffet can't.
            </p>
            <p>
            Stations can stand alone for a Mehndi or garden evening, or sit beside a banquet buffet for a Barat or corporate dinner. We check the venue first and plan the layout, fuel, and staffing so service stays safe and on time.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {stations.map((item) => (
              <article key={item.title} className="border border-line bg-cream p-8">
                <h2 className="font-display text-3xl text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone">{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <FaqList items={faqs.live} />
          </div>
        </div>
      </section>

      <CtaBand title="Add live stations to your event" />
    </main>
  );
}
