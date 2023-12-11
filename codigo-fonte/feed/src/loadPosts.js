
export const loadposts = [];
export const potsOfatualSessao = [];
import usersPost from './posts.json'  assert {type: "json"};


async function dadosDoPost() {
    for (let i = 0; i < usersPost.length; i++) {
        try {

            const resposta = await fetch(`http://www.omdbapi.com/?apikey=bef0546&t=${usersPost[i].titulo}`);
            const infoConteudo = await resposta.json();
            usersPost[i].titulo = infoConteudo.Title;
            usersPost[i].anoLancamento = infoConteudo.Year;
            usersPost[i].genero = infoConteudo.Genre;
            usersPost[i].poster = infoConteudo.Poster;
            usersPost[i].diretor = infoConteudo.Director;
            usersPost[i].runtime = infoConteudo.Runtime;
            usersPost[i].user = usersPost[i].user;
            usersPost[i].userText = usersPost[i].userText;
            usersPost[i].horaDPost = usersPost[i].horaDPost;
            // console.log(infoConteudo)
            loadposts.push(usersPost[i]);

        } catch (erro) {
            console.error(erro);
        }

    }

}
console.log("porra to ficando louco com esse treco ja");


async function carregaPosts() {
    await dadosDoPost();
    let postToLoad = [];
    let criaTags = {
        pUser: 'p',
        pUserText: 'p',
        pTitulo: 'h3',
        PanoLancamento: 'p',
        Pgenero: 'p',
        imgposter: 'img',
        pdiretor: 'p',
        pruntime: 'p',
        spanTime: 'span'
    }
    let atribuiTags = {
        //obejto de objetos
        pUser: { propriedade: 'textContent' },
        pUserText: { propriedade: 'textContent' },
        pTitulo: { propriedade: 'textContent' },
        PanoLancamento: { propriedade: 'textContent' },
        Pgenero: { propriedade: 'textContent' },
        imgposter: { propriedade: 'src' },
        pdiretor: { propriedade: 'textContent' },
        pruntime: { propriedade: 'textContent' },
        spanTime: { propriedade: 'textContent' }
    }

    let copiaLoadposts = [...loadposts];

    for (const post of copiaLoadposts) {

        let postToPush = {}
        // console.log(post)
        //cria os elementos html
        postToPush.pUser = document.createElement(criaTags.pUser);
        postToPush.pUserText = document.createElement(criaTags.pUserText);
        postToPush.pTitulo = document.createElement(criaTags.pTitulo);
        postToPush.PanoLancamento = document.createElement(criaTags.PanoLancamento);
        postToPush.Pgenero = document.createElement(criaTags.Pgenero);
        postToPush.imgposter = document.createElement(criaTags.imgposter);
        postToPush.pdiretor = document.createElement(criaTags.pdiretor);
        postToPush.pruntime = document.createElement(criaTags.pruntime);
        postToPush.spanTime = document.createElement(criaTags.spanTime);

        //atribui valor a eles
        postToPush.pUser[atribuiTags.pUser.propriedade] = post.user
        postToPush.pUserText[atribuiTags.pUserText.propriedade] = post.userText;
        postToPush.pTitulo[atribuiTags.pTitulo.propriedade] = post.titulo;
        postToPush.PanoLancamento[atribuiTags.PanoLancamento.propriedade] = `Ano de lancamento: ${post.anoLancamento}`;
        postToPush.Pgenero[atribuiTags.Pgenero.propriedade] = `Genero: ${post.genero}`;
        postToPush.imgposter[atribuiTags.imgposter.propriedade] = post.poster;
        postToPush.pdiretor[atribuiTags.pdiretor.propriedade] = `Diretor: ${post.diretor}`;
        postToPush.pruntime[atribuiTags.pruntime.propriedade] = `tempo de filme: ${post.runtime}`;
        postToPush.spanTime[atribuiTags.spanTime.propriedade] = post.horaDPost;


        postToLoad.push(postToPush);
        loadposts.splice(0, loadposts.length);
    }
    console.log("array copiado:", copiaLoadposts)

    return postToLoad;


}


