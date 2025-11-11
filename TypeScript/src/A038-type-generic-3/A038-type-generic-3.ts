//<T = string,U = number> - Valores padrão

interface PessoaProtocolo<T = string,U = number> {
    nome: T,
    sobrenome: T,
    idade: U,
}

type PessoaProtocolo2<T = string,U = number> = {
    nome: T,
    sobrenome: T,
    idade: U,
}

const aluno:PessoaProtocolo<string, number> = {
    nome: "Paulo",
    sobrenome: 'Sobrenome',
    idade: 21
}

const aluno2:PessoaProtocolo = {
    nome: "Paulo",
    sobrenome: 'Sobrenome',
    idade: 21
}

const aluno3:PessoaProtocolo2 = {
    nome: "Paulo",
    sobrenome: 'Sobrenome',
    idade: 21
}
