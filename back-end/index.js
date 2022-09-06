require('dotenv/config')
const express = require('express')
const cors = require('cors');

const { User } = require('./models/')
const app = express()
const port = process.env.PORT
app.use(cors());
app.use(express.json())


app.get('/', async (req, res) => {
  const users = await User.findAll()
  res.status(200).json(users)
})

app.listen(port, () => console.log(`Escutando através da porta ${port}!`))