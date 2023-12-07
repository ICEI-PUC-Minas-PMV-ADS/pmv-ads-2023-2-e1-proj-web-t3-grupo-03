

let searchTopost = document.getElementById('searchTopost');
const btnSearchTopost = document.getElementById('btnSearchTopost');
let userText = document.getElementById('userText');
const bntPublicar = document.getElementById('bntPublicar');




export function makeThePost(){
    bntPublicar.addEventListener('click', ()=>{
        console.log(`conteudo pesquisado: ${searchTopost.value}`);
        console.log(`texto digitado: ${userText.value}`);
    })
}

