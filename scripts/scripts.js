// Comentario de línea

/*
Comentario múltiple líneas
*/

// Variables
var variable_1 = "Hola";
console.log(variable_1);

// Tipos de datos
var texto_comillas = 'Texto comillas';
var texto_comillas_dobles = "Texto comillas dobles";
var texto_comillas_internas = "Texto con 'comillas' internas";
var numero = 49;
var usuario_activo = true;
var variable_con_variable = texto_comillas;

// Funciones
function mensaje() {
    if (usuario_activo == true) {
        console.log("Usuario Activo");
    } else {
        console.log("Usuario Inactivo");
    }
}

// Llamado de la función mensaje()
mensaje();

// Loops
var nombres = ["Juan", "Eusebio", "Séfiro"];

function saludar(nombre) {
    console.log("Buen día " + nombre);
}

nombres.forEach(function (nombre_individual) {
    saludar(nombre_individual);
});

// Objetos
var automovil = {
    marca: "Fiat",
    modelo: "Uno Way",
    anio: 2018,
    motor: 1400,
    acelerar: function () {
        console.log("Acelerando...")
    }
};

console.log(automovil.modelo)

// DOM Document Object Model
// Interpretación JS de las páginas web, con estructura de árbol
var encabezado = document.querySelector("h3");
console.log(encabezado);
encabezado.innerHTML = '<h3 class="margen_superior"><i class="fa-brands fa-js"></i> Introducción a JavaScript</h3>';

// Eventos y Listeners
function cambiaColor() {
    this.classList.toggle("cambia_color");
}

document.querySelector("body").addEventListener("click", cambiaColor);