function saltarLinea() {
    document.write("<br><br><br>")
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}

let multiplicador = 1;
imprimir("TABLA DEL 5.");
while (multiplicador <= 10) {
    imprimir(5 * multiplicador);
    multiplicador = multiplicador + 1;
}

imprimir("TABLA DEL 10.");
for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
    imprimir(10 * multiplicador);
}
