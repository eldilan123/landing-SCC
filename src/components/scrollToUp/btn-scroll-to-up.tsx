"use client"

import Image from "next/image";
import React from "react";

import arrow from "../../../public/vercel.svg";

const ScrollToUp = () => {
  const scrollToSection = (id: string) => {    
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="z-50 fixed bottom-[0%] right-[0%] w-[3%] max-sm:hidden"
      style={{ left: "calc(100% - 5%)", top: "calc(100% - 10%)" }}
    >
      <a onClick={() => scrollToSection("screen-top")} className="cursor-pointer">
        <Image src={arrow} alt="vercel.svg" />
      </a>
    </div>
  );
};

export default ScrollToUp;
