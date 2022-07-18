# <p align = "center"> Projeto X </p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/72531277/178094665-f46c6a55-c821-42a0-bb9c-d5dd5f2d69fa.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-SEU_NOME-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/SEU_NOME/NOME_DO_PROJETO?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna massa, mollis id facilisis ut, tristique convallis dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas a egestas sapien, lacinia iaculis nisi. Nam molestie fringilla egestas. Vestibulum pulvinar consequat arcu a varius. Vestibulum nec finibus enim. In at lobortis elit. Mauris imperdiet neque quis imperdiet ornare. Maecenas non nulla orci. Vestibulum tempor vitae tortor eget lobortis. Integer sapien eros, condimentum sit amet est at, vulputate efficitur elit. Praesent in velit pharetra, commodo libero a, egestas leo. Sed nunc enim, sodales vel pretium at, sodales a magna. Mauris nec nibh at enim venenatis faucibus. Duis bibendum commodo mattis. Phasellus luctus felis varius porta lacinia.

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- MongoDB with Mongoose

***

## :rocket: Rotas

```yml
POST /cadastro
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "nome": "Lorem ipsum",
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
}
```
    
```yml 
POST /login
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```
    
```yml 
GET /usuarios (autenticada)
    - Rota para listar todos os usuários
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /usuarios/:id (autenticada)
    - Rota para listar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
PUT /usuarios/:id (autenticada)
    - Rota para atualizar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "nome": "Lorem ipsum2",
        "email": "lorem2@gmail.com",
        "senha": "loremipsum2"
    }
```
 
```yml
DELETE /usuarios/:id (autenticada)
    - Rota para deletar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [Create React App](https://github.com/facebook/create-react-app), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/luanalessa/projeto-backend.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm start
```

:stop_sign: Não esqueça de repetir os passos acima com o [repositório](https://github.com/luanalessa/projeto-frontend.git) que contem a interface da aplicação, para testar o projeto por completo.
