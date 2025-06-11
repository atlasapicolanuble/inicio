// MeliferaData.js - Datos de todas las especies melíferas

/**
 * Datos estructurados para las 17 especies melíferas
 * Incluye datos taxonómicos, sinónimo, forma de crecimiento y valores apícolas
 * Los porcentajes de néctar y polen suman 100%
 */
const meliferaData = [
  {
    id: 1,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Taraxacum",
    especie: "officinale",
    sinonimo: "Leontodon taraxacum L.",
    formaCrecimiento: "Hierba perenne",
    nectar: 45, // Porcentaje de valor nectarífero
    polen: 55, // Porcentaje de valor polinífero (nectar + polen = 100%)
    floracion: [0, 0, 30, 80, 90, 70, 40, 20, 0, 0, 0, 0] // Ene-Dic porcentajes
  },
  {
    id: 2,
    orden: "Fabales",
    familia: "Quillajaceae",
    genero: "Quillaja",
    especie: "saponaria",
    sinonimo: "Quillaja molinae DC",
    formaCrecimiento: "Árbol",
    nectar: 60,
    polen: 40,
    floracion: [0, 0, 0, 0, 20, 60, 80, 100, 90, 60, 20, 0]
  },
  {
    id: 3,
    orden: "Brassicales",
    familia: "Brassicaceae",
    genero: "Raphanus",
    especie: "raphanistrum",
    sinonimo: "Raphanus sativus var. sylvestris",
    formaCrecimiento: "Hierba anual o bienal",
    nectar: 35,
    polen: 65,
    floracion: [0, 0, 0, 40, 70, 90, 100, 80, 60, 40, 0, 0]
  },
  {
    id: 4,
    orden: "Ranunculales",
    familia: "Lardizabalaceae",
    genero: "Lardizabala",
    especie: "biternata",
    sinonimo: "Lardizabala triphylla",
    formaCrecimiento: "Liana leñosa trepadora perenne",
    nectar: 55,
    polen: 45,
    floracion: [0, 0, 0, 0, 30, 60, 80, 100, 90, 60, 20, 0]
  },
  {
    id: 5,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Ambrosia",
    especie: "artemisiifolia L.",
    sinonimo: "Ambrosia elatior L.",
    formaCrecimiento: "Planta herbácea anual, erecta, muy ramificada",
    nectar: 25,
    polen: 75,
    floracion: [0, 0, 0, 0, 0, 40, 70, 100, 90, 60, 30, 0]
  },
  {
    id: 6,
    orden: "Brassicales",
    familia: "Brassicaceae",
    genero: "Brassica",
    especie: "sp",
    sinonimo: "Brassica napus L.",
    formaCrecimiento: "Herbácea anual o bienal, de crecimiento erecto o rastrero",
    nectar: 40,
    polen: 60,
    floracion: [0, 0, 20, 60, 90, 100, 80, 60, 40, 20, 0, 0]
  },
  {
    id: 7,
    orden: "Fagales",
    familia: "Fagaceae",
    genero: "Castanea",
    especie: "sativa",
    sinonimo: "Castaño común",
    formaCrecimiento: "Árbol",
    nectar: 55,
    polen: 45,
    floracion: [0, 0, 0, 0, 0, 40, 80, 100, 60, 20, 0, 0]
  },
  {
    id: 8,
    orden: "Gentianales",
    familia: "Gentianaceae",
    genero: "Centaurium",
    especie: "cachanlahuen",
    sinonimo: "Erythraea chilensis",
    formaCrecimiento: "Hierba anual o bianual, de porte bajo, erecta y ramificada",
    nectar: 50,
    polen: 50,
    floracion: [0, 0, 20, 60, 90, 100, 80, 60, 40, 20, 0, 0]
  },
  {
    id: 9,
    orden: "Myrtales",
    familia: "Onagraceae",
    genero: "Clarkia",
    especie: "tenella",
    sinonimo: "Godetia tenella",
    formaCrecimiento: "Hierba anual, erecta, generalmente ramificada, con flores vistosas",
    nectar: 45,
    polen: 55,
    floracion: [0, 0, 0, 30, 70, 100, 90, 80, 60, 30, 0, 0]
  },
  {
    id: 10,
    orden: "Vitales",
    familia: "Vitaceae",
    genero: "Clematicissus",
    especie: "striata",
    sinonimo: "Clematicissus striata (Ruiz & Pav.) Lombardi",
    formaCrecimiento: "Liana trepadora perenne, leñosa, con zarcillos, de rápido crecimiento",
    nectar: 50,
    polen: 50,
    floracion: [0, 0, 0, 20, 50, 80, 100, 90, 70, 40, 0, 0]
  },
  {
    id: 11,
    orden: "Rosales",
    familia: "Rhamnaceae",
    genero: "Colletia",
    especie: "hysterix",
    sinonimo: "Colletia brevispina Phil.",
    formaCrecimiento: "Arbusto",
    nectar: 55,
    polen: 45,
    floracion: [0, 0, 0, 0, 40, 70, 90, 100, 80, 50, 20, 0]
  },
  {
    id: 12,
    orden: "Asparagales",
    familia: "Tecophilaeaceae",
    genero: "Conanthera",
    especie: "bifolia",
    sinonimo: "Pajarito de campo",
    formaCrecimiento: "Hierba perenne, rizomatosa, de hojas basales y flores vistosas",
    nectar: 50,
    polen: 50,
    floracion: [0, 0, 30, 70, 100, 90, 60, 30, 0, 0, 0, 0]
  },
  {
    id: 13,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Cynara",
    especie: "cardunculus",
    sinonimo: "Carduus lanceolatus L.",
    formaCrecimiento: "Planta herbácea bienal, erecta, muy espinosa, de hasta 1.5 m de altura",
    nectar: 45,
    polen: 55,
    floracion: [0, 0, 0, 0, 0, 40, 80, 100, 90, 60, 20, 0]
  },
  {
    id: 14,
    orden: "Boraginales",
    familia: "Boraginaceae",
    genero: "Echium",
    especie: "vulgare",
    sinonimo: "Viborera",
    formaCrecimiento: "Roseta basal el primer año; segundo año, tallo erecto y ramificado",
    nectar: 40,
    polen: 60,
    floracion: [0, 0, 0, 20, 60, 90, 100, 80, 40, 0, 0, 0]
  },
  {
    id: 15,
    orden: "Myrtales",
    familia: "Myrtaceae",
    genero: "Eucalyptus",
    especie: "sp",
    sinonimo: "Eucalyptus globulus Labill",
    formaCrecimiento: "Árbol perenne, de gran tamaño, crecimiento rápido, tronco recto y corteza fibrosa",
    nectar: 65,
    polen: 35,
    floracion: [40, 60, 80, 90, 60, 20, 0, 0, 0, 20, 50, 70]
  },
  {
    id: 16,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Galega",
    especie: "officinalis",
    sinonimo: "Galega bicolor Desr",
    formaCrecimiento: "Planta herbácea perenne",
    nectar: 45,
    polen: 55,
    floracion: [0, 0, 0, 30, 60, 90, 100, 80, 50, 20, 0, 0]
  },
  {
    id: 17,
    orden: "Lamiales",
    familia: "Lamiaceae",
    genero: "Lavandula",
    especie: "angustifolia",
    sinonimo: "Lavandula officinalis Chaix",
    formaCrecimiento: "Arbusto perenne aromático",
    nectar: 60,
    polen: 40,
    floracion: [0, 0, 0, 0, 30, 80, 100, 90, 60, 20, 0, 0]
  }
];

export default meliferaData;