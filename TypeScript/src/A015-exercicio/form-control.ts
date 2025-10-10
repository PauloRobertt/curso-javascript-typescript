import { isLength, isEmpty, isEmail, equals } from 'validator';

type User = { username: string; email: string; password: string };

const form = document.querySelector('form') as HTMLFormElement;

form.onsubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form)

    const name = formData.get('username') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const password2 = formData.get('password2') as string

    createUser({username: name, email: email, password: password}, password2)
}

function createUser(user: User, password2: string){
    ErrorMessage('.show-error-message', '')

    if(isEmpty(user.username)){
        ErrorMessage('#errorName', 'Username não pode ser vazio!')
        return;
    }

    if (!isLength(user.username, { min: 3, max: 32 })) {
        ErrorMessage('#errorName', 'Username deve ter entre 3 a 32 caracteres')
        return;
    }

    if (isEmpty(user.email) || !isEmail(user.email)) {
        ErrorMessage('#errorEmail', 'E-mail invalido ou vazio!')
        return;
    }

    if (!isLength(user.password, { min: 3, max: 10 })) {
        ErrorMessage('#errorPassword', 'Senha deve ter entre 3 a 10 caracteres')
        return;
    }

    if (!equals(user.password, password2)) {
        ErrorMessage('#errorPassword2', 'As senhas devem ser são iguais')
        return;
    }

    const newUser = user;

    return newUser;
}

function checkForEmpty( selector: string, value: string){
    if(isEmpty(value)){
        ErrorMessage('#errorName', 'Username não pode ser vazio!')
        return;
    }
}

function ErrorMessage(selector: string, text: string): void{
    const errorElement = document.querySelector(selector) as HTMLSpanElement;

    if(selector === '.show-error-message'){
        document.querySelectorAll(selector).forEach((element)=>{
            element.classList.replace('show-error-message', 'error-message');
        })
        return
    }

    errorElement.classList.replace('error-message', "show-error-message");
    errorElement.textContent = text;
}

// Função para que ao apertar a tecla 'Enter' o focu ir para o proximo input

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  inputs[i]?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      inputs[i + 1]?.focus();
    }
  });
}
