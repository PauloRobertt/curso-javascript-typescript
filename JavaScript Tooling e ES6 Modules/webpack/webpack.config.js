//Função do webpack é ajudar a converter automaticamente scripts para scripts mas antigos

//Webpack é uma ferramente chamada de module bundler(empacotador de módulos), serve para juntar, processar e otimizar todos os arquivos do seu projeto (JS,CSS,Imagens e ect) e gerar arquivos prontos para o navegador executar.

const path = require('path'); //CommonJS 

module.exports = {
    //Development -> No desenvolvimento o arquivo e gerado mais rapido e ele não e mimificado(webpack tenta diminuir ao maximo o tamanho do arquivo)

    //bundle contem todos os arquivos da aplicação
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    //Passar o babel dentro do webpack depois é retornado o bundle
    //Para o webpack utilizar o babel
    module: {
        rules: [{
            //Esta excluindo o node_modules para que o webpack não analise a pasta
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    //Realizar um mapeamento
    //Mostra em que arquivo aconteceu alguma ação
    devtool: 'source-map'
};
