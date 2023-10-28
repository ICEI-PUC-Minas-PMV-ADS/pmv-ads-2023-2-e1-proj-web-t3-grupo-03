// Seu código JavaScript
const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    alert("Botão foi clicado!");
});


const formulario = document.querySelector("form");
const campoPesquisa = document.querySelector("input[name='q']");

formulario.addEventListener("submit", function(event) {
    if (campoPesquisa.value.trim() === "") {
        event.preventDefault(); // Impede o envio do formulário se o campo de pesquisa estiver vazio.
        alert("Por favor, insira um termo de pesquisa.");
    }
});


const botaoAtualizarSinopse = document.getElementById("botaoAtualizarSinopse");
const sinopse = document.getElementById("sinopse");

botaoAtualizarSinopse.addEventListener("click", function() {
    sinopse.textContent = "Nova sinopse do filme.";
});

document.addEventListener("DOMContentLoaded", function () {
    var lupa = document.getElementById("lupa"); // Obtém o elemento do ícone da lupa
    var form = document.querySelector("form"); // Obtém o formulário

    lupa.addEventListener("click", function () {
        form.submit(); // Submete o formulário quando o ícone da lupa é clicado
    });
});
