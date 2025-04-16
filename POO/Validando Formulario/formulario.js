import { ValidarCPF } from './validarCPF.js';

class ValidarFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formularioValidado = this.isValid();
        const senhaValida = this.senhaValida();

        if(formularioValidado && senhaValida){
            alert('Formulario Enviado!')
            this.formulario.submit();
        }
    }

    senhaValida(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetirsenha');

        if(senha.length < 6 || senha.length > 12){
            this.createError(senha, 'Senha precisa ter entre 6 a 12 caracteres!')
            valid = false;
        }

        if(senha.value !== repetirSenha.value){
            this.createError(senha, 'A senha precisa ser igual ao repetir senha')
            this.createError(repetirSenha, 'A repetir senha precisa ser igual a senha') 
            valid = false;
        }

        return valid;
    }

    isValid() {
        let valid = true;

        for (let erros of this.formulario.querySelectorAll('.error-text')) {
            erros.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.valid')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.createError(campo, `Campo ${label.toLowerCase()} não pode ser vazio!`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validarCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validarUsuario(campo)) valid = false
            }
        }

        return valid;
    }

    validarCpf(campo) {
        const statusCPF = new ValidarCPF(campo.value);
        if (!statusCPF.gerarDigitos()) {
            this.createError(campo, 'CPF Invalido!')
            return false
        }

        return true
    }

    validarUsuario(campo){
        let valid = true

        if(campo.value.length < 3 || campo.value.length > 12){
            this.createError(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
            valid = false;
        }

        if(!campo.value.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(campo, 'Usuario precisa conter apenas letras e numeros!')
        }

        return valid;
    }

    createError(campo, msg) {
        const small = document.createElement('small');
        small.innerText = msg;
        small.classList.add('error-text')
        campo.insertAdjacentElement('afterend', small);
    }
}

const valida = new ValidarFormulario();
