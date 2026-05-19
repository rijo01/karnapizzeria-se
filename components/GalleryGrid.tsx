"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { galleryImages, imagePath, type PizzaImage } from "@/lib/images";

export default function GalleryGrid() {
  const [selected, setSelected] = useState<PizzaImage | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
        {galleryImages.map((img, i) => (
          <button
            key={img.basename}
            type="button"
            onClick={() => setSelected(img)}
            className="relative block w-full mb-3 md:mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-[var(--color-ink-50)] group animate-rise cursor-zoom-in"
            style={{ animationDelay: `${i * 0.05}s` }}
            aria-label={`Visa ${img.caption} i större format`}
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={imagePath(img.basename, "webp")}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.08 0.02 40 / 0.95), oklch(0.08 0.02 40 / 0.6) 60%, transparent)",
                }}
              >
                <div
                  className="font-display text-base text-[var(--color-cream)] leading-tight text-left"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
                >
                  {img.caption}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.caption}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[var(--color-cream)] backdrop-blur-sm transition-colors"
            aria-label="Stäng"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <figure
            className="relative max-w-4xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[80vh] flex items-center justify-center">
              <Image
                src={imagePath(selected.basename, "webp")}
                alt={selected.alt}
                width={1080}
                height={1440}
                priority
                sizes="(max-width: 1024px) 90vw, 1024px"
                className="max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
            <figcaption className="text-center">
              <div className="font-display text-xl md:text-2xl text-[var(--color-cream)]">
                {selected.caption}
              </div>
              <div className="mt-1 text-sm text-[var(--color-cream-muted)] max-w-xl">
                {selected.alt}
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
