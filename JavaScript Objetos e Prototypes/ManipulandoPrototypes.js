//Não utilizar obj.__proto__ pois pode atrapalhar no desempenho

// Object.getPrototypeOf() -> Utilizar ao inves de __proto__

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(valor){
    return this.preco - (this.preco * (valor / 100));
}

Produto.prototype.aumento = function(valor){
    return this.preco + (this.preco * (valor / 100));
}

const p1 = new Produto('NomeProduto', 100);
// console.log(p1.aumento(10));

const p2 = {
    nome: 'caneca',
    preco: 15
}

//p2 vai receber o prototype de p1, pois p2 não foi criado apartir do Produto
// Object.setPrototypeOf(p2, p1);

// console.log(p2.aumento(10));
// console.log(p2.desconto(10));

//Object p3 esta recebendo o prototype de Produto
const p3 = Object.create(Produto.prototype, {
    preco: {
        value: 100,
        enumerable: true,
        writable: false,
        configurable: true
    }
});

console.log(p3.desconto(10));
console.log(p3.aumento(10));