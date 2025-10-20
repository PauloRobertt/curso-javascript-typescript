export class Pessoa{
    constructor(public nome:string,public sobrenome:string,private idade:number,protected cpf:string){}

    getIdade(): number{
        return this.idade;
    }

    getCpf(): string{
        return this.cpf;
    }

    getNomeCompleto(): string{
        return this.nome+ ' ' +  this.sobrenome
    }
}

export class Aluno extends Pessoa{
    getNomeCompleto(): string {
        return 'Aluno: ' + this.nome+ ' ' +  this.sobrenome
    }
}

export class Cliente extends Pessoa{
    getNomeCompleto(): string {
        return 'Cliente: ' + this.nome+ ' ' +  this.sobrenome
    }
}

const aluno1 = new Aluno('AlunoNome', 'AlunoSobrenome', 17, '000.000.000-00');
const cliente1 = new Cliente('ClienteNome', 'ClienteSobrenome', 17, '000.000.000-00');
const pessoa = new Pessoa('PessoaNome', 'PessoaSobrenome', 17, '000.000.000-00');

console.log(aluno1.getNomeCompleto())
console.log(cliente1.getNomeCompleto())
console.log(pessoa.getNomeCompleto())
