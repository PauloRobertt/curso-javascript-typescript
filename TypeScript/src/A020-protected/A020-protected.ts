//public - Acessivel dentro da classe, fora da classe e em todas as subclasses.
//private - Atributo ou método numa classe é acessivel dentro da classe que ele foi criado.
//protected - Atributo ou método criado numa classe é acessivel dentro da classe e em suas subclasses.

//OBS: Quando o dado é sensivel colocamos ele como private.

export class Empresa{
    public readonly name: string;
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj:string

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

export class Udemy extends Empresa{
    constructor(){
        super('EmpresaTeste', '11.111.111/0111');
    }

    popColaborador(): Colaborador | null{
        const colaborador = this.colaboradores.pop()
        if(colaborador) return colaborador
        return null;
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

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Nometeste1', 'SobrenomeTeste1')
empresa1.adicionarColaborador(colaborador1);
empresa1.mostrarColaboradores()

