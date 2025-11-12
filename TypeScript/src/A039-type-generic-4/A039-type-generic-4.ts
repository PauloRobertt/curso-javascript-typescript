type ObterChave = <O, K extends keyof O>(objeto: O, Chave:K) => O[K];
const obterChave:ObterChave = (objeto,chave)=>objeto[chave];

const animal = {
    cor: 'preto',
    vacina: ['Vacina 1', 'Vacina 2', 'Vacina 3'],
    idade: 13,
}


const animal1 = obterChave(animal,"cor");
const animal2 = obterChave(animal,"idade");
const animal3 = obterChave(animal,"vacina");

console.log(animal1, animal2, animal3);
