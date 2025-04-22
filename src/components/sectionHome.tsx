'use client'
import React, { useState } from "react";
import Image from "next/image";
import * as fonts from "@/libs/fonts";
import styles from "./sectionHome.module.scss";

// Ajusta estas rutas a tus archivos reales:
import heroImg from "../../public/hero-banner-scc.png";
import logo from "../../public/Vector.png";
import heroDesktop from "../../public/hero-banner-desktop.png";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

export default function SectionHome() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden"
    >
      {/* ==== BACKGROUND ==== */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EB3751] to-[#F0813C] md:hidden" />
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${heroDesktop.src})` }}
      />

      {/* ==== ESCUDO TENUE – SOLO DESKTOP ==== */}
      <div
        className="
          absolute inset-0 hidden md:flex
          items-center justify-center md:justify-start
          pointer-events-none         /* no capta clicks */
          z-[5]                        /* por encima del bg, por debajo del texto */
        "
      >
        <div className="relative w-[42%] flex justify-center">
          <Image
            src={logo}
            alt="Escudo Secure Core Consulting"
            width={420}
            height={420}
            className="opacity-10 select-none"
            priority={false}
          />
        </div>
      </div>

      {/* ==== ESCUDO TENUE – SOLO MÓVIL ==== */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden pointer-events-none">
        <Image
          src={logo}
          alt="Escudo Secure Core Consulting"
          width={240}
          height={240}
          className="opacity-10 select-none"
        />
      </div>

      {/* ==== CONTENIDO DEL HERO ==== */}
      <div className="relative z-10 flex items-center w-full h-full px-6 py-10 md:px-12 md:py-16">
        <div
          className={`
            ${styles.heroTextWrapper}
            max-w-xl w-full md:w-[42%] text-white
          `}
        >
          {/* TÍTULO */}
          <h1
            className={`${fonts.space_grotesk.className} text-[28px] md:text-[38px] leading-[34px] md:leading-[46px] font-bold mb-2`}
          >
            Eficiencia en movimiento,
            <br />
            seguridad en cada paso
            <br />y gobierno en cada decisión
          </h1>

          {/* SUBTÍTULO */}
          <h2
            className={`${fonts.funnel_sans.className} text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] font-semibold mb-6`}
          >
            Conectamos tecnología, personas y procesos para que tu empresa
            avance con confianza y control total. Somos tu socio estratégico en
            innovación.
          </h2>

          {/* BOTÓN */}
          <button
            onClick={() => setOpen(true)}
            className={`${fonts.funnel_sans.className} bg-white text-black px-6 py-3 md:px-[44px] md:py-[19px] rounded-full text-[14px] md:text-[16px] font-[600] hover:bg-gray-200 transition w-full md:w-auto`}
          >
            ¡Empecemos!
          </button>
        </div>
      </div>
      {/* MODAL con el formulario */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <h3
          className={`${fonts.space_grotesk.className} text-2xl font-bold mb-4`}
        >
          Contáctanos
        </h3>
        <ContactForm onDone={() => setOpen(false)} />
      </Modal>
    </section>
  );
}
