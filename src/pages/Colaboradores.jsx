// src/pages/Colaboradores.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, ArrowLeft } from 'lucide-react';

// Datos de ejemplo para los colaboradores - reemplaza con tus datos reales
const colaboradoresData = [
  {
    id: 1,
    nombre: "Dr. Carlos Méndez",
    rol: "Investigador Principal",
    area: "Genética de Abejas",
    imagen: "https://randomuser.me/api/portraits/men/1.jpg",
    posicion: { x: 0, y: 0 }
  },
  {
    id: 2,
    nombre: "Dra. Ana Torres",
    rol: "Investigadora",
    area: "Botánica Melífera",
    imagen: "https://randomuser.me/api/portraits/women/2.jpg",
    posicion: { x: -250, y: -200 }
  },
  {
    id: 3,
    nombre: "Dr. Miguel Rojas",
    rol: "Investigador Asociado",
    area: "Patología Apícola",
    imagen: "https://randomuser.me/api/portraits/men/3.jpg",
    posicion: { x: 250, y: -180 }
  },
  {
    id: 4,
    nombre: "Dra. Laura Sepúlveda",
    rol: "Investigadora",
    area: "Productos Apícolas",
    imagen: "https://randomuser.me/api/portraits/women/4.jpg",
    posicion: { x: -350, y: 50 }
  },
  {
    id: 5,
    nombre: "Dr. Roberto Gómez",
    rol: "Investigador",
    area: "Polinización",
    imagen: "https://randomuser.me/api/portraits/men/5.jpg",
    posicion: { x: 320, y: 80 }
  },
  {
    id: 6,
    nombre: "Dra. Patricia Vidal",
    rol: "Investigadora Asistente",
    area: "Comportamiento",
    imagen: "https://randomuser.me/api/portraits/women/6.jpg",
    posicion: { x: -150, y: 250 }
  },
  {
    id: 7,
    nombre: "Dr. Daniel Escobar",
    rol: "Investigador Asociado",
    area: "Apicultura Sustentable",
    imagen: "https://randomuser.me/api/portraits/men/7.jpg",
    posicion: { x: 180, y: 230 }
  }
];

