
// src/pages/MelliferousBotany.jsx
import React, { useState, useEffect } from 'react';
import { Flower2 } from 'lucide-react';
import botanicaBg from '../components/images/miel.mp4'; // Necesitarás este video

const MeliferaBotany = () => {
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
        <source src={botanicaBg} type="video/mp4" />
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
              <Flower2 size={24} className="text-white" />
            </div>
            
            <h1 className={`text-4xl font-bold text-white transform transition-transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms', transitionDuration: '700ms' }}>
              Botánica Melífera
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plantas que atraen a las abejas */}
            <div 
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-all ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4">Plantas que atraen a las abejas</h2>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Lavanda y romero</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Árboles frutales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Girasoles y caléndulas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Plantas silvestres nativas</span>
                </li>
              </ul>
            </div>
            
            {/* Descripción de sitios ecológicos */}
            <div 
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-all ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4">Sitios ecológicos</h2>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Bosque nativo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Precordillera</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Valle central</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Zona costera</span>
                </li>
              </ul>
            </div>
            
            {/* Calendarios de floraciones */}
            <div 
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-all ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4">Calendarios de floraciones</h2>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Primavera: septiembre a noviembre</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Verano: diciembre a febrero</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Otoño: marzo a mayo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Invierno: junio a agosto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeliferaBotany;