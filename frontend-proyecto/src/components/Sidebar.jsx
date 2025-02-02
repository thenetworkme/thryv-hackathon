import React from "react";
import {
  Home,
  Compass,
  Layout,
  Library,
  Plus,
  Settings,
  AntennaIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/userStore";

export default function Sidebar() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="w-64 border-r border-gray-800 p-4 flex flex-col text-white">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#00A3FF]">
            <path
              fill="currentColor"
              d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z"
            />
          </svg>
        </div>
        <span className="text-xl font-semibold">prueba</span>
      </div>

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
        <Button
          variant="ghost"
          className="w-full justify-start hover:bg-gray-800/50 transition-colors"
        >
          <Compass size={18} className="mr-2" />
          <span>Descubrir productos</span>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start hover:bg-gray-800/50 transition-colors"
        >
          <AntennaIcon scale={18} className="mr-2" />

          <span>Análisis competitivo</span>
        </Button>
      </nav>

      <div className="mt-auto">
        <div className="flex items-center gap-2 px-4 py-2 mt-4">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          {user ? <span>{user.email}</span> : <span>Usuario</span>}
          <Settings size={18} className="ml-auto text-gray-400" />
        </div>
      </div>
    </div>
  );
}
