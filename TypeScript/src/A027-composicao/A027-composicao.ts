class Carro{
    private readonly motor = new Motor()

    ligar():void{
        this.motor.ligar();
    }

    acelerar():void{
        this.motor.acelerar();
    }

    parar():void{
        this.motor.parar();
    }
}

class Motor{
    ligar():void{
        console.log('Motor ligado')
    }

    acelerar():void{
        console.log('Motor acelerando')
    }

    parar():void{
        console.log('Motor parando')
    }
}


const carro1 = new Carro();

carro1.ligar()
carro1.acelerar()
carro1.parar()
