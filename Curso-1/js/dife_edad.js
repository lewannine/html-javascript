/* Tercer ejercicio */
let diferenciaEdad = (2003 - 1985);

function mostrarDiferencia(diferencia) {
    document.write(diferencia);
    saltarSegundaLinea();
}
mostrarDiferencia("La diferencia de edad entre mi hermano y yo es de: " + diferenciaEdad + " años.");

/* Cuarto ejercicio */

function saltarSegundaLinea() {
    document.write("<br><br><br><hr><br><br>");
}

function imprimir(frase) {
    document.write("<big>" + frase + "</big>");
    saltarSegundaLinea();
}

    let fechaFutura = 2025;
    imprimir("Bienvenidos a mi código.");
    // Este código calcula las edades de Juan, Pedro y Carlos
    imprimir("Juan tiene: " + (fechaFutura-2000) + " años.");
    imprimir("Pedro tiene: " + (fechaFutura-1995) + " años.");
    fechaFutura = 2030
    imprimir("Carlos tiene: " + (fechaFutura-2005) + " años.");