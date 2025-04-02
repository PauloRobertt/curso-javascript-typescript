//slice pode substituir: pop, shift, push, unshift.

//Slice também retorna o valor, mas em formato de ARRAY.

const nomes = ['Maria','Joao','Eduardo','Gabriel','Julia'];

//nomes.splice(indice atual, quantidade de indices que deseja ser removido, , elem1, elem2, elem3);
//elem1, elem2, elem3 -> São os elementos que se deseja adicionar

//pop
// const pop = nomes.splice(0, 1);
// console.log('POP: ',pop)

//shift
// const shift = nomes.splice(- 1 , 1);
// console.log('SHIFT: ', shift)

//push
// const push = nomes.splice(nomes.length, 0, 'Paulo');
// console.log(nomes, push);

//unshift
// const unshift = nomes.splice(0, 0, 'Paulo');
// console.log(nomes, unshift);