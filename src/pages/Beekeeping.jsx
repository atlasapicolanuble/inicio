
// src/pages/Beekeeping.jsx
import React, { useState, useEffect } from 'react';
import { Boxes } from 'lucide-react';
import apiculturaBg from '../components/images/miel.mp4'; // Necesitarás este video

const Apiculture = () => {
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
        <source src={apiculturaBg} type="video/mp4" />
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
              <Boxes size={24} className="text-white" />
            </div>
            
            <h1 className={`text-4xl font-bold text-white transform transition-transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms', transitionDuration: '700ms' }}>
              Apicultura
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Historia y desarrollo */}
            <div 
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-all ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4">Historia y desarrollo</h2>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Orígenes en el antiguo Egipto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Evolución de las colmenas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Hitos científicos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Apicultura moderna</span>
                </li>
              </ul>
            </div>
            
            {/* Apicultores en Chile */}
            <div 
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-all ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4">Apicultores en Chile</h2>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>10,200 apicultores a nivel nacional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>1,400 apicultores en Ñuble</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Crecimiento sostenido del 5% anual</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Exportación de productos apícolas</span>
                </li>
              </ul>
            </div>
            
            {/* Apicultura Natural Regenerativa */}
            <div 
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-all ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4">Apicultura Natural Regenerativa</h2>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Respeto al ciclo natural de las abejas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Mínima intervención humana</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Mejora de biodiversidad local</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Calendario de manejo estacional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apiculture;