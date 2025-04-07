//Objetos literal
// Chave: valor
// const objeto = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// };

//Construtor do objeto
// const objeto = new Object()

// objeto.nome = 'Luiz';
// objeto.sobrenome = 'Otávio'

//Formas de chamar esses valores
// console.log(objeto.nome);
// console.log(objeto['nome']);

//Acessar objetos dinamicos
// const chave = 'nome';
// console.log(objeto[chave]);

//Apagar uma chave de algum objeto
// delete objeto.nome;

//Objetos podem conter metodos que são funções dentro do objeto que executam ações

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome

    //Para que nenhum objeto instanciado desse construtor seja modificado
    Object.freeze(this)
}

const p1 = new Pessoa('Paulo', 'Gomes');

//Objeto não podera ser modificado
Object.freeze(p1);

p1.nome = 'String'; 

console.log(p1);