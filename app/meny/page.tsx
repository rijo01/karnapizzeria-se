import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallCTA from "@/components/MobileCallCTA";
import MenuExplorer from "@/components/MenuExplorer";
import Link from "next/link";
import { restaurantInfo } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Meny — 73 pizzor, kebab, hamburgare & sallader",
  description:
    "Hela menyn från Kärna Pizzeria. 73 pizzor, hamburgare från 70:-, kebab, falafel, sallader och lunch 130:-. Ring 0303-22 12 88 för avhämtning.",
  alternates: {
    canonical: "/meny",
  },
};

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 pt-28 md:pt-32">
        {/* Page header */}
        <div className="max-w-6xl mx-auto px-5 md:px-8 mb-10">
          <nav className="text-sm text-[var(--color-cream-muted)] mb-6">
            <Link href="/" className="hover:text-[var(--color-terracotta-bright)]">
              Hem
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--color-cream)]">Meny</span>
          </nav>

          <div className="text-label text-[var(--color-terracotta-bright)] mb-4">
            — Vår meny
          </div>
          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-[var(--color-cream)] mb-6">
            Hela menyn.
            <span className="block italic font-light">Allt vi gör.</span>
          </h1>
          <p className="text-lg text-[var(--color-cream-muted)] max-w-2xl leading-relaxed">
            Hittar du inte det du söker? Ring oss på{" "}
            <a
              href={`tel:${restaurantInfo.phoneFormatted}`}
              className="text-[var(--color-terracotta-bright)] underline underline-offset-4"
            >
              {restaurantInfo.phone}
            </a>{" "}
            så fixar vi något som funkar.
          </p>
        </div>

        <MenuExplorer />
      </main>
      <Footer />
      <MobileCallCTA />
    </>
  );
}
