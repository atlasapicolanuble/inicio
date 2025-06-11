import React, { useState, useEffect } from 'react';
import abeja from '../components/images/Abeja.png';
import apisLogo from '../components/images/Apis.png'; // Nombre corregido del archivo
import videoBackground from '../components/images/toc.mp4';

const TableOfContentsPage = ({ onChangePage }) => {
  const [loaded, setLoaded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [screenType, setScreenType] = useState('desktop');
  
  // Detectar tipo de pantalla
  useEffect(() => {
    const checkScreenType = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setScreenType('mobile');
      } else if (width < 1024) {
        setScreenType('tablet');
      } else if (width < 1920) {
        setScreenType('notebook');
      } else {
        setScreenType('monitor');
      }
    };
    
    checkScreenType();
    window.addEventListener('resize', checkScreenType);
    
    return () => {
      window.removeEventListener('resize', checkScreenType);
    };
  }, []);
  
  // Simular carga de la página
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);
  
  // Secciones de contenido actualizadas según el nuevo orden
  const sections = [
    {
      id: 1,
      number: "01",
      title: "HISTORIA",
      items: ["Orígenes de las abejas", "Evolución"]
    },
    {
      id: 2,
      number: "02", 
      title: "ESTRUCTURA SOCIAL",
      items: ["Jerarquía en la colmena", "Roles de las abejas (reina, obreras, zánganos)"]
    },
    {
      id: 3,
      number: "03",
      title: "REPRODUCCIÓN", 
      items: ["Ciclo de vida", "Mecanismos de reproducción"]
    },
    {
      id: 4,
      number: "04",
      title: "BOTÁNICA MELÍFERA",
      items: ["Plantas que atraen a las abejas", "Descripción de sitios ecológicos", "Calendarios de floraciones por cada mes en tres sitios ecológicos"]
    },
    {
      id: 5,
      number: "05",
      title: "TEMPERATURA",
      items: ["Efectos del clima en la actividad de las abejas", "Datos de sensores de temperatura y horas efectivas de vuelo"]
    },
    {
      id: 6,
      number: "06",
      title: "APICULTURA",
      items: ["Historia y desarrollo de la apicultura", "Prácticas y técnicas apícolas", "Estadísticas actuales"]
    },
    {
      id: 7,
      number: "07",
      title: "ARN",
      items: ["Diversidad genética", "Impacto en las colmenas", "Análisis genético de poblaciones"]
    },
    {
      id: 8,
      number: "08",
      title: "APIARIOS",
      items: ["Diseño y gestión de apiarios", "Importancia de la ubicación"]
    },
    {
      id: 9,
      number: "09",
      title: "MIEL",
      items: ["Tipos de miel", "Incorruptibilidad de la miel", "Consumo de miel"]
    }
  ];

  const handleSectionClick = (sectionId) => {
    if (onChangePage) {
      onChangePage(sectionId);
    }
  };

  return (
    <div className="w-full h-full flex overflow-hidden">
      
      {/* Lado izquierdo - Video de fondo */}
      <div className={`relative h-full overflow-hidden video-container ${screenType}`}>
        {/* Video de fondo */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
        >
          <source src={videoBackground} type="video/mp4" />
          {/* Fallback para navegadores que no soportan video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-200 via-blue-300 to-green-200"></div>
        </video>
        
        {/* Overlay suave para mejorar legibilidad */}
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      </div>

      {/* Lado derecho - Tabla de contenidos */}
      <div className={`bg-white relative overflow-hidden content-container ${screenType}`}>
        
        {/* Rectángulo verde en esquina inferior derecha con título */}
        <div 
          className={`absolute bottom-0 right-0 bg-lime-500 transition-transform duration-700 green-rectangle ${screenType} ${loaded ? 'translate-x-0' : 'translate-x-full'}`}
        >
        </div>
        
        {/* Título "TABLA DE CONTENIDOS" */}
        <div className={`absolute bottom-1/3 right-0 flex items-center justify-center title-container ${screenType}`}>
          <div className={`font-black text-black tracking-tighter -rotate-90 transform whitespace-nowrap transition-transform duration-1000 toc-title ${screenType} ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            TABLA DE CONTENIDOS
          </div>
        </div>

        {/* Abeja animada */}
        <div className={`absolute transition-all duration-1500 bee-container ${screenType} ${loaded ? 'opacity-90 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-180'} bee-float`}>
          <img 
            src={abeja} 
            alt="Abeja melífera" 
            className={`object-contain bee-image ${screenType}`}
          />
        </div>
        
        {/* Logo Apis reemplazando texto - POSICION AJUSTADA */}
        <div className={`absolute transition-all duration-1000 delay-500 apis-text-container ${screenType} ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img 
            src={apisLogo} 
            alt="Apis Melífera Logo" 
            className={`object-contain apis-logo ${screenType}`}
          />
        </div>

        {/* Contenido de secciones */}
        <div className={`h-full overflow-y-auto sections-container ${screenType}`}>
          <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Grid de columnas responsive */}
            <div className={`grid h-full sections-grid ${screenType} ${screenType === 'notebook' ? 'gap-3' : 'gap-4'}`}>
              
              {/* Para mobile, todas las secciones en una columna */}
              {screenType === 'mobile' ? (
                <div className={screenType === 'notebook' ? 'space-y-3' : 'space-y-4'}>
                  {sections.map((section, index) => (
                    <div 
                      key={section.id}
                      className={`transition-all duration-500 cursor-pointer ${loaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                      onMouseEnter={() => setHoveredItem(section.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleSectionClick(section.id)}
                    >
                      <div className="flex items-start">
                        <div className="mr-4 flex-shrink-0">
                          <div 
                            className={`font-black abril-fatface transition-all duration-300 cursor-pointer section-number ${screenType} ${
                              hoveredItem === section.id ? 'text-lime-600 transform scale-110' : 'text-black hover:text-lime-600'
                            }`}
                          >
                            {section.number}
                          </div>
                        </div>
                        <div className="mt-1 w-full">
                          <h3 
                            className={`font-semibold open-sans transition-all duration-300 cursor-pointer section-title ${screenType} ${
                              hoveredItem === section.id ? 'text-lime-600 transform translate-x-1' : 'hover:text-lime-600'
                            } ${screenType === 'notebook' ? 'mb-2' : 'mb-3'}`}
                          >
                            {section.title}
                          </h3>
                          <ul 
                            className={`space-y-1 text-gray-700 transition-all duration-500 section-items ${screenType} ${
                              loaded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                            }`}
                            style={{ transitionDelay: `${index * 150 + 200}ms` }}
                          >
                            {section.items.map((item, idx) => (
                              <li 
                                key={idx}
                                className="flex items-start"
                                style={{ animationDelay: `${index * 150 + 300 + idx * 100}ms` }}
                              >
                                <span className="text-lime-600 mr-2 text-sm">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {/* Columna izquierda */}
                  <div className={screenType === 'notebook' ? 'space-y-3' : 'space-y-4'}>
                    {sections.slice(0, 5).map((section, index) => (
                      <div 
                        key={section.id}
                        className={`transition-all duration-500 cursor-pointer ${loaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                        onMouseEnter={() => setHoveredItem(section.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => handleSectionClick(section.id)}
                      >
                        <div className="flex items-start">
                          <div className="mr-4 flex-shrink-0">
                            <div 
                              className={`font-black abril-fatface transition-all duration-300 cursor-pointer section-number ${screenType} ${
                                hoveredItem === section.id ? 'text-lime-600 transform scale-110' : 'text-black hover:text-lime-600'
                              }`}
                            >
                              {section.number}
                            </div>
                          </div>
                          <div className="mt-1 w-full">
                            <h3 
                              className={`font-semibold open-sans transition-all duration-300 cursor-pointer section-title ${screenType} ${
                                hoveredItem === section.id ? 'text-lime-600 transform translate-x-1' : 'hover:text-lime-600'
                              } ${screenType === 'notebook' ? 'mb-2' : 'mb-3'}`}
                            >
                              {section.title}
                            </h3>
                            <ul 
                              className={`space-y-1 text-gray-700 transition-all duration-500 section-items ${screenType} ${
                                loaded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                              }`}
                              style={{ transitionDelay: `${index * 150 + 200}ms` }}
                            >
                              {section.items.map((item, idx) => (
                                <li 
                                  key={idx}
                                  className="flex items-start"
                                  style={{ animationDelay: `${index * 150 + 300 + idx * 100}ms` }}
                                >
                                  <span className="text-lime-600 mr-2 text-sm">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Columna derecha */}
                  <div className={screenType === 'notebook' ? 'space-y-3' : 'space-y-4'}>
                    {sections.slice(5).map((section, index) => (
                      <div 
                        key={section.id}
                        className={`transition-all duration-500 cursor-pointer ${loaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
                        style={{ transitionDelay: `${(index + 5) * 150}ms` }}
                        onMouseEnter={() => setHoveredItem(section.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => handleSectionClick(section.id)}
                      >
                        <div className="flex items-start">
                          <div className="mr-4 flex-shrink-0">
                            <div 
                              className={`font-black abril-fatface transition-all duration-300 cursor-pointer section-number ${screenType} ${
                                hoveredItem === section.id ? 'text-lime-600 transform scale-110' : 'text-black hover:text-lime-600'
                              }`}
                            >
                              {section.number}
                            </div>
                          </div>
                          <div className="mt-1 w-full">
                            <h3 
                              className={`font-semibold open-sans transition-all duration-300 cursor-pointer section-title ${screenType} ${
                                hoveredItem === section.id ? 'text-lime-600 transform translate-x-1' : 'hover:text-lime-600'
                              } ${screenType === 'notebook' ? 'mb-2' : 'mb-3'}`}
                            >
                              {section.title}
                            </h3>
                            <ul 
                              className={`space-y-1 text-gray-700 transition-all duration-500 section-items ${screenType} ${
                                loaded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                              }`}
                              style={{ transitionDelay: `${(index + 5) * 150 + 200}ms` }}
                            >
                              {section.items.map((item, idx) => (
                                <li 
                                  key={idx}
                                  className="flex items-start"
                                  style={{ animationDelay: `${(index + 5) * 150 + 300 + idx * 100}ms` }}
                                >
                                  <span className="text-lime-600 mr-2 text-sm">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS con Media Queries */}
      <style jsx="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
        
        .apis-melifera-text {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 300;
          letter-spacing: 2px;
        }
        
        .abril-fatface {
          font-family: 'Abril Fatface', serif;
        }
        
        .open-sans {
          font-family: 'Open Sans', sans-serif;
        }
        
        /* Contenedor de video */
        .video-container {
          width: 100%;
        }
        
        /* Contenedor de contenido */
        .content-container {
          width: 100%;
        }
        
        /* Rectángulo verde */
        .green-rectangle {
          width: 4rem;
          height: 5rem;
        }
        
        /* Título TABLA DE CONTENIDOS */
        .title-container {
          width: 4rem;
        }
        
        .toc-title {
          font-size: 1.25rem;
        }
        
        /* Contenedor de abeja - BAJADO MUCHO MÁS */
        .bee-container {
          bottom: 0.5rem; /* BAJADO de 5rem a 0.5rem - muy cerca del borde */
          right: 5rem;
        }
        
        .bee-image {
          width: 11rem; /* Aumentado de 9rem a 11rem */
          height: 11rem; /* Aumentado de 9rem a 11rem */
        }
        
        /* Logo Apis Melífera - mismo tamaño que la abeja */
        .apis-logo {
          width: 11rem; /* Mismo tamaño que la abeja aumentado */
          height: 11rem; /* Mismo tamaño que la abeja aumentado */
        }
        
        /* Contenedor Apis Logo - AJUSTADO: SUBIDO UN POCO */
        .apis-text-container {
          bottom: -2.5rem !important; /* SUBIDO de -5.5rem a -2.5rem */
          right: 18rem; /* Separado de la abeja */
          position: absolute !important;
        }
        
        .apis-title {
          font-size: 1.25rem;
        }
        
        /* Contenedor de secciones */
        .sections-container {
          padding: 1.5rem;
          padding-bottom: 10rem;
          padding-right: 4rem;
        }
        
        /* Grid de secciones */
        .sections-grid {
          grid-template-columns: 1fr;
        }
        
        /* Números de sección */
        .section-number {
          font-size: 3rem;
        }
        
        /* Títulos de sección */
        .section-title {
          font-size: 1.25rem;
        }
        
        /* Items de sección */
        .section-items {
          font-size: 0.875rem;
        }
        
        /* Media Queries para Mobile */
        @media (max-width: 767px) {
          .video-container.mobile {
            display: none;
          }
          
          .content-container.mobile {
            width: 100%;
          }
          
          .green-rectangle.mobile {
            width: 3rem;
            height: 4rem;
          }
          
          .title-container.mobile {
            width: 3rem;
          }
          
          .toc-title.mobile {
            font-size: 0.875rem;
          }
          
          .bee-container.mobile {
            bottom: 0.25rem; /* BAJADO - muy cerca del borde en móvil */
            right: 1rem;
          }
          
          .bee-image.mobile {
            width: 6rem; /* Aumentado de 5rem a 6rem */
            height: 6rem; /* Aumentado de 5rem a 6rem */
          }
          
          .apis-logo.mobile {
            width: 6rem; /* Mismo tamaño que la abeja móvil aumentado */
            height: 6rem; /* Mismo tamaño que la abeja móvil aumentado */
          }
          
          .apis-text-container.mobile {
            bottom: -1.5rem !important; /* SUBIDO de -3rem a -1.5rem */
            right: 8rem; /* Ajustado para móvil */
          }
          
          .apis-text-container.mobile {
            bottom: 1rem;
            right: 1rem;
          }
          
          .apis-title.mobile {
            font-size: 1rem;
          }
          
          .sections-container.mobile {
            padding: 1rem;
            padding-bottom: 8rem;
            padding-right: 1rem;
          }
          
          .section-number.mobile {
            font-size: 2rem;
          }
          
          .section-title.mobile {
            font-size: 1rem;
          }
          
          .section-items.mobile {
            font-size: 0.75rem;
          }
        }
        
        /* Media Queries para Tablet */
        @media (min-width: 768px) and (max-width: 1023px) {
          .video-container.tablet {
            width: 40%;
          }
          
          .content-container.tablet {
            width: 60%;
          }
          
          .green-rectangle.tablet {
            width: 3.5rem;
            height: 4.5rem;
          }
          
          .title-container.tablet {
            width: 3.5rem;
          }
          
          .toc-title.tablet {
            font-size: 1rem;
          }
          
          .bee-container.tablet {
            bottom: 0.5rem; /* BAJADO - muy cerca del borde en tablet */
            right: 3rem;
          }
          
          .bee-image.tablet {
            width: 7.5rem; /* Aumentado de 6rem a 7.5rem */
            height: 7.5rem; /* Aumentado de 6rem a 7.5rem */
          }
          
          .apis-logo.tablet {
            width: 7.5rem; /* Mismo tamaño que la abeja tablet aumentado */
            height: 7.5rem; /* Mismo tamaño que la abeja tablet aumentado */
          }
          
          .apis-text-container.tablet {
            bottom: -1.75rem !important; /* SUBIDO de -3.75rem a -1.75rem */
            right: 12rem; /* Ajustado para tablet */
          }
          
          .apis-text-container.tablet {
            bottom: 1.25rem;
            right: 3rem;
          }
          
          .apis-title.tablet {
            font-size: 1.125rem;
          }
          
          .sections-container.tablet {
            padding: 1.25rem;
            padding-bottom: 9rem;
            padding-right: 3rem;
          }
          
          .sections-grid.tablet {
            grid-template-columns: 1fr 1fr;
          }
          
          .section-number.tablet {
            font-size: 2.5rem;
          }
          
          .section-title.tablet {
            font-size: 1.125rem;
          }
          
          .section-items.tablet {
            font-size: 0.8125rem;
          }
        }
        
        /* Media Queries para Notebook - TÍTULOS MÁS GRANDES */
        @media (min-width: 1024px) and (max-width: 1919px) {
          .video-container.notebook {
            width: 33.333333%;
          }
          
          .content-container.notebook {
            width: 66.666667%;
          }
          
          .green-rectangle.notebook {
            width: 3rem;
            height: 4rem;
          }
          
          .title-container.notebook {
            width: 3rem;
          }
          
          .toc-title.notebook {
            font-size: 0.875rem;
          }
          
          .bee-container.notebook {
            bottom: 0.5rem; /* BAJADO - muy cerca del borde en notebook */
            right: 3rem;
          }
          
          .bee-image.notebook {
            width: 8rem; /* Aumentado de 6.5rem a 8rem */
            height: 8rem; /* Aumentado de 6.5rem a 8rem */
          }
          
          .apis-logo.notebook {
            width: 8rem; /* Mismo tamaño que la abeja notebook aumentado */
            height: 8rem; /* Mismo tamaño que la abeja notebook aumentado */
          }
          
          .apis-text-container.notebook {
            bottom: -2rem !important; /* SUBIDO de -4rem a -2rem */
            right: 14rem; /* Ajustado para notebook */
          }
          
          .apis-text-container.notebook {
            bottom: 1rem;
            right: 3rem;
          }
          
          .apis-title.notebook {
            font-size: 1rem;
          }
          
          .sections-container.notebook {
            padding: 1rem;
            padding-bottom: 8rem;
            padding-right: 3rem;
          }
          
          /* ESPACIADO ENTRE SECCIONES REDUCIDO */
          .sections-grid.notebook {
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem; /* Reducido de gap-4 (1rem) a 0.75rem */
          }
          
          /* ESPACIADO ENTRE ELEMENTOS DE CADA SECCIÓN REDUCIDO */
          .sections-grid.notebook .space-y-4 {
            gap: 0.75rem; /* Reducido el espacio entre secciones */
          }
          
          .section-number.notebook {
            font-size: 2rem;
          }
          
          /* TÍTULOS MÁS GRANDES PARA NOTEBOOK CON ESPACIADO AJUSTADO */
          .section-title.notebook {
            font-size: 1.375rem; /* Tamaño grande mantenido (22px) */
            font-weight: 700; /* Negrita fuerte mantenida */
            line-height: 1.15; /* Línea compacta mantenida */
            margin-bottom: 0.5rem; /* Reducido de 0.75rem a 0.5rem */
            letter-spacing: 0.5px; /* Espaciado de letras mantenido */
          }
          
          .section-items.notebook {
            font-size: 0.75rem;
          }
        }
        
        /* Media Queries para Monitor Grande */
        @media (min-width: 1920px) {
          .video-container.monitor {
            width: 33.333333%;
          }
          
          .content-container.monitor {
            width: 66.666667%;
          }
          
          .green-rectangle.monitor {
            width: 5rem;
            height: 6rem;
          }
          
          .title-container.monitor {
            width: 5rem;
          }
          
          .toc-title.monitor {
            font-size: 1.5rem;
          }
          
          .bee-container.monitor {
            bottom: 1rem; /* BAJADO - cerca del borde en monitor */
            right: 6rem;
          }
          
          .bee-image.monitor {
            width: 14rem; /* Aumentado de 12rem a 14rem */
            height: 14rem; /* Aumentado de 12rem a 14rem */
          }
          
          .apis-logo.monitor {
            width: 14rem; /* Mismo tamaño que la abeja monitor aumentado */
            height: 14rem; /* Mismo tamaño que la abeja monitor aumentado */
          }
          
          .apis-text-container.monitor {
            bottom: -3.5rem !important; /* SUBIDO de -7rem a -3.5rem */
            right: 24rem; /* Ajustado para monitor */
          }
          
          .apis-text-container.monitor {
            bottom: 2rem;
            right: 6rem;
          }
          
          .apis-title.monitor {
            font-size: 2rem;
          }
          
          .sections-container.monitor {
            padding: 2rem;
            padding-bottom: 12rem;
            padding-right: 6rem;
          }
          
          .sections-grid.monitor {
            grid-template-columns: 1fr 1fr;
          }
          
          .section-number.monitor {
            font-size: 4rem;
          }
          
          .section-title.monitor {
            font-size: 1.75rem;
          }
          
          .section-items.monitor {
            font-size: 1.125rem;
          }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(2deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(8px) rotate(-2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        .bee-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slideIn 0.5s forwards;
        }
        
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default TableOfContentsPage;