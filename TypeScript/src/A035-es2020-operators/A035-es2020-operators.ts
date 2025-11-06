// Encadeamento opcional e Operador de coalescência nula

type Documento = {
    titulo:string;
    texto:string;
    data?: Date;
}

const documento:Documento = {
    titulo: 'titulo',
    texto: 'texto',
    //data: new Date(),
}

console.log(documento.data?.toDateString() ?? 'Data não existe!');
