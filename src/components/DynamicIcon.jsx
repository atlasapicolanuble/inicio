// src/components/DynamicIcon.jsx
import React from 'react';
import { 
  Book, 
  Leaf, 
  BarChart2, 
  Zap, 
  Droplets, 
  MapPin, 
  Info,
  Search,
  Download,
  Eye
} from 'lucide-react';

const DynamicIcon = ({ name, size = 24, className }) => {
  // Mapa de nombres de iconos a componentes
  const iconMap = {
    Book: <Book size={size} className={className} />,
    Leaf: <Leaf size={size} className={className} />,
    BarChart2: <BarChart2 size={size} className={className} />,
    Zap: <Zap size={size} className={className} />,
    Droplets: <Droplets size={size} className={className} />,
    MapPin: <MapPin size={size} className={className} />,
    Info: <Info size={size} className={className} />,
    Search: <Search size={size} className={className} />,
    Download: <Download size={size} className={className} />,
    Eye: <Eye size={size} className={className} />
  };

  // Devolver el icono correspondiente o un elemento vacío si no existe
  return iconMap[name] || null;
};

export default DynamicIcon;