"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { restaurantInfo } from "@/lib/menu";

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

          {/* Right: SVG Pizza Illustration */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square animate-fade-in stagger-2">
              {/* Rotating glow ring */}
              <div
                className="absolute inset-0 rounded-full opacity-30 blur-3xl"
                style={{
                  background: "conic-gradient(from 0deg, var(--color-terracotta), var(--color-saffron), var(--color-tomato), var(--color-terracotta))",
                  animation: "spin 20s linear infinite",
                }}
              />
              <svg viewBox="0 0 400 400" className="relative w-full h-full drop-shadow-2xl">
                {/* Crust shadow */}
                <circle cx="200" cy="205" r="175" fill="oklch(0.08 0.02 40)" opacity="0.6" />
                {/* Crust outer */}
                <circle cx="200" cy="200" r="180" fill="oklch(0.55 0.08 55)" />
                {/* Crust inner highlight */}
                <circle cx="200" cy="200" r="175" fill="oklch(0.65 0.1 55)" />
                {/* Sauce base */}
                <circle cx="200" cy="200" r="155" fill="oklch(0.45 0.17 28)" />
                {/* Sauce texture */}
                <circle cx="200" cy="200" r="155" fill="url(#sauceGrad)" />

                <defs>
                  <radialGradient id="sauceGrad" cx="40%" cy="35%">
                    <stop offset="0%" stopColor="oklch(0.58 0.18 30)" />
                    <stop offset="100%" stopColor="oklch(0.4 0.16 25)" />
                  </radialGradient>
                </defs>

                {/* Mozzarella blobs */}
                {[
                  { cx: 150, cy: 140, r: 28 },
                  { cx: 250, cy: 160, r: 22 },
                  { cx: 180, cy: 230, r: 25 },
                  { cx: 260, cy: 250, r: 20 },
                  { cx: 140, cy: 260, r: 18 },
                  { cx: 220, cy: 120, r: 15 },
                ].map((blob, i) => (
                  <g key={i}>
                    <circle cx={blob.cx} cy={blob.cy} r={blob.r} fill="oklch(0.95 0.04 85)" />
                    <circle cx={blob.cx - blob.r * 0.3} cy={blob.cy - blob.r * 0.3} r={blob.r * 0.4} fill="oklch(0.98 0.02 85)" opacity="0.7" />
                  </g>
                ))}

                {/* Cherry tomatoes */}
                {[
                  { cx: 160, cy: 180 },
                  { cx: 240, cy: 200 },
                  { cx: 200, cy: 270 },
                  { cx: 280, cy: 180 },
                ].map((tom, i) => (
                  <g key={i}>
                    <circle cx={tom.cx} cy={tom.cy} r="12" fill="oklch(0.6 0.22 28)" />
                    <ellipse cx={tom.cx - 3} cy={tom.cy - 4} rx="3" ry="2" fill="oklch(0.85 0.15 30)" opacity="0.6" />
                  </g>
                ))}

                {/* Basil leaves */}
                {[
                  { cx: 130, cy: 200, rot: -20 },
                  { cx: 280, cy: 220, rot: 45 },
                  { cx: 210, cy: 150, rot: 80 },
                  { cx: 170, cy: 290, rot: -45 },
                ].map((leaf, i) => (
                  <g key={i} transform={`translate(${leaf.cx}, ${leaf.cy}) rotate(${leaf.rot})`}>
                    <ellipse cx="0" cy="0" rx="8" ry="16" fill="oklch(0.5 0.15 140)" />
                    <ellipse cx="-1" cy="-2" rx="5" ry="12" fill="oklch(0.6 0.17 140)" opacity="0.8" />
                    <line x1="0" y1="-14" x2="0" y2="14" stroke="oklch(0.35 0.1 140)" strokeWidth="0.5" />
                  </g>
                ))}

                {/* Steam */}
                {[0, 1, 2].map((i) => (
                  <g key={i} style={{ animation: `steam 3s ease-out ${i * 0.6}s infinite` }}>
                    <path
                      d={`M${180 + i * 20},50 Q${185 + i * 20},30 ${180 + i * 20},10`}
                      stroke="oklch(0.9 0.02 80)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.4"
                    />
                  </g>
                ))}
              </svg>
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
