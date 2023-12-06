/*esse arquivo contem a classe para o cadastro de usuario*/

export class Usuario {
    constructor(nome, email, senha, photo) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.photo = photo
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}`);
    }
   
}


// funcao para criar e cadastrar o novo user

export function criaUser(nome, email, senha, fileInput) {
    const imageFile = fileInput.files[0];

    //verifica se um arqruivo foi selecionado
    if(imageFile){
        const reader = new FileReader();

        reader.onload = function () {
            const photo = reader.result;
            const novoUsuario = new Usuario(nome, email, senha,photo);
            localStorage.setItem(novoUsuario.nome, JSON.stringify(novoUsuario));
            alert(novoUsuario.exibirInfo());
        };

        reader.readAsDataURL(imageFile);
    }
    else{
        console.error("Nenhum arquivo de imagem selecionado");
    }


}