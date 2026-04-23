"use client";

import { useMemo, useState } from "react";
import { menuItems, categoryLabels, extras, type Category } from "@/lib/menu";

const CATEGORY_ORDER: Category[] = [
  "pizzor",
  "vegetariska",
  "skaldjur",
  "kyckling",
  "kottfars",
  "salami",
  "oxfile",
  "amerikanska",
  "kebab",
  "inbakade",
  "special",
  "hamburgare",
  "sallader",
  "kebab-falafel",
  "ovrigt",
];

const CATEGORY_SHORT: Record<Category, string> = {
  pizzor: "Klassiska",
  vegetariska: "Vegetariska",
  skaldjur: "Skaldjur",
  kyckling: "Kyckling",
  kottfars: "Köttfärs",
  salami: "Salami",
  oxfile: "Oxfilé",
  amerikanska: "Amerikanska",
  kebab: "Kebab",
  inbakade: "Inbakade",
  special: "Special",
  hamburgare: "Burgare",
  sallader: "Sallader",
  "kebab-falafel": "Kebab & Falafel",
  ovrigt: "Tilltugg",
};

export default function MenuExplorer() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchCategory = activeCategory === "all" || item.category === activeCategory;
      const matchSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.ingredients?.toLowerCase().includes(query) ||
        item.number?.toLowerCase().includes(query);
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  const grouped = useMemo(() => {
    const map = new Map<Category, typeof menuItems>();
    for (const item of filtered) {
      const arr = map.get(item.category) ?? [];
      arr.push(item);
      map.set(item.category, arr);
    }
    return CATEGORY_ORDER.map((cat) => ({
      category: cat,
      items: map.get(cat) ?? [],
    })).filter((section) => section.items.length > 0);
  }, [filtered]);

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      {/* Search + Filter bar */}
      <div className="sticky top-16 md:top-20 z-30 -mx-5 md:-mx-8 px-5 md:px-8 py-5 bg-[oklch(0.13_0.015_50/0.88)] backdrop-blur-xl border-b border-white/5">
        {/* Search */}
        <div className="relative mb-4">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--color-cream-muted)]"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Sök på namn, nummer eller ingrediens..."
            className="w-full pl-14 pr-5 py-4 rounded-full bg-white/5 border border-white/10 text-[var(--color-cream)] placeholder:text-[var(--color-cream-muted)] focus:outline-none focus:border-[var(--color-terracotta)] focus:bg-white/10 transition-all"
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-[var(--color-terracotta)] text-[var(--color-ink)]"
                : "bg-white/5 border border-white/10 text-[var(--color-cream-soft)] hover:bg-white/10"
            }`}
          >
            Hela menyn
          </button>
          {CATEGORY_ORDER.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[var(--color-terracotta)] text-[var(--color-ink)]"
                  : "bg-white/5 border border-white/10 text-[var(--color-cream-soft)] hover:bg-white/10"
              }`}
            >
              {CATEGORY_SHORT[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="py-12 md:py-16">
        {grouped.length === 0 ? (
          <div className="text-center py-20 text-[var(--color-cream-muted)]">
            <p className="text-lg">Inga rätter matchade din sökning.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-4 text-[var(--color-terracotta-bright)] underline"
            >
              Rensa filter
            </button>
          </div>
        ) : (
          grouped.map((section) => (
            <section key={section.category} className="mb-16">
              <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-white/10">
                <h2 className="font-display text-3xl md:text-5xl text-[var(--color-cream)]">
                  {categoryLabels[section.category]}
                </h2>
                <span className="text-label text-[var(--color-cream-muted)]">
                  {section.items.length} {section.items.length === 1 ? "rätt" : "rätter"}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-x-10">
                {section.items.map((item) => (
                  <div key={`${item.category}-${item.number ?? item.name}`} className="menu-item">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                          {item.number && (
                            <span className="font-mono text-sm text-[var(--color-terracotta-bright)] font-semibold">
                              {item.number}.
                            </span>
                          )}
                          <h3 className="font-display text-xl text-[var(--color-cream)]">
                            {item.name}
                          </h3>
                          {item.isNew && (
                            <span className="text-[0.58rem] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full bg-[var(--color-saffron)] text-[var(--color-ink)] font-semibold">
                              Nyhet
                            </span>
                          )}
                          {item.note && !item.isNew && (
                            <span className="text-[0.62rem] tracking-[0.18em] uppercase text-[var(--color-saffron)]">
                              {item.note}
                            </span>
                          )}
                        </div>
                        {item.ingredients && (
                          <p className="text-sm text-[var(--color-cream-muted)] leading-relaxed">
                            {item.ingredients}
                          </p>
                        )}
                      </div>
                      <div className="font-display text-xl text-[var(--color-saffron)] whitespace-nowrap">
                        {item.price}:-
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
        )}

        {/* Extras info card */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-terracotta)]/10 to-transparent border border-[var(--color-terracotta)]/20">
          <div className="text-label text-[var(--color-terracotta-bright)] mb-5">
            — Bra att veta
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {Object.values(extras).map((extra) => (
              <div key={extra.label} className="flex items-start gap-3">
                <span className="text-[var(--color-terracotta-bright)] mt-0.5">•</span>
                <div>
                  <div className="text-[var(--color-cream)] font-medium">{extra.label}</div>
                  <div className="text-[var(--color-cream-muted)]">{extra.price}</div>
                </div>
              </div>
            ))}
            <div className="flex items-start gap-3 sm:col-span-2 md:col-span-3 pt-4 border-t border-white/10">
              <span className="text-[var(--color-terracotta-bright)] mt-0.5">•</span>
              <div className="text-[var(--color-cream-muted)] italic">
                Alla pizzor innehåller tomatsås &amp; ost.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
