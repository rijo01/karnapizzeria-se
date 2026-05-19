"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { restaurantInfo } from "@/lib/menu";
import { heroImage, imagePath } from "@/lib/images";

export default function Hero() {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    isLunchTime: boolean;
    nextOpening?: string;
    todayHours: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/status")
      .then((r) => r.json())
      .then((s) => setStatus(s))
      .catch(() => {});
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Atmospheric background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[var(--color-terracotta)] opacity-[0.08] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[var(--color-saffron)] opacity-[0.06] blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Editorial text */}
          <div>
            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in">
              {status ? (
                <>
                  <span
                    className={`w-2 h-2 rounded-full animate-pulse-dot ${
                      status.isOpen ? "bg-[var(--color-basil)]" : "bg-[var(--color-tomato)]"
                    }`}
                  />
                  <span className="text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-cream)]">
                    {status.isOpen
                      ? status.isLunchTime
                        ? "Dagens Lunch serveras nu"
                        : `Öppet — stänger ${status.todayHours.split(" – ")[1]}`
                      : status.nextOpening ?? "Stängt"}
                  </span>
                </>
              ) : (
                <span className="text-[0.72rem] tracking-[0.18em] uppercase text-[var(--color-cream-muted)]">
                  Öppettider tis–sön 12:00–21:00
                </span>
              )}
            </div>

            {/* Display heading */}
            <h1 className="text-display text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] text-[var(--color-cream)] animate-rise">
              Äkta
              <span className="block italic font-light gradient-text">pizza —</span>
              <span className="block">från</span>
              <span className="block text-[var(--color-terracotta-bright)]">Kärnatorget.</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg text-[var(--color-cream-muted)] leading-relaxed animate-rise stagger-2">
              Sjuttiotre pizzor, handgjorda på plats. Stenugnsbakad skorpa, riktig mozzarella och råvaror som faktiskt smakar något. Sedan årtionden en självklar mötesplats i Kärna.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise stagger-3">
              <a
                href={`tel:${restaurantInfo.phoneFormatted}`}
                className="btn-primary text-base"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {restaurantInfo.phone}
              </a>
              <Link href="/meny" className="btn-ghost text-base">
                Se hela menyn
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md animate-rise stagger-4">
              <div>
                <div className="text-display text-3xl md:text-4xl text-[var(--color-saffron)]">73</div>
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-cream-muted)] mt-1">
                  Pizzor
                </div>
              </div>
              <div>
                <div className="text-display text-3xl md:text-4xl text-[var(--color-saffron)]">130<span className="text-lg">:-</span></div>
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-cream-muted)] mt-1">
                  Dagens Lunch
                </div>
              </div>
              <div>
                <div className="text-display text-3xl md:text-4xl text-[var(--color-saffron)]">12–21</div>
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--color-cream-muted)] mt-1">
                  Tis–Sön
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hero pizza photo */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="pizza-wrap relative w-full max-w-[500px] aspect-square animate-fade-in stagger-2">
              {/* Rotating glow ring */}
              <div
                className="pizza-glow absolute inset-0 rounded-full opacity-30 blur-3xl"
                style={{
                  background: "conic-gradient(from 0deg, var(--color-terracotta), var(--color-saffron), var(--color-tomato), var(--color-terracotta))",
                  animation: "spin 20s linear infinite",
                }}
              />
              <div className="relative w-full aspect-square rounded-full overflow-hidden drop-shadow-2xl group">
                <Image
                  src={imagePath(heroImage.basename, "webp")}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 0px, 500px"
                  className="object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in stagger-6">
          <span className="text-[0.68rem] tracking-[0.3em] uppercase text-[var(--color-cream-muted)]">
            Scrolla
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--color-terracotta)] to-transparent" />
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
