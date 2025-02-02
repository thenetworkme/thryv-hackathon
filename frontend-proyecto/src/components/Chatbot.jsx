import React, { useState } from 'react';
import { Paperclip, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Footer from './Footer';

export default function Chatbot() {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('clothing'); // Estado inicial: "clothing"

  // Datos de categorías agrupados por tipo de producto
  const categoriesByType = {
    clothing: [
      { name: "Women's Jackets", image: '/images/womens-jackets.png' },
      { name: 'Sportswear', image: '/images/sportswear.png' },
    ],
    technology: [
      { name: 'Televisions', image: '/images/televisions.png' },
      { name: 'Industry Equipment', image: '/images/industry-equipment.png' },
    ],
    home: [
      { name: 'Home Products', image: '/images/home-products.png' },
      { name: 'Pot', image: '/images/pot.png' },
    ],
    others: [
      { name: 'Wedding Ring', image: '/images/wedding-ring.png' },
      { name: 'Industry Equipment', image: '/images/industry-equipment.png' },
    ],
  };

  // Filtrar categorías según el tipo seleccionado
  const filteredCategories = categoriesByType[selectedFilter].slice(0, 6);

  return (
    <div className="flex-1 flex flex-col bg-[#1a1a1a] text-white">
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8">¿Qué quieres saber?</h1>
        <div className="w-full max-w-2xl space-y-6">
          {/* Barra de Búsqueda */}
          <div className="relative w-full max-w-2xl">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Preguntar algo..."
              className="pr-32 h-12 w-full bg-transparent focus:ring-[#00A3FF] focus:border-[#00A3FF]"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Send size={18} className="text-muted-foreground" />
              </Button>
            </div>
          </div>

          {/* Sección Source by Category */}
          <section className="mt-12 w-full max-w-4xl">
            <h2 className="text-lg font-semibold mb-4">Source by Category</h2>
            {/* Filtros como Botones con Tailwind */}
            <div className="flex gap-3 overflow-x-auto pb-4">
              <button
                onClick={() => setSelectedFilter('clothing')}
                className={`px-5 py-2 rounded-full text-sm font-medium ${
                  selectedFilter === 'clothing'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Ropa
              </button>
              <button
                onClick={() => setSelectedFilter('technology')}
                className={`px-5 py-2 rounded-full text-sm font-medium ${
                  selectedFilter === 'technology'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Tecnología
              </button>
              <button
                onClick={() => setSelectedFilter('home')}
                className={`px-5 py-2 rounded-full text-sm font-medium ${
                  selectedFilter === 'home'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Hogar
              </button>
              <button
                onClick={() => setSelectedFilter('others')}
                className={`px-5 py-2 rounded-full text-sm font-medium ${
                  selectedFilter === 'others'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Otros
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto py-4">
              {filteredCategories.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 min-w-[120px]"
                >
                  {/* Imagen Circular */}
                  <div className="w-20 h-20 rounded-full bg-gray-700 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-center">{category.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
