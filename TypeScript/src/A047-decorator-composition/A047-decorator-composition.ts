//Decorator Factories(Fábrica de decoradores)

@decorator2('Parametro Decorator2')
@exemploDecorator('Valor1', 'Valor2')
class Animal {
  constructor(public cor: string) {
    console.log('Classe');
  }
}

function decorator2(param1: string) {
  return function <T>(target: T): T {
    console.log('Teste decorator2');
    console.log(param1);
    return target;
  };
}

function exemploDecorator(param1: string, param2: string) {
  console.log(param1);
  console.log(param2);
  return function <T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        console.log('Teste');
        this.cor = args[0];
      }
    };
  };
}

const animal = new Animal('Preto');
console.log('Decorator', animal);
