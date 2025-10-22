export abstract class Personagem{
    constructor(private nome:string,private ataque:number, private vida:number){}

    atacar(personagem:Personagem){
        this.bordao();
        personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number){
        this.vida -= forcaAtaque;
        console.log(`${this.nome} está com ${this.vida}`);
    }

    abstract bordao():void;
}

export class Monstro extends Personagem{
    bordao(): void {
        console.log(`Monstro esta atacando`)
    }
}
export class Elfo extends Personagem{
    bordao(): void {
        console.log(`Elfo esta atacando`)
    }
}

const personagem1 = new Monstro('Monstro', 100, 1000);
const personagem2 = new Elfo('Elfo', 50, 650);

personagem1.atacar(personagem2)
