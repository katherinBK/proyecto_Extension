javascript
// 1. Obtiene el contexto 2D del elemento canvas con id 'barChart'
const ctxBar = document.getElementById('barChart').getContext('2d');

// 2. Define los datos que se van a graficar
const dataBar = {
  // Etiquetas para el eje X, representando los meses
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [{
    // Nombre del conjunto de datos, aparecerá en la leyenda
    label: 'Ventas',
    // Valores correspondientes a cada mes
    data: [65, 59, 80, 81, 56],
    // Colores de fondo para cada barra (diferentes colores)
    backgroundColor: [
      'rgba(255, 99, 132, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)'
    ],
    // Borde de cada barra
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)'
    ],
    // Ancho del borde de las barras
    borderWidth: 1
  }]
};

// 3. Configura las opciones del gráfico de barras
const configBar = {
  // Tipo de gráfico
  type: 'bar',
  // Datos definidos arriba
  data: dataBar,
  // Opciones del gráfico
  options: {
    // Hace que el gráfico se ajuste al tamaño del contenedor
    responsive: true,
    // Configuración de plugins como leyenda y título
    plugins: {
      // Posición de la leyenda
      legend: {
        position: 'top',
      },
      // Título del gráfico
      title: {
        display: true,
        text: 'Gráfico de Barras'
      }
    },
    // Configuración de los ejes
    scales: {
      y: {
        // Comienza el eje Y desde cero
        beginAtZero: true
      }
    }
  },
};
export default Barra