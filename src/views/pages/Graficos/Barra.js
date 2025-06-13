import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const Barra = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); //  Guardar la referencia del gráfico
  const [totalCitas, setTotalCitas] = useState(0);

  useEffect(() => {
    // ✅ Consultar la API de citas
    fetch("http://127.0.0.1:3009/estadisticas_citas")
      .then((res) => res.json())
      .then((data) => setTotalCitas(data.total_citas))
      .catch((error) => console.error("Error al obtener citas:", error));

    // Si hay un gráfico previo, se elimina antes de crear uno nuevo para evitar una excepcion
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    //Inicializar el nuevo gráfico en el canvas
    if (chartRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current.getContext("2d"), {
        type: "bar",
        data: {
          labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
          datasets: [
            {
              label: "Citas Agendadas",
              data: Array(5).fill(totalCitas),    // Consultar la API para obtener los objetivos totales

              backgroundColor: [
                "rgba(255, 99, 132, 0.7)",
                "rgba(54, 162, 235, 0.7)",
                "rgba(255, 206, 86, 0.7)",
                "rgba(75, 192, 192, 0.7)",
                "rgba(153, 102, 255, 0.7)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Citas Agendadas por Mes" },
          },
          scales: { y: { beginAtZero: true } },
        },
      });
    }
  }, [totalCitas]); // El gráfico se actualiza correctamente cuando los datos cambian

  return <canvas id="barChart" ref={chartRef}></canvas>;
};

export default Barra;