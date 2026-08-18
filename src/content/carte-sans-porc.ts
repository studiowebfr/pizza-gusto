import type { PizzaCarte } from "./carte";

export const introSansPorc =
  "Merci de préciser « sans porc, Halal » lors de votre commande.";

export const carteSansPorc: PizzaCarte[] = [
  { nom: "Fromage", composition: "Sauce tomate « Gusto », olives, mozzarella.", prix: { petite: 10, grande: 11 } },
  { nom: "Champignon", composition: "Sauce tomate « Gusto », champignons persillés, olives, mozzarella.", prix: { petite: 11, grande: 12 } },
  { nom: "Chèvre", composition: "Sauce tomate « Gusto », chèvre, herbes de Provence, olives, mozzarella.", prix: { petite: 12, grande: 13 } },
  { nom: "3 Fromages", composition: "Sauce tomate « Gusto », parmesan, roquefort, olives, mozzarella.", prix: { petite: 12, grande: 13 } },
  { nom: "5 Fromages", composition: "Sauce tomate « Gusto », parmesan, roquefort, gorgonzola, maroilles, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
  { nom: "4 Saisons", composition: "Sauce tomate « Gusto », olives, poivrons, champignons persillés, tomate fraîche, mozzarella.", prix: { petite: 12, grande: 13 } },
  { nom: "Provençale", composition: "Sauce tomate « Gusto », champignons persillés, aubergine grillée, cœur d'artichaut, tomate fraîche, olives, mozzarella.", prix: { petite: null, grande: 15 }, mention: "Uniquement en grande taille, ne se fait pas en duo." },
  { nom: "Orientale", composition: "Sauce tomate « Gusto », merguez halal, poivrons, olives, mozzarella.", prix: { petite: 13, grande: 14 } },
  { nom: "Marina", composition: "Sauce tomate « Gusto », thon, anchois, poivrons, olives, mozzarella.", prix: { petite: 13, grande: 14 } },
  { nom: "Savoyarde", composition: "Sauce tomate « Gusto », viande hachée halal, pommes de terre, reblochon, crème fraîche, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
  { nom: "La Raclette", composition: "Sauce tomate « Gusto », viande hachée halal, pommes de terre, raclette, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
  { nom: "Rimini", composition: "Sauce tomate « Gusto », oignons, poivrons, viande hachée halal, aromates italiens, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
  { nom: "Zucchina", composition: "Base ricotta, courgette, viande hachée halal, gorgonzola, olives, mozzarella.", prix: { petite: null, grande: 15 }, mention: "Uniquement en grande taille, ne se fait pas en duo." },
  { nom: "Duo", composition: "Panaché de deux recettes réunies sur une même pizza.", prix: { petite: 14, grande: 15 } },
  { nom: "Poulet Mariné", composition: "Sauce tomate « Gusto », champignons, poivrons, poulet mariné halal, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
  { nom: "Poulet Curry", composition: "Crème au curry, oignons, poulet halal, poivrons, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
  { nom: "Saumon", composition: "Sauce tomate « Gusto » ou crème, saumon fumé, ciboulette, olives, mozzarella.", prix: { petite: 13, grande: 14 } },
  { nom: "Saumon-épinard", composition: "Base ricotta, oignons, saumon, roquefort, pousses d'épinard, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
  { nom: "La Saumonée", composition: "Crème fraîche, pommes de terre, oignons, saumon, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
  { nom: "L'Atlantique", composition: "Crème fraîche, champignons persillés, saumon, ciboulette, jus de citron, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
  { nom: "La Parmentière", composition: "Crème fraîche, pommes de terre, viande hachée halal, roquefort, olives, mozzarella.", prix: { petite: 13.5, grande: 14.5 } },
  { nom: "Tartufo", composition: "Crème de truffe, pommes de terre, champignons, roquette, olives.", prix: { petite: null, grande: 15 }, mention: "Uniquement en grande taille, ne se fait pas en duo." },
];
