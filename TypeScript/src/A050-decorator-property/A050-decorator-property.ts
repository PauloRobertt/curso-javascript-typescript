function decorator(target: any, propertyKey: string): any {
  console.log(target);
  console.log(propertyKey);
  let valorPropriedade: any;
  return {
    get: () => {
      valorPropriedade;
    },
    set: (valor: any) => {
      valorPropriedade = valor;
    },
  };
}

class UmaPessoa {
  @decorator
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Paulo', 'Robert', 21);
