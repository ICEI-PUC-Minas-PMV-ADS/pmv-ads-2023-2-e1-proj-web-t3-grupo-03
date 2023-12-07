import { makeThePost } from "./makePosts.js";

let sair = document.getElementById('logout');

sair.addEventListener('click', ()=>{
    localStorage.removeItem('logado');
    window.location.replace("../login/login.html");
});