let segundos = 0;
let timer;

const cronometro = (segundos) => {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const iniciarCronometro = () =>{
    timer = setInterval(function(){
        segundos++;
        number.innerHTML = cronometro(segundos)
    }, 1000);
}

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const number = document.querySelector('.number');

iniciar.addEventListener('click', function(){
    clearInterval(timer)
    iniciarCronometro();
});

pausar.addEventListener('click', function(){
    clearInterval(timer);
});

zerar.addEventListener('click', function(){
    clearInterval(timer);
    segundos = 0;
    number.innerHTML = '00:00:00';
});