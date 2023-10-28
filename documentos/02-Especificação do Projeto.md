# Especificação do Projeto

<p> Através da observação do cotidiano do público alvo e de um questionário realizado pelos membros da Equipe, ficou definido um padrão de motivações e "dores", identificados por meio de perguntas objetivas a fim de definir o perfil dos consumidores. </p>



## Perfis de Usuários

<p> Os detalhes levantados neste processo de pesquisa foram utilizados para formação do perfil do usuário, conforme segue abaixo. </p> 

<table>
<tbody>
<tr align=center>
<th colspan="4">Perfil: Hênio Pereira Fontes </th>
</tr>
<tr>
 <td width="150px"><b>Descrição: </b></td>
 <td width="150px"> Idade: 39 anos. </td>
 <td width="200px"> Ocupação: Analista de Negócios. </td>
 <td width="250px"> Hobbies: Gosta de ouvir música e particar esportes. </td>
</tr>
<tr>
<td width="150px"><b>Necessidades: </b></td>
<td width="300px"> Encontrar recomendações personalizadas do seu perfil em uma única aplicação web. </td>
<td colspan="2"> Não deseja perder mais tempo com indicações de conteúdos ruins. </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="4">Perfil: Jenifer Luiza da Silva </th>
</tr>
<tr>
 <td width="150px"><b>Descrição: </b></td>
 <td width="150px"> Idade: 23 anos. </td>
 <td width="200px"> Ocupação: Publicitária. </td>
 <td width="250px"> Hobbies: Apaixonada por filmes e séries. </td>
</tr>
<tr>
<td width="150px"><b>Necessidades: </b></td>
<td width="300px"> Encontrar indicações de bons contéudos uma única aplicação web. </td>
<td colspan="2"> Deseja compartilhar sua opinião com amigos e familiares em uma aplicação web personalizada para isso. </td>
</tr>
</tbody>
</table>



## Histórias de Usuários
<p> A partir da compreensão das motivações e frustrações dos usuários identificados como persona do projeto, foram apontas as histórias contidas na tabela abaixo: </p> 

<table>
<tbody>
<tr align=center>
<td colspan="1"> Eu como... "Quem" </td>
<td colspan="1"> Quero/Desejo... "O que" </td>
<td colspan="1"> Para... "Por que" </td>
</tr>
<tr align=center>
<td colspan="1"> Hênio Fontes </td>
<td colspan="1"> Indicação de conteúdo personalizada. </td>
<td colspan="1"> Evitar consumo de produtos que não condizem com meu perfil. </td>
</tr>
<tr align=center>
<td colspan="1"> Hênio Fontes </td>
<td colspan="1"> Recomendações de conteúdos em plataformas que sou assinante (Ex: Netflix). </td>
<td colspan="1"> Encontrar produtos que já possuo acesso, sem ter a necessidade de compras/assinar outros meios. </td>
</tr>
<tr align=center>
<td colspan="1"> Jenifer da Silva </td>
<td colspan="1"> Deseja boas recomendações em um site de fácil acesso e utilização. </td>
<td colspan="1"> Para diminuir o tempo gasto procurando conteúdos. </td>
</tr>
<tr align=center>
<td colspan="1"> Hênio Fontes </td>
<td colspan="1"> Deseja histórico de filmes que já assistiu para ter a opção de não repeti=los. </td>
<td colspan="1"> Não assistir conteúdos repetidos. </td>
</tr>
<tr align=center>
<td colspan="1"> Jenifer da Silva </td>
<td colspan="1"> Indicação de diferentes tipos de conteúdo. </td>
<td colspan="1"> Encontrat em uma só plataforma diversos temas, sem a necessidade de consultar vários sites. </td>
</tr>
<tr align=center>
<td colspan="1"> Hênio Fontes </td>
<td colspan="1"> Possibilidade de haver uma lista de favoritos para assistir quando quiser. </td>
<td colspan="1"> Guardar conteúdos interessantes e não perdê-los na aplicação. </td>
</tr>
<tr align=center>
<td colspan="1"> Jenifer da Silva </td>
<td colspan="1"> Poder compartilhar o que está vendo e ouvindo com amigos e familiares. </td>
<td colspan="1"> Incentivar o interesse dos mesmos no mundo cultural. </td>
</tr>
</tbody>
</table>



## Requisitos do Projeto

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |O site deve permitir a criação de usuários com informações básicas, obrigatórias e opcionais.     | Alta  |
| RF-02 |O site deve permitir ao usuário logar com usuário registrado ou através de suas contas do Facebook e do Google.        | Alta  |
 |RF-03 | O site deve oferecer mecanismo de busca de usuários e de produtos de entretenimento: música, filmes, séries, jogos ou livros.                   | Média |
| RF-04 | O site deve ter um banco de dados com imagem e descrição para cada produto, no qual o usuário possa classificar e escrever resenhas e opiniões sobre a recomendação.                    |Média  |
|  RF-05  |O site deve oferecer lista de favoritos pessoal do usuário a qual ele possa ser livre para classificar, podendo ser pública, privada ou visível apenas para seguidores.                  | Média  |
| RF-06 |O site deve permitir que o usuário siga outros usuários, podendo ter o perfil aberto ou perfil privado, neste último caso o usuário deveria aprovar o seguidor.              | Alta |
| RF-07| O site deve enviar notificação, parametrizável pelo usuário, por e-mail ou notificação pelo navegador (Desktop) sobre comentários nas resenhas, novos seguidores ou solicitações de seguidores.                    |Média |
| RF-08| O site deve mostrar em casos de filmes e séries, o streaming disponível. Para os jogos, as plataformas e, se Xbox ou Playstation, se encontram disponíveis nos serviços de assinatura (Playstation Plus/Xbox Game Pass).           | Baixa  |
|  RF-09 | O site deve permitir que o usuário faça publicação de páginas de produtos ou de suas resenhas em outras redes sociais, por meio de link do site.          | Baixa   |



**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais



|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RNF-01 |O site deve operar de forma responsiva e rápida nos principais navegadores, em desktop e em suas versões mobile. | Alta  |
 |RNF-02 | O site deve proteger os dados e garantir a segurança aos usuários, fazer gestão de cookies adequada à LGPD e usar o protocolo TLS/SSL (HTTPS).           | Alta|
| RNF-03 | O site deve ser fácil de usar, intuitivo e rápido para o usuário.    |Alta |
|  RNF-04  | O site deverá apresentar leitor de tela e descrição de imagens para uso por pessoas com deficiências visuais.           | Média  |
| RNF-05 |O site deverá permitir o uso de alto contraste de cor.          | Alta |
| RNF-06| O site deverá oferecer a possibilidade de mudar o tamanho do texto de exibição.        |Média |
| RNF-07| O site deverá permitir usar a ampliação da tela nas versões mobile.           | Alta |
| RNF-08| O site deverá apresentar ao leitor a tela do produto com a suas descrições.           | Alta |
**Prioridade: Alta / Média / Baixa. 

