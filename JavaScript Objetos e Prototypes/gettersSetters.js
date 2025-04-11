//Getters e Setters -> seria uma maneira de proteger a propriedade

//Getter para obter / retornar o valor.
//Setter para modificar o valor

function Produto(nome, preco, estoque){
    this.nome = nome,
    this.preco = preco,

    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: true,
        //Getter
        get: function(){
            return estoque;
        },

        //Setter
        set: function(value){
            if (typeof value !== 'number'){
                throw new TypeError('Número Obrigatorio!');
            }
            estoque = value;
        }
    })
};

const p1 = new Produto('nomeProduto', 100, 3);

console.log(p1.estoque)

p1.estoque = "Mensagem"

console.log(p1.estoque)
