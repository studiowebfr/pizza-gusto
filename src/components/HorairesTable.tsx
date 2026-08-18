"use client";

import { horaires } from "@/content/site";
import { jourIndexParis } from "@/lib/horaires";
import { useClientValue } from "@/lib/useMediaQuery";

export default function HorairesTable() {
  const jourActuel = useClientValue(jourIndexParis, -1);

  return (
    <table className="w-full border-collapse text-sm">
      <caption className="sr-only">Horaires d&apos;ouverture de Pizza Gusto</caption>
      <tbody>
        {horaires.map((jour, index) => (
          <tr
            key={jour.jour}
            className={`border-t border-ivoire/10 ${
              index === jourActuel ? "text-or-clair" : "text-ivoire"
            }`}
          >
            <th scope="row" className="py-2.5 pr-4 text-left font-normal">
              {jour.jour}
              {index === jourActuel && (
                <span className="ml-2 text-[0.6rem] uppercase tracking-[0.14em] text-or-patine">
                  Aujourd&apos;hui
                </span>
              )}
            </th>
            <td className="py-2.5 text-right">
              {jour.ferme
                ? "Fermé"
                : jour.creneaux.map((c) => `${c.ouverture} – ${c.fermeture}`).join(" et ")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
