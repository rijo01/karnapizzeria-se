import { restaurantInfo } from "@/lib/menu";

export default function LunchSection() {
  return (
    <section id="lunch" className="relative py-24 md:py-40 overflow-hidden">
      {/* Warm glow backdrop */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, oklch(0.68 0.17 40 / 0.5), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Big typographic lunch offer */}
          <div>
            <div className="text-label text-[var(--color-terracotta-bright)] mb-6">
              — Dagens Lunch
            </div>

            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--color-cream)] leading-[0.9]">
              Varm mat,
              <span className="block italic font-light">lugn paus.</span>
            </h2>

            <div className="mt-10 flex items-baseline gap-3">
              <span className="text-display text-[7rem] md:text-[9rem] leading-none text-[var(--color-saffron)]">
                {restaurantInfo.lunch.price}
              </span>
              <span className="text-display text-5xl text-[var(--color-cream-muted)]">:-</span>
            </div>

            <p className="mt-8 text-lg text-[var(--color-cream-muted)] max-w-md leading-relaxed">
              Välj fritt från menyn under lunchtid. Alltid med sallad och dricka. Kom in, beställ i kassan, eller ring in din avhämtning.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-terracotta-bright)]">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-sm text-[var(--color-cream-soft)]">
                  {restaurantInfo.lunch.hours}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="text-sm text-[var(--color-cream-soft)]">
                  {restaurantInfo.lunch.includes}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Decorative card */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--color-ink-100)] to-[var(--color-ink)] border border-white/5 card-glow">
              {/* Ornamental pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  <defs>
                    <pattern id="diamonds" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path
                        d="M30,10 L50,30 L30,50 L10,30 Z"
                        fill="none"
                        stroke="var(--color-terracotta)"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="400" height="500" fill="url(#diamonds)" />
                </svg>
              </div>

              {/* Centered editorial content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="text-[0.68rem] tracking-[0.3em] uppercase text-[var(--color-terracotta-bright)] mb-8">
                  Vardagsritual
                </div>

                <div className="divider-ornament w-full max-w-[240px] mb-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 L14.5 8.5 L21 9 L16 13.5 L17.5 20 L12 16.5 L6.5 20 L8 13.5 L3 9 L9.5 8.5 Z" />
                  </svg>
                </div>

                <h3 className="font-display text-3xl md:text-4xl text-[var(--color-cream)] italic leading-tight">
                  &ldquo;Två rätter,
                  <br />
                  en hundralapp över.&rdquo;
                </h3>

                <div className="divider-ornament w-full max-w-[240px] mt-8">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                    <circle cx="5" cy="5" r="2" />
                  </svg>
                </div>

                <div className="mt-8 text-[var(--color-cream-muted)] text-sm leading-relaxed max-w-xs">
                  Hela menyn. Sallad till. Något att dricka. En stunds paus mitt i dagen.
                </div>
              </div>

              {/* Corner ornaments */}
              {[
                { top: "1rem", left: "1rem", rotate: 0 },
                { top: "1rem", right: "1rem", rotate: 90 },
                { bottom: "1rem", right: "1rem", rotate: 180 },
                { bottom: "1rem", left: "1rem", rotate: 270 },
              ].map(({ rotate, ...pos }, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-6 text-[var(--color-terracotta)]"
                  style={{ ...pos, transform: `rotate(${rotate}deg)` }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 2 L2 10 M2 2 L10 2" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
