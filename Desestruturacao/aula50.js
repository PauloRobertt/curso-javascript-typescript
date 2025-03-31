//Desestruturação
//Exemplo Simples: 
/*
const numeros = [100, 200, 300, 400, 500, 600, 700];
const [primeirosNumero, segundoNumero, ...resto] = numeros;

console.log(resto)
*/

//Outro Exemplo:

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


/*outro jeito de pegar os numeros:
const [, [...resto], [, oito]] = numeros;
console.log(oito);
console.log(resto)
console.log(numeros[2][2]);
*/

//Exemplo mas simples: 
const [list1, list2, list3] = numeros;
console.log(list2[2])