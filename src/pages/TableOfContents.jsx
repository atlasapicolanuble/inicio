import React, { useState, useEffect } from 'react';
import abeja from '../components/images/Abeja.png'; // Asegúrate de que la ruta sea correcta

const TableOfContentsPage = ({ onChangePage }) => {
  const [loaded, setLoaded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Comprobar al cargar y cuando cambia el tamaño de la ventana
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Simular carga de la página
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);
  
  // Secciones de contenido (sin cambios)
  const sections = [
    {
      id: 1,
      number: "01",
      title: "Historia de las Abejas",
      items: ["Orígenes de las abejas", "Evolución a lo largo del tiempo"]
    },
    {
      id: 2,
      number: "02",
      title: "Estructura Social de las Abejas",
      items: ["Jerarquía en la colmena", "Roles de las abejas (reina, obreras, zánganos)"]
    },
    {
      id: 3,
      number: "03",
      title: "Reproducción de las Abejas",
      items: ["Ciclo de vida", "Mecanismos de reproducción"]
    },
    {
      id: 4,
      number: "04",
      title: "Genética de las Abejas",
      items: ["Diversidad genética", "Impacto en las colmenas"]
    },
    {
      id: 5,
      number: "05",
      title: "Botánica Melífera",
      items: ["Plantas que atraen a las abejas", "Descripción de sitios ecológicos", "Calendarios de floraciones por cada mes en tres sitios ecológicos"]
    },
    {
      id: 6,
      number: "06",
      title: "Relación de las Abejas con la Temperatura",
      items: ["Efectos del clima en la actividad de las abejas", "Datos de sensores de temperatura y horas efectivas de vuelo"]
    },
    {
      id: 7,
      number: "07",
      title: "Apicultura",
      items: ["Historia y desarrollo de la apicultura", "Prácticas y técnicas apícolas"],
      subsections: [
        {
          title: "Número de Apicultores en el país y Ñuble",
          items: ["Estadísticas actuales", "Tendencias en el crecimiento de la apicultura local"]
        },
        {
          title: "Apicultura Natural Regenerativa (ARN)",
          items: ["Principios de la apicultura natural", "Beneficios para el medio ambiente", "Calendario de mejo ARN"]
        }
      ]
    },
    {
      id: 8,
      number: "08",
      title: "Apiarios",
      items: ["Diseño y gestión de apiarios", "Importancia de la ubicación"]
    },
    {
      id: 9,
      number: "09",
      title: "Miel",
      items: ["Tipos de miel", "Incorruptibilidad de la miel", "Consumo de miel"]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden">
      {/* BARRA LATERAL VERDE - CORREGIDA PARA OCUPAR TODA LA ALTURA */}
      <div 
        className={`hidden md:block w-16 lg:w-24 bg-lime-500 transition-transform duration-700 ${loaded ? 'translate-x-0' : '-translate-x-full'}`}
        style={{
          height: '100vh',
          position: 'sticky',
          top: 0
        }}
      >
        <div className="h-full flex items-center justify-center">
          <div className={`text-lg lg:text-2xl font-black text-black tracking-tighter -rotate-90 transform whitespace-nowrap transition-transform duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Tabla de Contenidos
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="w-full bg-white p-4 md:p-6 overflow-y-auto">
        <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto">
            
            {/* Imagen de abeja para móviles (más grande) */}
            <div className="md:hidden w-full flex justify-center mb-6">
              <div className={`w-52 h-52 transition-all duration-1500 ${loaded ? 'opacity-90 scale-100' : 'opacity-0 scale-0'} bee-float-mobile`}>
                <img 
                  src={abeja} 
                  alt="Abeja melífera" 
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            
            {/* Filas de índice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-16 md:gap-y-6 relative">
              
              {/* Imagen de abeja en el centro (solo para escritorio) - MUCHO MÁS GRANDE */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 lg:w-96 h-72 lg:h-96 pointer-events-none hidden md:block z-10 transition-all duration-1500 ${loaded ? 'opacity-90 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-180'} bee-float`}>
                <img 
                  src={abeja} 
                  alt="Abeja melífera" 
                  className="object-contain w-full h-full"
                />
              </div>

              <style jsx="true">{`
                @keyframes float {
                  0% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
                  25% { transform: translate(-50%, -50%) translateY(-15px) rotate(3deg); }
                  50% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
                  75% { transform: translate(-50%, -50%) translateY(15px) rotate(-3deg); }
                  100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); }
                }
                
                @keyframes floatMobile {
                  0% { transform: translateY(0px) rotate(0deg); }
                  25% { transform: translateY(-10px) rotate(3deg); }
                  50% { transform: translateY(0px) rotate(0deg); }
                  75% { transform: translateY(10px) rotate(-3deg); }
                  100% { transform: translateY(0px) rotate(0deg); }
                }
                
                .bee-float {
                  animation: float 6s ease-in-out infinite;
                }
                
                .bee-float-mobile {
                  animation: floatMobile 6s ease-in-out infinite;
                }
                
                .slide-in {
                  animation: slideIn 0.5s forwards;
                }
                
                @keyframes slideIn {
                  0% { opacity: 0; transform: translateY(20px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                
                .list-item-appear {
                  animation: fadeSlideIn 0.4s forwards;
                }
                
                @keyframes fadeSlideIn {
                  0% { opacity: 0; transform: translateX(-10px); }
                  100% { opacity: 1; transform: translateX(0); }
                }
              `}</style>
              
              {/* Primer grupo: columna izquierda en escritorio, o primera mitad en móvil */}
              <div className="space-y-5">
                {sections.slice(0, isMobile ? sections.length : 5).map((section, index) => (
                  <div 
                    key={section.id}
                    className={`flex items-start transition-all duration-500 ${loaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setHoveredItem(section.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="mr-3 flex-shrink-0">
                      <div 
                        className={`text-4xl sm:text-5xl lg:text-6xl font-black transition-all duration-300 ${hoveredItem === section.id ? 'text-lime-600 transform scale-110' : 'text-black'}`}
                      >
                        {section.number}
                      </div>
                    </div>
                    <div className="mt-2 w-full">
                      <button 
                        className={`text-base sm:text-xl lg:text-2xl font-bold mb-1 text-left transition-all duration-300 ${hoveredItem === section.id ? 'text-lime-600 transform translate-x-1' : 'hover:text-lime-600'}`}
                        onClick={() => onChangePage && onChangePage(section.id)}
                      >
                        {section.title}
                      </button>
                      <ul 
                        className={`list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-700 transition-all duration-500 ${loaded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                        style={{ transitionDelay: `${index * 150 + 200}ms` }}
                      >
                        {section.items.map((item, idx) => (
                          <li 
                            key={idx}
                            className="list-item-appear"
                            style={{ animationDelay: `${index * 150 + 300 + idx * 100}ms` }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      {section.subsections?.map((subsection, subIdx) => (
                        <React.Fragment key={`sub-${subIdx}`}>
                          <p 
                            className="text-sm sm:text-base font-bold mt-2 list-item-appear"
                            style={{ animationDelay: `${index * 150 + 500 + subIdx * 100}ms` }}
                          >
                            {subsection.title}
                          </p>
                          <ul 
                            className={`list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-700 transition-all duration-500 ${loaded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            style={{ transitionDelay: `${index * 150 + 600 + subIdx * 100}ms` }}
                          >
                            {subsection.items.map((item, itemIdx) => (
                              <li 
                                key={itemIdx}
                                className="list-item-appear"
                                style={{ animationDelay: `${index * 150 + 700 + subIdx * 100 + itemIdx * 50}ms` }}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Segundo grupo: columna derecha en escritorio, oculta en móvil */}
              {!isMobile && (
                <div className="space-y-5 relative md:pl-16 lg:pl-20">
                  {sections.slice(5).map((section, index) => (
                    <div 
                      key={section.id}
                      className={`flex items-start transition-all duration-500 ${loaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
                      style={{ transitionDelay: `${(index + 5) * 150}ms` }}
                      onMouseEnter={() => setHoveredItem(section.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div className="mr-3 flex-shrink-0">
                        <div 
                          className={`text-4xl sm:text-5xl lg:text-6xl font-black transition-all duration-300 ${hoveredItem === section.id ? 'text-lime-600 transform scale-110' : 'text-black'}`}
                        >
                          {section.number}
                        </div>
                      </div>
                      <div className="mt-2 w-full">
                        <button 
                          className={`text-base sm:text-xl lg:text-2xl font-bold mb-1 text-left transition-all duration-300 ${hoveredItem === section.id ? 'text-lime-600 transform translate-x-1' : 'hover:text-lime-600'}`}
                          onClick={() => onChangePage && onChangePage(section.id)}
                        >
                          {section.title}
                        </button>
                        <ul 
                          className={`list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-700 transition-all duration-500 ${loaded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                          style={{ transitionDelay: `${(index + 5) * 150 + 200}ms` }}
                        >
                          {section.items.map((item, idx) => (
                            <li 
                              key={idx}
                              className="list-item-appear"
                              style={{ animationDelay: `${(index + 5) * 150 + 300 + idx * 100}ms` }}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        {section.subsections?.map((subsection, subIdx) => (
                          <React.Fragment key={`sub-${subIdx}`}>
                            <p 
                              className="text-sm sm:text-base font-bold mt-2 list-item-appear"
                              style={{ animationDelay: `${(index + 5) * 150 + 500 + subIdx * 100}ms` }}
                            >
                              {subsection.title}
                            </p>
                            <ul 
                              className={`list-disc pl-6 space-y-1 text-sm sm:text-base text-gray-700 transition-all duration-500 ${loaded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                              style={{ transitionDelay: `${(index + 5) * 150 + 600 + subIdx * 100}ms` }}
                            >
                              {subsection.items.map((item, itemIdx) => (
                                <li 
                                  key={itemIdx}
                                  className="list-item-appear"
                                  style={{ animationDelay: `${(index + 5) * 150 + 700 + subIdx * 100 + itemIdx * 50}ms` }}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContentsPage;