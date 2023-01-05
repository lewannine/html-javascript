/* Declaración de funcion de salto de línea */
function saltarLinea() {
    document.write("<br><br>");
}

/* Funcion mostrar frase */
function mostrarFrase(frase) {
    document.write(frase)
    saltarLinea();
}

/* Primer ejercicio */

mostrarFrase("¿La edad de Sergio es...?");
mostrarFrase("25");

/* Segundo ejercicio */
mostrarFrase("El año de nacimiento de Juan es: " + (2022 - 37));
mostrarFrase("El año de nacimiento de Pedro es: " + (2022 - 23));
mostrarFrase("El año de nacimiento de Carlos es: " + (2022 - 45));


/* Tercer ejercicio */

let ano_actual = 2022;
let ano_nacimiento_1 = 1985;
let ano_nacimiento_2 = 1999;
let ano_nacimiento_3 = 1977;

mostrarFrase("La edad de Juan es de: " + (ano_actual - ano_nacimiento_1) + " años.");
mostrarFrase("La edad de Pedro es de: " + (ano_actual - ano_nacimiento_2) + " años.");
mostrarFrase("La edad de Carlos es de: " + (ano_actual - ano_nacimiento_3) + " años.");

/* Cuarto ejercicio */

let edad_juan = 32;
let edad_pedro = 23;
let edad_carlos = 46;

let name1 = "Juan";
let name2 = "Pedro";
let name3 = "Carlos";

promedio = (edad_juan + edad_pedro + edad_carlos)/3
mostrarFrase("El promedio total de la edad entre " + name1 + ", " + name2 + ", " + "y " +  name3 + " es: " +  Math.round(promedio) + " años.");
