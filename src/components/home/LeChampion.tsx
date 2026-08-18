import Link from "next/link";
import { site } from "@/content/site";
import { concoursAnnuels, savoirFaireTextes } from "@/content/savoir-faire";
import MediaFrame from "@/components/MediaFrame";
import SignatureCircle from "@/components/SignatureCircle";

export default function LeChampion() {
  return (
    <section className="grid gap-12 px-6 py-28 md:grid-cols-2 md:gap-16 md:px-10 md:py-40">
      <MediaFrame
        legende="Portrait de Francis Winkelmann, pizzaïolo, dans son fournil."
        variante="sombre"
        className="aspect-[4/5] w-full"
        image="/media/images/portrait-francis-winkelmann.jpg"
        sizes="(min-width: 768px) 50vw, 100vw"
      />

      <div className="flex flex-col justify-center gap-8">
        <div>
          <p className="eyebrow">Le Champion</p>
          <h2 className="font-display mt-3 text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight">
            {site.artisan.nom}
          </h2>
          <p className="mt-2 text-sm text-gris-perle">{site.artisan.metier}</p>
        </div>

        <div className="flex flex-wrap gap-6">
          {site.artisan.titres.map((titre) => (
            <div key={titre} className="flex flex-col items-center gap-3 text-center">
              <SignatureCircle variante="sceau" taille={92} texteArc={`${titre} • `} />
              <p className="max-w-[7rem] text-[0.65rem] uppercase leading-tight tracking-[0.14em] text-ivoire">
                {titre}
              </p>
            </div>
          ))}
        </div>

        <p className="max-w-md text-sm leading-relaxed text-gris-perle">
          {savoirFaireTextes.formation}
        </p>

        <ul className="flex flex-col gap-1.5 border-l border-or-patine/40 pl-5 text-sm text-ivoire">
          {concoursAnnuels.map((concours) => (
            <li key={concours.nom}>
              {concours.nom} <span className="text-gris-perle">— {concours.lieu}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/le-savoir-faire"
          className="eyebrow w-fit border-b border-or-patine pb-1 text-or-clair transition-colors hover:text-ivoire"
        >
          Découvrir le savoir-faire
        </Link>
      </div>
    </section>
  );
}
