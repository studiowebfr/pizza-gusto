// Carte gourmande — le fichier le plus important du projet.
// Prix relevés le 16 août 2026 depuis la carte publiée par la maison ; susceptibles d'évoluer.
// Compositions reprises du site actuel (pizzagusto-besancon.fr) sans modification d'ingrédient
// lorsque la source était disponible. Les rares compositions non retrouvées sont marquées
// [[À COMPLÉTER]] plutôt que devinées.

export interface Prix {
  /** null si la pizza ne se fait qu'en grande taille */
  petite: number | null;
  grande: number;
}

export interface PizzaCarte {
  nom: string;
  /** Composition telle que publiée par la maison. `null` si non retrouvée : ne jamais inventer. */
  composition: string | null;
  prix: Prix;
  /** Mention à conserver lisiblement (ex. restriction de taille / duo). */
  mention?: string;
  /** Allergène signalé sur la carte source. */
  allergene?: string;
}

export interface FamilleCarte {
  id: string;
  nom: string;
  note?: string;
  pizzas: PizzaCarte[];
}

export const dateReleve = "2026-08-16";

export const carteGourmande: FamilleCarte[] = [
  {
    id: "classiques",
    nom: "Les Classiques",
    pizzas: [
      { nom: "Fromage", composition: "Sauce tomate « Gusto », olives, mozzarella.", prix: { petite: 10, grande: 11 } },
      { nom: "Jambon", composition: "Sauce tomate « Gusto », jambon, olives, mozzarella.", prix: { petite: 11, grande: 12 } },
      { nom: "Reine", composition: "Sauce tomate « Gusto », jambon, champignons persillés, olives, mozzarella.", prix: { petite: 12, grande: 13 } },
      { nom: "Paysanne", composition: "Sauce tomate « Gusto », lardons, crème fraîche, olives, mozzarella.", prix: { petite: 12, grande: 13 } },
      { nom: "Royale", composition: "Sauce tomate « Gusto », jambon, cœur d'artichaut, champignons, poivrons, olives, mozzarella.", prix: { petite: 13, grande: 14 } },
      { nom: "Chèvre", composition: "Sauce tomate « Gusto », chèvre, herbes de Provence, olives, mozzarella.", prix: { petite: 12, grande: 13 } },
      { nom: "Chèvre Miel", composition: "Sauce tomate « Gusto », chèvre, miel, jambon de pays, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "3 Fromages", composition: "Sauce tomate « Gusto », parmesan, roquefort, olives, mozzarella.", prix: { petite: 12, grande: 13 } },
      { nom: "5 Fromages", composition: "Sauce tomate « Gusto », parmesan, roquefort, gorgonzola, maroilles, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
    ],
  },
  {
    id: "speciales",
    nom: "Les Spéciales",
    pizzas: [
      { nom: "Chorizo", composition: "Sauce tomate « Gusto », chorizo, poivrons, olives, mozzarella.", prix: { petite: 12, grande: 13 } },
      { nom: "Chorizo Ananas", composition: "Sauce tomate « Gusto », chorizo, ananas, épices douces, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "4 Saisons", composition: "Sauce tomate « Gusto », olives, poivrons, champignons persillés, tomate fraîche, mozzarella.", prix: { petite: 12, grande: 13 } },
      { nom: "Provençale", composition: "Sauce tomate « Gusto », champignons persillés, aubergine grillée, cœur d'artichaut, tomate fraîche, olives, mozzarella.", prix: { petite: null, grande: 15 }, mention: "Uniquement en grande taille, ne se fait pas en duo." },
      { nom: "Orientale", composition: "Sauce tomate « Gusto », merguez, poivrons, olives, mozzarella.", prix: { petite: 13, grande: 14 } },
      { nom: "Spéciale Pizzaïolo", composition: null, prix: { petite: 13, grande: 14 } },
      { nom: "Saumon", composition: "Sauce tomate « Gusto » ou crème, saumon fumé, ciboulette, olives, mozzarella.", prix: { petite: 13, grande: 14 } },
      { nom: "Saumon-épinard", composition: "Base ricotta, oignons, saumon, roquefort, pousses d'épinard, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "L'Anchois", composition: "Sauce tomate « Gusto », filets d'anchois, olives, mozzarella.", prix: { petite: 11.5, grande: 12.5 } },
      { nom: "Mamamia", composition: "Sauce tomate « Gusto », jambon de pays, mozzarella di Bufala, pesto de basilic, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 }, allergene: "noix de cajou" },
      { nom: "Poulet Mariné", composition: "Sauce tomate « Gusto », champignons, poivrons, poulet mariné, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "Marina", composition: "Sauce tomate « Gusto », thon, anchois, poivrons, olives, mozzarella.", prix: { petite: 13, grande: 14 } },
    ],
  },
  {
    id: "envies-gourmandes",
    nom: "Les Envies Gourmandes",
    pizzas: [
      { nom: "Savoyarde", composition: "Sauce tomate « Gusto », lardons, reblochon, crème fraîche, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "La Francomtoise", composition: "Sauce tomate « Gusto », saucisse de Morteau, pommes de terre, cancoillotte, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "La Raclette", composition: "Sauce tomate « Gusto », jambon, pommes de terre, raclette, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "Rimini", composition: "Sauce tomate « Gusto », oignons, poivrons, viande hachée pur bœuf, bouquet d'aromates italiens, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "Calzone", composition: "Sauce tomate « Gusto », jambon, crème fraîche, œuf, mozzarella — pizza pliée.", prix: { petite: 14, grande: 15 } },
      { nom: "Duo", composition: "Panaché de deux recettes réunies sur une même pizza.", prix: { petite: 14, grande: 15 } },
    ],
  },
  {
    id: "fonds-de-creme",
    nom: "Les Fonds de Crème",
    note: "Base crème fraîche, en remplacement de la sauce tomate.",
    pizzas: [
      { nom: "La Maroille", composition: "Crème fraîche, fromage de Maroilles, oignons, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "La Parmentière", composition: "Crème fraîche, pommes de terre, lardons, roquefort, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "La Saumonée", composition: "Crème fraîche, pommes de terre, oignons, saumon, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "L'Atlantique", composition: "Crème fraîche, champignons persillés, saumon, ciboulette, jus de citron, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
      { nom: "Poulet Curry", composition: "Crème au curry, oignons, poulet, poivrons, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
    ],
  },
  {
    id: "specialites-de-corato",
    nom: "Spécialités de Corato",
    note: "Grande taille uniquement — ne se font pas en duo.",
    pizzas: [
      { nom: "Burrata", composition: "Jambon de pays, roquette, burrata crémeuse, olives.", prix: { petite: null, grande: 15 }, mention: "Uniquement en grande taille, ne se fait pas en duo." },
      { nom: "Grazie", composition: "Base ricotta, bresaola (bœuf séché), parmesan, roquette, olives.", prix: { petite: null, grande: 15 }, mention: "Uniquement en grande taille, ne se fait pas en duo." },
      { nom: "Zucchina", composition: "Base ricotta, courgette, viande hachée, gorgonzola, olives, mozzarella.", prix: { petite: null, grande: 15 }, mention: "Uniquement en grande taille, ne se fait pas en duo." },
      { nom: "Tartufo", composition: "Crème de truffe, pommes de terre, champignons, roquette, olives.", prix: { petite: null, grande: 15 }, mention: "Uniquement en grande taille, ne se fait pas en duo." },
      { nom: "Coppa", composition: "Poivrons, feta, coppa, roquette, olives.", prix: { petite: null, grande: 15 }, mention: "Uniquement en grande taille, ne se fait pas en duo." },
      { nom: "Carciofo", composition: "Crème d'artichaut, poulet mariné, parmesan, olives.", prix: { petite: null, grande: 15 }, mention: "Uniquement en grande taille, ne se fait pas en duo." },
    ],
  },
];

/**
 * La « Pizza du mois — Saveurs d'été » a deux compositions différentes selon la page
 * du site actuel : l'une au poulet mariné et chorizo, l'autre à la crème de carotte et
 * au chèvre. Le brief est explicite — n'en choisis aucune. Les deux versions sont donc
 * conservées ici en attente, et la page carte affiche un état d'attente digne plutôt
 * qu'un choix arbitraire.
 */
export const pizzaDuMoisEnAttente = {
  nom: "Saveurs d'été",
  versionsCandidates: [
    "Sauce tomate, oignons, poulet mariné, mozzarella, maïs, chorizo, sauce barbecue.",
    "Crème de carotte, chèvre.",
  ],
  prixCandidat: { petite: null, grande: 15 } as Prix,
  note: "[[À VÉRIFIER : deux compositions contradictoires relevées, aucune retenue tant que le client n'a pas tranché]]",
};

export const mentionAllergene = "Allergène noix de cajou — pesto de basilic.";
export const mentionTailleUnique = "Uniquement en grande taille, ne se fait pas en duo.";
