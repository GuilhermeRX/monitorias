require('dotenv/config')
const express = require('express')
const { User } = require('./models/')
const app = express()
const port = process.env.PORT
app.use(express.json())

app.get('/', async (req, res) => {
  const users = await User.findAll()
  res.status(200).json(users)
})

app.listen(port, () => console.log(`Escutando através da porta ${port}!`))