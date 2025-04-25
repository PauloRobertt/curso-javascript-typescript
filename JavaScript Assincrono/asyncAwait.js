function randowNumber(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

function teste(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error);

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

async function asynAwait(){
    try {
        const fase1 = await teste('Fase1', randowNumber(1, 4))
        console.log(fase1)

        const fase2 = await teste('Fase2', randowNumber(1, 4))
        console.log(fase2)

        const fase3 = await teste('Fase3', randowNumber(1, 4))
        console.log(fase3)
        
    } catch (error) {
        console.log(error)
    }
}
asynAwait()

//Estagios do async await
/*
pending -> Estado inicial
fullfilled -> Estado resolvido
rejected -> Estado rejeitada 
*/