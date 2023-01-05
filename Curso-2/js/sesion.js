function saltarLinea() {
    document.write("<br><br><br>");
}

function imprimirMensaje(frase) {
    document.write(frase);
    saltarLinea();
}


let inicioDeSesionRegistrado = "alura";
let contrasenhaRegistrada = "alura321";

let maximoIntentos = 3;
let intentoActual = 1;

    while(intentoActual <= maximoIntentos){
        let inicioDeSesionIngresado = prompt("Ingrese su usuario:");
        let contrasenhaIngresada = prompt("Ingrese su contraseña:");

        if(inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada){
            alert("Bienvenido al sistema: " + inicioDeSesionIngresado + ".");
            intentoActual = maximoIntentos; // Lo hice bien, así que paso todos los intentos que falten y salgo del loop. Allá abajo aumentará +1! 
        } else {
            if (intentoActual == 3) {
                alert("Se han agotado el número permitido de intentos.");
            } else {
                alert("Inicio de sesión inválido. Por favor intente de nuevo.");
            }
        }

       // vaya al próximo intento
        intentoActual = intentoActual +1
    }
