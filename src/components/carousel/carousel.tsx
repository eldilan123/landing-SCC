"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import * as fonts from "@/libs/fonts";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { mockValues } from "@/services/mockData";

interface dataCarousel {
  id: number;
  title: string;
  description: string;
  icon: any;
  bgColor: string;
}
type PropType = {
  slides: dataCarousel[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  // const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport">
        <div className="embla__container flex flex-nowrap">
          {slides.map((index) => (
            <div
              className={`embla__slide w-[21vw] max-md:w-[40vw] max-sm:w-[80vw] h-[52vh] p-[22px] rounded-[20px] mr-[2vw]`}
              style={{
                border: `2px solid ${index.bgColor}`,
                color: "rgba(69, 26, 26, 1)",
              }}
              key={index.id}
            >
              <div className="embla__slide__number">
                <div className="container relative text-start flex flex-col">
                  <div className="container mb-4">
                    <div
                      className="rounded-[50px] w-[106px] h-[106px] relative p-[18px]"
                      style={{
                        background: `${index.bgColor}`,
                        border: "6px solid rgba(255, 255, 255, 1)",
                      }}
                    >
                      <Image
                        src={index.icon}
                        className="absolute w-[4vw] top-[3vh] left-[1.5vw]"
                        alt={index.icon}
                      />
                    </div>
                  </div>
                  <div className="container relative">
                    <h5
                      className={`${fonts.space_grotesk} text-[22px] font-[700] leading-[24px] align-middle mb-4`}
                    >
                      {index.title}
                    </h5>
                    <p
                      className={`${fonts.funnel_sans} text-[14px] font-[300] leading-[22px] align-middle `}
                    >
                      {index.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
