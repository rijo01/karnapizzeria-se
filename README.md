# Kärna Pizzeria — Hemsida

Premium Next.js 16 webbplats för Kärna Pizzeria på Kärnatorget i Kungälv.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- Premium mörk/elegant design (Eataly-inspirerad)
- LocalBusiness + Restaurant JSON-LD schema
- Fullt responsiv, mobile-first
- Öppet/Stängt status i realtid via `/api/status`

## Funktioner

- **Förstasida** med hero, Dagens Lunch-sektion, signaturpizzor och karta
- **Menysida** (`/meny`) med filter, sök och alla 73 pizzor + kebab/burgare/sallader
- **Klickbart telefonnummer** överallt (sticky mobile CTA)
- **Realtidsstatus** — visar "Öppet nu" / "Öppnar imorgon kl 12" baserat på Europe/Stockholm-tid
- **SEO-optimerad** — LocalBusiness schema med alla menyobjekt, sitemap, robots, canonical URLs

## Starta lokalt

```bash
npm install
npm run dev
```

Öppna http://localhost:3000

## Build & deploy

```bash
npm run build
npm start
```

## Vercel deployment

1. Skjut till GitHub
2. Importera i Vercel
3. Sätt custom domain `karnapizzeria.se`
4. Loopia DNS:
   - A-record `@` → `76.76.21.21`
   - CNAME `www` → `cname.vercel-dns.com`

## Uppdatera meny

All meny finns i `lib/menu.ts`. Ändra, lägg till eller ta bort objekt där — allt (LocalBusiness schema, menyfilter, sökning) uppdateras automatiskt.

## Öppettider & lunch

Finns i `lib/menu.ts` under `restaurantInfo.hours` och `restaurantInfo.lunch`. Status räknas automatiskt ut i Europe/Stockholm-tidzon.
