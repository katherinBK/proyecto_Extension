import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const Dona2 = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3009/objetivos_cumplidos")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const labels = [];
          const values = [];
          const backgroundColors = [];
          let colorIndex = 0;

          const processData = (source, prefix, colorOffset) => {
            Object.entries(source).forEach(([key, value]) => {
              labels.push(`${prefix}: ${key}`);
              values.push(value);
              backgroundColors.push(`hsl(${(colorIndex * 60 + colorOffset) % 360}, 70%, 50%)`);
              colorIndex++;
            });
          };

          if (data.vender && data.vender.por_producto) {
            processData(data.vender.por_producto, 'Venta', 0);
          }
          if (data.consultar && data.consultar.por_tipo) {
            processData(data.consultar.por_tipo, 'Consulta', 120);
          }
          if (data.agendar_cita && data.agendar_cita.por_fecha) {
            processData(data.agendar_cita.por_fecha, 'Cita', 240);
          }

          if (values.length > 0) {
            setChartData({ labels, values, backgroundColors });
          }
        }
      })
      .catch((error) => console.error("Error al obtener objetivos cumplidos:", error));
  }, []);

  useEffect(() => {
    if (chartRef.current && chartData) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: "Objetivos Cumplidos por Detalle",
              data: chartData.values,
              backgroundColor: chartData.backgroundColors,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "right",
              labels: {
                boxWidth: 15,
                padding: 15,
              },
            },
            title: {
              display: true,
              text: "Desglose de Objetivos Cumplidos",
            },
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
  
  if (!chartData) {
    return <div style={{ textAlign: 'center', padding: '20px', color: '#888' }}>No hay datos de objetivos cumplidos para mostrar.</div>;
  }

  return <canvas ref={chartRef}></canvas>;
};

export default Dona2;