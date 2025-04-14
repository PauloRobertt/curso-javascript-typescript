//Metodo constructor é executado sempre que a classe é criada!

//Nas classes não precisamos atrelar um prototype, pois elas já fazem isso automaticamente
  
class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando!`)
    }
    comer(){
        console.log(`${this.nome} está comendo!`)
    }
    beber(){
        console.log(`${this.nome} está bebendo!`)
    }
}

const p1 = new Pessoa('Paulo', 'Robert');
console.log(p1.beber())