const express = require('express')
const app = express()
const port = 3000
const Joi = require('joi');
const userModel = require('./models/userModel');
require('express-async-errors');

const validateBody = (user) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
  })

  const { error, value } = schema.validate(user);
  if (error) throw new Error(error.message);

  return value;
};

const validateId = (user) => {
  const schema = Joi.object({
    id: Joi.number().integer().required(),
  });

  const { error, value } = schema.validate(user);
  if (error) throw new Error(error.message);

  return value;
};

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/user', async (req, res) => {
  const { firstName, lastName, email } = req.body
  const user = validateBody(req.body);
  const idUser = await userModel.create(user);
  res.status(201).json({ id: idUser, firstName, lastName, email });
});

app.get('/user', async (req, res) => {
  const users = await userModel.findAll();
  res.status(200).json(users);
})

app.get('/user/:id', async (req, res) => {
  const { id } = validateId(req.params);
  const user = await userModel.findById(id);
  res.status(200).json(user);
})

app.put('/user/:id', async (req, res) => {
  const { id } = validateId(req.params);
  const user = validateBody(req.body);
  await userModel.checkIfExists(id);
  await userModel.update(id, user);
  res.status(200).json(user);
})

app.delete('/user/:id', async (req, res) => {
  const { id } = validateId(req.params);
  await userModel.checkIfExists(id);
  await userModel.delete(id);
  res.status(200).json({ message: 'Usuário excluido com sucesso!' });
})

app.use((err, req, res, next) => {
  const { message } = err;

  res.status(404).json({ message })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))