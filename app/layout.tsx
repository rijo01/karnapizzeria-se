import type { Metadata, Viewport } from "next";
import { restaurantInfo, menuItems } from "@/lib/menu";
import "./globals.css";

const SITE_URL = "https://karnapizzeria.se";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kärna Pizzeria — Pizza, kebab & hamburgare i Kärna | 0303-22 12 88",
    template: "%s | Kärna Pizzeria",
  },
  description:
    "Välkommen till Kärna Pizzeria på Kärnatorget. Handgjord pizza, kebab, hamburgare & sallader. Dagens lunch 130:- inkl. dricka & sallad. Öppet tis-sön 12-21. Ring 0303-22 12 88.",
  keywords: [
    "pizzeria Kärna",
    "pizza Kungälv",
    "kebab Kärna",
    "lunch Kärna",
    "dagens lunch Kungälv",
    "hamburgare Kärna",
    "pizzeria 442 70",
    "Kärnatorget pizzeria",
    "beställa pizza Kärna",
    "bästa pizzan Kungälv",
  ],
  authors: [{ name: "Kärna Pizzeria" }],
  creator: "Kärna Pizzeria",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_URL,
    siteName: "Kärna Pizzeria",
    title: "Kärna Pizzeria — Handgjord pizza i hjärtat av Kärna",
    description:
      "73 pizzor, kebab, hamburgare & sallader. Dagens lunch 130:- inkl. dricka & sallad. Ring 0303-22 12 88.",
    images: [
      {
        url: "/images/calzone-bakad-rund.jpg",
        width: 720,
        height: 960,
        alt: "Kärna Pizzeria — handgjord pizza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kärna Pizzeria",
    description: "Handgjord pizza, kebab & hamburgare i Kärna. Dagens lunch 130:-",
    images: ["/images/calzone-bakad-rund.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1410",
  width: "device-width",
  initialScale: 1,
};

function generateJsonLd() {
  const menuSections = [
    { name: "Pizzor", category: "pizzor" },
    { name: "Vegetariska pizzor", category: "vegetariska" },
    { name: "Skaldjurspizzor", category: "skaldjur" },
    { name: "Kycklingpizzor", category: "kyckling" },
    { name: "Köttfärspizzor", category: "kottfars" },
    { name: "Oxfilépizzor", category: "oxfile" },
    { name: "Amerikanska pizzor", category: "amerikanska" },
    { name: "Kebabpizzor", category: "kebab" },
    { name: "Inbakade pizzor", category: "inbakade" },
    { name: "Specialpizzor", category: "special" },
    { name: "Hamburgare", category: "hamburgare" },
    { name: "Sallader", category: "sallader" },
    { name: "Kebab & Falafel", category: "kebab-falafel" },
  ];

  const restaurant = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}#restaurant`,
    name: restaurantInfo.name,
    url: SITE_URL,
    image: `${SITE_URL}/og.jpg`,
    telephone: restaurantInfo.phone,
    priceRange: "$$",
    servesCuisine: ["Italian", "Pizza", "Mediterranean", "Fast Food"],
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurantInfo.address,
      postalCode: restaurantInfo.postalCode,
      addressLocality: restaurantInfo.city,
      addressRegion: restaurantInfo.region,
      addressCountry: restaurantInfo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurantInfo.coordinates.lat,
      longitude: restaurantInfo.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "12:00",
        closes: "21:00",
      },
    ],
    hasMenu: {
      "@type": "Menu",
      "@id": `${SITE_URL}#menu`,
      name: "Meny — Kärna Pizzeria",
      hasMenuSection: menuSections.map((section) => ({
        "@type": "MenuSection",
        name: section.name,
        hasMenuItem: menuItems
          .filter((item) => item.category === section.category)
          .map((item) => ({
            "@type": "MenuItem",
            name: item.number ? `${item.number}. ${item.name}` : item.name,
            description: item.ingredients ?? undefined,
            offers: {
              "@type": "Offer",
              price: item.price,
              priceCurrency: "SEK",
            },
          })),
      })),
    },
    acceptsReservations: "True",
  };

  return JSON.stringify(restaurant);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateJsonLd() }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
