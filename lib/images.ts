// Auto-generated metadata for Kärna Pizzeria photography
// 9 real photos of pizzas and calzones — all 720x960px

export interface PizzaImage {
  basename: string;
  alt: string;
  caption: string;
  category: "calzone-bakad" | "calzone-obakad" | "pizza-obakad";
  menuRef?: string; // Menu number this image matches
  featured?: boolean; // Use in hero/featured sections
}

export const images: PizzaImage[] = [
  {
    basename: "calzone-bakad-rund",
    alt: "Färdigbakad rund inbakad pizza med vacker bruning och dekorativt deg-mönster — Kärna Pizzeria",
    caption: "Inbakad pizza, signaturmönster",
    category: "calzone-bakad",
    menuRef: "61",
    featured: true,
  },
  {
    basename: "calzone-bakad-fold",
    alt: "Bakad calzone hopfälld med utskuret deg-mönster och gyllenbrun yta — handgjord på Kärna Pizzeria",
    caption: "Calzone, hopfälld",
    category: "calzone-bakad",
    menuRef: "62",
    featured: true,
  },
  {
    basename: "calzone-obakad-par",
    alt: "Två obakade calzoner med blad-mönster i degen, redo för ugnen — Kärna Pizzeria",
    caption: "Två calzoner, redo för ugnen",
    category: "calzone-obakad",
    featured: true,
  },
  {
    basename: "inbakad-oxfile",
    alt: "Öppen inbakad pizza med oxfilé, svamp och rödlök, redo för ugnen — Kärna Pizzeria",
    caption: "Halvinbakad oxfilé",
    category: "calzone-obakad",
    menuRef: "65",
    featured: true,
  },
  {
    basename: "pizza-rhodos",
    alt: "Pizza Rhodos med köttfärs, fetaost, rödlök och färska tomater — Kärna Pizzeria",
    caption: "Rhodos — köttfärs & fetaost",
    category: "pizza-obakad",
    menuRef: "31",
  },
  {
    basename: "pizza-skinka-bacon",
    alt: "Pizza Kreta med skinka, bacon, oxfilé, köttfärs och champinjoner — Kärna Pizzeria",
    caption: "Kreta — köttkärlekens pizza",
    category: "pizza-obakad",
    menuRef: "45",
  },
  {
    basename: "pizza-bacon-tomat",
    alt: "Pizza Porti med köttfärs, bacon, lök och färska tomater — Kärna Pizzeria",
    caption: "Porti — bacon & färsk tomat",
    category: "pizza-obakad",
    menuRef: "35",
  },
  {
    basename: "pizza-arina",
    alt: "Pizza Arina med köttfärs, ananas, banan, jordnötter och curry — Kärna Pizzeria",
    caption: "Arina — sötsaltigt med curry",
    category: "pizza-obakad",
    menuRef: "36",
  },
  {
    basename: "pizza-africana",
    alt: "Pizza Africana med oxfilé, banan, ananas, jordnötter och curry — Kärna Pizzeria",
    caption: "Africana — oxfilé & curry",
    category: "pizza-obakad",
    menuRef: "49",
  },
];

// Helpers
export const getImage = (basename: string) => images.find((i) => i.basename === basename);

export const heroImage = images.find((i) => i.basename === "calzone-bakad-rund")!;

export const featuredImages = images.filter((i) => i.featured);

export const galleryImages = images;

// Generate image paths for next/image
export const imagePath = (basename: string, ext: "webp" | "jpg" = "webp") =>
  `/images/${basename}.${ext}`;
