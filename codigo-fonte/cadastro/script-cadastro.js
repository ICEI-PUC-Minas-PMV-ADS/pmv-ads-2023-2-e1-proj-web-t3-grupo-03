function Confirmar() {
    var formulario = document.forms.formulario;
    var email = formulario.email.value;
    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    var dataNascimento = formulario.data_nascimento.value;
    var dataNascimentoRegex = /^(\d{2}\/\d{2}\/\d{4})$/;
    var senha = formulario.Senha.value;
    var confirmeSenha = formulario.ConfirmeSenha.value;
    var mensagemErro = document.getElementById('mensagemErro');

    // Limpa mensagens de erro anteriores
    mensagemErro.innerHTML = "";

    if (!email.match(emailRegex)) {
        mensagemErro.innerHTML += 'Por favor, insira um e-mail válido.<br>';
    }

    if (!dataNascimento.match(dataNascimentoRegex)) {
        mensagemErro.innerHTML += 'Por favor, insira uma data de nascimento válida no formato DD/MM/AAAA.<br>';
    }

    if (senha !== confirmeSenha) {
        mensagemErro.innerHTML += 'As senhas não coincidem. Por favor, verifique.<br>';
    }

    if (mensagemErro.innerHTML !== "") {
        return false; // Impede o envio do formulário se houver erros
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.forms.formulario;
    formulario.addEventListener('submit', function (event) {
        if (!Confirmar()) {
            event.preventDefault(); // Impede o envio do formulário se houver erros
        }
    });
});
