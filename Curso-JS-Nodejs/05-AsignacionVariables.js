//Variable Const: Variable que no cambia su valor con el tiempo
const COSTE = 5000;
let añadido = 250;
//Error: Const no permite redeclarar el valor de una variable en ninguna parte del programa.
//let COSTE = COSTE + añadido;

//Variable Let: Variable que cambia su valor con el tiempo, y que solo se encuentra disponible en un bloque determinado del programa (Variable local).

{
    let nombrePrimerCliente = "Sergio";
    //Variable Var: Variable que cambia su valor con el tiempo, y que permite visualizar su contenido en cualquier parte del código (Variable global).
    var nombreSegundoCliente = "Camilo";
    console.log(nombrePrimerCliente);
}

console.log(nombrePrimerCliente);
console.log(nombreSegundoCliente);
