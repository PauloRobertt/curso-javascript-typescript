/* Escreva uma função que recebe 2 numeros e retorne o maior deles

const ReturnMaior = (x,y) =>{
    return x > y ? x : y;
}

console.log(ReturnMaior(2,1));


 Escreva um função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem(number). Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) =>
largura > altura;

console.log(ePaisagem(200, 100));


Escreva uma função que recebe um número e retorne o seguinte: 
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100


const functionDivisivel = (x) => {
    if(typeof(x) !== "number") return x;

    if(x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';

    if(x % 3 === 0) return 'Fizz';

    if(x % 5 === 0) return 'Buzz';

    return x;
}

for(let i=0;i<=100;i++){
    console.log(i, functionDivisivel(i));
}
*/