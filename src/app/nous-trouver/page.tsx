import type { Metadata } from "next";
import { site } from "@/content/site";
import ContactForm from "@/components/ContactForm";
import HorairesTable from "@/components/HorairesTable";
import LeafletMapLoader from "@/components/LeafletMapLoader";

export const metadata: Metadata = {
  title: "Nous Trouver",
  description:
    "Pizza Gusto, place Leclerc, 7 rue Voirin à Besançon. Horaires, téléphone et formulaire de contact. Commande par téléphone uniquement.",
};

export default function NousTrouverPage() {
  return (
    <div className="pb-24 pt-32 md:pt-40">
      <div className="px-6 md:px-10">
        <p className="eyebrow">Pizza Gusto</p>
        <h1 className="font-display mt-3 max-w-2xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
          Nous trouver
        </h1>
      </div>

      <div className="mt-14 grid gap-x-16 gap-y-16 px-6 md:grid-cols-2 md:px-10">
        <div className="flex flex-col gap-10">
          <div>
            <p className="eyebrow">Adresse</p>
            <p className="mt-3 text-lg text-ivoire">
              {site.adresse.ligne1}
              <br />
              {site.adresse.ligne2}
              <br />
              {site.adresse.codePostal} {site.adresse.ville}
            </p>
          </div>

          <div>
            <p className="eyebrow">Téléphone</p>
            <a href={site.telephoneHref} className="mt-3 block text-lg text-or-clair hover:underline">
              {site.telephone}
            </a>
            <p className="mt-2 text-sm text-gris-perle">
              La commande se passe par téléphone. Aucune commande en ligne, aucune livraison.
            </p>
          </div>

          <div>
            <p className="eyebrow">Horaires</p>
            <p className="mt-2 text-sm text-gris-perle">{site.formuleHoraire}</p>
            <div className="mt-4 max-w-sm">
              <HorairesTable />
            </div>
          </div>

          <div>
            <p className="eyebrow">Moyens de paiement</p>
            <p className="mt-3 text-sm text-ivoire">{site.paiement.join(" · ")}</p>
          </div>
        </div>

        <div className="aspect-[4/5] w-full md:aspect-auto md:h-full md:min-h-[420px]">
          <LeafletMapLoader />
        </div>
      </div>

      <div className="mt-24 border-t border-ivoire/10 px-6 pt-16 md:px-10">
        <p className="eyebrow">Nous écrire</p>
        <h2 className="font-display mt-3 max-w-lg text-2xl tracking-tight text-ivoire md:text-3xl">
          Une question, une demande particulière
        </h2>
        <div className="mt-10 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
