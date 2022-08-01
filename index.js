const express = require('express');
const validateBody = require('./validate');
const validateUser = require('./validateUser');
const generateToken = require('./generateToken');
const verifyAuthorization = require('./authorization');

const app = express();
app.use(express.json());

app.post('/sales', verifyAuthorization, validateBody, (_req, res) => {
  res.status(200).json({ message: 'Venda cadastrada com Sucesso' })
})

app.post('/signup', validateUser, generateToken, (req, res) => {
  const token = req.token
  res.status(200).json({ token })
});


app.listen(3000, () => console.log('Rodando na porta 3000'))