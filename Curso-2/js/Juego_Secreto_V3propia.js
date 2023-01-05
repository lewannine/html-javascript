let input = document.querySelector("input");
input.focus();

function aleatorio() {
    return Math.round(Math.random()*10);
}

function sortearNumero(cantidad) {
    let arreglo = [];
    let contador = 1;

        while(contador <= cantidad) {
            let numeroAleatorio = aleatorio();

            console.log(numeroAleatorio);

            let encontrado = false;
            if(numeroAleatorio != 0) {
                for(let posicion = 0; posicion < arreglo.length; posicion++) {

                    if(numeroAleatorio == arreglo[posicion]) {
                        encontrado = true;
                        break;
                    }
                }
                if(encontrado == false) {
                    arreglo.push(numeroAleatorio);
                    contador++;
                }
            }
        }

    return arreglo;
}

let arreglo = sortearNumero(4);

console.log(arreglo);


function verificar() {

    let encontrado = false;

        for(let posicion = 0; posicion < arreglo.length; posicion++) {

            if (parseInt(input.value) == arreglo[posicion]) {
                alert("Usted ha acertado.");
                encontrado = true;
                break;
            }
        }
            if(encontrado == false) {
                alert("Usted ha fallado.");
            }
    }

    //Vacía el campo input para que pueda ser ingresado otro valor.
    input.value = "";
    //Focaliza al elemento input para no tener que activarlo con el cursor del mouse.
    input.focus();

let button = document.querySelector("button");
button.onclick = verificar;
