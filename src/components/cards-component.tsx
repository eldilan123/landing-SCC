import React from "react";
import semiCircle from "../../public/semi-circle.png";
import logoCards from "../../public/Group.svg";
import * as fonts from "@/libs/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface CardComponentProps {
  title: string;
  description: string;
  path: string | "#";
}

const CardComponent: React.FC<CardComponentProps> = (props) => {
  const { title, description, path } = props;

  return (
    <div
      className="container relative text-center rounded-[20px] justify-between flex flex-col pt-[40px] w-[26vw] max-md:w-[40vw] max-sm:w-[80vw] h-[502px] mb-8"
      style={{
        color: "rgba(69, 26, 26, 1)",
        boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="container pl-[4vw] pr-[4vw]">
        <div className="flex justify-center mb-8">
          <Image
            src={semiCircle}
            className="absolute top-0 rounded-t-[20px]"
            alt="Vector-hero-banner.svg"
          />
          <div
            className="rounded-[80px] w-[106px] h-[106px] relative"
            style={{
              background: "rgba(252, 69, 84, 1)",
              border: "6px solid rgba(255, 255, 255, 1)",
            }}
          >
            <Image
              src={logoCards}
              className="absolute top-[20%] left-[25%]"
              alt="Vector-hero-banner.svg"
            />
          </div>
        </div>
        <h5
          className={`${fonts.space_grotesk} text-[22px] font-[700] leading-[24px] align-middle `}
        >
          {title}
        </h5>
      </div>
      <div className="container pl-[2vw] pr-[2vw] relative">
        <p
          className={`${fonts.funnel_sans} text-[14px] font-[300] leading-[22px] align-middle `}
        >
          {description}
        </p>
      </div>
      <div
        className="container flex justify-center p-[30px] relative"
        style={{ borderTop: "1px solid rgba(252, 69, 84, 1)" }}
      >
        <a
          href={path}
          className={`${fonts.funnel_sans} text-[16px] font-[600] leading-[100%] align-middle`}
        >
          Saber más
        </a>
        <FontAwesomeIcon
          className="w-[1.4vw] absolute left-[65%] top-[37%]"
          icon={faArrowRight}
        />
      </div>
    </div>
  );
};

export default CardComponent;
