# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t3-grupo-03/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t3-grupo-03/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Inicial de login.
  <td>
   <ul>
    <li>RF-01:	O site deve permitir a criação de usuários com informações básicas, obrigatórias e opcionais.</li>
   <li>RF-02:	O site deve permitir ao usuário logar com usuário registrado ou através de suas contas do Facebook e do Google.</li>
   <li>RF-16:	 O site deve permitir a recuperação de senha para usuários cadastrados.</li>
    
   </ul>
  </td>
  <td>Verificar se os links da página de login estão encaminhando para as respectivas páginas indicadas.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página inicial de login.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas. Os botões de login do Google e Facebook devem direcionar para a página de login destes serviços.</td>
  <td>Hênio</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Testar a validação de usuários cadastrados.
  <td>
   <ul>
   
   <li>RF-02:	O site deve permitir ao usuário logar com usuário registrado ou através de suas contas do Facebook e do Google.</li>

    
   </ul>
  </td>
  <td>Verificar se a validação por meio de js para o acesso a usuários cadastrados no site.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o usuário e senha nos campos.</li>
    <li>Clicar no botão "entrar".</li>
    
   </ol>
   </td>
  <td>Deverá habilitar o login de usuário cadastrado e ser apresentado erro para usuário não cadastrado ou com informações de logins incorretas.</td>
  <td>Hênio</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar a validação de dados na tela de cadastro./td>
  <td>
   <ul>
   
   <li>RF-01:	O site deve permitir a criação de usuários com informações básicas, obrigatórias e opcionais.</li>

    
   </ul>
  </td>
  <td>Verificar se os campos obrigatórios estão sendo exigidos para o cadastro. Verificar se há validação de dados conforme código js.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Clicar no link "Novo por aqui? Para criar novo usuário clique aqui"</li>
    <li>Preencher os campos exigidos.</li>
   </ol>
   </td>
  <td> Deverá permitir o cadastro de novo usuário e impedir o cadastro caso haja dado indevido ao especificado.</td>
  <td>Hênio</td>
 </tr>
</table>



<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar se a caixa de pesquisa está funcionando corretamente./td>
  <td>
   <ul>
   
   <li>RF-03:	O site deve oferecer mecanismo de busca de usuários e de produtos de entretenimento: música, filmes, séries, jogos ou livros..</li>

    
   </ul>
  </td>
  <td>Verificar se a pesquisa está funcionando em acordo com a pesquisa e direcionamento para o produto.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Acessar qualquer tela que tenha a caixa de pesquisa</li>
    <li>Preencher os campos exigidos.</li>
   </ol>
   </td>
  <td>A pesquisa deverá retornar o produto com link para sua página.</td>
  <td>Hênio</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar se está sendo permitido escrever comentários./td>
  <td>
   <ul>
   
   <li>RF-04:	OO site deve ter um banco de dados com imagem e descrição para cada produto, no qual o usuário possa classificar e escrever resenhas e opiniões sobre a recomendação...</li>

    
   </ul>
  </td>
  <td>Verificar se a caixa de comentários está habilitado e se é possível inserir comentário e seu retorno .</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Acessar a terla de produto</li>
    <li>Escrever o comentário e selecionar publicar.</li>
   </ol>
   </td>
  <td> O comentário deverá ser publicado, mediante informação em tela ao usuário.</td>
  <td>Hênio</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Verificar se está sendo permitido realizar buscas.<td>
   <ul>
   <li>RF-03: O site deve oferecer mecanismo de busca de usuários e de produtos de entretenimento: música, filmes, séries, jogos ou livros.</li>
   </ul>
  </td>
  <td>Verificar se e possivel realizar pesquisa</td>
  <td>
   <ol>
    <li>na tela de feed</li>
    <li>digitar o item a pesquisar</li>
    <li>clicar no icone de lupa</li>
   </ol>
   </td>
  <td>devera aparecer itens que casa com a entrada da pesquisa</td>
  <td>zaquel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-07: Verificar se está sendo permitido dar like nas .<td>
   <ul>
   <li>RF-11: dar like.</li>
   </ul>
  </td>
  <td>Verificar se e possivel dar like em posts</td>
  <td>
   <ol>
    <li>na tela de feed</li>
    <li>no post que desejar</li>
    <li>clicar no botao de like</li>
   </ol>
   </td>
  <td>post devera ser barcado como gostei</td>
  <td>zaquel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-08: Verificar se está sendo comentario em posts.<td>
   <ul>
   <li>RF-12: fazer comentarios.</li>
   </ul>
  </td>
  <td>Verificar se e possivel fazer comentarios em posts</td>
  <td>
   <ol>
    <li>na tela de feed</li>
    <li>no post que desejar</li>
    <li>escrever um comenraio</li>
    <li>clikcar no botao de comentar</li>
   </ol>
   </td>
  <td>comentario devera ser vinculado aquele post</td>
  <td>zaquel</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-09: Verificar se os posts entao sendo carregados.<td>
   <ul>
   <li>RF-12: O site deve carregar posts no feed do usuario.</li>
   </ul>
  </td>
  <td>verificar se os posts estao carregando no feed</td>
  <td>
   <ol>
    <li>na tela de feed</li>
    <li>veficar se a posts carregados</li>
   </ol>
   </td>
  <td>os posts deveram aparecer na tela de feed</td>
  <td>zaquel</td>
 </tr>
</table>
