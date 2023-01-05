function saltarLinea() {
    document.write("<br><br><br>")
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}

function ejercReturn(peso,altura) {
    return(peso / (altura * altura));
}

/* Calcular IMC pidiendo datos al usuario */

let nombrePersona = prompt("Ingrese su nombre completo:");
let pesoInformado = prompt(nombrePersona + ", ingrese su peso actual:");
let alturaInformada = prompt(nombrePersona + ", ingrese su altura:");

let imcCalculado = ejercReturn(pesoInformado, alturaInformada);

if(imcCalculado < 18.5) {
    imprimir(nombrePersona + ", su IMC es: " + imcCalculado + " y usted está en bajo peso.");
}

if(imcCalculado >= 18.5 && imcCalculado <= 24.9) {
    imprimir(nombrePersona + ", su IMC es: " + imcCalculado + " y usted está en un peso normal.");
}

if(imcCalculado >= 25 && imcCalculado <= 29.9) {
    imprimir(nombrePersona + ", su IMC es: " + imcCalculado + " y usted está en sobrepeso.");
}

if(imcCalculado >= 30) {
    imprimir(nombrePersona + ", su IMC es: " + imcCalculado + " y usted está pasando por la obesidad.");
}