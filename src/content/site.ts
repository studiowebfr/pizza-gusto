// Données d'identité de la maison. Toute valeur marquée [[À COMPLÉTER]] / [[À VÉRIFIER]]
// est un point de vigilance signalé en Phase 0, à faire confirmer par le client avant mise en ligne.

export interface CreneauHoraire {
  ouverture: string; // "HH:mm"
  fermeture: string; // "HH:mm"
}

export interface JourHoraire {
  jour: string;
  ferme: boolean;
  creneaux: CreneauHoraire[];
}

// Index 0 = dimanche (convention Date.getDay()), pour un lookup direct.
export const horaires: JourHoraire[] = [
  { jour: "Dimanche", ferme: true, creneaux: [] },
  { jour: "Lundi", ferme: true, creneaux: [] },
  {
    jour: "Mardi",
    ferme: false,
    creneaux: [
      { ouverture: "11:00", fermeture: "14:00" },
      { ouverture: "18:00", fermeture: "22:00" },
    ],
  },
  {
    jour: "Mercredi",
    ferme: false,
    creneaux: [
      { ouverture: "11:00", fermeture: "14:00" },
      { ouverture: "18:00", fermeture: "22:00" },
    ],
  },
  {
    jour: "Jeudi",
    ferme: false,
    creneaux: [
      { ouverture: "11:00", fermeture: "14:00" },
      { ouverture: "18:00", fermeture: "22:00" },
    ],
  },
  {
    jour: "Vendredi",
    ferme: false,
    creneaux: [
      { ouverture: "11:00", fermeture: "14:00" },
      { ouverture: "18:00", fermeture: "22:00" },
    ],
  },
  {
    jour: "Samedi",
    ferme: false,
    creneaux: [
      { ouverture: "11:00", fermeture: "14:00" },
      { ouverture: "18:00", fermeture: "22:00" },
    ],
  },
];

export const site = {
  nom: "Pizza Gusto",
  devise: "Il Valore Della Tradizione",
  signature: "Tradizione e Qualità",
  formuleHoraire: "Ouvert 5j/7",
  telephone: "03 81 81 61 17",
  telephoneHref: "tel:+33381816117",
  adresse: {
    ligne1: "Place Leclerc",
    ligne2: "7 rue Voirin",
    codePostal: "25000",
    ville: "Besançon",
    pays: "France",
  },
  geo: {
    // [[À VÉRIFIER : coordonnées précises du point de vente à confirmer avec le client]]
    latitude: 47.2409,
    longitude: 6.0236,
  },
  artisan: {
    nom: "Francis Winkelmann",
    metier: "Pizzaïolo",
    titres: [
      "Champion du Monde",
      "Champion d'Europe",
      "Champion de France",
    ],
    // Aucune année, aucune catégorie n'est publiée par la maison — [[À VÉRIFIER : année et intitulé exact de chaque titre]].
    // Le fait que "meilleur pizzaïolo d'Europe" soit un titre de presse (L'Est Républicain, 11/06/2015)
    // et non une distinction officielle est confirmé par l'article source : à ne jamais fusionner
    // avec "Champion d'Europe" dans l'affichage.
  },
  paiement: [
    "Ticket Restaurant",
    "Chèque Déjeuner",
    // [[À COMPLÉTER : carte bancaire et espèces acceptés ? à confirmer avec le client]]
  ],
  fidelite: {
    texte:
      "10 pizzas achetées, la 11ᵉ offerte — celle de votre choix, la plus chère de la commande.",
  },
  service: {
    emporter: true,
    livraison: false,
    commandeEnLigne: false,
  },
  reseaux: {
    // [[À COMPLÉTER : aucun réseau social communiqué]]
  },
} as const;

export const mentionsLegales = {
  raisonSociale: "SARL DELIS",
  nomCommercial: "Pizza Gusto",
  capitalSocial: "7 700,00 €",
  siege: "7 rue Voirin, 25000 Besançon",
  directeurPublication: "Francis Winkelmann",
  // Non publiés sur le site source — l'établissement n'affiche aucune mention légale complète.
  siret: null, // [[À COMPLÉTER]]
  rcs: null, // [[À COMPLÉTER]]
  tva: null, // [[À COMPLÉTER]]
  codeApe: null, // [[À VÉRIFIER : deux valeurs différentes relevées selon la source, aucune fiable]]
  hebergeur: {
    nom: "OVH SAS",
    capital: "10 000 000 €",
    rcs: "RCS Roubaix–Tourcoing 424 761 419 00045",
    siege: "2 rue Kellermann, 59100 Roubaix, France",
  },
} as const;

export const presse = [
  {
    titre: "Francis Winkelmann est le meilleur pizzaïolo d'Europe",
    journal: "L'Est Républicain",
    date: "2015-06-11",
    resume:
      "Le titre de champion d'Europe des pizzaïolos, décerné pour une création originale élaborée avec des ingrédients raffinés.",
    lien: null, // [[À COMPLÉTER : lien externe vers l'article]]
  },
  {
    titre: "Pâte italienne, saveurs françaises",
    journal: "L'Est Républicain",
    date: null, // [[À COMPLÉTER : date exacte non retrouvée]]
    resume:
      "Un passage par les Championnats du monde à Parme et un projet d'école de pizza en Franche-Comté.",
    lien: null, // [[À COMPLÉTER]]
  },
  {
    titre: "Pizza au caviar",
    journal: "L'Est Républicain",
    date: null, // [[À COMPLÉTER]]
    resume:
      "Une composition présentée au championnat du monde à Parme, face à des concurrents venus de plusieurs dizaines de pays.",
    lien: null, // [[À COMPLÉTER]]
  },
] as const;
