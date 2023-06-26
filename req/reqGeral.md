- Geral
    - [X]  A porta utilizada pelo seu servidor deve ser a 5000.
    - [X]  Versionamento usando Git é obrigatório, crie um **repositório público** no seu perfil do GitHub **apenas com o código do backend.**
    - [X]  Faça commits a cada funcionalidade implementada.
    - [X]  Não esqueça de criar o `.gitignore`, a `node_modules` não deve ser commitada.
    - [X]  Seu projeto deve ter, obrigatoriamente, os arquivos `package.json` e `package-lock.json`, que devem estar na raiz do projeto. Eles devem conter todas as **dependências** do projeto.
    - [X]  Adicione o código que inicia o servidor, com a função `listen`, no arquivo `src/app.js`.
    - [X]  Adicione um script no `package.json` para iniciar o servidor rodando `npm start`.
                
- Armazenamento e formato dos dados
    - [X]  Para persistir os dados (usuários e tweets), **utilize variáveis globais em memória.**
    - [X]  O formato de um **usuário** deve ser:
        
        ```jsx
        {
        	username: 'bobesponja', 
        	avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
        }
        ```
        
    - [X]  O formato de um **tweet** deve ser:
        
        ```jsx
        {
        	username: "bobesponja",
          tweet: "Eu amo hambúrguer de siri!"
        }
        ```


 - **POST** `/sign-up`
    - [ ]  Deve receber (pelo `body` da request), um parâmetro **username** e um **avatar**, contendo o nome do username do usuário e a sua foto de avatar:
    - [ ]  Salvar esse usuário num array de usuários do servidor.
    - [ ]  Por fim, retornar a mensagem `“OK”`.
- **POST** `/tweets`
    - [ ]  Se o usuário não estiver cadastrado (username não fez `sign-up` anteriormente), deve retornar a mensagem `“UNAUTHORIZED”`.
    - [ ]  Deve receber (pelo `body` da request), os parâmetros `username` e `tweet`:  
    - [ ]  Salvar esse tweet num array de tweets do servidor.
    - [ ]  Por fim, retornar a mensagem `“OK”`.
- **GET** `/tweets`
    - [ ]  Retornar os 10 últimos tweets publicados
    - Repare que a informação “avatar” **não vem** da requisição **POST** de `/tweets`. Para retornar o “avatar” na requisição **get** de `/tweets`, você vai precisar obtê-lo de outra forma.
    - [ ]  Caso não tenha nenhum tweet cadastrado, retorna um array vazio.