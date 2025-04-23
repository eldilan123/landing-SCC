import rocket from "../../public/values-icons/rocket.png";
import hand1 from "../../public/values-icons/hand1.png";
import shield from "../../public/values-icons/shield.png";
import hand2 from "../../public/values-icons/hand2.png";
import { 
  faCogs, 
  faLaptopCode, 
  faServer, 
  faHandshake, 
  faWrench, 
  faLightbulb 
} from "@fortawesome/free-solid-svg-icons";

export const servicesData = [
  {
    id: 1,
    title: "Fábrica de Software",
    icon: faCogs,
    description:
      "Implementamos un proceso integral de desarrollo de software utilizando metodologías ágiles para entregar soluciones robustas y seguras.",
    longDescription:
      "Nuestro servicio abarca desde la ideación y análisis hasta el diseño, desarrollo, pruebas y despliegue, asegurando estándares de calidad y comunicación fluida con el cliente.",
  },
  {
    id: 2,
    title: "Desarrollo de software a la medida",
    icon: faLaptopCode,
    description:
      "Creamos soluciones adaptadas a procesos y objetivos específicos, garantizando escalabilidad y fácil integración.",
    longDescription:
      "Definimos y desarrollamos software hecho a la medida, permitiendo la personalización completa e integración con otras plataformas, asegurando que la solución evolucione junto a tu negocio.",
  },
  {
    id: 3,
    title: "Soporte en infraestructura tecnológica",
    icon: faServer,
    description:
      "Mantenemos el óptimo funcionamiento y seguridad de los componentes tecnológicos de tu empresa.",
    longDescription:
      "Ofrecemos soporte para servidores, redes, hardware y bases de datos, incluyendo monitorización, respaldo, actualización de parches y asistencia técnica en sitio o de forma remota.",
  },
  {
    id: 4,
    title: "Proveedor de servicios profesionales",
    icon: faHandshake,
    description:
      "Brindamos servicios especializados en desarrollo, implementación en la nube, administración de bases de datos, entre otros.",
    longDescription:
      "Nuestros expertos cubren diversas áreas de TI, apoyándote en el desarrollo, soporte, implementación y diseño de experiencias digitales de alta calidad.",
  },
  {
    id: 5,
    title: "Soporte y mantenimiento de software",
    icon: faWrench,
    description:
      "Aseguramos la estabilidad y evolución de tus aplicaciones a través de soporte técnico y mantenimiento continuo.",
    longDescription:
      "Incluimos mantenimiento correctivo, adaptativo, evolutivo y preventivo para que tus sistemas se mantengan actualizados y seguros conforme crecen las necesidades de tu empresa.",
  },
  {
    id: 6,
    title: "Consultoría",
    icon: faLightbulb,
    description:
      "Analizamos y diseñamos estrategias tecnológicas, impulsando la innovación y optimización de tus procesos.",
    longDescription:
      "Ofrecemos servicios de consultoría para definir procesos, automatizar pruebas, implementar pipelines CI/CD, optimizar la calidad de código y reforzar la seguridad de tus sistemas.",
  },
];

export const mockMission = [
  {
    auxId: "mi",
    title: "Misión",
    bgColor: "rgba(255, 246, 224, 1)",
    description:
      "En Secure Core Consulting nuestra misión es proporcionar soluciones tecnológicas innovadoras y de alta calidad que impulsen la transformación digital de nuestros clientes. Nos comprometemos a ofrecer servicios personalizados, que optimicen procesos, potencien la seguridad y garanticen la continuidad operativa en un entorno empresarial dinámico.",
  },
  {
    auxId: "vi",
    title: "Visión",
    bgColor: "rgba(255, 227, 230, 1)",
    description:
      "Para 2027, aspiramos a ser líderes reconocidos en el mercado local y del exterior, con nuestras soluciones innovadoras acompañando los mercados del sector educativo, seguridad y control logístico. Pretendemos transformar y mejorar la eficiencia, flexibilidad, seguridad y gobierno dentro de sus operaciones tecnológicas.",
  },
];

export const mockValues = [
  {
    id: 1,
    title: "Innovación:",
    bgColor: "rgba(254, 199, 98, 1)",
    icon: rocket,
    description:
      "Fomentamos la creatividad y la búsqueda constante de soluciones tecnológicas avanzadas.",
  },
  {
    id: 2,
    title: "Calidad:",
    bgColor: "rgba(252, 125, 86, 1)",
    icon: hand1,
    description:
      "Nos comprometemos a ofrecer productos y servicios de la más alta calidad.",
  },
  {
    id: 3,
    title: "Seguridad:",
    bgColor: "rgba(252, 141, 107, 1)",
    icon: shield,
    description:
      "Priorizar la protección de los datos y activos de nuestros clientes.",
  },
  {
    id: 4,
    title: "Compromiso:",
    bgColor: "rgba(232, 77, 103, 1)",
    icon: hand2,
    description:
      "Poner las necesidades y satisfacción del cliente como nuestra máxima prioridad.",
  },
  {
    id: 5,
    title: "Sinergia:",
    bgColor: "rgba(229, 51, 81, 1)",
    icon: rocket,
    description:
      "Trabajar en equipo y fomentar alianzas estratégicas para alcanzar objetivos comunes.",
  },
  {
    id: 6,
    title: "Responsabilidad:",
    bgColor: "rgba(241, 47, 183, 1)",
    icon: hand1,
    description:
      "Asumir la responsabilidad de nuestras acciones y sus impactos.",
  },
  {
    id: 7,
    title: "Sostenibilidad:",
    bgColor: "rgba(128, 47, 241, 1)",
    icon: hand2,
    description:
      "Promover prácticas empresariales sostenibles que beneficien a la sociedad y al medio ambiente.",
  },
];

export const mockContact = [
  {
    id: 1,
    title: "Empresa",
    items: ["Sobre Nosotros", "Carreras", "Contactos"]
  },
  {
    id: 2,
    title: "Soluciones",
    items: ["NexusCore Academico", "Control de Acceso", "Integración de Seguridad"]
  },
  {
    id: 3,
    title: "Contacto",
    items: ["info.securecore@securecoreconsulting.com", "+57 301 291 6999", "Bogotá D.C."]
  },
];
