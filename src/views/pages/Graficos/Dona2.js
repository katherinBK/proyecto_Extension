import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const Dona = () => {
  const chartRef = useRef(null);
  const [objetivosTotales, setObjetivosTotales] = useState([10, 20, 30, 40, 50]); // Datos iniciales de los objetivos

  useEffect(() => {
    // Consultar la API para obtener los objetivos totales
    fetch("http://127.0.0.1:3009/objetivos_totales")
      .then((res) => res.json())
      .then((data) =>
        setObjetivosTotales([
          data.total_vender || 0,
          data.total_consultar || 0,
          data.total_agendar || 0,
        ])
      )
      .catch((error) => console.error("Error al obtener objetivos:", error));

    // Inicializar el gráfico solo cuando el canvas este disponible
    if (chartRef.current) {
      new Chart(chartRef.current.getContext("2d"), {
        type: "doughnut",
        data: {
          labels: ["Vender", "Consultar", "Agendar Cita"],
          datasets: [
            {
              label: "Objetivos Totales",
              data: objetivosTotales, // Se actualiza con los datos de la API traida del Backend
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Objetivos Totales" },
          },
        },
      });
    }
  }, [objetivosTotales]);

  return <canvas id="doughnutChart" ref={chartRef}></canvas>;
};

export default Dona;