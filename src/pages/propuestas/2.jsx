import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, ArrowLeft, Play, Pause, Mail, ExternalLink, User, Users, Eye, Star, Zap, Network, Layers, Target } from 'lucide-react';

// Función para cargar imágenes de forma dinámica con manejo de errores
const loadImage = (imageName) => {
  try {
    return require(`./Fotos/${imageName}`);
  } catch (error) {
    console.warn(`Imagen no encontrada: ./Fotos/${imageName}`);
    return null;
  }
};

// Generar array de imágenes del 1 al 32
const fotosLocales = Array.from({ length: 32 }, (_, index) => {
  const imageNumber = index + 1;
  return loadImage(`image${imageNumber}.png`);
});

// Datos de colaboradores con posiciones para red neural
const colaboradoresData = {
  direccion: {
    titulo: "Equipo Proyecto",
    nivel: 0, // Centro
    miembros: [
      {
        id: 1,
        nombre: "Dr. Marcelino Claret Merino",
        iniciales: "MCM",
        titulo: "Dr. Ciencias Ambientales",
        participacion: "Coordinador",
        imagen: fotosLocales[0],
        contacto: {
          email: "",
          linkedin: "https://www.linkedin.com/in/marcelino-claret-merino-b8352224/"
        },
        angle: 0, radius: 0 // Centro de la red
      },
      {
        id: 2,
        nombre: "Alejandra Henríquez Suazo",
        iniciales: "AHS",
        titulo: "Ing. Agrónomo",
        participacion: "Investigadora Principal",
        imagen: fotosLocales[1],
        contacto: {
          email: "Alejandra.henriquezsu@gmail.com",
          linkedin: ""
        },
        angle: 0, radius: 250
      },
      {
        id: 3,
        nombre: "Manuel Palacios",
        iniciales: "MP",
        titulo: "Ing. Agrónomo (E)",
        participacion: "Especialista en Campo",
        imagen: fotosLocales[2],
        contacto: {
          email: "Manuel.palaciosm@gmail.com",
          linkedin: ""
        },
        angle: 72, radius: 250
      },
      {
        id: 4,
        nombre: "Samuel Carrillo",
        iniciales: "SC",
        titulo: "Ing. Recursos Naturales (E) UBB",
        participacion: "Especialista en Recursos Naturales",
        imagen: fotosLocales[3],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 144, radius: 250
      },
      {
        id: 5,
        nombre: "Edmundo Cárdenas",
        iniciales: "EC",
        titulo: "Ing. Agrónomo",
        participacion: "Especialista ANR",
        imagen: fotosLocales[4],
        contacto: {
          email: "cardenas.edmundo@gmail.com",
          linkedin: ""
        },
        angle: 216, radius: 250
      },
      {
        id: 6,
        nombre: "Oriana Oyarce",
        iniciales: "OO",
        titulo: "Apicultora ANR",
        participacion: "Especialista en Apicultura",
        imagen: fotosLocales[5],
        contacto: {
          email: "oriana.oyarce@gmail.com",
          linkedin: ""
        },
        angle: 288, radius: 250
      }
    ]
  },
  colaboradores_inia: {
    titulo: "Colaboradores INIA",
    nivel: 1,
    miembros: [
      {
        id: 7,
        nombre: "Marcel Fuentes",
        iniciales: "MF",
        titulo: "Ing. Civil Agrícola, Mg. En Teledetección",
        participacion: "Especialista en Teledetección",
        imagen: fotosLocales[6],
        contacto: {
          email: "Marcel.fuentes@inia.cl",
          linkedin: ""
        },
        angle: 45, radius: 420
      },
      {
        id: 8,
        nombre: "Rubén Ruiz",
        iniciales: "RR",
        titulo: "Ing. Civil Agrícola",
        participacion: "Investigador INIA",
        imagen: fotosLocales[7],
        contacto: {
          email: "reruiz@inia.cl",
          linkedin: ""
        },
        angle: 135, radius: 420
      },
      {
        id: 9,
        nombre: "Stanley Best",
        iniciales: "SB",
        titulo: "Ing. Agrónomo, M. SC.",
        participacion: "Investigador Principal INIA",
        imagen: fotosLocales[8],
        contacto: {
          email: "sbest@inia.cl",
          linkedin: ""
        },
        angle: 225, radius: 420
      },
      {
        id: 10,
        nombre: "Raúl Orrego",
        iniciales: "RO",
        titulo: "Ing. En Recursos Naturales",
        participacion: "Especialista en Recursos Naturales",
        imagen: fotosLocales[9],
        contacto: {
          email: "raul.orrego@inia.cl",
          linkedin: ""
        },
        angle: 315, radius: 420
      }
    ]
  },
  colaboradores_externos: {
    titulo: "Colaboradores Otras Instituciones",
    nivel: 1,
    miembros: [
      {
        id: 11,
        nombre: "Emanuel Canales",
        iniciales: "EC",
        titulo: "Asoc. Apicultura Natural Regenerativa",
        participacion: "Especialista en Apicultura Natural",
        imagen: fotosLocales[10],
        contacto: {
          email: "contacto@apiculturanatural.com",
          linkedin: ""
        },
        angle: 0, radius: 500
      },
      {
        id: 12,
        nombre: "Dr. Mauricio Rondanelli R.",
        iniciales: "MRR",
        titulo: "Biólogo. Dr. en Cs. Biológicas",
        participacion: "Palinólogo UDEC Campus LA",
        imagen: fotosLocales[11],
        contacto: {
          email: "mrondane@udec.cl",
          linkedin: ""
        },
        angle: 72, radius: 500
      },
      {
        id: 13,
        nombre: "Iván Lamas V.",
        iniciales: "ILV",
        titulo: "Ingeniero en Biotecnología Vegetal",
        participacion: "Lab. Palinología UDEC Campus LA",
        imagen: fotosLocales[12],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 144, radius: 500
      },
      {
        id: 14,
        nombre: "Dr. Nicolás Villalobos",
        iniciales: "NV",
        titulo: "Doctor en Ciencias Biológicas área Botánica",
        participacion: "Especialista en Botánica",
        imagen: fotosLocales[13],
        contacto: {
          email: "nvillalobo@ubiobio.cl",
          linkedin: ""
        },
        angle: 216, radius: 500
      },
      {
        id: 15,
        nombre: "Pedro Vera",
        iniciales: "PV",
        titulo: "Ing. Informática (Es) Santo Tomás",
        participacion: "Especialista en Tecnología",
        imagen: fotosLocales[14],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 288, radius: 500
      }
    ]
  },
  practicantes_santo_tomas: {
    titulo: "Instituto Profesional Santo Tomás",
    nivel: 2,
    miembros: [
      {
        id: 16,
        nombre: "Nicolás Castillo",
        iniciales: "NC",
        titulo: "Técnico Agrícola Santo Tomás",
        participacion: "Apoyo Técnico en Campo",
        imagen: fotosLocales[15],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 0, radius: 650
      },
      {
        id: 17,
        nombre: "Pablo Guzmán",
        iniciales: "PG",
        titulo: "Técnico Agrícola Santo Tomás",
        participacion: "Asistente de Campo",
        imagen: fotosLocales[16],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 30, radius: 650
      },
      {
        id: 18,
        nombre: "Scarlette San Martín",
        iniciales: "SSM",
        titulo: "Técnico Agrícola (Es) Santo Tomás",
        participacion: "Asistente de Laboratorio",
        imagen: fotosLocales[17],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 60, radius: 650
      },
      {
        id: 19,
        nombre: "Fernando Orozco",
        iniciales: "FO",
        titulo: "Técnico Agrícola (Es) Santo Tomás",
        participacion: "Asistente de Campo",
        imagen: fotosLocales[18],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 90, radius: 650
      },
      {
        id: 20,
        nombre: "Estefanía Sandoval",
        iniciales: "ES",
        titulo: "Técnico Agrícola (Es) Santo Tomás",
        participacion: "Asistente de Laboratorio",
        imagen: fotosLocales[19],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 120, radius: 650
      }
    ]
  },
  practicantes_inacap: {
    titulo: "INACAP",
    nivel: 2,
    miembros: [
      {
        id: 21,
        nombre: "Gabriela Martínez",
        iniciales: "GM",
        titulo: "Ing. Agrícola (Es) Inacap",
        participacion: "Apoyo en Análisis",
        imagen: fotosLocales[20],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 150, radius: 650
      },
      {
        id: 22,
        nombre: "Felipe Ortíz",
        iniciales: "FO",
        titulo: "Técnico Agrícola (Es) Inacap",
        participacion: "Asistente de Campo",
        imagen: fotosLocales[21],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 180, radius: 650
      }
    ]
  },
  practicantes_san_nicolas: {
    titulo: "Liceo Bicentenario San Nicolás",
    nivel: 2,
    miembros: [
      {
        id: 23,
        nombre: "Octavio Belauzaran",
        iniciales: "OB",
        titulo: "Téc. En Química Industrial",
        participacion: "Liceo Bicentenario San Nicolás",
        imagen: fotosLocales[22],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 210, radius: 650
      }
    ]
  },
  practicantes_udec: {
    titulo: "Universidad de Concepción",
    nivel: 2,
    miembros: [
      {
        id: 24,
        nombre: "Valentín Aguilera",
        iniciales: "VA",
        titulo: "Agronomía (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[23],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 240, radius: 750
      },
      {
        id: 25,
        nombre: "Gonzalo Saavedra",
        iniciales: "GS",
        titulo: "Agronomía (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[24],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 270, radius: 750
      },
      {
        id: 26,
        nombre: "Carolina Aguirre",
        iniciales: "CA",
        titulo: "Agronomía (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[25],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 300, radius: 750
      },
      {
        id: 27,
        nombre: "Patricia Oyarce",
        iniciales: "PO",
        titulo: "Ing. Ambiental UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[26],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 330, radius: 750
      },
      {
        id: 28,
        nombre: "Pilar Batista",
        iniciales: "PB",
        titulo: "Ing. Ambiental UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[27],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 0, radius: 750
      },
      {
        id: 29,
        nombre: "Alvaro Gatica",
        iniciales: "AG",
        titulo: "Ing. Ambiental UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[28],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 30, radius: 750
      },
      {
        id: 30,
        nombre: "Matías Mellas",
        iniciales: "MM",
        titulo: "Agronomía UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[29],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 60, radius: 750
      },
      {
        id: 31,
        nombre: "Catalina Orellana",
        iniciales: "CO",
        titulo: "Ing. Civil Industrial (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[30],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 90, radius: 750
      }
    ]
  },
  practicantes_san_agustin: {
    titulo: "Centro de Formación Técnica San Agustín",
    nivel: 2,
    miembros: [
      {
        id: 32,
        nombre: "Javier Machuca",
        iniciales: "JM",
        titulo: "(Es) Tec. Agrícola Nivel Superior",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[31],
        contacto: {
          email: "",
          linkedin: ""
        },
        angle: 120, radius: 750
      }
    ]
  }
};

