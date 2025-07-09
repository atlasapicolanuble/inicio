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
    <>
      {/* Vista mobile - dos secciones de pantalla completa con scroll */}
      <div className="md:hidden overflow-y-auto">
        {/* Primera sección - Contenido de texto (pantalla completa) */}
        <div className="min-h-screen h-screen w-full bg-white flex items-center justify-center px-6 py-8 relative flex-shrink-0">
          <div className="flex flex-col items-center text-center max-w-lg w-full">
            {/* Título principal con animación */}
            <h1 
              className={`text-gray-800 mb-12 tracking-wide font-bold transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
              }`}
              style={{ 
                fontSize: 'clamp(3rem, 12vw, 5rem)',
                transitionDelay: '200ms',
                lineHeight: '1.1'
              }}
            >
              ANR
            </h1>
            
            {/* Lista de puntos con animación - 2 elementos */}
            <div className="mb-12 w-full space-y-8">
              <div 
                className={`flex items-center justify-center transform transition-all duration-800 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className={`w-4 h-4 bg-gray-800 rounded-full mr-5 flex-shrink-0 transform transition-all duration-500 ease-out ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: '800ms' }}></div>
                <span className="text-gray-800 font-medium text-center" style={{ fontSize: 'clamp(1.4rem, 6vw, 2rem)' }}>
                  Registro y documentación
                </span>
              </div>
              
              <div 
                className={`flex items-center justify-center transform transition-all duration-800 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '750ms' }}
              >
                <div className={`w-4 h-4 bg-gray-800 rounded-full mr-5 flex-shrink-0 transform transition-all duration-500 ease-out ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: '950ms' }}></div>
                <span className="text-gray-800 font-medium text-center" style={{ fontSize: 'clamp(1.4rem, 6vw, 2rem)' }}>
                  Normativas sanitarias
                </span>
              </div>
            </div>
            
            {/* Marco decorativo */}
            <div 
              className={`relative mb-10 transform transition-all duration-1000 ease-out ${
                isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-3'
              }`}
              style={{ 
                transitionDelay: '1200ms',
                width: 'min(80vw, 380px)',
                height: 'min(50vw, 230px)'
              }}
            >
              {/* Marco como imagen de fondo */}
              <div 
                className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-contain"
                style={{ 
                  backgroundImage: `url(${marco})`
                }}
              ></div>
              
              {/* Contenido de la cita */}
              <div className="relative bg-transparent p-6 flex flex-col justify-center items-center h-full">
                
              </div>
            </div>
            
            {/* Autor */}
            <div 
              className={`transform transition-all duration-800 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1500ms' }}
            >
              <p className="text-gray-800 font-semibold text-center" style={{ fontSize: 'clamp(1.2rem, 5vw, 1.6rem)' }}>
                Marcelino Claret Merino Dr.
              </p>
            </div>
          </div>
          
          {/* Indicador de scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <span className="text-gray-600 text-sm mb-2">Desliza para ver el video</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Segunda sección - Video (pantalla completa) */}
        <div className="min-h-screen h-screen w-full relative overflow-hidden flex-shrink-0">
          <video 
            src={reproduccion}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            style={{ 
              filter: 'contrast(1.05) brightness(1.02)',
              objectPosition: 'center'
            }}
          />
          
          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      {/* Vista desktop - layout original */}
      <div className="hidden md:flex flex-col md:flex-row h-full w-full bg-white overflow-hidden">
        {/* Sección izquierda - Contenido de texto */}
        <div className="w-full md:w-2/5 flex items-start justify-start pt-0 md:pt-2 lg:pt-3 xl:pt-4 pb-2 px-4 md:px-0 order-1 md:order-1 relative">
          {/* Contenido ajustado hacia la izquierda y arriba */}
          <div className="flex items-start justify-start w-full md:pl-16 lg:pl-20 xl:pl-24">
            <div className="flex-1 max-w-none flex flex-col">
              {/* Título principal con animación de slide desde arriba - FUENTE AJUSTADA */}
              <h1 
                className={`text-gray-800 mb-1 sm:mb-2 md:mb-2 lg:mb-3 tracking-wide font-bold text-left whitespace-nowrap transform transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
                }`}
                style={{ 
                  fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
                  transitionDelay: '200ms'
                }}
              >
                ANR
              </h1>
              
              {/* Lista de puntos con animación escalonada desde la izquierda - FUENTES AJUSTADAS */}
              <div className="mb-1 sm:mb-2 md:mb-2 w-full">
                <div 
                  className={`flex items-center mb-2 sm:mb-3 md:mb-4 transform transition-all duration-800 ease-out ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-full mr-3 sm:mr-5 flex-shrink-0 transform transition-all duration-500 ease-out ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`} style={{ transitionDelay: '800ms' }}></div>
                  <span className="text-gray-800 font-medium" style={{ fontSize: 'clamp(1.1rem, 3.2vw, 1.9rem)' }}>
                    Registro y documentación
                  </span>
                </div>
                <div 
                  className={`flex items-center transform transition-all duration-800 ease-out ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                  }`}
                  style={{ transitionDelay: '750ms' }}
                >
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 bg-gray-800 rounded-full mr-3 sm:mr-5 flex-shrink-0 transform transition-all duration-500 ease-out ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`} style={{ transitionDelay: '950ms' }}></div>
                  <span className="text-gray-800 font-medium" style={{ fontSize: 'clamp(1.1rem, 3.2vw, 1.9rem)' }}>
                    Normativas sanitarias
                  </span>
                </div>
              </div>
              
              {/* Marco decorativo con animación de zoom y fade */}
              <div 
                className={`relative mb-1 sm:mb-2 md:mb-2 transform transition-all duration-1000 ease-out ${
                  isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-3'
                }`}
                style={{ 
                  transitionDelay: '1200ms',
                  width: 'clamp(250px, 30vw, 380px)',
                  height: 'clamp(150px, 18vw, 230px)'
                }}
              >
                {/* Marco como imagen de fondo */}
                <div 
                  className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-contain"
                  style={{ 
                    backgroundImage: `url(${marco})`
                  }}
                ></div>
                
                {/* Contenido de la cita (vacío como en el original) */}
                <div className="relative bg-transparent p-4 sm:p-6 flex flex-col justify-center items-center h-full">
                  
                </div>
              </div>
              
              {/* Autor fuera del marco con animación de fade desde abajo - FUENTE AJUSTADA */}
              <div 
                className={`transform transition-all duration-800 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: '1500ms',
                  width: 'clamp(250px, 30vw, 380px)'
                }}
              >
                <p className="text-gray-800 font-semibold text-center" style={{ fontSize: 'clamp(1rem, 2.3vw, 1.5rem)' }}>
                  Marcelino Claret Merino Dr.
                </p>
              </div>
            </div>
          </div>
          
          {/* Texto "SECCIÓN 7" con animación del cuadrado y texto rotado */}
          <div className="absolute left-0 bottom-0">
            <div 
              className={`w-5 h-5 md:w-7 md:h-7 bg-green-500 transform transition-all duration-700 ease-out ${
                isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
              }`}
              style={{ transitionDelay: '400ms' }}
            ></div>
            <div 
              className={`absolute left-6 md:left-9 bottom-6 md:bottom-9 transform transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <span 
                className="text-gray-800 font-black tracking-wider text-lg md:text-xl whitespace-nowrap" 
                style={{ 
                  transform: 'rotate(270deg)', 
                  transformOrigin: 'left bottom', 
                  display: 'inline-block' 
                }}
              >
                SECCIÓN 7
              </span>
            </div>
          </div>
        </div>
        
        {/* Sección derecha - Video con animación de slide desde la derecha */}
        <div 
          className={`w-full md:w-3/5 relative overflow-hidden flex justify-center md:justify-end order-2 md:order-2 transform transition-all duration-1200 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <video 
            src={reproduccion}
            autoPlay
            loop
            muted
            className={`w-full md:w-3/5 h-48 md:h-full object-cover transform transition-all duration-1500 ease-out ${
              isVisible ? 'scale-100' : 'scale-110'
            }`}
            style={{ 
              transitionDelay: '500ms',
              filter: 'contrast(1.05) brightness(1.02)',
              objectPosition: 'center'
            }}
          />
          
          {/* Overlay sutil con animación - solo en el lado izquierdo */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-white/15 to-transparent transition-opacity duration-1000 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1000ms' }}
          ></div>
        </div>
      </div>
    </>
  );
}