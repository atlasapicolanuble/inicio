import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, ArrowLeft, Play, Pause, Mail, ExternalLink, User, Clock, Award, Building, BookOpen, Briefcase, Star } from 'lucide-react';

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

// Datos organizados en timeline vertical con diferentes categorías
const colaboradoresData = {
  direccion: {
    titulo: "Dirección y Coordinación",
    descripcion: "Equipo directivo y coordinadores del proyecto",
    color: "#FFD700", // Oro
    icon: Award,
    nivel: 1,
    posicionY: 0,
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
        lado: "left",
        offsetY: 0
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
        lado: "right",
        offsetY: 100
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
        lado: "left",
        offsetY: 200
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
        lado: "right",
        offsetY: 300
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
        lado: "left",
        offsetY: 400
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
        lado: "right",
        offsetY: 500
      }
    ]
  },
  colaboradores_inia: {
    titulo: "Colaboradores INIA",
    descripcion: "Instituto de Investigaciones Agropecuarias",
    color: "#FFA500", // Naranja dorado
    icon: Building,
    nivel: 2,
    posicionY: 700,
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
        lado: "left",
        offsetY: 0
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
        lado: "right",
        offsetY: 100
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
        lado: "left",
        offsetY: 200
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
        lado: "right",
        offsetY: 300
      }
    ]
  },
  colaboradores_externos: {
    titulo: "Colaboradores Otras Instituciones",
    descripcion: "Especialistas de universidades y organizaciones externas",
    color: "#F4D03F", // Amarillo dorado
    icon: Briefcase,
    nivel: 2,
    posicionY: 1200,
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
        lado: "left",
        offsetY: 0
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
        lado: "right",
        offsetY: 100
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
        lado: "left",
        offsetY: 200
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
        lado: "right",
        offsetY: 300
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
        lado: "left",
        offsetY: 400
      }
    ]
  },
  practicantes_profesionales: {
    titulo: "Colaboradores en Formación Profesional",
    descripcion: "Instituto Santo Tomás, INACAP y otros centros de formación",
    color: "#FFEB3B", // Amarillo brillante
    icon: BookOpen,
    nivel: 3,
    posicionY: 1800,
    miembros: [
      // Santo Tomás
      {
        id: 16,
        nombre: "Nicolás Castillo",
        iniciales: "NC",
        titulo: "Técnico Agrícola Santo Tomás",
        participacion: "Apoyo Técnico en Campo",
        imagen: fotosLocales[15],
        contacto: { email: "", linkedin: "" },
        lado: "left",
        offsetY: 0
      },
      {
        id: 17,
        nombre: "Pablo Guzmán",
        iniciales: "PG",
        titulo: "Técnico Agrícola Santo Tomás",
        participacion: "Asistente de Campo",
        imagen: fotosLocales[16],
        contacto: { email: "", linkedin: "" },
        lado: "right",
        offsetY: 100
      },
      {
        id: 18,
        nombre: "Scarlette San Martín",
        iniciales: "SSM",
        titulo: "Técnico Agrícola (Es) Santo Tomás",
        participacion: "Asistente de Laboratorio",
        imagen: fotosLocales[17],
        contacto: { email: "", linkedin: "" },
        lado: "left",
        offsetY: 200
      },
      {
        id: 19,
        nombre: "Fernando Orozco",
        iniciales: "FO",
        titulo: "Técnico Agrícola (Es) Santo Tomás",
        participacion: "Asistente de Campo",
        imagen: fotosLocales[18],
        contacto: { email: "", linkedin: "" },
        lado: "right",
        offsetY: 300
      },
      {
        id: 20,
        nombre: "Estefanía Sandoval",
        iniciales: "ES",
        titulo: "Técnico Agrícola (Es) Santo Tomás",
        participacion: "Asistente de Laboratorio",
        imagen: fotosLocales[19],
        contacto: { email: "", linkedin: "" },
        lado: "left",
        offsetY: 400
      },
      // INACAP
      {
        id: 21,
        nombre: "Gabriela Martínez",
        iniciales: "GM",
        titulo: "Ing. Agrícola (Es) Inacap",
        participacion: "Apoyo en Análisis",
        imagen: fotosLocales[20],
        contacto: { email: "", linkedin: "" },
        lado: "right",
        offsetY: 500
      },
      {
        id: 22,
        nombre: "Felipe Ortíz",
        iniciales: "FO",
        titulo: "Técnico Agrícola (Es) Inacap",
        participacion: "Asistente de Campo",
        imagen: fotosLocales[21],
        contacto: { email: "", linkedin: "" },
        lado: "left",
        offsetY: 600
      },
      // San Nicolás
      {
        id: 23,
        nombre: "Octavio Belauzaran",
        iniciales: "OB",
        titulo: "Téc. En Química Industrial",
        participacion: "Liceo Bicentenario San Nicolás",
        imagen: fotosLocales[22],
        contacto: { email: "", linkedin: "" },
        lado: "right",
        offsetY: 700
      },
      // San Agustín
      {
        id: 32,
        nombre: "Javier Machuca",
        iniciales: "JM",
        titulo: "(Es) Tec. Agrícola Nivel Superior",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[31],
        contacto: { email: "", linkedin: "" },
        lado: "left",
        offsetY: 800
      }
    ]
  },
  practicantes_universitarios: {
    titulo: "Estudiantes Universitarios",
    descripcion: "Universidad de Concepción - Estudiantes en práctica",
    color: "#FFF176", // Amarillo claro
    icon: Star,
    nivel: 3,
    posicionY: 2800,
    miembros: [
      {
        id: 24,
        nombre: "Valentín Aguilera",
        iniciales: "VA",
        titulo: "Agronomía (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[23],
        contacto: { email: "", linkedin: "" },
        lado: "left",
        offsetY: 0
      },
      {
        id: 25,
        nombre: "Gonzalo Saavedra",
        iniciales: "GS",
        titulo: "Agronomía (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[24],
        contacto: { email: "", linkedin: "" },
        lado: "right",
        offsetY: 100
      },
      {
        id: 26,
        nombre: "Carolina Aguirre",
        iniciales: "CA",
        titulo: "Agronomía (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[25],
        contacto: { email: "", linkedin: "" },
        lado: "left",
        offsetY: 200
      },
      {
        id: 27,
        nombre: "Patricia Oyarce",
        iniciales: "PO",
        titulo: "Ing. Ambiental UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[26],
        contacto: { email: "", linkedin: "" },
        lado: "right",
        offsetY: 300
      },
      {
        id: 28,
        nombre: "Pilar Batista",
        iniciales: "PB",
        titulo: "Ing. Ambiental UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[27],
        contacto: { email: "", linkedin: "" },
        lado: "left",
        offsetY: 400
      },
      {
        id: 29,
        nombre: "Alvaro Gatica",
        iniciales: "AG",
        titulo: "Ing. Ambiental UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[28],
        contacto: { email: "", linkedin: "" },
        lado: "right",
        offsetY: 500
      },
      {
        id: 30,
        nombre: "Matías Mellas",
        iniciales: "MM",
        titulo: "Agronomía UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[29],
        contacto: { email: "", linkedin: "" },
        lado: "left",
        offsetY: 600
      },
      {
        id: 31,
        nombre: "Catalina Orellana",
        iniciales: "CO",
        titulo: "Ing. Civil Industrial (Es) UDEC",
        participacion: "Estudiante en Práctica",
        imagen: fotosLocales[30],
        contacto: { email: "", linkedin: "" },
        lado: "right",
        offsetY: 700
      }
    ]
  }
};

