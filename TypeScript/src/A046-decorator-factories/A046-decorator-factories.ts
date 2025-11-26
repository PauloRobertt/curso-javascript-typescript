//Decorator Factories(Fábrica de decoradores)

@exemploDecorator('Valor1', 'Valor2')
class Animal {
  constructor(public cor: string) {}
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
