import React, { useState, useEffect } from 'react';
import abeja from '../components/images/Abeja.png';
import videoBackground from '../components/images/toc.mp4';

const TableOfContentsPage = ({ onChangePage }) => {
  const [loaded, setLoaded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
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
      
      {/* Lado izquierdo - Video de fondo (más angosto) */}
      <div className="relative w-full md:w-1/3 h-full overflow-hidden">
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

      {/* Lado derecho - Tabla de contenidos (más ancho) */}
      <div className="w-full md:w-2/3 bg-white relative overflow-hidden">
        
        {/* Rectángulo verde en esquina inferior derecha con título */}
        <div 
          className={`absolute bottom-0 right-0 w-16 h-20 bg-lime-500 transition-transform duration-700 ${loaded ? 'translate-x-0' : 'translate-x-full'}`}
        >
        </div>
        
        {/* Título "TABLA DE CONTENIDOS" apegado al lado derecho, centrado un poco hacia abajo */}
        <div className="absolute bottom-1/3 right-0 flex items-center justify-center w-16">
          <div className={`text-xl font-black text-black tracking-tighter -rotate-90 transform whitespace-nowrap transition-transform duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            TABLA DE CONTENIDOS
          </div>
        </div>

        {/* Abeja animada - posicionada abajo a la derecha del área de contenidos (más grande) */}
        <div className={`absolute bottom-20 right-20 transition-all duration-1500 ${loaded ? 'opacity-90 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-180'} bee-float`}>
          <img 
            src={abeja} 
            alt="Abeja melífera" 
            className="object-contain w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
          />
        </div>
        
        {/* Texto "Apis Melífera" - posicionado debajo de la abeja */}
        <div className={`absolute bottom-6 right-20 text-right transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="apis-melifera-text text-xl md:text-2xl lg:text-3xl text-gray-800 font-light tracking-wide">
            Apis
          </h2>
          <h2 className="apis-melifera-text text-xl md:text-2xl lg:text-3xl text-gray-800 font-light tracking-wide -mt-1">
            Melífera
          </h2>
        </div>

        {/* Contenido de secciones */}
        <div className="h-full overflow-y-auto pr-16 p-6 pb-40">
          <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Grid de dos columnas para las secciones */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
              
              {/* Columna izquierda */}
              <div className="space-y-4">
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
                          className={`text-5xl lg:text-6xl font-black abril-fatface transition-all duration-300 cursor-pointer ${
                            hoveredItem === section.id ? 'text-lime-600 transform scale-110' : 'text-black hover:text-lime-600'
                          }`}
                        >
                          {section.number}
                        </div>
                      </div>
                      <div className="mt-1 w-full">
                        <h3 
                          className={`text-xl lg:text-2xl font-semibold open-sans mb-3 transition-all duration-300 cursor-pointer ${
                            hoveredItem === section.id ? 'text-lime-600 transform translate-x-1' : 'hover:text-lime-600'
                          }`}
                        >
                          {section.title}
                        </h3>
                        <ul 
                          className={`space-y-1 text-sm lg:text-base text-gray-700 transition-all duration-500 ${
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
              <div className="space-y-4">
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
                          className={`text-5xl lg:text-6xl font-black abril-fatface transition-all duration-300 cursor-pointer ${
                            hoveredItem === section.id ? 'text-lime-600 transform scale-110' : 'text-black hover:text-lime-600'
                          }`}
                        >
                          {section.number}
                        </div>
                      </div>
                      <div className="mt-1 w-full">
                        <h3 
                          className={`text-xl lg:text-2xl font-semibold open-sans mb-3 transition-all duration-300 cursor-pointer ${
                            hoveredItem === section.id ? 'text-lime-600 transform translate-x-1' : 'hover:text-lime-600'
                          }`}
                        >
                          {section.title}
                        </h3>
                        <ul 
                          className={`space-y-1 text-sm lg:text-base text-gray-700 transition-all duration-500 ${
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
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
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