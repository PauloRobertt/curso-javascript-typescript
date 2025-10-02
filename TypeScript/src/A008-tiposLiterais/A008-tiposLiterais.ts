// Utilizar valores como tipo
//São tipos que não representam toda a categoria(ex: string, number...), mas sim um valor especifico

let cor: 'vermelho';
cor = 'vermelho'; // OK
//cor = 'azul'; // erro - só aceita 'vermelho'

//Aqui o tipo não é string, mas sim o literal vermelho

type Direcao = 'norte' | 'sul' | 'leste' | 'oeste';

function mover(d: Direcao) {
  console.log(d);
}

type status = 'pendente' | 'em progresso' | 'concluido';
const tarefa = { status: 'pendente' as status };
