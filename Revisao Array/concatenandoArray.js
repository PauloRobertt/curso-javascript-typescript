const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//1º Forma
// const a3 = a1.concat(a2, [7, 8, 9], 'Paulo');

//2º Forma(Utilizando ...spread)
// ...rest -> ... spread
// ...spread -> Espalhando os valores do array

//const a3 = [...a1, ...a2];
//const a3 = [...a1, 'Paulo', ...a2];

//console.log(a3)