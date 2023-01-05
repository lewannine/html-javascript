let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0,0,600,400);

function exibirAlerta(evento) {
    let x = evento.pageX - pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;
    //Las coordenadas serán cargadas automaticamente en el momento de hacer click en la pantalla.
    console.log(evento);
    alert("Eje X: " + x + ", y Eje Y: " + y + ".");
}

function dibujarCirculo(evento) {
    let x = evento.pageX - pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;

    pincel.fillStyle = "blue";
    pincel.beginPath();
    //1.Eje X - 2.Eje Y - 3.Radio del circulo - 4. Angulo Inicial - 5.Nro PI al cuadrado.
    pincel.arc(x,y,10,0,2*3.14);
    pincel.fill();
    console.log("Eje X: " + x + " | Eje Y: " + y);
}

pantalla.onclick = dibujarCirculo;

