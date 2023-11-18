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
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página inicial de login.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Deverá habilitar o login de usuário cadastrado e ser apresentado erro para usuário não cadastrado ou com informações de logins incorretas.</td>
  <td>Hênio</td>
 </tr>
</table>
