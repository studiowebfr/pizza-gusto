# PROMPT — Refonte site web « Pizza Gusto » (Besançon)

Copie/colle l'intégralité de ce fichier dans Claude Code (VS Code) comme premier message.
Conseil : place aussi ce fichier à la racine du projet sous le nom `BRIEF.md` et dis à Claude « suis BRIEF.md ».

---

## 0. RÔLE

Tu es directeur artistique + développeur front-end senior dans un studio parisien qui conçoit des sites pour la haute gastronomie et les artisans d'exception. Le client a déjà un site — daté de 2014, en template — et il vaut infiniment mieux que ça : **son pizzaïolo est champion du monde**. Le site actuel n'en dit presque rien.

Chaque décision de couleur, typo, rythme et animation doit être justifiable.

Ce site doit donner l'impression d'un projet facturé 30 000 € : lent à charger l'attention, dense en détails, silencieux dans son luxe. Jamais clinquant. Jamais générique. **Et jamais « pizzeria » au sens fast-food** : ici, la pizza est un métier de compétition.

---

## 1. LE CLIENT (données réelles — à respecter au mot près)

**Pizza Gusto** — pizzeria artisanale, vente à emporter. Devise affichée : *Il Valore Della Tradizione*. Signature commerciale : *Tradizione e Qualità*.

| Donnée | Valeur |
|---|---|
| Adresse | Place Leclerc, 7 rue Voirin, 25000 Besançon |
| Téléphone | 03 81 81 61 17 |
| Artisan | Francis Winkelmann, pizzaïolo |
| Titres revendiqués | Champion du Monde, Champion d'Europe, Champion de France |
| Formation | Instruit par les écoles italiennes, techniques boulangères |
| Concours annuels | Championnats du monde (Parme, Italie), Championnats de France, France Pizza Tour |
| Moyens de paiement | Ticket Restaurant, Chèque Déjeuner (+ `[[À COMPLÉTER : CB, espèces ?]]`) |
| Fidélité | 10 pizzas achetées, la 11ᵉ offerte — celle de votre choix, la plus chère de la commande |
| Service | Vente à emporter uniquement. **Aucune commande en ligne, aucune livraison.** |

**Horaires** (à afficher tels quels, avec état « ouvert / fermé » calculé en direct, fuseau Europe/Paris) :

```
Lundi     — Fermé
Mardi     — 11:00 – 14:00 et 18:00 – 22:00
Mercredi  — 11:00 – 14:00 et 18:00 – 22:00
Jeudi     — 11:00 – 14:00 et 18:00 – 22:00
Vendredi  — 11:00 – 14:00 et 18:00 – 22:00
Samedi    — 11:00 – 14:00 et 18:00 – 22:00
Dimanche  — Fermé
```

Le site actuel annonce « OUVERT 5j/7 » : c'est exact, conserve la formule.

**Presse** : l'Est Républicain a consacré plusieurs articles à la maison (« Meilleur pizzaïolo d'Europe », « Pâte italienne, saveurs françaises », « Pizza au caviar »). `[[À COMPLÉTER : dates et liens exacts des articles]]`.

**Points de vigilance à me remonter dans le rapport de Phase 0 :**

1. Les titres de champion ne sont datés nulle part et la catégorie n'est pas précisée. `[[À VÉRIFIER : année et intitulé exact de chaque titre]]`. **Tu affiches les titres tels que le client les revendique, sans en ajouter, sans les traduire en « étoilé » ou en « meilleur pizzaïolo » — cette dernière formule est un titre de presse, pas une distinction.**
2. La « Pizza du mois — Saveurs d'été » a **deux compositions différentes** selon la page du site actuel (l'une au poulet mariné et chorizo, l'autre à la crème de carotte et au chèvre). Une seule est bonne. `[[À VÉRIFIER]]` — n'en choisis aucune, mets les deux en attente.
3. Aucune mention légale société n'est publiée (raison sociale, SIRET, RCS, TVA, directeur de publication, hébergeur) → tous `[[À COMPLÉTER]]`. C'est une obligation.

---

