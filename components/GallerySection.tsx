import Image from "next/image";
import Link from "next/link";
import { getImage, imagePath } from "@/lib/images";

type Tile = {
  basename: string;
  className: string;
  sizes: string;
};

const TILES: Tile[] = [
  {
    basename: "calzone-bakad-rund",
    className: "md:row-span-2 md:col-span-1 aspect-[3/4] md:aspect-auto md:min-h-[640px]",
    sizes: "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw",
  },
  {
    basename: "calzone-obakad-par",
    className: "aspect-[4/5] md:min-h-[310px]",
    sizes: "(max-width: 768px) 50vw, 33vw",
  },
  {
    basename: "inbakad-oxfile",
    className: "aspect-[4/5] md:min-h-[310px]",
    sizes: "(max-width: 768px) 50vw, 33vw",
  },
  {
    basename: "calzone-bakad-fold",
    className: "aspect-[4/5] md:min-h-[310px]",
    sizes: "(max-width: 768px) 50vw, 33vw",
  },
  {
    basename: "pizza-skinka-bacon",
    className: "aspect-[4/5] md:min-h-[310px]",
    sizes: "(max-width: 768px) 50vw, 33vw",
  },
  {
    basename: "pizza-rhodos",
    className: "aspect-[4/5] md:col-span-2 md:min-h-[310px]",
    sizes: "(max-width: 768px) 50vw, 66vw",
  },
];

export default function GallerySection() {
  return (
    <section id="hantverket" className="relative py-24 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, oklch(0.68 0.17 40 / 0.4), transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="text-label text-[var(--color-terracotta-bright)] mb-4">
              — Hantverket
            </div>
            <h2 className="text-display text-5xl md:text-7xl text-[var(--color-cream)]">
              Pizza,{" "}
              <span className="italic font-light gradient-text">från grunden.</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--color-cream-muted)] leading-relaxed">
              Vi jäser degen långsamt och kavlar för hand, varje pizza. Våra inbakade
              calzoner pryds med utskurna signaturmönster — autentisk italiensk
              hantverkskänsla, här på Kärnatorget.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
          {TILES.map((tile, i) => {
            const img = getImage(tile.basename);
            if (!img) return null;
            return (
              <figure
                key={tile.basename}
                className={`relative overflow-hidden rounded-2xl bg-[var(--color-ink-50)] group animate-rise ${tile.className}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <Image
                  src={imagePath(img.basename, "webp")}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes={tile.sizes}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div
                  className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.08 0.02 40 / 0.95), oklch(0.08 0.02 40 / 0.6) 60%, transparent)",
                  }}
                >
                  <div
                    className="font-display text-base md:text-lg text-[var(--color-cream)] leading-tight"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
                  >
                    {img.caption}
                  </div>
                </div>
              </figure>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/galleri" className="btn-ghost">
            Se hela galleriet
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
