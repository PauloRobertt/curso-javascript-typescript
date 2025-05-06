//fileSystem -> Api do node que podemos utilizar para trabalhar arquivos e pastas do sistema

const fs = require('fs').promises;
const path = require('path');

async function fileSystem(caminho) {
    caminho = caminho || path.resolve(__dirname);
    const files = await fs.readdir(caminho);
    walk(files, caminho);
}

async function walk(files, caminho) {
    for (let file of files) {
        const fileFullPath = path.resolve(caminho, file);
        const status = await fs.stat(fileFullPath)

        //Filtro para não aparecer arquivos .git e node_modules
        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;

        if(status.isDirectory()){
            fileSystem(fileFullPath);
            //Continua para a proxima iteração
            continue;
        }

        console.log(fileFullPath)
    }
}

fileSystem("C:/Users/Robert/Documents/GitHub/Curso-JavaScript-e-TypeScript/")
