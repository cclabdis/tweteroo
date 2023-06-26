import express from 'express';
import cors from 'cors';


const app = express(); 

app.use(cors());
app.use(express.json());


const users = []

const feed = []

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    return res.status(400).send("Todos os campos são obrigatórios!")
}
  const user = ({ username, avatar });
  users.push(user);
  res.send("ok");
})


app.post("/tweets", (req, res) => {

    const tweet = req.body.tweet
    const user = req.headers.username

    if (!user || !tweet) {
        return res.status(400).send("Todos os campos são obrigatórios!")
    }

    const userExists = users.find(data => data.username === user)

    if (!userExists) {
        return res.status(401).send("UNAUTHORIZED")
    }

    feed.unshift({ tweet, user })

    if (feed.length > 10) {
        feed.pop()
    }

    res.status(201).send("OK")

})




const PORT = 5000;
app.listen( PORT , () => {
    console.log(`o servidor está rodando na porta ${PORT}`);
})

//fuser -k 4000/tcp//


