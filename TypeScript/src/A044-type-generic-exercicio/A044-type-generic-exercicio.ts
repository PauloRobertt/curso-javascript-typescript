/*
Projeto sistema de votos

* Utilizar classes
*2 Votações
    Qual sua linguagem de programação favorita?
    -Python
    -JavaScript
    -TypeScript

    Qual sua cor preferida?
    -Vermelho
    -Verde
    -Amarelo
*Relação entre classes

*/

type Options = {
    nomeDaOpcao:string,
    quantidadeDeVotos: number;
}

class Votation {
  constructor(private pergunta:string, private readonly opcoes: Options[] = []) {}

  addVotation(opcao: Options): void {
    this.opcoes.push(opcao);
  }

  showVotation(): void {
    console.log(this.pergunta);
    for(let opcao of this.opcoes){
        console.log(opcao.nomeDaOpcao, opcao.quantidadeDeVotos);
    }
    console.log('###')
    console.log('')
  }

  vote(posicao:number){
    if(!this.opcoes[posicao]) return;
    this.opcoes[posicao].quantidadeDeVotos++;
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');

votation1.addVotation({ nomeDaOpcao: 'Python', quantidadeDeVotos: 0 });
votation1.addVotation({ nomeDaOpcao: 'JavaScript', quantidadeDeVotos: 0 });
votation1.addVotation({ nomeDaOpcao: 'TypeScript', quantidadeDeVotos: 0 });

votation1.vote(0);
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);
votation1.vote(2);
votation1.vote(2);

votation1.showVotation();

const votation2 = new Votation('Qual sua cor preferida?');

votation2.addVotation({ nomeDaOpcao: 'Vermelho', quantidadeDeVotos: 0 });
votation2.addVotation({ nomeDaOpcao: 'Verde', quantidadeDeVotos: 0 });
votation2.addVotation({ nomeDaOpcao: 'Amarelo', quantidadeDeVotos: 0 });

votation2.vote(0);
votation2.vote(1);
votation2.vote(1);
votation2.vote(2);
votation2.showVotation();
