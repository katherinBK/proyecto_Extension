javascript
// 1. Obtiene el contexto del elemento canvas con el id 'pieChart'
const ctxPie = document.getElementById('pieChart').getContext('2d');

// 2. Define los datos y configuraciones del gráfico circular (pie)
const dataPie = {
  // Etiquetas que aparecerán en la leyenda y en las descripciones de los segmentos
  labels: ['Rojo', 'Azul', 'Amarillo', 'Verde', 'Púrpura'],
  datasets: [{
    // Etiqueta del conjunto de datos
    label: 'Distribución de Colores',
    // Datos numéricos que determinan el tamaño de cada segmento del círculo
    data: [12, 19, 3, 5, 2],
    // Colores de fondo para cada segmento del círculo
    backgroundColor: ['#800000', '#000080', '#808000', '#008000', '#800080'],
    // Desplazamiento al pasar el cursor sobre un segmento
    hoverOffset: 4
  }]
};

// 3. Configura las opciones del gráfico
const configPie = {
  // Tipo de gráfico: 'pie' indica un gráfico circular
  type: 'pie',
  // Datos definidos anteriormente
  data: dataPie,
  // Opciones de configuración
  options: {
    // Hace que el gráfico sea responsivo y se ajuste al tamaño del contenedor
    responsive: true,
    // Configuraciones de los plugins utilizados
    plugins: {
      // Configuración de la leyenda del gráfico
      legend: {
        // Posición de la leyenda en la parte superior
        position: 'top',
      },
      // Configuración del título del gráfico
      title: {
        // Muestra el título
        display: true,
        // Texto del título
        text: 'Gráfico Circular'
      }
    }
  },
};
export default Circulo