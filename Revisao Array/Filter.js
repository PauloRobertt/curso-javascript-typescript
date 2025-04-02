//Filter

//Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida

//Retorna os números maiores que 13

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numMaiores10 = numeros.filter(num => num > 10);

// console.log(numMaiores10);


//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

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

const pessoasFiltradasNome = pessoas.filter(pessoa => pessoa.nome.length >= 5);
const pessoasFiltradasIdade = pessoas.filter(pessoa => (pessoa.idade > 50));
const pessoasFiltradasNomeA = pessoas.filter(pessoa => {
    if(pessoa.nome.charAt(pessoa.nome.length -1) === 'a'){
        return pessoa;
    }
});

console.log(pessoasFiltradasNomeA)
