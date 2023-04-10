import express from 'express';
import cors from 'cors';
const app = express(); 

app.use(cors());
app.use(express.json());

const users = []

function isValidUser(user) {
  const keys = Object.keys(user);
  return keys.length === 2 && keys.includes('username') && keys.includes('avatar');
}

function isValidTweet(tweet) {
  const keys = Object.keys(tweet);
  let keysTest = keys.length === 2 && keys.includes('username') && keys.includes('tweet');

  return keysTest && typeof tweet === 'string' && tweet.length > 0 
}

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
  const user = users.find(user => user.username === username);

  if (!user && !isValidUser(user)) {
    res.status(401).send('UNAUTHORIZED');
    return;
  }

  if(!isValidTweet(tweet)) {
    res.status(400).send('BAD REQUEST');
    return;
  }

  feed.push(tweets);
  res.status(200).send('OK/CREATED');
});

app.get('/tweets', (req, res) => {
  const { username, avatar, tweet} = req.body;
  const latest = { username, avatar, tweet };
  const last10 = latest.length >= 10 ? latest.slice(-10): latest;
  latest.length === 0;

  if(latest.length === 0) {
    res.json([]);
    return;
  }

  res.json(last10);
});

app.listen(5000, () =>{
    console.log('o servidor está rodando na porta 5000');
})

//fuser -k 4000/tcp//


