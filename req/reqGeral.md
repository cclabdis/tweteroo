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