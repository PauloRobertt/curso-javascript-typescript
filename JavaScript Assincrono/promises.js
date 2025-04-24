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

teste('Frase 1', randowNumber(1, 3))
    .then(res => {
        console.log(res);
        return teste('Frase 2', randowNumber(1, 3))
    })
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e)
    });