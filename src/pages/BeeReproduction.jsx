import React, { useState, useEffect } from 'react';
import reproducion from '../components/images/reproduccion.mov';
import marco from '../components/images/marco.png';

export default function BeeReproduction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activa las animaciones después de que el componente se monte
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-full w-full bg-white overflow-hidden">
      {/* Sección izquierda - Contenido de texto */}
      <div className="w-2/5 flex items-start justify-center px-4 pt-4 pb-2 relative">
        {/* Contenido centrado */}
        <div className="flex items-start justify-center w-full">
          <div className="flex-1 max-w-lg flex flex-col">
            {/* Título principal con animación de slide desde arriba */}
            <h1 
              className={`text-gray-800 mb-3 tracking-wide font-bold text-left pl-40 transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
              }`}
              style={{ 
                fontSize: 'clamp(3rem, 5.2vw, 4.2rem)',
                transitionDelay: '200ms'
              }}
            >
              REPRODUCCIÓN
            </h1>
            
            {/* Lista de puntos con animación escalonada desde la izquierda */}
            <div className="mb-4 w-full pl-40">
              <div 
                className={`flex items-center mb-2 transform transition-all duration-800 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className={`w-4 h-4 bg-gray-800 rounded-full mr-5 transform transition-all duration-500 ease-out ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: '800ms' }}></div>
                <span className="text-gray-800 font-medium" style={{ fontSize: 'clamp(1.5rem, 3.2vw, 1.9rem)' }}>
                  Ciclo de vida
                </span>
              </div>
              <div 
                className={`flex items-center transform transition-all duration-800 ease-out ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                <div className={`w-4 h-4 bg-gray-800 rounded-full mr-5 flex-shrink-0 transform transition-all duration-500 ease-out ${
                  isVisible ? 'scale-100' : 'scale-0'
                }`} style={{ transitionDelay: '1100ms' }}></div>
                <span className="text-gray-800 font-medium whitespace-nowrap" style={{ fontSize: 'clamp(1.5rem, 3.2vw, 1.9rem)' }}>
                  Mecanismos de reproduccion
                </span>
              </div>
            </div>
            
            {/* Marco decorativo con animación de zoom y fade */}
            <div 
              className={`relative w-96 h-56 mb-3 ml-40 transform transition-all duration-1000 ease-out ${
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
              className={`ml-40 w-96 transform transition-all duration-800 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: '1500ms' }}
            >
              <p className="text-gray-800 font-semibold text-center" style={{ fontSize: 'clamp(1.2rem, 2.3vw, 1.5rem)' }}>
                Marcelino Claret Merino Dr.
              </p>
            </div>
          </div>
        </div>
        
        {/* Texto "SECCIÓN 3" con animación del cuadrado y texto rotado */}
        <div className="absolute left-0 bottom-0">
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
              SECCIÓN 3
            </span>
          </div>
        </div>
      </div>
      
      {/* Sección derecha - Video con animación de slide desde la derecha */}
      <div 
        className={`w-3/5 relative overflow-hidden flex justify-end transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        <video 
          src={reproducion}
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
            objectPosition: 'right'
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
  );
}