//Tipo tuple -> exclusivo do typescript

//Array com tipo bem especificos e tamanho fixo

const dadosCliente1: [number, string] = [1, 'Luiz'];

//parametro opcional
const dadosCliente2: [number, string, string?] = [1, 'Luiz'];

const dadosCliente3: [number, string, ...string[]] = [1, 'Luiz'];

// O ts permite a utilização de pop e push nas tuplas, mas para não permitir basta utilizar o readonly

const dadosCliente4: readonly [number, string, ...string[]] = [1, 'Luiz'];

//ReadOnly array

const array1: readonly string[] = [];
const array2: ReadonlyArray<string> = [];
