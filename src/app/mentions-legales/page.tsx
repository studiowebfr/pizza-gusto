import type { Metadata } from "next";
import { mentionsLegales, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Pizza Gusto, Besançon.",
  robots: { index: false, follow: true },
};

function Ligne({ label, valeur }: { label: string; valeur: string | null }) {
  return (
    <div className="flex flex-col gap-1 border-t border-ivoire/10 py-4 sm:flex-row sm:justify-between">
      <dt className="text-sm text-gris-perle">{label}</dt>
      <dd className="text-sm text-ivoire">
        {valeur ?? <span className="italic text-gris-perle/70">À compléter</span>}
      </dd>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <p className="eyebrow">Informations légales</p>
      <h1 className="font-display mt-3 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-tight">
        Mentions légales
      </h1>

      <dl className="mt-14 max-w-2xl">
        <Ligne label="Raison sociale" valeur={mentionsLegales.raisonSociale} />
        <Ligne label="Nom commercial" valeur={mentionsLegales.nomCommercial} />
        <Ligne label="Capital social" valeur={mentionsLegales.capitalSocial} />
        <Ligne label="Siège" valeur={mentionsLegales.siege} />
        <Ligne label="Directeur de publication" valeur={mentionsLegales.directeurPublication} />
        <Ligne label="SIRET" valeur={mentionsLegales.siret} />
        <Ligne label="RCS" valeur={mentionsLegales.rcs} />
        <Ligne label="TVA intracommunautaire" valeur={mentionsLegales.tva} />
        <Ligne label="Code APE" valeur={mentionsLegales.codeApe} />
        <Ligne label="Téléphone" valeur={site.telephone} />
      </dl>

      <div className="mt-14 max-w-2xl border-t border-ivoire/10 pt-8">
        <h2 className="font-display text-xl tracking-tight text-ivoire">Hébergement</h2>
        <dl className="mt-4">
          <Ligne label="Hébergeur" valeur={mentionsLegales.hebergeur.nom} />
          <Ligne label="Capital" valeur={mentionsLegales.hebergeur.capital} />
          <Ligne label="RCS" valeur={mentionsLegales.hebergeur.rcs} />
          <Ligne label="Siège" valeur={mentionsLegales.hebergeur.siege} />
        </dl>
      </div>

      <p className="mt-10 max-w-2xl text-xs italic leading-relaxed text-gris-perle">
        Le numéro SIRET, le RCS et le numéro de TVA intracommunautaire propres à la
        société n&apos;ont pas encore été communiqués à ce jour — mise à jour à
        prévoir dès réception.
      </p>
    </div>
  );
}
