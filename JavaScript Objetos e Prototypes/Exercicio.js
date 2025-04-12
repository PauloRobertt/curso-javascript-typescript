/* 
Validando CPF

Exemplo de CPF (1): 705.484.450-52
Exemplo de CPF (2): 070.987.720-03

0   1   2   3   4   5   6   7   8
7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

0   1   2   3   4   5   6   7   8   9
7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77   0  45  32  56  24  20  20  0   10 = 284

Formula
11 - (237 % 11) = 5 (Primeiro Digito)
11 - (184 % 11) = 2 (Segundo Digito)
Se o número digito for maior que 9, consideramos 0.
*/

const CPF = '705.484.450-52';
ValidadorDeCPF('705.484.450-52');

function formulaDigito(value) {
    return 11 - (value % 11);
}

function ValidadorDeCPF(CPF) {
    if(!CPF){
        return console.log('CPF não enviado!');
    }

    if(CPF.length !== 11){
        return console.log('Tamanho de CPF incorreto!')
    }

    //Tratamento do CPF
    const cpfLimbo = CPF.replace(/\D+/g, '');
    const cpfArray = Array.from(cpfLimbo);
    const cpfDividido = cpfArray.slice(0, 9);

    //Primeiro Digito
    const SomaPrimeiroDigito = cpfDividido.map((element, index, array) => ((array.length + 1) - index) * element).reduce((acumulador, valor) => acumulador + valor);

    let primeiroDigito = formulaDigito(SomaPrimeiroDigito);

    if(primeiroDigito > 9){
        primeiroDigito = 0;
    }

    cpfDividido.push(primeiroDigito);

    //Segundo Digito
    const SomaSegundoDigito = cpfDividido.map((element, index, array) => ((array.length + 1) - index) * element).reduce((acumulador, valor) => acumulador + valor);

    let segundoDigito = formulaDigito(SomaSegundoDigito);

    if(segundoDigito > 9){
        segundoDigito = 0;
    }

    const ultimosDigitos = cpfArray.slice(-2);

    if (
        ultimosDigitos[0] !== String(primeiroDigito) &&
        ultimosDigitos[1] !== String(segundoDigito)
    ){
        return console.log('CPF Invalido!')
    }

    return console.log('CPF Valido!')
}
