/*
Metodos de Instancia:

Metodos de Instancia são metodos normais da classe, podemos chama-los depois de criar uma instancia da classe e tem acesso aos dados da instancia

Quando usar:
Quando o método depende de dados da instância, ou seja, do this.
*/

/*
Metodos Estaticos:

Metodos Estaticos estão referentes apenas a classe e não a instancia da classe, não tem acesso aos dados da instancia

São métodos da classe, não da instância. Ou seja, você chama diretamente pela classe, sem precisar fazer new.


Quando usar:
Quando a lógica não depende do this, ou seja, não precisa acessar os dados da instância.

Muito usado para funções utilitárias, validações, ou criação de objetos (factories).
*/

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    // método de instância
    mostrarDetalhes() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
    }

    // método estático
    static comDesconto(produto, porcentagem) {
        const novoPreco = produto.preco * (1 - porcentagem / 100);
        return new Produto(produto.nome, novoPreco);
    }
}

const p1 = new Produto('Notebook', 3000);
p1.mostrarDetalhes(); // Produto: Notebook, Preço: R$3000

const p2 = Produto.comDesconto(p1, 10);
p2.mostrarDetalhes(); // Produto: Notebook, Preço: R$2700  