import type { FamilleCarte, PizzaCarte } from "@/content/carte";

function formatPrix(prix: number) {
  return prix.toLocaleString("fr-FR", {
    minimumFractionDigits: Number.isInteger(prix) ? 0 : 2,
    maximumFractionDigits: 2,
  });
}

function LigneMenu({ pizza }: { pizza: PizzaCarte }) {
  return (
    <li className="flex flex-col gap-1 py-4">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg tracking-tight text-ivoire md:text-xl">
          {pizza.nom}
        </h3>
        <p
          aria-label={`${pizza.nom} : ${
            pizza.prix.petite ? `petite ${pizza.prix.petite} euros, ` : ""
          }grande ${pizza.prix.grande} euros`}
          className="font-display shrink-0 whitespace-nowrap text-or-clair"
        >
          {pizza.prix.petite !== null
            ? `${formatPrix(pizza.prix.petite)} / ${formatPrix(pizza.prix.grande)} €`
            : `${formatPrix(pizza.prix.grande)} €`}
        </p>
      </div>
      {pizza.composition ? (
        <p className="max-w-xl text-sm leading-relaxed text-gris-perle">
          {pizza.composition}
        </p>
      ) : (
        <p className="max-w-xl text-sm italic leading-relaxed text-gris-perle/70">
          Composition en attente de confirmation.
        </p>
      )}
      {(pizza.mention || pizza.allergene) && (
        <p className="text-xs uppercase tracking-[0.08em] text-braise">
          {[pizza.mention, pizza.allergene ? `Allergène : ${pizza.allergene}` : null]
            .filter(Boolean)
            .join(" · ")}
        </p>
      )}
    </li>
  );
}

export function FamilleMenu({ famille }: { famille: FamilleCarte }) {
  return (
    <section id={famille.id} className="scroll-mt-28 py-14 md:py-20">
      <div className="mb-8 flex items-baseline gap-6">
        <h2 className="font-display text-2xl tracking-tight text-ivoire md:text-3xl">
          {famille.nom}
        </h2>
        <div className="filet-or flex-1" />
      </div>
      {famille.note && (
        <p className="mb-6 text-sm italic text-gris-perle">{famille.note}</p>
      )}
      <ul className="grid gap-x-12 divide-y divide-ivoire/8 md:grid-cols-2 md:divide-y-0">
        {famille.pizzas.map((pizza) => (
          <LigneMenu key={pizza.nom} pizza={pizza} />
        ))}
      </ul>
    </section>
  );
}

export function BarreFamilles({ familles }: { familles: { id: string; nom: string }[] }) {
  return (
    <nav
      aria-label="Familles de la carte"
      className="sticky top-[64px] z-30 -mx-6 overflow-x-auto border-b border-ivoire/10 bg-noir-ardoise/95 px-6 py-3 backdrop-blur-sm md:top-[76px] md:-mx-10 md:px-10"
    >
      <ul className="flex w-max gap-6 md:w-auto md:justify-center">
        {familles.map((famille) => (
          <li key={famille.id}>
            <a
              href={`#${famille.id}`}
              className="eyebrow eyebrow--sans-trait whitespace-nowrap text-gris-perle transition-colors hover:text-or-clair"
            >
              {famille.nom}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
