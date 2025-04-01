//Função Recursiva -> Função que se chama ao ser executada.

//ATENÇÃO: Colocar um limite para evitar LOOPS!

function recursiva(max){
    console.log(max);
    if(max >= 10)return;
    max++;
    recursiva(max);
}

recursiva(0);