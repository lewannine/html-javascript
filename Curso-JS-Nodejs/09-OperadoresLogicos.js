//Operadores de comparación: >, <, >=, <=, ==, ===, !=, !==
const ciudadesDestino = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

//Palabra reservada if. Evalúa si una condición es verdadera o falsa, arrojando un resultado para cualquiera de ambas opciones
console.log(`Validando si la ciudad ${ciudadesDestino} se encuentra disponible...`);
if (ciudadesDisponibles.indexOf(ciudadesDestino) >= 0) {
    console.log("Ciudad disponible para viajar.");
} else {
    console.log("La ciudad no se encuentra disponible para viajar.");
}

const valorPasaje = "1000";

if (valorPasaje === 1000) {
    console.log("El valor corresponde con el tipo de dato.");
} else {
    console.log("El valor no corresponde con el tipo de dato.");
}
