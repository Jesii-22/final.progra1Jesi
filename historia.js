
// Array de frases sobre café
var frases = [
    "La vida es demasiado corta para beber café malo.",
    "El café es la respuesta a todo, incluso a la pregunta de cuál es la pregunta.",
    "La vida comienza después del café.",
    "Me gusta mi café como a mí mismo: fuerte, dulce y demasiado caliente para ti.",
    "Nuestra cultura funciona con café y gasolina, y la primera a menudo sabe a la segunda.",
    "La buena comunicación es tan estimulante como el café negro e igual de difícil.", 
    "Juzgo un restaurante por el pan y por el café."
    // Agrega más frases //
];

var indiceActual = 0;

function cambiarFrase() {
    document.getElementById("texto-frase").textContent = frases[indiceActual];

    // Incrementar el índice para obtener la siguiente frase
    indiceActual = (indiceActual + 1) % frases.length;
}

// Cambiar la frase cada 30 segundos
setInterval(cambiarFrase, 30000);

// Cambiar la frase inicial
cambiarFrase();
