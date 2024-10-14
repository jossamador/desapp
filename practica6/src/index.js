"use strict";
var _a;
// Función para simular la generación de contenido
function generateGameContent(game) {
    return `El videojuego ${game} es uno de los títulos más interesantes de su género. Con gráficos impresionantes y una jugabilidad envolvente, ${game} ha capturado la atención de jugadores de todo el mundo. Desde su lanzamiento, ha recibido críticas positivas por su narrativa cautivadora y su diseño de niveles innovador.`;
}
// Manejador de eventos para el formulario
(_a = document.getElementById("gameForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    const gameTopic = document.getElementById("gameTopic").value;
    if (gameTopic) {
        const generatedContent = generateGameContent(gameTopic);
        document.getElementById("contentText").textContent = generatedContent;
        document.getElementById("generatedContent").classList.remove("hidden");
    }
});
