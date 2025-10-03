// | -> Union types (OR)
// & -> Interserction Type (AND)

//É quando você combina dois(ou mais) tipos em um só.

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = { nome: 'Paulo', idade: 21, sobrenome: 'Lima' };

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';

type intersecao = AB & AC & AD;

//Se o valor dos types tiver algum valor em comun o valor da intersecao sera o valor em comum entre eles
