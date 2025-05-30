import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRight, Book, ArrowLeft, ArrowRight, Home } from 'lucide-react';

// Importar componentes de páginas
import TableOfContentsPage from '../pages/TableOfContents'; 
import HistoriaAbeja from '../pages/BeeHistory';
import BeeStructure from '../pages/BeeSocialStructure'; 
import BeeReproduction from '../pages/BeeReproduction';
import BeeGenetics from '../pages/BeeApicultura';
import MeliferaBotany from '../pages/MelliferousBotany';
import BeeTemperature from '../pages/BeeTemperature';
import Apiculture from '../pages/Beekeeping';
import Apiaries from '../pages/Apiaries';
import Honey from '../pages/Honey';
import Colaboradores from '../pages/Colaboradores';

// Importar datos optimizados
import meliferaData from './MeliferaData';
import './Atlas.css';
import './MeliferaStyles.css';

// Importar logos
import logoinia from './images/logoinia.png';
import logoGobChile from './images/logob.png';

// Importar imágenes de especies melíferas
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

const plantNames = [
  'Diente de León',
  'Quillay', 
  'Rábano silvestre',
  'Cogüilera',
  'Ambrosía',
  'Brásica (Nabo)',
  'Castaño',
  'Canchanlahue',
  'Huasita',
  'Voqui colorado',
  'Yaquil',
  'Viudita',
  'Cardo de huerta',
  'Lengua de gato',
  'Eucalipto',
  'Galega'
];
const getCurrentPlantName = () => {
  const pageNumber = getMeliferaPageNumber();
  return plantNames[pageNumber - 1] || `Página ${pageNumber}`;
};
// Componente MeliferaPage optimizado y limpio
const MeliferaPage = ({ imageSrc = "https://via.placeholder.com/400x300", plantIndex = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredMonth, setHoveredMonth] = useState(null);
  
  // Obtener datos de la planta según el índice
  const plantData = meliferaData[plantIndex] || meliferaData[0];
  
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Función para obtener el color según el porcentaje de floración
  const getFlowerColor = (percentage) => {
    if (percentage === 0) return '#f3f4f6';
    if (percentage <= 20) return '#fef3c7';
    if (percentage <= 40) return '#fde047';
    if (percentage <= 60) return '#facc15';
    if (percentage <= 80) return '#eab308';
    return '#ca8a04';
  };

  return (
    <div className="h-full w-full flex" style={{ height: '100%' }}>
      {/* Panel izquierdo - Imagen a pantalla completa */}
      <div className="w-1/2 h-full relative">
        <img 
          src={imageSrc} 
          alt={plantData.nombreComun} 
          className="w-full h-full object-contain"
          style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-out' }}
        />
      </div>
      
      {/* Panel derecho - Información compacta */}
      <div className="w-1/2 h-full flex flex-col p-4 bg-gradient-to-br from-green-50 to-green-100 overflow-y-auto">
        <div className="space-y-3 flex-1">
          
          {/* Clasificación taxonómica */}
          <div className="bg-white rounded-lg shadow-md p-3 border border-green-100">
            <h4 className="text-sm font-bold text-green-800 mb-2 flex items-center">
              <span className="mr-2">🔬</span>
              Clasificación Taxonómica
            </h4>
            
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Orden', value: plantData.orden, color: '#3b82f6' },
                { label: 'Familia', value: plantData.familia, color: '#10b981' },
                { label: 'Género', value: plantData.genero, color: '#8b5cf6' },
                { label: 'Especie', value: plantData.especie, color: '#6366f1' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-2 border-l-3"
                  style={{ borderLeftColor: item.color, borderLeftWidth: '3px' }}
                >
                  <span className="text-xs font-bold text-gray-700 uppercase block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm text-gray-900 font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Características */}
          <div className="bg-white rounded-lg shadow-md p-3 border border-green-100">
            <h4 className="text-sm font-bold text-green-800 mb-2 flex items-center">
              <span className="mr-2">📋</span>
              Características Generales
            </h4>
            
            <div className="space-y-2">
              {[
                { label: 'Nombre Común', value: plantData.nombreComun, icon: '📝' },
                { label: 'Sinónimo Científico', value: plantData.sinonimo, icon: '🔄' },
                { label: 'Forma de Crecimiento', value: plantData.formaCrecimiento, icon: '🌱' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-2 border-l-3 border-green-300"
                >
                  <div className="flex items-start">
                    <div className="text-sm mr-2 mt-1">{item.icon}</div>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-gray-700 uppercase block mb-1">
                        {item.label}
                      </span>
                      <span className="text-xs text-gray-900 font-medium">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Calendario de floración */}
          <div className="bg-white rounded-lg shadow-md p-3 border border-green-100 flex-1">
            <h4 className="text-sm font-bold text-green-800 mb-2 flex items-center">
              <span className="mr-2">📅</span>
              Calendario de Floración
            </h4>
            
            <div className="space-y-2">
              {/* Calendario visual */}
              <div className="grid grid-cols-12 gap-1 mb-2">
                {meses.map((mes, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs font-semibold text-gray-600 mb-1">
                      {mes}
                    </div>
                    <div 
                      className="h-6 rounded cursor-pointer transition-all duration-200 hover:scale-110 relative border border-gray-200"
                      style={{ 
                        backgroundColor: getFlowerColor(plantData.floracion[index])
                      }}
                      onMouseEnter={() => setHoveredMonth(index)}
                      onMouseLeave={() => setHoveredMonth(null)}
                    >
                      {hoveredMonth === index && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
                          <div className="text-center">
                            <div className="font-semibold">{mes}</div>
                            <div>{plantData.floracion[index]}%</div>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-gray-800"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Leyenda */}
              <div className="bg-gray-50 rounded-lg p-2">
                <div className="text-xs font-semibold text-gray-700 mb-1 text-center">Intensidad de Floración</div>
                <div className="flex flex-wrap justify-center gap-1 text-xs">
                  {[
                    { color: '#f3f4f6', label: '0%' },
                    { color: '#fef3c7', label: '1-20%' },
                    { color: '#fde047', label: '21-40%' },
                    { color: '#facc15', label: '41-60%' },
                    { color: '#eab308', label: '61-80%' },
                    { color: '#ca8a04', label: '81-100%' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-2 h-2 rounded mr-1 border border-gray-300" 
                        style={{backgroundColor: item.color}}
                      ></div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Importancia melífera */}
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-2 border-l-3 border-yellow-400">
                <div className="flex items-start">
                  <span className="text-sm mr-2 mt-1">🍯</span>
                  <div>
                    <h5 className="font-bold text-yellow-800 mb-1 text-xs">Importancia Melífera</h5>
                    <p className="text-yellow-900 text-xs leading-relaxed">{plantData.significado}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de Splash
const BeeSplash = ({ onFinishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(onFinishLoading, 3000);
    return () => clearTimeout(timer);
  }, [onFinishLoading]);

  return (
    <div className="fixed inset-0 bg-green-50 flex flex-col items-center justify-center z-50">
      <div className="relative mb-6">
        <img src={logoinia} alt="Logo INIA" className="h-32 w-auto object-contain" />
      </div>
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
  
  // Arrays de configuración
  const meliferaPages = Array.from({length: 17}, (_, i) => `melifera-page-${i + 1}`);
  const mainPages = [
    'table-of-contents',
    'bee-history',
    'bee-structure', 
    'bee-reproduction',
    'melifera-botany',
    ...meliferaPages,
    'bee-temperature',
    'apiculture',
    'bee-genetics',
    'apiaries',
    'honey',
    'colaboradores'
  ];

  // Mapeo de imágenes
  const meliferaImages = {
    'melifera-page-1': MeliferaPage1, 'melifera-page-2': MeliferaPage2,
    'melifera-page-3': MeliferaPage3, 'melifera-page-4': MeliferaPage4,
    'melifera-page-5': MeliferaPage5, 'melifera-page-6': MeliferaPage6,
    'melifera-page-7': MeliferaPage7, 'melifera-page-8': MeliferaPage8,
    'melifera-page-9': MeliferaPage9, 'melifera-page-10': MeliferaPage10,
    'melifera-page-11': MeliferaPage11, 'melifera-page-12': MeliferaPage12,
    'melifera-page-13': MeliferaPage13, 'melifera-page-14': MeliferaPage14,
    'melifera-page-15': MeliferaPage15, 'melifera-page-16': MeliferaPage16,
    'melifera-page-17': MeliferaPage17
  };

  // Navegación items
  const navItems = [
    { id: 0, title: "TABLA DE CONTENIDOS", page: "table-of-contents" },
    { id: 1, title: "HISTORIA", page: "bee-history" },
    { id: 2, title: "ESTRUCTURA", page: "bee-structure" },
    { id: 3, title: "REPRODUCCIÓN", page: "bee-reproduction" },
    { id: 4, title: "BOTÁNICA", page: "melifera-botany" },
    { id: 5, title: "TEMPERATURA", page: "bee-temperature" },
    { id: 6, title: "APICULTURA", page: "apiculture" },
    { id: 7, title: "ARN", page: "bee-genetics" },
    { id: 8, title: "APIARIOS", page: "apiaries" },
    { id: 9, title: "MIEL", page: "honey" },
    { id: 10, title: "COLABORADORES", page: "colaboradores" }
  ];

  // Estados
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = location.hash.replace('#', '');
    return hash && mainPages.includes(hash) ? hash : 'table-of-contents';
  });
  const [isLoading, setIsLoading] = useState(true);
  const [contentHeight, setContentHeight] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  // Funciones helper
  const isMeliferaPage = meliferaPages.includes(currentPage);
  const getMeliferaPageNumber = () => {
    if (currentPage === 'melifera-botany') return 0;
    const match = currentPage.match(/melifera-page-(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const sectionToPage = {
    1: 'bee-history', 2: 'bee-structure', 3: 'bee-reproduction',
    4: 'melifera-botany', 5: 'bee-temperature', 6: 'apiculture',
    7: 'bee-genetics', 8: 'apiaries', 9: 'honey', 10: 'colaboradores'
  };

  const pageToMainSection = Object.fromEntries(
    Object.entries(sectionToPage).map(([k, v]) => [v, parseInt(k)])
  );
  pageToMainSection['table-of-contents'] = 0;

  // Funciones de navegación
  const goToPreviousPage = () => {
    const currentIndex = mainPages.indexOf(currentPage);
    const newIndex = currentIndex > 0 ? currentIndex - 1 : mainPages.length - 1;
    setCurrentPage(mainPages[newIndex]);
  };
  
  const goToNextPage = () => {
    const currentIndex = mainPages.indexOf(currentPage);
    const newIndex = currentIndex < mainPages.length - 1 ? currentIndex + 1 : 0;
    setCurrentPage(mainPages[newIndex]);
  };

  // Función para actualizar indicador
  const updateIndicator = (activeIndex) => {
    const navContainer = document.querySelector('.nav-container');
    const activeButton = document.querySelector(`[data-nav-index="${activeIndex}"]`);
    
    if (navContainer && activeButton) {
      const containerRect = navContainer.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      
      setIndicatorStyle({
        left: `${buttonRect.left - containerRect.left}px`,
        width: `${buttonRect.width}px`,
        transition: 'all 0.3s ease-in-out'
      });
    }
  };

  // Efectos
  useEffect(() => {
    if (currentPage !== 'table-of-contents') {
      navigate(`/atlas#${currentPage}`, { replace: true });
    } else {
      navigate('/atlas', { replace: true });
    }
  }, [currentPage, navigate]);

  useEffect(() => {
    const activeIndex = navItems.findIndex(item => 
      item.page === currentPage || (isMeliferaPage && item.page === 'melifera-botany')
    );
    if (activeIndex !== -1) {
      setTimeout(() => updateIndicator(activeIndex), 50);
    }
  }, [currentPage, isMeliferaPage]);

  useLayoutEffect(() => {
    const updateSize = () => {
      const vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      
      const headerEl = document.querySelector('.atlas-header');
      const headerHeight = headerEl ? headerEl.offsetHeight : 0;
      setContentHeight(vh - headerHeight);
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    window.addEventListener('orientationchange', () => setTimeout(updateSize, 100));
    
    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('orientationchange', updateSize);
    };
  }, []);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = originalStyle; };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && mainPages.includes(hash)) setCurrentPage(hash);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Renderizar componente de página
  const renderPageComponent = () => {
    const components = {
      'table-of-contents': <TableOfContentsPage onChangePage={(id) => setCurrentPage(sectionToPage[id])} />,
      'bee-history': <HistoriaAbeja />,
      'bee-structure': <BeeStructure />,
      'bee-reproduction': <BeeReproduction />,
      'bee-genetics': <BeeGenetics />,
      'melifera-botany': <MeliferaBotany />,
      'bee-temperature': <BeeTemperature />,
      'apiculture': <Apiculture />,
      'apiaries': <Apiaries />,
      'honey': <Honey />,
      'colaboradores': <Colaboradores />
    };

    // Si es una página de melifera numerada
    if (currentPage.startsWith('melifera-page-')) {
      const pageNum = parseInt(currentPage.replace('melifera-page-', ''));
      const plantIndex = pageNum - 1;
      
      if (plantIndex >= 0 && plantIndex < meliferaData.length) {
        return (
          <MeliferaPage 
            imageSrc={meliferaImages[currentPage]} 
            plantIndex={plantIndex}
          />
        );
      }
    }

    return components[currentPage] || <div>Página no encontrada</div>;
  };

  return (
    <>
      {isLoading && <BeeSplash onFinishLoading={() => setIsLoading(false)} />}
      
      <div 
        className="flex flex-col w-full bg-white overflow-hidden" 
        style={{ height: 'var(--vh, 100vh)', maxHeight: 'var(--vh, 100vh)' }}
      >
        {/* Header */}
        <div className="bg-white text-black shadow-md flex-shrink-0 flex flex-col atlas-header">
          {/* Header Principal */}
          <div className="bg-green-600 text-white py-3 px-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center space-x-4">
                <img src={logoinia} alt="INIA" className="h-10 object-contain" />
                <img src={logoGobChile} alt="Gobierno de Chile" className="h-12 object-contain" />
                <div className="ml-4">
                  <h1 className="text-xl font-bold tracking-wide">ATLAS APÍCOLA DE ÑUBLE</h1>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => navigate('/')}
                  className="text-white p-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  <Home size={20} />
                </button>
                <button 
                  className="text-white p-2 rounded-md hover:bg-green-700 transition-colors"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <ChevronRight size={20} className={`transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div className="bg-black text-white relative">
            <div className="nav-container relative overflow-x-auto">
              <div className="flex justify-center min-w-max">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    data-nav-index={index}
                    onClick={() => setCurrentPage(item.page)}
                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors relative z-10 ${
                      currentPage === item.page || (isMeliferaPage && item.page === 'melifera-botany')
                        ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div className="absolute bottom-0 h-1 bg-green-500 z-0" style={indicatorStyle} />
            </div>
          </div>
        </div>
        
        {/* Contenido */}
        <div className="flex-grow relative overflow-hidden" style={{ height: `${contentHeight}px` }}>
          {/* Overlay móvil */}
          {sidebarOpen && (
            <div 
              className="absolute inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="absolute inset-y-0 left-0 w-3/4 sm:w-64 md:w-72 bg-green-50 shadow-lg z-40">
              <div className="p-4 h-full overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-green-800">Contenido</h2>
                  <button onClick={() => setSidebarOpen(false)} className="p-1 rounded text-gray-500 hover:bg-green-100">
                    <ChevronRight size={20} className="rotate-180" />
                  </button>
                </div>
                
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => { setCurrentPage('table-of-contents'); setSidebarOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        currentPage === 'table-of-contents' 
                          ? 'bg-green-200 text-green-800 font-medium' 
                          : 'text-gray-700 hover:bg-green-100'
                      }`}
                    >
                      Tabla de Contenidos
                    </button>
                  </li>
                  
                  {navItems.slice(1).map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => { setCurrentPage(item.page); setSidebarOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          currentPage === item.page || (isMeliferaPage && item.page === 'melifera-botany')
                            ? 'bg-green-200 text-green-800 font-medium' 
                            : 'text-gray-700 hover:bg-green-100'
                        }`}
                      >
                        {item.title}
                      </button>
                      
                      {item.page === 'melifera-botany' && (
                        <div className="pl-6 mt-1 space-y-1">
                          {Array.from({ length: 17 }, (_, i) => i + 1).map(num => (
                            <button
                              key={`melifera-page-${num}`}
                              onClick={() => { setCurrentPage(`melifera-page-${num}`); setSidebarOpen(false); }}
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
          
          {/* Contenido principal */}
          <div className="h-full w-full overflow-hidden relative">
            <div className="h-full w-full">
              {renderPageComponent()}
            </div>
          </div>
          
          {/* Navegación flotante */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-3 transform -translate-y-1/2 z-30 pointer-events-none">
            <button 
              onClick={goToPreviousPage}
              className="bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition-colors pointer-events-auto"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={goToNextPage}
              className="bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition-colors pointer-events-auto"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          
          {isMeliferaPage && currentPage.startsWith('melifera-page-') && (
  <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
    <div className="bg-green-800 bg-opacity-90 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
      {getCurrentPlantName()} ({getMeliferaPageNumber()} de 16)
    </div>
  </div>
)}
            
          
        </div>
      </div>
    </>
  );
};

export default AtlasPage;