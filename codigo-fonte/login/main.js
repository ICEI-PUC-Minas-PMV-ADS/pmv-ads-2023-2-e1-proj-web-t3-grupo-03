export let modalCadastro = document.getElementById('modalCadastro');
let btnFechar = document.getElementById('btnFechar');
let spanInscrever = document.querySelector('span');


modalCadastro.style.display = 'none'
spanInscrever.addEventListener('click', ()=>{
    modalCadastro.style.display = 'block'
});

 
btnFechar.addEventListener('click', ()=>{
    modalCadastro.style.display = 'none'
});