//Como trabalhar o prototype na factory function
const comer = {
    comer() {
        console.log(`${this.nome} está comendo!`)
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo!`)
    }
}

const falar = {
    falar() {
        console.log(`${this.nome} está falando!`)
    },
}

function criaPessoa(nome, sobreNome) {
    const prototypePessoa = Object.assign({}, falar, beber, comer)

    return Object.create(prototypePessoa, {
        nome: { value: nome },
        sobreNome: { value: sobreNome }
    });
}

const p1 = criaPessoa('Paulo', 'Robert');

console.log(p1)