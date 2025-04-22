"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomeSectionPassed, setIsHomeSectionPassed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled a bit (for smaller screens)
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if we've scrolled past the home section
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const homeSectionHeight = homeSection.offsetHeight;
        setIsHomeSectionPassed(window.scrollY > homeSectionHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Cerrar menú al hacer click en enlace
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      id="screen-top"
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${isHomeSectionPassed
          ? 'bg-gradient-to-r from-[#EB3751] to-[#F0813C] shadow-md'
          : isScrolled
            ? 'bg-gradient-to-r from-[#EB3751] to-[#F0813C] bg-opacity-90'
            : 'bg-transparent'
        }
        text-white
        px-8 py-4
        flex items-center
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (clicable para volver a la sección "home") */}
        <div className="cursor-pointer flex-none" onClick={() => scrollToSection("home")}>
          <Image 
            src={logo} 
            alt="Logo Secure Core Consulting" 
            className="w-28 md:w-auto h-auto"
          />
        </div>

        {/* Ícono de hamburguesa (solo se muestra en móvil) */}
        <div className="sm:hidden block cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6" />
        </div>

        {/* Menú de navegación */}
        <nav
          className={`
            sm:flex
            space-x-0 sm:space-x-6
            sm:flex-row flex-col
            items-center
            ${isMenuOpen 
              ? "flex fixed top-[72px] left-0 w-full bg-gradient-to-r from-[#EB3751] to-[#F0813C] py-4 shadow-lg" 
              : "hidden sm:flex"
            }
            transition-all duration-300 ease-in-out
          `}
        >
          <a
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center"
          >
            ¿Quiénes somos?
          </a>
          <a
            onClick={() => scrollToSection("services")}
            className="cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center"
          >
            Servicios
          </a>
          <a
            onClick={() => scrollToSection("mission")}
            className="cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center"
          >
            Misión y Visión
          </a>
          <a
            onClick={() => scrollToSection("features")}
            className="cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center"
          >
            Valores Destacados
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:underline py-2 sm:py-0 w-full sm:w-auto text-center"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;