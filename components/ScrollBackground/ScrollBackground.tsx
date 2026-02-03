"use client";

import { useEffect } from "react";

export default function ScrollBackground() {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".page");
    if (!el) return;

    const onScroll = () => {
      // cuánto has bajado
      const y = window.scrollY;

      // factor: 0.3 = se mueve más lento que el scroll (más elegante)
      const offset = Math.round(y * 0.35);

      el.style.backgroundPosition = `center ${offset}px`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
