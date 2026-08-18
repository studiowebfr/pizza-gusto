"use client";

import { type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useMediaQuery } from "@/lib/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

function LenisScrollTriggerBridge() {
  useLenis((lenis) => {
    ScrollTrigger.update();
    void lenis;
  });
  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <LenisScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}
