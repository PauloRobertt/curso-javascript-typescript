//Reduce -> Mas utilizada para reduzir o array em um unico elemento

//array.reduce((acumlador, valor, indice, array)=> {});

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const somaNumeros = numeros.reduce((acumulador, num)=>{
//     return acumulador += num;
// })

// console.log(somaNumeros)

//Retorne a pessoa mais velha
const pessoas = [
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

const pessoaMaisVelha = pessoas.reduce((acumulador, pessoa)=>{
    if(acumulador < pessoa.idade){
        acumulador = pessoa.idade;
    }

    return acumulador
}, 0);

console.log(pessoaMaisVelha)