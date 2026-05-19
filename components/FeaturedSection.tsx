import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/lib/menu";
import { images, imagePath } from "@/lib/images";

const FEATURED_NUMBERS = ["50", "M7", "11", "41", "M5", "20"];

export default function FeaturedSection() {
  const featured = FEATURED_NUMBERS.map((num) =>
    menuItems.find((item) => item.number === num)
  ).filter((item): item is NonNullable<typeof item> => !!item);

  return (
    <section id="signatur" className="relative py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-label text-[var(--color-terracotta-bright)] mb-4">
              — Husets favoriter
            </div>
            <h2 className="text-display text-5xl md:text-7xl text-[var(--color-cream)]">
              Sex pizzor vi
              <span className="block italic">står bakom.</span>
            </h2>
          </div>
          <Link
            href="/meny"
            className="btn-ghost self-start md:self-end"
          >
            Alla 73 pizzor
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((item, i) => {
            const photo = images.find((img) => img.menuRef === item.number);
            return (
              <article
                key={item.number}
                className="relative rounded-2xl bg-gradient-to-br from-[var(--color-ink-50)] to-[var(--color-ink)] border border-white/5 card-glow group transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {photo ? (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src={imagePath(photo.basename, "webp")}
                      alt={photo.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center justify-center px-3 py-1 rounded-full bg-[var(--color-ink)]/85 backdrop-blur-sm border border-white/10 font-display text-sm text-[var(--color-terracotta-bright)]">
                      {item.number}
                    </span>
                    {item.isNew && (
                      <span className="absolute top-3 right-3 text-[0.62rem] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full bg-[var(--color-saffron)] text-[var(--color-ink)] font-semibold">
                        Nyhet
                      </span>
                    )}
                    {item.note && !item.isNew && (
                      <span className="absolute top-3 right-3 text-[0.62rem] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full bg-[var(--color-ink)]/85 backdrop-blur-sm border border-white/10 text-[var(--color-saffron)]">
                        {item.note}
                      </span>
                    )}
                  </div>
                ) : null}

                <div className="p-8 flex-1 flex flex-col">
                  {!photo && (
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-6xl text-[var(--color-terracotta)] leading-none opacity-70 group-hover:opacity-100 transition-opacity">
                        {item.number}
                      </span>
                      {item.isNew && (
                        <span className="text-[0.62rem] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full bg-[var(--color-saffron)] text-[var(--color-ink)] font-semibold">
                          Nyhet
                        </span>
                      )}
                      {item.note && !item.isNew && (
                        <span className="text-[0.62rem] tracking-[0.25em] uppercase text-[var(--color-saffron)]">
                          {item.note}
                        </span>
                      )}
                    </div>
                  )}

                  <h3 className={`font-display text-3xl text-[var(--color-cream)] mb-3 ${photo ? "mt-1" : ""}`}>
                    {item.name}
                  </h3>

                  <p className="text-sm text-[var(--color-cream-muted)] leading-relaxed min-h-[3rem]">
                    {item.ingredients}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="font-display text-2xl text-[var(--color-saffron)]">
                      {item.price}:-
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--color-cream-muted)] group-hover:text-[var(--color-terracotta-bright)] group-hover:translate-x-1 transition-all"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
