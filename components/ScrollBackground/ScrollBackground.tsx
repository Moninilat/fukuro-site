"use client";

import { useEffect } from "react";

export default function ScrollBackground() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".page");
    if (!page) return;

    // Cargamos la imagen para saber su tamaño real
    const img = new Image();
    img.src = "/assets/home-bg.png";

    let naturalW = 0;
    let naturalH = 0;

    const computeAndApply = () => {
      if (!naturalW || !naturalH) return;

      const y = window.scrollY;

      // La imagen está en background-size: 100% auto
      // => el ancho renderizado de la imagen = ancho del viewport
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // alto renderizado de la imagen manteniendo proporción
      const renderedH = (naturalH / naturalW) * vw;

      // máximo desplazamiento posible sin “pasarse”
      const maxOffset = Math.max(0, Math.round(renderedH - vh));

      // cuánto se mueve el fondo respecto al scroll
      // 1.0 = se mueve igual que el scroll
      // 0.6 = más lento (parallax suave)
      const speed = 1.0;

      const desired = Math.round(y * speed);

      // clamp: 0..maxOffset
      const offset = Math.max(0, Math.min(desired, maxOffset));

      page.style.backgroundPosition = `center ${offset}px`;
    };

    const onScroll = () => computeAndApply();
    const onResize = () => computeAndApply();

    img.onload = () => {
      naturalW = img.naturalWidth;
      naturalH = img.naturalHeight;
      computeAndApply();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize, { passive: true });
    };

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
