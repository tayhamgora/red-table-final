import type { Metadata } from "next";
import { site } from "@/lib/site";

export const siteUrl = "https://redtable.pk";

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      type: "website",
      locale: "en_PK",
      siteName: site.legalName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteUrl}${path}`,
    provider: {
      "@type": "CateringBusiness",
      name: site.legalName,
      telephone: "+923218405177",
      address: {
        "@type": "PostalAddress",
        streetAddress: "202-A Gul Mohar",
        addressLocality: "Gulberg",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Lahore",
    },
    serviceType: name,
  };
}
