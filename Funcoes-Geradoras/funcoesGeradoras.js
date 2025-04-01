//Funções Geradoras
//Pausar o codigo em determinado local

function* geradora1(){
    //Codigo qualquer
    yield 'Valor1';

    //Codigo qualquer
    yield 'Valor2';

    //Codigo qualquer
    yield 'Valor3';
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

//Cada vez que a função é chamada ele retorna o proximo valor de yield

//Return vai retornar o resultado é fazer com que a função geradora termine fazendo com que o codigo depois do return não seja executada, ou seja, caso tenha um yiel depois ele não será executada