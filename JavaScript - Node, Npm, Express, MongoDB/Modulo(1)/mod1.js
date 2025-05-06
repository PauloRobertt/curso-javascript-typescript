// const nome = 'Paulo';
// const sobrenome = 'Robert';

// const consoleFunction = () =>{
//     console.log('Função')
// }

//Para exportar

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.consoleFunction = consoleFunction;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.consoleFunction = consoleFunction;


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Paulo';
const sobrenome = 'Robert'

module.exports = {
    nome, sobrenome, Pessoa
}
