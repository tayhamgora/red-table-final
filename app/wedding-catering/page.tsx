import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { faqs, routes, testimonials } from "@/lib/site";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Wedding Catering in Lahore",
  description:
    "Wedding catering in Lahore for Mehndi, Barat, and Walima. Multi-day functions, live BBQ, and banquet menus from Red Table in Gulberg.",
  path: routes.weddings,
  keywords: [
    "wedding catering Lahore",
    "wedding catering in Lahore",
    "Mehndi catering Lahore",
    "Barat catering Lahore",
    "Walima catering Lahore",
    "wedding caterer Lahore",
  ],
});

const functions = [
  {
    title: "Mehndi",
    copy: "The colourful opening: chaat, live street stations, BBQ, and a dessert corner that keeps guests lingering.",
  },
  {
    title: "Barat",
    copy: "The main feast: qorma or kunnah, biryani or pulao, live tandoor, salads, and a dessert line guests remember.",
  },
  {
    title: "Walima",
    copy: "A calmer close to the celebrations. Continental or royal Pakistani menus, Mutton Kunnah or Chicken Handi, with the same service standard as the first day.",
  },
];

export default function WeddingCateringPage() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Wedding Catering", path: routes.weddings },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Wedding Catering in Lahore",
          description:
            "Mehndi, Barat, and Walima catering for single-day and multi-day weddings in Lahore.",
          path: routes.weddings,
        })}
      />
      <JsonLd data={faqJsonLd([...faqs.weddings])} />

      <PageHero
        kicker="Weddings"
        title="Wedding Catering in Lahore"
        lede="From an intimate nikkah dinner to a three-day wedding, we look after the food and the timing so your family can stay with your guests."
        imageSrc="/img3.jpg"
        imageAlt="Gold flatware and linen at a Red Table wedding place setting"
        crumbs={[
          { label: "Home", href: routes.home },
          { label: "Wedding catering" },
        ]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="max-w-3xl space-y-5 text-sm leading-7 text-stone">
            <p>
              Wedding catering in Lahore is judged in the dining hall: was
              there enough, did it taste as promised, and did service hold when
              the barat ran late? Those are the questions we plan for.
            </p>
            <p>
              Families have come back to us for their sons&apos; and daughters&apos; weddings, and for three-day functions where the food had to be as good on the last day as on the first. Live BBQ and tandoor stations sit beside banquet dishes wherever the venue allows fire.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {functions.map((item) => (
              <article key={item.title} className="border border-line bg-cream p-8">
                <h2 className="font-display text-3xl text-ink">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <h2 className="font-display text-4xl text-ink">
            What wedding hosts tell us
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {testimonials.slice(0, 2).map((item) => (
              <blockquote key={item.name} className="border-t border-line pt-8">
                <p className="text-sm leading-7 text-stone">{item.quote}</p>
                <footer className="mt-6 text-sm text-ink">
                  {item.name}
                  <span className="mt-1 block text-[11px] tracking-[0.16em] text-stone uppercase">
                    {item.event}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-12">
            <FaqList items={faqs.weddings} />
          </div>
        </div>
      </section>

      <CtaBand title="Plan wedding catering in Lahore" />
    </main>
  );
}
