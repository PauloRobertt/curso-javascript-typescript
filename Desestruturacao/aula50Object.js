//Nome da variavel tem quer ser o mesmo da chave

const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Robert',
    endereco: {
        rua: 8,
        bairro: 'Quintino Cunha'
    }
}

const {nome} = pessoa;

console.log(nome);