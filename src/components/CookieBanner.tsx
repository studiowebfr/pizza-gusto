"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useClientValue } from "@/lib/useMediaQuery";

const CLE = "pizza-gusto-consentement-cookies";

type Consentement = "accepte" | "refuse" | null;

function lireConsentement(): Consentement {
  const stocke = localStorage.getItem(CLE);
  return stocke === "accepte" || stocke === "refuse" ? stocke : null;
}

export default function CookieBanner() {
  // `undefined` = pas encore déterminé (rendu serveur / première hydratation) :
  // le bandeau ne doit jamais clignoter avant qu'on sache s'il y a déjà un choix.
  const consentementStocke = useClientValue<Consentement | undefined>(
    lireConsentement,
    undefined
  );
  const [choixLocal, setChoixLocal] = useState<Consentement>(null);

  const choix = choixLocal ?? consentementStocke ?? null;
  const visible = consentementStocke !== undefined && choix === null;

  const repondre = (valeur: "accepte" | "refuse") => {
    localStorage.setItem(CLE, valeur);
    setChoixLocal(valeur);
  };

  useEffect(() => {
    if (choix === "accepte") {
      // Point d'accroche pour un futur script de mesure d'audience :
      // ne rien charger avant ce point.
    }
  }, [choix]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Préférences de cookies"
      className="fixed inset-x-0 bottom-0 z-[9997] border-t border-or-patine/40 bg-noir-fumee/98 px-6 py-6 backdrop-blur-sm md:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm text-ivoire">
          Ce site utilise des cookies de mesure d&apos;audience uniquement après votre accord.
          Aucun script tiers n&apos;est chargé avant votre choix.{" "}
          <Link href="/cookies" className="text-or-clair underline underline-offset-4">
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => repondre("refuse")}
            className="eyebrow eyebrow--sans-trait border border-ivoire/30 px-5 py-2.5 text-ivoire transition-colors hover:border-ivoire"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => repondre("accepte")}
            className="eyebrow eyebrow--sans-trait border border-or-patine bg-or-patine px-5 py-2.5 text-noir-ardoise transition-opacity hover:opacity-90"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
