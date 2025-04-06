import Image from "next/image";
import React from "react";

import * as fonts from "@/libs/fonts";

import vectorLeft from "../../public/Vector-hero-banner.png";
import vectorRight from "../../public/hero-banner-scc.png";
import logo from "../../public/Vector.png";

const SectionHome: React.FC = () => {
  return (
    <section id="home" className="bg-cover h-screen">
      <Image
        src={vectorLeft}
        className="absolute top-0 left-0 -z-20 w-[56vw] h-[100vh] max-sm:hidden"
        alt="Vector-hero-banner.svg"
      />
      <div className="container w-[100vw] h-[100vh] max-sm:bg-black">
        <div className="text-white text-start max-w-[32vw] max-md:max-w-[50vw] max-sm:max-w-[80vw] relative left-[7vw] top-[5vh]">
          <h2
            className={`${fonts.space_grotesk.className} text-[36px] leading-[41px] align-middle mb-[1rem]`}
          >
            Eficiencia en movimiento, seguridad en cada paso y gobierno en cada
            decisión
          </h2>
          <span
            className={`${fonts.funnel_sans.className} text-[23.18px] leading-[35px] align-middle`}
          >
            Secure Core Consulting ofrece soluciones de seguridad y control de
            acceso de vanguardia para empresas modernas. Nuestro producto
            estrella, NexusCore Controller, garantiza una gestión de seguridad
            fluida en toda su organización
          </span>
          <button
            type="button"
            className={`${fonts.funnel_sans.className} text-[16px] font-[600] align-middle text-black rounded-[50px] bg-white w-[60%] cursor-pointer mt-[1rem]`}
            style={{ padding: "19px 44px" }}
          >
            Empecemos!
          </button>
          <Image
            src={logo}
            className="absolute -z-10 opacity-10 top-[29%] left-[38%] w-[346px] h-[355px] max-sm:hidden"
            alt="Vector.png"
          />
        </div>
      </div>
      <Image
        src={vectorRight}
        className="absolute top-0 right-0 -z-10 h-[100vh] w-[52%] max-sm:hidden"
        alt="hero-banner-scc.png"
      />
    </section>
  );
};
export default SectionHome;
