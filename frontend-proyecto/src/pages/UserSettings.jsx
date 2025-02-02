import React, { useState } from 'react';
import { PencilIcon, ShoppingCartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function UserSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const [nombreEmpresa, setNombreEmpresa] = useState('Mi Empresa S.A.');
  const [correo, setCorreo] = useState('ejemplo@empresa.com');
  const [fotoPerfil, setFotoPerfil] = useState('/profile2.jpg');
  const [tiendasSeleccionadas, setTiendasSeleccionadas] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFotoPerfil(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleTienda = (tienda) => {
    if (!isEditing) return; // Solo permite cambios si está en modo edición
    setTiendasSeleccionadas((prev) => ({
      ...prev,
      [tienda]: !prev[tienda],
    }));
  };

  const tiendasPreferidas = [
    {
      nombre: 'Alibaba',
      icono: <ShoppingCartIcon className="h-5 w-5 text-blue-500" />,
    },
    {
      nombre: 'AliExpress',
      icono: <ShoppingCartIcon className="h-5 w-5 text-blue-500" />,
    },
    {
      nombre: 'Temu',
      icono: <ShoppingCartIcon className="h-5 w-5 text-blue-500" />,
    },
    {
      nombre: 'Amazon',
      icono: <ShoppingCartIcon className="h-5 w-5 text-blue-500" />,
    },
    {
      nombre: 'eBay',
      icono: <ShoppingCartIcon className="h-5 w-5 text-blue-500" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Card className="w-full max-w-2xl p-8 bg-gray-800/50 hover:bg-gray-700/50 transition-colors border border-gray-700 shadow-lg">
        {/* Avatar e Información */}
        <div className="flex items-center gap-6 mb-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600">
            <img
              src={fotoPerfil}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
            {isEditing && (
              <label
                htmlFor="file-upload"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
              >
                <PencilIcon className="h-6 w-6 text-white" />
              </label>
            )}
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-400">Correo electrónico</span>
            <h2 className="text-2xl font-semibold">{correo}</h2>
            <h3 className="text-xl text-gray-300">{nombreEmpresa}</h3>
          </div>
        </div>

        {/* Botón Editar Perfil */}
        <div className="flex justify-end mb-6">
          <Button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <PencilIcon className="mr-2 h-4 w-4" /> Editar perfil
          </Button>
        </div>

        {/* Campos Editables */}
        <div className="space-y-6">
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Nombre de la empresa
            </label>
            <Input
              id="companyName"
              type="text"
              value={nombreEmpresa}
              onChange={(e) => setNombreEmpresa(e.target.value)}
              placeholder="Ej. Mi Empresa S.A."
              disabled={!isEditing}
              className={`w-full px-3 py-2 bg-gray-700 border ${
                isEditing ? 'border-blue-500' : 'border-gray-600'
              } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400`}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Correo electrónico
            </label>
            <Input
              id="email"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="ejemplo@empresa.com"
              disabled={!isEditing}
              className={`w-full px-3 py-2 bg-gray-700 border ${
                isEditing ? 'border-blue-500' : 'border-gray-600'
              } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400`}
            />
          </div>

          {isEditing && (
            <Button className="w-full bg-green-600 hover:bg-green-700 transition-colors">
              Guardar cambios
            </Button>
          )}
        </div>

        {/* Sección Tiendas Preferidas */}
        <div className="mt-8 space-y-2">
          <div className="flex items-center space-x-2">
            <ShoppingCartIcon className="h-5 w-5 text-blue-500" />
            <label className="block text-sm font-medium text-gray-400">
              Tiendas preferidas
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {tiendasPreferidas.map(({ nombre, icono }) => (
              <div
                key={nombre}
                className="relative p-4 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {icono}
                    <span className="text-sm text-gray-400">{nombre}</span>
                  </div>
                  <button
                    onClick={() => toggleTienda(nombre)}
                    className={`${
                      tiendasSeleccionadas[nombre]
                        ? 'bg-blue-600'
                        : 'bg-gray-600'
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isEditing ? 'cursor-pointer' : 'cursor-not-allowed'
                    }`}
                    disabled={!isEditing}
                  >
                    <span className="sr-only">Activar {nombre}</span>
                    <span
                      className={`${
                        tiendasSeleccionadas[nombre]
                          ? 'translate-x-6'
                          : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
