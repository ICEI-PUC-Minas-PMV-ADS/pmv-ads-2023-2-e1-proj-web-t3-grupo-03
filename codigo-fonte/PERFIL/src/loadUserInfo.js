

export const userData = JSON.parse(localStorage.getItem('logado'));

export let userPhoto = document.createElement('img');
userPhoto.src = userData.photo;
userPhoto.alt = `foto de perfil`;
userPhoto.width = 150;
let userName = userData.nome;


let userPhotoTolink = document.querySelector('.userPhoto');
userPhotoTolink.appendChild(userPhoto);

let pname = document.createElement('p');
pname.textContent = userData.nome;

userPhotoTolink.appendChild(pname)


