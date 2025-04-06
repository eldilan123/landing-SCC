import React from "react";

import * as fonts from "@/libs/fonts";

import logo from "../../public/Logo.png";
import Image from "next/image";
import { mockContact } from "@/services/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import VectorLeft from "./vectores/vectorLeft";
import VectorRight from "./vectores/vectorRight";

const SectionContact: React.FC = () => {
  return (
    <section id="contact" className="overflow-x-hidden relative" style={{ background: "rgba(22, 20, 12, 1)" }}>
      <VectorLeft  />
      <div className="text-white" style={{ padding: "9vh 7vw" }}>
        <h2
          className={`${fonts.space_grotesk} font-[700] text-[40px] leading-[61px] align-middle text-3xl mb-4`}
        >
          ¿Listo para transformar su seguridad?
        </h2>
        <p
          className={`${fonts.space_grotesk} font-[700] text-[16px] leading-[25px] align-middle mb-6`}
        >
          Contáctenos hoy saber cómo podemos ayudar a proteger su organización.
        </p>
        <div className="flex flex-col max-md:flex-row max-sm:flex-col">
          <input
            type="email"
            placeholder="Ingrese su email corporativo"
            className="p-3 rounded-[20px] bg-white w-[40vw] max-md:w-[60vw] max-sm:w-[80vw]"
            style={{ color: "rgba(182, 175, 198, 1)" }}
          />
          <button
            className="text-white px-4 py-3 rounded-[20px] w-[15vw] max-md:w-[20vw] max-sm:w-[80vw] ml-8 max-md:ml-4 max-sm:ml-0 mt-4 max-sm:mt-2 cursor-pointer"
            style={{
              background: "rgba(235, 55, 81, 1)",
              boxShadow: "0px 4px 15px 0px rgba(235, 55, 81, 0.3)",
            }}
          >
            ¡Comenzar!
          </button>
        </div>
        <div className="text-start mt-[5rem] relative flex">
          <div className="w-[22%]">
            <Image src={logo} alt={logo.toString()} className="w-[15vw]" />
            <p>Síguenos en</p>
            <FontAwesomeIcon className="w-[1.4vw]" icon={faLink} />
          </div>
          {mockContact.map((i) => {
            return (
              <div key={i.id} className="w-[25%]">
                <ul>
                  <li key={i.id}>
                    <p
                      className={`${fonts.funnel_sans} font-[700] text-[16px] align-middle leading-[25px]`}
                    >
                      {i.title}
                    </p>
                    <hr className="w-[3vw] mb-[2rem]" />
                  </li>
                  {i.items.map((j) => {
                    return (
                      <li key={j}>
                        <p
                          className={`${fonts.funnel_sans} font-[700] text-[16px] align-middle leading-[25px] mb-[2rem]`}
                        >
                          {j}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <VectorRight />
    </section>
  );
};

export default SectionContact;
