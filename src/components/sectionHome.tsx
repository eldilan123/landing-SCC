import React from "react";
import Image from "next/image";
import * as fonts from "@/libs/fonts";
import styles from "./sectionHome.module.scss"; 

// Ajusta estas rutas a tus archivos reales:
import heroImg from "../../public/hero-banner-scc.png";
import logo from "../../public/Vector.png";

const SectionHome: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        min-h-[600px]
        md:min-h-[700px]
        overflow-hidden
      "
    >
      {/* Fondo simple para móvil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EB3751] to-[#F0813C] md:hidden"></div>

      {/* Contenedor absoluto para SVG (izquierda) e Imagen (derecha) - Solo para desktop */}
      <div className="absolute inset-0 hidden md:flex">
        {/* IZQUIERDA: SVG de Figma */}
        <div className="relative w-[42%] min-w-[300px]">
          <svg
            viewBox="0 0 814 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              d="M548.376 53.68L805.626 592.3C829.486 642.25 793.066 700 737.706 700H-174.134C-195.734 700 -213.244 682.49 -213.244 660.89V39.11C-213.244 17.51 -195.734 0 -174.134 0H463.256C499.596 0 532.716 20.88 548.376 53.68Z"
              fill="url(#paint0_linear_664_602)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_664_602"
                x1="218.756"
                y1="212.5"
                x2="920.655"
                y2="660.42"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EB3751" />
                <stop offset="1" stopColor="#F0813C" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo semi-transparente dentro del SVG */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src={logo}
              alt="Background Logo"
              width={350}
              height={350}
              className="opacity-10"
            />
          </div>
        </div>

        {/* DERECHA: Imagen con clipPath para replicar el recorte de Figma */}
        <div className="relative flex-1">
          <Image
            src={heroImg}
            alt="Hero Banner"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
      
      {/* Logo semi-transparente para móvil */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
        <Image
          src={logo}
          alt="Background Logo"
          width={200}
          height={200}
          className="opacity-10"
        />
      </div>

      {/* Contenido del hero (texto y botón) */}
      <div 
        className="
          relative
          z-10
          flex
          items-center
          w-full
          h-full
          px-6 
          py-10
          md:px-12
          md:py-16
        "
      >
        {/* Ajustamos el ancho para que coincida con la parte izquierda, 
            y usamos max-w para evitar que el texto se extienda demasiado */}
        <div className={`${styles.heroTextWrapper} max-w-xl w-full md:w-[42%] md:min-w-[300px] text-white`}>
          {/* TITULAR */}
          <h1
            className={`
              ${fonts.space_grotesk.className} 
              text-[28px] 
              md:text-[38px] 
              leading-[34px] 
              md:leading-[46px] 
              font-bold 
              mb-2
            `}
          >
            Eficiencia en movimiento,<br />
            seguridad en cada paso<br />
            y gobierno en cada decisión
          </h1>

          {/* SUB-ENCABEZADO */}
          <h2
            className={`
              ${fonts.funnel_sans.className} 
              text-[16px] 
              md:text-[18px] 
              leading-[22px] 
              md:leading-[26px] 
              font-semibold
              mb-4
              md:mb-6
            `}
          >
            Moderniza tu control de accesos y protege tu organización.
          </h2>

          {/* PÁRRAFO PRINCIPAL */}
          <p
            className={`
              ${fonts.funnel_sans.className} 
              text-[14px] 
              md:text-[16px] 
              leading-[22px] 
              md:leading-[24px] 
              mb-6
            `}
          >
            Secure Core Consulting ofrece soluciones de seguridad y control
            de acceso de vanguardia para empresas modernas. Nuestro producto
            estrella, NexusCore Controller, garantiza una gestión de seguridad
            fluida en toda su organización.
          </p>

          {/* BOTÓN DE ACCIÓN */}
          <button
            type="button"
            className={`
              ${fonts.funnel_sans.className} 
              bg-white 
              text-black 
              px-6
              py-3
              md:px-[44px] 
              md:py-[19px] 
              rounded-full 
              text-[14px]
              md:text-[16px] 
              font-[600]
              hover:bg-gray-200
              transition
              w-full
              md:w-auto
              text-center
            `}
          >
            ¡Empecemos!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionHome;