import type { Metadata } from "next";
import { lasagne, saladeComposee } from "@/content/lasagnes-et-salades";
import BoutonRetour from "@/components/BoutonRetour";

export const metadata: Metadata = {
  title: "Lasagnes & Salades",
  description:
    "Lasagnes et salades composées de Pizza Gusto, à emporter à Besançon.",
};

function formatPrix(prix: number) {
  return `${prix.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}

export default function LasagnesEtSaladesPage() {
  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <BoutonRetour className="mb-6" />
      <p className="eyebrow">Pizza Gusto</p>
      <h1 className="font-display mt-3 max-w-2xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
        Lasagnes &amp; Salades
      </h1>

      <section className="mt-16 max-w-xl border-t border-ivoire/10 pt-10">
        <div className="mb-6 flex items-baseline gap-6">
          <h2 className="font-display text-2xl tracking-tight text-ivoire md:text-3xl">
            Les Lasagnes
          </h2>
          <div className="filet-or flex-1" />
        </div>
        <p className="font-display text-or-clair">{formatPrix(lasagne.prix)}</p>

        <ul className="mt-6 space-y-3">
          {lasagne.formules.map((formule) => (
            <li key={formule.nom} className="flex items-baseline justify-between gap-4 border-t border-ivoire/8 pt-3 text-sm">
              <span className="text-ivoire">
                {formule.nom}
                {"composition" in formule && formule.composition ? (
                  <span className="text-gris-perle"> — {formule.composition}</span>
                ) : null}
              </span>
              <span className="font-display shrink-0 text-or-clair">{formatPrix(formule.prix)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 max-w-xl border-t border-ivoire/10 pt-10">
        <div className="mb-6 flex items-baseline gap-6">
          <h2 className="font-display text-2xl tracking-tight text-ivoire md:text-3xl">
            Salades Composées
          </h2>
          <div className="filet-or flex-1" />
        </div>
        <p className="font-display text-or-clair">{formatPrix(saladeComposee.prix)}</p>
        <p className="mt-3 text-sm italic leading-relaxed text-gris-perle">
          Composition précisée par téléphone — carte en cours de complément.
        </p>
      </section>
    </div>
  );
}
