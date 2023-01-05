function saltarLinea() {
    document.write("<br><br><br>");
}

function imprimirMensaje(frase) {
    document.write(frase);
    saltarLinea();
}


let edad = parseInt(prompt("¿Cuál es su edad?"));
let licencia = prompt("¿Tiene usted licencia de conducir? Responda S o N.");

if (edad >= 18 && licencia == "S") {
    imprimirMensaje("Usted puede conducir.")
}

if(edad < 18 || licencia == "N") {
    imprimirMensaje("Usted no puede conducir.")
}