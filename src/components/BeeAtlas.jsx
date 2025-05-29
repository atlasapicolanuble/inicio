import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, Book, ArrowLeft, ArrowRight, Home } from 'lucide-react';
// Importar los estilos específicos del Atlas
import './Atlas.css';
// Importamos la imagen del logo
import logoinia from './images/logoinia.png';
// Importamos los componentes de páginas
import TableOfContentsPage from '../pages/TableOfContents'; 
import HistoriaAbeja from '../pages/BeeHistory';
import BeeStructure from '../pages/BeeSocialStructure'; 
import BeeReproduction from '../pages/BeeReproduction';
import BeeGenetics from '../pages/BeeGenetics';
import MeliferaBotany from '../pages/MelliferousBotany';
import BeeTemperature from '../pages/BeeTemperature';
import Apiculture from '../pages/Beekeeping';
import Apiaries from '../pages/Apiaries';
import Honey from '../pages/Honey';
import Colaboradores from '../pages/Colaboradores';
import MeliferaPage1 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0001.jpg';
import MeliferaPage2 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0002.jpg';
import MeliferaPage3 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0003.jpg';
import MeliferaPage4 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0004.jpg';
import MeliferaPage5 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0005.jpg';
import MeliferaPage6 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0006.jpg';
import MeliferaPage7 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0007.jpg';
import MeliferaPage8 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0008.jpg';
import MeliferaPage9 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0009.jpg';
import MeliferaPage10 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0010.jpg';
import MeliferaPage11 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0011.jpg';
import MeliferaPage12 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0012.jpg';
import MeliferaPage13 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0013.jpg';
import MeliferaPage14 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0014.jpg';
import MeliferaPage15 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0015.jpg';
import MeliferaPage16 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0016.jpg';
import MeliferaPage17 from '../pages/Meliferas/Especies meliferas .pdf_compressed_page-0017.jpg';

// Datos de plantas melíferas
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
    orden: "Fabales",
    familia: "Quillajaceae",
    genero: "Quillaja",
    especie: "saponaria",
    nombreComun: "Quillay",
    sinonimo: "Quillaja molinae DC",
    formaCrecimiento: "Árbol",
    significado: "Proporciona néctar en verano y resina útil para las abejas."
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
    significado: "Aporta polen durante el periodo de floración de cultivos."
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
    significado: "Sus flores ayudan en la biodiversidad del entorno apícola."
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
    significado: "Fuente de polen, aunque puede generar alergias en humanos."
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
    significado: "Importante en zonas agrícolas por su aporte floral para las abejas."
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
    significado: "El néctar de sus flores es buscado por las abejas, y el árbol provee sombra al colmenar."
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
    significado: "Favorece la alimentación de polinizadores en primavera."
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
    significado: "Atractiva para abejas por sus colores y néctar accesible."
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
    significado: "Aporta cobertura vegetal y alimento para abejas silvestres."
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
    significado: "Ofrece refugio y néctar, especialmente en climas secos."
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
    significado: "Valiosa por su floración prolongada y resistente."
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
    significado: "Atrae abejas y otros polinizadores en verano."
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
    significado: "De alto valor melífero por su prolongada floración."
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
    significado: "Fuente abundante de néctar en periodos secos."
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
    significado: "Planta medicinal con flores que atraen abejas."
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
    significado: "Altamente valorada por su néctar y aroma, ideal para apicultura intensiva."
  }
];

