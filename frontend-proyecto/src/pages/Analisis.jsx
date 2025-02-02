import React, { useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

// Registra los componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analisis = () => {
  const salesData = {
    labels: ['Competidor A', 'Competidor B', 'Competidor C', 'Competidor D'],
    datasets: [
      {
        label: 'Ventas Mensuales',
        data: [500, 700, 600, 800],
        backgroundColor: ['#3b82f6', '#10b981', '#f97316', '#ec4899'],
        borderColor: ['#3b82f6', '#10b981', '#f97316', '#ec4899'],
        borderWidth: 1,
      },
    ],
  };

  const productsData = {
    labels: ['Producto A', 'Producto B', 'Producto C', 'Producto D'],
    datasets: [
      {
        label: 'Unidades Vendidas',
        data: [30, 20, 40, 10],
        backgroundColor: ['#3b82f6', '#10b981', '#f97316', '#ec4899'],
        borderColor: ['#3b82f6', '#10b981', '#f97316', '#ec4899'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      },
    },
  };

  useEffect(() => {
    return () => {
      ChartJS.defaults.plugins.tooltip.enabled = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Análisis de la Competencia</h1>
          <p className="text-gray-400">
            Descubre cómo se comparan tus competidores en términos de ventas y
            productos populares.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <CardHeader className="p-6">
              <CardTitle className="text-xl font-semibold">
                Ventas Mensuales de Competidores
              </CardTitle>
              <CardDescription className="text-gray-400">
                Compara las ventas mensuales de tus principales competidores.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-72">
                <Bar data={salesData} options={options} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
            <CardHeader className="p-6">
              <CardTitle className="text-xl font-semibold">
                Productos Más Vendidos
              </CardTitle>
              <CardDescription className="text-gray-400">
                Identifica los productos más populares entre tus competidores.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-72">
                <Pie data={productsData} options={options} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analisis;
