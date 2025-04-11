//Métodos se comportarem de maneira diferente em classes filhas, caracteriza em polimorfismo

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function () {
    console.log(
        `Ag / C: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$ ${this.saldo.toFixed(2)}`
    );
}

const c1 = new Conta(11, 22, 10);

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(agencia, conta, saldo);
}

ContaCorrente.prototype = Conta.prototype;
ContaCorrente.prototype.constructor = ContaCorrente;

//Metodo sacar se comporta diferente quando criada em um conta corrente
ContaCorrente.prototype.sacar = function(value){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
}