"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-noir-fumee text-xs uppercase tracking-[0.2em] text-gris-perle">
      Chargement du plan
    </div>
  ),
});

export default function LeafletMapLoader() {
  return <LeafletMap />;
}
