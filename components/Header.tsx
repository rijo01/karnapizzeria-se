"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { restaurantInfo } from "@/lib/menu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetch("/api/status")
      .then((r) => r.json())
      .then((s) => setIsOpen(s.isOpen))
      .catch(() => {});
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[oklch(0.13_0.015_50/0.85)] border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--color-terracotta)] flex items-center justify-center">
              <span
                className="font-display text-[var(--color-ink)] text-xl md:text-2xl font-bold leading-none"
                style={{ transform: "translateY(-1px)" }}
              >
                K
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base md:text-lg text-[var(--color-cream)] leading-none">
                Kärna Pizzeria
              </span>
              <span className="text-[0.62rem] md:text-[0.68rem] tracking-[0.2em] uppercase text-[var(--color-cream-muted)] mt-0.5">
                Est. Kärnatorget
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/meny"
              className="text-sm text-[var(--color-cream-soft)] hover:text-[var(--color-terracotta-bright)] transition-colors"
            >
              Meny
            </Link>
            <Link
              href="/#lunch"
              className="text-sm text-[var(--color-cream-soft)] hover:text-[var(--color-terracotta-bright)] transition-colors"
            >
              Dagens Lunch
            </Link>
            <Link
              href="/#hitta"
              className="text-sm text-[var(--color-cream-soft)] hover:text-[var(--color-terracotta-bright)] transition-colors"
            >
              Hitta hit
            </Link>
          </nav>

          {/* Status + CTA */}
          <div className="flex items-center gap-3">
            {isOpen !== null && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span
                  className={`w-1.5 h-1.5 rounded-full animate-pulse-dot ${
                    isOpen ? "bg-[var(--color-basil)]" : "bg-[var(--color-tomato)]"
                  }`}
                />
                <span className="text-[0.72rem] tracking-wider uppercase text-[var(--color-cream-soft)]">
                  {isOpen ? "Öppet nu" : "Stängt"}
                </span>
              </div>
            )}

            <a href={`tel:${restaurantInfo.phoneFormatted}`} className="btn-primary text-sm md:text-base">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="hidden sm:inline">Ring & beställ</span>
              <span className="sm:hidden">Ring</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
