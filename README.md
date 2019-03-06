# venturus-challenge
Repositório para o desafio proposto pela Venturus para a vaga de FullStack.

<h2>Backend</h2>

<b>Server Side:</b> Foi utilizado o NodeJS para a implementação da aplicação RESTFull, integrando com o banco de dados MLab (Banco de dados cloud MongoDB) por não necessitar a instalação de um BD local.
<p>As credenciais de integração com o MLab se encontram no arquivo .env, comitado propositalmente no repositório.</p>

<h3>Instruções</h3>
  <p>Requisitos: Estar com NodeJS e NPM instalado na máquina</p>

<ul>
  <li>Entrar na pasta do backend</li>
  <li>O package.json irá se encontrar logo na pasta</li>
  <li>Executar o comando <b>npm install</b> para instalar todas as dependências, dentre elas: body-parser, express, dotenv, cors e mongoose</li>
  <li>Executar o comando <b>npm start</b> para inicializar o server. Como default a porta está na 8080, caso necessite mudar apenas troque no arquivo .env</li>
</ul>

<h3>Endpoints da aplicação</h3>

<table>
    <thead>
        <tr>
            <td>Tipo</td>
            <td>Endereço</td>
            <td>Descrição</td>
        </tr>
    </thead>
    <tbody>
         <tr>
            <td>GET</td>
            <td>http://localhost:8080/api/user/{pagina}/user</td>
            <td>Endpoint para recuperar todos os usuários cadastrados com o recursos de paginação. EX: http://localhost:8080/api/user/1/user</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>http://localhost:8080/api/user/{pagina}/user/{user}</td>
            <td>Endpoint para filtrar os usuários cadastrados com o recurso de paginação. EX: http://localhost:8080/api/user/1/user/usuario1</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>http://localhost:8080/api/user/{user}</td>
            <td>Endpoint para filtrar os usuários cadastrados. EX: http://localhost:8080/api/user/usuario1</td>
        </tr>
         <tr>
            <td>POST</td>
            <td>http://localhost:8080/api/user</td>
            <td>Endpoint para cadastrar um usuário. O formato de corpo deve ser JSON. EX: 
            {"username": "teste","name": "nome do teste","email": "teste@gmail.com","city": "Campinas","rideInGroup": {"always": false, "sometimes": false, "never": true},"dayOfWeek": ["Sun", "Sat"],"post": 2,"album": 45,"photo": 65}</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>http://localhost:8080/api/user/{id}</td>
            <td>Endpoint para remover um usuário pelo seu ID</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>http://localhost:8080/api/user/{id}</td>
            <td>Endpoint para alterar as fotos, album e posts do usuário. O formato de corpo deve ser JSON. EX: {"post": 2, "album": 3, "photo": 32}</td>
        </tr>
    </tbody>
</table>

<hr/> 

<h2>Frontend</h2>

<b>FrontEnd:</b> Foi utilizado o ReactJS, Bootstrap 4 e FontAwesome 5 para a construção da aplicação web, juntamente com as funcionalidades do ES6.

- URL da aplicação WEB <a href="http://localhost:3000/">http://localhost:3000/</a>

<h3>Instruções</h3>
  <p>Requisitos: Estar com NodeJS e NPM instalado na máquina</p>

<ul>
  <li>Entrar na pasta da aplicação que encontra-se na pasta frontend</li>
  <li>O package.json irá se encontrar logo na pasta</li>
  <li>Executar o comando <b>npm install</b> para instalar todas as dependências</li>
  <li>Executar o comando <b>npm start</b> para inicializar o server. Como default a porta está na 3000</li>
  <li>Clique na URL acima para verificar se tudo está correto</li>
</ul>