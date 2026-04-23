// Komplett meny för Kärna Pizzeria
// Alla pizzor innehåller tomatsås & ost

export type Category =
  | "pizzor"
  | "vegetariska"
  | "skaldjur"
  | "kyckling"
  | "kottfars"
  | "salami"
  | "oxfile"
  | "amerikanska"
  | "kebab"
  | "inbakade"
  | "special"
  | "hamburgare"
  | "sallader"
  | "kebab-falafel"
  | "ovrigt";

export interface MenuItem {
  number?: string;
  name: string;
  ingredients?: string;
  price: number;
  category: Category;
  isNew?: boolean;
  note?: string;
}

export const categoryLabels: Record<Category, string> = {
  pizzor: "Pizzor",
  vegetariska: "Vegetariska pizzor",
  skaldjur: "Skaldjurspizzor",
  kyckling: "Kycklingpizzor",
  kottfars: "Köttfärspizzor",
  salami: "Salamipizzor",
  oxfile: "Oxfilépizzor",
  amerikanska: "Amerikanska pizzor",
  kebab: "Kebabpizzor",
  inbakade: "Inbakade pizzor",
  special: "Specialpizzor",
  hamburgare: "Hamburgare",
  sallader: "Sallader",
  "kebab-falafel": "Kebab, Falafel, Kyckling",
  ovrigt: "Övrigt",
};

