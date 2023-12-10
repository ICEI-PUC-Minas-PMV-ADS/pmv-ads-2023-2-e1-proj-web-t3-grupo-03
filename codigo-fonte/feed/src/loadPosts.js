
export const loadposts = [];
import usersPost from './posts.json'  assert {type: "json"};

let infoConteudo;
for(let i = 0; i < usersPost.length; i++){
    fetch(`http://www.omdbapi.com/?apikey=bef0546&t=${usersPost[i].titulo}`)
    .then((r) => r.json())
    .then((t) => {
        infoConteudo = t;
        usersPost[i].anoLancamento = infoConteudo.Year;
        usersPost[i].diretor = infoConteudo.Director;
        usersPost[i].genero = infoConteudo.Genre;
        usersPost[i].poster = infoConteudo.Poster;
        usersPost[i].runtime = infoConteudo.Runtime;
        // console.log(infoConteudo)
    })
    .catch((erro) => console.error(erro));
    
}
loadposts.push(usersPost)
console.log(loadposts);
/*
this.user = user;
this.Titulo = Titulo;
this.anoLancamento = anoLancamento;
this.genero = genero;
this.poster = poster;
this.diretor = diretor;
this.userText = userText
this.runtime = runtime;
this.horaDPost = new Date();
*/
let PostLoaded = document.getElementById('PostLoaded');



export function loadPostsOnscreem() {
    loadposts.forEach(function (postData) {
        let Puser = document.createElement('p');
        let Ptitle = document.createElement('p');
        let userAndTime = document.createElement('div');
        let conteinerUserText = document.createElement('div');
        let conteinerConteudoInfo = document.createElement('div');
        let PanoLanc = document.createElement('p');
        let SpamGenero = document.createElement('span');
        let ImgPoster = document.createElement('img');
        let Pdiretor = document.createElement('p');
        let PuserText = document.createElement('p');
        let PrunTime = document.createElement('p');
        let ImgPhotoUser = document.createElement('img');
        let postTime = document.createElement('p');

        //dados do user
        Puser.textContent = postData.user;
        PuserText.textContent = postData.userText;
        // ImgPhotoUser.src = postData.userText;//tem que fazer a logica para pegar essa img
        //info sobre o post
        postTime.textContent = postData.horaDPost;

        //infos do conteudo a ser postado
        Ptitle.textContent = postData.Titulo;
        PanoLanc.textContent = postData.anoLancamento;
        SpamGenero.textContent = postData.genero;
        Pdiretor.textContent = postData.diretor;
        PrunTime.textContent = postData.runtime;
        ImgPoster.src = postData.poster;

        PostLoaded.appendChild(userAndTime);
        userAndTime.appendChild(Puser);
        userAndTime.appendChild(postTime);

        PostLoaded.appendChild(conteinerUserText);
        conteinerUserText.appendChild(PuserText);

        PostLoaded.appendChild(conteinerConteudoInfo);
        PostLoaded.appendChild(ImgPoster);
        PostLoaded.appendChild(Ptitle);
        PostLoaded.appendChild(Pdiretor);
        PostLoaded.appendChild(PanoLanc);
        PostLoaded.appendChild(PrunTime);
        PostLoaded.appendChild(SpamGenero);
        console.log(postData);
        loadposts.pop(postData);
    })

}
