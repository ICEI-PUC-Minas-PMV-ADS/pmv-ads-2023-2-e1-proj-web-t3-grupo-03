const listaDeAmigos = document.getElementById('friend-list');

fetch('src/listaDeAmigos.json')
    .then(response => response.json())
    .then(data =>{
        data.forEach(listaAmigos =>{
            const amigosUl = document.createElement('ul');
            amigosUl.classList.add('amigos-list');

            const amigos = document.createElement('li');
            amigos.classList.add('amigos-list-li');

            const img = document.createElement('img');
            img.src = listaAmigos.amigos;
            amigos.appendChild(img)

            const name = document.createElement('p');
            name.textContent = listaAmigos.name


            amigos.appendChild(name)
            amigosUl.appendChild(amigos)
            listaDeAmigos.appendChild(amigosUl)
        })
    })