# <p align = "center"> Driven Pass API </p>

<p align="center">
   <img src="https://help.apple.com/assets/615642ECF3D4C61D4B04CB81/615642EEF3D4C61D4B04CB88/pt_BR/89cb0ce060eea823d93714c287a7c268.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-FILIPE_CORREIA-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/f7lipe/projeto19-drivenpass?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

Browsing the internet can be a very fun activity, but at the same time, very dangerous. Numerous studies and surveys (national and international) show that the number of virtual scams continues to grow. Which raises the question: how to protect ourselves? This API allows you to securely store your credit card information, websites, wifi credentials, notes and more.

***

## :computer:	 Technologies and concepts 

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- ORM 
- SQL

***

## :rocket: Routes
### 🏠 Authentication 
```yml
POST /signup
    - Route to register a new user
    - headers: {}
    - body:{
        "email": "lorem@loremipsum.com",
        "senha": "loremipsum"
}
```
    
```yml 
POST /signin
    - Route to sign in 
    - headers: {}
    - body: {
    "email": "lorem@loremipsum.com",
    "password": "loremipsum"
    }
```
### 🌐 Website credentials 
```yml 
POST /credential (authenticated)
    - Route to create a credential
    - headers: { "Authorization": "Bearer $token" }
    - body: {
    "email": "ipsum@dolor.set",
    "password": "ipsumlorem",
    "title": "My beautiful instagram credentials",
    "url": "https://instagram.com/
    }
```
```yml 
GET /credential/:credentialId (authenticated)
    - Get specific credential of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```    
```yml 
GET /credential/= (authenticated)
    - Get all credentials of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /credential/:credentialId (authenticated)
    - Delete specific credential of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

### 📶  Wi-fi credentials 
```yml 
POST /wifi (authenticated)
    - Route to create a wi-fi credential
    - headers: { "Authorization": "Bearer $token" }
    - body: {
    "ssid": "Pergasus",
    "password": "ipsumlorem",
    "title": "Personal hotspot"
    }
```
```yml 
GET /wifi/:wifiId (authenticated)
    - Get specific wi-fi credential of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```    
```yml 
GET /wifi/= (authenticated)
    - Get all wi-fi credentials of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /wifi/:wifiID (authenticated)
    - Delete specific wi-fi credential of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

### 🗒️  Safe notes 
```yml 
POST /safenote (authenticated)
    - Route to create a safe note
    - headers: { "Authorization": "Bearer $token" }
    - body: {
    "title": "My lovely secret",
    "content": "Lorem ipsum dolor set"
    }
```
```yml 
GET /safenote/:safenoteId (authenticated)
    - Get specific safe note of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```    
```yml 
GET /safenote/= (authenticated)
    - Get all safe notes of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /safenote/:safenoteID (authenticated)
    - Delete safe note credential of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

### 💳  Credit card credentials 
```yml 
POST /credit-card (authenticated)
    - Route to create a safe note
    - headers: { "Authorization": "Bearer $token" }
    - body: {
    "name": "Coleman 9ea02f8ca4f1",
     "number": "1494-2313-1244-11",
     "expiry": "07/2030",
     "cvv": 289,
     "password": 1984,
     "isVirtual": false,
     "type": "Credit",
     "title": "My purple MasterCard CC"
}
```
```yml 
GET /credit-card/:creditCardId (authenticated)
    - Get specific credit card of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```    
```yml 
GET /credit-card/= (authenticated)
    - Get all credit cards of an authenticated user
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
DELETE /credit-card/:creditCardId (authenticated)
    - Delete credit card credentials of an authenticated user
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
