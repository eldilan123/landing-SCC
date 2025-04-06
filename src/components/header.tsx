"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const seceltSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      id="screen-top"
      className="text-white p-5 max-sm:bg-[#eb3752ba] max-md:p-3 max-sm:p-2 bg-transparent pl-[7%] pr-[7%] max-md:pl-[5%] max-md:pr-[5%] max-sm:pl-[2%] max-sm:pr-[2%]"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a>
          <Image src={logo} alt="Logo Secure Core Consulting" />
        </a>

        {/* Ícono de hamburguesa para móviles */}
        <div
          className="max-sm:block hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="w-6 h-6"
          />
        </div>

        {/* Menú de navegación */}
        <nav
          className={`${
            isMenuOpen ? "block" : "max-sm:hidden"
          } max-sm:absolute max-sm:top-[60px] max-sm:left-0 max-sm:w-full max-sm:bg-[#eb3752ba] max-sm:z-50`}
        >
          <ul className="flex space-x-4 max-md:space-x-2 max-sm:space-x-0 max-sm:flex-col max-sm:items-center max-sm:space-y-4">
            <li>
              <a onClick={() => seceltSection("about")} className="hover:underline cursor-pointer">
                ¿Quiénes somos?
              </a>
            </li>
            <li>
              <a onClick={() => seceltSection("services")} className="hover:underline cursor-pointer">
                Servicios
              </a>
            </li>
            <li>
              <a onClick={() => seceltSection("mission")} className="hover:underline cursor-pointer">
                Misión y Visión
              </a>
            </li>
            <li>
              <a onClick={() => seceltSection("features")} className="hover:underline cursor-pointer">
                Valores Destacados
              </a>
            </li>
            <li>
              <a onClick={() => seceltSection("contact")} className="hover:underline cursor-pointer">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;