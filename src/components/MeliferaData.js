// MeliferaData.js - Datos de todas las especies melíferas

/**
 * Datos estructurados para las 17 especies melíferas
 * Actualiza esta información con los datos reales correspondientes a cada imagen
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
    significado: "Planta altamente melífera, es una de las primeras fuentes de néctar y polen en primavera."
  },
  {
    id: 2,
    orden: "Lamiales",
    familia: "Lamiaceae",
    genero: "Salvia",
    especie: "officinalis",
    nombreComun: "Salvia",
    sinonimo: "Salvia salviatrix St-Lag.",
    formaCrecimiento: "Subarbusto perenne",
    significado: "Su nombre deriva del latín 'salvare' (salvar) por sus propiedades medicinales."
  },
  {
    id: 3,
    orden: "Rosales",
    familia: "Rosaceae",
    genero: "Rubus",
    especie: "ulmifolius",
    nombreComun: "Zarzamora",
    sinonimo: "Rubus discolor Weihe & Nees",
    formaCrecimiento: "Arbusto espinoso perenne",
    significado: "Importante fuente de néctar para abejas durante el verano."
  },
  {
    id: 4,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Trifolium",
    especie: "repens",
    nombreComun: "Trébol Blanco",
    sinonimo: "Amoria repens (L.) C.Presl",
    formaCrecimiento: "Hierba perenne rastrera",
    significado: "Una de las especies más importantes para la producción de miel."
  },
  {
    id: 5,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Medicago",
    especie: "sativa",
    nombreComun: "Alfalfa",
    sinonimo: "Medicago sativa subsp. sativa",
    formaCrecimiento: "Hierba perenne",
    significado: "Su miel es muy valorada por su sabor suave y su color claro."
  },
  {
    id: 6,
    orden: "Lamiales",
    familia: "Lamiaceae",
    genero: "Lavandula",
    especie: "angustifolia",
    nombreComun: "Lavanda",
    sinonimo: "Lavandula officinalis Chaix",
    formaCrecimiento: "Subarbusto perenne",
    significado: "Produce una miel monofloral muy apreciada y aromática."
  },
  {
    id: 7,
    orden: "Myrtales",
    familia: "Myrtaceae",
    genero: "Eucalyptus",
    especie: "globulus",
    nombreComun: "Eucalipto",
    sinonimo: "Eucalyptus maidenii F.Muell.",
    formaCrecimiento: "Árbol perenne",
    significado: "Importante fuente de néctar en invierno cuando hay pocas floraciones."
  },
  {
    id: 8,
    orden: "Apiales",
    familia: "Apiaceae",
    genero: "Foeniculum",
    especie: "vulgare",
    nombreComun: "Hinojo",
    sinonimo: "Anethum foeniculum L.",
    formaCrecimiento: "Hierba perenne",
    significado: "Planta melífera que atrae a muchos polinizadores, incluidas las abejas."
  },
  {
    id: 9,
    orden: "Boraginales",
    familia: "Boraginaceae",
    genero: "Echium",
    especie: "vulgare",
    nombreComun: "Viborera",
    sinonimo: "Echium wierzbickii Haberle",
    formaCrecimiento: "Hierba bienal",
    significado: "Produce gran cantidad de néctar y es visitada frecuentemente por abejas."
  },
  {
    id: 10,
    orden: "Fagales",
    familia: "Fagaceae",
    genero: "Castanea",
    especie: "sativa",
    nombreComun: "Castaño",
    sinonimo: "Fagus castanea L.",
    formaCrecimiento: "Árbol caducifolio",
    significado: "Produce una miel oscura con sabor fuerte y característico."
  },
  {
    id: 11,
    orden: "Rosales",
    familia: "Rosaceae",
    genero: "Prunus",
    especie: "dulcis",
    nombreComun: "Almendro",
    sinonimo: "Amygdalus communis L.",
    formaCrecimiento: "Árbol caducifolio",
    significado: "Una de las primeras floraciones del año, muy importante para las abejas."
  },
  {
    id: 12,
    orden: "Rosales",
    familia: "Rosaceae",
    genero: "Malus",
    especie: "domestica",
    nombreComun: "Manzano",
    sinonimo: "Pyrus malus L.",
    formaCrecimiento: "Árbol caducifolio",
    significado: "Sus flores proporcionan buen néctar y polen para las abejas en primavera."
  },
  {
    id: 13,
    orden: "Dipsacales",
    familia: "Caprifoliaceae",
    genero: "Knautia",
    especie: "arvensis",
    nombreComun: "Escabiosa",
    sinonimo: "Scabiosa arvensis L.",
    formaCrecimiento: "Hierba perenne",
    significado: "Atrae a numerosos polinizadores, entre ellos las abejas melíferas."
  },
  {
    id: 14,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Helianthus",
    especie: "annuus",
    nombreComun: "Girasol",
    sinonimo: "Helianthus ovatus Lehm.",
    formaCrecimiento: "Hierba anual",
    significado: "Proporciona grandes cantidades de néctar y polen en verano."
  },
  {
    id: 15,
    orden: "Fagales",
    familia: "Betulaceae",
    genero: "Alnus",
    especie: "glutinosa",
    nombreComun: "Aliso",
    sinonimo: "Betula alnus var. glutinosa L.",
    formaCrecimiento: "Árbol caducifolio",
    significado: "Proporciona polen temprano, importante para el desarrollo de la colonia."
  },
  {
    id: 16,
    orden: "Ericales",
    familia: "Ericaceae",
    genero: "Calluna",
    especie: "vulgaris",
    nombreComun: "Brezo",
    sinonimo: "Erica vulgaris L.",
    formaCrecimiento: "Arbusto perenne",
    significado: "Produce una miel oscura, aromática y difícil de extraer por su alta densidad."
  },
  {
    id: 17,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Acacia",
    especie: "dealbata",
    nombreComun: "Mimosa",
    sinonimo: "Racosperma dealbatum (Link) Pedley",
    formaCrecimiento: "Árbol perenne",
    significado: "Florece en invierno y proporciona polen abundante para las abejas."
  }
];

export default meliferaData;