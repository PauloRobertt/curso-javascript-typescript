// Função Construtora -> Objetos
// Função fabrica -> objetos

//Função construtora por convenção deve ser iniciada com letra MAIUSCULA

//As duas funções são um molde para criar novos objetos

function Pessoa(nome, sobrenome){

    //Ex de atributos ou metodos que não podem ser chamados fora da function(atributos ou métodos privados):

    const ID = 123;

    const metodoPrivado = () =>{};

    //Atributos ou métodos públicos
    //Podem ser acessados fora da função
    this.nome = nome;
    this.sobrenome = sobrenome

    //Metodo
    this.nomeCompleto = () =>{
        return `${this.nome} ${this.sobrenome}`
    }
};

const p1 = new Pessoa('João', 'Eduadro');

console.log(p1.nomeCompleto());
