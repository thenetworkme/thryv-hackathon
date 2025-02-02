import React, { useEffect } from 'react';

import {
  Home,
  Compass,
  Layout,
  Library,
  Plus,
  Settings,
  AntennaIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

export default function Sidebar() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
  return (
    <div className="w-64 border-r border-gray-800 p-4 flex flex-col text-white">
      {/* Logo y Título */}
      <Link to="/chat">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8">
            <img src="/fondo.png" alt="" />
          </div>
          <span className="text-xl font-semibold">COMPASS</span>
        </div>
      </Link>

      {/* Botón "Nueva búsqueda" */}
      <Button variant="secondary" className="w-full justify-between mb-6">
        <div className="flex items-center gap-2">
          <Plus size={18} />
          <span>Nueva búsqueda</span>
        </div>
        <span className="text-sm text-gray-400">Ctrl I</span>
      </Button>

      {/* Navegación */}
      <nav className="space-y-2">
        <Link to="/chat">
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-800/50 transition-colors"
          >
            <Home size={18} className="mr-2" />
            <span>Inicio</span>
          </Button>
        </Link>
        <Link to="/working">
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-800/50 transition-colors"
          >
            <Library size={18} className="mr-2" />
            <span>Historia</span>
          </Button>
        </Link>
        <Link to="/working">
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-800/50 transition-colors"
          >
            <Compass size={18} className="mr-2" />
            <span>Descubrir productos</span>
          </Button>
        </Link>
        <Link to="/user/analisis-competitivo">
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-800/50 transition-colors"
          >
            <AntennaIcon scale={18} className="mr-2" />
            <span>Análisis competitivo</span>
          </Button>
        </Link>
      </nav>

      {/* Sección de Usuario */}
      <div className="mt-auto">
        <div className="flex items-center gap-2 px-4 py-2 mt-4">
          <img src="/profile2.jpg" alt="" className="h-8 w-8 rounded-full" />
          {user ? <span>{user.email}</span> : <span>Usuario</span>}
          {/* Enlace para el ícono de configuración */}
          <Link to="/user/settings">
            <Settings
              size={18}
              className="ml-auto text-gray-400 hover:text-white transition-colors"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
