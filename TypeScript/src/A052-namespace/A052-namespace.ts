namespace MeuNameSpace {
  const nome = 'Paulo';

  export class PessoaNameSpace {
    constructor(public nome: string) {}
  }

  const pessoaNameSpace = new PessoaNameSpace(nome);
  console.log(pessoaNameSpace);

  export namespace OutroNameSpace {
    export const nomeNameSpace2 = 'Robert';
  }
}

const pessoaNameSpace = new MeuNameSpace.PessoaNameSpace('Teste');
console.log(pessoaNameSpace);

console.log(MeuNameSpace.OutroNameSpace.nomeNameSpace2);
