class Escritor{
    constructor(public nome:string, private _ferramenta:Ferramenta | null = null){}

    set ferramenta(value:Ferramenta | null){
        this._ferramenta = value
    }

    get ferramenta(){
        return this._ferramenta;
    }

    escrever():void{
        if(this.ferramenta) return this.ferramenta.escrever();
        return console.log('Escrito não possui ferramenta')
    }
}

abstract class Ferramenta{
    constructor(public nome:string){}

    abstract escrever():void;
}

class Caneta extends Ferramenta{
    escrever(): void {
        console.log(`${this.nome} esta escrevendo`)
    }
}
class MaquinaDeEscrever extends Ferramenta{
    escrever(): void {
        console.log(`${this.nome} esta digitando`)
    }
}

const escritor = new Escritor('Paulo');
const caneta = new Caneta('bic');
const maquina = new MaquinaDeEscrever('Maquina');

escritor.ferramenta = maquina;

escritor.escrever()
