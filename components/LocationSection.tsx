import { restaurantInfo } from "@/lib/menu";
import { getAllHours } from "@/lib/hours";

export default function LocationSection() {
  const hours = getAllHours();
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${restaurantInfo.coordinates.lng - 0.006},${restaurantInfo.coordinates.lat - 0.0025},${restaurantInfo.coordinates.lng + 0.006},${restaurantInfo.coordinates.lat + 0.0025}&layer=mapnik&marker=${restaurantInfo.coordinates.lat},${restaurantInfo.coordinates.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${restaurantInfo.address}, ${restaurantInfo.postalCode} ${restaurantInfo.city}`
  )}`;

  return (
    <section id="hitta" className="relative py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-label text-[var(--color-terracotta-bright)] mb-4 text-center">
          — Kom förbi
        </div>
        <h2 className="text-display text-5xl md:text-7xl text-[var(--color-cream)] text-center mb-16">
          Hitta hit.
        </h2>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6">
          {/* Map */}
          <div className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden border border-white/10 card-glow">
            <iframe
              src={mapUrl}
              className="w-full h-full"
              style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.85) brightness(0.95)" }}
              loading="lazy"
              title="Karta över Kärna Pizzeria"
            />
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-6 btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Vägbeskrivning
            </a>
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-6">
            {/* Address card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-ink-50)] to-[var(--color-ink)] border border-white/5 card-glow">
              <div className="text-label text-[var(--color-terracotta-bright)] mb-3">Adress</div>
              <div className="font-display text-3xl text-[var(--color-cream)] leading-tight">
                {restaurantInfo.address}
              </div>
              <div className="font-display text-2xl text-[var(--color-cream-soft)] mt-1">
                {restaurantInfo.postalCode} {restaurantInfo.city}
              </div>

              <div className="divider-ornament my-6">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>

              <a
                href={`tel:${restaurantInfo.phoneFormatted}`}
                className="flex items-center gap-3 text-[var(--color-cream)] hover:text-[var(--color-terracotta-bright)] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="font-display text-xl">{restaurantInfo.phone}</span>
              </a>
            </div>

            {/* Hours card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-ink-50)] to-[var(--color-ink)] border border-white/5 card-glow">
              <div className="text-label text-[var(--color-terracotta-bright)] mb-5">Öppettider</div>
              <ul className="space-y-2.5">
                {hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-[var(--color-cream-soft)]">{row.day}</span>
                    <span className="menu-item-dots" />
                    <span className={row.hours === "Stängt" ? "text-[var(--color-cream-muted)] italic" : "font-mono text-[var(--color-cream)]"}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
