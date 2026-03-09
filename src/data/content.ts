export const businessInfo = {
  name: "Dittmar Estructuras Metálicas",
  tagline: "Construimos con acero. Duramos décadas.",
  phone: "+56900000000", // TODO: actualizar con número real
  whatsapp: "+56900000000", // TODO: actualizar con número real
  email: "contacto@dittmar.cl", // TODO: actualizar
  address: "Santiago, Región Metropolitana",
  instagram: "dittmar.estructurasmetalicas",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106434.91898698598!2d-70.73388305!3d-33.4724452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x83b8b77293b96b78!2sSantiago%2C+Regi%C3%B3n+Metropolitana!5e0!3m2!1ses!2scl!4v1699000000000",
};

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "galpones",
    icon: "warehouse",
    title: "Galpones Industriales",
    description:
      "Construcción de galpones metálicos para uso industrial, agrícola y comercial. Diseño a medida para maximizar el espacio y la funcionalidad.",
    features: [
      "Estructura liviana de alta resistencia",
      "Cubierta de zinc o panel sándwich",
      "Puertas correderas y seccionales",
      "Ventilación e iluminación natural",
    ],
  },
  {
    id: "cobertizos",
    icon: "roofing",
    title: "Cobertizos y Techados",
    description:
      "Techados metálicos para espacios existentes o nuevas construcciones. Solución rápida y duradera para cubrir cualquier superficie.",
    features: [
      "Perfiles galvanizados de primera calidad",
      "Impermeabilización garantizada",
      "Adaptable a cualquier geometría",
      "Instalación rápida sin interrupciones",
    ],
  },
  {
    id: "carport",
    icon: "directions_car",
    title: "Carport y Estacionamientos",
    description:
      "Estructuras metálicas para estacionamientos cubiertos, individuales o en línea. Protege tu vehículo con estilo y solidez.",
    features: [
      "Diseños individuales y múltiples",
      "Cubierta translúcida o metálica",
      "Postes y vigas galvanizadas",
      "Anclaje en terreno o losa",
    ],
  },
  {
    id: "estructuras",
    icon: "construction",
    title: "Estructuras a Medida",
    description:
      "Fabricamos y montamos estructuras metálicas para proyectos especiales: mezaninas, pasarelas, escaleras industriales y más.",
    features: [
      "Diseño según planos o requerimiento",
      "Corte y soldadura de precisión",
      "Terminación anticorrosiva",
      "Montaje incluido",
    ],
  },
  {
    id: "mantenimiento",
    icon: "build",
    title: "Mantenimiento y Reparación",
    description:
      "Servicio de mantención para estructuras existentes: soldadura, refuerzo, pintura anticorrosiva y reemplazo de piezas.",
    features: [
      "Diagnóstico sin costo",
      "Soldadura certificada",
      "Pintura epoxi o anticorrosiva",
      "Garantía por trabajos realizados",
    ],
  },
  {
    id: "proyectos",
    icon: "architecture",
    title: "Proyectos Integrales",
    description:
      "Desde el cálculo estructural hasta la entrega llave en mano. Coordinamos permisos, fundaciones y montaje completo.",
    features: [
      "Cálculo y planos estructurales",
      "Gestión de permisos municipales",
      "Coordinación de fundaciones",
      "Entrega llave en mano",
    ],
  },
];

export const stats = [
  { value: "+200", label: "Proyectos completados" },
  { value: "+10", label: "Años de experiencia" },
  { value: "100%", label: "Proyectos entregados en plazo" },
  { value: "5★", label: "Calificación de clientes" },
];

export const reasons = [
  {
    icon: "verified",
    title: "Materiales certificados",
    description:
      "Trabajamos exclusivamente con acero y perfiles certificados por normativa chilena.",
  },
  {
    icon: "speed",
    title: "Plazos cumplidos",
    description:
      "Entregamos en el tiempo acordado. Planificamos cada etapa del proyecto con precisión.",
  },
  {
    icon: "price_check",
    title: "Presupuesto sin costo",
    description:
      "Visita técnica y cotización 100% gratuita. Sin letra chica ni costos ocultos.",
  },
  {
    icon: "engineering",
    title: "Equipo especializado",
    description:
      "Soldadores certificados, montajistas con experiencia y supervisión técnica en obra.",
  },
];
