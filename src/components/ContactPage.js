import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Menu, X } from 'lucide-react';

// Importamos los logos que necesitaremos
import logoinia from './images/logoinia.png';
import logob from './images/logob.png';

const ContactPage = ({ navigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activePage = 'contacto'; // Como estamos en ContactPage, la página activa es "contacto"
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
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
  
  // Reset del formulario cuando cambia la ruta
  useEffect(() => {
    setSubmitted(false);
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  }, [location.pathname]);

  // Mapa de rutas y nombres de páginas
  const pages = [
    { id: 'inicio', path: '/', label: 'Inicio' },
    { id: 'atlas', path: '/atlas', label: 'Atlas' },
    { id: 'contacto', path: '/contacto', label: 'Contacto' }
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica para enviar el formulario
    setSubmitted(true);
    // Reiniciar el formulario después de un tiempo
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      });
    }, 5000);
  };

  return (
    <div className="font-sans antialiased text-gray-900 flex flex-col min-h-screen">
      {/* Header */}
<header className={`fixed w-full transition-all duration-300 z-50 ${scrolled ? 'bg-green-800 py-1 shadow-md' : 'bg-green-800 py-2'}`}>
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className={`flex items-center transition-all ${scrolled ? 'scale-90' : 'scale-100'}`}>
          {/* Logo clickeable que lleva a inicio */}
          <Link to="/">
            <div className="flex items-center">
              <img 
                src={logoinia} 
                alt="Logo INIA" 
                className="h-10 md:h-12"
              />
              <img 
                src={logob} 
                alt="Logo Quilamapu" 
                className="h-14 md:h-16 ml-2"
              />
            </div>
          </Link>
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
        
        {/* Menú móvil desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-green-700 py-4 animate-slideDown">
            <div className="container mx-auto px-4">
              <ul className="space-y-3">
                {pages.map((page) => (
                  <li key={page.id}>
                    <button 
                      onClick={() => navigate(page.id)}
                      className={`text-white w-full text-left py-2 px-3 rounded ${activePage === page.id ? 'bg-green-600' : ''}`}
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
        {/* Contenido de la página de contacto */}
        <div className="pt-16 pb-16" style={{ paddingTop: '64px' }}>
          <div className="container mx-auto px-4 md:px-6">
            {/* Encabezado */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-green-800 mb-4">Contacto</h1>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Estamos para ayudarte. Contacta con nuestro equipo para más información
                sobre investigaciones, servicios o colaboraciones.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-6">Información de contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-green-100 p-3 rounded-full text-green-700">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Dirección</h3>
                      <p className="text-gray-700">Avenida Vicente Méndez 515, Chillán, Región de Ñuble, Chile</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-green-100 p-3 rounded-full text-green-700">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Correo electrónico</h3>
                      <p className="text-gray-700">contacto@iniaquilamapu.cl</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-green-100 p-3 rounded-full text-green-700">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Teléfono</h3>
                      <p className="text-gray-700">+56 42 2206800</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-green-800 mb-4">Horario de atención</h3>
                  <p className="text-gray-700 mb-2">Lunes a viernes: 8:00 - 18:00 hrs</p>
                </div>
              </div>
              
              {/* Formulario de contacto */}
              <div>
                <h2 className="text-2xl font-bold text-green-800 mb-6">Envíanos un mensaje</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 animate-fadeIn">
                    <h3 className="font-bold text-lg mb-2">¡Mensaje enviado con éxito!</h3>
                    <p>Gracias por contactarnos. Responderemos a tu mensaje lo antes posible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="nombre" className="block text-gray-700 font-medium mb-1">Nombre</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Correo electrónico</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="asunto" className="block text-gray-700 font-medium mb-1">Asunto</label>
                      <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-1">Mensaje</label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
                    >
                      Enviar mensaje
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-green-900 text-white py-1 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">INIA Quilamapu</h3>
              <p className="mb-3">
                Centro de Investigación Agropecuaria líder en desarrollo agroalimentario sostenible en Chile.
              </p>
              <div className="flex space-x-4">
                {/* Iconos de redes sociales */}
                <a href="#" className="text-white hover:text-yellow-400 transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-yellow-400 transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">Enlaces rápidos</h3>
              <ul className="space-y-1">
                <li><Link to="/" className="text-gray-300 hover:text-white transition">Inicio</Link></li>
                <li><Link to="/atlas" className="text-gray-300 hover:text-white transition">Atlas Digital</Link></li>
                <li><Link to="/contacto" className="text-gray-300 hover:text-white transition">Contacto</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-6 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} INIA Quilamapu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;