const Colaboradores = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.6);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [selectedColaborador, setSelectedColaborador] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  
  // Estados para efectos visuales
  const [hoveredNode, setHoveredNode] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  
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
    
    // Encontrar el grupo del colaborador para calcular posición
    let grupoInfo = null;
    Object.entries(colaboradoresData).forEach(([key, grupo]) => {
      if (grupo.miembros.some(m => m.id === colaborador.id)) {
        grupoInfo = grupo;
      }
    });
    
    if (grupoInfo) {
      const totalY = grupoInfo.posicionY + colaborador.offsetY;
      const targetPosition = { 
        x: colaborador.lado === 'left' ? 200 : -200, 
        y: -totalY + 300
      };
      
      setScale(1.2);
      setPosition(targetPosition);
      setActiveSection(grupoInfo.titulo);
    }
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
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
    setActiveSection(null);
    
    // Detener rotación automática
    stopAutoRotation();
    
    setScale(0.6);
    setPosition({ x: 0, y: 0 });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Controles de zoom
  const handleZoomIn = () => {
    if (scale < 2) setScale(scale + 0.2);
  };

  const handleZoomOut = () => {
    if (scale > 0.3) setScale(scale - 0.2);
  };

  const handleReset = () => {
    stopAutoRotation();
    if (initialTimerRef.current) clearTimeout(initialTimerRef.current);
    if (initialCountdownRef.current) clearInterval(initialCountdownRef.current);
    setScale(0.6);
    setPosition({ x: 0, y: 0 });
    setSelectedColaborador(null);
    setHasAutoStarted(false);
    setInitialCountdown(15);
    setIsInitialPaused(false);
    setActiveSection(null);
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
    <div className="relative h-full w-full bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Efectos de fondo dorados */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-500"></div>
      </div>

      {/* Panel de control elegante */}
      <div className="absolute top-6 left-6 z-30 bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-yellow-400/30">
        <div className="flex items-center mb-4">
          <Clock size={28} className="text-yellow-400 mr-3" />
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Timeline Atlas de Abejas
            </h2>
            <p className="text-gray-300 text-sm">Cronograma de Colaboración • {allColaboradores.length} Miembros</p>
          </div>
        </div>
        
        {/* Indicadores de nivel con iconos */}
        <div className="grid grid-cols-1 gap-2 mb-4 text-xs">
          {Object.entries(colaboradoresData).map(([key, grupo]) => {
            const IconComponent = grupo.icon;
            return (
              <div key={key} className="flex items-center bg-white/5 p-2 rounded-lg border border-white/10">
                <IconComponent size={16} className="mr-2" style={{ color: grupo.color }} />
                <span className="text-white font-medium text-xs">{grupo.titulo}</span>
                <span className="ml-auto text-gray-400 text-xs">{grupo.miembros.length}</span>
              </div>
            );
          })}
        </div>
        
        {/* Countdown inicial */}
        {!hasAutoStarted && !selectedColaborador && (
          <div className="mb-4 p-4 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl border border-yellow-400/30">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-yellow-300 font-medium flex items-center">
                <Clock size={14} className="mr-2" />
                {isInitialPaused ? "Timeline pausado" : "Iniciando recorrido temporal"}
              </span>
              <button
                onClick={toggleInitialCountdown}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isInitialPaused 
                    ? 'bg-green-600 hover:bg-green-500 shadow-lg shadow-green-500/25' 
                    : 'bg-yellow-600 hover:bg-yellow-500 shadow-lg shadow-yellow-500/25'
                }`}
                aria-label={isInitialPaused ? "Reanudar countdown" : "Pausar countdown"}
              >
                {isInitialPaused ? <Play size={14} className="text-white" /> : <Pause size={14} className="text-white" />}
              </button>
            </div>
            {!isInitialPaused && (
              <>
                <div className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  {initialCountdown}s
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-amber-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${((15 - initialCountdown) / 15) * 100}%` }}
                  ></div>
                </div>
              </>
            )}
          </div>
        )}
        
        {/* Controles */}
        <div className="flex flex-wrap gap-2">
          {selectedColaborador ? (
            <>
              <button 
                onClick={handleBack}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-lg transition-all duration-300 text-white shadow-lg transform hover:scale-105"
                aria-label="Volver al timeline"
              >
                <ArrowLeft size={16} className="mr-2" />
                Timeline
              </button>
              <button 
                onClick={toggleAutoRotation}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 text-white shadow-lg transform hover:scale-105 ${
                  isAutoRotating 
                    ? 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400' 
                    : 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400'
                }`}
                aria-label={isAutoRotating ? "Pausar rotación" : "Iniciar rotación"}
              >
                {isAutoRotating ? <Pause size={16} className="mr-2" /> : <Play size={16} className="mr-2" />}
                {isAutoRotating ? "Pausar" : "Auto"}
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={handleZoomIn}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-yellow-400/30 transform hover:scale-110"
                aria-label="Acercar"
              >
                <ZoomIn size={18} className="text-yellow-400" />
              </button>
              <button 
                onClick={handleZoomOut}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-yellow-400/30 transform hover:scale-110"
                aria-label="Alejar"
              >
                <ZoomOut size={18} className="text-yellow-400" />
              </button>
              <button 
                onClick={handleReset}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-yellow-400/30 transform hover:scale-110"
                aria-label="Reiniciar"
              >
                <RotateCcw size={18} className="text-yellow-400" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Panel de información del colaborador seleccionado */}
      {selectedColaborador && (
        <div className="absolute top-6 right-6 z-30 bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl max-w-sm border border-yellow-400/30">
          <div className="flex items-center mb-4">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden mr-4 shadow-2xl border-2 border-yellow-400">
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
              <div className={`fallback-avatar w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-400 to-amber-500 ${selectedColaborador.imagen ? 'hidden' : 'flex'}`}>
                <User size={32} className="text-black" />
              </div>
              {/* Indicador activo */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg leading-tight mb-1">
                {selectedColaborador.nombre}
              </h3>
              <div className="flex items-center">
                <span className="text-sm font-mono font-bold px-2 py-1 rounded-md bg-yellow-400 text-black">
                  {selectedColaborador.iniciales}
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-lg border border-blue-400/30">
              <p className="text-blue-300 font-semibold mb-1">Título Profesional</p>
              <p className="text-white">{selectedColaborador.titulo}</p>
            </div>
            <div className="p-3 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-lg border border-green-400/30">
              <p className="text-green-300 font-semibold mb-1">Rol en el Proyecto</p>
              <p className="text-white">{selectedColaborador.participacion}</p>
            </div>
          </div>
          
          {/* Sección de contacto */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
              <Mail size={14} className="mr-2" />
              Contacto
            </p>
            <div className="flex space-x-2">
              {selectedColaborador.contacto?.email && (
                <button
                  onClick={() => window.open(`mailto:${selectedColaborador.contacto.email}`, '_blank')}
                  className="flex items-center justify-center p-3 bg-blue-600/20 hover:bg-blue-500/30 rounded-lg transition-all duration-300 border border-blue-500/30 transform hover:scale-110"
                  title="Enviar email"
                >
                  <Mail size={16} className="text-blue-400" />
                </button>
              )}
              {selectedColaborador.contacto?.linkedin && (
                <button
                  onClick={() => window.open(selectedColaborador.contacto.linkedin, '_blank')}
                  className="flex items-center justify-center p-3 bg-blue-600/20 hover:bg-blue-500/30 rounded-lg transition-all duration-300 border border-blue-500/30 transform hover:scale-110"
                  title="Ver perfil de LinkedIn"
                >
                  <ExternalLink size={16} className="text-blue-400" />
                </button>
              )}
              {!selectedColaborador.contacto?.email && !selectedColaborador.contacto?.linkedin && (
                <span className="text-xs text-gray-500 italic p-2">Sin contacto disponible</span>
              )}
            </div>
          </div>
          
          {/* Contador de tiempo */}
          {isAutoRotating && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-300 flex items-center">
                  <Clock size={14} className="mr-2 text-yellow-400" />
                  Siguiente en:
                </span>
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    timeLeft <= 3 ? 'bg-red-500 animate-ping' : 'bg-green-500 animate-pulse'
                  }`}></div>
                  <span className="font-mono font-bold text-white">{timeLeft}s</span>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    timeLeft <= 3 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500' 
                      : 'bg-gradient-to-r from-green-500 to-yellow-500'
                  }`}
                  style={{ width: `${((10 - timeLeft) / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Contenedor principal del timeline */}
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
            transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
          }}
        >
          {/* Contenido que se mueve según el paneo */}
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: isTransitioning ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none',
            }}
          >
            {/* Línea central del timeline */}
            <div 
              className="absolute bg-gradient-to-b from-yellow-400 via-amber-400 to-yellow-300 shadow-lg"
              style={{
                left: '0px',
                top: '-100px',
                width: '6px',
                height: '4000px',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
              }}
            />

            {/* Secciones del timeline */}
            {Object.entries(colaboradoresData).map(([key, grupo]) => {
              const IconComponent = grupo.icon;
              const isActiveGroup = activeSection === grupo.titulo;
              
              return (
                <div key={key}>
                  {/* Encabezado de sección */}
                  <div 
                    className={`absolute flex items-center p-4 rounded-2xl shadow-xl transition-all duration-500 ${
                      isActiveGroup ? 'scale-110 shadow-2xl' : ''
                    }`}
                    style={{
                      left: '60px',
                      top: `${grupo.posicionY - 50}px`,
                      background: `linear-gradient(135deg, ${grupo.color}20, ${grupo.color}40)`,
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${grupo.color}`,
                      minWidth: '350px'
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-lg"
                      style={{ backgroundColor: grupo.color }}
                    >
                      <IconComponent size={24} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{grupo.titulo}</h3>
                      <p className="text-gray-300 text-sm">{grupo.descripcion}</p>
                      <p className="text-xs mt-1" style={{ color: grupo.color }}>
                        {grupo.miembros.length} miembros
                      </p>
                    </div>
                  </div>

                  {/* Punto de conexión en la línea timeline */}
                  <div 
                    className="absolute w-6 h-6 rounded-full border-4 border-black shadow-lg"
                    style={{
                      left: '-12px',
                      top: `${grupo.posicionY - 12}px`,
                      backgroundColor: grupo.color,
                      boxShadow: `0 0 15px ${grupo.color}`,
                      transform: 'translateX(-50%)'
                    }}
                  />

                  {/* Miembros del grupo */}
                  {grupo.miembros.map((colaborador) => {
                    const totalY = grupo.posicionY + colaborador.offsetY + 100;
                    const xPosition = colaborador.lado === 'left' ? -400 : 400;
                    const isSelected = selectedColaborador && selectedColaborador.id === colaborador.id;
                    const isHovered = hoveredNode === colaborador.id;
                    
                    return (
                      <div key={colaborador.id}>
                        {/* Línea de conexión al timeline */}
                        <div 
                          className="absolute bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                          style={{
                            left: colaborador.lado === 'left' ? '-300px' : '0px',
                            top: `${totalY + 40}px`,
                            width: '300px',
                            height: '2px'
                          }}
                        />
                        
                        {/* Tarjeta del colaborador */}
                        <div 
                          className={`absolute transform transition-all duration-500 cursor-pointer ${
                            isSelected ? 'scale-110 z-30' : isHovered ? 'scale-105 z-20' : 'z-10'
                          }`}
                          style={{ 
                            left: `${xPosition}px`, 
                            top: `${totalY}px`,
                            width: '280px',
                            height: isSelected ? '140px' : '120px',
                            transform: `translateX(-50%) ${isSelected ? 'scale(1.1)' : isHovered ? 'scale(1.05)' : 'scale(1)'}`,
                          }}
                          onClick={() => zoomToColaborador(colaborador)}
                          onMouseEnter={() => setHoveredNode(colaborador.id)}
                          onMouseLeave={() => setHoveredNode(null)}
                        >
                          <div 
                            className={`w-full h-full p-4 rounded-xl shadow-xl transition-all duration-500 ${
                              isSelected ? 'shadow-2xl' : ''
                            }`}
                            style={{
                              background: isSelected 
                                ? `linear-gradient(135deg, ${grupo.color}40, ${grupo.color}60, #ffffff20)`
                                : `linear-gradient(135deg, ${grupo.color}20, ${grupo.color}30)`,
                              backdropFilter: 'blur(15px)',
                              border: isSelected ? `3px solid ${grupo.color}` : `2px solid ${grupo.color}60`,
                              boxShadow: isSelected 
                                ? `0 20px 40px ${grupo.color}30, 0 0 30px ${grupo.color}40`
                                : `0 10px 20px ${grupo.color}20`
                            }}
                          >
                            <div className="flex items-center h-full">
                              {/* Avatar */}
                              <div 
                                className="w-16 h-16 rounded-xl overflow-hidden mr-4 border-2 shadow-lg flex items-center justify-center"
                                style={{ borderColor: grupo.color }}
                              >
                                {colaborador.imagen ? (
                                  <img 
                                    src={colaborador.imagen} 
                                    alt={colaborador.nombre} 
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div 
                                    className="w-full h-full flex items-center justify-center"
                                    style={{ background: `linear-gradient(135deg, ${grupo.color}, ${grupo.color}80)` }}
                                  >
                                    <User size={24} className="text-black" />
                                  </div>
                                )}
                              </div>
                              
                              {/* Info */}
                              <div className="flex-1">
                                <h4 className="font-bold text-white text-sm leading-tight mb-1">
                                  {colaborador.nombre.split(' ').slice(0, 2).join(' ')}
                                </h4>
                                <div 
                                  className="text-xs font-mono font-bold px-2 py-1 rounded-md mb-2"
                                  style={{ backgroundColor: grupo.color, color: 'black' }}
                                >
                                  {colaborador.iniciales}
                                </div>
                                <p className="text-xs text-gray-300 leading-tight">
                                  {colaborador.participacion}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Punto de conexión del colaborador */}
                        <div 
                          className="absolute w-3 h-3 rounded-full border-2 border-black"
                          style={{
                            left: colaborador.lado === 'left' ? '-6px' : '6px',
                            top: `${totalY + 40}px`,
                            backgroundColor: grupo.color,
                            transform: 'translateX(-50%)'
                          }}
                        />
                      </div>
                    );
                  })}
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