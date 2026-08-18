"use client";

import { useRouter } from "next/navigation";

export default function BoutonRetour({ className = "" }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`eyebrow eyebrow--sans-trait inline-flex items-center gap-2 text-gris-perle transition-colors hover:text-or-clair ${className}`}
    >
      <span aria-hidden="true">←</span> Retour
    </button>
  );
}