## 2. TEXTES SOURCES (à réutiliser, tu peux réécrire pour élever le ton — voir §9)

**Savoir-faire**
« Instruit par les écoles italiennes, Francis Winkelmann utilise les techniques boulangères qui font les grandes pizzas italiennes. »
« Pizza Gusto a pour objectif de conserver la grande tradition de la pizza — *il valore della tradizione* — en travaillant avec les meilleures farines italiennes. »
« Afin de faire reconnaître le savoir-faire Pizza Gusto, Francis Winkelmann participe chaque année aux prestigieux concours suivants : Championnats du monde à Parme, Championnats de France, France Pizza Tour. »

**Cartes**
« Succulentes recettes de pizza préparées avec la pâte et la sauce "Gusto". »
« Découvrez l'esprit *street pizza* avec les sandwich pizza. »
« Notre carte des pizzas sans porc avec viande Halal. »

**La pâte et la sauce « Gusto »** sont la signature maison : elles reviennent dans presque chaque description de pizza. C'est un actif de marque, traite-le comme tel.

---

## 3. RÉFÉRENCE VISUELLE — ce qu'on garde, ce qu'on transpose

Même parti pris que le projet Saint-Pierre : fond noir profond, photographie produit en très gros plan, composition en couches, typographie manuscrite mêlée à un display massif, badges circulaires estampillés, sections plein écran qui se chevauchent.

**On GARDE :**

- L'obscurité totale comme base — le noir est la sole du four, la photo est la pizza.
- La photographie alimentaire en très gros plan, texturée : la croûte, l'alvéolage, la brûlure de la flamme, la mozzarella qui file.
- Le mélange typographique : un script manuscrit fin + un display puissant sur la même ligne.
- Les badges circulaires estampillés — ici pour les titres de champion, et c'est leur emploi le plus légitime possible.
- Les sections superposées, les images qui débordent de leur grille, le mille-feuille de plans.
- La densité : chaque écran raconte quelque chose.

**On TRANSPOSE (important) :**

- Tout le vocabulaire pizzeria doit disparaître : pas de rouge-blanc-vert, pas de drapeau italien, pas de nappe à carreaux, pas de silhouette de chef moustachu, pas de four en pierre dessiné en icône. Ce sont les codes du secteur, et ils écrasent le titre mondial sous la banalité.
- L'or n'est pas décoratif : **c'est la médaille.** Il apparaît sur les titres de champion, les prix, les filets. Nulle part ailleurs.
- Les prix ne sont pas des arguments promotionnels : ils sont composés comme dans une carte de restaurant, en or, alignés, jamais dans une pastille ni un badge « à partir de ».
- L'offre de fidélité (11ᵉ pizza offerte) est réelle et intéressante, mais elle ne doit **jamais** ressembler à une promotion de chaîne. Traitement typographique sobre, en fin de page carte.
- Le grain/la texture de la référence devient : farine en suspension, semoule sur le marbre, cendre de sole, huile qui capte la lumière.

---

## 4. DIRECTION ARTISTIQUE

### Palette (tokens CSS, identique au projet Saint-Pierre)

```css
--noir-ardoise    #0B0C0E   /* fond principal, presque noir bleuté */
--noir-fumee      #14161A   /* surfaces surélevées, cartes */
--or-patine       #B98A48   /* accent principal — filets, prix, hover */
--or-clair        #E4C08A   /* accent lumineux — titres accentués, sceaux */
--ivoire          #EDE7DC   /* texte principal */
--gris-perle      #8C8880   /* texte secondaire, légendes */
--braise          #8C4A2F   /* accent chaud rare — flamme, croûte brûlée */
```

Ratio d'usage : **80 % noir, 15 % ivoire, 5 % or.** L'or est un événement, pas une décoration.
Le `--braise` remplace le `--nacre` du Saint-Pierre : il n'apparaît que 2 ou 3 fois sur tout le site, dans la section four et la section pâte. Il ne doit jamais devenir « le rouge de la pizzeria ».

### Typographie