let PostLoaded = document.getElementById('PostLoaded');
export async function PrintPostsOnscreem() {
    let novopost = await carregaPosts();

    for (let i = 0; i < novopost.length; i++) {
        let conteinerPost = document.createElement('div');
        conteinerPost.classList.add('conteinerPost');

        PostLoaded.appendChild(conteinerPost);
        let userAndTime = document.createElement('div');
        userAndTime.classList.add('postUserAndTime')
        conteinerPost.appendChild(userAndTime);
        userAndTime.appendChild(novopost[i].pUser);
        userAndTime.appendChild(novopost[i].spanTime);
        let conteinerUserText = document.createElement('div');
        conteinerUserText.classList.add('conteinerUserText');
        conteinerPost.appendChild(conteinerUserText);
        conteinerUserText.appendChild(novopost[i].pUserText);
        let conteinerConteudoInfo = document.createElement('div');
        conteinerConteudoInfo.classList.add('conteinerConteudoInfo');
        conteinerPost.appendChild(conteinerConteudoInfo);
        let ConteudoInfo = document.createElement('div');
        ConteudoInfo.classList.add('ConteudoInfo');

        conteinerConteudoInfo.appendChild(novopost[i].imgposter);
        conteinerConteudoInfo.appendChild(ConteudoInfo)
        ConteudoInfo.appendChild(novopost[i].pTitulo);
        ConteudoInfo.appendChild(novopost[i].Pgenero);
        ConteudoInfo.appendChild(novopost[i].pdiretor);
        ConteudoInfo.appendChild(novopost[i].PanoLancamento);
        ConteudoInfo.appendChild(novopost[i].pruntime);
    }


}

export function postDassesaAtual(){
    let novopost = potsOfatualSessao;
    
    let pUser = document.createElement('p')
    let pUserText = document.createElement('p')
    let pTitulo = document.createElement('p')
    let PanoLancamento = document.createElement('p')
    let Pgenero = document.createElement('p')
    let imgposter = document.createElement('img')
    let pdiretor = document.createElement('p')
    let pruntime = document.createElement('p')
    let spanTime = document.createElement('span')
    let contemOpostDoUser = document.querySelector('erickSafado');
    console.log(conteinerConteudoInfo)

    for (let i = 0; i < novopost.length; i++) {
        console.log(novopost[0])
        pUser.textContent = novopost[0].user;
        pUserText.textContent =novopost[0].userText;
        pTitulo.textContent = novopost[0].titulo;
        PanoLancamento.textContent = novopost[0].anoLancamento
        Pgenero.textContent = novopost[0].genero;
        imgposter.src = novopost[0].poster;
        pdiretor.textContent = novopost[0].diretor;
        pruntime.textContent = novopost[0].runtime;
        spanTime.textContent = novopost[0].horaDPost;

        let conteinerPost = document.createElement('div');
        conteinerPost.classList.add('conteinerPost');

        contemOpostDoUser.appendChild(conteinerPost);
        let userAndTime = document.createElement('div');
        userAndTime.classList.add('postUserAndTime')
        conteinerPost.appendChild(userAndTime);
        userAndTime.appendChild(pUser);
        userAndTime.appendChild(spanTime);
        let conteinerUserText = document.createElement('div');
        conteinerUserText.classList.add('conteinerUserText');
        conteinerPost.appendChild(conteinerUserText);
        conteinerUserText.appendChild(pUserText);
        let conteinerConteudoInfo = document.createElement('div');
        conteinerConteudoInfo.classList.add('conteinerConteudoInfo');
        conteinerPost.appendChild(conteinerConteudoInfo);
        let ConteudoInfo = document.createElement('div');
        ConteudoInfo.classList.add('ConteudoInfo');

        conteinerConteudoInfo.appendChild(imgposter);
        conteinerConteudoInfo.appendChild(ConteudoInfo)
        ConteudoInfo.appendChild(pTitulo);
        ConteudoInfo.appendChild(Pgenero);
        ConteudoInfo.appendChild(pdiretor);
        ConteudoInfo.appendChild(PanoLancamento);
        ConteudoInfo.appendChild(pruntime);
    }
    potsOfatualSessao.pop();
}
