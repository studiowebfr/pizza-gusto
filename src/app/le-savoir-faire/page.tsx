import type { Metadata } from "next";
import { site, presse } from "@/content/site";
import { concoursAnnuels, savoirFaireTextes } from "@/content/savoir-faire";
import MediaFrame from "@/components/MediaFrame";
import SignatureCircle from "@/components/SignatureCircle";

export const metadata: Metadata = {
  title: "Le Savoir-Faire",
  description:
    "Francis Winkelmann, pizzaïolo champion, formé aux écoles italiennes. Techniques boulangères, farines italiennes, concours annuels — Pizza Gusto, Besançon.",
};

export default function LeSavoirFairePage() {
  return (
    <div className="pb-24 pt-32 md:pt-40">
      <div className="px-6 md:px-10">
        <p className="eyebrow">Le Savoir-Faire</p>
        <h1 className="font-display mt-3 max-w-2xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
          {site.artisan.nom}
        </h1>
        <p className="mt-2 text-sm text-gris-perle">{site.artisan.metier}</p>
      </div>

      <div className="mt-14 grid gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <MediaFrame
          legende="Portrait de Francis Winkelmann dans son fournil, place Leclerc."
          variante="sombre"
          className="aspect-[4/5] w-full"
          image="/media/images/portrait-francis-winkelmann.jpg"
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />

        <div className="flex flex-col justify-center gap-6">
          <div className="flex flex-wrap gap-6">
            {site.artisan.titres.map((titre) => (
              <div key={titre} className="flex flex-col items-center gap-2 text-center">
                <SignatureCircle variante="sceau" taille={84} texteArc={`${titre} • `} />
                <p className="max-w-[6.5rem] text-[0.6rem] uppercase leading-tight tracking-[0.14em] text-ivoire">
                  {titre}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs leading-relaxed text-gris-perle">
            Titres revendiqués par la maison, affichés tels quels. Année et
            catégorie de chaque titre : en attente de confirmation.
          </p>
        </div>
      </div>

      <div className="mt-24 px-6 md:px-10">
        <div className="mx-auto max-w-2xl space-y-8">
          <div>
            <p className="eyebrow">Formation</p>
            <p className="font-display mt-3 text-xl leading-relaxed tracking-tight text-ivoire md:text-2xl">
              {savoirFaireTextes.formation}
            </p>
          </div>
          <div>
            <p className="eyebrow">Tradition</p>
            <p className="mt-3 text-base leading-relaxed text-gris-perle">
              {savoirFaireTextes.tradition}
            </p>
          </div>
          <div>
            <p className="eyebrow">Concours</p>
            <p className="mt-3 text-base leading-relaxed text-gris-perle">
              {savoirFaireTextes.concours}
            </p>
            <ul className="mt-6 flex flex-col gap-2 border-l border-or-patine/40 pl-5">
              {concoursAnnuels.map((concours) => (
                <li key={concours.nom} className="text-sm text-ivoire">
                  {concours.nom} <span className="text-gris-perle">— {concours.lieu}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-ivoire/10 px-6 pt-16 md:px-10">
        <p className="eyebrow">Presse</p>
        <h2 className="font-display mt-3 max-w-lg text-2xl tracking-tight text-ivoire md:text-3xl">
          L&apos;Est Républicain en a parlé
        </h2>

        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {presse.map((article) => (
            <li key={article.titre} className="border-t border-ivoire/10 pt-5">
              <p className="text-xs uppercase tracking-[0.12em] text-gris-perle">
                {article.journal}
                {article.date
                  ? ` · ${new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}`
                  : " · date à confirmer"}
              </p>
              <p className="font-display mt-2 text-lg leading-snug tracking-tight text-ivoire">
                {article.titre}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gris-perle">{article.resume}</p>
              {article.lien ? (
                <a
                  href={article.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-or-clair underline underline-offset-4"
                >
                  Lire l&apos;article
                </a>
              ) : (
                <p className="mt-3 text-xs italic text-gris-perle/70">
                  Lien vers l&apos;article original en attente.
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
