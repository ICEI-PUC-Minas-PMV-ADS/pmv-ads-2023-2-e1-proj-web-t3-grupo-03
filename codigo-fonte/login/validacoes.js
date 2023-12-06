/*nesse arquivo e feito a validação dos dados antes do cadsatro de ser feito.
apos o usuario clicar no botao cadatrar se tudo estiver correto, o usuario sera
cadastrado no local storage*/

import { criaUser } from "./cadastro.js";


let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let userPassWord = document.getElementById('userPassWord');
let passConfimation = document.getElementById('passConfimation')
let imageFile = document.getElementById('imageFile')
const btnCadastro = document.getElementById('btnCadastro');

btnCadastro.addEventListener('click', (e) => {
    e.preventDefault();    
    VerificaCampos();
    ComparandoSenhas(userPassWord, passConfimation);
    criaUser(userName.value, userEmail.value, userPassWord.value, imageFile);

})


function VerificaCampos() {
    if (userName.value == "") {
        userName.style.backgroundColor = 'red';
    }
    if (userEmail.value == "") {
        userEmail.style.backgroundColor = 'red';
    }
    if (userPassWord.value == "") {
        userPassWord.style.backgroundColor = 'red';
    }
    if (passConfimation.value == "") {
        passConfimation.style.backgroundColor = 'red';
    }
}
export function ComparandoSenhas(senha, novaSenha) {
    if (senha.value === novaSenha.value) {
        return true;
    }
    else {
        alert("senhas nao sao iguais")
        return false;

    }
}
