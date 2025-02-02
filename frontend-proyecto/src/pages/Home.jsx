import React, { useState } from 'react';
import { Eye, EyeOff, Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import * as api from '../api/aws';

function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!usernameOrEmail.trim()) {
      newErrors.username = 'El usuario es requerido';
    }
    if (!password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log({ username: usernameOrEmail, password });
    }
    setLoading(true);
    const data = await api.login({
      usernameOrEmail,
      password,
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
        <div className="relative">
          <div className="absolute -top-20 -left-20 bg-blue-100 rounded-full w-64 h-64 animate-pulse"></div>
          <div className="absolute top-40 right-20 bg-purple-100 rounded-full w-32 h-32 animate-pulse delay-300"></div>
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800"
            alt="Analytics Dashboard"
            className="relative z-10 rounded-2xl shadow-xl"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <img src="/fondo.png" alt="logo" className="w-64 mx-auto" />
          <div className="text-center texto">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Bienvenido a COMPASS!
            </h1>
            <p className="text-gray-600">
              Por favor, ingrese sus credenciales para continuar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Usuario
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={usernameOrEmail}
                  onChange={(e) => setUsernameOrEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ingrese su usuario"
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="············"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Recuérdame
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Iniciar Sesión
              </button>
            )}
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">o</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <Github className="h-5 w-5 text-gray-900 mr-2" />
                Continuar con GitHub
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600">
            Nuevo en el sistema?{' '}
            <Link
              to="/registrar"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Crear una cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
