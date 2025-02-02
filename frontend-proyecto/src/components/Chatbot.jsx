import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Footer from './Footer';

// Importamos la función que creaste para la IA
import { generateAIResponse } from '../../gemini.js';

export default function Chatbot() {
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('clothing');
  const [isLoading, setIsLoading] = useState(false); // Para animación de carga

  // NUEVO: Array de objetos para “productos baratos”
  const [cheapProducts, setCheapProducts] = useState([]);

  // Mapeo de iconos según la fuente/tienda:
  const sourceIcons = {
    aliexpress: 'https://m.media-amazon.com/images/I/41-1uF7Pn8L.png',
    amazon:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png',
  };

  // Categorías (por si las sigues usando)
  const categoriesByType = {
    clothing: [
      {
        name: "Women's Jackets",
        image: 'https://i.ibb.co/SDC7nKVZ/women-jacket.jpg',
      },

      { name: 'Sportswear', image: 'https://i.ibb.co/hxPSN7V6/producto1.jpg' },
    ],
    technology: [
      { name: 'Televisions', image: 'https://i.ibb.co/F41kF93M/TV.jpg' },

      {
        name: 'Industry Equipment',
        image: 'https://i.ibb.co/5xcG6dkv/196-Kuka-2.jpg',
      },
    ],
    home: [
      {
        name: 'Home Products',
        image: 'https://i.ibb.co/8DGNbvGx/shutterstock-1136753939-1024x683.jpg',
      },

      { name: 'Pot', image: 'https://i.ibb.co/h1wK97dv/pot.jpg' },
    ],
    others: [
      {
        name: 'Wedding Ring',
        image:
          'https://i.ibb.co/7JnCD7Mw/sandy-millar-8va-QKYnaw-Hw-unsplash-scaled.jpg',
      },

      { name: 'Cars', image: 'https://i.ibb.co/WpW2zLw6/crv-2024.jpg' },
    ],
  };

  const filteredCategories = categoriesByType[selectedFilter].slice(0, 6);

  // Productos en forma de "card"
  const exampleCheapProducts = [
    {
      name: 'KZ Carol ANC - Auriculares Bluetooth 5.3',
      priceRange: 'US $1.90 - 2.90',
      link: 'https://es.aliexpress.com/item/1005007595665337.html',
      image: 'https://i.ibb.co/Xxk8W455/KZ-carol.png',
      source: 'aliexpress',
    },
    {
      name: 'Chándal a rayas para hombre (2 piezas)',
      priceRange: 'US $0.79 - 0.85',
      link: 'https://es.aliexpress.com/item/1005006191097706.html',
      image: 'https://i.ibb.co/G3CD8fm0/chandal.png', // Cambié el link a un .jpg de ejemplo
      source: 'aliexpress',
    },
    {
      name: 'AZDENT-pulidor de diamante de goma Dental',
      priceRange: 'US $0.04 - 0.06',
      link: 'https://es.aliexpress.com/item/1005007369646197.html',
      image: 'https://i.ibb.co/ks37bZfS/dental.png',
      source: 'aliexpress',
    },
    {
      name: 'Soundcore by Anker Liberty 4 NC Wireless Earbuds',
      priceRange: 'US $2.50 - 3.00',
      link: 'https://www.amazon.com/soundcore-Cancelling-Reduction-Environment-Bluetooth/dp/B0BZV4QFP8/',
      image:
        'https://i.ibb.co/8LdQp1RS/Captura-de-pantalla-2025-02-02-171743.png',
      source: 'amazon',
    },
  ];

  const handleSend = async () => {
    if (!query.trim()) return;

    const lowerCaseQuery = query.trim().toLowerCase();
    setIsLoading(true);

    if (
      lowerCaseQuery ===
      'dame productos baratos para vender en república dominicana'
    ) {
      setCheapProducts(exampleCheapProducts);
      setAiResponse('');
      setIsLoading(false);
      setQuery('');
      return;
    }

    // Llamada normal a la IA
    try {
      const response = await generateAIResponse(query);
      setAiResponse(response);
      setCheapProducts([]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setQuery('');
    }
  };

  return (
    <div className="flex-1 flex flex-col border-gray-800  text-white">
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8">¿Qué quieres saber?</h1>
        <div className="w-full max-w-2xl space-y-6">
          <div className="relative w-full max-w-2xl">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Preguntar algo..."
              className="pr-32 h-12 w-full bg-transparent focus:ring-[#00A3FF] focus:border-[#00A3FF]"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={handleSend}
              >
                <Send size={18} className="text-muted-foreground" />
              </Button>
            </div>
          </div>

          {isLoading && (
            <div className="flex justify-center">
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {!isLoading && cheapProducts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {cheapProducts.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-800 rounded shadow hover:shadow-lg transition"
                >
                  <div className="w-full h-40 overflow-hidden mb-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    {item.source && sourceIcons[item.source] && (
                      <img
                        src={sourceIcons[item.source]}
                        alt={item.source}
                        className="w-6 h-6 ml-2"
                      />
                    )}
                  </div>

                  <p className="text-sm text-gray-300 mt-2">
                    {item.priceRange}
                  </p>
                </a>
              ))}
            </div>
          )}

          {!isLoading && aiResponse && cheapProducts.length === 0 && (
            <div className="mt-4 p-4 rounded bg-[#1a1a1a]">
              <p>{aiResponse}</p>
            </div>
          )}

          {!aiResponse && !isLoading && cheapProducts.length === 0 && (
            <section className="mt-12 w-full max-w-4xl">
              <h2 className="text-lg font-semibold mb-4">Source by Category</h2>
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
