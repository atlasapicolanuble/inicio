import React, { useState, useEffect } from 'react';
import roca from '../components/images/rupestre.png';
import marco from '../components/images/marco.png';

export default function HistoriaAbeja() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activa las animaciones después de que el componente se monte
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-full w-full bg-white overflow-hidden">
      {/* Sección izquierda - Contenido de texto */}
      <div className="w-full md:w-2/5 flex items-center md:items-start justify-center px-4 pt-8 md:pt-4 pb-8 md:pb-2 relative min-h-screen md:min-h-full">
        {/* Contenido centrado */}
        <div className="flex items-center md:items-start justify-center w-full">
          <div className="flex-1 max-w-lg flex flex-col items-center md:items-start text-center md:text-left">
            {/* Título principal con animación de slide desde arriba */}
            <h1 
              className={`text-gray-800 mb-6 md:mb-3 tracking-wide font-bold text-center md:text-left pl-0 md:pl-20 lg:pl-40 transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
              }`}
              style={{ 
                fontSize: 'clamp(2.5rem, 10vw, 4.2rem)',
                transitionDelay: '200ms'
              }}
            >
              HISTORIA
            </h1>
            
            {/* Lista de puntos con animación escalonada desde la izquierda */}
            <div className="mb-8 md:mb-4 w-full pl-0 md:pl-20 lg:pl-40">
              <div 
                className={`flex items-center justify-center md:justify-start mb-4 md:mb-2 transform transition-all duration-800 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className={`w-4 h-4 bg-gray-800 rounded-full mr-4 md:mr-5 transform transition-all duration-500 ease-out ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: '800ms' }}></div>
                <span className="text-gray-800 font-medium" style={{ fontSize: 'clamp(1.2rem, 5vw, 1.9rem)' }}>
                  Orígenes de las abejas
                </span>
              </div>
              <div 
                className={`flex items-center justify-center md:justify-start transform transition-all duration-800 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                <div className={`w-4 h-4 bg-gray-800 rounded-full mr-4 md:mr-5 transform transition-all duration-500 ease-out ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: '1100ms' }}></div>
                <span className="text-gray-800 font-medium" style={{ fontSize: 'clamp(1.2rem, 5vw, 1.9rem)' }}>
                  Evolución
                </span>
              </div>
            </div>
            
            {/* Marco decorativo con animación de zoom y fade */}
            <div 
              className={`relative w-full max-w-sm md:max-w-md lg:w-96 h-48 md:h-56 mb-6 md:mb-3 ml-0 md:ml-20 lg:ml-40 transform transition-all duration-1000 ease-out ${
                isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-3'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              {/* Marco como imagen de fondo */}
              <div 
                className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-contain"
                style={{ 
                  backgroundImage: `url(${marco})`
                }}
              ></div>
              
              {/* Contenido de la cita (vacío como en el original) */}
              <div className="relative bg-transparent p-6 flex flex-col justify-center items-center h-full">
                
              </div>
            </div>
            
            {/* Autor fuera del marco con animación de fade desde abajo */}
            <div 
              className={`ml-0 md:ml-20 lg:ml-40 w-full max-w-sm md:max-w-md lg:w-96 transform transition-all duration-800 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1500ms' }}
            >
              <p className="text-gray-800 font-semibold text-center" style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)' }}>
                Marcelino Claret Merino Dr.
              </p>
            </div>
          </div>
        </div>
        
        {/* Texto "SECCIÓN I" con animación del cuadrado y texto rotado */}
        <div className="absolute left-2 sm:left-4 bottom-2 sm:bottom-4 md:left-0 md:bottom-0">
          <div 
            className={`w-7 h-7 bg-green-500 transform transition-all duration-700 ease-out ${
              isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
            }`}
            style={{ transitionDelay: '400ms' }}
          ></div>
          <div 
            className={`absolute left-9 bottom-9 transform transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <span 
              className="text-gray-800 font-black tracking-wider text-xl whitespace-nowrap" 
              style={{ 
                transform: 'rotate(270deg)', 
                transformOrigin: 'left bottom', 
                display: 'inline-block' 
              }}
            >
              SECCIÓN 1
            </span>
          </div>
        </div>
      </div>
      
      {/* Sección derecha - Imagen con animación de slide desde la derecha */}
      <div 
        className={`w-full md:w-3/5 relative overflow-hidden min-h-[50vh] md:min-h-full transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-x-0 md:translate-x-0 translate-y-0 opacity-100' : 'translate-x-0 md:translate-x-20 translate-y-10 md:translate-y-0 opacity-0'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        <img 
          src={roca} 
          alt="Arte rupestre en roca" 
          className={`w-full h-full object-cover transform transition-all duration-1500 ease-out ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
          style={{ transitionDelay: '500ms' }}
        />
        
        {/* Overlay sutil con animación */}
        <div 
          className={`absolute inset-0 bg-gradient-to-l md:bg-gradient-to-l bg-gradient-to-t from-transparent to-white/20 transition-opacity duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1000ms' }}
        ></div>
      </div>
    </div>
  );
}