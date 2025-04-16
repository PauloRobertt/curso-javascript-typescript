export class ValidarCPF {
    constructor(CPF) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            writable: true,
            configurable: true,
            value: CPF.replace(/\D+/g, '')
        })
    }

    gerarDigitos() {
        if(!this.cpfLimpo || this.cpfLimpo.length !== 11){
            return false;
        }

        const cpfArray = Array.from(this.cpfLimpo);
        const cpfDividido = cpfArray.slice(0, 9);

        const digito = (array) =>{
            const soma = array.reduce((acc, valor, i) => acc + valor * ((array.length + 1) - i), 0)
            const formula = 11 - (soma % 11);
            return formula > 9 ? 0 : formula;
        }

        const digito1 = digito(cpfDividido);
        cpfDividido.push(digito1);

        const digito2 = digito(cpfDividido)
        cpfDividido.push(digito2);

        const cpfValidado = cpfDividido.join('');

        return cpfValidado === this.cpfLimpo;
    }
}
