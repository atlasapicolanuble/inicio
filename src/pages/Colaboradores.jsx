import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, ArrowLeft, Play, Pause, Mail, ExternalLink, User } from 'lucide-react';

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

// Datos organizados por filas con información actualizada del documento
const colaboradoresData = {
  direccion: {
    titulo: "Equipo Proyecto",
    miembros: [
      {
        id: 1,
        nombre: "Dr. Marcelino Claret Merino",
        iniciales: "MCM",
        titulo: "Dr. Ciencias Ambientales",
        participacion: "Coordinador",
        imagen: fotosLocales[0], // image1.png
        contacto: {
          email: "",
          linkedin: "https://www.linkedin.com/in/marcelino-claret-merino-b8352224/"
        },
        posicion: { x: -375, y: -450 }
      },
      {
        id: 2,
        nombre: "Alejandra Henríquez Suazo",
        iniciales: "AHS",
        titulo: "Ing. Agrónomo",
        participacion: "Investigadora Principal",
        imagen: fotosLocales[1], // image2.png
        contacto: {
          email: "Alejandra.henriquezsu@gmail.com",
          linkedin: ""
        },
        posicion: { x: -225, y: -450 }
      },
      {
        id: 3,
        nombre: "Manuel Palacios",
        iniciales: "MP",
        titulo: "Ing. Agrónomo (E)",
        participacion: "Especialista en Campo",
        imagen: fotosLocales[2], // image3.png
        contacto: {
          email: "Manuel.palaciosm@gmail.com",
          linkedin: ""
        },
        posicion: { x: -75, y: -450 }
      },
      {
        id: 4,
        nombre: "Samuel Carrillo",
        iniciales: "SC",
        titulo: "Ing. Recursos Naturales (E) UBB",
        participacion: "Especialista en Recursos Naturales",
        imagen: fotosLocales[3], // image4.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 75, y: -450 }
      },
      {
        id: 5,
        nombre: "Edmundo Cárdenas",
        iniciales: "EC",
        titulo: "Ing. Agrónomo",
        participacion: "Especialista ANR",
        imagen: fotosLocales[4], // image5.png
        contacto: {
          email: "cardenas.edmundo@gmail.com",
          linkedin: ""
        },
        posicion: { x: 225, y: -450 }
      },
      {
        id: 6,
        nombre: "Oriana Oyarce",
        iniciales: "OO",
        titulo: "Apicultora ANR",
        participacion: "Especialista en Apicultura",
        imagen: fotosLocales[5], // image6.png
        contacto: {
          email: "oriana.oyarce@gmail.com",
          linkedin: ""
        },
        posicion: { x: 375, y: -450 }
      }
    ]
  },
  colaboradores_inia: {
    titulo: "Colaboradores INIA",
    miembros: [
      {
        id: 7,
        nombre: "Marcel Fuentes",
        iniciales: "MF",
        titulo: "Ing. Civil Agrícola, Mg. En Teledetección",
        participacion: "Especialista en Teledetección",
        imagen: fotosLocales[6], // image7.png
        contacto: {
          email: "Marcel.fuentes@inia.cl",
          linkedin: ""
        },
        posicion: { x: -225, y: -180 }
      },
      {
        id: 8,
        nombre: "Rubén Ruiz",
        iniciales: "RR",
        titulo: "Ing. Civil Agrícola",
        participacion: "Investigador INIA",
        imagen: fotosLocales[7], // image8.png
        contacto: {
          email: "reruiz@inia.cl",
          linkedin: ""
        },
        posicion: { x: -75, y: -180 }
      },
      {
        id: 9,
        nombre: "Stanley Best",
        iniciales: "SB",
        titulo: "Ing. Agrónomo, M. SC.",
        participacion: "Investigador Principal INIA",
        imagen: fotosLocales[8], // image9.png
        contacto: {
          email: "sbest@inia.cl",
          linkedin: ""
        },
        posicion: { x: 75, y: -180 }
      },
      {
        id: 10,
        nombre: "Raúl Orrego",
        iniciales: "RO",
        titulo: "Ing. En Recursos Naturales",
        participacion: "Especialista en Recursos Naturales",
        imagen: fotosLocales[9], // image10.png
        contacto: {
          email: "raul.orrego@inia.cl",
          linkedin: ""
        },
        posicion: { x: 225, y: -180 }
      }
    ]
  },
  colaboradores_externos: {
    titulo: "Colaboradores Otras Instituciones",
    miembros: [
      {
        id: 11,
        nombre: "Emanuel Canales",
        iniciales: "EC",
        titulo: "Asoc. Apicultura Natural Regenerativa",
        participacion: "Especialista en Apicultura Natural",
        imagen: fotosLocales[10], // image11.png
        contacto: {
          email: "contacto@apiculturanatural.com",
          linkedin: ""
        },
        posicion: { x: -300, y: 100 }
      },
      {
        id: 12,
        nombre: "Dr. Mauricio Rondanelli R.",
        iniciales: "MRR",
        titulo: "Biólogo. Dr. en Cs. Biológicas",
        participacion: "Palinólogo UDEC Campus LA",
        imagen: fotosLocales[11], // image12.png
        contacto: {
          email: "mrondane@udec.cl",
          linkedin: ""
        },
        posicion: { x: -150, y: 100 }
      },
      {
        id: 13,
        nombre: "Iván Lamas V.",
        iniciales: "ILV",
        titulo: "Ingeniero en Biotecnología Vegetal",
        participacion: "Lab. Palinología UDEC Campus LA",
        imagen: fotosLocales[12], // image13.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 0, y: 100 }
      },
      {
        id: 14,
        nombre: "Dr. Nicolás Villalobos",
        iniciales: "NV",
        titulo: "Doctor en Ciencias Biológicas área Botánica",
        participacion: "Especialista en Botánica",
        imagen: fotosLocales[13], // image14.png
        contacto: {
          email: "nvillalobo@ubiobio.cl",
          linkedin: ""
        },
        posicion: { x: 150, y: 100 }
      },
      {
        id: 15,
        nombre: "Pedro Vera",
        iniciales: "PV",
        titulo: "Ing. Informática (Es) Santo Tomás",
        participacion: "Desarrollador Atlas web",
        imagen: fotosLocales[14], // image15.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 300, y: 100 }
      }
    ]
  },
  practicantes_santo_tomas: {
    titulo: "Instituto Profesional Santo Tomás",
    miembros: [
      {
        id: 16,
        nombre: "Nicolás Castillo",
        iniciales: "NC",
        titulo: "Técnico Agrícola Santo Tomás",
        participacion: "Apoyo Técnico en Campo",
        imagen: fotosLocales[15], // image16.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: -600, y: 350 }
      },
      {
        id: 17,
        nombre: "Pablo Guzmán",
        iniciales: "PG",
        titulo: "Técnico Agrícola Santo Tomás",
        participacion: "Asistente de Campo",
        imagen: fotosLocales[16], // image17.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: -450, y: 350 }
      },
      {
        id: 18,
        nombre: "Scarlette San Martín",
        iniciales: "SSM",
        titulo: "Técnico Agrícola (Es) Santo Tomás",
        participacion: "Asistente de Laboratorio",
        imagen: fotosLocales[17], // image18.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: -300, y: 350 }
      },
      {
        id: 19,
        nombre: "Fernando Orozco",
        iniciales: "FO",
        titulo: "Técnico Agrícola (Es) Santo Tomás",
        participacion: "Asistente de Campo",
        imagen: fotosLocales[18], // image19.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: -150, y: 350 }
      },
      {
        id: 20,
        nombre: "Estefanía Sandoval",
        iniciales: "ES",
        titulo: "Técnico Agrícola (Es) Santo Tomás",
        participacion: "Asistente de Laboratorio",
        imagen: fotosLocales[19], // image20.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 0, y: 350 }
      }
    ]
  },
  practicantes_inacap: {
    titulo: "INACAP",
    miembros: [
      {
        id: 21,
        nombre: "Gabriela Martínez",
        iniciales: "GM",
        titulo: "Ing. Agrícola (Es) Inacap",
        participacion: "Apoyo en Análisis",
        imagen: fotosLocales[20], // image21.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 150, y: 350 }
      },
      {
        id: 22,
        nombre: "Felipe Ortíz",
        iniciales: "FO",
        titulo: "Técnico Agrícola (Es) Inacap",
        participacion: "Asistente de Campo",
        imagen: fotosLocales[21], // image22.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 300, y: 350 }
      }
    ]
  },
  practicantes_san_nicolas: {
    titulo: "Liceo Bicentenario San Nicolás",
    miembros: [
      {
        id: 23,
        nombre: "Octavio Belauzaran",
        iniciales: "OB",
        titulo: "Téc. En Química Industrial",
        participacion: "Liceo Bicentenario San Nicolás",
        imagen: fotosLocales[22], // image23.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 450, y: 350 }
      }
    ]
  },
  practicantes_udec: {
    titulo: "Universidad de Concepción",
    miembros: [
      {
        id: 24,
        nombre: "Valentín Aguilera",
        iniciales: "VA",
        titulo: "Agronomía (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[23], // image24.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: -525, y: 510 }
      },
      {
        id: 25,
        nombre: "Gonzalo Saavedra",
        iniciales: "GS",
        titulo: "Agronomía (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[24], // image25.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: -375, y: 510 }
      },
      {
        id: 26,
        nombre: "Carolina Aguirre",
        iniciales: "CA",
        titulo: "Agronomía (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[25], // image26.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: -225, y: 510 }
      },
      {
        id: 27,
        nombre: "Patricia Oyarce",
        iniciales: "PO",
        titulo: "Ing. Ambiental UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[26], // image27.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: -75, y: 510 }
      },
      {
        id: 28,
        nombre: "Pilar Batista",
        iniciales: "PB",
        titulo: "Ing. Ambiental UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[27], // image28.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 75, y: 510 }
      },
      {
        id: 29,
        nombre: "Alvaro Gatica",
        iniciales: "AG",
        titulo: "Ing. Ambiental UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[28], // image29.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 225, y: 510 }
      },
      {
        id: 30,
        nombre: "Matías Mellas",
        iniciales: "MM",
        titulo: "Agronomía UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[29], // image30.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 375, y: 510 }
      },
      {
        id: 31,
        nombre: "Catalina Orellana",
        iniciales: "CO",
        titulo: "Ing. Civil Industrial (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[30], // image31.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 525, y: 510 }
      }
    ]
  },
  practicantes_san_agustin: {
    titulo: "Centro de Formación Técnica San Agustín",
    miembros: [
      {
        id: 32,
        nombre: "Javier Machuca",
        iniciales: "JM",
        titulo: "(Es) Tec. Agrícola Nivel Superior",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[31], // image32.png
        contacto: {
          email: "",
          linkedin: ""
        },
        posicion: { x: 600, y: 350 }
      }
    ]
  }
};

