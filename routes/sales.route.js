const { Router } = require('express');
const verifyAuthorization = require('../verifyAuthorization');
const validateBody = require('../validateBody');

const salesRouter = Router();

salesRouter.post('/', verifyAuthorization, validateBody, (req, res) => {
  res.status(201).json({ message: "Venda cadastrada com sucesso" })
});


module.exports = salesRouter;