//public - Acessivel dentro da classe, fora da classe e em todas as subclasses.
//private - Atributo ou método numa classe é acessivel dentro da classe que ele foi criado.

//OBS: Quando o dado é sensivel colocamos ele como private.

export class Empresa{
    public readonly name: string;
    private readonly colaboradores: Colaborador[] = [];
    protected readonly cnpj:string

    constructor(name:string, cnpj: string){
        this.name = name;
        this.cnpj = cnpj;
    }

    adicionarColaborador(colaborador: Colaborador): void{
        this.colaboradores.push(colaborador)
    }

    mostrarColaboradores(): void{
        for(const colaborador of this.colaboradores){
            console.log(colaborador)
        }
    }
}

export class Colaborador{
    constructor(
        public readonly name:string,
        public readonly sobrenome:string
    ){
        console.log('teste')
    }
}

const empresa1 = new Empresa('EmpresaTeste', '11.111.111/0111');
const colaborador1 = new Colaborador('Nometeste1', 'SobrenomeTeste1')
empresa1.adicionarColaborador(colaborador1);
empresa1.mostrarColaboradores()

