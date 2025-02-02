import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 p-4 flex items-center justify-between text-sm text-gray-400">
      <div className="flex items-center gap-4">
        <span>Pro</span>
        <span>Empresa</span>
        <span>Tienda</span>
        <span>Blog</span>
        <span>Carreras</span>
        <span>Educación</span>
      </div>

      <div className="flex items-center gap-4">
        <span>Spanish (Español)</span>
        <button className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
          ?
        </button>
      </div>
    </footer>
  );
}
