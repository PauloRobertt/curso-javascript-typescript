/*Tipos Basicos*/

let nome: string = 'Luiz';
let idade: number = 17;
let adulto: boolean = false;
let simbolo: symbol = Symbol('Simbolo');
let big: bigint = 10n;

/*Array*/

let arrayNumeros: Array<number> = [1, 2, 3];
let arrayNumberos2: number[] = [1, 2, 3];

/*Objetos*/

let pessoa: { nome: string; idade: number } = { nome: 'nome', idade: 1 };
let pessoa2: { nome: string; idade: number; altura?: number } = {
  nome: 'nome',
  idade: 1,
  altura: 1.74,
};

/*Funções*/

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

const result = soma(1, 2);
