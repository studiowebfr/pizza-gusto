import Link from "next/link";

const CARTES = [
  { href: "/la-carte", label: "Carte gourmande" },
  { href: "/formules-et-menus", label: "Formules déjeuner" },
  { href: "/formules-et-menus#sandzza", label: "Sand'zza" },
  { href: "/formules-et-menus#plaque", label: "Pizzas Plaque" },
  { href: "/lasagnes-et-salades", label: "Lasagnes et salades" },
  { href: "/formules-et-menus#ciabatta", label: "Ciabatta" },
  { href: "/carte-sans-porc", label: "Carte sans porc" },
];

export default function IndexCartes() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <p className="eyebrow">Les cartes</p>
      <ul className="mt-10 divide-y divide-ivoire/10 border-t border-ivoire/10">
        {CARTES.map((carte) => (
          <li key={carte.href}>
            <Link
              href={carte.href}
              className="group flex items-center justify-between py-6 md:py-8"
            >
              <span className="font-display text-[clamp(1.5rem,4vw,3rem)] tracking-tight text-ivoire transition-colors group-hover:text-or-clair">
                {carte.label}
              </span>
              <span className="eyebrow eyebrow--sans-trait text-gris-perle transition-colors group-hover:text-or-patine">
                Voir
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
