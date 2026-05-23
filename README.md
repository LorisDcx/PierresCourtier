# Loris Lazulis

Site vitrine pour un service d'accompagnement indépendant pour l'achat de pierres naturelles certifiées.

## Stack technique

- **Framework** : Astro (SSG)
- **Styling** : Tailwind CSS + @tailwindcss/typography
- **Interactivité** : React (Astro Islands)
- **Contenu** : MDX pour le blog
- **Formulaire** : API Astro + Resend
- **Déploiement** : Vercel

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:4321`

## Build

```bash
npm run build
```

Les fichiers statiques seront générés dans le dossier `dist/`.

## Structure du projet

```
src/
├── components/       # Composants réutilisables
│   ├── Header.astro
│   ├── Footer.astro
│   ├── CTA.astro
│   └── ContactForm.tsx
├── content/
│   └── blog/        # Articles MDX
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── comment-je-travaille.astro
│   ├── honoraires.astro
│   ├── provenance-ethique.astro
│   ├── contact.astro
│   ├── mentions-legales.astro
│   ├── confidentialite.astro
│   └── blog/
│       ├── index.astro
│       └── [...slug].astro
public/
├── favicon.svg
└── robots.txt
```

## Déploiement sur Vercel

1. Connecter le repo à Vercel
2. Laisser Vercel détecter Astro automatiquement, ou garder l'adapter `@astrojs/vercel`
3. Configurer les variables d'environnement `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` et `CONTACT_TO_EMAIL` pour l'envoi du formulaire

## Configuration

- **Site URL** : À modifier dans `astro.config.mjs` (propriété `site`)
- **Mentions légales** : À compléter dans `src/pages/mentions-legales.astro`
- **Formulaire** : l'API de contact est exposée sur `/api/contact`

### Variables d'environnement

Copie `.env.example` en `.env` en local, puis renseigne:

- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`

Le formulaire envoie les messages vers `lorisdcx.pro@gmail.com`.

## SEO

- Sitemap automatique généré via `@astrojs/sitemap`
- Flux RSS disponible sur `/rss.xml`
- Meta tags OpenGraph sur chaque page
- `robots.txt` configuré

## Design

Le design suit une approche "quiet luxury" :
- Palette neutre et élégante (beige, pierre, blanc)
- Typographie soignée (Playfair Display pour les titres, Inter pour le corps)
- Espaces généreux
- Animations subtiles
