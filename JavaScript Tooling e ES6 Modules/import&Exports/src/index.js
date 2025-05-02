//Utilizando o "as" posso mudar o nome da variavel importada, para não ocorrer conflito se tiver uma variavel já criada com o mesmo nome
import funcaoPadrao, { nome, sobrenome } from './module1.js';

console.log(nome, sobrenome)
console.log(funcaoPadrao(5, 5));
