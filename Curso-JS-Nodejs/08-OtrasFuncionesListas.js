//Definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

//Definición de una lista de forma abreviada.
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Uruguay", "Venezuela"];

//Verificar la cantidad de elementos que se tienen dentro de un arreglo.
const cantidadCiudades = ciudadesDisponibles.length;
console.log(`En esta lista de ciudades tenemos: ${cantidadCiudades} elementos.`);
//Esta forma permite ahorrar una declaración de variable llamando de forma inmediata al numero de elementos en el template.
console.log(`En esta lista de paises tenemos: ${paisesDisponibles.length} elementos.`);

//La funcion shift remueve el primer elemento de un arreglo.
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En esta lista de ciudades tenemos: ${ciudadesDisponibles.length} elementos.`);

//La función pop remueve el ultimo elemento de un arreglo.
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En esta lista de ciudades tenemos: ${ciudadesDisponibles.length} elementos.`);

//Funcion que filtra los elementos de una lista siguiendo una determinada condición.
const paisesFiltrados = paisesDisponibles.filter((e) => e == "Brasil");

//Función que separa los elementos de un arreglo con un signo que se le ingrese.
console.log(paisesDisponibles.join("-"));

//Ordenar los elementos de un arreglo.
console.log(paisesDisponibles.sort());

//Conocer la posición de un elemento luego de ordenar una lista.
console.log(`Perú se encuentra en la posición: ${paisesDisponibles.indexOf("Perú")}`);

//Unificar dos listas a la vez.
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesYCiudades);