'use client'
import React, { useState } from "react";
import * as fonts from "@/libs/fonts";
import CardComponent from "./cards-component";
import { servicesData } from "@/services/mockData";
import { motion, AnimatePresence } from "framer-motion";

const SectionServices: React.FC = () => {
  // Estado para el modal
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleOpenModal = (service: any) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setOpenModal(false);
  };

  // Variantes para la animación de las tarjetas
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  // Variantes para la animación del modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <section id="services" className="bg-cover py-12">
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
        <div className="px-[7vw]">
          <span
            className={`${fonts.inter} font-[500] text-[24px] align-middle leading-[45px] mb-12 block`}
          >
            <b className="font-[900]">Secure Core Consulting S.A.S.</b> tiene
            como objeto principal el desarrollo de actividades relacionadas con
            la tecnología de la información y los servicios asociados, incluyendo,
            pero no limitándose a:
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly px-[3vw] mb-[4rem]">
        {servicesData.map((service) => (
          <motion.div 
            key={service.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="m-4"
          >
            <CardComponent
              title={service.title}
              description={service.description}
              icon={service.icon} // Icono de FontAwesome asignado en el array de datos
              // onClick se usará tanto en el botón como en la flecha dentro del CardComponent
              onClick={() => handleOpenModal(service)}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal con animación y efecto de salida */}
      <AnimatePresence>
        {openModal && selectedService && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
          >
            <div className="bg-white max-w-lg w-full p-6 rounded-lg relative">
              {/* Botón para cerrar el modal */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedService.title}</h3>
              <p className="text-gray-700">{selectedService.longDescription}</p>
              <div className="mt-6 flex justify-end">
                <motion.button
                  onClick={handleCloseModal}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded bg-[#EB3751] text-white font-semibold hover:bg-[#ff5d74] transition-colors"
                >
                  Cerrar
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SectionServices;
