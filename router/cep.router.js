const { Router } = require('express');
const cepController = require('../controllers/cepController');

const cepRouter = Router();

cepRouter.get('/:cep', cepController.findByCep);
cepRouter.post('/', cepController.create);

module.exports = cepRouter;
