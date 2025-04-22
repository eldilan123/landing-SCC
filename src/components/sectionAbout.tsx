"use client";
import React from "react";
import Image from "next/image";
import * as fonts from "@/libs/fonts";
import styles from "./sectionAbout.module.scss";

// Import your laptop image
import laptopImage from "../../public/quienes-somos-ssc.png";
import glowBlob from "../../public/blob-about.png";

const SectionAboutUs: React.FC = () => {
  const scrollToServices = () => {
    const target = document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Left red shape */}
        <div className={styles.leftRedShape}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="280"
            height="498"
            viewBox="0 0 280 498"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M280 146.892C280 66.0418 214.467 0.5 133.628 0.5H-184V351.108C-184 431.958 -118.467 497.5 -37.6277 497.5H280V146.892Z"
              fill="#FC4554"
            />
          </svg>
        </div>

        {/* Image with laptop and hand */}
        <div className={styles.imageContainer}>
          {/* Laptop image in curved container */}
          <div className={styles.laptopImageWrapper}>
            <svg
              className={styles.laptopImageSvg}
              width="453"
              height="486"
              viewBox="0 0 453 486"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 143.326C0 64.4033 63.9795 0.423828 142.902 0.423828H453V342.675C453 421.597 389.021 485.577 310.098 485.577H0V143.326Z"
                fill="white"
              />
              <foreignObject x="0" y="0" width="453" height="486">
                <div className={styles.laptopImageContainer}>
                  <Image
                    src={laptopImage}
                    alt="Secure Core Consulting - Security Solutions"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </foreignObject>
            </svg>

            {/* Yellow border SVG */}
            <svg
              className={styles.yellowBorderSvg}
              width="453"
              height="486"
              viewBox="0 0 453 486"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 143.75C2 65.9317 65.0841 2.84766 142.902 2.84766H451V343.098C451 420.917 387.916 484.001 310.098 484.001H2V143.75Z"
                stroke="#FFD464"
                stroke-width="4"
              />
            </svg>
          </div>
        </div>

        <div className={styles.blobWrapper}>
          <Image
            src={glowBlob}
            alt=""
            fill
            className="select-none pointer-events-none"
          />
        </div>
        {/* Content container */}
        <div className={styles.contentContainer}>
          <h2 className={styles.heading}>¿Quiénes somos?</h2>
          <p className={styles.description}>
            <b>Secure Core Consulting</b> ofrece soluciones tecnológicas
            innovadoras y de alta calidad enfocada en la experiencia y
            satisfacción de nuestros clientes, cumpliendo con estándares de
            seguridad, responsabilidad y sostenibilidad de los entornos donde
            interactuamos.
          </p>
          <button
            type="button"
            onClick={scrollToServices}
            className={styles.button}
            aria-label="Saber más sobre Secure Core Consulting y sus servicios"
          >
            Saber más
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arrowIcon}
            >
              <path
                d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutUs;
