import { loadPostsOnscreem, loadposts } from "./loadPosts.js";
import { onSessaAtual } from "./main.js";


let searchTopost = document.getElementById('searchTopost');
const btnSearchTopost = document.getElementById('btnSearchTopost');
let userText = document.getElementById('userText');
const bntPublicar = document.getElementById('bntPublicar');

let infoConteudo = {}

class PostData {
    constructor(user, Titulo, anoLancamento, genero, poster, diretor, runtime, userText) {
        this.user = user;
        this.Titulo = Titulo;
        this.anoLancamento = anoLancamento;
        this.genero = genero;
        this.poster = poster;
        this.diretor = diretor;
        this.userText = userText
        this.runtime = runtime;
        this.horaDPost = new Date();
    }
}


btnSearchTopost.addEventListener('click', () => {
    if (searchTopost.value == "") {
        alert("o que deseja recomendar?");
        searchTopost.focus();
    } else {
        fetch(`http://www.omdbapi.com/?apikey=bef0546&t=${searchTopost.value}`)
            .then((r) => r.json())
            .then((t) => {
                infoConteudo = t;
            })
            .catch((erro) => console.error(erro));
    }
});
function makeThePost() {
    if (userText.value.length != 0) {
        const novoPost = new PostData(onSessaAtual.nome, infoConteudo.Title, infoConteudo.Year, infoConteudo.Genre, infoConteudo.Poster, infoConteudo.Director, infoConteudo.Runtime, userText.value);
        loadposts.push(novoPost);
    } else {
        alert("digite algum texto");
        userText.focus();
        return;
    }

}

export function pushPost(){
    bntPublicar.addEventListener('click', ()=>{
        makeThePost();
        alert("post criado")
        loadPostsOnscreem();
    });
}