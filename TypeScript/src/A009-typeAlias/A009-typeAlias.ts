//Criar um apelido para um tipo

//OBS: Por convenção tipos criados são começados por letra maiuscula

type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'vermelho' | 'verde' | 'azul';
type CorCMYK = 'ciano' | 'magenta' | 'amarelo' | 'preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = { nome: 'Paulo', idade: 21, salario: 0 };

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
