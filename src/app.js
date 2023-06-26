import express from 'express';
import cors from 'cors';


const app = express(); 

app.use(cors());
app.use(express.json());





const users = []


function isValidTweet(tweet) {
  const keys = Object.keys(tweet);
  let keysTest = keys.length === 2 && keys.includes('username') && keys.includes('tweet');

  return keysTest && typeof tweet === 'string' && tweet.length > 0 
}

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  const user = ({ username, avatar });
  users.push(user);
  res.send("ok");
})

//n esta me retornando ok

const feed = [];

app.post('/tweets', (req, res) => {
  const { username, tweet} = req.body;
  const tweets = {username, tweets};
  const user = users.find(user => user.username === username);


  function isValidUser(user) {
    const keys = Object.keys(user);
    return keys.length === 2 && keys.includes('username') && keys.includes('avatar');
  }
  
  if (!user && !isValidUser(user)) return res.status(401).send('UNAUTHORIZED')

  
    
  feed.push(tweets)
  res.json(tweets).status(200).send('OK/CREATED');

  if(!isValidTweet(tweet)) {
    res.status(400).send('BAD REQUEST');
    return;
  }

  
});

app.get('/tweets', (req, res) => {
  const { username, avatar, tweet} = req.body;
  const latest = { username, avatar, tweet };
  const last10 = latest.length >= 10 ? latest.slice(-10): latest;
  latest.length === 0;

  if(latest.length === 0) {
    res.json(feed);
    return;
  }

  res.json(last10);
});


const PORT = 5000;
app.listen( PORT , () => {
    console.log(`o servidor está rodando na porta ${PORT}`);
})

//fuser -k 4000/tcp//


