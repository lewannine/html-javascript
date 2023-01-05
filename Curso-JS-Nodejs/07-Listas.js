//Definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago");

//Definición de una lista de forma abreviada.
const paisesDisponibles = ["Colombia", "Perú", "Chile"];

//Metodo .push: permite agregar nuevos valores al final de un arreglo.
ciudadesDisponibles.push("Montevideo");
paisesDisponibles.push("Uruguay");
console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

//Metodo unshift: Permite agregar nuevos valores al principio de un arreglo.
ciudadesDisponibles.unshift("Buenos Aires");
paisesDisponibles.unshift("Argentina");
console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

//Acceder a los elementos de una lista.
console.log(ciudadesDisponibles[1]);
console.log(paisesDisponibles[1]);

//Método splice: Elimina elementos de un arreglo y agregar otros elementos en su lugar.
paisesDisponibles.splice(1,2,"Venezuela", "Paraguay"); "---> Posicion del elemento a eliminar/ cantidad de elementos a eliminar/ elementos que se desee añadir en la posición anterior."
console.log(paisesDisponibles);