export const menuItems: MenuItem[] = [
  // KLASSISKA PIZZOR
  { number: "1", name: "Margarita", ingredients: "tomatsås, ost", price: 110, category: "pizzor" },
  { number: "2", name: "Vesuvio", ingredients: "skinka", price: 120, category: "pizzor" },
  { number: "3", name: "Cappricciosa", ingredients: "skinka, champinjoner", price: 125, category: "pizzor" },
  { number: "4", name: "Laguna", ingredients: "skinka, räkor", price: 125, category: "pizzor" },
  { number: "5", name: "Rambo", ingredients: "skinka, ananas, banan, curry", price: 125, category: "pizzor" },
  { number: "6", name: "Skiathos", ingredients: "skinka, köttfärs", price: 125, category: "pizzor" },
  { number: "7", name: "Bahamas", ingredients: "skinka, räkor, ananas", price: 130, category: "pizzor" },
  { number: "8", name: "Bambino", ingredients: "skinka, champinjoner, ananas", price: 130, category: "pizzor" },
  { number: "9", name: "Hawaii", ingredients: "skinka, ananas", price: 125, category: "pizzor" },

  // VEGETARISKA
  { number: "10", name: "Cavolo", ingredients: "creme fraiche, haloumi, champinjoner, grönkål, rödlök, citron", price: 140, category: "vegetariska", isNew: true },
  { number: "11", name: "Mykonos", ingredients: "creme fraiche, grönkål, fetaost, valnötter, honung, ruccola, balsamico", price: 140, category: "vegetariska", isNew: true },
  { number: "12", name: "Gamberetto", ingredients: "creme fraiche, mozzarella, räkor, kräftskjärtar, sparris, citron", price: 140, category: "vegetariska", isNew: true },
  { number: "13", name: "Vegetariana", ingredients: "paprika, oliver, sparris, champinjoner, kronärtskocka, lök", price: 130, category: "vegetariska" },
  { number: "14", name: "Afrodite", ingredients: "färska tomater, fetaost, vitlök", price: 120, category: "vegetariska" },
  { number: "15", name: "Akropolis", ingredients: "champinjoner, lök, isbergssallad, färska tomater, gurka, tzatziki", price: 130, category: "vegetariska" },
  { number: "16", name: "El Greco", ingredients: "lök, färska tomater, oliver, pepperoni, fetaost", price: 130, category: "vegetariska" },
  { number: "17", name: "Mozzarella", ingredients: "mozzarella, champinjoner, färska tomater, vitlök", price: 130, category: "vegetariska" },
  { number: "18", name: "Jojo", ingredients: "mozzarella, fetaost, gorgonzola, färska tomater", price: 130, category: "vegetariska" },

  // SKALDJUR
  { number: "19", name: "Quattro Fisk", ingredients: "räkor, tonfisk, krabba, musslor", price: 140, category: "skaldjur" },
  { number: "20", name: "Besha Special", ingredients: "kräftskjärtar, tonfisk, färska tomater, vitlök, jalapeño", price: 140, category: "skaldjur" },
  { number: "21", name: "Pescatore", ingredients: "räkor, tonfisk", price: 125, category: "skaldjur" },
  { number: "22", name: "Marinara", ingredients: "räkor, musslor", price: 125, category: "skaldjur" },
  { number: "23", name: "Quattro Stagioni", ingredients: "skinka, champinjoner, räkor, kronärtskocka", price: 135, category: "skaldjur" },
  { number: "24", name: "Milano", ingredients: "kräftskjärtar, ananas, banan, vitlökssås", price: 130, category: "skaldjur" },

  // KYCKLING
  { number: "25", name: "Galini", ingredients: "kyckling, banan, jordnötter, curry", price: 135, category: "kyckling" },
  { number: "26", name: "Viking", ingredients: "kyckling, pommes, valfri sås", price: 145, category: "kyckling" },
  { number: "27", name: "Roma", ingredients: "kyckling, isbergssallad, fetaost, färska tomater, lök, gurka, valfri sås", price: 145, category: "kyckling" },

  // KÖTTFÄRS
  { number: "28", name: "Milos", ingredients: "köttfärs, lök, vitlök, fetaost, färska tomater, valfri sås", price: 140, category: "kottfars" },
  { number: "29", name: "Kojak", ingredients: "köttfärs, lök, gorgonzola", price: 130, category: "kottfars" },
  { number: "30", name: "Naxos", ingredients: "skinka, champinjoner, köttfärs, bacon, bearnaisesås, vitlök", price: 145, category: "kottfars" },
  { number: "31", name: "Rhodos", ingredients: "köttfärs, fetaost, lök, vitlök, färska tomater, isbergssallad, gurka, kebabsås", price: 145, category: "kottfars" },
  { number: "32", name: "Figaro", ingredients: "köttfärs, lök, salami, bacon", price: 140, category: "kottfars" },
  { number: "33", name: "Verdi", ingredients: "skinka, köttfärs, champinjoner, jalapeño, tabasco", price: 140, category: "kottfars" },
  { number: "34", name: "Mexicana", ingredients: "köttfärs, lök, paprika, jalapeño, tabasco", price: 135, category: "kottfars" },
  { number: "35", name: "Porti", ingredients: "köttfärs, bacon, lök, färska tomater", price: 135, category: "kottfars" },
  { number: "36", name: "Arina", ingredients: "köttfärs, ananas, bananer, jordnötter, curry", price: 135, category: "kottfars" },

  // SALAMI
  { number: "37", name: "Terni", ingredients: "skinka, salami, köttfärs, champinjoner, mozzarella", price: 145, category: "salami" },
  { number: "38", name: "Salami Special", ingredients: "salami, mozzarella, färska tomater, gorgonzola", price: 140, category: "salami" },
  { number: "39", name: "Salami", ingredients: "salami, tomat, lök, champinjoner, mozzarella", price: 140, category: "salami" },
  { number: "40", name: "Olympos", ingredients: "salami, fetaost, oliver, pepperoni", price: 140, category: "salami" },

  // OXFILÉ
  { number: "41", name: "Reale", ingredients: "oxfilé, ägg, bearnaisesås", price: 150, category: "oxfile" },
  { number: "42", name: "Lazio", ingredients: "oxfilé, lök, champinjoner, tomat, mozzarella", price: 150, category: "oxfile" },
  { number: "43", name: "Classic", ingredients: "oxfilé, skinka, lök, paprika, bearnaisesås", price: 150, category: "oxfile" },
  { number: "44", name: "Maffia", ingredients: "oxfilé, skinka, räkor", price: 150, category: "oxfile" },
  { number: "45", name: "Kreta", ingredients: "oxfilé, köttfärs, skinka, bacon, champinjoner, valfri sås", price: 150, category: "oxfile" },
  { number: "46", name: "Portobello", ingredients: "oxfilé, champinjoner, sparris, gorgonzola", price: 150, category: "oxfile" },
  { number: "47", name: "Campino", ingredients: "oxfilé, lök, paprika, färska tomater", price: 150, category: "oxfile" },
  { number: "48", name: "Stallone", ingredients: "oxfilé, champinjoner, bearnaisesås", price: 150, category: "oxfile" },
  { number: "49", name: "Africana", ingredients: "oxfilé, banan, ananas, jordnötter, curry", price: 150, category: "oxfile" },
  { number: "50", name: "Kärna", ingredients: "oxfilé, köttfärs, kräftskjärtar, jalapeño, tabasco", price: 150, category: "oxfile", note: "Husets signatur" },

  // AMERIKANSKA (dubbelbotten)
  { number: "51", name: "Florida", ingredients: "kebab, tomat, lök, pepperoni, mozzarella, valfri sås", price: 160, category: "amerikanska" },
  { number: "52", name: "New York", ingredients: "paprika, tomat, oliver, lök, champinjoner, mozzarella", price: 160, category: "amerikanska" },
  { number: "53", name: "Texas", ingredients: "kyckling, champinjoner, lök, pepperoni, mozzarella", price: 160, category: "amerikanska" },
  { number: "54", name: "Dallas", ingredients: "salami, köttfärs, lök, paprika, mozzarella", price: 160, category: "amerikanska" },

  // KEBAB
  { number: "55", name: "Gyros", ingredients: "kebabkött, isbergssallad, färska tomater, gurka, valfri sås", price: 145, category: "kebab" },
  { number: "56", name: "Kebab Special", ingredients: "kebabkött, lök, färska tomater, fetaost, tzatziki", price: 145, category: "kebab" },
  { number: "57", name: "Cosmos", ingredients: "kebabkött, salami, gorgonzola, pepperoni, vitlökssås", price: 145, category: "kebab" },
  { number: "58", name: "Kebabpizza", ingredients: "kebabkött, färska tomater, pepperoni, valfri sås", price: 145, category: "kebab" },
  { number: "59", name: "Vampira", ingredients: "skinka, bacon, kebabkött, pepperoni, valfri sås", price: 145, category: "kebab" },
  { number: "60", name: "Palermo", ingredients: "kebabkött, pommes, valfri sås", price: 145, category: "kebab" },

  // INBAKADE
  { number: "61", name: "Disco", ingredients: "skinka, oxfilé, mozzarella, lök, champinjoner", price: 160, category: "inbakade", note: "Dubbelinbakad" },
  { number: "62", name: "Calzone", ingredients: "skinka", price: 120, category: "inbakade" },
  { number: "63", name: "Ciao Ciao", ingredients: "oxfilé, champinjoner, bearnaisesås", price: 150, category: "inbakade" },
  { number: "64", name: "Mare", ingredients: "oxfilé, gorgonzola, lök, vitlök", price: 150, category: "inbakade" },
  { number: "65", name: "Halvinbakad", ingredients: "oxfilé, champinjoner, lök, bearnaisesås", price: 150, category: "inbakade" },

  // SPECIAL (M-serien)
  { number: "M1", name: "Parmaskinka Classica", ingredients: "mozzarellaost, parmaskinka, färsk vitlök, ruccola, pesto", price: 140, category: "special" },
  { number: "M2", name: "Parma & Köttfärs", ingredients: "mozzarellaost, parmaskinka, köttfärs, lök, ruccola, pesto", price: 150, category: "special" },
  { number: "M3", name: "Parma & Oxfilé", ingredients: "mozzarellaost, parmaskinka, oxfilé, färsk vitlök, ruccola, pesto", price: 150, category: "special" },
  { number: "M4", name: "Vegetariana Speciale", ingredients: "mozzarellaost, champinjoner, tomat, paprika, fetaost, ruccola, pesto", price: 140, category: "special" },
  { number: "M5", name: "Grönkål & Honung", ingredients: "creme fraiche, mozzarella, grönkål, fetaost, färsk basilika, valnötter, honung", price: 150, category: "special", isNew: true },
  { number: "M6", name: "Parma Tartufo", ingredients: "creme fraiche, mozzarella, soltorkade tomater, parmaskinka, ruccola, pesto", price: 150, category: "special", isNew: true },
  { number: "M7", name: "Chèvre Dolce", ingredients: "mozzarella, chèvreost, parmaskinka, färsk basilika, valnötter, honung", price: 150, category: "special", isNew: true },
  { number: "M8", name: "Parma Fresca", ingredients: "mozzarella, färska tomater, paprika, färsk vitlök, parmaskinka", price: 150, category: "special", isNew: true },

  // HAMBURGARE
  { name: "Hamburgare med bröd (90g)", price: 70, category: "hamburgare" },
  { name: "Hamburgare med bröd (150g)", price: 95, category: "hamburgare" },
  { name: "Ostburgare med bröd (90g)", price: 75, category: "hamburgare" },
  { name: "Ostburgare med bröd (150g)", price: 100, category: "hamburgare" },
  { name: "Hamburgartallrik (90g)", price: 110, category: "hamburgare" },
  { name: "Hamburgartallrik (150g)", price: 130, category: "hamburgare" },
  { name: "Ostburgartallrik (90g)", price: 120, category: "hamburgare" },
  { name: "Ostburgartallrik (150g)", price: 135, category: "hamburgare" },
  { name: "Mexicanaburgartallrik (90g)", ingredients: "stark", price: 120, category: "hamburgare" },
  { name: "Mexicanaburgartallrik (150g)", ingredients: "stark", price: 135, category: "hamburgare" },

  // SALLADER
  { name: "Kycklingsallad", ingredients: "kyckling, isbergssallad, tomat, gurka, lök, ananas, valfri sås", price: 135, category: "sallader" },
  { name: "Räksallad", ingredients: "räkor, isbergssallad, tomat, gurka, lök, ananas, citron, soltorkade tomater, valfri sås", price: 135, category: "sallader" },
  { name: "Amerikansk Sallad", ingredients: "skinka, ost, ananas, isbergssallad, tomat, gurka, paprika, valfri sås", price: 135, category: "sallader" },
  { name: "Grekisk Sallad", ingredients: "isbergssallad, tomat, gurka, soltorkade tomater, fetaost, oliver, paprika, lök, valfri sås", price: 135, category: "sallader" },
  { name: "Kebabsallad", ingredients: "kebabkött, isbergssallad, tomat, gurka, lök, pepperoni, valfri sås", price: 135, category: "sallader" },
  { name: "Tonfisksallad", ingredients: "tonfisk, isbergssallad, tomat, gurka, lök, citron, ananas, valfri sås", price: 135, category: "sallader" },

  // KEBAB, FALAFEL, KYCKLING
  { name: "Kebabtallrik med pommes", ingredients: "isbergssallad, tomat, lök, pepperoni, valfri sås", price: 135, category: "kebab-falafel" },
  { name: "Kycklingtallrik med pommes", ingredients: "isbergssallad, tomat, lök, pepperoni, valfri sås", price: 135, category: "kebab-falafel" },
  { name: "Falafeltallrik med pommes", ingredients: "isbergssallad, tomat, lök, pepperoni, valfri sås", price: 120, category: "kebab-falafel" },
  { name: "Kebabrulle", ingredients: "isbergssallad, tomat, lök, pepperoni, valfri sås", price: 135, category: "kebab-falafel" },
  { name: "Kycklingrulle", ingredients: "isbergssallad, tomat, lök, pepperoni, valfri sås", price: 135, category: "kebab-falafel" },
  { name: "Falafelrulle", ingredients: "isbergssallad, tomat, lök, pepperoni, valfri sås", price: 110, category: "kebab-falafel" },
  { name: "Kebab i Pitabröd", ingredients: "isbergssallad, tomat, lök, pepperoni, valfri sås", price: 120, category: "kebab-falafel" },
  { name: "Kyckling i Pitabröd", ingredients: "isbergssallad, tomat, lök, pepperoni, valfri sås", price: 120, category: "kebab-falafel" },
  { name: "Falafel i Pitabröd", ingredients: "isbergssallad, tomat, lök, pepperoni, valfri sås", price: 100, category: "kebab-falafel" },
  { name: "Grekisk Kebabrulle", ingredients: "fetost, tzatziki", price: 140, category: "kebab-falafel" },
  { name: "Lasagne", ingredients: "sallad, tzatziki", price: 130, category: "kebab-falafel" },

  // ÖVRIGT
  { name: "Chicken Nuggets (6 st)", price: 49, category: "ovrigt", isNew: true },
  { name: "Kycklingvingar (5 st)", price: 49, category: "ovrigt", isNew: true },
  { name: "Chilicheese (6 st)", price: 49, category: "ovrigt", isNew: true },
  { name: "Lökringar (6 st)", price: 49, category: "ovrigt", isNew: true },
  { name: "Mozzarella Sticks (5 st)", price: 49, category: "ovrigt", isNew: true },
  { name: "Pommes Tallrik", price: 49, category: "ovrigt", isNew: true },
];

