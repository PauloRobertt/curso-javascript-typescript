// Para utilizar o type Assertions precisa ter o "DOM" na lib do tsconfig

// Recomendado

// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Recomendado

// Type assertion
// Utilizar apenas quando tiver a certeza que o elemento existe
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'blue';

// Não Recomendado

// Non-null assertion(!)
// Colocando a ! digo para ele que o valor não pode ser nulo
const body2 = document.querySelector('body')!;
body2.style.background = 'blue';
