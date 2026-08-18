import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Politique de gestion des cookies de Pizza Gusto, Besançon.",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <p className="eyebrow">Confidentialité</p>
      <h1 className="font-display mt-3 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-tight">
        Cookies
      </h1>

      <div className="mt-14 max-w-2xl space-y-8 text-sm leading-relaxed text-gris-perle">
        <section>
          <h2 className="font-display mb-2 text-lg text-ivoire">Ce que nous utilisons</h2>
          <p>
            Ce site ne dépose aucun cookie de mesure d&apos;audience ou de
            publicité avant votre accord, donné via le bandeau affiché lors de
            votre première visite. Un cookie technique conserve uniquement votre
            choix (accepté / refusé).
          </p>
        </section>
        <section>
          <h2 className="font-display mb-2 text-lg text-ivoire">Refuser ou modifier votre choix</h2>
          <p>
            Refuser est aussi simple qu&apos;accepter : les deux options sont
            proposées côte à côte dans le bandeau. Pour modifier votre choix,
            effacez les cookies de ce site dans les réglages de votre navigateur —
            le bandeau réapparaîtra à votre prochaine visite.
          </p>
        </section>
      </div>
    </div>
  );
}
