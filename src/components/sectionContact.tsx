"use client";

import React, { useState } from "react";
import * as fonts from "@/libs/fonts";
import logo from "../../public/Logo.png";
import Image from "next/image";
import { mockContact } from "@/services/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import VectorLeft from "./vectores/vectorLeft";
import VectorRight from "./vectores/vectorRight";
import styles from './PrivacyModal.module.css';

const SectionContact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Replace "Carreras" with "Políticas de privacidad" in the first section (Empresa)
  const updatedContact = mockContact.map(item => {
    if (item.id === 1) {
      return {
        ...item,
        items: item.items.map(subItem => 
          subItem === "Carreras" ? "Políticas de privacidad" : subItem
        )
      };
    }
    return item;
  });

  const handlePolicyClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    if (e.currentTarget.textContent === "Políticas de privacidad") {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <section id="contact" className="overflow-x-hidden relative" style={{ background: "rgba(22, 20, 12, 1)" }}>
      <VectorLeft />
      <div className="text-white" style={{ padding: "9vh 7vw" }}>
        <h2
          className={`${fonts.space_grotesk} font-[700] text-[40px] leading-[61px] align-middle text-3xl mb-4`}
        >
          ¿Listo para transformar su seguridad?
        </h2>
        <p
          className={`${fonts.space_grotesk} font-[700] text-[16px] leading-[25px] align-middle mb-6`}
        >
          Contáctenos hoy saber cómo podemos ayudar a proteger su organización.
        </p>
        <div className="flex flex-col max-md:flex-row max-sm:flex-col">
          <input
            type="email"
            placeholder="Ingrese su email corporativo"
            className="p-3 rounded-[20px] bg-white w-[40vw] max-md:w-[60vw] max-sm:w-[80vw]"
            style={{ color: "rgba(182, 175, 198, 1)" }}
          />
          <button
            className="text-white px-4 py-3 rounded-[20px] w-[15vw] max-md:w-[20vw] max-sm:w-[80vw] ml-8 max-md:ml-4 max-sm:ml-0 mt-4 max-sm:mt-2 cursor-pointer"
            style={{
              background: "rgba(235, 55, 81, 1)",
              boxShadow: "0px 4px 15px 0px rgba(235, 55, 81, 0.3)",
              marginLeft: 0
            }}
          >
            ¡Comenzar!
          </button>
        </div>
        <div className="text-start mt-[5rem] relative flex flex-wrap">
          <div className="w-[22%] max-md:w-[100%] max-md:mb-8">
            <Image src={logo} alt="Logo Secure Core" className="w-[15vw] max-md:w-[30vw] max-sm:w-[50vw]" />
            <p className="mt-4">Síguenos en</p>
            <FontAwesomeIcon className="w-[1.4vw] max-md:w-[3vw] max-sm:w-[5vw] mt-2" icon={faLink} />
          </div>
          {updatedContact.map((section) => {
            return (
              <div key={section.id} className="w-[25%] max-md:w-[50%] max-sm:w-[100%] max-sm:mb-6">
                <ul>
                  <li key={`section-${section.id}`}>
                    <p
                      className={`${fonts.funnel_sans} font-[700] text-[16px] align-middle leading-[25px]`}
                    >
                      {section.title}
                    </p>
                    <hr className="w-[3vw] mb-[2rem]" />
                  </li>
                  {section.items.map((item) => {
                    return (
                      <li key={item} className="mb-[1rem]">
                        <p
                          onClick={handlePolicyClick}
                          className={`${fonts.funnel_sans} font-[700] text-[16px] align-middle leading-[25px] ${
                            item === "Políticas de privacidad" ? "cursor-pointer hover:underline" : ""
                          }`}
                        >
                          {item}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <VectorRight />

      {/* Privacy Policy Modal with CSS Module */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={`${fonts.space_grotesk} font-[700] text-[24px]`}>POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>
              <button 
                onClick={() => setShowModal(false)}
                className={styles.closeButton}
                aria-label="Cerrar"
              >
                <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.sectionContent}>
                <h3 className={`${fonts.space_grotesk} ${styles.sectionTitle}`}>1. Introducción</h3>
                <p className={`${fonts.funnel_sans} text-[16px] leading-[1.6]`}>
                  En <strong>Secure Core Consulting S.A.S.</strong>, nos comprometemos a proteger la privacidad y seguridad de los datos personales de nuestros usuarios, clientes y visitantes. Esta <strong>Política de Privacidad</strong> describe cómo recopilamos, utilizamos y protegemos su información, cumpliendo con la <strong>Ley 1581 de 2012 de Colombia</strong>, el <strong>Decreto 1377 de 2013</strong> y normativas internacionales como el <strong>Reglamento General de Protección de Datos (GDPR) de la Unión Europea</strong>.
                </p>
              </div>
              
              <div className={styles.sectionContent}>
                <h3 className={`${fonts.space_grotesk} ${styles.sectionTitle}`}>2. Datos Recopilados</h3>
                <p className={`${fonts.funnel_sans} text-[16px] leading-[1.6] mb-2`}>
                  Recopilamos y procesamos los siguientes tipos de información:
                </p>
                <ul className={styles.list}>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}><strong>Datos personales</strong>: Nombre, correo electrónico, teléfono, dirección, identificación.</li>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}><strong>Datos de acceso y uso</strong>: Direcciones IP, tipo de dispositivo, sistema operativo, tiempo de acceso y actividades en nuestra plataforma <strong>NexusCore Académico</strong>.</li>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}><strong>Datos financieros</strong>: Solo cuando sea necesario para la facturación de servicios.</li>
                </ul>
              </div>
              
              <div className={styles.sectionContent}>
                <h3 className={`${fonts.space_grotesk} ${styles.sectionTitle}`}>3. Finalidad del Tratamiento de Datos</h3>
                <p className={`${fonts.funnel_sans} text-[16px] leading-[1.6] mb-2`}>
                  Los datos recopilados serán utilizados para:
                </p>
                <ul className={styles.list}>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}>Gestionar el acceso y uso de <strong>NexusCore Académico</strong>.</li>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}>Brindar soporte técnico y asistencia a los usuarios.</li>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}>Administrar certificaciones y actas de grado de acuerdo con normativas estatales.</li>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}>Cumplir con requerimientos legales y normativos.</li>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}>Mejorar nuestros servicios y experiencia de usuario.</li>
                </ul>
              </div>
              
              <div className={styles.sectionContent}>
                <h3 className={`${fonts.space_grotesk} ${styles.sectionTitle}`}>4. Almacenamiento y Seguridad de los Datos</h3>
                <p className={`${fonts.funnel_sans} text-[16px] leading-[1.6]`}>
                  Los datos personales se almacenan en servidores seguros con medidas de protección contra accesos no autorizados, pérdida o alteración. Utilizamos cifrado, firewalls y accesos restringidos para garantizar la seguridad de su información.
                </p>
              </div>
              
              <div className={styles.sectionContent}>
                <h3 className={`${fonts.space_grotesk} ${styles.sectionTitle}`}>5. Derechos de los Titulares de Datos</h3>
                <p className={`${fonts.funnel_sans} text-[16px] leading-[1.6] mb-2`}>
                  De acuerdo con la <strong>Ley 1581 de 2012</strong>, usted tiene derecho a:
                </p>
                <ul className={styles.list}>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}>Acceder, actualizar y rectificar sus datos personales.</li>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}>Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}>Revocar su consentimiento para el tratamiento de datos.</li>
                  <li className={`${fonts.funnel_sans} text-[16px] leading-[1.6] ${styles.listItem}`}>Presentar quejas ante la <strong>Superintendencia de Industria y Comercio (SIC)</strong> en caso de incumplimiento.</li>
                </ul>
              </div>
              
              <div className={styles.sectionContent}>
                <h3 className={`${fonts.space_grotesk} ${styles.sectionTitle}`}>6. Uso de Cookies</h3>
                <p className={`${fonts.funnel_sans} text-[16px] leading-[1.6]`}>
                  Utilizamos cookies para mejorar la experiencia de usuario y analizar el uso de nuestra plataforma. Puede configurar su navegador para rechazar o eliminar cookies, pero esto podría afectar algunas funcionalidades.
                </p>
              </div>
              
              <div className={styles.sectionContent}>
                <h3 className={`${fonts.space_grotesk} ${styles.sectionTitle}`}>7. Transferencia Internacional de Datos</h3>
                <p className={`${fonts.funnel_sans} text-[16px] leading-[1.6]`}>
                  En caso de transferencias internacionales de datos, garantizamos el cumplimiento de normativas aplicables, incluyendo medidas de protección adecuadas según el <strong>GDPR</strong> y regulaciones colombianas.
                </p>
              </div>
              
              <div className={styles.sectionContent}>
                <h3 className={`${fonts.space_grotesk} ${styles.sectionTitle}`}>8. Modificaciones a la Política de Privacidad</h3>
                <p className={`${fonts.funnel_sans} text-[16px] leading-[1.6]`}>
                  Podemos actualizar esta política en cualquier momento. Notificaremos cambios importantes a través de nuestra página web o por correo electrónico.
                </p>
              </div>
              
              <div className={styles.sectionContent}>
                <h3 className={`${fonts.space_grotesk} ${styles.sectionTitle}`}>9. Contacto</h3>
                <p className={`${fonts.funnel_sans} text-[16px] leading-[1.6]`}>
                  Si tiene dudas o inquietudes sobre esta política, puede escribirnos a <strong>info.securecore@securecoreconsulting.com</strong>.
                </p>
              </div>
            </div>
            
            <div className={styles.modalFooter}>
              <button 
                onClick={() => setShowModal(false)}
                className={styles.actionButton}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionContact;