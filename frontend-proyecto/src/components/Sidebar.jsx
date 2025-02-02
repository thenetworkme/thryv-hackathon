import React, { useState } from 'react';
import { Home, Compass, Layout, Library, Plus, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 border-r border-gray-800 p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#00A3FF]">
            <path
              fill="currentColor"
              d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z"
            />
          </svg>
        </div>
        <span className="text-xl font-semibold">perplexity</span>
      </div>

      <button className="flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2 mb-6">
        <Plus size={18} />
        <span>Nuevo Hilo</span>
        <span className="ml-auto text-sm text-gray-400">Ctrl I</span>
      </button>

      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          <Home size={18} />
          <span>Inicio</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          <Compass size={18} />
          <span>Descubrir</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          <Layout size={18} />
          <span>Espacios</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          <Library size={18} />
          <span>Biblioteca</span>
        </a>
      </nav>

      <div className="mt-auto">
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <h3 className="font-semibold mb-2">Prueba Pro</h3>
          <p className="text-sm text-gray-400 mb-3">
            Actualiza para subir imágenes, inteligencia artificial más avanzada
            y más Pro Search.
          </p>
          <button className="text-sm text-[#00A3FF]">Más información</button>
        </div>

        <div className="flex items-center gap-2 px-4 py-2">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <span>Usuario</span>
          <Settings size={18} className="ml-auto text-gray-400" />
        </div>
      </div>
    </div>
  );
}
