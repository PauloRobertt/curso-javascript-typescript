function decoratorMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDecorator,
): PropertyDecorator {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  return {
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}

class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  @decoratorMethod
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

const testeMethod = new UmaPessoa('Paulo', 'Robert', 21);
//testeMethod.metodo = () => 'Mensagem modificada';
const method = testeMethod.metodo('Uma mensagem');
console.log(method);
