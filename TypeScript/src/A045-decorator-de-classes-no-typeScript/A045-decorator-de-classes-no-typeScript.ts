@decorator
class Animal {
  constructor(public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      console.log('Teste');
      this.cor = args[0];
    }
  };
}

const animal = new Animal('Preto');
console.log('Decorator', animal);
