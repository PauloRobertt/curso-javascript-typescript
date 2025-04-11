/*
Object.values
Object.entries
Object.assign (des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

//Copiar Objeto para outro objeto (Utilizando o ..spread)

// const produto = { nome: 'caneca', preco: 1.8 };

//const produtoCopiado = { ...produto };

//Pode também realizar a criação de novas chaves no objeto

// const produtoCopiado = {
//     ...produto,
//     outraChave: 'Exemplo'
// };

//Outra maneira de copiar objetos (utlizando o assign)

// const produto = { nome: 'caneca', preco: 1.8 };

//Primeiro valor seria o {} que seria o objeto para onde eu quero copiar

//Segundo valor é o objeto que eu quero copiar
// const produtoCopiado = Object.assign({}, produto);

// getOwnPropertyDescriptor -> Vai retornar como o defineProperty do objeto esta configurado
// Object.getOwnPropertyDescriptor(nomeDoObjeto, 'nomeDaChave');


//Object.values(nomeDoObjeto) -> Retorna os valores das chaves do objeto24


//Object.entries() -> Cria um array com a chave e seu resultado

//OBS: Utilizando o entries é possivel fazer desestruturação do objeto.

for(let [chave, valor] of Object.entries(nomeDoObjeto)){}