const express = require('express')
require('express-async-errors');

const app = express()
app.use(express.json());

const port = process.env.APP_PORT

app.get('/', async (req, res) => {
  res.status(200).json('Hello Monitoria CRUD com DOCKER');
})

app.use((err, req, res, next) => {
  const { message } = err;
  res.status(400).json({ message })
})

app.listen(port, () => console.log(`API ONLINE ! Rodando na porta - ${port}!`))