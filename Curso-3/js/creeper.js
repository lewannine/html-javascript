let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "darkgreen";
pincel.fillRect(0,0,340,300);

pincel.fillStyle = "black";
pincel.fillRect(48,60,90,90);

pincel.fillStyle = "black";
pincel.fillRect(200,60,90,90);

pincel.fillStyle = "black";
pincel.fillRect(138,150,62,95);

pincel.fillStyle = "black";
pincel.fillRect(96,205,42,95);

pincel.fillStyle = "black";
pincel.fillRect(200,205,42,95);

/*
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    //cabeza
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(200, 50, 350 ,300);
    //ojos
    pincel.fillStyle = 'black';
    pincel.fillRect(250, 110, 90, 90);
    pincel.fillRect(410, 110, 90, 90);
    //nariz
    pincel.fillRect(340, 200, 70, 100);
     //boca
    pincel.fillRect(300, 240, 40, 110);
    pincel.fillRect(410, 240, 40, 110);
*/
