// Función para simular la generación de contenido
function generateGameContent(game: string): string {
    return `El videojuego ${game} es uno de los títulos más interesantes de su género. Con gráficos impresionantes y una jugabilidad envolvente, ${game} ha capturado la atención de jugadores de todo el mundo. Desde su lanzamiento, ha recibido críticas positivas por su narrativa cautivadora y su diseño de niveles innovador.`;
}

// Manejador de eventos para el formulario
document.getElementById("gameForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const gameTopic = (document.getElementById("gameTopic") as HTMLInputElement).value;

    if (gameTopic) {
        const generatedContent = generateGameContent(gameTopic);
        (document.getElementById("contentText") as HTMLElement).textContent = generatedContent;
        (document.getElementById("generatedContent") as HTMLElement).classList.remove("hidden");
    }
});
