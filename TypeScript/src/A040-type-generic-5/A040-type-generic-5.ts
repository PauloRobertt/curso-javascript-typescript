export class Pessoa<T,U>{
    constructor(public nome:T,public idade:U){}
}

const pessoa1 = new Pessoa('Luiz', 10)
const pessoa2 = new Pessoa(['Luiz'], 20)
const pessoa3 = new Pessoa(['Luiz'],{idade: 30})
const pessoa4 = new Pessoa<string,number>('Luiz', 10);

class Pilha <T>{
    private contador = 0;
    private elements: {[k: number]: T} = {};

    push(elemento: T):void {
        this.elements[this.contador] = elemento;
        this.contador++;
    }

    pop():void{
        if(this.isEmpty()){
            return undefined
        }

        this.contador--;
        delete this.elements[this.contador]
    }

    isEmpty():boolean{
        return this.contador === 0;
    }

    checkAllElements():void {
        console.log('Elementos: ')
        for(let i=0;i<Object.keys(this.elements).length;i++){
            console.log(this.elements[i])
        }
    }
}

const pilha = new Pilha();
pilha.push('livro');
pilha.push('livro2');
pilha.pop()
pilha.checkAllElements()
