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
import abeja from '../components/images/Abeja.png';

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
  'Galega',
  'Apicultura Natural Regenerativa'
];

// Componente MeliferaPage optimizado con nuevas clases CSS
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
    <div className="melifera-container">
      {/* Panel izquierdo - Imagen */}
      <div className="melifera-image-panel">
        <img 
          src={imageSrc} 
          alt={plantNames[plantIndex] || `Planta ${plantIndex + 1}`}
          className="melifera-image fade-in"
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      </div>
      
      {/* Panel derecho - Información */}
      <div className="melifera-info-panel custom-scrollbar">
        <div className="space-y-3 flex-1">
          
          {/* Taxonomía estilo vertical sin título exterior */}
          <div className="taxonomy-vertical-container">
            <div className="taxonomy-header">TAXONOMÍA</div>
            
            <div className="taxonomy-chain">
              <div className="taxonomy-item orden">
                <div className="taxonomy-label">ORDEN</div>
                <div className="taxonomy-value">{plantData.orden.toUpperCase()}</div>
              </div>
              
              <div className="taxonomy-connector"></div>
              
              <div className="taxonomy-item familia">
                <div className="taxonomy-label">FAMILIA</div>
                <div className="taxonomy-value">{plantData.familia.toUpperCase()}</div>
              </div>
              
              <div className="taxonomy-connector"></div>
              
              <div className="taxonomy-item genero">
                <div className="taxonomy-label">GÉNERO</div>
                <div className="taxonomy-value">{plantData.genero.toUpperCase()}</div>
              </div>
              
              <div className="taxonomy-connector"></div>
              
              <div className="taxonomy-item especie">
                <div className="taxonomy-label">ESPECIE</div>
                <div className="taxonomy-value">{plantData.especie.toUpperCase()}</div>
              </div>
            </div>
            
            {/* Información adicional con valor apícola al lado */}
            <div className="taxonomy-bottom-section">
              <div className="taxonomy-additional-info">
                <div className="taxonomy-info-item">
                  <strong>Sinónimo:</strong> {plantData.sinonimo}
                </div>
                <div className="taxonomy-info-item">
                  <strong>Forma de crecimiento:</strong> {plantData.formaCrecimiento}
                </div>
              </div>
              
              {/* Valor Apícola posicionado a la derecha */}
              <div className="apicolage-side-container">
                <div className="half-donut-chart">
                  <svg width="120" height="80" viewBox="0 0 120 80">
                    {/* Media dona de fondo */}
                    <path
                      d="M 20 60 A 40 40 0 0 1 100 60"
                      fill="none"
                      stroke="#f5f5f5"
                      strokeWidth="20"
                    />
                    
                    {/* Sección de néctar (amarillo) */}
                    <path
                      d="M 20 60 A 40 40 0 0 1 100 60"
                      fill="none"
                      stroke="url(#nectarGradient)"
                      strokeWidth="20"
                      strokeDasharray={`${(plantData.nectar / 100) * 125.6} 125.6`}
                      strokeDashoffset="0"
                      className="half-donut-section nectar-arc"
                    />
                    
                    {/* Sección de polen (naranja) */}
                    <path
                      d="M 20 60 A 40 40 0 0 1 100 60"
                      fill="none"
                      stroke="url(#polenGradient)"
                      strokeWidth="20"
                      strokeDasharray={`${(plantData.polen / 100) * 125.6} 125.6`}
                      strokeDashoffset={`-${(plantData.nectar / 100) * 125.6}`}
                      className="half-donut-section polen-arc"
                    />
                    
                    {/* Gradientes */}
                    <defs>
                      <linearGradient id="nectarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffd23f" />
                        <stop offset="100%" stopColor="#ffe066" />
                      </linearGradient>
                      <linearGradient id="polenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff6b35" />
                        <stop offset="100%" stopColor="#ff8c42" />
                      </linearGradient>
                    </defs>
                    
                    {/* Textos curvados siguiendo el semicírculo */}
                    <defs>
                      <path id="nectarPath" d="M 25 50 A 35 35 0 0 1 60 25" />
                      <path id="polenPath" d="M 60 25 A 35 35 0 0 1 95 50" />
                    </defs>
                    
                    <text className="curved-text nectar-text">
                      <textPath href="#nectarPath" startOffset="50%">
                        Néctar
                      </textPath>
                    </text>
                    
                    <text className="curved-text polen-text">
                      <textPath href="#polenPath" startOffset="50%">
                        Polen
                      </textPath>
                    </text>
                  </svg>
                  
                  <div className="apicolage-text-below">VALOR APÍCOLA</div>
                </div>
              </div>
            </div>
          </div>
          

          
          {/* Calendario de floración */}
          <div className="melifera-section">
            <h4 className="melifera-section-title">
              <span className="melifera-section-icon"></span>
              Calendario de Floración
            </h4>
            
            <div className="melifera-calendar">
              {/* Calendario visual */}
              <div className="melifera-calendar-grid">
                {meses.map((mes, index) => (
                  <div key={index} className="melifera-month">
                    <div className="melifera-month-label">
                      {mes}
                    </div>
                    <div 
                      className="melifera-month-bar smooth-transition"
                      style={{ 
                        backgroundColor: getFlowerColor(plantData.floracion[index])
                      }}
                      onMouseEnter={() => setHoveredMonth(index)}
                      onMouseLeave={() => setHoveredMonth(null)}
                    >
                      {hoveredMonth === index && (
                        <div className="melifera-tooltip">
                          <div>
                            <div style={{ fontWeight: '600' }}>{mes}</div>
                            <div>{plantData.floracion[index]}%</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Leyenda - ELIMINADA */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de Splash actualizado
const BeeSplash = ({ onFinishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular progreso de carga
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onFinishLoading, 500); // Pequeña pausa antes de terminar
          return 100;
        }
        return prev + 2; // Incrementar progreso cada 60ms
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, [onFinishLoading]);

  return (
    <div className="fixed inset-0 bg-green-50 flex flex-col items-center justify-center z-50">
      <div className="relative mb-6">
        <img src={logoinia} alt="Logo INIA" className="h-32 w-auto object-contain fade-in" />
      </div>
      
      {/* Contenedor de la abeja animada */}
      <div className="relative w-80 h-20 mb-6 overflow-hidden">
        {/* Barra de progreso de fondo */}
        <div className="absolute bottom-4 left-0 right-0 h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress + 5, 100)}%` }}
          />
        </div>
        
        {/* Abeja flotante - volando arriba de la barra */}
        <img 
          src={abeja} 
          alt="Abeja" 
          className="absolute top-0 w-12 h-12 object-contain transition-all duration-300 ease-out bee-float"
          style={{ 
            left: `${Math.min(progress, 90)}%`,
            transform: `translateX(-50%) ${progress < 100 ? 'rotate(-10deg)' : 'rotate(0deg)'}`
          }}
        />
      </div>
      
      <p className="mt-3 text-gray-600 font-medium">
        Cargando Atlas INIA Quilamapu... {progress}%
      </p>
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

  // Función para obtener el nombre de la planta actual
  const getCurrentPlantName = () => {
    const pageNumber = getMeliferaPageNumber();
    return plantNames[pageNumber - 1] || `Página ${pageNumber}`;
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

  // NUEVO: Efecto para navegación con teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Solo procesar si no hay inputs enfocados
      const activeElement = document.activeElement;
      const isInputFocused = activeElement && (
        activeElement.tagName === 'INPUT' || 
        activeElement.tagName === 'TEXTAREA' || 
        activeElement.contentEditable === 'true'
      );
      
      if (isInputFocused) return;
      
      if (event.key === 'ArrowLeft') {
        event.preventDefault(); // Prevenir scroll horizontal
        goToPreviousPage();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault(); // Prevenir scroll horizontal
        goToNextPage();
      }
    };

    // Agregar el event listener al document
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]); // Dependencia en currentPage para tener el estado actual

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
      
      <div className="atlas-container">
        {/* Header */}
        <div className="atlas-header">
          {/* Header Principal */}
          <div className="atlas-header-main">
            <div className="atlas-header-content">
              <div className="atlas-logo-section">
                <img src={logoinia} alt="INIA" className="atlas-logo" />
                <img 
                  src={logoGobChile} 
                  alt="Gobierno de Chile" 
                  className="atlas-logo" 
                  style={{height: '2.5rem'}} 
                />
                <div className="atlas-title">
                  ATLAS APÍCOLA DE ÑUBLE
                </div>
              </div>

              <div className="atlas-header-controls">
                <button
                  onClick={() => navigate('/')}
                  className="atlas-control-btn"
                  aria-label="Ir al inicio"
                >
                  <Home size={20} />
                </button>
                <button 
                  className="atlas-control-btn"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  aria-label="Abrir menú"
                >
                  <ChevronRight 
                    size={20} 
                    className={`smooth-transition ${sidebarOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div className="atlas-nav">
            <div className="nav-container">
              <div className="atlas-nav-list">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    data-nav-index={index}
                    onClick={() => setCurrentPage(item.page)}
                    className={`atlas-nav-btn ${
                      currentPage === item.page || (isMeliferaPage && item.page === 'melifera-botany')
                        ? 'active' : ''
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div className="nav-indicator" style={indicatorStyle} />
            </div>
          </div>
        </div>
        
        {/* Contenido */}
        <div className="atlas-content" style={{ height: `${contentHeight}px` }}>
          {/* Overlay móvil */}
          {sidebarOpen && (
            <div 
              className="mobile-overlay md:hidden" 
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="atlas-sidebar">
              <div className="atlas-sidebar-content custom-scrollbar">
                <div className="atlas-sidebar-header">
                  <h2 className="atlas-sidebar-title">Contenido</h2>
                  <button 
                    onClick={() => setSidebarOpen(false)} 
                    className="atlas-control-btn"
                    aria-label="Cerrar menú"
                  >
                    <ChevronRight size={20} className="rotate-180" />
                  </button>
                </div>
                
                <ul className="atlas-sidebar-nav">
                  <li>
                    <button
                      onClick={() => { setCurrentPage('table-of-contents'); setSidebarOpen(false); }}
                      className={`atlas-sidebar-btn ${
                        currentPage === 'table-of-contents' ? 'active' : ''
                      }`}
                    >
                      Tabla de Contenidos
                    </button>
                  </li>
                  
                  {navItems.slice(1).map(item => (
                    <li key={item.id}>
                      <button
                        onClick={() => { setCurrentPage(item.page); setSidebarOpen(false); }}
                        className={`atlas-sidebar-btn ${
                          currentPage === item.page || (isMeliferaPage && item.page === 'melifera-botany')
                            ? 'active' : ''
                        }`}
                      >
                        {item.title}
                      </button>
                      
                      {item.page === 'melifera-botany' && (
                        <div className="atlas-sidebar-subnav">
                          {Array.from({ length: 17 }, (_, i) => i + 1).map(num => (
                            <button
                              key={`melifera-page-${num}`}
                              onClick={() => { setCurrentPage(`melifera-page-${num}`); setSidebarOpen(false); }}
                              className={`atlas-sidebar-btn ${
                                currentPage === `melifera-page-${num}` ? 'active' : ''
                              }`}
                            >
                              {plantNames[num - 1] || `Página ${num}`}
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
          <div className="atlas-main-content">
            {renderPageComponent()}
          </div>
          
          {/* Navegación flotante */}
          <div className="atlas-nav-controls">
            <button 
              onClick={goToPreviousPage}
              className="atlas-nav-arrow"
              aria-label="Página anterior"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={goToNextPage}
              className="atlas-nav-arrow"
              aria-label="Página siguiente"
            >
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Indicador de página melífera */}
          {isMeliferaPage && currentPage.startsWith('melifera-page-') && (
            <div className="atlas-page-indicator">
              <div className="atlas-indicator-badge">
                {getCurrentPlantName()}
              </div>
            </div>
          )} 
        </div>
      </div>
    </>
  );
};

export default AtlasPage;