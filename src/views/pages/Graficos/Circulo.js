import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const Circulo = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3009/mensajes_totales")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.mensajes && data.labels) {
          setChartData(data);
        }
      })
      .catch((error) => console.error("Error al obtener mensajes:", error));
  }, []);

  useEffect(() => {
    if (chartRef.current && chartData && chartData.mensajes.some(v => v > 0)) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "pie",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: "Mensajes Totales",
              data: chartData.mensajes,
              backgroundColor: ["#36A2EB", "#FF6384"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Distribución de Mensajes" },
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

  if (!chartData || !chartData.mensajes.some(v => v > 0)) {
    return <div style={{ textAlign: 'center', padding: '20px', color: '#888' }}>No hay datos de mensajes para mostrar.</div>;
  }

  return <canvas ref={chartRef}></canvas>;
};

export default Circulo;