const Colaboradores = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.4);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedColaborador, setSelectedColaborador] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  
  // Estados para efectos visuales
  const [activeConnections, setActiveConnections] = useState(new Set());
  const [hoveredNode, setHoveredNode] = useState(null);
  const [pulseWave, setPulseWave] = useState(0);
  
  // Estados para la rotación automática
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const intervalRef = useRef(null);
  const countdownRef = useRef(null);
  
  // Estado para el inicio automático
  const [hasAutoStarted, setHasAutoStarted] = useState(false);
  const [initialCountdown, setInitialCountdown] = useState(15);
  const [isInitialPaused, setIsInitialPaused] = useState(false);
  const initialTimerRef = useRef(null);
  const initialCountdownRef = useRef(null);

  // Crear lista plana de todos los colaboradores
  const allColaboradores = Object.values(colaboradoresData).flatMap(grupo => grupo.miembros);

  // Convertir ángulo y radio a coordenadas x,y
  const getCoordinates = (angle, radius) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  // Efecto de onda de pulso
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseWave(prev => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(pulseInterval);
  }, []);

  // Función para obtener el siguiente colaborador
  const getNextColaborador = (currentId) => {
    const currentIndex = allColaboradores.findIndex(col => col.id === currentId);
    const nextIndex = (currentIndex + 1) % allColaboradores.length;
    return allColaboradores[nextIndex];
  };

  // Función para iniciar la rotación automática
  const startAutoRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (countdownRef.current) clearInterval(countdownRef.current);
    
    setIsAutoRotating(true);
    setTimeLeft(10);
    
    // Countdown timer
    countdownRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          return 10; // Reset countdown
        }
        return prev - 1;
      });
    }, 1000);
    
    // Auto rotation timer
    intervalRef.current = setInterval(() => {
      setSelectedColaborador(current => {
        if (current) {
          const nextColaborador = getNextColaborador(current.id);
          zoomToColaboradorInternal(nextColaborador);
          return nextColaborador;
        }
        return current;
      });
    }, 10000);
  };

  // Función para detener la rotación automática
  const stopAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
    setIsAutoRotating(false);
    setTimeLeft(10);
  };

  // Auto-inicio después de 15 segundos
  useEffect(() => {
    if (!hasAutoStarted && !isInitialPaused) {
      // Countdown inicial
      initialCountdownRef.current = setInterval(() => {
        setInitialCountdown(prev => {
          if (prev <= 1) {
            clearInterval(initialCountdownRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Timer para iniciar con Dr. Marcelino Claret (id: 1)
      initialTimerRef.current = setTimeout(() => {
        const drMarcelino = allColaboradores.find(col => col.id === 1);
        if (drMarcelino) {
          setSelectedColaborador(drMarcelino);
          zoomToColaboradorInternal(drMarcelino);
          setHasAutoStarted(true);
          
          // Iniciar rotación automática después del primer zoom
          setTimeout(() => {
            startAutoRotation();
          }, 1000);
        }
      }, 15000);

      return () => {
        if (initialCountdownRef.current) {
          clearInterval(initialCountdownRef.current);
        }
        if (initialTimerRef.current) {
          clearTimeout(initialTimerRef.current);
        }
      };
    }
  }, [hasAutoStarted, isInitialPaused]);

  // Limpiar intervalos al desmontar
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
      if (initialTimerRef.current) clearTimeout(initialTimerRef.current);
      if (initialCountdownRef.current) clearInterval(initialCountdownRef.current);
    };
  }, []);

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

  // Función interna para hacer zoom (sin afectar la rotación automática)
  const zoomToColaboradorInternal = (colaborador) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    const coords = getCoordinates(colaborador.angle, colaborador.radius);
    const zoomDuration = 800;
    const targetScale = 1.5;
    
    const targetPosition = { 
      x: -coords.x * 0.8, 
      y: -coords.y * 0.8 
    };
    
    setScale(targetScale);
    setPosition(targetPosition);
    
    // Activar conexiones del nodo seleccionado
    setActiveConnections(new Set([colaborador.id]));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, zoomDuration);
  };

  // Función para hacer zoom a un colaborador específico (click manual)
  const zoomToColaborador = (colaborador) => {
    if (isTransitioning) return;
    
    setSelectedColaborador(colaborador);
    zoomToColaboradorInternal(colaborador);
    setHasAutoStarted(true); // Marcar como iniciado si el usuario hace click
    
    // Iniciar rotación automática después del click
    startAutoRotation();
  };

  // Manejador para volver atrás
  const handleBack = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setSelectedColaborador(null);
    
    // Detener rotación automática
    stopAutoRotation();
    
    const zoomDuration = 800;
    
    setScale(0.4);
    setPosition({ x: 0, y: 0 });
    setActiveConnections(new Set());
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, zoomDuration);
  };

  // Controles de zoom
  const handleZoomIn = () => {
    if (scale < 2) setScale(scale + 0.2);
  };

  const handleZoomOut = () => {
    if (scale > 0.2) setScale(scale - 0.2);
  };

  const handleReset = () => {
    stopAutoRotation();
    if (initialTimerRef.current) clearTimeout(initialTimerRef.current);
    if (initialCountdownRef.current) clearInterval(initialCountdownRef.current);
    setScale(0.4);
    setPosition({ x: 0, y: 0 });
    setSelectedColaborador(null);
    setHasAutoStarted(false);
    setInitialCountdown(15);
    setIsInitialPaused(false);
    setActiveConnections(new Set());
    setHoveredNode(null);
  };

  // Pausar/reanudar el countdown inicial
  const toggleInitialCountdown = () => {
    if (isInitialPaused) {
      setIsInitialPaused(false);
    } else {
      setIsInitialPaused(true);
      if (initialTimerRef.current) clearTimeout(initialTimerRef.current);
      if (initialCountdownRef.current) clearInterval(initialCountdownRef.current);
    }
  };

  // Toggle para pausar/reanudar la rotación
  const toggleAutoRotation = () => {
    if (isAutoRotating) {
      stopAutoRotation();
    } else if (selectedColaborador) {
      startAutoRotation();
    }
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

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Círculos concéntricos de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1, 2, 3, 4].map(level => (
          <div
            key={level}
            className="absolute rounded-full border border-amber-200/30"
            style={{
              width: `${(level + 1) * 300}px`,
              height: `${(level + 1) * 300}px`,
              transform: 'translate(-50%, -50%)',
              left: '50%',
              top: '50%'
            }}
          />
        ))}
        
        {/* Ondas de pulso desde el centro */}
        <div
          className="absolute rounded-full border-2 border-amber-300/50 animate-ping"
          style={{
            width: '100px',
            height: '100px',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%'
          }}
        />
      </div>

      {/* Panel de control con diseño de red neural */}
      <div className="absolute top-4 left-4 z-20 bg-white/95 p-4 rounded-xl shadow-xl backdrop-blur-sm border border-amber-200">
        <div className="flex items-center mb-2">
          <Network size={24} className="text-amber-600 mr-2" />
          <h2 className="text-2xl font-bold text-amber-800">Red Neural - Atlas de Abejas</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          🧠 Estructura de Colaboración Circular - {allColaboradores.length} Nodos Activos
        </p>
        
        {/* Indicadores de nivel */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
          <div className="flex items-center bg-amber-100 p-2 rounded-lg">
            <Target size={14} className="text-amber-600 mr-1" />
            <span className="text-amber-800 font-medium">Centro: Dirección</span>
          </div>
          <div className="flex items-center bg-orange-100 p-2 rounded-lg">
            <Layers size={14} className="text-orange-600 mr-1" />
            <span className="text-orange-800 font-medium">Nivel 1: Colaboradores</span>
          </div>
          <div className="flex items-center bg-yellow-100 p-2 rounded-lg">
            <Users size={14} className="text-yellow-600 mr-1" />
            <span className="text-yellow-800 font-medium">Nivel 2: Practicantes</span>
          </div>
        </div>
        
        {/* Countdown inicial */}
        {!hasAutoStarted && !selectedColaborador && (
          <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-amber-700 flex items-center">
                <Zap size={14} className="mr-1" />
                {isInitialPaused ? "Exploración pausada" : "Iniciando exploración de red"}
              </span>
              <button
                onClick={toggleInitialCountdown}
                className={`p-1 rounded transition text-white text-xs ${
                  isInitialPaused 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-amber-600 hover:bg-amber-700'
                }`}
                aria-label={isInitialPaused ? "Reanudar countdown" : "Pausar countdown"}
              >
                {isInitialPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>
            </div>
            {!isInitialPaused && (
              <>
                <div className="text-lg font-bold text-amber-800 text-center mb-1">
                  {initialCountdown}s
                </div>
                <div className="w-full bg-amber-200 rounded-full h-1">
                  <div 
                    className="bg-amber-600 h-1 rounded-full transition-all duration-1000"
                    style={{ width: `${((15 - initialCountdown) / 15) * 100}%` }}
                  ></div>
                </div>
              </>
            )}
          </div>
        )}
        
        <div className="flex space-x-2">
          {selectedColaborador ? (
            <>
              <button 
                onClick={handleBack}
                className="p-2 bg-amber-600 hover:bg-amber-700 rounded-full transition text-white shadow-md"
                aria-label="Volver a vista general"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={toggleAutoRotation}
                className={`p-2 rounded-full transition text-white shadow-md ${
                  isAutoRotating 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-green-600 hover:bg-green-700'
                }`}
                aria-label={isAutoRotating ? "Pausar rotación" : "Reanudar rotación"}
              >
                {isAutoRotating ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={handleZoomIn}
                className="p-2 bg-amber-100 hover:bg-amber-200 rounded-full transition shadow-md"
                aria-label="Acercar"
              >
                <ZoomIn size={20} className="text-amber-800" />
              </button>
              <button 
                onClick={handleZoomOut}
                className="p-2 bg-amber-100 hover:bg-amber-200 rounded-full transition shadow-md"
                aria-label="Alejar"
              >
                <ZoomOut size={20} className="text-amber-800" />
              </button>
              <button 
                onClick={handleReset}
                className="p-2 bg-amber-100 hover:bg-amber-200 rounded-full transition shadow-md"
                aria-label="Reiniciar vista"
              >
                <RotateCcw size={20} className="text-amber-800" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Panel de información del colaborador seleccionado */}
      {selectedColaborador && (
        <div className="absolute top-4 right-4 z-20 bg-white/95 p-4 rounded-xl shadow-xl backdrop-blur-sm max-w-sm border border-amber-200">
          <div className="flex items-center mb-3">
            <div className="w-16 h-16 rounded-xl overflow-hidden border-3 border-amber-300 mr-3 shadow-md flex items-center justify-center">
              {selectedColaborador.imagen ? (
                <img 
                  src={selectedColaborador.imagen} 
                  alt={selectedColaborador.nombre} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.warn(`Error loading image for ${selectedColaborador.nombre}`);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              {!selectedColaborador.imagen && (
                <div className="w-full h-full bg-amber-500 flex items-center justify-center">
                  <User size={28} className="text-white" />
                </div>
              )}
              {/* Fallback div que se muestra si la imagen falla al cargar */}
              <div className="w-full h-full bg-amber-500 flex items-center justify-center" style={{ display: 'none' }}>
                <User size={28} className="text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-amber-800 text-lg leading-tight">{selectedColaborador.nombre}</h3>
              <p className="text-sm text-amber-600 font-medium">({selectedColaborador.iniciales})</p>
              {!selectedColaborador.imagen && (
                <p className="text-xs text-red-600 italic mt-1">Imagen no disponible</p>
              )}
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong className="text-amber-800">Título:</strong> <span className="text-gray-700">{selectedColaborador.titulo}</span></p>
            <p><strong className="text-amber-800">Participación:</strong> <span className="text-gray-700">{selectedColaborador.participacion}</span></p>
          </div>
          
          {/* Sección de contacto */}
          <div className="mt-4 pt-3 border-t border-amber-200">
            <p className="text-sm font-semibold text-amber-800 mb-2">Contacto:</p>
            <div className="flex space-x-2">
              {selectedColaborador.contacto?.email && (
                <button
                  onClick={() => {
                    window.open(`mailto:${selectedColaborador.contacto.email}`, '_blank');
                  }}
                  className="flex items-center justify-center p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors shadow-sm"
                  title="Enviar email"
                >
                  <Mail size={16} className="text-blue-600" />
                </button>
              )}
              {selectedColaborador.contacto?.linkedin && (
                <button
                  onClick={() => {
                    window.open(selectedColaborador.contacto.linkedin, '_blank');
                  }}
                  className="flex items-center justify-center p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors shadow-sm"
                  title="Ver perfil de LinkedIn"
                >
                  <ExternalLink size={16} className="text-blue-600" />
                </button>
              )}
              {!selectedColaborador.contacto?.email && !selectedColaborador.contacto?.linkedin && (
                <span className="text-xs text-gray-500 italic">Sin contacto disponible</span>
              )}
            </div>
          </div>
          
          {/* Contador de tiempo para siguiente cambio */}
          {isAutoRotating && (
            <div className="mt-4 pt-3 border-t border-amber-200">
              <div className="flex items-center justify-between text-xs text-amber-600">
                <span>Siguiente nodo en:</span>
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    timeLeft <= 3 ? 'bg-red-500 animate-pulse' : 'bg-green-500'
                  }`}></div>
                  <span className="font-mono font-bold">{timeLeft}s</span>
                </div>
              </div>
              <div className="mt-1 w-full bg-amber-200 rounded-full h-1">
                <div 
                  className="bg-amber-600 h-1 rounded-full transition-all duration-1000"
                  style={{ width: `${((10 - timeLeft) / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Contenedor principal */}
      <div 
        ref={containerRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{ 
          overflow: 'hidden',
          backgroundColor: 'transparent',
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
            transition: isTransitioning ? 'transform 0.8s ease-out' : 'none',
          }}
        >
          {/* Contenido que se mueve según el paneo */}
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: isTransitioning ? 'transform 0.8s ease-out' : 'none',
            }}
          >
            {/* SVG para conexiones de red neural */}
            <svg className="absolute top-0 left-0 w-full h-full" style={{ width: '2400px', height: '2400px', transform: 'translate(-1200px, -1200px)' }}>
              <defs>
                <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 0.2 }} />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Conexiones desde el centro a cada colaborador */}
              {allColaboradores.slice(1).map((colaborador) => {
                const coords = getCoordinates(colaborador.angle, colaborador.radius);
                const isActive = activeConnections.has(colaborador.id) || hoveredNode === colaborador.id;
                
                return (
                  <line
                    key={`connection-${colaborador.id}`}
                    x1={1200}
                    y1={1200}
                    x2={1200 + coords.x}
                    y2={1200 + coords.y}
                    stroke={isActive ? "#F59E0B" : "#FDE68A"}
                    strokeWidth={isActive ? "3" : "1"}
                    strokeOpacity={isActive ? "0.8" : "0.3"}
                    strokeDasharray={isActive ? "none" : "5,5"}
                    filter={isActive ? "url(#glow)" : "none"}
                    className="transition-all duration-300"
                  />
                );
              })}
              
              {/* Círculo central */}
              <circle
                cx={1200}
                cy={1200}
                r="50"
                fill="url(#centerGradient)"
                stroke="#F59E0B"
                strokeWidth="3"
                filter="url(#glow)"
              />
            </svg>

            {/* Nodos de colaboradores dispuestos en red circular */}
            {Object.entries(colaboradoresData).map(([key, grupo]) =>
              grupo.miembros.map((colaborador) => {
                const coords = getCoordinates(colaborador.angle, colaborador.radius);
                const isSelected = selectedColaborador && selectedColaborador.id === colaborador.id;
                const isHovered = hoveredNode === colaborador.id;
                const isCentral = colaborador.id === 1; // Dr. Marcelino en el centro
                
                return (
                  <div 
                    key={colaborador.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl ${
                      isSelected ? 'ring-4 ring-amber-500 ring-opacity-70 z-20 scale-125' : 'z-10'
                    }`}
                    style={{ 
                      left: isCentral ? '0px' : `${coords.x}px`, 
                      top: isCentral ? '0px' : `${coords.y}px`,
                      width: isCentral ? '120px' : (isSelected ? '160px' : '110px'),
                      height: isCentral ? '120px' : (isSelected ? '160px' : '110px'),
                      background: isCentral 
                        ? 'linear-gradient(135deg, #FEF3C7 0%, #F59E0B 50%, #D97706 100%)'
                        : isSelected 
                          ? 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)'
                          : 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
                      border: isCentral 
                        ? '4px solid #D97706'
                        : isSelected 
                          ? '3px solid #D97706' 
                          : '2px solid #F59E0B',
                      borderRadius: isCentral ? '60px' : '12px',
                      boxShadow: isCentral 
                        ? '0 0 30px rgba(217, 119, 6, 0.5), 0 8px 32px rgba(0,0,0,0.2)'
                        : isSelected 
                          ? '0 0 20px rgba(245, 158, 11, 0.4), 0 8px 24px rgba(0,0,0,0.15)'
                          : '0 4px 12px rgba(0,0,0,0.1)',
                      transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.1)' : ''} ${isCentral ? 'scale(1.2)' : ''}`,
                    }}
                    onClick={() => zoomToColaborador(colaborador)}
                    onMouseEnter={() => setHoveredNode(colaborador.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Indicador de pulso para el nodo central */}
                    {isCentral && (
                      <div className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping opacity-30"></div>
                    )}
                    
                    <div className="flex flex-col items-center justify-center h-full p-2">
                      <div className={`overflow-hidden border-3 border-amber-400 mb-2 shadow-md flex items-center justify-center ${
                        isCentral ? 'w-16 h-16' : isSelected ? 'w-14 h-14' : 'w-10 h-10'
                      }`} style={{ borderRadius: isCentral ? '32px' : '8px' }}>
                        {colaborador.imagen ? (
                          <img 
                            src={colaborador.imagen} 
                            alt={colaborador.nombre} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-amber-500 flex items-center justify-center">
                            <User size={isCentral ? 24 : isSelected ? 20 : 16} className="text-white" />
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        <div className={`font-bold text-amber-800 leading-tight ${
                          isCentral ? 'text-xs' : isSelected ? 'text-xs' : 'text-2xs'
                        }`}>
                          {isCentral || isSelected 
                            ? colaborador.nombre.length > 25 
                              ? colaborador.nombre.split(' ').slice(0, 3).join(' ')
                              : colaborador.nombre
                            : colaborador.nombre.split(' ').slice(0, 1)[0]
                          }
                        </div>
                        <div className={`text-amber-600 mt-1 font-medium ${
                          isCentral ? 'text-xs' : 'text-2xs'
                        }`}>
                          ({colaborador.iniciales})
                        </div>
                        {/* Indicador de nivel para nodos no centrales */}
                        {!isCentral && (
                          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center font-bold ${
                            grupo.nivel === 1 ? 'bg-orange-500' : 'bg-yellow-500'
                          }`}>
                            {grupo.nivel}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {/* Etiquetas de grupo en la periferia */}
            {Object.entries(colaboradoresData).map(([key, grupo]) => {
              if (key === 'direccion') return null; // Skip centro
              
              // Calcular posición promedio del grupo
              const avgAngle = grupo.miembros.reduce((sum, m) => sum + m.angle, 0) / grupo.miembros.length;
              const labelRadius = grupo.nivel === 1 ? 580 : 850;
              const labelCoords = getCoordinates(avgAngle, labelRadius);
              
              return (
                <div
                  key={`label-${key}`}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center bg-white/90 px-3 py-2 rounded-lg shadow-lg border border-amber-300"
                  style={{
                    left: `${labelCoords.x}px`,
                    top: `${labelCoords.y}px`,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    color: '#92400e',
                    maxWidth: '120px'
                  }}
                >
                  {grupo.titulo}
                  <div className="text-xs text-amber-600 mt-1">
                    Nivel {grupo.nivel} • {grupo.miembros.length} miembros
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colaboradores;