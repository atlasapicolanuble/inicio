// MeliferaData.js - Datos actualizados según análisis del PDF

/**
 * Datos estructurados para las especies melíferas basados en el PDF
 * Cuadros amarillos = 100% de floración, cuadros oliva = 0% de floración
 * Los porcentajes de néctar y polen suman 100%
 * Floración: array de 12 valores (Ene-Dic) con valores 0 o 100
 */
const meliferaData = [
  {
    id: 1,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Taraxacum",
    especie: "officinale",
    nectar: 45,
    polen: 55,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100] // Sep-Dic
  },
  {
    id: 2,
    orden: "Fabales",
    familia: "Quillajaceae",
    genero: "Quillaja",
    especie: "saponaria",
    nectar: 60,
    polen: 40,
    floracion: [100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100] // Ene-Mar, Dic
  },
  {
    id: 3,
    orden: "Brassicales",
    familia: "Brassicaceae",
    genero: "Raphanus",
    especie: "raphanistrum",
    nectar: 35,
    polen: 65,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100] // May-Jul
  },
  {
    id: 4,
    orden: "Ranunculales",
    familia: "Lardizabalaceae",
    genero: "Lardizabala",
    especie: "biternata",
    nectar: 55,
    polen: 45,
    floracion: [0, 0, 0, 0, 100, 100, 100, 0, 0, 0, 0, 0] // Ago-Oct
  },
  {
    id: 5,
    orden: "Brassicales",
    familia: "Brassicaceae",
    genero: "Brassica",
    especie: "sp",
    nectar: 40,
    polen: 60,
    floracion: [0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0] // Jun-Sep
  },
  {
    id: 6,
    orden: "Fagales",
    familia: "Fagaceae",
    genero: "Castanea",
    especie: "sativa",
    nectar: 55,
    polen: 45,
    floracion: [100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100] // Ene-Feb, Nov-Dic
  },
  {
    id: 7,
    orden: "Myrtales",
    familia: "Onagraceae",
    genero: "Clarkia",
    especie: "tenella",
    nectar: 45,
    polen: 55,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Sin floración visible
  },
  {
    id: 8,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Cirsium",
    especie: "vulgare",
    nectar: 45,
    polen: 55,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Sin floración visible
  },
  {
    id: 9,
    orden: "Myrtales",
    familia: "Myrtaceae",
    genero: "Eucalyptus",
    especie: "sp",
    nectar: 65,
    polen: 35,
    floracion: [0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0, 0] // Jun-Sep
  },
  {
    id: 10,
    orden: "Liliales",
    familia: "Philesiaceae",
    genero: "Lapageria",
    especie: "rosea",
    nectar: 50,
    polen: 50,
    floracion: [0, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0] // Feb-Abr
  },
  {
    id: 11,
    orden: "Pinales",
    familia: "Pinaceae",
    genero: "Pinus",
    especie: "radiata",
    nectar: 0,
    polen: 100,
    floracion: [0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0, 0] // Jun-Ago
  },
  {
    id: 12,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Medicago",
    especie: "sp",
    nectar: 45,
    polen: 55,
    floracion: [0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0] // Jul-Sep
  },
  {
    id: 13,
    orden: "Laurales",
    familia: "Monimiaceae",
    genero: "Peumus",
    especie: "boldus",
    nectar: 50,
    polen: 50,
    floracion: [0, 0, 0, 0, 0, 100, 100, 100, 0, 0, 0, 0] // Jun-Ago
  },
  {
    id: 14,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Trifolium",
    especie: "repens",
    nectar: 55,
    polen: 45,
    floracion: [100, 100, 100, 0, 0, 0, 0, 0, 100, 100, 100, 100] // Ene-Mar, Sep-Dic
  },
  {
    id: 15,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Trifolium",
    especie: "pratense",
    nectar: 55,
    polen: 45,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100] // Nov-Dic
  },
  {
    id: 16,
    orden: "Boraginales",
    familia: "Boraginaceae",
    genero: "Echium",
    especie: "vulgare",
    nectar: 40,
    polen: 60,
    floracion: [100, 100, 100, 0, 0, 0, 0, 0, 0, 100, 100, 100] // Ene-Mar, Oct-Dic
  },
  {
    id: 17,
    orden: "Rosales",
    familia: "Rosaceae",
    genero: "Rubus",
    especie: "ulmifolius",
    nectar: 50,
    polen: 50,
    floracion: [100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100] // Ene-Mar, Nov-Dic
  },
  {
    id: 18,
    orden: "Proteales",
    familia: "Proteaceae",
    genero: "Gevuina",
    especie: "avellana",
    nectar: 45,
    polen: 55,
    floracion: [0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0] // Feb-Mar
  },
  {
    id: 19,
    orden: "Gentianales",
    familia: "Gentianaceae",
    genero: "Centaurium",
    especie: "cachanlahuen",
    nectar: 50,
    polen: 50,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Sin floración visible
  },
  {
    id: 20,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Racosperma",
    especie: "dealbatum",
    nectar: 20,
    polen: 80,
    floracion: [0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 0, 0] // Jul-Oct
  },
  {
    id: 21,
    orden: "Rosales",
    familia: "Rhamnaceae",
    genero: "Colletia",
    especie: "hystrix",
    nectar: 55,
    polen: 45,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0] // Oct-Nov
  },
  {
    id: 22,
    orden: "Asparagales",
    familia: "Tecophilaeaceae",
    genero: "Conanthera",
    especie: "bifolia",
    nectar: 50,
    polen: 50,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Ago-Nov
  },
  {
    id: 23,
    orden: "Proteales",
    familia: "Proteaceae",
    genero: "Lomatia",
    especie: "hirsuta",
    nectar: 45,
    polen: 55,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100] // Sep-Oct
  },
  {
    id: 24,
    orden: "Fagales",
    familia: "Nothofagaceae",
    genero: "Nothofagus",
    especie: "obliqua",
    nectar: 30,
    polen: 70,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0] // Ago-Sep
  },
  {
    id: 25,
    orden: "Rosales",
    familia: "Rosaceae",
    genero: "Prunus",
    especie: "sp",
    nectar: 50,
    polen: 50,
    floracion: [0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0] // Ago-Oct
  },
  {
    id: 26,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Proustia",
    especie: "pyrifolia",
    nectar: 45,
    polen: 55,
    floracion: [0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Feb
  },
  {
    id: 27,
    orden: "Myrtales",
    familia: "Myrtaceae",
    genero: "Luma",
    especie: "apiculata",
    nectar: 50,
    polen: 50,
    floracion: [100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 100, 100] // Ene-Mar, Nov-Dic
  },
  {
    id: 28,
    orden: "Celastrales",
    familia: "Celastraceae",
    genero: "Maytenus",
    especie: "boaria",
    nectar: 45,
    polen: 55,
    floracion: [0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0] // Mar-Jun
  },
  {
    id: 29,
    orden: "Santalales",
    familia: "Loranthaceae",
    genero: "Tristerix",
    especie: "corymbosus",
    nectar: 55,
    polen: 45,
    floracion: [0, 0, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0] // Ene-Mar, Nov-Dic
  },
  {
    id: 30,
    orden: "Asterales",
    familia: "Asteraceae",
    genero: "Ambrosia",
    especie: "artemisiifolia",
    nectar: 25,
    polen: 75,
    floracion: [0, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0] // Ene, Nov-Dic
  },
  {
    id: 31,
    orden: "Solanales",
    familia: "Solanaceae",
    genero: "Solanum",
    especie: "crispum",
    nectar: 20,
    polen: 80,
    floracion: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100] // Ene-Mar, Nov-Dic
  },
  {
    id: 32,
    orden: "Malpighiales",
    familia: "Salicaceae",
    genero: "Salix",
    especie: "sp",
    nectar: 40,
    polen: 60,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Sin floración visible
  },
  {
    id: 33,
    orden: "Sapindales",
    familia: "Anacardiaceae",
    genero: "Schinus",
    especie: "polygama",
    nectar: 50,
    polen: 50,
    floracion: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100] // Ene-Feb
  },
  {
    id: 34,
    orden: "Vitales",
    familia: "Vitaceae",
    genero: "Clematicissus",
    especie: "striata",
    nectar: 50,
    polen: 50,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100] // Ene-Mar, Nov-Dic
  },
  {
    id: 35,
    orden: "Cornales",
    familia: "Hydrangeaceae",
    genero: "Hydrangea",
    especie: "serratifolia",
    nectar: 45,
    polen: 55,
    floracion: [100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 100] // Ene-Mar, Oct-Dic
  },
  {
    id: 36,
    orden: "Proteales",
    familia: "Proteaceae",
    genero: "Lomatia",
    especie: "dentata",
    nectar: 45,
    polen: 55,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0] // Ene-Feb
  },
  {
    id: 37,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Lotus",
    especie: "pedunculatus",
    nectar: 55,
    polen: 45,
    floracion: [100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Sin floración visible
  },
  {
    id: 38,
    orden: "Fabales",
    familia: "Fabaceae",
    genero: "Galega",
    especie: "officinalis",
    nectar: 45,
    polen: 55,
    floracion: [100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 100] // Ene-Mar, Nov-Dic
  },
  {
    id: 39,
    orden: "Oxalidales",
    familia: "Elaeocarpaceae",
    genero: "Aristotelia",
    especie: "chilensis",
    nectar: 50,
    polen: 50,
    floracion: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100] // Ene-Feb, Nov-Dic
  },
  {
    id: 40,
    orden: "Caryophyllales",
    familia: "Polygonaceae",
    genero: "Rumex",
    especie: "acetosella",
    nectar: 30,
    polen: 70,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100] // Ene-Feb, Oct-Dic
  },
  {
    id: 41,
    orden: "Apiales",
    familia: "Apiaceae",
    genero: "Conium",
    especie: "maculatum",
    nectar: 35,
    polen: 65,
    floracion: [100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100] // Sep-Dic
  },
  {
    id: 42,
    orden: "Sapindales",
    familia: "Anacardiaceae",
    genero: "Lithraea",
    especie: "caustica",
    nectar: 50,
    polen: 50,
    floracion: [0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100] // Oct-Dic
  }
];

export default meliferaData;