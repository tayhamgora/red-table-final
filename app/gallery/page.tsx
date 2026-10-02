import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Gallery } from "@/components/gallery";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { routes } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Catering Gallery in Lahore",
  description:
    "Photos of Red Table catering in Lahore: buffet stations, live BBQ, table settings, dessert counters, and event presentation.",
  path: routes.gallery,
  keywords: [
    "catering gallery Lahore",
    "wedding catering photos Lahore",
    "event catering pictures",
    "live BBQ catering photos",
  ],
});

export default function GalleryPage() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Gallery", path: routes.gallery },
        ])}
      />

      <PageHero
        kicker="Atmosphere"
        title="Catering Gallery"
        lede="Table architecture, live stations, and buffet presentation from recent events in Lahore."
        imageSrc="/img6.jpg"
        imageAlt="Spinach and cheese quiche arranged for a Red Table event"
        crumbs={[
          { label: "Home", href: routes.home },
          { label: "Gallery" },
        ]}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-10 lg:py-24">
          <Gallery />
        </div>
      </section>

      <CtaBand title="See this standard at your venue" />
    </main>
  );
}
