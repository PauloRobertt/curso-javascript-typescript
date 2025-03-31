const buttonAttTarefa = document.querySelector('.buttonAttTarefa');
const tarefas = document.querySelector('.tarefas');
const input = document.querySelector('.input');

let ListTarefas = [];

const atualizarLista = () => {
    tarefas.innerHTML = '';

    for (let index in ListTarefas) {
        tarefas.innerHTML +=
            `<li>
                ${ListTarefas[index]}
                <button onClick={RemoverTarefa(${index})} class="buttonli">
                    Apagar
                </button>
            </li>`
    }
    console.log(ListTarefas)
}

buttonAttTarefa.addEventListener('click', function () {
    if (!input.value) return;

    ListTarefas.push(input.value);

    atualizarLista();

    console.log(ListTarefas)
});

const RemoverTarefa = (index) => {
    ListTarefas.splice(index, 1);
    atualizarLista();
}

atualizarLista();
