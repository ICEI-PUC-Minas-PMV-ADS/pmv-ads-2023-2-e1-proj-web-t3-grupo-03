// script.js

// Simulação de um banco de dados de usuários
var users = [
  { email: "usuario1@email.com", senha: "senha1" },
  { email: "usuario2@email.com", senha: "senha2" },
];

function entrar() {
  // Recupere os valores de email e senha do formulário
  var email = document.getElementById("email_login").value;
  var senha = document.getElementById("senha_login").value;

  // Verifique se as credenciais correspondem a um usuário na simulação
  var user = users.find(function (user) {
    return user.email === email && user.senha === senha;
  });

  if (user) {
    // Autenticação bem-sucedida, redirecione o usuário para a página inicial // página feed Zaquel 
    window.location.href = "../paginaHome/index.html";
  } else {
    // Credenciais inválidas, exiba uma caixa de alerta
    alert("Credenciais inválidas. Por favor, tente novamente.");
  }
}

// Função para redirecionar para a página de login do Facebook
function Entrar_Facebook() {
  window.location.href = "https://www.facebook.com/login"; // Substitua pela URL real de login do Facebook
}

// Função para redirecionar para a página de login do Google
function Entrar_Google() {
  window.location.href = "https://accounts.google.com/login"; // Substitua pela URL real de login do Google
}
