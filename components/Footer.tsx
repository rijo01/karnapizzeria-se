import Link from "next/link";
import { restaurantInfo } from "@/lib/menu";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[var(--color-ink)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[var(--color-terracotta)] flex items-center justify-center">
                <span
                  className="font-display text-[var(--color-ink)] text-2xl font-bold leading-none"
                  style={{ transform: "translateY(-1px)" }}
                >
                  K
                </span>
              </div>
              <span className="font-display text-2xl text-[var(--color-cream)]">
                Kärna Pizzeria
              </span>
            </div>
            <p className="text-sm text-[var(--color-cream-muted)] leading-relaxed max-w-md">
              Sedan årtionden en självklar mötesplats på Kärnatorget. Handgjord pizza, kebab, hamburgare och sallader. Tack för att du stödjer lokalt.
            </p>
          </div>

          <div>
            <div className="text-label text-[var(--color-terracotta-bright)] mb-5">Kontakt</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${restaurantInfo.phoneFormatted}`}
                  className="text-[var(--color-cream)] hover:text-[var(--color-terracotta-bright)] transition-colors"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="text-[var(--color-cream-muted)]">
                {restaurantInfo.address}
                <br />
                {restaurantInfo.postalCode} {restaurantInfo.city}
              </li>
            </ul>
          </div>

          <div>
            <div className="text-label text-[var(--color-terracotta-bright)] mb-5">Navigation</div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/meny"
                  className="text-[var(--color-cream-soft)] hover:text-[var(--color-terracotta-bright)] transition-colors"
                >
                  Hela menyn
                </Link>
              </li>
              <li>
                <Link
                  href="/galleri"
                  className="text-[var(--color-cream-soft)] hover:text-[var(--color-terracotta-bright)] transition-colors"
                >
                  Galleri
                </Link>
              </li>
              <li>
                <Link
                  href="/#lunch"
                  className="text-[var(--color-cream-soft)] hover:text-[var(--color-terracotta-bright)] transition-colors"
                >
                  Dagens Lunch
                </Link>
              </li>
              <li>
                <Link
                  href="/#hitta"
                  className="text-[var(--color-cream-soft)] hover:text-[var(--color-terracotta-bright)] transition-colors"
                >
                  Hitta hit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-[var(--color-cream-muted)]">
            © {new Date().getFullYear()} {restaurantInfo.name}. Alla rättigheter förbehållna.
          </div>
          <div className="text-xs text-[var(--color-cream-muted)]">
            Handgjord pizza sedan årtionden • Kärnatorget, Kungälv
          </div>
        </div>
      </div>
    </footer>
  );
}
