function MinLength(quantidadeDeCaracteres: number) {
  return function (target: any, propertyKey: string): any {
    let valorPropriedade = target[propertyKey];

    Object.defineProperty(target, propertyKey, {
      get() {
        return valorPropriedade;
      },
      set(value: any) {
        if (
          typeof value === 'string' &&
          value.length < quantidadeDeCaracteres
        ) {
          console.log(
            `${propertyKey} deve ter no minimo ${quantidadeDeCaracteres} caracteres!`,
          );
          return;
        }

        valorPropriedade = value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}

class Exemplo {
  @MinLength(3)
  nome: string;

  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}

const exemplo = new Exemplo('Paulo', '');
console.log(exemplo.email);
