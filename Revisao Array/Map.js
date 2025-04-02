//Cria um novo array com valores do array original, mas podem ser modificados
//Map sempre terá o mesmo tamanho do array original


//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do object
//Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Ana', idade: 29 },
    { nome: 'Carlos', idade: 35 },
    { nome: 'Fernanda', idade: 41 },
    { nome: 'Marcos', idade: 50 },
    { nome: 'Beatriz', idade: 27 },
    { nome: 'Ricardo', idade: 33 },
    { nome: 'Juliana', idade: 45 },
    { nome: 'Pedro', idade: 38 },
    { nome: 'Camila', idade: 31 }
];

const stringNome = pessoas.map(pessoa => `Nome: ${pessoa.nome}`);
const removeNome = pessoas.map(pessoa => ({idade: pessoa.idade}));
const idPessoa = pessoas.map((pessoa, index)=> ({id: index, nome: pessoa.nome, idade:pessoa.idade}));

console.log(pessoas)
console.log(idPessoa)