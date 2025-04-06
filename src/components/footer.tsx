import React from "react";
import * as fonts from "@/libs/fonts/index";

const Footer: React.FC = () => {
  return (
    <footer
      id="screen-bottom"
      className="p-[10px] gap-2.5 max-md:p-[5px] max-sm:p-[2px]"
      style={{ background: "rgba(22, 20, 12, 1)" }}
    >
      <div className="container mx-auto text-center text-white">
        <p className={`${fonts.funnel_sans} font-[700] text-[16px] leading-[25px] align-middle`}>SecureCoreConsulting2025©. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
export default Footer;
