import type { Metadata } from "next";
import { carteGourmande, dateReleve, pizzaDuMoisEnAttente } from "@/content/carte";
import { FamilleMenu, BarreFamilles } from "@/components/MenuBoard";
import BoutonRetour from "@/components/BoutonRetour";

export const metadata: Metadata = {
  title: "La Carte",
  description:
    "La carte gourmande de Pizza Gusto : classiques, spéciales, envies gourmandes, fonds de crème et spécialités de Corato. Pâte et sauce « Gusto », à emporter à Besançon.",
};

const dateLisible = new Date(dateReleve).toLocaleDateString("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function LaCartePage() {
  return (
    <div className="pb-24 pt-32 md:pt-40">
      <div className="px-6 md:px-10">
        <BoutonRetour className="mb-6" />
        <p className="eyebrow">Pizza Gusto</p>
        <h1 className="font-display mt-3 max-w-2xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
          La carte gourmande
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gris-perle">
          Toutes les pizzas sont préparées avec la pâte et la sauce « Gusto ».
          Prix relevés le {dateLisible} — susceptibles d&apos;évoluer.
        </p>
      </div>

      {/* La barre collante et les familles partagent le même conteneur :
          `position: sticky` ne reste figé que dans la hauteur de son bloc
          parent — isolée dans un <div> qui ne contenait qu'elle, la barre se
          décollait dès les premiers pixels de scroll. */}
      <div className="mt-10 divide-y divide-ivoire/8 px-6 md:px-10">
        <BarreFamilles familles={carteGourmande} />
        {carteGourmande.map((famille) => (
          <FamilleMenu key={famille.id} famille={famille} />
        ))}

        <section id="pizza-du-mois" className="scroll-mt-28 py-14 md:py-20">
          <div className="mb-8 flex items-baseline gap-6">
            <h2 className="font-display text-2xl tracking-tight text-ivoire md:text-3xl">
              Pizza du mois — {pizzaDuMoisEnAttente.nom}
            </h2>
            <div className="filet-or flex-1" />
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-gris-perle">
            Deux compositions différentes circulent pour cette pizza saisonnière. Le
            temps de trancher avec la maison, aucune des deux n&apos;est retenue —
            elle reviendra sur cette carte dès confirmation.
          </p>
          <ul className="mt-4 max-w-xl list-inside list-disc space-y-1 text-xs text-gris-perle/70">
            {pizzaDuMoisEnAttente.versionsCandidates.map((version) => (
              <li key={version}>{version}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-16 px-6 md:px-10">
        <p className="text-xs leading-relaxed text-gris-perle">
          « Uniquement en grande taille, ne se fait pas en duo » signale les pizzas
          qui ne peuvent pas être partagées avec une autre recette. « Allergène noix
          de cajou » signale les pizzas préparées avec un pesto de basilic.
        </p>
      </div>
    </div>
  );
}
