"use client";

import React from "react";
import Image from "next/image";
import * as fonts from "@/libs/fonts";
import locoColor from "../../public/Capa_1.svg";
import { mockValues } from "@/services/mockData"; // Import mockValues only once
import EmblaCarousel from "./carousel/carousel";

const SectionValues: React.FC = () => {
  // Make sure we're not accidentally duplicating the data
  const carouselData = React.useMemo(() => mockValues, []);
  
  return (
    <section id="features" className="bg-cover">
      <div className="text-start mb-[3rem] mt-[2rem] relative flex pl-[6vw] pr-[6vw]">
        <div className="w-[22%] max-md:pt-8">
          <Image src={locoColor} alt="Secure Core logo" />
        </div>
        <div className="w-[100%]" style={{ color: "rgba(69, 26, 26, 1)" }}>
          <h2
            className={`${fonts.space_grotesk} font-[700] text-[50px] leading-[61px] mb-8 max-md:ml-4`}
            style={{
              background: "linear-gradient(89.23deg, #F3BC2B 26.26%, #EB3751 68.68%)",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            Valores destacados
          </h2>
          <span
            className={`${fonts.funnel_sans} font-[500] text-[16px] align-middle leading-[27px] mb-12`}
          >
            En <b className="font-[700]">Secure Core Consulting,</b> estamos a la vanguardia de la protección digital.
            Ofrecemos soluciones innovadoras y personalizadas para garantizar la seguridad de tus datos y sistemas,
            enfrentando los desafíos tecnológicos del presente y futuro. Protege lo más valioso: tu información, tu
            negocio, tu tranquilidad.
          </span>
        </div>
      </div>
      <div className="w-full pl-[5vw] pr-[5vw] mb-[7rem]">
        {/* Only render the carousel once */}
        <EmblaCarousel slides={carouselData} />
      </div>
    </section>
  );
};

export default SectionValues;