// Contenu des pages Formules & menus. Repris du site actuel (pizzagusto-besancon.fr).

export interface FormuleDejeuner {
  nom: string;
  composition: string;
  prix: number;
}

export const formulesDejeuner: FormuleDejeuner[] = [
  { nom: "Sand'zza + boisson 33cl + dessert", composition: "Servi uniquement le midi, mardi à samedi 11h–14h.", prix: 8.7 },
  { nom: "Sand'zza + boisson 50cl + dessert", composition: "Servi uniquement le midi, mardi à samedi 11h–14h.", prix: 9.5 },
  { nom: "Sand'zza + bière en canette + dessert", composition: "Heineken ou 1664. Servi uniquement le midi.", prix: 9.8 },
  { nom: "Ciabatta + boisson 33cl + dessert", composition: "Servi uniquement le midi, mardi à samedi 11h–14h.", prix: 9.0 },
  { nom: "Ciabatta + boisson 50cl + dessert", composition: "Servi uniquement le midi, mardi à samedi 11h–14h.", prix: 9.9 },
  { nom: "Ciabatta + bière en canette + dessert", composition: "Heineken ou 1664. Servi uniquement le midi.", prix: 10.0 },
];

export interface SandZza {
  nom: string;
  composition: string;
}

export const sandZzaPrixUnique = 6.3;

export const sandZza: SandZza[] = [
  { nom: "Le Jambon", composition: "Sauce tomate « Gusto », jambon, mozzarella." },
  { nom: "Le Reine", composition: "Sauce tomate « Gusto », jambon, champignons persillés, mozzarella." },
  { nom: "Le Jambon Chèvre", composition: "Sauce tomate « Gusto », jambon, chèvre, mozzarella." },
  { nom: "Le Raclette", composition: "Sauce tomate « Gusto », jambon, raclette, mozzarella." },
  { nom: "Le 3 Fromages", composition: "Sauce tomate « Gusto », parmesan, roquefort, mozzarella." },
  { nom: "Le Chèvre", composition: "Sauce tomate « Gusto », chèvre, herbes de Provence, mozzarella." },
  { nom: "Le Curry", composition: "Sauce curry, oignons, poulet, poivrons, mozzarella." },
  { nom: "Le Saumon", composition: "Sauce tomate « Gusto », saumon, ciboulette, crème, mozzarella." },
  { nom: "Le Champignon", composition: "Sauce tomate « Gusto », champignons persillés, mozzarella." },
  { nom: "Le Thon", composition: "Sauce tomate « Gusto », thon, crème, mozzarella." },
  { nom: "L'Oriental", composition: "Sauce tomate « Gusto », merguez, poivrons, mozzarella." },
  { nom: "Le Rimini", composition: "Sauce tomate « Gusto », oignons, viande hachée pur bœuf, aromates italiens, poivrons, mozzarella." },
  { nom: "Le Poulet", composition: "Crème fraîche, émincés de poulet, tomate fraîche, mozzarella." },
];

export interface PizzaPlaque {
  nom: string;
  composition: string;
  prix: number;
}

// Format « plaque » : une pièce pour un groupe, prix unique (pas de petite/grande).
export const pizzaPlaque: PizzaPlaque[] = [
  { nom: "Fromage", composition: "Sauce tomate « Gusto », olives, mozzarella.", prix: 38 },
  { nom: "Champignons", composition: "Sauce tomate « Gusto », champignons, olives, mozzarella.", prix: 42 },
  { nom: "Jambon", composition: "Sauce tomate « Gusto », jambon, olives, mozzarella.", prix: 43.5 },
  { nom: "4 Saisons", composition: "Sauce tomate « Gusto », olives, poivrons, champignons de Paris persillés, tomate fraîche, mozzarella.", prix: 43.5 },
  { nom: "Chèvre", composition: "Sauce tomate « Gusto », chèvre, herbes de Provence, olives, mozzarella.", prix: 43.5 },
  { nom: "3 Fromages", composition: "Sauce tomate « Gusto », parmesan, roquefort, olives, mozzarella.", prix: 43.5 },
  { nom: "5 Fromages", composition: "Sauce tomate « Gusto », parmesan, roquefort, gorgonzola, maroilles, olives.", prix: 49.5 },
  { nom: "Reine", composition: "Sauce tomate « Gusto », jambon, champignons de Paris persillés, olives, mozzarella.", prix: 49.5 },
  { nom: "Orientale", composition: "Sauce tomate « Gusto », merguez, poivrons, olives, mozzarella.", prix: 49.5 },
  { nom: "Savoyarde", composition: "Sauce tomate « Gusto », lardons, reblochon, crème fraîche, olives, mozzarella.", prix: 49.5 },
  { nom: "Rimini", composition: "Sauce tomate « Gusto », oignons, poivrons, viande hachée pur bœuf, bouquet d'aromates italiens, olives, mozzarella.", prix: 49.5 },
  { nom: "Saumon", composition: "Sauce tomate ou crème, saumon fumé, ciboulette, olives, mozzarella.", prix: 54 },
  { nom: "Duo", composition: "Panaché de deux recettes réunies sur une même pizza.", prix: 54 },
];

export const ciabatta = {
  intro: "Sandwich au bon pain italien. Recette du jour uniquement — précisez votre choix par téléphone.",
  prix: 6.9,
};
