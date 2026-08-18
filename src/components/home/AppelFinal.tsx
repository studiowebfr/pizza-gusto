import { site } from "@/content/site";
import MediaFrame from "@/components/MediaFrame";
import MagneticButton from "@/components/MagneticButton";
import SignatureCircle from "@/components/SignatureCircle";

export default function AppelFinal() {
  return (
    <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden px-6 py-28 md:px-10">
      <MediaFrame
        legende="Le four, la nuit, la découpe d'une pizza tout juste sortie."
        variante="braise"
        className="absolute inset-0 h-full w-full opacity-70"
      />
      <div className="absolute inset-0 bg-noir-ardoise/70" />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center">
        <SignatureCircle variante="point" taille={10} />
        <p className="font-display max-w-3xl text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] tracking-tight text-ivoire">
          La commande se passe par téléphone.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={site.telephoneHref} variante="plein" ariaLabel={`Appeler le restaurant au ${site.telephone}`}>
            Appeler le {site.telephone}
          </MagneticButton>
          <MagneticButton href="/la-carte" variante="contour">
            Voir la carte
          </MagneticButton>
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-gris-perle">
          {site.paiement.join(" · ")}
        </p>
      </div>
    </section>
  );
}
