import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vie privée",
  description: "Politique de confidentialité de Pizza Gusto, Besançon.",
  robots: { index: false, follow: true },
};

export default function ViePriveePage() {
  return (
    <div className="px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <p className="eyebrow">Confidentialité</p>
      <h1 className="font-display mt-3 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-tight">
        Vie privée
      </h1>

      <div className="mt-14 max-w-2xl space-y-8 text-sm leading-relaxed text-gris-perle">
        <section>
          <h2 className="font-display mb-2 text-lg text-ivoire">Données collectées</h2>
          <p>
            Le formulaire de la page « Nous trouver » collecte votre nom, votre
            adresse e-mail, votre numéro de téléphone et le contenu de votre
            message. Ces informations sont utilisées uniquement pour répondre à
            votre demande.
          </p>
        </section>
        <section>
          <h2 className="font-display mb-2 text-lg text-ivoire">Conservation</h2>
          <p>
            Les messages reçus sont conservés le temps nécessaire au traitement de
            votre demande, puis supprimés.
          </p>
        </section>
        <section>
          <h2 className="font-display mb-2 text-lg text-ivoire">Vos droits</h2>
          <p>
            Conformément au Règlement général sur la protection des données, vous
            disposez d&apos;un droit d&apos;accès, de rectification et de
            suppression des données vous concernant. Pour l&apos;exercer, appelez
            le restaurant ou utilisez le formulaire de contact.
          </p>
        </section>
        <section>
          <h2 className="font-display mb-2 text-lg text-ivoire">Cookies</h2>
          <p>
            Voir la page dédiée aux cookies pour le détail des traceurs utilisés et
            la gestion de votre consentement.
          </p>
        </section>
      </div>
    </div>
  );
}
