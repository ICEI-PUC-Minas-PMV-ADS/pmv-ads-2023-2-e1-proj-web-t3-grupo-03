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
| RF-01 | Realizar Cadastro de Usuário     | Alta  |
| RF-02 | Fazer Login| Alta  |
| RF-03 | Carregar feed de atividades | Média |
| RF-04 | Interatividade com post |Média  |
| RF-05 | Compartilhar em outras redes| Média  |
| RF-06 | Faze Recomendações/Posts| Alta |
| RF-07 | Adicionar Amigos  |Média |
| RF-08 | Pesquisar Usuários| Baixa  |
| RF-09 | Pesquisar Conteúdos| baixa|
| RF-10 | Exploração de Conteúdo| Baixa   |
| RF-11 | Carregar Perfil do Usuário | Baixa   |
| RF-11.1 | Edição de Dados do usuario| Baixa   |
| RF-11.2 | Carrossel de Favoritos | Baixa   |
| RF-11.3 | Posts Feitos | Baixa   |
**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais



|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RNF-01 | Desempenho: Garantir uma resposta rápida ao cadastrar usuários, efetuar login e carregar o feed de atividade. | Alta  |
| RNF-02 | Usabilidade: Criar uma interface intuitiva para facilitar a interação do usuário com as funcionalidades da aplicação. | Alta|
| RNF-03 | Compatibilidade: Assegurar que a aplicação seja compatível com diferentes dispositivos e navegadores para uma experiência consistente.  |Alta |
| RNF-04  | Manutenibilidade: Desenvolver o código de forma modular e documentada para facilitar futuras atualizações e manutenções. | Média  |
| RNF-05 | Escalabilidade: Projetar o sistema para lidar com um aumento no número de usuários, posts e interações sem comprometer o desempenho. | Alta |
| RNF-06| Confiabilidade: Garantir que a aplicação seja estável e confiável, minimizando falhas e interrupções.     |Média |
| RNF-09 | Dar “like” e fazer comentários em posts | media|
**Prioridade: Alta / Média / Baixa. 

