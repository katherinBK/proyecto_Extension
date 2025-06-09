// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el body de la página
    const body = document.body;

    // Aplicamos un fondo con un gradiente de morado a negro
    body.style.background = "linear-gradient(to bottom right, #2d0033, #000000)";

    // Ajustamos el color del texto para que contraste bien
    body.style.color = "#ffffff";

    // Aseguramos que ocupe toda la altura
    body.style.minHeight = "100vh";
});
