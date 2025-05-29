import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import AtlasPage from './components/BeeAtlas';
import ContactPage from './components/ContactPage';
import './styles/global.css';

// Componente wrapper para HomePage que proporciona la función navigate
const HomePageWithRouter = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (page) => {
    const path = page === 'inicio' ? '/' : `/${page}`;
    navigate(path);
    window.scrollTo(0, 0); // Scroll al tope cuando cambia de página
  };
  
  return <HomePage navigate={handleNavigate} />;
};

// Componente wrapper para ContactPage que proporciona la función navigate
const ContactPageWithRouter = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (page) => {
    const path = page === 'inicio' ? '/' : `/${page}`;
    navigate(path);
    window.scrollTo(0, 0); // Scroll al tope cuando cambia de página
  };
  
  return <ContactPage navigate={handleNavigate} />;
};

// Componente wrapper para AtlasPage que proporciona la función navigate
// Asumimos que necesitarás adaptar AtlasPage de manera similar a HomePage y ContactPage
const AtlasPageWithRouter = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (page) => {
    const path = page === 'inicio' ? '/' : `/${page}`;
    navigate(path);
    window.scrollTo(0, 0); // Scroll al tope cuando cambia de página
  };
  
  // Nota: Deberás modificar AtlasPage para incluir header y footer como hicimos con los otros componentes
  return <AtlasPage navigate={handleNavigate} />;
};

// Componente para restaurar el scroll cuando se cambia de página
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    // Restablecer cualquier bloqueo de scroll
    document.body.style.overflow = 'auto';
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<HomePageWithRouter />}
        />
        <Route
          path="/atlas"
          element={<AtlasPageWithRouter />}
        />
        <Route
          path="/contacto"
          element={<ContactPageWithRouter />}
        />
        {/* Redirigir a página de inicio para rutas no encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;