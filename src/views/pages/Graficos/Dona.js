import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const Dona = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3009/objetivos_totales")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setChartData({
            totales: [
              data.total_vender || 0,
              data.total_consultar || 0,
              data.total_agendar || 0
            ],
            cumplidos: [
              data.cumplidos_vender || 0,
              data.cumplidos_consultar || 0,
              data.cumplidos_agendar || 0
            ]
          });
        }
      })
      .catch((error) => console.error("Error al obtener objetivos:", error));
  }, []);

  useEffect(() => {
    if (chartRef.current && chartData && chartData.totales.some(v => v > 0)) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Vender", "Consultar", "Agendar Cita"],
          datasets: [
            {
              label: "Objetivos Totales",
              data: chartData.totales,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              hoverOffset: 4,
            },
            {
              label: "Objetivos Cumplidos",
              data: chartData.cumplidos,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              hoverOffset: 4,
            }
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Objetivos Totales vs Cumplidos" },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [chartData]);

  if (!chartData || !chartData.totales.some(v => v > 0)) {
    return <div style={{ textAlign: 'center', padding: '20px', color: '#888' }}>No hay datos de objetivos para mostrar.</div>;
  }

  return <canvas ref={chartRef}></canvas>;
};

export default Dona;