"use client";

import { useRef, useSyncExternalStore } from "react";
import { etatOuvertureActuel, type EtatOuverture } from "@/lib/horaires";

function abonner(notifier: () => void) {
  const intervalle = setInterval(notifier, 60_000);
  return () => clearInterval(intervalle);
}

export default function EtatOuvertureBadge({ className = "" }: { className?: string }) {
  // useSyncExternalStore exige que getSnapshot renvoie la même référence
  // tant que la valeur n'a pas réellement changé, sous peine de boucle de
  // rendu infinie : `etatOuvertureActuel()` crée un nouvel objet à chaque
  // appel, donc on le met en cache ici et on ne le renouvelle que si son
  // contenu diffère.
  const dernierRef = useRef<EtatOuverture | null>(null);

  const getSnapshot = () => {
    const suivant = etatOuvertureActuel();
    const precedent = dernierRef.current;
    if (
      precedent &&
      precedent.ouvert === suivant.ouvert &&
      precedent.libelle === suivant.libelle
    ) {
      return precedent;
    }
    dernierRef.current = suivant;
    return suivant;
  };

  const etat = useSyncExternalStore<EtatOuverture | null>(
    abonner,
    getSnapshot,
    () => null
  );

  if (!etat) {
    return <span className={`eyebrow ${className}`}>&nbsp;</span>;
  }

  return (
    <span className={`eyebrow ${className}`}>
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${
          etat.ouvert ? "bg-or-clair" : "bg-gris-perle"
        }`}
      />
      {etat.libelle}
    </span>
  );
}
