//Uma Promise (ou promessa) é uma forma de lidar com operações assíncronas — ou seja, operações que demoram um tempo para serem concluídas (como requisições a uma API, leitura de arquivos, etc.), sem travar o restante do código.

function randowNumber(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

//Resolve -> Caso o codigo se executado com sucesso!
//Reject -> Caso o codigo tenha algum erro

//then -> É executado quando a promise for resolvida
//catch -> É executado quando a promise for rejeitada

function teste(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error);

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

// teste('Frase 1', randowNumber(1, 3))
//     .then(res => {
//         console.log(res);
//         return teste('Frase 2', randowNumber(1, 3))
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(e => {
//         console.log(e)
//     });

//Metodos uteis para Promises

/*
Promise.all -> Resolve todas as promises dentro de um array e retorna seus resultados dentro de outro array

Se ocorrer um erro em alguma promise dentro do array, sera retornado somente o erro.
*/

const promises = [
    'Primeiro valor',
    teste('Promise 1', randowNumber(1, 4)),
    teste('Promise 2', randowNumber(1, 1)),
    teste('Promise 3', randowNumber(1, 5)),
    'Valor Final'
]

// Promise.all(promises)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(e => {
//         console.log(e)
//     })
/*
Promise.race -> Similar ao all, retorna o valor da primeira promises que for concluida(Uma corrida)
*/

Promise.race(promises)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

/*
Promise.resolve

Retorna uma Promise já resolvida.

Promise.reject

Retorna uma promise rejeitada
*/


//Se queremos que a função pare de executar apos encontrar o reject ou resolve, basta colocar o return depois.