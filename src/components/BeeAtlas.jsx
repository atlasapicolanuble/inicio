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

// Componente MeliferaPage optimizado con calendario mejorado
const MeliferaPage = ({ imageSrc = "https://via.placeholder.com/400x300", plantIndex = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredMonth, setHoveredMonth] = useState(null);
  
  // Obtener datos de la planta según el índice
  const plantData = meliferaData[plantIndex] || meliferaData[0];
  
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Función para obtener el color según el porcentaje de floración (como estaba antes)
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

          {/* Calendario de floración simplificado */}
          <div className="melifera-section">
            <h4 className="melifera-section-title">
              <span className="melifera-section-icon"></span>
              Calendario de Floración
            </h4>
            
            <div className="melifera-calendar">
              {/* Calendario visual original */}
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
                          <div style={{ 
                            fontWeight: 'bold', 
                            fontSize: '1.1rem',
                            textAlign: 'center',
                            lineHeight: '1'
                          }}>
                            {plantData.floracion[index]}%
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de Splash mejorado con más espacio para la abeja
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
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo-container">
          <img src={logoinia} alt="Logo INIA" className="splash-logo fade-in" />
        </div>
        
        {/* Contenedor mejorado de la abeja animada */}
        <div className="bee-animation-container">
          {/* Barra de progreso de fondo */}
          <div className="progress-bar-background">
            <div 
              className="progress-bar-fill"
              style={{ width: `${Math.min(progress + 5, 100)}%` }}
            />
          </div>
          
          {/* Abeja flotante con más espacio */}
          <img 
            src={abeja} 
            alt="Abeja" 
            className="flying-bee"
            style={{ 
              left: `${Math.min(progress * 0.85, 85)}%`, // Reducir el movimiento máximo
              transform: `translateX(-50%) ${progress < 100 ? 'rotate(-10deg)' : 'rotate(0deg)'}`
            }}
          />
        </div>
        
        <p className="splash-text">
          Cargando Atlas INIA Quilamapu... {progress}%
        </p>
      </div>

      <style jsx>{`
        .splash-screen {
          position: fixed;
          inset: 0;
          background-color:rgb(255, 255, 255);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 2rem;
        }

        .splash-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 600px;
        }

        .splash-logo-container {
          position: relative;
          margin-bottom: 3rem;
        }

        .splash-logo {
          height: 6rem;
          width: auto;
          object-fit: contain;
          animation: fadeIn 1s ease-in-out;
        }

        .bee-animation-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          height: 120px;
          margin-bottom: 2rem;
          overflow: visible; /* Permitir que la abeja se vea completamente */
          padding: 0 3rem; /* Agregar padding lateral para dar espacio */
        }

        .progress-bar-background {
          position: absolute;
          bottom: 30px;
          left: 3rem;
          right: 3rem;
          height: 8px;
          background-color: rgb(229 231 235);
          border-radius: 9999px;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(to right, rgb(251 191 36), rgb(245 158 11));
          border-radius: 9999px;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .flying-bee {
          position: absolute;
          top: 10px;
          width: 4rem;
          height: 4rem;
          object-fit: contain;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
          animation: beeFloat 2s ease-in-out infinite;
        }

        .splash-text {
          margin-top: 1rem;
          color: rgb(75 85 99);
          font-weight: 500;
          text-align: center;
          font-size: 1.1rem;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes beeFloat {
          0%, 100% {
            transform: translateX(-50%) translateY(0px) rotate(-10deg);
          }
          50% {
            transform: translateX(-50%) translateY(-8px) rotate(-5deg);
          }
        }

        /* Media Queries Mejorados */
        
        /* Móviles pequeños */
        @media (max-width: 480px) {
          .splash-screen {
            padding: 1rem;
          }
          
          .splash-logo {
            height: 4rem;
          }
          
          .bee-animation-container {
            max-width: 300px;
            height: 100px;
            padding: 0 2rem;
          }
          
          .progress-bar-background {
            left: 2rem;
            right: 2rem;
            height: 6px;
          }
          
          .flying-bee {
            width: 3rem;
            height: 3rem;
          }
          
          .splash-text {
            font-size: 1rem;
          }
        }

        /* Tablets */
        @media (min-width: 768px) {
          .splash-logo {
            height: 7rem;
          }
          
          .bee-animation-container {
            max-width: 600px;
            height: 140px;
            padding: 0 4rem;
          }
          
          .progress-bar-background {
            left: 4rem;
            right: 4rem;
            height: 10px;
          }
          
          .flying-bee {
            width: 4.5rem;
            height: 4.5rem;
          }
          
          .splash-text {
            font-size: 1.2rem;
          }
        }

        /* Laptops */
        @media (min-width: 1024px) {
          .splash-logo {
            height: 8rem;
          }
          
          .bee-animation-container {
            max-width: 700px;
            height: 160px;
            padding: 0 5rem;
          }
          
          .progress-bar-background {
            left: 5rem;
            right: 5rem;
            height: 12px;
          }
          
          .flying-bee {
            width: 5rem;
            height: 5rem;
          }
          
          .splash-text {
            font-size: 1.3rem;
          }
        }

        /* Monitores grandes (1440px y más) */
        @media (min-width: 1440px) {
          .splash-screen {
            padding: 3rem;
          }
          
          .splash-content {
            max-width: 800px;
          }
          
          .splash-logo-container {
            margin-bottom: 4rem;
          }
          
          .splash-logo {
            height: 10rem;
          }
          
          .bee-animation-container {
            max-width: 800px;
            height: 180px;
            padding: 0 6rem;
            margin-bottom: 3rem;
          }
          
          .progress-bar-background {
            left: 6rem;
            right: 6rem;
            height: 14px;
            bottom: 40px;
          }
          
          .flying-bee {
            width: 6rem;
            height: 6rem;
            top: 5px;
          }
          
          .splash-text {
            font-size: 1.4rem;
            margin-top: 1.5rem;
          }
        }

        /* Monitores ultra anchos (1920px y más) */
        @media (min-width: 1920px) {
          .splash-screen {
            padding: 4rem;
          }
          
          .splash-content {
            max-width: 1000px;
          }
          
          .splash-logo {
            height: 12rem;
          }
          
          .bee-animation-container {
            max-width: 900px;
            height: 200px;
            padding: 0 7rem;
          }
          
          .progress-bar-background {
            left: 7rem;
            right: 7rem;
            height: 16px;
            bottom: 50px;
          }
          
          .flying-bee {
            width: 7rem;
            height: 7rem;
          }
          
          .splash-text {
            font-size: 1.5rem;
          }
        }
      `}</style>
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
    { id: 7, title: "ANR", page: "bee-genetics" },
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
        <div className="atlas-header" style={{ backgroundColor: '#16a34a' }}>
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