export function add(a: unknown, b:unknown): number | string {
    if(typeof a === "number" && typeof b === 'number'){
        return a + b;
    }

    return `${a} ${b}`;
}

type Pessoa = {nome:string};
type Animal = {cor:string};

type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa{
    constructor(public nome:string){}
}

function mostrarNome(obj: PessoaOuAnimal){
    if('nome' in obj){}
    if(obj instanceof Aluno){}
}
