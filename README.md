# Pizza Gusto — site web

Refonte du site de Pizza Gusto (Besançon), Next.js 16 (App Router) + TypeScript +
Tailwind CSS v4 + GSAP/ScrollTrigger + Lenis + Framer Motion. Direction
artistique et contexte complet dans [`BRIEF.md`](./BRIEF.md).

## Installation

```bash
npm install
cp .env.local.example .env.local   # puis renseigner RESEND_API_KEY / CONTACT_EMAIL_TO
npm run dev
```

Le site tourne sur `http://localhost:3000`.

## Mettre à jour la carte et les prix

Tout le contenu de la carte gourmande vit dans un seul fichier typé :
[`src/content/carte.ts`](./src/content/carte.ts). Modifier un prix ou une
composition ne nécessite jamais d'ouvrir un composant :

```ts
{ nom: "Reine", composition: "…", prix: { petite: 12, grande: 13 } }
```

- `prix.petite: null` → la pizza ne se fait qu'en grande taille (le composant
  `MenuBoard` l'affiche automatiquement sans colonne petite).
- `mention` → texte court affiché en évidence (ex. « ne se fait pas en duo »).
- `allergene` → affiché à côté de la mention.
- Penser à mettre à jour `dateReleve` à chaque relevé de prix — la page
  `/la-carte` l'affiche automatiquement.

Les autres cartes suivent le même principe dans leurs fichiers dédiés :
`src/content/carte-sans-porc.ts`, `src/content/formules.ts`,
`src/content/lasagnes-et-salades.ts`.

Les horaires et les informations générales (téléphone, adresse, moyens de
paiement, titres du champion, mentions légales) vivent dans
`src/content/site.ts`.

## Remplacer les médias

Aucune photo ou vidéo n'est intégrée pour l'instant : toutes les zones média
utilisent un placeholder CSS (dégradé + grain). La liste précise des assets
attendus (nom de fichier, ratio, durée, poids max) est dans
[`public/media/README.md`](./public/media/README.md). Une fois un asset
livré, le brancher dans l'appel `<MediaFrame video={{ webm, mp4, poster }} />`
correspondant.

## Points en attente (`[[À COMPLÉTER]]` / `[[À VÉRIFIER]]`)

Voir la liste complète en fin de `BRIEF.md` (Phase 0) et les commentaires
`[[À COMPLÉTER]]` / `[[À VÉRIFIER]]` dans `src/content/site.ts` et
`src/content/carte.ts` — notamment : dates/catégories des titres du champion,
choix de la Pizza du mois, SIRET/RCS/TVA de la société, moyens de paiement
CB/espèces.

## Déploiement (Vercel)

```bash
npm run build   # vérifie le build en local avant de pousser
```

1. Connecter le dépôt à Vercel (ou `vercel` en CLI).
2. Renseigner les variables d'environnement `RESEND_API_KEY` et
   `CONTACT_EMAIL_TO` dans les réglages du projet Vercel.
3. Déployer — les redirections 301 depuis les anciennes URLs (`next.config.ts`)
   et le sitemap (`src/app/sitemap.ts`) sont pris en compte automatiquement.

## Qualité

```bash
npm run lint        # ESLint
npx tsc --noEmit     # vérification des types
npm run build        # build de production
```

Cible Lighthouse : Performance ≥ 90 (mobile), Accessibilité 100. Vérifier en
particulier le contraste or/noir sur tout nouveau texte (voir `BRIEF.md`,
section Qualité).
