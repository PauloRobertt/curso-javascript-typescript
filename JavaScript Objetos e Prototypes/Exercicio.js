/* 
Validando CPF

Exemplo de CPF (1): 705.484.450-52
Exemplo de CPF (2): 070.987.720-03

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77   0  45  32  56  24  20  20  0   10 = 284

Formula
11 - (237 % 11) = 5 (Primeiro Digito)
11 - (184 % 11) = 2 (Segundo Digito)
Se o número digito for maior que 9, consideramos 0.
*/

const CPF = '705.484.450-52';
ValidadorDeCPF(CPF);

function formula(value){
    return 11 - (value % 11);
}

function ValidadorDeCPF(CPF) {
    //Tratamento do CPF
    const cpfLimbo = CPF.replace(/\D+/g, '');
    const cpfArray = Array.from(cpfLimbo);

    cpfArray.map((element, index, array)=>{
        console.log(`Element: ${element}, index: ${index}, Array: ${array}}`)
    })
}
