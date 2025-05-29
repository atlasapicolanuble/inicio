import React from 'react';

// Componente base para todas las páginas del Atlas - versión compacta
const PageBase = ({ title, emoji, bgColorClass, textColorClass, children }) => {
  return (
    <div className="relative min-h-[calc(100vh-120px)] w-full">
      {/* Fondo con patrón de panal de abejas - ajustado para considerar el header y footer */}
      <div 
        className="absolute inset-0 z-0 opacity-15" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'56\' height=\'100\' viewBox=\'0 0 56 100\'%3E%3Cpath d=\'M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100\' fill=\'none\' stroke=\'%23F59E0B\' stroke-width=\'2\'/%3E%3Cpath d=\'M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34\' fill=\'none\' stroke=\'%23F59E0B\' stroke-width=\'2\'/%3E%3C/svg%3E")',
          backgroundSize: '42px 75px', // Patrón más pequeño
          top: '0',
          bottom: '40px', // Deja espacio para el footer
        }}
      ></div>
      
      {/* Contenido principal con padding reducido */}
      <div className="relative z-10 p-4">
        {/* Banner superior con imagen de fondo */}
        <div className="relative mb-4 rounded-lg overflow-hidden shadow-md">
          <div className={`absolute inset-0 ${bgColorClass} opacity-90`}></div>
          <div 
            className="absolute inset-0 opacity-20" 
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'28\' height=\'49\' viewBox=\'0 0 28 49\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'hexagons\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'nonzero\'%3E%3Cpath d=\'M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v11.75l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
            }}
          ></div>
          
          {/* Título con icono - reducido padding y tamaño de texto */}
          <div className="relative py-4 px-4 text-center">
            <h1 className="text-3xl font-bold text-white flex items-center justify-center">
              <span className="mr-2 text-2xl">{emoji}</span>
              {title}
              <span className="ml-2 text-2xl">{emoji}</span>
            </h1>
          </div>
        </div>
        
        {/* Contenido específico de cada página - menos padding */}
        <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
};

// Componente para cada elemento de la lista con título y contenido - más compacto
const SectionItem = ({ title, textColor, children }) => {
  return (
    <div className="mb-4">
      <h2 className={`text-xl font-semibold mb-2 ${textColor} flex items-center`}>
        <span className="inline-block w-1.5 h-5 bg-amber-500 mr-2 rounded-sm"></span>
        {title}
      </h2>
      <div className="pl-4 border-l-2 border-amber-200">
        {children}
      </div>
    </div>
  );
};

export { PageBase, SectionItem };