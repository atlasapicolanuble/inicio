// MeliferaData.js - Datos de todas las especies melíferas

/**
 * Datos estructurados para las 17 especies melíferas
 * Datos actualizados según el documento original de especies melíferas
 */
const meliferaData = [
  {
    id: 1,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Taraxacum",
    especie: "officinale",
    nombreComun: "Diente de León",
    sinonimo: "Leontodon taraxacum L.",
    formaCrecimiento: "Hierba perenne",
    significado: "Planta altamente melífera, es una de las primeras fuentes de néctar y polen en primavera.",
    floracion: [0, 0, 30, 80, 90, 70, 40, 20, 0, 0, 0, 0] // Ene-Dic porcentajes
  },
  {
    id: 2,
    orden: "Fabales",
    familia: "Quillajaceae",
    genero: "Quillaja",
    especie: "saponaria",
    nombreComun: "Quillay",
    sinonimo: "Quillaja molinae DC",
    formaCrecimiento: "Árbol",
    significado: "Proporciona néctar en verano y resina útil para las abejas.",
    floracion: [0, 0, 0, 0, 20, 60, 80, 100, 90, 60, 20, 0]
  },
  {
    id: 3,
    orden: "Brassicales",
    familia: "Brassicaceae",
    genero: "Raphanus",
    especie: "raphanistrum",
    nombreComun: "Rábano silvestre",
    sinonimo: "Raphanus sativus var. sylvestris",
    formaCrecimiento: "Hierba anual o bienal",
    significado: "Aporta polen durante el periodo de floración de cultivos.",
    floracion: [0, 0, 0, 40, 70, 90, 100, 80, 60, 40, 0, 0]
  },
  {
    id: 4,
    orden: "Ranunculales",
    familia: "Lardizabalaceae",
    genero: "Lardizabala",
    especie: "biternata",
    nombreComun: "Cogüilera",
    sinonimo: "Lardizabala triphylla",
    formaCrecimiento: "Liana leñosa trepadora perenne",
    significado: "Sus flores ayudan en la biodiversidad del entorno apícola.",
    floracion: [0, 0, 0, 0, 30, 60, 80, 100, 90, 60, 20, 0]
  },
  {
    id: 5,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Ambrosia",
    especie: "artemisiifolia L.",
    nombreComun: "Ambrosía",
    sinonimo: "Ambrosia elatior L.",
    formaCrecimiento: "Planta herbácea anual, erecta, muy ramificada",
    significado: "Fuente de polen, aunque puede generar alergias en humanos.",
    floracion: [0, 0, 0, 0, 0, 40, 70, 100, 90, 60, 30, 0]
  },
  {
    id: 6,
    orden: "Brassicales",
    familia: "Brassicaceae",
    genero: "Brassica",
    especie: "sp",
    nombreComun: "Brásica (Nabo)",
    sinonimo: "Ambrosía (nombre incorrecto en fuente)",
    formaCrecimiento: "Herbácea anual o bienal, de crecimiento erecto o rastrero",
    significado: "Importante en zonas agrícolas por su aporte floral para las abejas.",
    floracion: [0, 0, 20, 60, 90, 100, 80, 60, 40, 20, 0, 0]
  },
  {
    id: 7,
    orden: "Fagales",
    familia: "Fagaceae",
    genero: "Castanea",
    especie: "sativa",
    nombreComun: "Castaño",
    sinonimo: "Castaño común",
    formaCrecimiento: "Árbol",
    significado: "El néctar de sus flores es buscado por las abejas, y el árbol provee sombra al colmenar.",
    floracion: [0, 0, 0, 0, 0, 40, 80, 100, 60, 20, 0, 0]
  },
  {
    id: 8,
    orden: "Gentianales",
    familia: "Gentianaceae",
    genero: "Centaurium",
    especie: "cachanlahuen",
    nombreComun: "Canchanlahue",
    sinonimo: "Erythraea chilensis",
    formaCrecimiento: "Hierba anual o bianual, de porte bajo, erecta y ramificada",
    significado: "Favorece la alimentación de polinizadores en primavera.",
    floracion: [0, 0, 20, 60, 90, 100, 80, 60, 40, 20, 0, 0]
  },
  {
    id: 9,
    orden: "Myrtales",
    familia: "Onagraceae",
    genero: "Clarkia",
    especie: "tenella",
    nombreComun: "Huasita",
    sinonimo: "Godetia tenella",
    formaCrecimiento: "Hierba anual, erecta, generalmente ramificada, con flores vistosas",
    significado: "Atractiva para abejas por sus colores y néctar accesible.",
    floracion: [0, 0, 0, 30, 70, 100, 90, 80, 60, 30, 0, 0]
  },
  {
    id: 10,
    orden: "Vitales",
    familia: "Vitaceae",
    genero: "Clematicissus",
    especie: "striata",
    nombreComun: "Voqui colorado",
    sinonimo: "Clematicissus striata (Ruiz & Pav.) Lombardi",
    formaCrecimiento: "Liana trepadora perenne, leñosa, con zarcillos, de rápido crecimiento",
    significado: "Aporta cobertura vegetal y alimento para abejas silvestres.",
    floracion: [0, 0, 0, 20, 50, 80, 100, 90, 70, 40, 0, 0]
  },
  {
    id: 11,
    orden: "Rosales",
    familia: "Rhamnaceae",
    genero: "Colletia",
    especie: "hysterix",
    nombreComun: "Yaquil",
    sinonimo: "Colletia brevispina Phil.",
    formaCrecimiento: "Arbusto",
    significado: "Ofrece refugio y néctar, especialmente en climas secos.",
    floracion: [0, 0, 0, 0, 40, 70, 90, 100, 80, 50, 20, 0]
  },
  {
    id: 12,
    orden: "Asparagales",
    familia: "Tecophilaeaceae",
    genero: "Conanthera",
    especie: "bifolia",
    nombreComun: "Viudita",
    sinonimo: "Pajarito de campo",
    formaCrecimiento: "Hierba perenne, rizomatosa, de hojas basales y flores vistosas",
    significado: "Valiosa por su floración prolongada y resistente.",
    floracion: [0, 0, 30, 70, 100, 90, 60, 30, 0, 0, 0, 0]
  },
  {
    id: 13,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Cynara",
    especie: "cardunculus",
    nombreComun: "Cardo de huerta",
    sinonimo: "Carduus lanceolatus L.",
    formaCrecimiento: "Planta herbácea bienal, erecta, muy espinosa, de hasta 1.5 m de altura",
    significado: "Atrae abejas y otros polinizadores en verano.",
    floracion: [0, 0, 0, 0, 0, 40, 80, 100, 90, 60, 20, 0]
  },
  {
    id: 14,
    orden: "Boraginales",
    familia: "Boraginaceae",
    genero: "Echium",
    especie: "vulgare",
    nombreComun: "Lengua de gato",
    sinonimo: "Viborera",
    formaCrecimiento: "Roseta basal el primer año; segundo año, tallo erecto y ramificado",
    significado: "De alto valor melífero por su prolongada floración.",
    floracion: [0, 0, 0, 20, 60, 90, 100, 80, 40, 0, 0, 0]
  },
  {
    id: 15,
    orden: "Myrtales",
    familia: "Myrtaceae",
    genero: "Eucalyptus",
    especie: "sp",
    nombreComun: "Eucalipto",
    sinonimo: "Eucalyptus globulus Labill",
    formaCrecimiento: "Árbol perenne, de gran tamaño, crecimiento rápido, tronco recto y corteza fibrosa",
    significado: "Fuente abundante de néctar en periodos secos.",
    floracion: [40, 60, 80, 90, 60, 20, 0, 0, 0, 20, 50, 70]
  },
  {
    id: 16,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Galega",
    especie: "officinalis",
    nombreComun: "Galega",
    sinonimo: "Galega bicolor Desr",
    formaCrecimiento: "Planta herbácea perenne",
    significado: "Planta medicinal con flores que atraen abejas.",
    floracion: [0, 0, 0, 30, 60, 90, 100, 80, 50, 20, 0, 0]
  },
  {
    id: 17,
    orden: "Lamiales",
    familia: "Lamiaceae",
    genero: "Lavandula",
    especie: "angustifolia",
    nombreComun: "Lavanda",
    sinonimo: "Lavandula officinalis Chaix",
    formaCrecimiento: "Arbusto perenne aromático",
    significado: "Altamente valorada por su néctar y aroma, ideal para apicultura intensiva.",
    floracion: [0, 0, 0, 0, 30, 80, 100, 90, 60, 20, 0, 0]
  }
];

export default meliferaData;