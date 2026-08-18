import Link from "next/link";
import { site, horaires } from "@/content/site";

const CARTES = [
  { href: "/la-carte", label: "Carte gourmande" },
  { href: "/formules-et-menus", label: "Formules déjeuner · Sand'zza · Pizzas Plaque · Ciabatta" },
  { href: "/lasagnes-et-salades", label: "Lasagnes et salades" },
  { href: "/carte-sans-porc", label: "Carte sans porc" },
];

const LEGAL = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/vie-privee", label: "Vie privée" },
  { href: "/cookies", label: "Cookies" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ivoire/10 bg-noir-ardoise pt-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="font-display text-[clamp(3.5rem,16vw,11rem)] leading-[0.85] tracking-tight text-ivoire/95">
          Gusto
        </p>

        <div className="filet-or my-10" />

        <div className="grid gap-12 pb-16 md:grid-cols-4">
          <div className="space-y-3">
            <p className="eyebrow eyebrow--sans-trait text-gris-perle">Adresse</p>
            <p className="text-sm text-ivoire">
              {site.adresse.ligne1}
              <br />
              {site.adresse.ligne2}
              <br />
              {site.adresse.codePostal} {site.adresse.ville}
            </p>
          </div>

          <div className="space-y-3">
            <p className="eyebrow eyebrow--sans-trait text-gris-perle">Contact</p>
            <a href={site.telephoneHref} className="block text-sm text-or-clair hover:underline">
              {site.telephone}
            </a>
            <p className="text-sm text-ivoire">{site.formuleHoraire}</p>
            <ul className="space-y-0.5 text-xs text-gris-perle">
              {horaires.map((jour) => (
                <li key={jour.jour} className="flex justify-between gap-4">
                  <span>{jour.jour}</span>
                  <span>
                    {jour.ferme
                      ? "Fermé"
                      : jour.creneaux
                          .map((c) => `${c.ouverture}–${c.fermeture}`)
                          .join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="eyebrow eyebrow--sans-trait text-gris-perle">Les cartes</p>
            <ul className="space-y-1.5 text-sm text-ivoire">
              {CARTES.map((carte) => (
                <li key={carte.href}>
                  <Link href={carte.href} className="hover:text-or-clair">
                    {carte.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="eyebrow eyebrow--sans-trait text-gris-perle">Informations</p>
            <ul className="space-y-1.5 text-sm text-ivoire">
              {LEGAL.map((lien) => (
                <li key={lien.href}>
                  <Link href={lien.href} className="hover:text-or-clair">
                    {lien.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ivoire/10 py-6 text-xs text-gris-perle md:flex-row md:items-center md:justify-between">
          <p>Pizza Gusto — {site.devise}</p>
          <p>Vente à emporter uniquement. Commande par téléphone.</p>
        </div>
      </div>
    </footer>
  );
}
