const express = require('express')
const app = express()
const port = 3000
require('express-async-errors');
app.use(express.json());
const midAuthenticator = require('../middlewares/authenticator');

const db = require('../models/connection');
const jwtService = require('../services/JwtService');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const [[user]] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  if (user.password !== password) {
    throw new Error('Senha inválida');
  }

  const token = jwtService.generateToken(user.email);
  res.status(200).json({ token });
});

app.get('/userinfo', midAuthenticator, async (req, res) => {
  const [user] = await db.query('SELECT * FROM users WHERE email = ?', [req.email])
  res.status(200).json(user);
})
app.get('/users', midAuthenticator, async (req, res) => {
  const [users] = await db.query('SELECT * FROM users');
  console.log(req.email);
  res.status(200).json(users);
});


app.use((err, req, res, _next) => {
  const { message } = err;
  res.status(400).json({ message });
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))