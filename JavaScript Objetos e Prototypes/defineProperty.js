//Property -> Defini que apenas uma variavel do objeto não pode ser alterado.
//defineProperties -> Getter e Setters

function Produto(nome, preco, estoque) {

    //Properties
    Object.defineProperties(this, {
        nome:{
            enumerable: true, //Mostra a chave
            value: nome, // Valor
            writable: true, // pode alterar
            configurable: true // Se ela é reconfiguravel
        },
        preco:{
            enumerable: true, //Mostra a chave
            value: preco, // Valor
            writable: true, // pode alterar
            configurable: true // Se ela é reconfiguravel
        }
    })

    //Property
    Object.defineProperties(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, // Valor
        writable: true, // pode alterar
        configurable: true // Se ela é reconfiguravel
    })
}