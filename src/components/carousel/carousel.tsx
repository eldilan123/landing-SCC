"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

import * as fonts from "@/libs/fonts";
import styles from "./EmblaCarousel.module.css";


interface DataCarousel {
  id: number;
  title: string;
  description: string;
  icon: any;
  bgColor: string;
}

type PropType = {
  slides: DataCarousel[];
  /** callback para entregar la API al padre */
  onInit?: (api: EmblaCarouselType) => void;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, onInit }) => {
  /** tuple → [ref para viewport, API] */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    loop: false,
  });

  /* Avisamos al padre al montar / reInit */
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      onInit?.(emblaApi);
    }
  }, [emblaApi, onInit]);

  return (
    <div className={`${styles.embla} w-full`}>
      <div className={`${styles.viewport} embla__viewport`} ref={emblaRef}>
        <div className={`${styles.container} embla__container flex flex-nowrap`}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`
                ${styles.slide} embla__slide
                w-[21vw] max-md:w-[40vw] max-sm:w-[80vw]
                p-[22px] rounded-[20px] mr-[2vw] flex flex-col
              `}
              style={{
                border: `2px solid ${slide.bgColor}`,
                color: "rgba(69, 26, 26, 1)",
              }}
            >
              <div
                className={`
                  ${styles.slideContent} embla__slide__content
                  flex flex-col h-full
                `}
              >
                {/* ---------- Icono circular ---------- */}
                <div className="mb-4">
                  <div
                    className={`
                      ${styles.iconContainer}
                      rounded-full aspect-square
                      w-[80px] md:w-[90px] lg:w-[106px]
                      flex items-center justify-center
                    `}
                    style={{
                      background: slide.bgColor,
                      border: "6px solid #fff",
                    }}
                  >
                    <div className="relative w-3/5 h-3/5 flex items-center justify-center">
                      <Image
                        src={slide.icon}
                        alt={`${slide.title} icon`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  </div>
                </div>

                {/* ---------- Texto ---------- */}
                <div className="flex flex-col flex-grow">
                  <h5
                    className={`
                      ${fonts.space_grotesk.className}
                      text-[22px] font-[700] leading-[24px] mb-4
                    `}
                  >
                    {slide.title}
                  </h5>
                  <p
                    className={`
                      ${styles.description}
                      ${fonts.funnel_sans.className}
                      text-[14px] font-[300] leading-[22px] flex-grow
                    `}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
