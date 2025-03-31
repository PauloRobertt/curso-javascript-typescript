const estiloBody = getComputedStyle(document.body);
const backgroundBody = estiloBody.backgroundColor;

const paragrafos = document.querySelector('.container');
const ps = paragrafos.querySelectorAll('p')   

for( let p of ps){
    p.style.backgroundColor = backgroundBody;
    p.style.color = '#ffff'
}