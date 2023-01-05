/* Funcion uno */
function saltarPrimeraLinea() {
    document.write("<br><br>");
}

/* Funcion dos */
function visualizarMensaje(mensaje) {
    document.write(mensaje);
    saltarPrimeraLinea();
}


/* Primer ejercicio */
let kilometros_recorridos_1 = 480;
let cantidad_litros = 40;
let total_1 = (cantidad_litros / kilometros_recorridos_1);

visualizarMensaje("La cantidad consumida para litros de gasolina por kilómetro es de: " + total_1 + " km/L.");

/* Segundo ejercicio */
let kilometros_recorridos_2 = 300;
let total_2 = (cantidad_litros / kilometros_recorridos_2);
visualizarMensaje("La cantidad consumida para litros de alcohol por kilómetro es de: " + total_2 + " km/L.");