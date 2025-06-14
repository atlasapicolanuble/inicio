// src/pages/Colaboradores.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, ArrowLeft } from 'lucide-react';

// Datos organizados por filas
const colaboradoresData = {
  direccion: {
    titulo: "Dirección",
    miembros: [
      {
        id: 1,
        nombre: "Dr. Mauricio Pereira",
        iniciales: "MP",
        titulo: "Doctor en Entomología",
        participacion: "Subdirector de Investigación",
        imagen: "https://randomuser.me/api/portraits/men/32.jpg",
        posicion: { x: -200, y: -80 }
      },
      {
        id: 2,
        nombre: "Dr. Marcelino Claret",
        iniciales: "MC",
        titulo: "Doctor en Apicultura",
        participacion: "Director General del Proyecto",
        imagen: "https://randomuser.me/api/portraits/men/45.jpg",
        posicion: { x: 0, y: -80 }
      },
      {
        id: 3,
        nombre: "Dra. Andrea Hernández",
        iniciales: "AH",
        titulo: "Doctora en Biología",
        participacion: "Directora de Investigación Científica",
        imagen: "https://randomuser.me/api/portraits/women/28.jpg",
        posicion: { x: 200, y: -80 }
      },
      {
        id: 4,
        nombre: "Dr. Sebastián Contreras",
        iniciales: "SC",
        titulo: "Doctor en Ecología",
        participacion: "Coordinador de Proyectos Ambientales",
        imagen: "https://randomuser.me/api/portraits/men/67.jpg",
        posicion: { x: 400, y: -80 }
      }
    ]
  },
  colaboradores_inia: {
    titulo: "Colaboradores INIA",
    miembros: [
      {
        id: 5,
        nombre: "Dra. María Morales",
        iniciales: "M",
        titulo: "Doctora en Genética Apícola",
        participacion: "Especialista en Mejoramiento Genético",
        imagen: "https://randomuser.me/api/portraits/women/15.jpg",
        posicion: { x: -300, y: 70 }
      },
      {
        id: 6,
        nombre: "Dr. Sergio Silva",
        iniciales: "S",
        titulo: "Doctor en Patología Veterinaria",
        participacion: "Investigador en Enfermedades Apícolas",
        imagen: "https://randomuser.me/api/portraits/men/22.jpg",
        posicion: { x: -150, y: 70 }
      },
      {
        id: 7,
        nombre: "Dr. Ricardo Ramírez",
        iniciales: "R",
        titulo: "Doctor en Botánica",
        participacion: "Especialista en Flora Melífera",
        imagen: "https://randomuser.me/api/portraits/men/55.jpg",
        posicion: { x: 0, y: 70 }
      },
      {
        id: 8,
        nombre: "Dr. Roberto Gómez Bolaños",
        iniciales: "RGB",
        titulo: "Doctor en Entomología Aplicada",
        participacion: "Investigador Principal en Comportamiento",
        imagen: "https://randomuser.me/api/portraits/men/41.jpg",
        posicion: { x: 150, y: 70 }
      },
      {
        id: 9,
        nombre: "Dr. Humberto Abejorro",
        iniciales: "HA",
        titulo: "Doctor en Apicultura Sustentable",
        participacion: "Especialista en Manejo Integrado",
        imagen: "https://randomuser.me/api/portraits/men/38.jpg",
        posicion: { x: 300, y: 70 }
      }
    ]
  },
  practicantes: {
    titulo: "Practicantes",
    miembros: [
      {
        id: 10,
        nombre: "Walter Contreras",
        iniciales: "WC",
        titulo: "Estudiante Santo Tomás",
        participacion: "Apoyo en Muestreo de Campo",
        imagen: "https://randomuser.me/api/portraits/men/23.jpg",
        posicion: { x: -400, y: 220 }
      },
      {
        id: 11,
        nombre: "Sofía Núñez",
        iniciales: "SN",
        titulo: "Estudiante INACAP",
        participacion: "Asistente de Laboratorio",
        imagen: "https://randomuser.me/api/portraits/women/34.jpg",
        posicion: { x: -280, y: 220 }
      },
      {
        id: 12,
        nombre: "Pablo Pérez",
        iniciales: "P",
        titulo: "Estudiante Santo Tomás",
        participacion: "Análisis de Muestras Polínicas",
        imagen: "https://randomuser.me/api/portraits/men/19.jpg",
        posicion: { x: -160, y: 220 }
      },
      {
        id: 13,
        nombre: "Patricia Pinto",
        iniciales: "P",
        titulo: "Estudiante INACAP",
        participacion: "Documentación Fotográfica",
        imagen: "https://randomuser.me/api/portraits/women/27.jpg",
        posicion: { x: -40, y: 220 }
      },
      {
        id: 14,
        nombre: "Sebastián Soto",
        iniciales: "S",
        titulo: "Estudiante Santo Tomás",
        participacion: "Procesamiento de Datos",
        imagen: "https://randomuser.me/api/portraits/men/31.jpg",
        posicion: { x: 80, y: 220 }
      },
      {
        id: 15,
        nombre: "Sandra Salinas",
        iniciales: "S",
        titulo: "Estudiante INACAP",
        participacion: "Apoyo en Análisis Estadístico",
        imagen: "https://randomuser.me/api/portraits/women/42.jpg",
        posicion: { x: 200, y: 220 }
      },
      {
        id: 16,
        nombre: "Oscar Olivares",
        iniciales: "O",
        titulo: "Estudiante Santo Tomás",
        participacion: "Mantenimiento de Colmenas",
        imagen: "https://randomuser.me/api/portraits/men/26.jpg",
        posicion: { x: 320, y: 220 }
      }
    ]
  }
};

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
    
    updateContainerSize();
    
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
    
    const zoomDuration = 600;
    const targetScale = 1.8;
    
    const targetPosition = { 
      x: -colaborador.posicion.x * 0.8, 
      y: -colaborador.posicion.y * 0.8 
    };
    
    setScale(targetScale);
    setPosition(targetPosition);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, zoomDuration);
  };

  // Manejador para volver atrás
  const handleBack = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setSelectedColaborador(null);
    
    const zoomDuration = 600;
    
    setScale(1);
    setPosition({ x: 0, y: 0 });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, zoomDuration);
  };

  // Controles de zoom
  const handleZoomIn = () => {
    if (scale < 3) setScale(scale + 0.2);
  };

  const handleZoomOut = () => {
    if (scale > 0.5) setScale(scale - 0.2);
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setSelectedColaborador(null);
  };

  // Estado de arrastre
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Manejadores para el arrastre
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

  // Efectos para manejo de touch
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
    
    const handleMouseUpGlobal = () => {
      setIsDragging(false);
    };

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

  // Función para generar conexiones dentro de cada fila
  const generateRowConnections = () => {
    const connections = [];
    
    Object.entries(colaboradoresData).forEach(([key, grupo]) => {
      const miembros = grupo.miembros;
      for (let i = 0; i < miembros.length - 1; i++) {
        connections.push({
          from: miembros[i],
          to: miembros[i + 1],
          type: 'row'
        });
      }
    });
    
    return connections;
  };

  const connections = generateRowConnections();

  return (
    <div className="relative h-full w-full bg-amber-50 overflow-hidden">
      {/* Título y controles */}
      <div className="absolute top-4 left-4 z-20 bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-amber-800 mb-2">Equipo de Investigación</h2>
        <p className="text-sm text-gray-600 mb-4">
          Atlas de Abejas - Estructura Organizacional
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

      {/* Información del colaborador seleccionado */}
      {selectedColaborador && (
        <div className="absolute top-4 right-4 z-20 bg-white/95 p-4 rounded-lg shadow-lg backdrop-blur-sm max-w-xs">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-300 mr-3">
              <img 
                src={selectedColaborador.imagen} 
                alt={selectedColaborador.nombre} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-amber-800">{selectedColaborador.nombre}</h3>
              <p className="text-sm text-amber-600">({selectedColaborador.iniciales})</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>Título:</strong> {selectedColaborador.titulo}</p>
            <p><strong>Participación:</strong> {selectedColaborador.participacion}</p>
          </div>
        </div>
      )}

      {/* Contenedor principal */}
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
            {/* Conexiones entre nodos de la misma fila */}
            <svg className="absolute top-0 left-0 w-full h-full" style={{ width: '2000px', height: '2000px', transform: 'translate(-1000px, -1000px)' }}>
              {connections.map((connection, index) => (
                <line 
                  key={`connection-${index}`}
                  x1={1000 + connection.from.posicion.x} 
                  y1={1000 + connection.from.posicion.y} 
                  x2={1000 + connection.to.posicion.x} 
                  y2={1000 + connection.to.posicion.y}
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeOpacity="0.6"
                />
              ))}
            </svg>
            
            {/* Títulos de las filas */}
            <div className="absolute text-center font-bold text-amber-800 text-xl bg-white/80 px-4 py-2 rounded-lg shadow-md" style={{ left: '-80px', top: '-180px' }}>
              {colaboradoresData.direccion.titulo}
            </div>
            <div className="absolute text-center font-bold text-amber-800 text-xl bg-white/80 px-4 py-2 rounded-lg shadow-md" style={{ left: '-120px', top: '-30px' }}>
              {colaboradoresData.colaboradores_inia.titulo}
            </div>
            <div className="absolute text-center font-bold text-amber-800 text-xl bg-white/80 px-4 py-2 rounded-lg shadow-md" style={{ left: '-80px', top: '120px' }}>
              {colaboradoresData.practicantes.titulo}
            </div>
            
            {/* Nodos de colaboradores */}
            {Object.entries(colaboradoresData).map(([key, grupo]) =>
              grupo.miembros.map((colaborador) => (
                <div 
                  key={colaborador.id}
                  className={`absolute shadow-lg transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 ${
                    selectedColaborador && selectedColaborador.id === colaborador.id ? 'ring-4 ring-amber-500 ring-opacity-70 z-20' : 'z-10'
                  }`}
                  style={{ 
                    left: `${colaborador.posicion.x}px`, 
                    top: `${colaborador.posicion.y}px`,
                    width: selectedColaborador && selectedColaborador.id === colaborador.id ? '160px' : '120px',
                    height: selectedColaborador && selectedColaborador.id === colaborador.id ? '140px' : '120px',
                    backgroundColor: '#FEF3C7',
                    border: '3px solid #F59E0B',
                    borderRadius: '12px',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                  onClick={() => zoomToColaborador(colaborador)}
                >
                  <div className="flex flex-col items-center justify-center h-full p-2">
                    <div className={`overflow-hidden border-2 border-amber-400 mb-2 ${
                      selectedColaborador && selectedColaborador.id === colaborador.id ? 'w-16 h-16' : 'w-12 h-12'
                    }`} style={{ borderRadius: '8px' }}>
                      <img 
                        src={colaborador.imagen} 
                        alt={colaborador.nombre} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <div className={`font-bold text-amber-800 leading-tight ${
                        selectedColaborador && selectedColaborador.id === colaborador.id ? 'text-sm' : 'text-xs'
                      }`}>
                        {selectedColaborador && selectedColaborador.id === colaborador.id 
                          ? colaborador.nombre 
                          : colaborador.nombre.split(' ').slice(0, 2).join(' ')
                        }
                      </div>
                      {!selectedColaborador && (
                        <div className="text-xs text-amber-600 mt-1">
                          ({colaborador.iniciales})
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colaboradores;