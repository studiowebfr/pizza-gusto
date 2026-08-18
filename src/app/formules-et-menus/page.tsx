import type { Metadata } from "next";
import {
  ciabatta,
  formulesDejeuner,
  pizzaPlaque,
  sandZza,
  sandZzaPrixUnique,
} from "@/content/formules";
import BoutonRetour from "@/components/BoutonRetour";

export const metadata: Metadata = {
  title: "Formules & Menus",
  description:
    "Formules déjeuner, Sand'zza esprit street pizza, pizzas Plaque à partager et ciabatta — Pizza Gusto, Besançon.",
};

const SECTIONS = [
  { id: "formules", nom: "Formules déjeuner" },
  { id: "sandzza", nom: "Sand'zza" },
  { id: "plaque", nom: "Pizzas Plaque" },
  { id: "ciabatta", nom: "Ciabatta" },
];

function formatPrix(prix: number) {
  const nombre = prix.toLocaleString("fr-FR", {
    minimumFractionDigits: Number.isInteger(prix) ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return `${nombre} €`;
}

export default function FormulesEtMenusPage() {
  return (
    <div className="pb-24 pt-32 md:pt-40">
      <div className="px-6 md:px-10">
        <BoutonRetour className="mb-6" />
        <p className="eyebrow">Pizza Gusto</p>
        <h1 className="font-display mt-3 max-w-2xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
          Formules &amp; Menus
        </h1>
      </div>

      {/* La nav collante et les sections partagent le même conteneur : sinon
          `position: sticky` n'a que la hauteur de la nav elle-même comme
          bloc de référence et se décolle dès les premiers pixels de scroll. */}
      <div className="px-6 md:px-10">
        <nav
          aria-label="Sections de cette carte"
          className="sticky top-[64px] z-30 mt-10 -mx-6 overflow-x-auto border-y border-ivoire/10 bg-noir-ardoise/95 px-6 py-3 backdrop-blur-sm md:top-[76px] md:-mx-10 md:px-10"
        >
          <ul className="flex w-max gap-6">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="eyebrow eyebrow--sans-trait whitespace-nowrap text-gris-perle transition-colors hover:text-or-clair"
                >
                  {section.nom}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="formules" className="scroll-mt-28 py-14 md:py-20">
          <div className="mb-8 flex items-baseline gap-6">
            <h2 className="font-display text-2xl tracking-tight text-ivoire md:text-3xl">
              Formules déjeuner
            </h2>
            <div className="filet-or flex-1" />
          </div>
          <p className="mb-6 text-sm italic text-gris-perle">
            Servies uniquement le midi, du mardi au samedi, 11h – 14h.
          </p>
          <ul className="grid gap-x-12 divide-y divide-ivoire/8 md:grid-cols-2 md:divide-y-0">
            {formulesDejeuner.map((formule) => (
              <li key={formule.nom} className="flex items-baseline justify-between gap-4 py-4">
                <h3 className="text-sm text-ivoire">{formule.nom}</h3>
                <p className="font-display shrink-0 text-or-clair">{formatPrix(formule.prix)}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="sandzza" className="scroll-mt-28 border-t border-ivoire/8 py-14 md:py-20">
          <div className="mb-2 flex items-baseline gap-6">
            <h2 className="font-display text-2xl tracking-tight text-ivoire md:text-3xl">
              Sand&apos;zza
            </h2>
            <div className="filet-or flex-1" />
          </div>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-gris-perle">
            L&apos;esprit street pizza, préparé avec la pâte et la sauce « Gusto ».
            Prix unique : {formatPrix(sandZzaPrixUnique)}.
          </p>
          <ul className="grid gap-x-12 divide-y divide-ivoire/8 md:grid-cols-2 md:divide-y-0">
            {sandZza.map((sandwich) => (
              <li key={sandwich.nom} className="py-4">
                <h3 className="font-display text-lg tracking-tight text-ivoire">{sandwich.nom}</h3>
                <p className="mt-1 text-sm text-gris-perle">{sandwich.composition}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="plaque" className="scroll-mt-28 border-t border-ivoire/8 py-14 md:py-20">
          <div className="mb-8 flex items-baseline gap-6">
            <h2 className="font-display text-2xl tracking-tight text-ivoire md:text-3xl">
              Pizzas Plaque
            </h2>
            <div className="filet-or flex-1" />
          </div>
          <p className="mb-6 text-sm italic text-gris-perle">
            Une pièce, pensée pour une tablée. Sur commande.
          </p>
          <ul className="grid gap-x-12 divide-y divide-ivoire/8 md:grid-cols-2 md:divide-y-0">
            {pizzaPlaque.map((pizza) => (
              <li key={pizza.nom} className="py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg tracking-tight text-ivoire">{pizza.nom}</h3>
                  <p className="font-display shrink-0 text-or-clair">{formatPrix(pizza.prix)}</p>
                </div>
                <p className="mt-1 text-sm text-gris-perle">{pizza.composition}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="ciabatta" className="scroll-mt-28 border-t border-ivoire/8 py-14 md:py-20">
          <div className="mb-8 flex items-baseline gap-6">
            <h2 className="font-display text-2xl tracking-tight text-ivoire md:text-3xl">
              Ciabatta
            </h2>
            <div className="filet-or flex-1" />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-gris-perle">
            {ciabatta.intro}
          </p>
          <p className="font-display mt-4 text-or-clair">{formatPrix(ciabatta.prix)}</p>
        </section>
      </div>
    </div>
  );
}
