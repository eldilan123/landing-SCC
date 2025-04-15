// CardComponent.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import * as fonts from "@/libs/fonts";

interface CardComponentProps {
  title: string;
  description: string;
  icon: IconDefinition; // Usamos el tipo de FontAwesome
  path?: string; // URL opcional
  onClick?: () => void; // Acción opcional para abrir un modal u otra acción
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description,
  icon,
  path = "#",
  onClick,
}) => {
  return (
    <div
      className="relative text-center rounded-[20px] flex flex-col justify-between pt-[40px] w-[26vw] max-md:w-[40vw] max-sm:w-[80vw] h-[502px] mb-8"
      style={{
        color: "rgba(69, 26, 26, 1)",
        boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Encabezado con el icono */}
      <div className="px-[4vw]">
        <div className="flex justify-center mb-8">
          <div className="rounded-full w-[106px] h-[106px] flex items-center justify-center bg-[#FC4554]">
            <FontAwesomeIcon icon={icon} className="text-white text-4xl" />
          </div>
        </div>
        <h5
          className={`${fonts.space_grotesk} text-[22px] font-[700] leading-[24px]`}
        >
          {title}
        </h5>
      </div>

      {/* Descripción del servicio */}
      <div className="px-[2vw]">
        <p
          className={`${fonts.funnel_sans} text-[14px] font-[300] leading-[22px]`}
        >
          {description}
        </p>
      </div>

      {/* Sección de acción: botón "Ver más" si se provee onClick, sino enlace "Saber más" */}
      {onClick ? (
        <div
          className="flex justify-center p-[30px] relative border-t border-[#FC4554]"
        >
          <button
            onClick={onClick}
            className={`${fonts.funnel_sans} text-[16px] font-[600] leading-[100%]`}
          >
            Ver más
          </button>
          <FontAwesomeIcon
            className="w-[1.4vw] absolute left-[65%] top-[37%]"
            icon={faArrowRight}
          />
        </div>
      ) : (
        <div
          className="flex justify-center p-[30px] relative border-t border-[#FC4554]"
        >
          <a
            href={path}
            className={`${fonts.funnel_sans} text-[16px] font-[600] leading-[100%]`}
          >
            Saber más
          </a>
          <FontAwesomeIcon
            className="w-[1.4vw] absolute left-[65%] top-[37%]"
            icon={faArrowRight}
          />
        </div>
      )}
    </div>
  );
};

export default CardComponent;
