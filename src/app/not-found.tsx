import Link from "next/link";
import SignatureCircle from "@/components/SignatureCircle";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center gap-8 px-6 text-center">
      <SignatureCircle variante="amorce" taille={72} />
      <div>
        <p className="eyebrow justify-center">Page introuvable</p>
        <h1 className="font-display mt-4 text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-tight">
          Cette page n&apos;existe pas.
        </h1>
        <p className="mt-4 text-sm text-gris-perle">
          Elle a peut-être changé d&apos;adresse, ou n&apos;a jamais existé.
        </p>
      </div>
      <Link
        href="/"
        className="eyebrow eyebrow--sans-trait border border-or-patine px-8 py-3 text-or-clair transition-colors hover:bg-or-patine hover:text-noir-ardoise"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
