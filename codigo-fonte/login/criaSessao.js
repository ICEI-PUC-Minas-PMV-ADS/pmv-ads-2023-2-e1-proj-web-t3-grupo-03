
let entraBTN = document.getElementById('btnEntrar');
let usuario = document.getElementById('usuario');

export function sessaAtual() {
    document.addEventListener('DOMContentLoaded', () => {
        entraBTN.addEventListener('click', () => {
            if (localStorage.getItem(usuario.value)) {
                // alert(`${usuario.value}`)
                let loginUser = JSON.parse(localStorage.getItem(usuario.value));
                localStorage.setItem('logado', JSON.stringify(loginUser));
            } else {
                console.error('Usuário não encontrado no localStorage');
            }
        });
    });
}