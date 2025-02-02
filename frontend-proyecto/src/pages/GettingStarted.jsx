import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Listbox, Transition, Switch } from '@headlessui/react';
import {
  HomeIcon,
  GlobeIcon,
  DollarSignIcon,
  ShoppingCartIcon,
  Upload,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const paisesYDivisas = {
  'Republica Dominicana': 'DOP',
  'Estados Unidos': 'USD',
  México: 'MXN',
  Colombia: 'COP',
  Argentina: 'ARS',
  Peru: 'PEN',
  Bolivia: 'BOB',
  Uruguay: 'UYU',
};

const paises = Object.keys(paisesYDivisas);
const divisas = ['DOP', 'USD', 'EUR', 'CNY', 'MXN', 'INR'];
const tiendasPreferidas = [
  {
    nombre: 'Alibaba',
    icono: <ShoppingCartIcon className="h-5 w-5 text-gray-400" />,
  },
  {
    nombre: 'AliExpress',
    icono: <ShoppingCartIcon className="h-5 w-5 text-gray-400" />,
  },
  {
    nombre: 'Temu',
    icono: <ShoppingCartIcon className="h-5 w-5 text-gray-400" />,
  },
  {
    nombre: 'Amazon',
    icono: <ShoppingCartIcon className="h-5 w-5 text-gray-400" />,
  },
  {
    nombre: 'eBay',
    icono: <ShoppingCartIcon className="h-5 w-5 text-gray-400" />,
  },
];

function GettingStarted() {
  const [nombreEmpresa, setNombreEmpresa] = useState('');
  const [pais, setPais] = useState(paises[0]);
  const [divisa, setDivisa] = useState(paisesYDivisas[paises[0]]);
  const [provincia, setProvincia] = useState('');
  const [tiendasSeleccionadas, setTiendasSeleccionadas] = useState({});
  const [fotoPerfil, setFotoPerfil] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPerfil(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTienda = (tienda) => {
    setTiendasSeleccionadas((prev) => ({
      ...prev,
      [tienda]: !prev[tienda],
    }));
  };

  const handlePaisChange = (nuevoPais) => {
    setPais(nuevoPais);
    setDivisa(paisesYDivisas[nuevoPais]);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl space-y-8"
      >
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 text-blue-500" />
          <h1 className="text-2xl font-bold text-white">
            Configura tu empresa
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-2/3 pr-4">
            <div className="flex items-center space-x-2">
              <HomeIcon className="h-5 w-5 text-blue-500" />
              <label className="block text-sm font-medium text-gray-400">
                Nombre de la empresa
              </label>
            </div>
            <input
              type="text"
              value={nombreEmpresa}
              onChange={(e) => setNombreEmpresa(e.target.value)}
              placeholder="Ej. Mi Empresa S.A."
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            />
          </div>
          <div className="relative">
            <img
              src={fotoPerfil || 'https://via.placeholder.com/100'}
              alt="Foto de perfil"
              className="h-24 w-24 rounded-full object-cover border-2 border-gray-700"
            />
            <label
              htmlFor="file-upload"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full cursor-pointer opacity-0 hover:opacity-100 transition-opacity"
            >
              <GlobeIcon className="h-6 w-6 text-white" />
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <GlobeIcon className="h-5 w-5 text-blue-500" />
            <label className="block text-sm font-medium text-gray-400">
              País de origen
            </label>
          </div>
          <Listbox value={pais} onChange={handlePaisChange}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white">
                <span className="block truncate">{pais}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <GlobeIcon className="h-5 w-5 text-gray-400" />
                </span>
              </Listbox.Button>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm text-white">
                  {paises.map((paisOption) => (
                    <Listbox.Option
                      key={paisOption}
                      value={paisOption}
                      className={({ active }) =>
                        `cursor-default select-none relative py-2 pl-3 pr-9 ${
                          active ? 'bg-blue-600 text-white' : 'text-gray-300'
                        }`
                      }
                    >
                      {paisOption}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <GlobeIcon className="h-5 w-5 text-blue-500" />
            <label className="block text-sm font-medium text-gray-400">
              Provincia o Estado
            </label>
          </div>
          <input
            type="text"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
            placeholder="Ej. Santo Domingo"
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <DollarSignIcon className="h-5 w-5 text-blue-500" />
            <label className="block text-sm font-medium text-gray-400">
              Divisa
            </label>
          </div>
          <Listbox value={divisa} onChange={setDivisa}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white">
                <span className="block truncate">{divisa}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <DollarSignIcon className="h-5 w-5 text-gray-400" />
                </span>
              </Listbox.Button>
              <Transition
                as={React.Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm text-white">
                  {divisas.map((divisaOption) => (
                    <Listbox.Option
                      key={divisaOption}
                      value={divisaOption}
                      className={({ active }) =>
                        `cursor-default select-none relative py-2 pl-3 pr-9 ${
                          active ? 'bg-blue-600 text-white' : 'text-gray-300'
                        }`
                      }
                    >
                      {divisaOption}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <div className="space-y-2">
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
                className={`relative p-4 rounded-lg bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {icono}
                    <span className="text-sm text-gray-400">{nombre}</span>
                  </div>
                  <Switch
                    checked={!!tiendasSeleccionadas[nombre]}
                    onChange={() => toggleTienda(nombre)}
                    className={`${
                      tiendasSeleccionadas[nombre]
                        ? 'bg-blue-600'
                        : 'bg-gray-600'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span className="sr-only">Activar {nombre}</span>
                    <span
                      className={`${
                        tiendasSeleccionadas[nombre]
                          ? 'translate-x-6'
                          : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/chat">
          <button
            type="button"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Guardar configuración
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default GettingStarted;
