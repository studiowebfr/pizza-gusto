# Médias — Pizza Gusto

## Reçus et intégrés (18/08/2026)

Fournis par le client dans un dossier `Gusto/` (photos et rushes), retraités
ici avec `ffmpeg` (recadrage ≤ 12 s, 1080p max, H.264 + VP9, poster extrait,
< 4 Mo par vidéo) et copiés dans `/public/media/`.

### Vidéos (`/public/media/video/`)

| Fichier | Utilisé dans | Poids |
|---|---|---|
| `hero.mp4` / `hero.webm` / `hero-poster.jpg` | Accueil — Hero (7.2) | ~2,3–2,9 Mo |
| `pate.mp4` / `pate.webm` / `pate-poster.jpg` | Accueil — La Pâte et la Sauce (7.5) | ~1,9–3,3 Mo |
| `sauce.mp4` / `sauce.webm` / `sauce-poster.jpg` | Accueil — La Pâte et la Sauce (7.5) | ~1–3,3 Mo |

### Photographies (`/public/media/images/`)

| Fichier | Utilisé dans |
|---|---|
| `portrait-francis-winkelmann.jpg` | Accueil — Le Champion (7.4), `/le-savoir-faire` |
| `burrata.jpg` | Accueil — Mosaïque (7.6) |
| `tartufo.jpg` | Accueil — Mosaïque (7.6) |
| `mamamia.jpg` | Accueil — Mosaïque (7.6) |
| `farine.jpg` | Accueil — Panneaux épinglés (7.7) — « La farine » |
| `paton.jpg` | Accueil — Panneaux épinglés (7.7) — « Le pâton » |
| `four.jpg` | Accueil — Panneaux épinglés (7.7) — « Le four » |
| `sortie.jpg` | Accueil — Panneaux épinglés (7.7) — « La sortie » |

## Encore manquants

Toujours sur placeholder CSS (dégradé + grain, voir `MediaFrame.tsx`) faute
d'asset dédié :

| Besoin | Utilisé dans | Plan attendu |
|---|---|---|
| Photo « La Francomtoise » | Accueil — Mosaïque (7.6) | Pizza La Francomtoise, gros plan |
| Vidéo four de nuit | Accueil — Appel final (7.10) | Le four la nuit, découpe d'une pizza |

Une fois livrés, les brancher dans le composant `<MediaFrame>` correspondant
(prop `image` pour une photo, prop `video={{ webm, mp4, poster }}` pour une
vidéo) exactement comme pour les autres sections.
