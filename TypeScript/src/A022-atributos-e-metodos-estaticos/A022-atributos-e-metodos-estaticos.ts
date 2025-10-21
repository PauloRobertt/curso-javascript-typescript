class Pessoa{
    static cpfPadrao = '000.000.000-00';

    constructor(
        public nome:string,
        public sobrenome:string,
        public cpf:string
    ){}

    static criaPessoa(nome:string, sobrenome:string): Pessoa{
        return new Pessoa(nome,sobrenome, Pessoa.cpfPadrao);
    }
}

const pessoa1 = new Pessoa('NomePessoa', 'SobrenomePessoa', '000.000.000-00');
const pessoa2 = Pessoa.criaPessoa('StaticNome','StaticSobrenome');

console.log(pessoa1);
console.log(pessoa2);
