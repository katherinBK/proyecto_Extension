import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const Barra = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3009/estadisticas_citas")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.total_citas !== 'undefined') {
          setChartData(data.total_citas);
        }
      })
      .catch((error) => console.error("Error al obtener citas:", error));
  }, []);

  useEffect(() => {
    if (chartRef.current && chartData > 0) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["Citas Totales"],
          datasets: [
            {
              label: "Citas Agendadas",
              data: [chartData],
              backgroundColor: ["rgba(75, 192, 192, 0.7)"],
              borderColor: ["rgba(75, 192, 192, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: true, text: "Total de Citas Agendadas" },
          },
          scales: { y: { beginAtZero: true } },
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

  if (!chartData) {
    return <div style={{ textAlign: 'center', padding: '20px', color: '#888' }}>No hay datos de citas para mostrar.</div>;
  }

  return <canvas ref={chartRef}></canvas>;
};

export default Barra;