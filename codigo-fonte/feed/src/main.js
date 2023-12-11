
import { userPhoto } from "../../PERFIL/src/loadUserInfo.js";
import { PrintPostsOnscreem } from "./loadPosts.js";
import { pushPost } from "./makePosts.js";



export let onSessaAtual = JSON.parse(localStorage.getItem('logado'));

let dropBtn = document.getElementById('dropBtn');
let btnEdit = document.getElementById('btnEdit');
let sair = document.getElementById('logout');

btnEdit.style.display = 'none';
sair.style.display = 'none';

dropBtn.addEventListener('mouseover', () => {
  
    btnEdit.style.display = 'block';
    sair.style.display = 'block';
});


sair.addEventListener('click', () => {
    localStorage.removeItem('logado');
    window.location.replace("../login/login.html");
});

//encontra a tag <a> dentro da div user photo
let userPhotoLink = document.querySelector('.userPhoto a');
if (userPhotoLink) {
    //se a tag for econtrada dai da o append

    userPhotoLink.appendChild(userPhoto);
}



pushPost()
PrintPostsOnscreem();
