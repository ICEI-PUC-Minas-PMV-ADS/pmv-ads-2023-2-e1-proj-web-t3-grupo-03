import { sessaAtual } from './criaSessao.js';
import dataUsers from './users.json' assert {type: "json"};


console.log(dataUsers);
let btnEntrar = document.getElementById('btnEntrar');
let usuario = document.getElementById('usuario');
let passWord = document.getElementById('passWord');


const validate = (e) => {
    let loginUser = JSON.parse(localStorage.getItem(usuario.value));
    if (!loginUser) {
        e.preventDefault();
        alert('Usuário não encontrado');
        return;
    }
        if (usuario.value == "" || passWord.value == "") {
            e.preventDefault();
            alert('os compos login e senha devem ser preenchudos');
            if (usuario.value == "") {
                usuario.focus();
            }
            else {
                passWord.focus();
            }
            return;
        }
        if (loginUser.name != usuario.value && loginUser.senha != passWord.value) {
            e.preventDefault();
            alert('login ou senha incorretos');
        }

    }
    btnEntrar.addEventListener('click', validate, sessaAtual());