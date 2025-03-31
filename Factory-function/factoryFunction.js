//Factory Function 

function criaPessoa(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        altura: a,
        peso: p,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        //Redefini o valor do atributo
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        },

        fala(assunto){
            return `${this.nome} está ${assunto}.`
        },
        // Getter -> Quando queremos só obter o valor
        //Utilizando Getter IMC passar a ser um atributo
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Paulo Robert', 'Lima Gomes', 1.69, 63);

p1.nomeCompleto = 'Caio Mesquita';

console.log(p1.nomeCompleto);
console.log(p1.sobrenome)

//console.log(p1.imc());
//console.log(p1.fala('falando sobre JS'));

//Shift -> Pega o primeiro elemento do array
//Pop -> Pega o ultimo elemento do array 