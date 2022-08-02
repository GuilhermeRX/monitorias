require('express-async-errors');
const express = require('express');
const signupRouter = require('./routes/signup.route');
const salesRouter = require('./routes/sales.route');



const app = express();
app.use(express.json());

app.use('/signup', signupRouter);
app.use('/sales', salesRouter);



app.use((err, req, res, next) => {
  const { message } = err;
  if (message === "Token inválido") return res.status(401).json({ message });
  res.status(400).json({ message });
});

app.listen(3000, () => console.log('Rodando na porta 3000'));