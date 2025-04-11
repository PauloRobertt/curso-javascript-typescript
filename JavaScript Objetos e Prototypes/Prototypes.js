/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem um referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessa um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro do próprio objeto e depois a cadeia de protótipo é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

// Instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);

console.log(pessoa1.nomeCompleto())

//pessoa1 -> Pessoa.prototype -> Object.prototype