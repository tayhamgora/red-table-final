import type { Metadata } from "next";
import { ContactPanel } from "@/components/contact-panel";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { routes, site } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact a Caterer in Lahore",
  description:
    "Contact Red Table for catering in Lahore. WhatsApp +92 321 840 5177, email redtableev@gmail.com, or visit 202-A Gul Mohar, Main Gulberg.",
  path: routes.contact,
  keywords: [
    "catering contact Lahore",
    "hire caterer Lahore",
    "catering Gulberg contact",
    "wedding catering inquiry Lahore",
  ],
});

export default function ContactPage() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: routes.home },
          { name: "Contact", path: routes.contact },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Red Table Catering",
          url: `${siteUrl}${routes.contact}`,
          mainEntity: {
            "@type": "CateringBusiness",
            name: site.legalName,
            telephone: "+923218405177",
            email: site.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "202-A Gul Mohar",
              addressLocality: "Gulberg",
              addressRegion: "Punjab",
              addressCountry: "PK",
            },
          },
        }}
      />

      <PageHero
        kicker="Plan your event"
        title="Contact Red Table"
        lede="Share the date, venue, and guest count. We reply on WhatsApp or phone with a menu concept and availability."
        crumbs={[
          { label: "Home", href: routes.home },
          { label: "Contact" },
        ]}
      />

      <section className="bg-paper">
        <ContactPanel />
      </section>
    </main>
  );
}
