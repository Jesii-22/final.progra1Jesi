// Función para mostrar u ocultar los locales con efecto fadeIn  //FUNCION JS ANIMACION
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

// Event listener para el botón de refrescar el formulario
document.getElementById('refresh').addEventListener('click', function() {
    location.reload();
});

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

// Refrescar boton del form
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', function() {
    location.reload();
});


// // funcion adaptacion tamaño video mobile

// window.onload = function() {
//     // Función para ajustar los estilos del video en función del ancho de la ventana
//     function ajustarEstilos() {
//         var videoFrame = document.querySelector('.video-frame');
//         if (window.innerWidth <= 390) {
//             // Si el ancho de la ventana es igual o menor a 390px, aplica los estilos
//             videoFrame.style.width = '95%';
//         } else {
//             // Si el ancho de la ventana es mayor a 390px, restaura los estilos originales
//             videoFrame.style.width = '100%';
//         }
//     }

//     // Llama a la función para ajustar los estilos cuando la ventana se redimensiona
//     window.onresize = ajustarEstilos;

//     // Llama a la función por primera vez para ajustar los estilos al cargar la página
//     ajustarEstilos();


//     // foto producto --> mobile

//     window.onload = function() {
//         // Función para ajustar los estilos de la imagen del producto en función del ancho de la ventana
//         function ajustarEstilos() {
//             var productImage = document.querySelector('.product-image');
//             if (window.innerWidth <= 390) {
//                 // Si el ancho de la ventana es igual o menor a 768px, aplica los estilos
//                 productImage.style.width = '80%';
//             } else {
//                 // Si el ancho de la ventana es mayor a 768px, restaura los estilos originales
//                 productImage.style.width = '40%';
//             }
//         }
    
//         // Llama a la función para ajustar los estilos cuando la ventana se redimensiona
//         window.onresize = ajustarEstilos;
    
//         // Llama a la función por primera vez para ajustar los estilos al cargar la página
//         ajustarEstilos();
//     };