import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallCTA from "@/components/MobileCallCTA";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Galleri — handgjord pizza & inbakade specialiteter",
  description:
    "Bilder från Kärna Pizzeria: handgjord pizza, inbakade calzoner med signaturmönster och våra mest älskade rätter. Hantverket bakom varje rätt.",
  alternates: {
    canonical: "/galleri",
  },
  openGraph: {
    title: "Galleri — Kärna Pizzeria",
    description:
      "Handgjord pizza och inbakade calzoner från Kärna Pizzeria på Kärnatorget.",
    url: "/galleri",
    images: [
      {
        url: "/images/calzone-bakad-rund.jpg",
        width: 720,
        height: 960,
        alt: "Inbakad pizza med signaturmönster — Kärna Pizzeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galleri — Kärna Pizzeria",
    description:
      "Handgjord pizza och inbakade calzoner från Kärna Pizzeria.",
    images: ["/images/calzone-bakad-rund.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 pt-28 md:pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <nav className="text-sm text-[var(--color-cream-muted)] mb-6">
            <Link href="/" className="hover:text-[var(--color-terracotta-bright)]">
              Hem
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-cream)]">Galleri</span>
          </nav>

          <div className="text-label text-[var(--color-terracotta-bright)] mb-4">
            — Smaka med ögonen först
          </div>
          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-cream)] mb-6">
            Galleri.
          </h1>
          <p className="text-lg text-[var(--color-cream-muted)] max-w-2xl leading-relaxed mb-12 md:mb-16">
            Långjäst deg, inbakade calzoner med utskurna signaturmönster och pizzor
            som tagits direkt ur ugnen — här är ett urval av vårt hantverk.
          </p>

          <GalleryGrid />
        </div>
      </main>
      <Footer />
      <MobileCallCTA />
    </>
  );
}
