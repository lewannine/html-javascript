let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,600,400);

function diseñarCircunferencia(x,y,radio) {
    pincel.fillStyle = "red";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

function limpiarPantalla() {
    pincel.clearRect(0,0,600,400);
}

let x = 0;
let sentido = 1;

function actualizarPantalla() {
    limpiarPantalla();
    if(x > 600){
        sentido = -1;
    }else if(x < 0){
        sentido = 1;
    }
    diseñarCircunferencia(x,20,10);
    x = x + sentido;
}

setInterval(actualizarPantalla,10);