const Colaboradores = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedColaborador, setSelectedColaborador] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  // Función para actualizar dimensiones del contenedor
  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    
    // Actualizar tamaño inicial
    updateContainerSize();
    
    // Configurar observer para cambios de tamaño
    const resizeObserver = new ResizeObserver(updateContainerSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  // Función para hacer zoom a un colaborador específico
  const zoomToColaborador = (colaborador) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setSelectedColaborador(colaborador);
    
    // Animación simplificada de zoom
    const zoomDuration = 600; // 0.6 segundos
    const targetScale = 1.5; // Zoom más ligero
    
    // Negamos la posición para centrar en el colaborador
    const targetPosition = { 
      x: -colaborador.posicion.x * 0.5, 
      y: -colaborador.posicion.y * 0.5 
    };
    
    // Animación simple con setTimeout
    setScale(targetScale);
    setPosition(targetPosition);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, zoomDuration);
  };

  // Manejador para volver atrás (deseleccionar colaborador)
  const handleBack = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setSelectedColaborador(null);
    
    // Animación simplificada para volver
    const zoomDuration = 600; // 0.6 segundos
    
    setScale(1);
    setPosition({ x: 0, y: 0 });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, zoomDuration);
  };

  // Manejador para zoom in manual
  const handleZoomIn = () => {
    if (scale < 3) setScale(scale + 0.2);
  };

  // Manejador para zoom out manual
  const handleZoomOut = () => {
    if (scale > 0.5) setScale(scale - 0.2);
  };

  // Manejador para restablecer vista
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setSelectedColaborador(null);
  };

  // Estado de arrastre para navegación
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Manejadores para el arrastre (drag and drop)
  const handleMouseDown = (e) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      setPosition({
        x: position.x + dx / scale,
        y: position.y + dy / scale
      });
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Efectos para manejo de touch en dispositivos móviles
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (isTransitioning) return;
      if (e.touches.length === 1) {
        setIsDragging(true);
        setDragStart({ 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        });
      }
    };
    
    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - dragStart.x;
        const dy = e.touches[0].clientY - dragStart.y;
        setPosition({
          x: position.x + dx / scale,
          y: position.y + dy / scale
        });
        setDragStart({ 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        });
      }
    };
    
    const handleTouchEnd = () => {
      setIsDragging(false);
    };
    
    // Efecto para limpiar listeners
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };

    // Añadir listeners
    if (containerRef.current) {
      containerRef.current.addEventListener('touchstart', handleTouchStart);
      containerRef.current.addEventListener('touchmove', handleTouchMove);
      containerRef.current.addEventListener('touchend', handleTouchEnd);
    }
    
    window.addEventListener('mouseup', handleMouseUpGlobal);
    
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('touchstart', handleTouchStart);
        containerRef.current.removeEventListener('touchmove', handleTouchMove);
        containerRef.current.removeEventListener('touchend', handleTouchEnd);
      }
      window.removeEventListener('mouseup', handleMouseUpGlobal);
    };
  }, [isDragging, isTransitioning, dragStart.x, dragStart.y, position.x, position.y, scale]);

  return (
    <div className="relative h-full w-full bg-amber-50 overflow-hidden">
      {/* Título y controles */}
      <div className="absolute top-4 left-4 z-20 bg-white/80 p-3 rounded-lg shadow-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-amber-800 mb-2">Colaboradores</h2>
        <p className="text-sm text-gray-600 mb-4">
          Conoce al equipo detrás del Atlas de Abejas
        </p>
        <div className="flex space-x-2">
          {selectedColaborador ? (
            <button 
              onClick={handleBack}
              className="p-2 bg-amber-600 hover:bg-amber-700 rounded-full transition text-white"
              aria-label="Volver"
            >
              <ArrowLeft size={20} />
            </button>
          ) : (
            <>
              <button 
                onClick={handleZoomIn}
                className="p-2 bg-amber-100 hover:bg-amber-200 rounded-full transition"
                aria-label="Acercar"
              >
                <ZoomIn size={20} className="text-amber-800" />
              </button>
              <button 
                onClick={handleZoomOut}
                className="p-2 bg-amber-100 hover:bg-amber-200 rounded-full transition"
                aria-label="Alejar"
              >
                <ZoomOut size={20} className="text-amber-800" />
              </button>
              <button 
                onClick={handleReset}
                className="p-2 bg-amber-100 hover:bg-amber-200 rounded-full transition"
                aria-label="Reiniciar vista"
              >
                <RotateCcw size={20} className="text-amber-800" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Contenedor principal con transformación */}
      <div 
        ref={containerRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{ 
          overflow: 'hidden',
          backgroundColor: '#fcf6e6',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L25 10 20 5 15 10 10 5 5 10V15L10 20 5 25 10 30 5 35l5 5v5l5-5 5 5 5-5 5 5 5-5 5 5v-5l5-5-5-5 5-5-5-5 5-5v-5l-5 5-5-5-5 5-5-5z' fill='%23F59E0B' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          width: '100%',
          height: '100%'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {/* Contenedor con zoom y paneo */}
        <div 
          className="absolute top-1/2 left-1/2 w-0 h-0"
          style={{
            transform: `scale(${scale})`,
            transition: isTransitioning ? 'transform 0.6s ease-out' : 'none',
          }}
        >
          {/* Contenido que se mueve según el paneo */}
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: isTransitioning ? 'transform 0.6s ease-out' : 'none',
            }}
          >
            {/* Conexiones (líneas) entre nodos */}
            <svg className="absolute top-0 left-0 w-full h-full" style={{ width: '2000px', height: '2000px', transform: 'translate(-1000px, -1000px)' }}>
              {/* Línea central a todos los nodos */}
              {colaboradoresData.map((colaborador) => (
                <line 
                  key={`line-${colaborador.id}`}
                  x1="1000" 
                  y1="1000" 
                  x2={1000 + colaborador.posicion.x} 
                  y2={1000 + colaborador.posicion.y}
                  stroke="#F59E0B"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                  strokeDasharray={selectedColaborador && selectedColaborador.id === colaborador.id ? "none" : "5,5"}
                />
              ))}
              
              {/* Líneas secundarias entre nodos cercanos */}
              <line x1="750" y1="800" x2="1250" y2="820" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="650" y1="1050" x2="850" y2="1250" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="1250" y1="820" x2="1320" y2="1080" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.3" />
              <line x1="850" y1="1250" x2="1180" y2="1230" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.3" />
            </svg>
            
            {/* Nodo central */}
            <div 
              className={`absolute w-32 h-32 rounded-full bg-amber-100 flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                !selectedColaborador ? 'ring-4 ring-amber-400 ring-opacity-70' : ''
              }`}
              style={{ 
                left: '0px', 
                top: '0px',
                zIndex: 10
              }}
              onClick={() => handleReset()}
            >
              <div className="text-center p-2">
                <div className="w-16 h-16 mx-auto bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2">
                  IA
                </div>
                <span className="font-bold text-amber-800 text-sm">Centro de Investigación</span>
              </div>
            </div>
            
            {/* Nodos de colaboradores */}
            {colaboradoresData.map((colaborador) => (
              <div 
                key={colaborador.id}
                className={`absolute rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                  selectedColaborador && selectedColaborador.id === colaborador.id ? 'ring-4 ring-amber-500 ring-opacity-70 z-20' : 'z-10'
                }`}
                style={{ 
                  left: `${colaborador.posicion.x}px`, 
                  top: `${colaborador.posicion.y}px`,
                  width: selectedColaborador && selectedColaborador.id === colaborador.id ? '200px' : '110px',
                  height: selectedColaborador && selectedColaborador.id === colaborador.id ? '160px' : '110px',
                  backgroundColor: selectedColaborador && selectedColaborador.id === colaborador.id ? 'white' : '#FEF3C7',
                  borderRadius: selectedColaborador && selectedColaborador.id === colaborador.id ? '16px' : '100%',
                  padding: selectedColaborador && selectedColaborador.id === colaborador.id ? '16px' : '0',
                  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onClick={() => zoomToColaborador(colaborador)}
              >
                {selectedColaborador && selectedColaborador.id === colaborador.id ? (
                  // Vista expandida simplificada
                  <div className="flex flex-col items-center h-full">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-300 mb-3">
                      <img 
                        src={colaborador.imagen} 
                        alt={colaborador.nombre} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-amber-800 text-center">{colaborador.nombre}</h3>
                    <p className="text-amber-600 text-sm text-center mt-1">{colaborador.rol}</p>
                  </div>
                ) : (
                  // Vista colapsada
                  <div className="flex flex-col items-center justify-center h-full p-2">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-300 mb-1">
                      <img 
                        src={colaborador.imagen} 
                        alt={colaborador.nombre} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium text-amber-800 text-xs text-center leading-tight">
                      {colaborador.nombre.split(' ')[0]}
                    </span>
                    <span className="text-amber-600 text-xs text-center">
                      {colaborador.area.split(' ')[0]}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
            
    </div>
  );
};

export default Colaboradores;