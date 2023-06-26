## Bônus (opcional)

- Validação de dados
    - [ ]  Todas as rotas deverão validar os dados recebidos.
        - [ ]  Caso algum dado venha vazio ou em um formato inválido, o servidor deverá retornar o status code 400 (BAD REQUEST) e não continuará com a execução da função.
        - [ ]  **POST** `/sign-up` precisa validar se os valores de `username` e `avatar` foram enviados e são strings. Caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”.
        - [ ]  **POST** `/tweets` precisa validar se os valores de `username` e `tweet` foram enviados e são strings. Caso contrário, deverá responder com a mensagem “Todos os campos são obrigatórios!”.
- Status codes de requisições **POST**
    - [ ]  Todas as requisições **POST** deverão retornar o status code 201 (CREATED) além do retorno já descrito (ex: mensagem de `“OK”`, dadas no enunciado).
    - [ ]  Para os casos em que o usuário tente enviar um tweet na rota **POST** `/tweets` sem antes ter feito login na rota **POST** `/sign-up`, deve retornar 401 (UNAUTHORIZED).
- **GET** `/tweets/USERNAME`
    - [ ]  Retornar todos os tweets publicados do usuário recebido por parâmetro de rota em um array no formato abaixo:
        
        ```jsx
        [
        	{
        		username: "bobesponja",
        		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
        	  tweet: "Eu amo hambúrguer de siri!"
        	},
        	{
        		username: "bobesponja",
        		avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
        	  tweet: "Eu sou amigo do Patrick, ele é uma estrela!"
        	}
        ]
        ```
        
    - [ ]  Se não houver nenhum tweet deste usuário, retornar um array vazio.
- **GET** `/tweets` com paginação
    - [ ]  Esse endpoint deverá passar a receber uma página identificada via query string, no formato `?page=1`.
    - [ ]  Modifique o endpoint para retornar corretamente os tweets da “página” (`page`) atual, esse endpoint será chamado ao clicar no botão “**Carregar mais**” (isso já foi feito no front-end).
    - [ ]  A primeira página corresponde aos últimos 10 tweets, a segunda do 11 ao 20, a terceira do 21 ao 30, etc.
    - [ ]  Lembre-se de validar se o valor de `page` (query string) foi enviado e tem valor **maior ou igual a** **1.** Caso o valor não seja um número maior que 1, deverá responder com a mensagem “Informe uma página válida!” e com o status code 400 (BAD REQUEST).
    - [ ]  O parâmetro `page` continua opcional. Caso não seja enviado, deverá comportar como no requisito original (200, retornando últimos 10 tweets).
- **POST** `/tweets` recebendo username por Header
    - [ ]  Esse endpoint deverá parar de receber o valor de username pelo body e passar a recebê-lo por meio de um **header** `user`.
    - [ ]  Note que o nome do header é `user`, e não `username` como o parâmetro que tínhamos no body! Faça as devidas adaptações no seu código.