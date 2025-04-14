//Super chamar o construtor da classe pai, para ele ser executado na classe filha!
//Quando você faz um extends de uma classe pai onde já existe um construtor precisamos chamar o construtor pelo super
//Não é recomendado que tenha muitas heranças!

class DispositivosEletronicos{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome, ' já ligado!')
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome, ' já desligado!')
        }
        
        this.ligado = false;
    }
}

class Smartphone extends DispositivosEletronicos{
    constructor(nome, cor){
        super(nome)
        this.cor = cor;
    }
}

const s1 = new Smartphone('Nome', 'Cor');

class Table extends DispositivosEletronicos{
    constructor(nome, modelo){
        super(nome);
        this.modelo = modelo
    }
}

const t1 = new Table('NomeTable','modeloTablet');
console.log(t1)
t1.ligar()
console.log(t1)
