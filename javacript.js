// Funciones para mostrar u ocultar los locales con efecto fadeIn
function mostrarSanTelmo() {
    ocultarYMostrarConFadeIn("sanTelmo", "palermo");
}

function mostrarPalermo() {
    ocultarYMostrarConFadeIn("palermo", "sanTelmo");
}

function ocultarYMostrarConFadeIn(localAMostrar, localAOcultar) {
    var localMostrar = document.getElementById(localAMostrar);
    var localOcultar = document.getElementById(localAOcultar);

    // Mostrar el local a mostrar con fadeIn
    mostrarConFadeIn(localMostrar, localOcultar);
    
    // Ocultar el local a ocultar de manera instantánea
    localOcultar.style.display = "none";
}

// Función para mostrar con fadeIn y ocultar con fadeOut
function mostrarConFadeIn(localMostrar, localOcultar) {
    // Mostrar el local a mostrar con opacidad gradualmente sin opacidad
    localMostrar.style.opacity = 0;
    localMostrar.style.display = "block";
    var opacidad = 0;
    var intervalo = setInterval(function() {
        opacidad += 0.05; // Ajusta el valor de opacidad gradualmente
        localMostrar.style.opacity = opacidad;
        if (opacidad >= 1) {
            clearInterval(intervalo); // Detiene el intervalo cuando la opacidad alcanza 1
        }
    }, 50); // Intervalo de tiempo para cada incremento de opacidad (50 ms)

    // Establecer opacidad completa después de 3 segundos
    setTimeout(function() {
        localMostrar.style.opacity = 1;
    }, 3000); // 3000 ms = 3 segundos
}

// Event listeners para el cambio de local y envío del formulario de reserva
document.getElementById('local').addEventListener('change', function() {
    var selectedLocal = this.value;
    var horaSanTelmo = document.getElementById('horaSanTelmo');
    var horaPalermo = document.getElementById('horaPalermo');

    if (selectedLocal === "San Telmo") {
        mostrarHoraReserva(horaSanTelmo, horaPalermo);
    } else if (selectedLocal === "Palermo") {
        mostrarHoraReserva(horaPalermo, horaSanTelmo);
    } else {
        horaSanTelmo.style.display = "none";
        horaPalermo.style.display = "none";
    }
});

function mostrarHoraReserva(horaAMostrar, horaAOcultar) {
    horaAMostrar.style.display = "block";
    horaAOcultar.style.display = "none";
}

// // Event listener para el envío del formulario de reserva
// document.getElementById('formularioReserva').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevenir el envío del formulario por defecto

//     // Obtener los valores del formulario y validar si es necesario

//     // Mostrar el popup
//     document.getElementById('popup').style.display = 'block';
//     document.getElementById('popup-overlay').style.display = 'block';
// });

// // Cerrar el popup al hacer clic en el fondo oscuro
// document.getElementById('popup-overlay').addEventListener('click', function() {
//     document.getElementById('popup').style.display = 'none';
//     this.style.display = 'none';
// });

// Event listener para el cambio de local en el formulario de reserva
document.getElementById('local').addEventListener('change', function() {
    var selectedLocal = this.value;
    var contenedorHoraSanTelmo = document.getElementById('contenedorHoraSanTelmo');
    var horaPalermo = document.getElementById('horaPalermo');

    if (selectedLocal === "San Telmo") {
        contenedorHoraSanTelmo.style.display = "block";
        horaPalermo.style.display = "none";
    } else if (selectedLocal === "Palermo") {
        contenedorHoraSanTelmo.style.display = "none";
        horaPalermo.style.display = "block";
    } else {
        contenedorHoraSanTelmo.style.display = "none";
        horaPalermo.style.display = "none";
    }
});

// Array de frases sobre café
var frases = [
    "La vida es demasiado corta para beber café malo.",
    "El café es la respuesta a todo, incluso a la pregunta de cuál es la pregunta.",
    "La vida comienza después del café."
    // Agrega más frases según sea necesario
];

var indiceActual = 0;

function cambiarFrase() {
    document.getElementById("texto-frase").textContent = frases[indiceActual];

    // Incrementar el índice para obtener la siguiente frase
    indiceActual = (indiceActual + 1) % frases.length;
}

// Cambiar la frase cada 45 segundos
setInterval(cambiarFrase, 45000);

// Cambiar la frase inicial
cambiarFrase();


//refrescar boton del form

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})