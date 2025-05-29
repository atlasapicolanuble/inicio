import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';

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
  const activePage = 'inicio'; // Como estamos en HomePage, la página activa es "inicio"
  
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
      {/* Header - Con color verde más claro */}
      <header className={`fixed w-full transition-all duration-300 z-50 ${scrolled ? 'bg-green-600 py-0 shadow-md' : 'bg-green-600 py-0'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className={`flex items-center transition-all ${scrolled ? 'scale-95' : 'scale-100'}`}>
                {/* Logos con tamaños aumentados */}
                <div className="flex items-center">
                  <Link to="/">
                    <img 
                      src={logoinia} 
                      alt="Logo INIA" 
                      className="h-14 md:h-16 cursor-pointer" // Aumentado de h-10/h-12 a h-14/h-16
                    />
                  </Link>
                  <a href="https://goredenuble.cl/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={logob} 
                      alt="Logo Quilamapu" 
                      className="h-16 md:h-20 ml-2 cursor-pointer" // Aumentado de h-14/h-16 a h-16/h-20
                    />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Navegación Desktop */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {pages.map((page) => (
                  <li key={page.id}>
                    <button 
                      onClick={() => navigate(page.id)}
                      className={`text-white uppercase font-medium hover:text-yellow-400 transition-colors relative ${activePage === page.id ? 'text-yellow-400' : ''}`}
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
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Menú móvil desplegable con color verde más claro */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-green-500 py-4 animate-slideDown">
            <div className="container mx-auto px-4">
              <ul className="space-y-3">
                {pages.map((page) => (
                  <li key={page.id}>
                    <button 
                      onClick={() => navigate(page.id)}
                      className={`text-white w-full text-left py-2 px-3 rounded ${activePage === page.id ? 'bg-green-400' : ''}`}
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
      <main className="flex-grow pt-20" style={{ marginBottom: '-44px' }}>
       {/* Hero Section - Responsivo con comportamiento diferente en PC y móvil */}
        <section 
          className="relative flex items-center justify-center text-white" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBackground})`,
            backgroundSize: 'contain', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
            marginTop: '-20px',
            paddingTop: '60px',
            height: 'calc(100vh - 64px)', // Altura completa para PC (como estaba originalmente)
          }}
        >
          {/* Media queries para controlar la visualización en diferentes dispositivos */}
          <style jsx>{`
            @media (max-width: 768px) {
              /* Cambios específicos para móviles */
              section.relative {
                height: calc(50vh - 32px) !important;
                min-height: 300px;
              }
            }
          `}</style>
          
          {/* Botón rectangular simple con bordes redondeados - Posicionamiento actualizado */}
          <div 
            className="animate-fadeInUp absolute flex justify-center items-center flex-col hero-button"
            style={{
              top: "15%",            
              right: "23%",          
              zIndex: 10             
            }}
          >
            {/* Estilos específicos para móviles aplicados con CSS */}
            <style jsx>{`
              @media (max-width: 768px) {
                .hero-button {
                  top: auto !important;
                  right: auto !important;
                  left: 50% !important;
                  bottom: 10% !important;
                  transform: translateX(-50%) !important;
                }
              }
            `}</style>
            
            <Link 
              to="/atlas"
              className="bg-white/80 hover:bg-white text-green-600 font-medium py-3 px-6 rounded-lg
                        transition-all duration-300 border border-green-700/20 hover:shadow-md
                        transform hover:-translate-y-1"
            >
              Explorar Atlas
            </Link>
          </div>
          
          {/* Overlay para parallax */}
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
        </section>
        
        {/* Sección Sobre Nosotros - Atlas INIA Quilamapu */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">¿Qué es el Atlas INIA Quilamapu?</h2>
                <p className="text-gray-700 mb-4">
                  El Atlas INIA Quilamapu es una herramienta científica y educativa elaborada por el Instituto de Investigaciones Agropecuarias (INIA), específicamente desde su centro regional Quilamapu, ubicado en la región del Ñuble, Chile. Este atlas reúne y organiza conocimiento detallado sobre la apicultura en el territorio, con énfasis en la especie <em>Apis mellifera</em>.
                </p>
                <h3 className="text-xl font-bold text-green-600 mb-3">¿Qué investiga?</h3>
                <p className="text-gray-700 mb-4">
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
        
        {/* Sección de Áreas de Investigación */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Aplicaciones del Atlas</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                El Atlas INIA Quilamapu sirve como base fundamental para diversos aspectos de la apicultura regional.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tarjeta 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 animate-on-scroll">
                <div className="h-48 bg-green-200 flex items-center justify-center">
                  <img src={item1} alt="¿Para qué sirve?" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-3">¿Para qué sirve?</h3>
                  <p className="text-gray-700">
                    El propósito del atlas es servir como base de consulta para apicultores, estudiantes, investigadores y tomadores de decisiones. Su contenido busca apoyar la conservación de las abejas, la mejora en la producción apícola y la toma de conciencia sobre su rol ecológico y económico.
                  </p>
                </div>
              </div>
              
              {/* Tarjeta 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 animate-on-scroll">
                <div className="h-48 bg-green-200 flex items-center justify-center">
                  <img src={item2} alt="¿Qué se espera?" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-3">¿Qué se espera?</h3>
                  <p className="text-gray-700">
                    Se espera que este atlas contribuya a fortalecer el conocimiento técnico y territorial sobre la apicultura, fomentando prácticas sostenibles, aumentando la productividad y resiliencia de las colmenas, y promoviendo la apicultura como una actividad estratégica para el desarrollo rural.
                  </p>
                </div>
              </div>
              
              {/* Tarjeta 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:-translate-y-2 animate-on-scroll">
                <div className="h-48 bg-green-200 flex items-center justify-center">
                  <img src={logoinia} alt="¿Cómo se desarrolla?" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-3">¿Cómo se desarrolla?</h3>
                  <p className="text-gray-700">
                    El atlas se construye a partir de investigaciones de campo, recopilación de datos meteorológicos, análisis genéticos, censos de apicultores, y estudios ecológicos en diversas zonas de Ñuble. Se complementa con mapas, gráficos, fotografías y calendarios de floración, todo validado por expertos del INIA y actores del rubro apícola.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección CTA - Color verde más claro */}
        <section className="py-16 bg-green-500 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Explora nuestro Atlas Digital</h2>
            <p className="max-w-2xl mx-auto mb-8 animate-on-scroll">
              Accede a nuestro catálogo digital con información detallada sobre investigaciones, recursos y proyectos.
            </p>
            <Link 
              to="/atlas"
              className="bg-white/80 hover:bg-white text-green-600 font-medium py-3 px-6 rounded-lg
                       transition-all duration-300 border border-green-700/20 hover:shadow-md
                       transform hover:-translate-y-1"
            >
              Explorar Atlas
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer - Color verde más claro */}
      <footer className="bg-green-700 text-white py-1 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">INIA Quilamapu</h3>
              <p className="mb-3">
                Centro de Investigación Agropecuaria líder en desarrollo agroalimentario sostenible en Chile.
              </p>
              <div className="flex space-x-4">
                {/* Iconos de redes sociales actualizados */}
                <a href="https://www.facebook.com/INIAQuilamapu/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">
                  {/* Ícono de Facebook */}
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/iniaquilamapu/?hl=es" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">
                  {/* Ícono de Instagram */}
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.inia.cl/quilamapu/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">
                  {/* Ícono de Google/Web */}
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Enlaces rápidos</h3>
              <ul className="space-y-1">
                <li><Link to="/" className="text-gray-200 hover:text-white transition">Inicio</Link></li>
                <li><Link to="/atlas" className="text-gray-200 hover:text-white transition">Atlas Digital</Link></li>
                <li><Link to="/contacto" className="text-gray-200 hover:text-white transition">Contacto</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-600 mt-6 pt-6 text-center text-gray-200">
            <p>&copy; {new Date().getFullYear()} INIA Quilamapu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;