// Utility Types - Generics padrão no TypeScript

// Record
// Representa um objeto onde se define qual o type da chave e seu valor.

const objeto1: Record<string, string | number> = {
    nome: 'Paulo',
    idade: 21,
};

//Required
//Transforma todos os opcionais em Required

type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
}

type PessoaRequired = Required<PessoaProtocol>;

const objeto2:PessoaRequired = {
    nome:'Paulo',
    sobrenome: 'Lima',
    idade: 21,
}

//Partial
//Transforma todos os required em opcionais

type PessoaPartial = Partial<PessoaRequired>;

//ReadOnly
//Constroi um tipo com todas as propriedades de type definidas como readonly, significando que as propriedades do tipo construido não podem ser reatribuidas

interface Exemplo1{
    titulo:string
}

const exemplo1:Readonly<Exemplo1> = {
    titulo: 'teste',
}

//Pick
//Constroi um tipo pegando um conjunto de propriedades key de type

interface Exemplo2{
    titulo:string,
    descricao:string,
    completado:boolean
}

type Exemplo2Type = Pick<Exemplo2, 'titulo' | 'descricao'>;

const exemplo2:Exemplo2Type = {
    titulo:'Exemplo titulo',
    descricao:'Descricao Exemplo'
}

//Exclude e Extract
//Extract constroi um tipo extraindo de type todos os membros de união que são atribuiveis a Union

//Exclude constroi um tipo excluindo de type todos os membros que são atribuiveis a Exclude

type ABC = 'A' | 'B' | 'C'
type CDE = 'C' | 'D' | 'E'

type TipoExtract = Extract<ABC,CDE>
// type TipoExtract = "C"
type TipoExclude = Exclude<ABC,CDE>;
// type TipoExclude = "A" | "B"
