console.log('deu certo!!!')



document.addEventListener('DOMContentLoaded', function () {
    const btnAlternar = document.getElementById('alternar-friendsList');
    const listaDeAmigos = document.getElementById('amigos');

    btnAlternar.addEventListener('click', function () {
        if (listaDeAmigos.classList.contains('escondido')) {
            listaDeAmigos.classList.remove('escondido');
        }
        else {
            listaDeAmigos.classList.add('escondido');
        }
    });
});


const comentarBTN = document.getElementsByClassName("comentar-btn");

for(let i=0; i <comentarBTN.length; i++){
    comentarBTN[i].addEventListener("click", function(){
        alert("comentario enviado!!")
    })
}


const likeBTN = document.getElementsByClassName("like-btn");


for (let i = 0; i < likeBTN.length; i++) {
    likeBTN[i].addEventListener("click", function () {
        alert("Marcado como gostei");
    });
}

const btnPesquisa = document.getElementById('btnPesquisa');
btnPesquisa.addEventListener('click', ()=>{
    alert("pesquisa registrada");
})