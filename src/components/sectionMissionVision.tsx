import React from "react";
import Image from "next/image";

import * as fonts from "@/libs/fonts";

import img_mission from "../../public/Rectangle 7.png";
import img_vision from "../../public/Rectangle 7(1).png";
import { mockMission } from "@/services/mockData";

const SectionMissionVision: React.FC = () => {
  return (
    <section id="mission" className="bg-cover">
      <div className="text-center mb-[3rem] mt-[2rem]">
        <h2
          className={`${fonts.space_grotesk} font-[700] text-[50px] leading-[61px]`}
          style={{
            background:
              "linear-gradient(89.23deg, #F3BC2B 26.26%, #EB3751 68.68%)",
            color: "transparent",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Misión y visión
        </h2>
      </div>
      <div className="flex flex-wrap justify-evenly pl-[3vw] pr-[3vw] mb-16 gap-y-8">
        {mockMission.map((e) => {
          return (
            <div
              key={e.auxId}
              className={`container rounded-[22px] justify-between flex flex-col p-[32px] w-[42vw] max-md:w-[60vw] max-sm:w-[80vw] ${
                e.auxId === "mi" ? "max-md:mb-8" : ""
              }`}
              style={{
                color: "rgba(69, 26, 26, 1)",
                background: `${e.bgColor}`,
              }}
            >
              <div className="container">
                <div className="flex mb-8">
                  <Image
                    src={e.auxId === "mi" ? img_mission : img_vision}
                    className="rounded-t-[22px]"
                    alt={
                      e.auxId === "mi"
                        ? img_mission.toString()
                        : img_vision.toString()
                    }
                  />
                </div>
                <h5
                  className={`${fonts.space_grotesk} text-[42px] font-[700] leading-[61px] align-middle `}
                >
                  {e.title}
                </h5>
                <p
                  className={`${fonts.funnel_sans} text-[16px] font-[400] leading-[22px] align-middle `}
                >
                  {e.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionMissionVision;