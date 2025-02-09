import React from 'react';

export default function Working() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] text-white">
      {/* Ilustración SVG */}
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="200"
          height="200"
          fill="#ffffff"
        >
          <path d="M100 0C44.77 0 0 44.77 0 100s44.77 100 100 100 100-44.77 100-100S155.23 0 100 0Zm0 180c-44.18 0-80-35.82-80-80S55.82 20 100 20s80 35.82 80 80-35.82 80-80 80Zm-10-110h20v20H90V70Zm0 40h20v60H90V110Z" />
        </svg>
      </div>

      {/* Mensaje de Error */}
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-lg text-gray-400">Página en proceso</p>
    </div>
  );
}
