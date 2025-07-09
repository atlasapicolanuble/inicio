import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';
// Quitar importación de Atlas.css
// Importar todas las imágenes necesarias
import heroBackground from './images/Atlas.jpg';
import heroBackground3 from './images/logoblanco.jpg'; 
import item1 from './images/eco.webp';
import item2 from './images/Abeja.png';
import logoinia from './images/logoinia.png';
import logob from './images/logob.png';

const HomePage = ({ navigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activePage = 'inicio';
  
  // Efecto para el scroll en el header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil cuando cambia la ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Efecto de entrada para elementos animados
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => animatedElements.forEach(el => observer.unobserve(el));
  }, []);

  // Mapa de rutas y nombres de páginas
  const pages = [
    { id: 'inicio', path: '/', label: 'Inicio' },
    { id: 'atlas', path: '/atlas', label: 'Atlas' },
    { id: 'contacto', path: '/contacto', label: 'Contacto' }
  ];

  return (
    <div className="font-sans antialiased text-gray-900 flex flex-col min-h-screen">
      {/* Estilos CSS personalizados completos */}
      <style jsx>{`
        /* Reset básico */
        * {
          box-sizing: border-box;
        }

        /* Variables CSS */
        :root {
          --color-green-600: #16a34a;
          --color-green-500: #22c55e;
          --color-green-400: #4ade80;
          --color-green-700: #15803d;
          --color-yellow-400: #facc15;
          --color-yellow-500: #eab308;
        }

        /* Animaciones */
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        /* Forzar colores exactos para el header */
        .header-verde-exacto {
          background-color: #16a34a !important;
        }

        .menu-verde-exacto {
          background-color: #22c55e !important;
        }

        /* Responsive breakpoints y ajustes específicos */
        
        /* Monitor grande (1920px+) */
        @media (min-width: 1920px) {
          .hero-section {
            height: calc(100vh - 100px) !important;
            padding-top: 0px !important;
            margin-top: 100px !important;
            background-size: 60% auto !important;
            background-position: center -10px !important;
          }
          .hero-button {
            top: 25% !important;
            right: 20% !important;
          }
          .hero-gradient {
            height: 60px !important;
          }
          .header-logos img:first-child {
            height: 10rem !important; /* 160px - LogoB MUCHO MÁS GRANDE */
          }
          .header-logos img:last-child {
            height: 4rem !important; /* 64px - INIA */
          }
        }
        
        /* Monitor estándar/laptop grande (1200px - 1919px) */
        @media (min-width: 1200px) and (max-width: 1919px) {
          .hero-section {
            height: calc(100vh - 95px) !important;
            padding-top: 0px !important;
            margin-top: 95px !important;
            background-size: 65% auto !important;
            background-position: center -8px !important;
          }
          .hero-button {
            top: 20% !important;
            right: 22% !important;
          }
          .hero-gradient {
            height: 50px !important;
          }
          .header-logos img:first-child {
            height: 9rem !important; /* 144px - LogoB MUCHO MÁS GRANDE */
          }
          .header-logos img:last-child {
            height: 3.5rem !important; /* 56px - INIA */
          }
        }
        
        /* Laptop/notebook (768px - 1199px) - TAMAÑOS AJUSTADOS AL HEADER ORIGINAL */
        @media (min-width: 768px) and (max-width: 1199px) {
          .hero-section {
            height: calc(100vh - 64px) !important;
            padding-top: 0px !important;
            margin-top: 64px !important;
            background-size: 70% auto !important;
            background-position: center -5px !important;
          }
          .hero-button {
            top: 30% !important;
            right: 15% !important;
          }
          .hero-gradient {
            height: 40px !important;
          }
          .header-logos img:first-child {
            height: 4rem !important; /* 64px - LogoB más grande pero que quepa */
          }
          .header-logos img:last-child {
            height: 2.5rem !important; /* 40px - INIA más pequeño */
          }
        }
        
        /* Tablet (481px - 767px) */
        @media (min-width: 481px) and (max-width: 767px) {
          .hero-section {
            height: 60vh !important; /* Reducido de calc(100vh - 85px) a 60vh */
            min-height: 400px !important;
            max-height: 500px !important; /* Altura máxima para evitar hero muy grande */
            padding-top: 85px !important; /* Espacio para el header fijo */
            margin-top: 0px !important; /* SIN margen */
            top: 0px !important; /* Sin offset adicional */
            position: relative !important;
            background-size: 85% auto !important;
            background-position: center top !important;
          }
          .hero-button {
            top: 50% !important; /* Centrado verticalmente */
            right: auto !important;
            left: 50% !important;
            bottom: auto !important;
            transform: translate(-50%, -50%) !important; /* Centrado perfecto */
            z-index: 30 !important; /* Por encima de los overlays */
          }
          .hero-gradient {
            height: 35px !important;
          }
          .header-logos img:first-child {
            height: 6rem !important; /* 96px - LogoB MÁS GRANDE */
          }
          .header-logos img:last-child {
            height: 2.5rem !important; /* 40px - INIA */
          }
        }
        
        /* Móvil (320px - 480px) - ALTURA EXACTA 50% DE PANTALLA */
        @media (max-width: 480px) {
          .hero-section {
            height: 50vh !important; /* EXACTAMENTE 50% de la pantalla */
            min-height: 50vh !important; /* Forzar 50% mínimo */
            max-height: 50vh !important; /* Forzar 50% máximo */
            padding-top: 80px !important; /* Espacio para el header fijo */
            margin-top: 0px !important; /* SIN margen */
            top: 0px !important; /* Sin offset adicional */
            position: relative !important;
            background-size: 100% auto !important;
            background-position: center center !important;
          }
          .hero-button {
            top: 50% !important; /* Centrado verticalmente */
            right: auto !important;
            left: 50% !important;
            bottom: auto !important;
            transform: translate(-50%, -50%) !important; /* Centrado perfecto */
          }
          .hero-button a {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.875rem !important;
          }
          .hero-gradient {
            height: 20px !important; /* Degradado más pequeño */
          }
          .header-logos img:first-child {
            height: 5rem !important; /* 80px - LogoB MÁS GRANDE */
          }
          .header-logos img:last-child {
            height: 2rem !important; /* 32px - INIA */
          }
          
          /* Ajustes para el menú móvil */
          .mobile-menu {
            padding: 1rem !important;
          }
          
          /* Espaciado eliminado para que el contenido aparezca inmediatamente */
          .section-padding {
            padding-top: 0rem !important; /* Sin espacio arriba */
            padding-bottom: 2rem !important;
          }
          
          /* Texto más pequeño en móviles */
          .hero-title {
            font-size: 1.875rem !important; /* 30px */
            line-height: 2.25rem !important;
          }
          
          .section-title {
            font-size: 1.75rem !important; /* 28px */
            line-height: 2rem !important;
          }
        }
        
        /* Móvil muy pequeño (menos de 360px) - ALTURA EXACTA 50% DE PANTALLA */
        @media (max-width: 359px) {
          .hero-section {
            height: 50vh !important; /* EXACTAMENTE 50% de la pantalla */
            min-height: 50vh !important; /* Forzar 50% mínimo */
            max-height: 50vh !important; /* Forzar 50% máximo */
            margin-top: 0px !important; /* SIN margen */
            top: 0px !important; /* Sin offset adicional */
            position: relative !important;
            padding-top: 75px !important; /* Espacio para el header fijo */
            background-size: 100% auto !important;
            background-position: center center !important;
          }
          .hero-button {
            top: 50% !important; /* Centrado verticalmente */
            right: auto !important;
            left: 50% !important;
            bottom: auto !important;
            transform: translate(-50%, -50%) !important; /* Centrado perfecto */
          }
          .hero-button a {
            padding: 0.5rem 1rem !important;
            font-size: 0.75rem !important;
          }
          .hero-gradient {
            height: 15px !important; /* Degradado aún más pequeño */
          }
          .header-logos img:first-child {
            height: 4rem !important; /* 64px - LogoB MÁS GRANDE */
          }
          .header-logos img:last-child {
            height: 1.75rem !important; /* 28px - INIA */
          }
          
          /* Espaciado eliminado para móviles muy pequeños */
          .section-padding {
            padding-top: 0rem !important; /* Sin espacio arriba */
            padding-bottom: 1.5rem !important;
          }
        }

        /* Forzar tamaños de logos con máxima especificidad - AJUSTADO AL HEADER ORIGINAL */
        .logo-b-grande {
          height: 4rem !important; /* 64px base - más grande que INIA pero que quepa */
        }

        .logo-inia-normal {
          height: 2.5rem !important; /* 40px base - más pequeño */
        }

        @media (min-width: 1200px) {
          .logo-b-grande {
            height: 5rem !important; /* 80px en pantallas grandes */
          }
          .logo-inia-normal {
            height: 2.5rem !important; /* 40px se mantiene */
          }
        }

        @media (min-width: 1920px) {
          .logo-b-grande {
            height: 6rem !important; /* 96px en pantallas muy grandes */
          }
          .logo-inia-normal {
            height: 2.5rem !important; /* 40px se mantiene */
          }
        }
      `}</style>

      {/* Header - CON COLOR VERDE EXACTO Y TAMAÑO ORIGINAL */}
      <header className={`fixed w-full transition-all duration-300 z-50 header-verde-exacto ${scrolled ? 'bg-green-600 py-1 shadow-md' : 'bg-green-600 py-2'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center py-1">
            <div className="flex items-center">
              <div className={`flex items-center transition-all ${scrolled ? 'scale-95' : 'scale-100'}`}>
                {/* Logos con clases específicas para forzar tamaños */}
                <div className="flex items-center header-logos">
                  <a href="https://goredenuble.cl/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={logob} 
                      alt="Logo Quilamapu" 
                      className="logo-b-grande cursor-pointer transition-all duration-200"
                      style={{ height: '4rem', maxHeight: 'none', width: 'auto' }}
                    />
                  </a>
                  <Link to="/">
                    <img 
                      src={logoinia} 
                      alt="Logo INIA" 
                      className="logo-inia-normal ml-4 cursor-pointer transition-all duration-200"
                      style={{ height: '2.5rem', maxHeight: 'none' }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Navegación Desktop */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 lg:space-x-8">
                {pages.map((page) => (
                  <li key={page.id}>
                    <button 
                      onClick={() => navigate(page.id)}
                      className={`text-white uppercase font-medium hover:text-yellow-400 transition-colors relative text-sm lg:text-base ${activePage === page.id ? 'text-yellow-400' : ''}`}
                    >
                      {page.label}
                      {activePage === page.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 mt-1"></span>}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Menú móvil toggle */}
            <button 
              className="md:hidden text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Menú móvil desplegable - CON COLOR VERDE EXACTO */}
        {mobileMenuOpen && (
          <div className="md:hidden menu-verde-exacto animate-slideDown mobile-menu">
            <div className="container mx-auto px-4 py-2">
              <ul className="space-y-2">
                {pages.map((page) => (
                  <li key={page.id}>
                    <button 
                      onClick={() => navigate(page.id)}
                      className={`text-white w-full text-left py-2 px-3 rounded text-sm ${activePage === page.id ? 'bg-green-400' : ''}`}
                      style={{ backgroundColor: activePage === page.id ? '#4ade80' : 'transparent' }}
                    >
                      {page.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* Contenido principal */}
      <main className="flex-grow">
        {/* Hero Section con clases responsive - AJUSTADO PARA NUEVO HEADER Y MÓVILES */}
        <section 
          className="hero-section relative flex items-center justify-center text-white" 
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: '70% auto', 
            backgroundPosition: 'center -5px', 
            backgroundRepeat: 'no-repeat',
            height: 'calc(100vh - 64px)',
            marginTop: '64px',
            paddingTop: '0px'
          }}
        >
          {/* Botón con posicionamiento responsive */}
          <div className="hero-button animate-fadeInUp absolute flex justify-center items-center flex-col"
               style={{ top: "8%", right: "23%", zIndex: 10 }}>
            <Link 
              to="/atlas"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-lg
                        transition-all duration-300 border border-yellow-600/20 hover:shadow-lg
                        transform hover:-translate-y-1 text-sm md:text-base"
            >
              Explorar Atlas
            </Link>
          </div>
          
          {          /* Overlay para transición suave - degradado más pequeño y desde más abajo */}
          <div className="hero-gradient absolute bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent" style={{ height: '50px' }}></div>
        </section>
        
        {/* Texto de introducción visible inmediatamente en móviles */}
        <section className="block md:hidden bg-white py-4 px-4 -mt-1">
          <div className="container mx-auto text-center">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              Atlas INIA Quilamapu
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              Herramienta científica y educativa sobre apicultura en la región del Ñuble. 
              Conocimiento detallado sobre <em>Apis mellifera</em> y el desarrollo apícola regional.
            </p>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-green-700 text-xs font-medium">
                📍 Explora datos, mapas y recursos especializados para apicultores
              </p>
            </div>
          </div>
        </section>
        
        {/* Sección Sobre Nosotros - SIN PADDING TOP EN MÓVILES */}
        <section className="py-12 md:py-16 lg:py-24 section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4 md:mb-6">
                  ¿Qué es el Atlas INIA Quilamapu?
                </h2>
                <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                  El Atlas INIA Quilamapu es una herramienta científica y educativa elaborada por el Instituto de Investigaciones Agropecuarias (INIA), específicamente desde su centro regional Quilamapu, ubicado en la región del Ñuble, Chile. Este atlas reúne y organiza conocimiento detallado sobre la apicultura en el territorio, con énfasis en la especie <em>Apis mellifera</em>.
                </p>
                <h3 className="text-lg md:text-xl font-bold text-green-600 mb-3">¿Qué investiga?</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                  Investiga aspectos clave relacionados con las abejas melíferas, incluyendo su historia, genética, estructura social, reproducción, interacción con el entorno (como temperatura y flora), y el desarrollo de la apicultura en la región. También considera la distribución de apicultores, prácticas sustentables y tendencias actuales.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl animate-on-scroll">
                <a href="https://www.inia.cl/quilamapu/" target="_blank" rel="noopener noreferrer">
                  <img src={heroBackground3} alt="Atlas INIA Quilamapu" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-green-600 opacity-20 transition-opacity hover:opacity-0"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección de Áreas de Investigación - SIN PADDING TOP EN MÓVILES */}
        <section className="py-12 md:py-16 lg:py-24 bg-green-50 section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12 animate-on-scroll">
              <h2 className="section-title text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-4">
                Aplicaciones del Atlas
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-sm md:text-base">
                El Atlas INIA Quilamapu sirve como base fundamental para diversos aspectos de la apicultura regional.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Tarjeta 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 animate-on-scroll">
                <div className="h-40 md:h-48 bg-green-200 flex items-center justify-center">
                  <img src={item1} alt="¿Para qué sirve?" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-green-700 mb-3">¿Para qué sirve?</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    El propósito del atlas es servir como base de consulta para apicultores, estudiantes, investigadores y tomadores de decisiones. Su contenido busca apoyar la conservación de las abejas, la mejora en la producción apícola y la toma de conciencia sobre su rol ecológico y económico.
                  </p>
                </div>
              </div>
              
              {/* Tarjeta 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 animate-on-scroll">
                <div className="h-40 md:h-48 bg-green-200 flex items-center justify-center">
                  <img src={item2} alt="¿Qué se espera?" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-green-700 mb-3">¿Qué se espera?</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Se espera que este atlas contribuya a fortalecer el conocimiento técnico y territorial sobre la apicultura, fomentando prácticas sostenibles, aumentando la productividad y resiliencia de las colmenas, y promoviendo la apicultura como una actividad estratégica para el desarrollo rural.
                  </p>
                </div>
              </div>
              
              {/* Tarjeta 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 animate-on-scroll sm:col-span-2 lg:col-span-1">
                <div className="h-40 md:h-48 bg-green-200 flex items-center justify-center">
                  <img src={logoinia} alt="¿Cómo se desarrolla?" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-green-700 mb-3">¿Cómo se desarrolla?</h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    El atlas se construye a partir de investigaciones de campo, recopilación de datos meteorológicos, análisis genéticos, censos de apicultores, y estudios ecológicos en diversas zonas de Ñuble. Se complementa con mapas, gráficos, fotografías y calendarios de floración, todo validado por expertos del INIA y actores del rubro apícola.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección CTA */}
        <section className="py-12 md:py-16 bg-green-500 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 animate-on-scroll">
              Explora nuestro Atlas Digital
            </h2>
            <p className="max-w-2xl mx-auto mb-6 md:mb-8 animate-on-scroll text-sm md:text-base">
              Accede a nuestro catálogo digital con información detallada sobre investigaciones, recursos y proyectos.
            </p>
            <Link 
              to="/atlas"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-lg
                       transition-all duration-300 border border-yellow-600/20 hover:shadow-lg
                       transform hover:-translate-y-1 text-sm md:text-base inline-block"
            >
              Explorar Atlas
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-green-700 text-white py-6 md:py-8 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3">INIA Quilamapu</h3>
              <p className="mb-3 text-sm md:text-base">
                Centro de Investigación Agropecuaria líder en desarrollo agroalimentario sostenible en Chile.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/INIAQuilamapu/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">
                  <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/iniaquilamapu/?hl=es" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">
                  <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.inia.cl/quilamapu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">
                  <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Enlaces rápidos</h3>
              <ul className="space-y-1">
                <li><Link to="/" className="text-gray-200 hover:text-white transition text-sm md:text-base">Inicio</Link></li>
                <li><Link to="/atlas" className="text-gray-200 hover:text-white transition text-sm md:text-base">Atlas Digital</Link></li>
                <li><Link to="/contacto" className="text-gray-200 hover:text-white transition text-sm md:text-base">Contacto</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-600 mt-6 pt-6 text-center text-gray-200">
            <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} INIA Quilamapu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;