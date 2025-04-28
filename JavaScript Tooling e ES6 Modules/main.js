//Babel transforma um script moderno em um script mais antiga, para ter mais compatibilidade com navegadores mas antigos 

const nome = 'Paulo';
const obj = { nome };
const novoObjet = { ...obj };
console.log(novoObjet)