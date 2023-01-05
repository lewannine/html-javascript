let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0,0,600,400);

function diseñarCircunferencia(x,y,radio,color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

let radio = 10;
let xAleatorio;
let yAleatorio;

function limpiarPantalla() {
    pincel.clearRect(0,0,600,400);
}

let x = 0;
let sentido = 1;


function diseñarObjetivo(x,y) {
    diseñarCircunferencia(x,y,radio + 20,"red");
    diseñarCircunferencia(x,y,radio + 10,"white");
    diseñarCircunferencia(x,y,radio,"red");
}

function actualizarPantalla() {
    limpiarPantalla();
    xAleatorio = moverObjetivo(600);
    yAleatorio = moverObjetivo(400);
    diseñarObjetivo(xAleatorio, yAleatorio);
    x++;
}

setInterval(actualizarPantalla,1000);

function moverObjetivo(maximo) {
    return Math.floor(Math.random()*maximo);
}

function dispararObjetivo(evento) {
    let x = evento.pageX - pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;

    // Área total del disparo certero
    if((x < xAleatorio + radio) && (x > xAleatorio - radio) && (y < yAleatorio + radio) && (y > yAleatorio - radio)) {
        alert("¡Acertaste en el blanco!")
    }
}

pantalla.onclick = dispararObjetivo;