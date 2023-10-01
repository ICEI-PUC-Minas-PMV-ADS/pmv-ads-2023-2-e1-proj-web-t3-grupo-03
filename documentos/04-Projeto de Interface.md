
# Projeto de Interface

## User Flow

Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de navegação do usuário na aplicação. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

<figure> 
  <img src="https://github.com/heniofontes/fluxoUsuario/blob/main/Fluxo_Usuario.png"
    <figcaption>Figura 1 - Tela do fluxo do usuário </figcaption>
</figure> 

## Protótipo

Desenvolver um protótipo emerge como uma das maneiras mais ágeis e econômicas de validar uma ideia, conceito ou funcionalidade. Isso permite a interação, avaliação, modificação e aprovação das principais características de uma interface antes de entrar na fase de desenvolvimento. Leia o artigo [Protótipos: baixa, média ou alta fidelidade?](https://medium.com/ladies-that-ux-br/prot%C3%B3tipos-baixa-m%C3%A9dia-ou-alta-fidelidade-71d897559135).

### Protótipo de baixa fidelidade

Protótipos de baixa fidelidade apresentam de forma simplificada o design da interface e o relacionamento entre suas páginas, permitindo evolução da proposta da solução. Neste projeto, os utilizaremos para apoiar a validação dos requisitos e efetuar mudanças dos mesmos, caso seja necessário, para menor impacto na codificação da aplicação.

### Wireframes


Conforme fluxo de telas apresentado, as telas do sistema apresentam estrutura em quatro blocos, conforme segue: 

- Cabeçalho – apresenta a identidade visual do programa e do usuário, além das caixas de pesquisa para direcionar a produtos específicos e outros usuários;
- Conteúdo - apresenta o conteúdo da tela, feed, descrição do produto;
- Barra lateral direita - apresenta os amigos on-line e conteúdo de chat privado ativo;
- Barra lateral esquerda – apresenta botões de direcionamento para outras áreas de navegação do sistema;

### Tela – Login 

A tela de login é a primeira tela de acesso do usuário no site, para acessar qualquer conteúdo obrigatoriamente precisa haver um usuário cadastrado. Nesta tela além das opções do login, também é oferecido direcionamento para pessoas que desejam cadastrar no site e àquelas que já são cadastradas e que, eventualmente, tenha esquecido as credenciais de acesso. 
Por opção de login também é ofertado o login através de contas existentes no Google e Facebook.  

<figure> 
  <img src="https://github.com/heniofontes/wireframesHenio/blob/main/T001.1-login.png"
    <figcaption> Tela de login </figcaption>
</figure> 



### Tela – Recuperação de Senha 

A tela de recuperação de senha oferece ao usuário a recuperação de senha, após informar na tela inicial o seu username ou e-mail cadastrado, o sistema oferece duas opções de recuperação, receber o código por e-mail ou SMS em telefone cadastrado. O sistema exigirá informar o código recebido e a criação de nova senha. 

<figure> 
  <img src="https://github.com/heniofontes/wireframesHenio/blob/main/T002.1-recuperacaoSenha.png"
    <figcaption> Tela de recuperação de senha </figcaption>
</figure> 

<figure> 
  <img src="https://github.com/heniofontes/wireframesHenio/blob/main/T002.2-recuperacaoSenha.png"
    <figcaption> Tela de recuperação de senha </figcaption>
</figure> 

<figure> 
  <img src="https://github.com/heniofontes/wireframesHenio/blob/main/T002.3-recuperacaoSenha.png"
    <figcaption> Tela de recuperação de senha </figcaption>
</figure> 


##Tela – Cadastro  

A tela de cadastro  fornece a um novo usuário a possibilidade de criar o seu cadastro no site. 


<figure> 
  <img src="https://github.com/heniofontes/wireframesHenio/blob/main/T003.1-cadastro.png"
    <figcaption> Tela de cadastro </figcaption>
</figure> 
###Feed
<figure> 
  <img src="https://imgur.com/KzfX7aN"
    <figcaption> Tela de cadastro </figcaption>
</figure> 
Tela principal da aplicação, onde o usuário pode navegar pelas últimas recomendações de seus amigos e interagir com as publicações, dando likes e escrevendo comentários. Também é possível acessar o seu próprio perfil clicando no ícone com o seu nome, bem como o perfil de amigos ao clicar no nome de usuário em uma publicação do feed ou diretamente através da lista de amigos. Além disso, o usuário pode realizar buscas, usar o recurso de match de produtos, adicionar novos amigos e conversar com eles através de um chat de texto, acessível ao clicar no nome do amigo na lista de amigos. O ícone de configuração também está disponível nesta tela.

### Tela – Busca de produto

- Componente de pesquisa permite ao usuário buscar o produto que deseja. Dentre os produtos pesquisados estão filmes, series, jogos. Ao digitar as letras que descrevem o produto a aplicação sugere ao usuário possíveis produtos com base no que está sendo digitado. A sugestão de produto se obtém em um campo anexo a barra de busca com os seguintes caracteres do produto : foto, nome, qualificação, país de criação, data de criação, em caso de filmes e séries tempo de duração e gêneros que pertencem. 




### Tela – Produto

Tela do produto
A tela do produto apresenta dados pertinentes e direcionados ao produto pesquisado.
- Foto do produto seguido pelo nome, nota de qualificação, país de criação, data de criação, tempo de duração, categorias as quais o produto se enquadra, elenco e produção (escrito de forma proposital para clique abertura de pop up com foto e descrição do elenco e produção), sinopse do produto. 
- Em um campo abaixo das descrições anteriores temos um campo de vídeo com o objetivo de apresentar o produto de forma visual.


- Espaço para comentário. Localizado abaixo do campo destinado para vídeo o campo de comentário serve para que o usuário compartilhe em seu feed ou diretamente para um amigo a sua experiência com o produto.
- Campo de últimos comentários tem a função de expor os últimos comentários realizados por todos usuários que buscaram o produto em especifico.
- No campo de Similares o usuário terá acesso a produtos considerados parecidos com o produto ao qual ele pesquisou.


  
<figure> 
  <img src="https://github.com/heniofontes/wireframesHenio/blob/main/T006.2-produto.png"
   <figcaption> Tela do produto </figcaption>
</figure> 



### Tela – Qualificação do produto

Na própria tela do produto o usuário pode clicar na nota média para realizar a sua qualificação do produto. Ao clicar na pontuação média sobe um pop up, o usuário terá a informação de nota média do produto e um campo para qualificação de 1 a 10 estrelas.


<figure> 
  <img src="https://github.com/heniofontes/wireframesHenio/blob/main/T006.5-qualificacaoProduto.png"
   <figcaption> Tela qualificação do produto </figcaption>
</figure> 


### Tela – Elenco e produção

Na tela do produto ao clicar no campo de Elenco e produção aparece um pop up com todos os atores e participantes do produto.

<figure> 
  <img src="https://github.com/heniofontes/wireframesHenio/blob/main/T006.6-producao.png"
   <figcaption> Tela Elenco e produção </figcaption>
</figure> 



### Tela – Indicação chat

Neste campo o usuário tem a possibilidade de conversar e compartilhar produtos de forma privada com um seguidor.

<figure> 
  <img src="https://github.com/heniofontes/wireframesHenio/blob/main/T006.3-indicacaoChat.png"
   <figcaption> Tela indicação chat </figcaption>
</figure> 

### Tela – Comentário no feed

Quando o usuário publicar um comentário sobre um produto ele aparecera no feed do usuário. O produto será demonstrado na publicação com dados resumidos, assim como aparece na barra de buscar no feed. Ao clicar no produto ao qual o usuário compartilhou em seu feed os demais usuários serão direcionados para a tela do produto. Nesta tela existe a possibilidade de curtir o comentário sobre o produto e comentar na publicação do usuário responsável pelo feed.


<figure> 
  <img src="https://github.com/heniofontes/wireframesHenio/blob/main/T006.4-comentarioFeed.png"
   <figcaption> Tela comentário feed </figcaption>
</figure> 
