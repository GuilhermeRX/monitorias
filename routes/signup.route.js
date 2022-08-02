const { Router } = require('express');
const validateUser = require('../validateUser');
const generateToken = require('../generateToken');

const signupRouter = Router();

signupRouter.post('/', validateUser, generateToken, (req, res) => {
  const token = req.token;
  req.token = token
  res.status(200).json({ token: token });
});

module.exports = signupRouter;