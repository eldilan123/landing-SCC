"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import * as fonts from "@/libs/fonts";
import locoColor  from "../../public/Capa_1.svg";
import glowValues from "../../public/blob-values.png";

import { mockValues } from "@/services/mockData";
import EmblaCarousel from "./carousel/carousel";

const SectionValues: React.FC = () => {
  /* datos para las tarjetas */
  const carouselData = React.useMemo(() => mockValues, []);

  /* API de Embla para flechas */
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section id="features" className="relative overflow-hidden">
      {/* ---------- BLOB (ahora visible) ---------- */}
      <Image
        src={glowValues}
        alt=""
        fill
        className="
          pointer-events-none select-none z-0
          object-cover
          scale-[1.3]
          translate-x-[35%] -translate-y-[15%]
        "
        priority={false}
      />

      {/* ---------- Encabezado + flechas ---------- */}
      <div className="flex flex-wrap md:flex-nowrap items-start mb-12 px-[6vw] mt-[2rem]">
        <div className="w-[22%] max-md:pt-8">
          <Image src={locoColor} alt="Secure Core logo" />
        </div>

        <div className="flex-1 md:ml-8 flex">
          {/* texto */}
          <div className="flex-1" style={{ color: "rgba(69, 26, 26, 1)" }}>
            <h2
              className={`${fonts.space_grotesk.className} font-[700] text-[50px] leading-[61px] mb-4 max-md:ml-4`}
              style={{
                background:
                  "linear-gradient(89.23deg,#F3BC2B 26.26%,#EB3751 68.68%)",
                color: "transparent",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
              }}
            >
              Valores destacados
            </h2>

            <p className={`${fonts.funnel_sans.className} font-[500] text-[16px] leading-[27px]`}>
              En <b className="font-[700]">Secure Core Consulting</b>, estamos a
              la vanguardia de la protección digital. Ofrecemos soluciones
              innovadoras y personalizadas para garantizar la seguridad de tus
              datos y sistemas, enfrentando los desafíos tecnológicos del presente
              y futuro. Protege lo más valioso: tu información, tu negocio, tu
              tranquilidad.
            </p>
          </div>

          {/* flechas (altura igual al bloque de texto) */}
          <div className="hidden lg:flex items-center gap-[18px] self-stretch pl-8">
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="flex items-center justify-center p-[10px] rounded-full bg-[#FC4554] hover:bg-[#e02b43] transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 6L9 12L15 18" stroke="#fff" strokeWidth="2" />
              </svg>
            </button>

            <button
              onClick={scrollNext}
              aria-label="Siguiente"
              className="flex items-center justify-center p-[10px] rounded-full bg-[#FC4554] hover:bg-[#e02b43] transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="#fff" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Carrusel ---------- */}
      <div className="w-full px-[5vw] mb-[7rem]">
        <EmblaCarousel slides={carouselData} onInit={setEmbla} />
      </div>
    </section>
  );
};

export default SectionValues;