import React, { useState, useEffect } from 'react';

/**
 * Componente principal para mostrar información de plantas melíferas
 * Versión simplificada sin dependencias externas de CSS para evitar errores
 */
const MeliferaPage = ({ imageSrc, plantData }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Activar animaciones inmediatamente
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className="h-full w-full overflow-auto"
      style={{ 
        background: 'linear-gradient(to bottom right, #f0fdf4, #dcfce7)'
      }}
    >
      {/* Contenedor principal con animación de entrada */}
      <div 
        className="max-w-5xl mx-auto py-2 px-3 md:py-4 md:px-6"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-out'
        }}
      >
        {/* Título principal */}
        <div className="text-center mb-3">
          <h2 className="text-2xl font-bold text-green-800 inline-block relative">
            {plantData.nombreComun}
          </h2>
          <h3 className="text-lg italic text-green-700 mt-1">
            <em>{plantData.genero} {plantData.especie}</em>
          </h3>
        </div>
        
        {/* Contenedor flexible para organizar imagen y datos */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Panel izquierdo - Imagen */}
          <div className="w-full md:w-5/12">
            <div 
              className="bg-white rounded-lg p-2 shadow-lg border border-green-200 flex items-center justify-center relative"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundColor: 'rgba(240, 255, 244, 0.5)'
                }}
              ></div>
              <img 
                src={imageSrc} 
                alt={plantData.nombreComun || "Planta melífera"} 
                className="max-w-full object-contain relative z-10"
                style={{ maxHeight: '350px' }}
                onLoad={() => setIsLoaded(true)}
              />
              
              {/* Etiqueta decorativa */}
              <div 
                className="absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium shadow-md"
                style={{
                  backgroundColor: '#10b981',
                  color: 'white'
                }}
              >
                {plantData.nombreComun}
              </div>
              
              {/* Decoración con iconos */}
              <div className="absolute top-3 left-3 text-xl">🌸</div>
              <div className="absolute bottom-3 right-3 text-xl">🐝</div>
            </div>
          </div>
          
          {/* Panel derecho - Información de la planta en tarjetas */}
          <div className="w-full md:w-7/12 flex flex-col gap-3">
            {/* Tarjeta de información taxonómica */}
            <div 
              className="bg-white rounded-lg shadow-md p-3"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <h4 className="text-md font-semibold text-green-800 mb-2 border-b border-green-200 pb-1">
                Clasificación Taxonómica
              </h4>
              
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Orden', value: plantData.orden, icon: '🔍' },
                  { label: 'Familia', value: plantData.familia, icon: '🌿' },
                  { label: 'Género', value: plantData.genero, icon: '🧬' },
                  { label: 'Especie', value: plantData.especie, icon: '🔬' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-green-50 rounded-md p-2 border-l-2 border-green-500 hover:bg-green-100 transition-colors"
                  >
                    <div className="flex items-center mb-1">
                      <span className="mr-1">{item.icon}</span>
                      <span className="text-xs font-semibold text-green-800">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm text-gray-800 block">
                      {item.value || "N/A"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tarjeta de nombres */}
            <div 
              className="bg-white rounded-lg shadow-md p-3"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
            >
              <h4 className="text-md font-semibold text-green-800 mb-2 border-b border-green-200 pb-1">
                Nombres y Características
              </h4>
              
              <div className="space-y-2">
                {[
                  { label: 'Nombre Común', value: plantData.nombreComun, icon: '📝' },
                  { label: 'Sinónimo', value: plantData.sinonimo, icon: '🔄' },
                  { label: 'Forma de crecimiento', value: plantData.formaCrecimiento, icon: '🌱' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-green-50 rounded-md p-2 border-l-2 border-green-400 hover:bg-green-100 transition-colors"
                  >
                    <div className="text-lg mr-2">{item.icon}</div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-green-800 block">
                        {item.label}
                      </span>
                      <span className="text-sm text-gray-800">
                        {item.value || "N/A"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Importancia melífera */}
            {plantData.significado && (
              <div 
                className="bg-white rounded-lg shadow-md p-3"
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <h4 className="text-md font-semibold text-green-800 mb-2 border-b border-green-200 pb-1 flex items-center">
                  <span className="mr-2">🍯</span>
                  Importancia para las Abejas
                </h4>
                <div className="bg-yellow-50 rounded-md p-3 border-l-2 border-yellow-400">
                  <p className="text-sm text-gray-700">{plantData.significado}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Indicador de número de página */}
        <div className="text-center mt-3 text-xs text-gray-500">
          <span 
            className="px-3 py-1 rounded-full inline-block shadow-sm"
            style={{
              backgroundColor: '#166534',
              color: 'white'
            }}
          >
            Especie {plantData.id} de 17
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeliferaPage;