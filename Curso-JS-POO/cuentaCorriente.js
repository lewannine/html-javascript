//Objetos o instancias de la clase
class CuentaCorriente
{
    numero;
    #saldo;
    agencia;
    //Permite asignar valores por defecto a las instancias de la clase elegida.
    constructor() {
        //El signo # pasa el estado de una variable de publica a privada.
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
    }
    //Metodos o funciones
    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
    //return devuelve el valor de una operacion luego de su ejecucion en la funcion
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }
}