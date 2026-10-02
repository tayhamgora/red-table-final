import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redtable.pk"),
  title: {
    default: "Catering Services in Lahore | Red Table Catering & Events",
    template: "%s | Red Table",
  },
  description:
    "Red Table offers catering services in Lahore for weddings, corporate events, and private dinners. Live BBQ, tandoor stations, and full hospitality from Gulberg.",
  keywords: [
    "catering services in Lahore",
    "catering in Lahore",
    "wedding catering Lahore",
    "corporate catering Lahore",
    "live BBQ catering Lahore",
    "catering Gulberg",
    "Red Table Catering",
  ],
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  openGraph: {
    title: "Catering Services in Lahore | Red Table",
    description: site.about,
    locale: "en_PK",
    type: "website",
    siteName: site.legalName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Catering Services in Lahore | Red Table",
    description: site.summary,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/icon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1b18",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CateringBusiness",
  name: site.legalName,
  alternateName: site.name,
  description: site.about,
  telephone: "+923218405177",
  email: site.email,
  image: "/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "202-A Gul Mohar",
    addressLocality: "Gulberg",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: {
    "@type": "City",
    name: "Lahore",
  },
  url: "https://redtable.pk",
  sameAs: [site.instagramHref],
  priceRange: "$$",
  servesCuisine: ["Pakistani", "Continental", "Asian"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Catering services in Lahore",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding catering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate catering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Live BBQ catering" } },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} h-full scroll-smooth antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full bg-paper font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:bg-cream focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
