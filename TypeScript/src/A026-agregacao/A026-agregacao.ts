//Agregação

class CarrinhoDeCompras{
    constructor(private readonly produtos:Produto[] = []){}

    inserirProduto(produtosCarrinho:Produto[]){
        for(const produtoCarrinho of produtosCarrinho){
            this.produtos.push(produtoCarrinho);
            console.log('Produto: ', produtoCarrinho);
            console.log('Adicionado com sucesso!')
        }
    }

    quantidadeProdutos():void{
        if(this.produtos.length === 0){
            console.log('Nenhum produto no carrinho!');
            return;
        }

        console.log('Quantidade de Produtos no carrinho: ', this.produtos.length);
    }

    valorTotal():number{
        return this.produtos.reduce((soma, produto)=> soma + produto.preco ,0);
    }
}

class Produto{
    constructor(public nome:string, public preco:number){}
}

const carrinho = new CarrinhoDeCompras();
const produto1 = new Produto('sapato', 255);
const produto2 = new Produto('Relogio', 300);

carrinho.inserirProduto([produto1, produto2]);

console.log(carrinho.valorTotal())
