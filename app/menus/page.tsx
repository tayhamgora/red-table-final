import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { MenuScroller } from "@/components/menu-scroller";
import { PageHero } from "@/components/page-hero";
import { faqs, routes } from "@/lib/site";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Catering Menu Packages in Lahore",
  description:
    "Catering menu packages in Lahore from Red Table: traditional feast, royal banquet, live street & tawa, continental live kitchen, chicken, and mutton biryani spreads.",
  path: routes.menus,
  keywords: [
    "catering menu Lahore",
    "wedding catering menu Lahore",
    "catering packages Lahore",
    "banquet menu Lahore",
    "live BBQ menu Lahore",
  ],
});

export default function MenusPage() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Menus", path: routes.menus },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Catering Menu Packages in Lahore",
          description:
            "Six catering menu concepts for weddings and events in Lahore.",
          path: routes.menus,
        })}
      />
      <JsonLd data={faqJsonLd([...faqs.menus])} />

      <PageHero
        kicker="Menus"
        title="Catering Menu Packages in Lahore"
        lede="Six starting concepts. We adjust dishes, live stations, and desserts to your guest list — nothing here is a locked box."
        imageSrc="/img5.jpg"
        imageAlt="Fresh gajar halwa served from a Red Table catering menu"
        crumbs={[
          { label: "Home", href: routes.home },
          { label: "Menus" },
        ]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <MenuScroller />
          <div className="mt-16 border border-line bg-cream px-6 py-10 sm:px-10">
            <p className="section-kicker">Custom menus</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-ink sm:text-4xl">
              Want something that isn't on the list?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone">
              Tell us what you have in mind: the dishes you love, any live stations, and any dietary needs. We'll draft a menu for your event.
            </p>
            <Link
              href={routes.contact}
              className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-6 text-[12px] tracking-[0.18em] text-cream uppercase"
            >
              Design a custom menu
            </Link>
          </div>
          <div className="mt-16">
            <FaqList items={faqs.menus} />
          </div>
        </div>
      </section>

      <CtaBand title="Request a menu proposal" />
    </main>
  );
}
