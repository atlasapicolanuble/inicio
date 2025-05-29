// src/pages/BeeReproduction.jsx
import React, { useState, useEffect } from 'react';
import { LifeBuoy } from 'lucide-react';
import reproduccionBg from '../components/images/miel.mp4'; // Necesitarás este video

const BeeReproduction = () => {
  const [loaded, setLoaded] = useState(false);
  
  // Simular tiempo de carga para animaciones
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="relative w-full min-h-[calc(100vh-88px)] flex flex-col">
      {/* Video de fondo a pantalla completa */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={reproduccionBg} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      
      {/* Overlay oscuro para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Contenido superpuesto */}
      <div className="relative z-20 flex-grow w-full overflow-y-auto pb-6">
        <div className="max-w-4xl mx-auto px-6 py-8 text-white">
          {/* Encabezado con icono */}
          <div className="flex items-center mb-8">
            <div className={`w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center mr-4 transform transition-transform ${loaded ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: '100ms' }}>
              <LifeBuoy size={24} className="text-white" />
            </div>
            
            <h1 className={`text-4xl font-bold text-white transform transition-transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms', transitionDuration: '700ms' }}>
              Reproducción
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ciclo de vida */}
            <div 
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-all ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4">Ciclo de vida</h2>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Huevo: 3 días</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Larva: 5-6 días</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Pupa: 12 días (obreras)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Adulto: 5-7 semanas (obreras verano)</span>
                </li>
              </ul>
            </div>
            
            {/* Mecanismos de reproducción */}
            <div 
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-all ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4">Mecanismos de reproducción</h2>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Vuelo nupcial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Poliandria (múltiples apareamientos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Enjambrazón (reproducción de colonias)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Desarrollo de nuevas reinas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeeReproduction;