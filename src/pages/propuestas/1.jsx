import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, ArrowLeft, Play, Pause, Mail, ExternalLink, User, Users, Eye, Star, Zap } from 'lucide-react';

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

// Datos de colaboradores (mantengo exactamente la misma información)
const colaboradoresData = {
  direccion: {
    titulo: "Equipo Proyecto",
    color: "#FF6B6B", // Rojo vibrante
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
        posicion: { x: -375, y: -450 }
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
        posicion: { x: -225, y: -450 }
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
        posicion: { x: -75, y: -450 }
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
        posicion: { x: 75, y: -450 }
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
        posicion: { x: 225, y: -450 }
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
        posicion: { x: 375, y: -450 }
      }
    ]
  },
  colaboradores_inia: {
    titulo: "Colaboradores INIA",
    color: "#4ECDC4", // Turquesa vibrante
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
        posicion: { x: -225, y: -180 }
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
        posicion: { x: -75, y: -180 }
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
        posicion: { x: 75, y: -180 }
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
        posicion: { x: 225, y: -180 }
      }
    ]
  },
  colaboradores_externos: {
    titulo: "Colaboradores Otras Instituciones",
    color: "#45B7D1", // Azul vibrante
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
        posicion: { x: -300, y: 100 }
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
        posicion: { x: -150, y: 100 }
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
        posicion: { x: 0, y: 100 }
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
        posicion: { x: 150, y: 100 }
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
        posicion: { x: 300, y: 100 }
      }
    ]
  },
  practicantes_santo_tomas: {
    titulo: "Instituto Profesional Santo Tomás",
    color: "#FD79A8", // Rosa vibrante
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
        posicion: { x: -600, y: 350 }
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
        posicion: { x: -450, y: 350 }
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
        posicion: { x: -300, y: 350 }
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
        posicion: { x: -150, y: 350 }
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
        posicion: { x: 0, y: 350 }
      }
    ]
  },
  practicantes_inacap: {
    titulo: "INACAP",
    color: "#A29BFE", // Púrpura vibrante
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
        posicion: { x: 150, y: 350 }
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
        posicion: { x: 300, y: 350 }
      }
    ]
  },
  practicantes_san_nicolas: {
    titulo: "Liceo Bicentenario San Nicolás",
    color: "#FDCB6E", // Amarillo vibrante
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
        posicion: { x: 450, y: 350 }
      }
    ]
  },
  practicantes_udec: {
    titulo: "Universidad de Concepción",
    color: "#6C5CE7", // Violeta vibrante
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
        posicion: { x: -525, y: 510 }
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
        posicion: { x: -375, y: 510 }
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
        posicion: { x: -225, y: 510 }
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
        posicion: { x: -75, y: 510 }
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
        posicion: { x: 75, y: 510 }
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
        posicion: { x: 225, y: 510 }
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
        posicion: { x: 375, y: 510 }
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
        posicion: { x: 525, y: 510 }
      }
    ]
  },
  practicantes_san_agustin: {
    titulo: "Centro de Formación Técnica San Agustín",
    color: "#E17055", // Naranja vibrante
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
  
  // Estados para efectos visuales
  const [particles, setParticles] = useState([]);
  const [pulseNodes, setPulseNodes] = useState(new Set());
  const [hoveredNode, setHoveredNode] = useState(null);
  
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

  // Generar partículas flotantes
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 1500 - 750,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 0.5 + 0.2,
        color: ['#FFD93D', '#6BCF7F', '#4D96FF', '#FF6B6B', '#A8E6CF'][Math.floor(Math.random() * 5)]
      }));
      setParticles(newParticles);
    };

    generateParticles();
    
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed,
        x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.5
      })).filter(p => p.y > -800).concat(
        Math.random() < 0.1 ? [{
          id: Date.now(),
          x: Math.random() * 2000 - 1000,
          y: 800,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.5 + 0.2,
          color: ['#FFD93D', '#6BCF7F', '#4D96FF', '#FF6B6B', '#A8E6CF'][Math.floor(Math.random() * 5)]
        }] : []
      ));
    };

    const particleInterval = setInterval(animateParticles, 50);
    return () => clearInterval(particleInterval);
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
    
    const zoomDuration = 800;
    const targetScale = 1.8;
    
    const targetPosition = { 
      x: -colaborador.posicion.x * 0.8, 
      y: -colaborador.posicion.y * 0.8 
    };
    
    setScale(targetScale);
    setPosition(targetPosition);
    
    // Efectos visuales al hacer zoom
    setPulseNodes(new Set([colaborador.id]));
    setTimeout(() => setPulseNodes(new Set()), 2000);
    
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
    setPulseNodes(new Set());
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

  // Función para generar conexiones dinámicas
  const generateDynamicConnections = () => {
    const connections = [];
    
    Object.entries(colaboradoresData).forEach(([key, grupo]) => {
      const miembros = grupo.miembros;
      for (let i = 0; i < miembros.length - 1; i++) {
        connections.push({
          from: miembros[i],
          to: miembros[i + 1],
          type: 'row',
          color: grupo.color
        });
      }
    });
    
    return connections;
  };

  const connections = generateDynamicConnections();

  // Función para obtener el grupo de un colaborador
  const getGrupoColor = (colaboradorId) => {
    for (const [key, grupo] of Object.entries(colaboradoresData)) {
      if (grupo.miembros.some(m => m.id === colaboradorId)) {
        return grupo.color;
      }
    }
    return '#FFD93D';
  };

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      {/* Fondo animado con gradiente dinámico */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-60 animate-pulse"
            style={{
              left: `${50 + (particle.x / 20)}%`,
              top: `${50 + (particle.y / 15)}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              transform: `translate(-50%, -50%)`,
              transition: 'all 0.05s ease-out'
            }}
          />
        ))}
      </div>

      {/* Panel de control modernizado */}
      <div className="absolute top-6 left-6 z-30 bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-6 rounded-2xl shadow-2xl backdrop-blur-lg border border-gray-700/50">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Atlas de Abejas Chile
          </h2>
        </div>
        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          🐝 Equipo de Investigación - Red de Colaboración Dinámica
        </p>
        
        {/* Estadísticas del equipo */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 p-3 rounded-lg border border-blue-500/30">
            <div className="flex items-center">
              <Users size={16} className="text-blue-400 mr-2" />
              <span className="text-sm text-blue-300">Total</span>
            </div>
            <div className="text-lg font-bold text-white">{allColaboradores.length}</div>
          </div>
          <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 p-3 rounded-lg border border-green-500/30">
            <div className="flex items-center">
              <Eye size={16} className="text-green-400 mr-2" />
              <span className="text-sm text-green-300">Activo</span>
            </div>
            <div className="text-lg font-bold text-white">
              {selectedColaborador ? selectedColaborador.iniciales : "Vista General"}
            </div>
          </div>
        </div>
        
        {/* Countdown inicial mejorado */}
        {!hasAutoStarted && !selectedColaborador && (
          <div className="mb-4 p-4 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Zap size={16} className="text-orange-400 mr-2 animate-pulse" />
                <span className="text-sm text-orange-300 font-medium">
                  {isInitialPaused ? "Recorrido pausado" : "Iniciando exploración"}
                </span>
              </div>
              <button
                onClick={toggleInitialCountdown}
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  isInitialPaused 
                    ? 'bg-green-600 hover:bg-green-500 shadow-lg shadow-green-500/25' 
                    : 'bg-orange-600 hover:bg-orange-500 shadow-lg shadow-orange-500/25'
                }`}
                aria-label={isInitialPaused ? "Reanudar countdown" : "Pausar countdown"}
              >
                {isInitialPaused ? <Play size={14} className="text-white" /> : <Pause size={14} className="text-white" />}
              </button>
            </div>
            {!isInitialPaused && (
              <>
                <div className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  {initialCountdown}s
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 shadow-lg"
                    style={{ width: `${((15 - initialCountdown) / 15) * 100}%` }}
                  ></div>
                </div>
              </>
            )}
          </div>
        )}
        
        {/* Controles mejorados */}
        <div className="flex flex-wrap gap-2">
          {selectedColaborador ? (
            <>
              <button 
                onClick={handleBack}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg transition-all duration-300 text-white shadow-lg shadow-purple-500/25 transform hover:scale-105"
                aria-label="Volver"
              >
                <ArrowLeft size={16} className="mr-2" />
                Volver
              </button>
              <button 
                onClick={toggleAutoRotation}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 text-white shadow-lg transform hover:scale-105 ${
                  isAutoRotating 
                    ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 shadow-red-500/25' 
                    : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-green-500/25'
                }`}
                aria-label={isAutoRotating ? "Pausar rotación" : "Reanudar rotación"}
              >
                {isAutoRotating ? <Pause size={16} className="mr-2" /> : <Play size={16} className="mr-2" />}
                {isAutoRotating ? "Pausar" : "Iniciar"}
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={handleZoomIn}
                className="p-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 hover:from-blue-500/30 hover:to-blue-400/30 rounded-lg transition-all duration-300 shadow-lg border border-blue-500/30 transform hover:scale-110"
                aria-label="Acercar"
              >
                <ZoomIn size={18} className="text-blue-400" />
              </button>
              <button 
                onClick={handleZoomOut}
                className="p-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 hover:from-blue-500/30 hover:to-blue-400/30 rounded-lg transition-all duration-300 shadow-lg border border-blue-500/30 transform hover:scale-110"
                aria-label="Alejar"
              >
                <ZoomOut size={18} className="text-blue-400" />
              </button>
              <button 
                onClick={handleReset}
                className="p-3 bg-gradient-to-r from-gray-600/20 to-gray-500/20 hover:from-gray-500/30 hover:to-gray-400/30 rounded-lg transition-all duration-300 shadow-lg border border-gray-500/30 transform hover:scale-110"
                aria-label="Reiniciar vista"
              >
                <RotateCcw size={18} className="text-gray-400" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Panel de información del colaborador mejorado */}
      {selectedColaborador && (
        <div className="absolute top-6 right-6 z-30 bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-6 rounded-2xl shadow-2xl backdrop-blur-lg max-w-sm border border-gray-700/50">
          <div className="flex items-center mb-4">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 mr-4 shadow-2xl"
                 style={{ borderColor: getGrupoColor(selectedColaborador.id) }}>
              {selectedColaborador.imagen ? (
                <img 
                  src={selectedColaborador.imagen} 
                  alt={selectedColaborador.nombre} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.warn(`Error loading image for ${selectedColaborador.nombre}`);
                    e.target.style.display = 'none';
                    e.target.parentNode.querySelector('.fallback-avatar').style.display = 'flex';
                  }}
                />
              ) : null}
              <div className={`fallback-avatar w-full h-full flex items-center justify-center ${selectedColaborador.imagen ? 'hidden' : 'flex'}`}
                   style={{ 
                     background: `linear-gradient(135deg, ${getGrupoColor(selectedColaborador.id)}40, ${getGrupoColor(selectedColaborador.id)}60)`,
                   }}>
                <User size={32} className="text-white" />
              </div>
              {/* Indicador de estado activo */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg leading-tight mb-1">
                {selectedColaborador.nombre}
              </h3>
              <div className="flex items-center">
                <span className="text-sm font-mono font-bold px-2 py-1 rounded-md text-white"
                      style={{ backgroundColor: getGrupoColor(selectedColaborador.id) }}>
                  {selectedColaborador.iniciales}
                </span>
                <Star size={12} className="text-yellow-400 ml-2" />
              </div>
            </div>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-lg border border-blue-500/30">
              <p className="text-blue-300 font-semibold mb-1">Título Profesional</p>
              <p className="text-white">{selectedColaborador.titulo}</p>
            </div>
            <div className="p-3 bg-gradient-to-r from-green-600/20 to-green-500/20 rounded-lg border border-green-500/30">
              <p className="text-green-300 font-semibold mb-1">Rol en el Proyecto</p>
              <p className="text-white">{selectedColaborador.participacion}</p>
            </div>
          </div>
          
          {/* Sección de contacto mejorada */}
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <p className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
              <Mail size={14} className="mr-2" />
              Contacto
            </p>
            <div className="flex space-x-2">
              {selectedColaborador.contacto?.email && (
                <button
                  onClick={() => window.open(`mailto:${selectedColaborador.contacto.email}`, '_blank')}
                  className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 hover:from-blue-500/30 hover:to-blue-400/30 rounded-lg transition-all duration-300 shadow-lg border border-blue-500/30 transform hover:scale-110"
                  title="Enviar email"
                >
                  <Mail size={16} className="text-blue-400" />
                </button>
              )}
              {selectedColaborador.contacto?.linkedin && (
                <button
                  onClick={() => window.open(selectedColaborador.contacto.linkedin, '_blank')}
                  className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 hover:from-blue-500/30 hover:to-blue-400/30 rounded-lg transition-all duration-300 shadow-lg border border-blue-500/30 transform hover:scale-110"
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
          
          {/* Contador de tiempo mejorado */}
          {isAutoRotating && (
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-300 flex items-center">
                  <Zap size={14} className="mr-2 text-orange-400" />
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
                  className={`h-2 rounded-full transition-all duration-1000 shadow-lg ${
                    timeLeft <= 3 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500' 
                      : 'bg-gradient-to-r from-green-500 to-blue-500'
                  }`}
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
            {/* Conexiones animadas entre nodos */}
            <svg className="absolute top-0 left-0 w-full h-full" style={{ width: '5000px', height: '4000px', transform: 'translate(-2500px, -2000px)' }}>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                {connections.map((connection, index) => (
                  <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: connection.color, stopOpacity: 0.8 }} />
                    <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: connection.color, stopOpacity: 0.8 }} />
                  </linearGradient>
                ))}
              </defs>
              {connections.map((connection, index) => (
                <g key={`connection-${index}`}>
                  <line 
                    x1={2500 + connection.from.posicion.x} 
                    y1={2000 + connection.from.posicion.y} 
                    x2={2500 + connection.to.posicion.x} 
                    y2={2000 + connection.to.posicion.y}
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="4"
                    filter="url(#glow)"
                    opacity="0.7"
                  />
                  {/* Punto de energía que se mueve por la línea */}
                  <circle r="3" fill="#ffffff" opacity="0.9">
                    <animateMotion
                      dur="3s"
                      repeatCount="indefinite"
                      path={`M${2500 + connection.from.posicion.x},${2000 + connection.from.posicion.y} L${2500 + connection.to.posicion.x},${2000 + connection.to.posicion.y}`}
                    />
                  </circle>
                </g>
              ))}
            </svg>
            
            {/* Títulos con estilo futurista */}
            {Object.entries(colaboradoresData).map(([key, grupo]) => {
              if (key.startsWith('practicantes_')) return null;
              
              let position = { x: 0, y: 0 };
              if (key === 'direccion') position = { x: 0, y: -580 };
              else if (key === 'colaboradores_inia') position = { x: 0, y: -320 };
              else if (key === 'colaboradores_externos') position = { x: 0, y: -40 };
              else return null;
              
              return (
                <div 
                  key={`titulo-${key}`}
                  className="absolute text-center font-bold text-xl transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110"
                  style={{ 
                    left: `${position.x}px`, 
                    top: `${position.y}px`,
                    background: `linear-gradient(135deg, ${grupo.color}20, ${grupo.color}40)`,
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${grupo.color}60`,
                    borderRadius: '16px',
                    padding: '12px 24px',
                    color: 'white',
                    textShadow: '0 0 20px rgba(255,255,255,0.5)',
                    boxShadow: `0 8px 32px ${grupo.color}30, inset 0 1px 0 rgba(255,255,255,0.2)`
                  }}
                >
                  {grupo.titulo}
                </div>
              );
            })}
            
            {/* Título para colaboradores en práctica */}
            <div 
              className="absolute text-center font-bold text-xl transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-110"
              style={{ 
                left: '0px', 
                top: '230px',
                background: 'linear-gradient(135deg, #667eea20, #764ba240)',
                backdropFilter: 'blur(10px)',
                border: '2px solid #667eea60',
                borderRadius: '16px',
                padding: '12px 24px',
                color: 'white',
                textShadow: '0 0 20px rgba(255,255,255,0.5)',
                boxShadow: '0 8px 32px #667eea30, inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              Colaboradores en Práctica
            </div>
            
            {/* Nodos de colaboradores con efectos avanzados */}
            {Object.entries(colaboradoresData).map(([key, grupo]) =>
              grupo.miembros.map((colaborador) => {
                const isSelected = selectedColaborador && selectedColaborador.id === colaborador.id;
                const isPulsing = pulseNodes.has(colaborador.id);
                const isHovered = hoveredNode === colaborador.id;
                
                return (
                  <div 
                    key={colaborador.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${
                      isSelected ? 'z-30' : 'z-20'
                    }`}
                    style={{ 
                      left: `${colaborador.posicion.x}px`, 
                      top: `${colaborador.posicion.y}px`,
                      width: isSelected ? '200px' : isHovered ? '160px' : '150px',
                      height: isSelected ? '180px' : isHovered ? '170px' : '160px',
                      background: isSelected 
                        ? `linear-gradient(135deg, ${grupo.color}40, ${grupo.color}70, #ffffff30)`
                        : `linear-gradient(135deg, ${grupo.color}20, ${grupo.color}40)`,
                      backdropFilter: 'blur(15px)',
                      border: isSelected 
                        ? `3px solid ${grupo.color}` 
                        : `2px solid ${grupo.color}60`,
                      borderRadius: '20px',
                      boxShadow: isSelected 
                        ? `0 20px 60px ${grupo.color}40, 0 0 30px ${grupo.color}60, inset 0 1px 0 rgba(255,255,255,0.3)`
                        : `0 10px 30px ${grupo.color}20, inset 0 1px 0 rgba(255,255,255,0.2)`,
                      transform: `translate(-50%, -50%) scale(${isSelected ? 1.1 : isHovered ? 1.05 : 1}) ${isPulsing ? 'scale(1.2)' : ''}`,
                      animation: isPulsing ? 'pulse 1s ease-in-out infinite' : 'none'
                    }}
                    onClick={() => zoomToColaborador(colaborador)}
                    onMouseEnter={() => setHoveredNode(colaborador.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Efecto de resplandor al pasar el mouse */}
                    {isHovered && (
                      <div className="absolute inset-0 rounded-20 animate-ping"
                           style={{ 
                             background: `radial-gradient(circle, ${grupo.color}40, transparent)`,
                             borderRadius: '20px'
                           }}></div>
                    )}
                    
                    <div className="flex flex-col items-center justify-center h-full p-4 relative">
                      {/* Indicador de estado */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      )}
                      
                      <div className={`overflow-hidden border-3 mb-3 shadow-2xl flex items-center justify-center ${
                        isSelected ? 'w-20 h-20' : 'w-16 h-16'
                      }`} 
                           style={{ 
                             borderRadius: '16px',
                             borderColor: grupo.color,
                             boxShadow: `0 0 20px ${grupo.color}50`
                           }}>
                        {colaborador.imagen ? (
                          <img 
                            src={colaborador.imagen} 
                            alt={colaborador.nombre} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.warn(`Error loading image for ${colaborador.nombre}`);
                              e.target.style.display = 'none';
                              e.target.parentNode.querySelector('.node-fallback').style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className={`node-fallback w-full h-full flex items-center justify-center ${colaborador.imagen ? 'hidden' : 'flex'}`}
                             style={{ background: `linear-gradient(135deg, ${grupo.color}, ${grupo.color}80)` }}>
                          <User size={isSelected ? 36 : 28} className="text-white" />
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className={`font-bold leading-tight text-white ${
                          isSelected ? 'text-sm' : 'text-xs'
                        }`} style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                          {isSelected 
                            ? colaborador.nombre.length > 25 
                              ? colaborador.nombre.split(' ').slice(0, 3).join(' ')
                              : colaborador.nombre
                            : colaborador.nombre.split(' ').slice(0, 2).join(' ')
                          }
                        </div>
                        <div className={`mt-1 font-mono font-bold rounded-md px-2 py-1 ${
                          isSelected ? 'text-sm' : 'text-xs'
                        }`} style={{ 
                          backgroundColor: grupo.color,
                          color: 'white',
                          textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                        }}>
                          {colaborador.iniciales}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colaboradores;