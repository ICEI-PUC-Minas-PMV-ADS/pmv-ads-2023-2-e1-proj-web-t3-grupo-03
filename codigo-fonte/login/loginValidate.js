import dataUsers from './users.json' assert {type: "json"};


console.log(dataUsers);
let btnEntrar = document.getElementById('btnEntrar');
let usuario = document.getElementById('usuario');
let passWord = document.getElementById('passWord');

const validate = (e) => { 
    for(let i=0; i<dataUsers.length; i++){
        if(dataUsers[i].Name == usuario.value && dataUsers[i].Senha == passWord.value){
            alert(`usuario: ${usuario.value} senha: ${passWord.value}`)
        }
        else if(dataUsers[i].Name != usuario.value && dataUsers[i].Senha != passWord.value){
            alert(`usuario: ${usuario.value} senha: ${passWord.value} nao encontrados no servidor`)
            e.preventDefault();
        }
    }
}
btnEntrar.addEventListener('click', validate);