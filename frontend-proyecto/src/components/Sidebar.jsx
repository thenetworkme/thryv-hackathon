import React from 'react';
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
import { Card } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { CardDescription } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 border-r border-gray-800 p-4 flex flex-col text-white">
      <Link to="/chat">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8">
            <img src="/fondo.png" alt="" />
          </div>
          <span className="text-xl font-semibold">COMPASS</span>
        </div>
      </Link>

      <Button variant="secondary" className="w-full justify-between mb-6">
        <div className="flex items-center gap-2">
          <Plus size={18} />
          <span>Nueva busqueda</span>
        </div>
        <span className="text-sm text-gray-400">Ctrl I</span>
      </Button>

      <nav className="space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start hover:bg-gray-800/50 transition-colors"
        >
          <Home size={18} className="mr-2" />
          <span>Inicio</span>
        </Button>
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

      <div className="mt-auto">
        <div className="flex items-center gap-2 px-4 py-2 mt-4">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <span>Usuario</span>
          <Settings size={18} className="ml-auto text-gray-400" />
        </div>
      </div>
    </div>
  );
}
