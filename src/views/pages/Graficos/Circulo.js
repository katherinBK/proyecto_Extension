import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const Circulo = () => {
  const chartRef = useRef(null);
  const [mensajesTotales, setMensajesTotales] = useState([12, 19, 3, 5, 2]); // Datos iniciales

  useEffect(() => {
    // Consultar la API para obtener la totalidad de mensajes enviados
    fetch("http://127.0.0.1:3009/mensajes_totales")
      .then((res) => res.json())
      .then((data) => setMensajesTotales(data.mensajes || [12, 19, 3, 5, 2]))
      .catch((error) => console.error("Error al obtener mensajes:", error));

    // Inicializar el gráfico solo cuando el canvas esté disponible
    if (chartRef.current) {
      new Chart(chartRef.current.getContext("2d"), {
        type: "pie",
        data: {
          labels: ["Rojo", "Azul", "Amarillo", "Verde", "Púrpura"],
          datasets: [
            {
              label: "Mensajes Totales",
              data: mensajesTotales, //  Se actualiza con los datos de la API
              backgroundColor: ["#800000", "#000080", "#808000", "#008000", "#800080"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Distribución de Mensajes Totales" },
          },
        },
      });
    }
  }, [mensajesTotales]);

  return <canvas id="pieChart" ref={chartRef}></canvas>;
};

export default Circulo;