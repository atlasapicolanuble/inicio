import React, { useState, useEffect } from 'react';
import reproduccion from '../components/images/reproduccion.mov';
import marco from '../components/images/marco.png';

export default function BotanicaMelifera() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activa las animaciones después de que el componente se monte
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-full w-full bg-white overflow-hidden">
      {/* Sección izquierda - Video con animación de slide desde la izquierda */}
      <div 
        className={`w-3/5 relative overflow-hidden flex justify-start transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        <video 
          src={reproduccion}
          autoPlay
          loop
          muted
          className={`h-full transform transition-all duration-1500 ease-out ${
            isVisible ? 'scale-100' : 'scale-110'
          }`}
          style={{ 
            transitionDelay: '500ms',
            filter: 'contrast(1.05) brightness(1.02)',
            width: '60%',
            objectFit: 'cover',
            objectPosition: 'left'
          }}
        />
        
        {/* Overlay sutil con animación - solo en el lado derecho */}
        <div 
          className={`absolute inset-0 bg-gradient-to-l from-white/15 to-transparent transition-opacity duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1000ms' }}
        ></div>
      </div>
      
      {/* Sección derecha - Contenido de texto */}
      <div className="w-2/5 flex items-center justify-start pt-4 pb-2 relative" style={{ marginLeft: '-120px' }}>
        {/* Contenido pegado completamente a la izquierda */}
        <div className="flex items-center justify-start w-full -ml-16">
          <div className="flex-1 max-w-lg flex flex-col">
            {/* Título principal con animación de slide desde arriba */}
            <h1 
              className={`text-gray-800 mb-3 tracking-wide font-bold text-center -ml-12 whitespace-nowrap transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
              }`}
              style={{ 
                fontSize: 'clamp(2rem, 4.2vw, 3.2rem)',
                transitionDelay: '200ms'
              }}
            >
              APICULTURA
            </h1>
            
            {/* Lista de puntos con animación escalonada desde la derecha */}
            <div className="mb-4 w-full -ml-4">
              <div 
                className={`flex items-center mb-2 transform transition-all duration-800 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className={`w-4 h-4 bg-gray-800 rounded-full mr-5 flex-shrink-0 transform transition-all duration-500 ease-out ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: '800ms' }}></div>
                <span className="text-gray-800 font-medium whitespace-nowrap" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
                  Plantas que atraen a las abejas
                </span>
              </div>
              <div 
                className={`flex items-center mb-2 transform transition-all duration-800 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '750ms' }}
              >
                <div className={`w-4 h-4 bg-gray-800 rounded-full mr-5 flex-shrink-0 transform transition-all duration-500 ease-out ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: '950ms' }}></div>
                <span className="text-gray-800 font-medium whitespace-nowrap" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
                  Descripción de sitios ecológicos
                </span>
              </div>
              <div 
                className={`flex items-center transform transition-all duration-800 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                <div className={`w-4 h-4 bg-gray-800 rounded-full mr-5 flex-shrink-0 transform transition-all duration-500 ease-out ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: '1100ms' }}></div>
                <span className="text-gray-800 font-medium" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
                  Calendario de floraciones por cada mes en tres sitios ecológicos
                </span>
              </div>
            </div>
            
            {/* Marco decorativo con animación de zoom y fade */}
            <div 
              className={`relative w-80 h-48 mb-3 -ml-4 transform transition-all duration-1000 ease-out ${
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
              className={`w-80 -ml-4 transform transition-all duration-800 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1500ms' }}
            >
              <p className="text-gray-800 font-semibold text-center" style={{ fontSize: 'clamp(1.1rem, 2.1vw, 1.4rem)' }}>
                Marcelino Claret Merino Dr.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Texto "SECCIÓN 4" independiente del contenedor - posición absoluta desde el viewport */}
      <div className="fixed right-0 bottom-0" style={{ zIndex: 1000 }}>
        <div 
          className={`w-7 h-7 bg-green-500 transform transition-all duration-700 ease-out ${
            isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
          }`}
          style={{ transitionDelay: '400ms' }}
        ></div>
        <div 
          className={`absolute bottom-9 transform transition-all duration-800 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
          style={{ 
            right: '-110px',
            transitionDelay: '700ms' 
          }}
        >
          <span 
            className="text-gray-800 font-black tracking-wider text-xl whitespace-nowrap" 
            style={{ 
              transform: 'rotate(270deg)', 
              transformOrigin: 'left bottom', 
              display: 'inline-block' 
            }}
          >
            SECCIÓN 6
          </span>
        </div>
      </div>
    </div>
  );
}