// Componente MeliferaPage integrado directamente en AtlasPage.jsx
const MeliferaPage = ({ imageSrc, plantData }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Activar animaciones inmediatamente
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className="h-full w-full flex flex-col md:flex-row"
      style={{ 
        background: 'linear-gradient(to bottom right, #f0fdf4, #dcfce7)'
      }}
    >
      {/* Panel izquierdo - Imagen ajustada al alto completo de la pantalla */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-2">
        <div 
          className="relative h-full w-full flex items-center justify-center bg-white rounded-lg shadow-md overflow-hidden"
          style={{
            transition: 'opacity 0.5s ease-out',
            opacity: isLoaded ? 1 : 0
          }}
        >
          <img 
            src={imageSrc} 
            alt={plantData.nombreComun || "Planta melífera"} 
            className="max-h-full max-w-full object-contain p-2"
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Etiqueta con el nombre en la parte superior */}
          <div 
            className="absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium shadow-md"
            style={{
              backgroundColor: '#10b981',
              color: 'white'
            }}
          >
            {plantData.nombreComun}
          </div>
        </div>
      </div>
      
      {/* Panel derecho - Información de la planta optimizada para caber en la pantalla */}
      <div className="w-full md:w-1/2 h-full flex flex-col p-2 md:p-4 justify-center">
        <div 
          className="flex flex-col gap-2 h-full"
          style={{
            transition: 'opacity 0.5s ease-out',
            opacity: isLoaded ? 1 : 0
          }}
        >
          <div className="flex-grow flex flex-col justify-between">
            {/* Tarjeta de información taxonómica - Diseño compacto */}
            <div 
              className="bg-white rounded-lg shadow-md p-2 mb-2"
              style={{
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h4 className="text-sm font-semibold text-green-800 mb-1 border-b border-green-200 pb-1">
                Clasificación Taxonómica
              </h4>
              
              <div className="grid grid-cols-2 gap-1 text-sm">
                {[
                  { label: 'Orden', value: plantData.orden },
                  { label: 'Familia', value: plantData.familia },
                  { label: 'Género', value: plantData.genero },
                  { label: 'Especie', value: plantData.especie }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-green-50 rounded-md p-1.5 border-l-2 border-green-500"
                  >
                    <span className="text-xs font-semibold text-green-800 block">
                      {item.label}
                    </span>
                    <span className="text-xs text-gray-800">
                      {item.value || "N/A"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tarjeta de nombres - Diseño compacto */}
            <div 
              className="bg-white rounded-lg shadow-md p-2 mb-2"
              style={{
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h4 className="text-sm font-semibold text-green-800 mb-1 border-b border-green-200 pb-1">
                Nombres y Características
              </h4>
              
              <div className="space-y-1">
                {[
                  { label: 'Nombre Común', value: plantData.nombreComun },
                  { label: 'Sinónimo', value: plantData.sinonimo },
                  { label: 'Forma de crecimiento', value: plantData.formaCrecimiento }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-green-50 rounded-md p-1.5 border-l-2 border-green-400"
                  >
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-green-800 inline-block mr-1">
                        {item.label}:
                      </span>
                      <span className="text-xs text-gray-800">
                        {item.value || "N/A"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Importancia melífera - Diseño compacto */}
            {plantData.significado && (
              <div 
                className="bg-white rounded-lg shadow-md p-2"
                style={{
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                <h4 className="text-sm font-semibold text-green-800 mb-1 border-b border-green-200 pb-1">
                  Importancia para las Abejas
                </h4>
                <div className="bg-yellow-50 rounded-md p-2 border-l-2 border-yellow-400">
                  <p className="text-xs text-gray-700">{plantData.significado}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de Splash con logo INIA en círculo y animación de carga
const BeeSplash = ({ onFinishLoading }) => {
  useEffect(() => {
    // Simulamos tiempo de carga
    const timer = setTimeout(() => {
      onFinishLoading();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onFinishLoading]);

  return (
    <div className="fixed inset-0 bg-green-50 flex flex-col items-center justify-center z-50">
      {/* Logo INIA en grande */}
      <div className="relative mb-6">
        <div className="relative flex items-center justify-center">
          <img 
            src={logoinia} 
            alt="Logo INIA" 
            className="h-32 w-auto object-contain"
          />
        </div>
      </div>
      
      {/* Animación de carga con emojis de abeja */}
      <div className="flex space-x-3 mt-3">
        {[0, 1, 2, 3, 4].map((index) => (
          <div 
            key={index} 
            className="text-xl animate-bounce" 
            style={{ 
              animationDelay: `${index * 0.2}s`,
              animationDuration: '1s'
            }}
          >
            🐝
          </div>
        ))}
      </div>
      <p className="mt-3 text-gray-600">Cargando Atlas INIA Quilamapu...</p>
    </div>
  );
};

const AtlasPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Definir todas las variables y arreglos necesarios antes de usarlos
  
  // Array con todas las páginas de melifera
  const meliferaPages = [
    'melifera-botany',
    'melifera-page-1',
    'melifera-page-2',
    'melifera-page-3',
    'melifera-page-4',
    'melifera-page-5',
    'melifera-page-6',
    'melifera-page-7',
    'melifera-page-8',
    'melifera-page-9',
    'melifera-page-10',
    'melifera-page-11',
    'melifera-page-12',
    'melifera-page-13',
    'melifera-page-14',
    'melifera-page-15',
    'melifera-page-16',
    'melifera-page-17'
  ];
  
  // Array con el orden completo de las páginas para facilitar navegación
  const mainPages = [
    'table-of-contents',
    'bee-history',
    'bee-structure',
    'bee-reproduction',
    'bee-genetics',
    ...meliferaPages, // Incluye todas las páginas melifera
    'bee-temperature',
    'apiculture',
    'apiaries',
    'honey',
    'colaboradores' // Añadido colaboradores como última página
  ];

  // Lista completa de todas las páginas disponibles
  const allPages = [...mainPages];
  
  // Obtener el hash de la URL o usar un valor predeterminado
  const getInitialPage = () => {
    const hash = location.hash.replace('#', '');
    if (hash && allPages.includes(hash)) {
      return hash;
    }
    return 'table-of-contents';
  };
  
  // Estado para controlar si el menú lateral está abierto (en vista móvil)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Estado para controlar la página actual
  const [currentPage, setCurrentPage] = useState(getInitialPage);
  // Estado para controlar si se muestra el splash
  const [isLoading, setIsLoading] = useState(true);
  // Estado para detectar si la pantalla es móvil
  const [isMobile, setIsMobile] = useState(false);
  // Estado para almacenar el tamaño de la ventana
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  // Estado para guardar la altura del contenido disponible
  const [contentHeight, setContentHeight] = useState(0);
  
  // Objeto con las imágenes de cada página
  const meliferaImages = {
    'melifera-page-1': MeliferaPage1,
    'melifera-page-2': MeliferaPage2,
    'melifera-page-3': MeliferaPage3,
    'melifera-page-4': MeliferaPage4,
    'melifera-page-5': MeliferaPage5,
    'melifera-page-6': MeliferaPage6,
    'melifera-page-7': MeliferaPage7,
    'melifera-page-8': MeliferaPage8,
    'melifera-page-9': MeliferaPage9,
    'melifera-page-10': MeliferaPage10,
    'melifera-page-11': MeliferaPage11,
    'melifera-page-12': MeliferaPage12,
    'melifera-page-13': MeliferaPage13,
    'melifera-page-14': MeliferaPage14,
    'melifera-page-15': MeliferaPage15,
    'melifera-page-16': MeliferaPage16,
    'melifera-page-17': MeliferaPage17
  };
  
  // Mapeo de IDs de secciones a páginas
  const sectionToPage = {
    1: 'bee-history',
    2: 'bee-structure',
    3: 'bee-reproduction',
    4: 'bee-genetics',
    5: 'melifera-botany',
    6: 'bee-temperature',
    7: 'apiculture',
    8: 'apiaries',
    9: 'honey',
    10: 'colaboradores' // Añadido mapeo para Colaboradores
  };

  // Mapeo inverso de páginas a IDs de secciones para la navegación principal
  const pageToMainSection = {
    'table-of-contents': 0,
    'bee-history': 1,
    'bee-structure': 2,
    'bee-reproduction': 3,
    'bee-genetics': 4,
    'melifera-botany': 5,
    'bee-temperature': 6,
    'apiculture': 7,
    'apiaries': 8,
    'honey': 9,
    'colaboradores': 10 // Añadido mapeo inverso para Colaboradores
  };

  // Array con información de títulos para la navegación
  const navItems = [
    { id: 1, number: "01", title: "Historia", page: "bee-history" },
    { id: 2, number: "02", title: "Estructura", page: "bee-structure" },
    { id: 3, number: "03", title: "Reproducción", page: "bee-reproduction" },
    { id: 4, number: "04", title: "Genética", page: "bee-genetics" },
    { id: 5, number: "05", title: "Botánica", page: "melifera-botany" },
    { id: 6, number: "06", title: "Temperatura", page: "bee-temperature" },
    { id: 7, number: "07", title: "Apicultura", page: "apiculture" },
    { id: 8, number: "08", title: "Apiarios", page: "apiaries" },
    { id: 9, number: "09", title: "Miel", page: "honey" },
    { id: 10, number: "10", title: "Colaboradores", page: "colaboradores" } // Añadido navItem para Colaboradores
  ];
  
  // Verifica si la página actual es una de las páginas de melifera
  const isMeliferaPage = meliferaPages.includes(currentPage);
  
  // Determina qué número de página de melifera es la actual
  const getMeliferaPageNumber = () => {
    if (currentPage === 'melifera-botany') return 0;
    const match = currentPage.match(/melifera-page-(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };
  
  // Calcular el progreso basado en la página actual
  const calculateProgress = () => {
    // Si es una página de melifera, calcular progreso específico para esta sección
    if (isMeliferaPage) {
      const meliferaPageNumber = getMeliferaPageNumber();
      const totalMeliferaPages = meliferaPages.length;
      // Calcular progreso relativo dentro de la sección melifera
      const meliferaProgress = meliferaPageNumber / totalMeliferaPages;
      
      // Obtener el rango de progreso entre las secciones principales 4 y 6
      const startProgress = 4 / 10; // Genética (sección 4)
      const endProgress = 6 / 10;   // Temperatura (sección 6)
      const progressRange = endProgress - startProgress;
      
      // Calcular progreso escalado dentro de este rango
      return (startProgress + (meliferaProgress * progressRange)) * 100;
    }
    
    // Para las demás páginas, usar el cálculo normal
    const sectionId = pageToMainSection[currentPage];
    if (sectionId === undefined) return 0;
    return (sectionId / 10) * 100; // 10 secciones en total (actualizado de 9 a 10)
  };

  // Actualizar la URL cuando cambia la página
  useEffect(() => {
    if (currentPage !== 'table-of-contents') {
      navigate(`/atlas#${currentPage}`, { replace: true });
    } else {
      navigate('/atlas', { replace: true });
    }
  }, [currentPage, navigate]);
  
  // Actualizar el tamaño de la ventana cuando cambia y calcular la altura disponible para el contenido
  useLayoutEffect(() => {
    const updateSize = () => {
      // Para dispositivos móviles, ajustar para la barra de direcciones del navegador
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      
      // Actualizar variables CSS personalizadas para usar en todo el componente
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      
      setWindowSize({
        width: vw,
        height: vh
      });

      // Obtener la altura del header para restar del contenido disponible
      const headerEl = document.querySelector('.atlas-header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 0;
      
      // Calcular la altura disponible para el contenido
      const availableHeight = vh - headerHeight;
      setContentHeight(availableHeight);

      // Actualizar estado de móvil
      setIsMobile(vw < 768);
    };
    
    // Ejecutar inmediatamente
    updateSize();
    
    // Añadir evento de cambio de tamaño
    window.addEventListener('resize', updateSize);
    
    // Evento para orientación en dispositivos móviles
    window.addEventListener('orientationchange', () => {
      // Pequeño retraso para asegurar que se complete el cambio de orientación
      setTimeout(updateSize, 100);
    });
    
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('orientationchange', updateSize);
    };
  }, []);
  
  // Función para bloquear el scroll del body mientras el Atlas está activo
  useEffect(() => {
    // Guardar el valor original de overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Bloquear el scroll
    document.body.style.overflow = 'hidden';
    
    // Restaurar al desmontar
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Función para manejar cuando se selecciona un elemento en la tabla de contenidos
  const handleContentSelection = (sectionId) => {
    console.log(`Sección seleccionada: ${sectionId}`);
    
    // Mapear los IDs de sección a las páginas correspondientes
    const page = sectionToPage[sectionId];
    if (page) {
      setCurrentPage(page);
    } else {
      console.log(`Sección no implementada: ${sectionId}`);
    }
  };
  
  // Función para finalizar la carga
  const handleFinishLoading = () => {
    setIsLoading(false);
  };

  // Función para navegar a la página anterior
  const goToPreviousPage = () => {
    const currentIndex = mainPages.indexOf(currentPage);
    if (currentIndex > 0) {
      setCurrentPage(mainPages[currentIndex - 1]);
    } else {
      // Si estamos en la primera página, ir a la última
      setCurrentPage(mainPages[mainPages.length - 1]);
    }
  };
  
  // Función para navegar a la página siguiente
  const goToNextPage = () => {
    const currentIndex = mainPages.indexOf(currentPage);
    if (currentIndex < mainPages.length - 1) {
      setCurrentPage(mainPages[currentIndex + 1]);
    } else {
      // Si estamos en la última página, volver a la primera
      setCurrentPage(mainPages[0]);
    }
  };
  
  // Escuchar cambios en el hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && allPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // Calcular el valor actual de progreso
  const progress = calculateProgress();

  // Obtener el título que debe mostrarse en el header
  const getPageTitle = () => {
    // Títulos para las páginas principales
    const mainTitles = {
      'table-of-contents': 'Tabla de Contenidos',
      'bee-history': 'Historia de las Abejas',
      'bee-structure': 'Estructura Social',
      'bee-reproduction': 'Reproducción',
      'bee-genetics': 'Genética',
      'melifera-botany': 'Botánica Melífera',
      'bee-temperature': 'Temperatura',
      'apiculture': 'Apicultura',
      'apiaries': 'Apiarios',
      'honey': 'Miel',
      'colaboradores': 'Colaboradores' // Añadido título para Colaboradores
    };
    
    // Si es una página de melifera numerada
    if (currentPage.startsWith('melifera-page-')) {
      const pageNumber = currentPage.replace('melifera-page-', '');
      return `Botánica Melífera - Pág. ${pageNumber}`;
    }
    
    // Para las páginas principales
    return mainTitles[currentPage] || 'Atlas INIA Quilamapu';
  };

  return (
    <>
      {/* Splash Screen */}
      {isLoading && <BeeSplash onFinishLoading={handleFinishLoading} />}
      
      {/* Contenedor principal que ocupa toda la pantalla exactamente */}
      <div 
        className="flex flex-col w-full bg-white overflow-hidden atlas-fullscreen" 
        style={{ 
          height: 'var(--vh, 100vh)',
          maxHeight: 'var(--vh, 100vh)'
        }}
      >
        {/* Header compact del Atlas */}
        <div className="bg-green-700 text-white shadow-md flex-shrink-0 flex flex-col atlas-header">
          {/* Sección principal del header */}
          <div className="py-2 px-3 flex items-center justify-between">
            <div className="flex items-center">
              <Book className="mr-2" size={18} />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">Atlas INIA Quilamapu</h1>
                <span className="text-xs text-green-100 mt-px">
                  {getPageTitle()}
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => navigate('/')}
                className="text-white p-1.5 rounded-md hover:bg-green-600 transition-colors"
                aria-label="Volver a la página de inicio"
              >
                <Home size={18} />
              </button>
              
              <button 
                className="text-white p-1.5 rounded-md hover:bg-green-600 transition-colors"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label={sidebarOpen ? "Cerrar menú lateral" : "Abrir menú lateral"}
              >
                <ChevronRight size={18} className={`transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Barra de navegación con botones de secciones */}
          <div className="bg-green-800 pt-2 pb-0">
            <div className="overflow-x-auto">
              <div className="flex justify-center space-x-4 min-w-max pb-2">
                <button
                  onClick={() => setCurrentPage('table-of-contents')}
                  className={`px-2 py-1 text-sm whitespace-nowrap transition-all ${
                    currentPage === 'table-of-contents'
                      ? 'text-yellow-300 font-medium scale-110 transform'
                      : 'text-green-100 hover:text-yellow-200 hover:scale-105 transform'
                  }`}
                >
                  <span className="font-medium">TOC</span>
                </button>
                
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.page)}
                    className={`px-2 py-1 text-sm whitespace-nowrap transition-all ${
                      currentPage === item.page || (isMeliferaPage && item.page === 'melifera-botany')
                        ? 'text-yellow-300 font-medium scale-110 transform'
                        : 'text-green-100 hover:text-yellow-200 hover:scale-105 transform'
                    }`}
                  >
                    <span className="font-medium">{item.number}</span>
                    {!isMobile && <span className="ml-1">{item.title}</span>}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Barra de progreso - directamente debajo de los botones, sin espacio */}
            <div className="h-1 w-full bg-green-900 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-yellow-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Contenido principal con altura dinámica basada en el espacio disponible calculado */}
        <div 
          className="flex-grow relative overflow-hidden"
          style={{ height: `${contentHeight}px` }}
        >
          {/* Overlay para cuando el menú está abierto (solo en móviles) */}
          {sidebarOpen && (
            <div 
              className="absolute inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
              onClick={() => setSidebarOpen(false)}
              aria-hidden="true"
            ></div>
          )}
          
          {/* Menú lateral */}
          {sidebarOpen && (
            <div className="absolute inset-y-0 left-0 w-3/4 sm:w-64 md:w-72 bg-green-50 shadow-lg z-40 transform transition-transform duration-300 ease-in-out atlas-sidebar">
              <div className="p-4 h-full overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-green-800">Contenido</h2>
                  <button 
                    onClick={() => setSidebarOpen(false)}
                    className="p-1 rounded text-gray-500 hover:bg-green-100"
                    aria-label="Cerrar menú"
                  >
                    <ChevronRight size={20} className="rotate-180" />
                  </button>
                </div>
                
                <ul className="space-y-2">
                  {/* Categorías principales */}
                  <li>
                    <button
                      onClick={() => {
                        setCurrentPage('table-of-contents');
                        setSidebarOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        currentPage === 'table-of-contents' 
                          ? 'bg-green-200 text-green-800 font-medium' 
                          : 'text-gray-700 hover:bg-green-100'
                      }`}
                    >
                      Tabla de Contenidos
                    </button>
                  </li>
                  
                  {navItems.map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setCurrentPage(item.page);
                          setSidebarOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          currentPage === item.page || (isMeliferaPage && item.page === 'melifera-botany')
                            ? 'bg-green-200 text-green-800 font-medium' 
                            : 'text-gray-700 hover:bg-green-100'
                        }`}
                      >
                        {item.number}. {item.title}
                      </button>
                      
                      {/* Subpáginas de Botánica Melífera */}
                      {item.page === 'melifera-botany' && (
                        <div className="pl-6 mt-1 space-y-1">
                          {Array.from({ length: 17 }, (_, i) => i + 1).map(num => (
                            <button
                              key={`melifera-page-${num}`}
                              onClick={() => {
                                setCurrentPage(`melifera-page-${num}`);
                                setSidebarOpen(false);
                              }}
                              className={`w-full text-left px-3 py-1 rounded text-sm transition-colors ${
                                currentPage === `melifera-page-${num}`
                                  ? 'bg-green-100 text-green-800 font-medium' 
                                  : 'text-gray-600 hover:bg-green-50'
                              }`}
                            >
                              Página {num}
                            </button>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Contenedor del contenido actual con adaptación dinámica */}
          <div className="h-full w-full overflow-hidden atlas-content relative">
            <div className="atlas-section h-full w-full">
              {currentPage === 'table-of-contents' && (
                <TableOfContentsPage 
                  onChangePage={handleContentSelection} 
                  currentPageId={pageToMainSection[currentPage]} 
                />
              )}
              {currentPage === 'bee-history' && (
                <HistoriaAbeja />
              )}
              {currentPage === 'bee-structure' && (
                <BeeStructure />
              )}
              {currentPage === 'bee-reproduction' && (
                <BeeReproduction />
              )}
              {currentPage === 'bee-genetics' && (
                <BeeGenetics />
              )}
              {currentPage === 'melifera-botany' && (
                <MeliferaBotany />
              )}
              
              {/* Nuevas páginas de especies melíferas con información detallada */}
              {Object.keys(meliferaImages).map(page => {
                // Extraer el número de página del ID
                const pageNumMatch = page.match(/melifera-page-(\d+)/);
                if (!pageNumMatch) return null;
                
                const pageNum = parseInt(pageNumMatch[1]);
                // Restar 1 porque los arrays comienzan en 0 pero las páginas en 1
                const plantDataIndex = pageNum - 1;
                
                // Asegurarse de que tenemos datos para esta planta
                if (plantDataIndex < 0 || plantDataIndex >= meliferaData.length) return null;
                
                return currentPage === page && (
                  <div 
                    key={page} 
                    className="h-full w-full"
                    style={{ 
                      height: `${contentHeight}px`,
                      maxHeight: `${contentHeight}px`
                    }}
                  >
                    <MeliferaPage 
                      imageSrc={meliferaImages[page]} 
                      plantData={meliferaData[plantDataIndex]} 
                    />
                  </div>
                );
              })}

              {currentPage === 'bee-temperature' && (
                <BeeTemperature />
              )}
              {currentPage === 'apiculture' && (
                <Apiculture />
              )}
              {currentPage === 'apiaries' && (
                <Apiaries />
              )}
              {currentPage === 'honey' && (
                <Honey />
              )}
              {currentPage === 'colaboradores' && (
                <Colaboradores />
              )}
            </div>
          </div>
          
          {/* Botones de navegación flotantes */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-3 transform -translate-y-1/2 z-30 pointer-events-none">
            <button 
              onClick={goToPreviousPage}
              className="bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition-colors pointer-events-auto nav-button"
              aria-label="Página anterior"
            >
              <ArrowLeft size={18} />
            </button>
            
            <button 
              onClick={goToNextPage}
              className="bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition-colors pointer-events-auto nav-button"
              aria-label="Siguiente página"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Indicador de número de página para imágenes melíferas */}
          {isMeliferaPage && currentPage.startsWith('melifera-page-') && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
              <div className="bg-green-800 bg-opacity-90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                <span>Página {getMeliferaPageNumber()} de 17</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AtlasPage;