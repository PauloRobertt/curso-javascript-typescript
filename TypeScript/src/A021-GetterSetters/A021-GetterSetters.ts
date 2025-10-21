class Pessoa{
    constructor(
        private nome:string,
        private sobrenome:string,
        private _cpf:string
    ){}

    get cpf(): string{
        return this._cpf;
    }

    set cpf(value: string){
        this._cpf = value
    }
}

const pessoa1 = new Pessoa('NomePessoa', 'SobrenomePessoa', '000.000.000-00');
