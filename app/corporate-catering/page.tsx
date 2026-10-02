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
  title: "Corporate Catering in Lahore",
  description:
    "Corporate catering in Lahore for conferences, executive lunches, award nights, and company retreats. Punctual service and consistent scale from Red Table.",
  path: routes.corporate,
  keywords: [
    "corporate catering Lahore",
    "corporate catering in Lahore",
    "conference catering Lahore",
    "office catering Lahore",
    "executive lunch catering",
    "corporate event catering Lahore",
  ],
});

const occasions = [
  {
    title: "Conferences & seminars",
    copy: "Tea service, working lunches, and dinner that can be plated or buffeted without interrupting the agenda.",
  },
  {
    title: "Executive lunches",
    copy: "Smaller rooms, tighter timing, and a menu that suits clients and senior guests.",
  },
  {
    title: "Milestones & award nights",
    copy: "Company anniversaries and recognition dinners, with live stations when you want energy in the room.",
  },
  {
    title: "Retreats & off-sites",
    copy: "Full-day food service at farmhouses or hotels, at the same quantity and quality as a city banquet.",
  },
];

export default function CorporateCateringPage() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Corporate Catering", path: routes.corporate },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Corporate Catering in Lahore",
          description:
            "Conference, executive lunch, and company-event catering in Lahore.",
          path: routes.corporate,
        })}
      />
      <JsonLd data={faqJsonLd([...faqs.corporate])} />

      <PageHero
        kicker="Corporate"
        title="Corporate Catering in Lahore"
        lede="Food that arrives on the minute, tastes consistent at the last table, and does not compete with the programme."
        imageSrc="/img4.jpg"
        imageAlt="Premium salad bar and cheese board for a corporate catering event"
        crumbs={[
          { label: "Home", href: routes.home },
          { label: "Corporate catering" },
        ]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="max-w-3xl space-y-5 text-sm leading-7 text-stone">
            <p>
            Corporate catering is a timing problem as much as a cooking one. A conference lunch that runs twenty minutes late costs you the afternoon. We plan menus and staffing around your schedule, not the other way around.
            </p>
            <p>
            From our kitchen in Gulberg, we serve offices, hotels, and off-site venues, from a 40-person board lunch to 800 guest events. Continental and Pakistani menus are both available, with live stations for evening functions.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {occasions.map((item) => (
              <article key={item.title} className="border border-line bg-cream p-8">
                <h2 className="font-display text-3xl text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone">{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <FaqList items={faqs.corporate} />
          </div>
        </div>
      </section>

      <CtaBand title="Arrange corporate catering in Lahore" />
    </main>
  );
}
