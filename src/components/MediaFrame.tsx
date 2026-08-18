"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface SourceVideo {
  webm: string;
  mp4: string;
  poster: string;
}

interface MediaFrameProps {
  /** Description sobre du plan attendu — sert de repère pour le shooting et de aria-label. */
  legende: string;
  /** Une fois les vrais rushes disponibles, brancher ici : { webm, mp4, poster }. */
  video?: SourceVideo;
  /** Photographie statique (chemin sous /public), via next/image. */
  image?: string;
  /** À réserver à l'image la plus haute dans la page (évite qu'elle soit le LCP tardif). */
  priority?: boolean;
  sizes?: string;
  variante?: "ambre" | "braise" | "sombre";
  className?: string;
  children?: React.ReactNode;
}

const DEGRADES: Record<NonNullable<MediaFrameProps["variante"]>, string> = {
  ambre:
    "radial-gradient(circle at 30% 20%, rgba(185,138,72,0.22), transparent 55%), radial-gradient(circle at 75% 80%, rgba(228,192,138,0.12), transparent 50%), var(--noir-fumee)",
  braise:
    "radial-gradient(circle at 60% 30%, rgba(140,74,47,0.35), transparent 55%), radial-gradient(circle at 20% 85%, rgba(185,138,72,0.14), transparent 50%), var(--noir-ardoise)",
  sombre:
    "radial-gradient(circle at 50% 40%, rgba(185,138,72,0.08), transparent 60%), var(--noir-ardoise)",
};

export default function MediaFrame({
  legende,
  video,
  image,
  priority = false,
  sizes = "100vw",
  variante = "ambre",
  className = "",
  children,
}: MediaFrameProps) {
  const conteneurRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!video || !conteneurRef.current) return;
    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          setVisible(true);
          observateur.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observateur.observe(conteneurRef.current);
    return () => observateur.disconnect();
  }, [video]);

  useEffect(() => {
    if (!visible || !videoRef.current) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!reduceMotion) {
      videoRef.current.play().catch(() => undefined);
    }
  }, [visible]);

  // Une <Image> réelle porte déjà son propre texte alternatif : le
  // conteneur n'a pas besoin de dupliquer `role="img"`, qui créerait un
  // second élément « image » imbriqué pour les lecteurs d'écran.
  const decoratif = Boolean(image);

  return (
    <div
      ref={conteneurRef}
      role={decoratif ? undefined : "img"}
      aria-label={decoratif ? undefined : legende}
      className={cn("grain relative overflow-hidden", className)}
      style={!video && !image ? { background: DEGRADES[variante] } : undefined}
    >
      {image && (
        <Image
          src={image}
          alt={legende}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      )}

      {video && (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="none"
          poster={video.poster}
        >
          {visible && (
            <>
              <source src={video.webm} type="video/webm" />
              <source src={video.mp4} type="video/mp4" />
            </>
          )}
        </video>
      )}
      {children}
    </div>
  );
}