const Colaboradores = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.5);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedColaborador, setSelectedColaborador] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  
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
    
    const zoomDuration = 600;
    
    setScale(0.5);
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
    if (scale > 0.3) setScale(scale - 0.2);
  };

  const handleReset = () => {
    stopAutoRotation();
    if (initialTimerRef.current) clearTimeout(initialTimerRef.current);
    if (initialCountdownRef.current) clearInterval(initialCountdownRef.current);
    setScale(0.5);
    setPosition({ x: 0, y: 0 });
    setSelectedColaborador(null);
    setHasAutoStarted(false);
    setInitialCountdown(15);
    setIsInitialPaused(false);
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
    <div className="relative h-full w-full bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      {/* Título y controles */}
      <div className="absolute top-4 left-4 z-20 bg-white/95 p-4 rounded-xl shadow-xl backdrop-blur-sm border border-amber-200">
        <h2 className="text-2xl font-bold text-amber-800 mb-2">Atlas de Abejas Chile</h2>
        <p className="text-sm text-gray-600 mb-4">
          Equipo de Investigación - Estructura Organizacional
        </p>
        
        {/* Countdown inicial cuando no ha empezado automáticamente */}
        {!hasAutoStarted && !selectedColaborador && (
          <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-amber-700">
                {isInitialPaused ? "Recorrido pausado" : "Iniciando recorrido automático"}
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
                aria-label="Volver"
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

      {/* Información del colaborador seleccionado */}
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
                <div className="w-full h-full bg-red-500 flex items-center justify-center">
                  <User size={28} className="text-white" />
                </div>
              )}
              {/* Fallback div que se muestra si la imagen falla al cargar */}
              <div className="w-full h-full bg-red-500 flex items-center justify-center" style={{ display: 'none' }}>
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
                <span>Siguiente cambio en:</span>
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
            <svg className="absolute top-0 left-0 w-full h-full" style={{ width: '5000px', height: '4000px', transform: 'translate(-2500px, -2000px)' }}>
              {connections.map((connection, index) => (
                <line 
                  key={`connection-${index}`}
                  x1={2500 + connection.from.posicion.x} 
                  y1={2000 + connection.from.posicion.y} 
                  x2={2500 + connection.to.posicion.x} 
                  y2={2000 + connection.to.posicion.y}
                  stroke="#F59E0B"
                  strokeWidth="3"
                  strokeOpacity="0.6"
                  strokeDasharray="5,5"
                />
              ))}
            </svg>
            
            {/* Títulos principales centrados */}
            {Object.entries(colaboradoresData).map(([key, grupo]) => {
              if (key.startsWith('practicantes_')) return null; // Skip subtítulos aquí
              
              // Para "Equipo Proyecto", centrado en la fila superior
              if (key === 'direccion') {
                return (
                  <div 
                    key={`titulo-${key}`}
                    className="absolute text-center font-bold text-amber-800 text-xl bg-white/95 px-6 py-3 rounded-xl shadow-lg border border-amber-200" 
                    style={{ 
                      left: '0px', 
                      top: '-580px',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {grupo.titulo}
                  </div>
                );
              }
              
              // Para "Colaboradores INIA", centrado en su fila
              if (key === 'colaboradores_inia') {
                return (
                  <div 
                    key={`titulo-${key}`}
                    className="absolute text-center font-bold text-amber-800 text-xl bg-white/95 px-6 py-3 rounded-xl shadow-lg border border-amber-200" 
                    style={{ 
                      left: '0px', 
                      top: '-320px',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {grupo.titulo}
                  </div>
                );
              }
              
              // Para "Colaboradores Otras Instituciones", centrado en su fila
              if (key === 'colaboradores_externos') {
                return (
                  <div 
                    key={`titulo-${key}`}
                    className="absolute text-center font-bold text-amber-800 text-xl bg-white/95 px-6 py-3 rounded-xl shadow-lg border border-amber-200" 
                    style={{ 
                      left: '0px', 
                      top: '-40px',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {grupo.titulo}
                  </div>
                );
              }
              
              return null;
            })}
            
            {/* Título general para Colaboradores en Práctica */}
            <div 
              className="absolute text-center font-bold text-amber-800 text-xl bg-white/95 px-6 py-3 rounded-xl shadow-lg border border-amber-200" 
              style={{ 
                left: '0px', 
                top: '230px',
                transform: 'translate(-50%, -50%)'
              }}
            >
              Colaboradores en Práctica
            </div>
            
            {/* Nodos de colaboradores */}
            {Object.entries(colaboradoresData).map(([key, grupo]) =>
              grupo.miembros.map((colaborador) => (
                <div 
                  key={colaborador.id}
                  className={`absolute shadow-xl transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
                    selectedColaborador && selectedColaborador.id === colaborador.id ? 'ring-4 ring-amber-500 ring-opacity-70 z-20 scale-110' : 'z-10'
                  }`}
                  style={{ 
                    left: `${colaborador.posicion.x}px`, 
                    top: `${colaborador.posicion.y}px`,
                    width: selectedColaborador && selectedColaborador.id === colaborador.id ? '180px' : '140px',
                    height: selectedColaborador && selectedColaborador.id === colaborador.id ? '160px' : '140px',
                    background: selectedColaborador && selectedColaborador.id === colaborador.id 
                      ? 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)'
                      : 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
                    border: selectedColaborador && selectedColaborador.id === colaborador.id 
                      ? '3px solid #D97706' 
                      : '2px solid #F59E0B',
                    borderRadius: '16px',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                  onClick={() => zoomToColaborador(colaborador)}
                >
                  <div className="flex flex-col items-center justify-center h-full p-3">
                    <div className={`overflow-hidden border-3 border-amber-400 mb-3 shadow-md flex items-center justify-center ${
                      selectedColaborador && selectedColaborador.id === colaborador.id ? 'w-18 h-18' : 'w-14 h-14'
                    }`} style={{ borderRadius: '12px' }}>
                      {colaborador.imagen ? (
                        <img 
                          src={colaborador.imagen} 
                          alt={colaborador.nombre} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-red-500 flex items-center justify-center">
                          <User size={selectedColaborador && selectedColaborador.id === colaborador.id ? 32 : 24} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="text-center">
                      <div className={`font-bold text-amber-800 leading-tight ${
                        selectedColaborador && selectedColaborador.id === colaborador.id ? 'text-sm' : 'text-xs'
                      }`}>
                        {selectedColaborador && selectedColaborador.id === colaborador.id 
                          ? colaborador.nombre.length > 25 
                            ? colaborador.nombre.split(' ').slice(0, 3).join(' ')
                            : colaborador.nombre
                          : colaborador.nombre.split(' ').slice(0, 2).join(' ')
                        }
                      </div>
                      {!selectedColaborador && (
                        <div className="text-xs text-amber-600 mt-1 font-medium">
                          ({colaborador.iniciales})
                        </div>
                      )}
                      {selectedColaborador && selectedColaborador.id === colaborador.id && (
                        <div className="text-xs text-amber-700 mt-1 font-medium">
                          {colaborador.iniciales}
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