- **Display** : une serif à fort contraste et empattements fins — *Bodoni Moda* (née à Parme, ville des championnats du monde : la justification est réelle, mentionne-la) ou *Cormorant Garamond*. Très grande taille (`clamp` jusqu'à 12rem), `letter-spacing` légèrement négatif.
- **Script** : *Petit Formal Script* ou *Mrs Saint Delafield* — uniquement pour des mots isolés posés en surimpression sur le display (« champion du monde », « la pâte », « depuis Parme »). Jamais plus de 3 mots.
- **Corps / utilitaire** : *Jost* ou *Archivo* en 300/400, `letter-spacing: 0.08em` en majuscules pour les eyebrows et les labels de navigation.

Échelle typographique stricte, définie en tokens. Les eyebrows sont en petites capitales espacées, précédées d'un filet or de 24 px.

**Les noms italiens de la carte sont de la typographie, pas du texte de liste** : *Mamamia*, *Zucchina*, *Carciofo*, *Tartufo*, *La Francomtoise*. Traite-les grand.

### Signature du site (l'élément dont on se souvient)

**Le cercle.** Un disque or de 1 px de contour traverse toute la page du haut vers le bas du scroll. Il change de nature à chaque section sans jamais se rompre : il est d'abord la bouche du four, puis le pâton, puis la pizza, puis le sceau de champion, puis le cadran des horaires, et il se referme en un point sur le bouton d'appel final.

C'est la forme fondatrice du métier — le pâton, la pizza, la médaille sont tous des cercles. Toute la hardiesse du design part dans cet élément. Le reste doit rester discipliné.

Il se fige (cercle parfait, statique) si `prefers-reduced-motion` est actif.

---

## 5. STACK TECHNIQUE

```
Next.js 15 (App Router) + TypeScript strict
Tailwind CSS v4 (tokens via @theme, PAS de couleurs arbitraires inline)
GSAP 3 + ScrollTrigger        → scroll orchestré, pinning, timelines
Lenis                          → smooth scroll (lerp 0.08)
Framer Motion                  → transitions de page, micro-interactions
next/image + next/font
Zod + React Hook Form          → formulaire de contact validé
Route Handler /api/contact     → envoi mail (Resend, clé en .env.local)
```

Pas de CMS pour la v1 : tout le contenu vit dans `/content/*.ts` typé, prêt à être branché plus tard sur un headless CMS. Aucune librairie de composants (pas de shadcn, pas de MUI) — tout est écrit à la main.

**`/content/carte.ts` est le fichier le plus important du projet** : une soixantaine de pizzas, deux tailles, six familles. Il est typé, commenté en français, et structuré pour qu'un changement de prix ne demande jamais d'ouvrir un composant.

---

## 6. ARCHITECTURE DES PAGES

```
/                       Accueil
/le-savoir-faire        Francis Winkelmann, les écoles italiennes, les concours
/la-carte               Carte gourmande complète (le cœur du site)
/formules-et-menus      Formules déjeuner, Sand'zza, pizzas Plaque, Ciabatta
/lasagnes-et-salades    Lasagnes et salades composées
/carte-sans-porc        Carte sans porc, viande halal
/nous-trouver           Plan d'accès, horaires, contact, commande par téléphone
/mentions-legales  /vie-privee  /cookies
```

**Redirections 301 depuis les anciennes URLs** dans `next.config.ts` — le site actuel est indexé depuis 2014, ce SEO ne doit pas être perdu :
`/index.html`, `/carte-pizza.html`, `/menus.html`, `/sandwich-pizza.html`, `/pizza-plaque.html`, `/menus-lasagnes-salades.html`, `/ciabatta.html`, `/pizza-sans-porc.html`, `/savoir-faire.html`, `/plan.html`, `/contact.html`, `/infos.html`, `/mentions.html`, `/pizza-caviar.html`, `/article-est-republicain-2.html`, `/article-est-republicain-3.html`.

---

## 7. DÉTAIL DES SECTIONS — PAGE D'ACCUEIL

### 7.1 Préchargeur (2,2 s max, une seule fois par session via `sessionStorage`)
Fond noir. Le mot « GUSTO » se compose lettre par lettre en display, tandis qu'un compteur or monte de 00 à 100 en bas à droite. À 100, un rideau noir se rétracte vers le haut en révélant la vidéo hero déjà en lecture. Pas de spinner, jamais.

### 7.2 Hero — plein écran, vidéo
- Vidéo en boucle, muette, `playsInline`, **poster obligatoire** : plan macro au ralenti d'un pâton qu'on abaisse à la main, ou d'une pizza qui entre au four, ou de la flamme léchant la sole.
- Titre en composition superposée : le script « Tradizione » en or clair, chevauchant le display géant « GUSTO », et en dessous, en petites capitales espacées : « PIZZA ARTISANALE · BESANÇON · À EMPORTER ».
- Les lettres du display arrivent en `clip-path` par le bas, décalées de 40 ms, courbe `expo.out`.
- En bas à gauche : **sceau circulaire estampillé « CHAMPION DU MONDE / CHAMPION D'EUROPE / CHAMPION DE FRANCE »** qui tourne lentement (32 s/tour, `will-change: transform`). C'est l'élément le plus important de tout le site.
- En bas à droite : bandeau « Mardi – Samedi · 11h / 18h » avec pastille d'état en direct (« Ouvert maintenant » / « Ouvre à 18h00 ») calculée sur Europe/Paris.
- Curseur personnalisé : petit disque or de 8 px qui grossit à 48 px et affiche « VOIR » au survol des médias. Désactivé sur tactile.
- Indicateur de scroll : le cercle signature, en cours de formation.

### 7.3 Manifeste
Sur fond noir absolu, une seule phrase en display, révélée mot par mot au scroll (ScrollTrigger, `scrub`), écrite à partir des textes sources. Rien d'autre à l'écran. Sujet : la pâte, les farines italiennes, la tradition.

### 7.4 Le champion
Section entière consacrée à Francis Winkelmann, et c'est le contenu que le site actuel gâche le plus. Portrait, les trois titres en sceaux, les écoles italiennes, les concours annuels — Parme, France, France Pizza Tour. Lien vers `/le-savoir-faire`.

**Aucune date, aucune catégorie, aucun palmarès chiffré tant que le client ne les a pas fournis.** Les titres s'affichent tels qu'il les revendique.

### 7.5 La pâte et la sauce « Gusto »
Deux blocs alternés texte/image, en très gros plan : l'alvéolage de la pâte, la sauce. C'est la signature technique de la maison, elle revient dans chaque description de la carte. Le `--braise` apparaît ici, et quasiment nulle part ailleurs.

### 7.6 Grille de spécialités — mosaïque asymétrique
Composition asymétrique : une grande carte à gauche, deux petites en haut à droite, une carte large en bas à droite. Chaque carte : photo plein cadre, titre en display, prix en or, lien discret.

Cartes : **Burrata** · **Tartufo** · **La Francomtoise** · **Mamamia**. Le choix n'est pas arbitraire : trois spécialités de Corato à 15 €, plus la seule pizza franc-comtoise de la carte (Morteau, cancoillotte) — c'est le grand écart Italie/Franche-Comté qui rend cette maison unique.

Parallaxe différenciée sur chaque image (facteurs 0.06 / 0.10 / 0.14). Au survol : zoom image 1.06, filet or qui se dessine sur le périmètre en 400 ms.

### 7.7 Section épinglée — « Du pâton à la pizza »
Section épinglée (ScrollTrigger `pin`, durée 300 % de viewport). Le scroll fait défiler horizontalement quatre panneaux : **La farine · Le pâton · Le four · La sortie**. Chacun avec sa micro-vidéo en boucle et une ligne de texte. C'est la démonstration technique du site, et le cercle signature s'y transforme d'un état à l'autre. Fallback en carrousel vertical simple sous 1024 px.

### 7.8 Bandeau défilant (marquee)
« CHAMPION DU MONDE · CHAMPION D'EUROPE · CHAMPION DE FRANCE · IL VALORE DELLA TRADIZIONE · » en boucle infinie, display en outline (contour or, intérieur transparent), vitesse liée à la direction du scroll.

### 7.9 Les cartes
Bloc de renvoi vers les six cartes : Carte gourmande · Formules déjeuner · Sand'zza · Pizzas Plaque · Lasagnes et salades · Ciabatta · Carte sans porc. Traitement en index typographique élégant, pas en grille de vignettes.

**La carte sans porc est présentée exactement comme les autres**, sans encart séparé, sans pictogramme distinctif, sans ton particulier. C'est une carte de la maison.

### 7.10 Commande — appel final
Fond noir, vidéo d'ambiance très assombrie (le four, la nuit, la découpe).
« La commande se passe par téléphone. »
Deux actions : **Appeler le 03 81 81 61 17** (`tel:`) et **Voir la carte**.
Le bouton principal a un remplissage or qui monte du bas au survol, avec le texte qui bascule en noir. Effet magnétique léger (le bouton suit le curseur sur 6 px max).

Sous les boutons, en petit : moyens de paiement acceptés, dont Ticket Restaurant et Chèque Déjeuner.

### 7.11 Pied de page
Grand logotype en display sur toute la largeur, coupé par le bas de la fenêtre. Adresse, téléphone, horaires complets, liens vers les cartes, liens légaux, mention société.

---

## 8. AUTRES PAGES — points clés

**`/la-carte`** — La page la plus consultée du site, et la plus difficile : **une soixantaine de pizzas, deux colonnes de prix.** Six familles : Les Classiques · Les Spéciales · Les Envies Gourmandes · Les Fonds de Crème · Spécialités de Corato · Pizza du mois.

Mise en page en colonnes typographiques élégantes, filets or entre les familles, prix alignés en or. **Jamais un tableau HTML brut, jamais une grille de cartes.** Pense carte de restaurant imprimée, pas menu de livraison.

Navigation par ancres, barre de familles collante au scroll. Composant `<MenuBoard>` acceptant les données de `/content/carte.ts`. Bouton « Télécharger la carte (PDF) » si le client en fournit un.

Contraintes à respecter au mot près : les mentions « uniquement en grande taille, ne se fait pas en duo » et « allergène noix de cajou » figurent sur la carte actuelle et doivent être conservées, lisiblement.

**Prix relevés le 16 août 2026** — ils vivent dans `/content/carte.ts` avec un champ `dateReleve`, et la page porte la mention « prix susceptibles d'évoluer ». Voici la carte gourmande complète, à saisir telle quelle (petite / grande) :

*Les Classiques* — Fromage 10/11 · Jambon 11/12 · Reine 12/13 · Paysanne 12/13 · Royale 13/14 · Chèvre 12/13 · Chèvre Miel 13,50/14,50 · 3 Fromages 12/13 · 5 Fromages 13,50/14,50

*Les Spéciales* — Chorizo 12/13 · Chorizo Ananas 13,50/14,50 · 4 Saisons 12/13 · Provençale 15 (grande seule) · Orientale 13/14 · Spéciale Pizzaïolo 13/14 · Saumon 13/14 · Saumon-épinard 13,50/14,50 · L'Anchois 11,50/12,50 · Mamamia 13,50/14,50 · Poulet Mariné 13,50/14,50 · Marina 13/14

*Les Envies Gourmandes* — Savoyarde 13,50/14,50 · La Francomtoise 13,50/14,50 · La Raclette 13,50/14,50 · Rimini 13,50/14,50 · Calzone 14/15 · Duo 14/15

*Les Fonds de Crème* — La Maroille 13,50/14,50 · La Parmentière 13,50/14,50 · La Saumonée 13,50/14,50 · L'Atlantique 13,50/14,50 · Poulet Curry 13,50/14,50

*Spécialités de Corato* (grande taille uniquement, 15 €) — Burrata · Grazie · Zucchina · Tartufo · Coppa · Carciofo

Les compositions complètes figurent sur le site actuel : reprends-les intégralement dans `carte.ts`, sans en modifier un ingrédient.

**`/le-savoir-faire`** — Page éditoriale sur Francis Winkelmann. Les écoles italiennes, les techniques boulangères, les farines italiennes, les concours. Emplacements prévus pour les articles de l'Est Républicain, avec attribution complète (titre, journal, date) et lien externe — `[[À COMPLÉTER]]`. **Aucune citation de plus de quinze mots reprise d'un article de presse.**

**`/formules-et-menus`, `/lasagnes-et-salades`, `/carte-sans-porc`** — Même système `<MenuBoard>`. Contenus non récupérés : `[[À COMPLÉTER]]`, avec une structure prête et un état d'attente digne, jamais un bloc vide.

**`/nous-trouver`** — Formulaire (nom, e-mail, téléphone, message, consentement RGPD) validé Zod, états de chargement / succès / erreur soignés. **Carte Leaflet en thème sombre personnalisé** (pas de Google Maps par défaut, trop clair et trop générique), marqueur or, place Leclerc / rue Voirin. Horaires en tableau avec la ligne du jour surlignée. Moyens de paiement. Rappel que la commande se fait par téléphone.

---

## 9. RÉDACTION

Réécris les textes sources pour élever le registre, **sans jamais inventer de faits** : pas de date de fondation, pas de nombre de pizzas vendues, pas de nom de fournisseur, pas de récompense supplémentaire, pas d'année de titre non fournie.

Ton : sobre, précis, sensoriel. Phrases courtes. Pas d'adjectifs empilés.

Bannis : « incontournable », « la meilleure pizza de Besançon », « saveurs authentiques d'Italie », « comme en Italie », « voyage gustatif », « croustillante à souhait », « généreusement garnie ».

Les libellés d'action disent ce qui se passe : « Appeler le restaurant », « Voir la carte », « Envoyer la demande » — jamais « Commander », « Soumettre », « En savoir plus », « Cliquez ici ». **Le mot « Commander » est interdit : il n'y a pas de commande en ligne, et le promettre serait mentir.**

Les messages d'erreur expliquent quoi corriger, ils ne s'excusent pas.

---

## 10. MÉDIAS

Le client n'a pas fourni de photographies exploitables — celles du site actuel datent de 2014, sont en basse résolution et lui appartiennent. **Aucune ne doit être reprise.**

- Crée `/public/media/` avec une structure nommée et un `README.md` listant précisément chaque asset attendu (nom de fichier, format, ratio, durée, poids max).
- Utilise des placeholders : dégradés animés + grain, ou vidéos libres de droits (Pexels/Coverr), avec un fichier `CREDITS.md`. Aucune photo de banque payante, aucune image de marque.
- Toutes les vidéos : `preload="none"`, poster obligatoire, `<source>` en `.webm` + `.mp4` (H.264), 1080p max, ≤ 4 Mo, ≤ 12 s en boucle. Chargement différé via IntersectionObserver. Aucune vidéo ne démarre si `prefers-reduced-motion: reduce` → l'affiche fixe s'affiche à la place.
- Toutes les images passent par `next/image`, format AVIF/WebP, `sizes` renseigné correctement.

**Note pour le shooting** : ce site a besoin d'une séquence dédiée au geste — l'abaisse du pâton, l'enfournement, la sortie à la pelle — et d'un vrai portrait de Francis Winkelmann. Sans ça, la section 7.4 et la section épinglée 7.7 ne tiennent pas debout.

---

## 11. QUALITÉ — non négociable

- **Performance** : Lighthouse mobile ≥ 90 en Performance et 100 en Accessibilité. LCP < 2,5 s. CLS < 0,05. Le hero vidéo ne doit pas être le LCP → le poster l'est.
- **Accessibilité** : navigation clavier complète, focus visible en or, `aria-label` sur tous les contrôles, contraste AA minimum sur le texte ivoire/noir — **et vérification stricte de l'or sur noir, qui est le point de rupture probable de cette palette**. `prefers-reduced-motion` respecté partout (toutes les timelines GSAP enveloppées dans `gsap.matchMedia()`). La carte doit rester parfaitement lisible au lecteur d'écran : les prix sont associés à leur pizza et à leur taille, jamais orphelins.
- **Responsive** : 360 px → 2560 px. Le mobile n'est pas une version dégradée : le hero, le marquee et la carte ont chacun une composition mobile pensée à part. **La carte sur mobile est le vrai défi de ce projet** — soixante pizzas et deux colonnes de prix : conçois-la spécifiquement.
- **SEO** : métadonnées par page — l'existant n'a **aucune meta description**, c'est un gain immédiat. `sitemap.ts`, `robots.ts`, Open Graph avec image générée, redirections 301 (§6), et JSON-LD `Restaurant` complet : `name`, `address` (PostalAddress), `telephone`, `servesCuisine: ["Pizza","Italienne"]`, `openingHoursSpecification` (§1), `priceRange`, `hasMenu`, `paymentAccepted`, `acceptsReservations: "False"`, `geo`. **Aucun `aggregateRating`, aucun `award` non sourcé.**
- **RGPD** : bandeau cookies fonctionnel (refus aussi simple que l'acceptation), aucun script tiers avant consentement.
- **Code** : composants < 200 lignes, aucune valeur en dur (tout en tokens), `README.md` avec instructions d'installation, **de mise à jour de la carte et des prix**, de remplacement des médias, et de déploiement Vercel.

---

## 12. ORDRE D'EXÉCUTION — travaille par phases, montre-moi le résultat entre chaque

**Phase 0 — Direction artistique.** Avant d'écrire une ligne de code, présente-moi : la palette (7 hex nommés), le duo/trio typographique avec justification, un wireframe ASCII de la page d'accueil, une description en une phrase de l'élément signature, et la liste des `[[À COMPLÉTER]]` / `[[À VÉRIFIER]]` que tu as relevés. Vérifie que rien ne ressemble à un défaut générique ni à une pizzeria de template. **Attends ma validation.**

**Phase 1 — Fondations.** Init Next.js + Tailwind + tokens + typographies + layout + header/footer + smooth scroll + curseur + préchargeur + `/content/carte.ts` complet et typé. Rien de plus.

**Phase 2 — Accueil.** Sections 7.2 à 7.11, dans l'ordre, une par une.

**Phase 3 — La carte.** La page la plus difficile, traitée seule : desktop, mobile, ancres, accessibilité.

**Phase 4 — Pages intérieures.** Savoir-faire, Formules, Lasagnes et salades, Carte sans porc.

**Phase 5 — Nous trouver + finitions.** Formulaire + Leaflet + API route, transitions de page, 404 soignée, pages légales, JSON-LD, sitemap, redirections 301, bandeau cookies, audit Lighthouse, passe d'accessibilité.

**Phase 6 — Critique.** Relis ton propre travail comme si tu étais le client qui a refusé trois propositions. Liste ce qui fait encore « template » ou « pizzeria générique » et corrige-le. Puis, conseil de Chanel : retire un accessoire.

---

## 13. INTERDITS

- Aucun code visuel de pizzeria : drapeau italien, rouge-blanc-vert, nappe à carreaux, four dessiné en icône, chef moustachu, feuille de basilic en ornement.
- Aucun dégradé violet/bleu générique, aucun `border-radius` uniforme partout, aucune carte avec ombre douce type dashboard SaaS.
- Aucune icône d'icon-pack posée telle quelle (Lucide/Heroicons) dans les sections éditoriales.
- Aucun emoji dans l'interface.
- Aucune animation « parce qu'on peut » : chaque mouvement doit servir la lecture ou l'ambiance.
- **Aucune mention de livraison ni de commande en ligne** — la maison ne fait ni l'un ni l'autre.
- Aucune promotion criarde. L'offre de fidélité existe, elle se dit une fois, sobrement.
- Aucun faux avis, faux chiffre, faux prix, fausse récompense, aucune date de titre inventée.
- Aucun texte lorem ipsum livré en phase finale.

---

## 14. PREMIÈRE CHOSE À FAIRE

Ne code pas encore. Réponds-moi avec la **Phase 0** uniquement.
