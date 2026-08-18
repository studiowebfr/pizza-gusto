import type { Metadata } from "next";
import { carteSansPorc, introSansPorc } from "@/content/carte-sans-porc";
import { FamilleMenu } from "@/components/MenuBoard";
import BoutonRetour from "@/components/BoutonRetour";

export const metadata: Metadata = {
  title: "Carte sans porc",
  description:
    "La carte sans porc de Pizza Gusto, avec viande Halal. Pâte et sauce « Gusto », à emporter à Besançon.",
};

export default function CarteSansPorcPage() {
  return (
    <div className="pb-24 pt-32 md:pt-40">
      <div className="px-6 md:px-10">
        <BoutonRetour className="mb-6" />
        <p className="eyebrow">Pizza Gusto</p>
        <h1 className="font-display mt-3 max-w-2xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
          Carte sans porc
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gris-perle">
          Notre carte des pizzas sans porc, avec viande Halal. {introSansPorc}
        </p>
      </div>

      <div className="px-6 md:px-10">
        <FamilleMenu famille={{ id: "sans-porc", nom: "Carte sans porc", pizzas: carteSansPorc }} />
      </div>
    </div>
  );
}
