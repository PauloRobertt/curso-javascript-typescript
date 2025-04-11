/*
O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto.
*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,

        get: function () {
            return estoque;
        },
        set: function (value) {
            if (typeof value !== 'number') return;
            estoque = value;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);

Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Nome', 100, 'Azul');

const caneca = new Caneca('NomeCaneca', 110, '')

camiseta.aumento(10);

console.log(camiseta)