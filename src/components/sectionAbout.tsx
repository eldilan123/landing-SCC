import React from "react";
import Image from "next/image";

import * as fonts from "@/libs/fonts";

import img_base from "../../public/quienes-somos-ssc.png";
import img_border from "../../public/quienes-somos-border.png";
import img_rectangle_bg from "../../public/Rectangle 5.png";

const SectionAboutUs: React.FC = () => {
  return (
    <section id="about" className="bg-cover h-screen">
      <div className="container w-[100vw] h-[100vh] max-sm:flex max-sm:justify-center">
        <Image
          src={img_rectangle_bg}
          className="absolute -z-20 max-sm:hidden"
          alt="quienes-somos-ssc.png"
        />
        <Image
          src={img_border}
          className="absolute -z-10 w-[34%] left-[9vw] max-sm:hidden"
          style={{ top: "calc(100vh + 25vh)" }}
          alt="quienes-somos-border.png"
        />
        <Image
          src={img_base}
          className="absolute left-[7vw] w-[34%] max-sm:hidden"
          style={{ top: "calc(100vh + 21vh)" }}
          alt="Rectangle 5.png"
        />
        <div
          className="text-start max-w-[46vw] max-md:max-w-[60vw] max-sm:max-w-[80vw] relative md:left-[50%] top-[10%]"
          style={{ color: "rgba(69, 26, 26, 1)" }}
        >
          <h2
            className={`${fonts.space_grotesk} font-[700] text-[42px] leading-[61px] mb-4`}
            style={{
              background:
                "linear-gradient(89.23deg, #F0813C 26.26%, #EB3751 68.68%)",
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            ¿Quiénes somos?
          </h2>
          <div className="container">
            <p
              className={`${fonts.inter} font-[500] text-[24px] align-middle leading-[45px] mb-12`}
            >
              <b className="font-[900] ">Secure Core Consulting</b> ofrece
              soluciones de seguridad y control de acceso de vanguardia para
              empresas modernas. Nuestro producto estrella,{" "}
              <b className="font-[900] ">NexusCore Controller</b>, garantiza una
              gestión de seguridad fluida en toda su organización.
            </p>
            <button
              type="button"
              className={`${fonts.funnel_sans.className} text-[16px] font-[600] align-middle text-white rounded-[50px] w-[33%] max-sm:w-[70vw] cursor-pointer`}
              style={{
                padding: "19px 44px",
                boxShadow: "0px 4px 15px 0px rgba(235, 55, 81, 0.3)",
                backgroundColor: "rgba(235, 55, 81, 1)",
              }}
            >
              Saber más!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutUs;
