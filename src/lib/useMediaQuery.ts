"use client";

import { useSyncExternalStore } from "react";

/**
 * Lit une media query côté client via useSyncExternalStore — évite le
 * pattern useEffect + setState pour une valeur qui vient d'un système
 * externe (ici, les préférences du navigateur), et reste correct pendant
 * l'hydratation (valeur par défaut côté serveur : `false`).
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (notifier) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", notifier);
      return () => media.removeEventListener("change", notifier);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

/**
 * Lit une valeur navigateur disponible uniquement côté client (storage,
 * date locale…) une fois au montage, sans provoquer de setState dans un
 * effet : `fallback` est la valeur utilisée pendant le rendu serveur et la
 * première passe d'hydratation.
 */
export function useClientValue<T>(lire: () => T, repli: T): T {
  return useSyncExternalStore(
    () => () => undefined,
    lire,
    () => repli
  );
}