export const extras = {
  gluten: { label: "Glutenfria pizzor", price: "+30 kr" },
  barn: { label: "Barnpizzor", price: "-15 kr" },
  familj: { label: "Familjepizzor", price: "Dubbelt pris +10 kr" },
  fetaost: { label: "Extra fetaost eller grönsaker", price: "+10 kr" },
  kott: { label: "Extra kött", price: "+15 kr" },
};

export const restaurantInfo = {
  name: "Kärna Pizzeria",
  phone: "0303-22 12 88",
  phoneFormatted: "+46303221288",
  address: "Kärnatorget 1",
  postalCode: "442 70",
  city: "Kärna",
  region: "Västra Götaland",
  country: "SE",
  coordinates: {
    // Kärnatorget 1, 442 70 Kärna
    lat: 57.8736,
    lng: 11.8694,
  },
  hours: {
    // Tisdag-Söndag 12:00-21:00, Måndag stängt
    mon: null,
    tue: { open: "12:00", close: "21:00" },
    wed: { open: "12:00", close: "21:00" },
    thu: { open: "12:00", close: "21:00" },
    fri: { open: "12:00", close: "21:00" },
    sat: { open: "12:00", close: "21:00" },
    sun: { open: "12:00", close: "21:00" },
  },
  lunch: {
    price: 130,
    hours: "12:00 – 15:00",
    includes: "Inkl. dricka & sallad",
  },
  social: {
    facebook: "Kärnapizzeria",
    instagram: "karnapizzeria",
  },
};
