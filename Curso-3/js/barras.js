function dibujarRectangulo(x, y, base, altura, color) {
        let pantalla = document.querySelector("canvas");
        let pincel = pantalla.getContext("2d");

        pincel.fillStyle=color;
        pincel.fillRect(x,y, base, altura);
        pincel.strokeStyle="black";
        pincel.strokeRect(x,y, base, altura);
    }

    function escribirTexto(x , y, texto) {
        let pantalla = document.querySelector("canvas");
        let pincel = pantalla.getContext("2d");

        pincel.font="15px Georgia";
        pincel.fillStyle="black";
        pincel.fillText(texto, x, y);
    }

    function dibujarBarra(x, y, serie, colores, texto) {

        escribirTexto(x, y - 10, texto);

        let sumaAltura = 0;
        for (var i = 0; i < serie.length; i++) {
            var altura = serie[i];
            dibujarRectangulo(x, y + sumaAltura, 50, altura, colores[i]);
            sumaAltura = sumaAltura + altura;
        }
    }

    let colores = ["blue","green","yellow", "red","gray"];
    let serie2009 = [6,47,41,3,3];
    let serie2019 = [81,9,3,3,4];

    dibujarBarra(50, 50, serie2009, colores, "2009");
    dibujarBarra(150, 50, serie2019, colores, "2019");