import { type CSSProperties } from "react";

export type VarianteCercle =
  | "amorce" // hero, indicateur de scroll — arc incomplet
  | "sceau" // le champion, titres tournants
  | "pate" // la pâte — trait épais
  | "pizza" // grille de spécialités — double cercle
  | "four" // panneau "le four" — centre braise
  | "cadran" // horaires — graduations
  | "point"; // appel final — point fermé

interface SignatureCircleProps {
  variante: VarianteCercle;
  taille?: number;
  className?: string;
  /** Texte affiché le long du cercle (variante "sceau"). */
  texteArc?: string;
}

const ID_PARTAGE = "trajet-texte-sceau";

// Arrondit les coordonnées calculées (cos/sin) pour que le HTML rendu côté
// serveur et côté client soit strictement identique caractère pour
// caractère : les derniers chiffres d'un flottant peuvent différer d'un
// moteur JS à l'autre et provoquer un avertissement d'hydratation.
function arrondi(valeur: number): number {
  return Math.round(valeur * 100) / 100;
}

export default function SignatureCircle({
  variante,
  taille = 160,
  className = "",
  texteArc = "CHAMPION DU MONDE • CHAMPION D'EUROPE • CHAMPION DE FRANCE • ",
}: SignatureCircleProps) {
  const centre = taille / 2;
  const rayon = taille / 2 - 6;
  const style: CSSProperties = { width: taille, height: taille };

  if (variante === "point") {
    return (
      <span
        aria-hidden="true"
        className={`inline-block rounded-full bg-or-clair ${className}`}
        style={{ width: Math.max(taille, 10), height: Math.max(taille, 10) }}
      />
    );
  }

  const tourne = variante === "sceau";

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${taille} ${taille}`}
      style={style}
      className={`${tourne ? "animate-spin-slow" : ""} ${className}`}
    >
      {variante === "amorce" && (
        <circle
          cx={centre}
          cy={centre}
          r={rayon}
          fill="none"
          stroke="var(--or-patine)"
          strokeWidth={1}
          strokeDasharray={`${rayon * 1.2} ${rayon * 5}`}
          strokeLinecap="round"
        />
      )}

      {variante === "pate" && (
        <circle
          cx={centre}
          cy={centre}
          r={rayon}
          fill="none"
          stroke="var(--or-patine)"
          strokeWidth={2.5}
        />
      )}

      {variante === "pizza" && (
        <>
          <circle cx={centre} cy={centre} r={rayon} fill="none" stroke="var(--or-patine)" strokeWidth={1} />
          <circle cx={centre} cy={centre} r={rayon * 0.72} fill="none" stroke="var(--or-patine)" strokeWidth={0.75} opacity={0.6} />
        </>
      )}

      {variante === "four" && (
        <>
          <circle cx={centre} cy={centre} r={rayon} fill="none" stroke="var(--or-patine)" strokeWidth={1} />
          <circle cx={centre} cy={centre} r={rayon * 0.35} fill="var(--braise)" opacity={0.5} />
        </>
      )}

      {variante === "cadran" && (
        <>
          <circle cx={centre} cy={centre} r={rayon} fill="none" stroke="var(--or-patine)" strokeWidth={1} />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x1 = arrondi(centre + Math.cos(angle) * rayon * 0.86);
            const y1 = arrondi(centre + Math.sin(angle) * rayon * 0.86);
            const x2 = arrondi(centre + Math.cos(angle) * rayon);
            const y2 = arrondi(centre + Math.sin(angle) * rayon);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--or-patine)"
                strokeWidth={1}
              />
            );
          })}
        </>
      )}

      {variante === "sceau" && (
        <>
          <defs>
            <path
              id={ID_PARTAGE}
              d={`M ${centre},${centre} m -${rayon},0 a ${rayon},${rayon} 0 1,1 ${
                rayon * 2
              },0 a ${rayon},${rayon} 0 1,1 -${rayon * 2},0`}
            />
          </defs>
          <circle cx={centre} cy={centre} r={rayon} fill="none" stroke="var(--or-clair)" strokeWidth={1} />
          <circle cx={centre} cy={centre} r={rayon * 0.82} fill="none" stroke="var(--or-patine)" strokeWidth={0.5} />
          <text fill="var(--or-clair)" fontSize={taille * 0.052} letterSpacing={2}>
            <textPath href={`#${ID_PARTAGE}`}>{texteArc.repeat(2)}</textPath>
          </text>
        </>
      )}
    </svg>
  );
}
