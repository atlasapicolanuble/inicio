
// src/pages/BeeTemperature.jsx
import React, { useState, useEffect } from 'react';
import { Thermometer } from 'lucide-react';
import temperaturaBg from '../components/images/miel.mp4'; // Necesitarás este video

const BeeTemperature = () => {
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
        <source src={temperaturaBg} type="video/mp4" />
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
              <Thermometer size={24} className="text-white" />
            </div>
            
            <h1 className={`text-4xl font-bold text-white transform transition-transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms', transitionDuration: '700ms' }}>
              Temperatura
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Efectos del clima */}
            <div 
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-all ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4">Efectos del clima</h2>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Temperatura interna de la colmena: 35°C constante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Inactividad por debajo de 10°C</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Termorregulación colectiva</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Impacto del cambio climático</span>
                </li>
              </ul>
            </div>
            
            {/* Datos de sensores */}
            <div 
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-6 transform transition-all ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4">Datos de sensores y vuelo</h2>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Monitoreo digital de temperatura</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Horas óptimas de vuelo: 12°C a 38°C</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Correlación temperatura-actividad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Tecnología IoT en apiarios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeeTemperature;