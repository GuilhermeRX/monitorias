const express = require('express');
require('express-async-errors');
const cepRouter = require('./router/cep.router');



const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: "pong!" })
});

app.use('/cep', cepRouter);

app.use((err, req, res, next) => {
  const { message, code, status } = err;

  res.status(200).json({ error: code, message });
})

app.listen(3000, () => console.log('Aplicação rodando na porta 3000'))