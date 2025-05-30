import React, { useState, useEffect } from 'react';
import meliferaData from './MeliferaData';

/**
 * Componente principal para mostrar información de plantas melíferas
 * Incluye imagen a la izquierda y tabla mejorada con calendario de floración a la derecha
 */
const MeliferaPage = ({ imageSrc = "https://via.placeholder.com/400x300", plantIndex = 0 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredMonth, setHoveredMonth] = useState(null);
  
  // Obtener datos de la planta según el índice (plantIndex corresponde al número de página - 1)
  const plantData = meliferaData[plantIndex] || meliferaData[0];
  
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Función para obtener el color según el porcentaje de floración
  const getFlowerColor = (percentage) => {
    if (percentage === 0) return '#f3f4f6'; // Gris claro
    if (percentage <= 20) return '#fef3c7'; // Amarillo muy claro
    if (percentage <= 40) return '#fde047'; // Amarillo claro
    if (percentage <= 60) return '#facc15'; // Amarillo
    if (percentage <= 80) return '#eab308'; // Amarillo oscuro
    return '#ca8a04'; // Amarillo muy oscuro/dorado
  };

  return (
    <div 
      className="h-full w-full overflow-auto"
      style={{ 
        background: 'linear-gradient(to bottom right, #f0fdf4, #dcfce7)'
      }}
    >
      <div 
        className="max-w-7xl mx-auto py-4 px-4 md:py-6 md:px-8 h-full"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-out'
        }}
      >
        {/* Contenedor principal con imagen a la izquierda y tabla a la derecha */}
        <div className="flex flex-col lg:flex-row gap-4 h-full">
          
          {/* Panel izquierdo - Imagen (45% del ancho) */}
          <div className="w-full lg:w-[45%] h-full flex items-center">
            <div 
              className="bg-white rounded-lg p-4 shadow-lg border border-green-200 relative overflow-hidden h-full w-full flex items-center justify-center"
              style={{
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                maxHeight: '100%'
              }}
            >
              {/* Fondo decorativo */}
              <div 
                className="absolute inset-0 rounded-lg opacity-20"
                style={{
                  background: 'radial-gradient(circle at 30% 70%, rgba(52, 211, 153, 0.2), transparent 50%), radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.2), transparent 50%)'
                }}
              />
              
              <img 
                src={imageSrc} 
                alt={plantData.nombreComun} 
                className="max-w-full max-h-full object-contain relative z-10 rounded-lg"
              />
              
              {/* Etiquetas decorativas */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold text-white bg-green-600 shadow-lg">
                {plantData.nombreComun}
              </div>
              
              <div className="absolute top-3 left-3 text-2xl">🌸</div>
              <div className="absolute bottom-3 right-3 text-2xl">🐝</div>
            </div>
          </div>
          
          {/* Panel derecho - Información compacta (55% del ancho) */}
          <div className="w-full lg:w-[55%] h-full flex flex-col justify-center">
            <div className="space-y-3 h-full flex flex-col justify-center max-h-full overflow-hidden">
              
              {/* Tarjeta de clasificación taxonómica compacta */}
              <div className="bg-white rounded-lg shadow-md p-3 border border-green-100">
                <h4 className="text-base font-bold text-green-800 mb-3 flex items-center">
                  <span className="mr-2 text-lg">🔬</span>
                  Clasificación Taxonómica
                </h4>
                
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'Orden', value: plantData.orden, color: 'blue' },
                    { label: 'Familia', value: plantData.familia, color: 'green' },
                    { label: 'Género', value: plantData.genero, color: 'purple' },
                    { label: 'Especie', value: plantData.especie, color: 'indigo' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-2 border-l-4 hover:shadow-sm transition-all duration-200"
                      style={{
                        borderLeftColor: item.color === 'blue' ? '#3b82f6' : 
                                        item.color === 'green' ? '#10b981' : 
                                        item.color === 'purple' ? '#8b5cf6' : '#6366f1'
                      }}
                    >
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-sm text-gray-900 font-medium block">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tarjeta de características compacta */}
              <div className="bg-white rounded-lg shadow-md p-3 border border-green-100">
                <h4 className="text-base font-bold text-green-800 mb-3 flex items-center">
                  <span className="mr-2 text-lg">📋</span>
                  Características Generales
                </h4>
                
                <div className="space-y-2">
                  {[
                    { label: 'Nombre Común', value: plantData.nombreComun, icon: '📝' },
                    { label: 'Sinónimo Científico', value: plantData.sinonimo, icon: '🔄' },
                    { label: 'Forma de Crecimiento', value: plantData.formaCrecimiento, icon: '🌱' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-2 border-l-4 border-green-300"
                    >
                      <div className="flex items-start">
                        <div className="text-lg mr-2 mt-1">{item.icon}</div>
                        <div className="flex-1">
                          <span className="text-xs font-bold text-gray-700 uppercase tracking-wide block mb-1">
                            {item.label}
                          </span>
                          <span className="text-sm text-gray-900 font-medium">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Calendario de floración compacto */}
              <div className="bg-white rounded-lg shadow-md p-3 border border-green-100 flex-1">
                <h4 className="text-base font-bold text-green-800 mb-3 flex items-center">
                  <span className="mr-2 text-lg">📅</span>
                  Calendario de Floración
                </h4>
                
                <div className="space-y-2">
                  {/* Calendario visual compacto */}
                  <div className="grid grid-cols-12 gap-1 mb-2">
                    {meses.map((mes, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xs font-semibold text-gray-600 mb-1">
                          {mes}
                        </div>
                        <div 
                          className="h-8 rounded cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-sm relative border border-gray-200"
                          style={{ 
                            backgroundColor: getFlowerColor(plantData.floracion[index])
                          }}
                          onMouseEnter={() => setHoveredMonth(index)}
                          onMouseLeave={() => setHoveredMonth(null)}
                        >
                          {/* Tooltip compacto */}
                          {hoveredMonth === index && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20 shadow-lg">
                              <div className="text-center">
                                <div className="font-semibold">{mes}</div>
                                <div>{plantData.floracion[index]}%</div>
                              </div>
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-2 border-transparent border-t-gray-800"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Leyenda compacta */}
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="text-xs font-semibold text-gray-700 mb-2 text-center">Intensidad de Floración</div>
                    <div className="flex flex-wrap justify-center gap-1 text-xs">
                      {[
                        { color: '#f3f4f6', label: '0%' },
                        { color: '#fef3c7', label: '1-20%' },
                        { color: '#fde047', label: '21-40%' },
                        { color: '#facc15', label: '41-60%' },
                        { color: '#eab308', label: '61-80%' },
                        { color: '#ca8a04', label: '81-100%' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded mr-1 border border-gray-300" 
                            style={{backgroundColor: item.color}}
                          ></div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Descripción del significado melífero compacta */}
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-3 border-l-4 border-yellow-400">
                    <div className="flex items-start">
                      <span className="text-lg mr-2 mt-1">🍯</span>
                      <div>
                        <h5 className="font-bold text-yellow-800 mb-1 text-sm">Importancia Melífera</h5>
                        <p className="text-yellow-900 text-xs leading-relaxed">{plantData.significado}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicador de página compacto */}
        <div className="text-center mt-2">
          <span className="inline-block bg-green-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            Especie {plantData.id} de 17 - {plantData.nombreComun}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MeliferaPage;