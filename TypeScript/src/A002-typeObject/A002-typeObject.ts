//Ao criar um objeto no ts, não poderia criar outras chaves dentro desse objeto

const objetoA = {
  chaveA: 'ChaveA',
  chaveB: 'ChaveB',
};

objetoA.chaveA;
objetoA.chaveB;

// Caso queria permitir uma chaveC, uma das forma seria criar a chave como sendo opcional

const objetoB: { chaveA: string; chaveB: string; chaveC?: string } = {
  chaveA: 'ChaveA',
  chaveB: 'ChaveB',
};

objetoA.chaveA;
objetoA.chaveB;

//Outra forma é caso não souber qual vai ser a chave criada no objeto, utilizamos o index signature: é uma forma de definir o tipo de objetos que têm propriedades dinâmicas, cujos nomes e tipos de valor não são conhecidos antecipadamente

const objetoC: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'ChaveA',
  chaveB: 'ChaveB',
};

objetoC.chaveA;
objetoC.chaveB;
objetoC.chaveD = 'novaChave';

//Caso queira que alguma propriedade no objeto não possa ser modificada/alterada, pode ser utilizada o readOnly

const objetoD: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'ChaveA',
  chaveB: 'ChaveB',
};

objetoD.chaveA;
objetoD.chaveB;
objetoD.chaveD = 'novaChave';
