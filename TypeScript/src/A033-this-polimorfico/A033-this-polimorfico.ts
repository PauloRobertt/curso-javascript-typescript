class Calculadora{
    constructor(public numeroInicial:number){}

    add(numero:number){
        this.numeroInicial += numero;
        console.log("this", this)
        return this;
    }

    sub(numero:number){
        this.numeroInicial -= numero;
        console.log("this", this)
        return this;
    }

    mult(numero:number){
        this.numeroInicial *= numero;
        console.log("this", this)
        return this;
    }
}

class SubCalculadora extends Calculadora{
    div(numero:number){
        this.numeroInicial /= numero;
        console.log("this", this)
        return this;
    }
}

/*
const calculadora = new Calculadora(10);
calculadora.add(5).sub(5).mult(2);
*/

const subCalculadora = new SubCalculadora(10)
subCalculadora.add(5).sub(5).mult(2).div(2);
