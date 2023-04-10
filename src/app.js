import express from 'express';
import cors from 'cors';
const app = express(); 

app.use(cors());
app.use (express.json())


// const user =
// {
// 	username: 'bobesponja', 
// 	avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png" 
// }


// const feed =
// {
// 	username: "bobesponja",
//     tweet: "Eu amo hambúrguer de siri!"
// }

  const users = []

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;
    const user = { username, avatar };
    users.push(user);
    res.json(user).send('ok');
  });
  

  const feed = [];

app.post('/tweets', (req, res) => {
    const { username, tweet} = req.body;
    const tweets = {username, tweets};
    const user = users.find(user => user.username === username );

    if (!user) {
      res.status(401).send('UNAUTHORIZED');
      return;
    }

    feed.push(tweets);
    res.json(tweets).send('OK');
  });

app.get('/tweets/latest', (req, res) => {
    const { username, avatar, tweet} = req.body;
    const latest = { username, avatar, tweet }
    const last10 = latest.length > 0 ? latest.slice(-10): [] ;

    res.json(last10);
  });





app.listen(5000, () =>{
    console.log('o servidor está rodando na porta 5000');
})

//fuser -k 4000/tcp//


