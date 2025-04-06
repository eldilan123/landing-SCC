import React from "react";

import * as fonts from "@/libs/fonts";
import CardComponent from "./cards-component";

import { mockServices } from "@/services/mockData";

const SectionServices: React.FC = () => {
  return (
    <section id="services" className="bg-cover">
      <div className="text-center mb-[6rem]">
        <h2
          className={`${fonts.space_grotesk} font-[700] text-[50px] leading-[61px] mb-10`}
          style={{
            background:
              "linear-gradient(89.23deg, #F3BC2B 26.26%, #EB3751 68.68%)",
            color: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Nuestros servicios
        </h2>
        <div className="pl-[7vw] pr-[7vw]">
          <span
            className={`${fonts.inter} font-[500] text-[24px] align-middle leading-[45px] mb-12`}
          >
            <b className="font-[900] ">Secure Core Consulting S.A.S.</b> tiene
            como objeto principal el desarrollo de actividades relacionadas con
            la tecnología de la información y los servicios asociados,
            incluyendo, pero no limitándose a:
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly pl-[3vw] pr-[3vw] mb-[4rem]">
        {mockServices.map((e) => {
          return (
            <CardComponent
              key={e.id}
              title={e.title.toString()}
              description={e.description.toString()}
              path={e.path.toString()}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionServices;
