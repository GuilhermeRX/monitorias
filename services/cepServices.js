const cepModels = require('../models/cepModels');
const Joi = require('joi');

const cepService = {
  validate: (cep) => {
    const regex = /^\d{5}-?\d{3}$/
    if (!regex.test(cep)) {
      const err = new Error('CEP inválido');
      err.code = 'invalidData';
      err.status = 400;
      throw err;
    };
  },

  validateBody: (obj) => {
    const schema = Joi.object({
      "cep": Joi.string().required(),
      "logradouro": Joi.string().required(),
      "bairro": Joi.string().required(),
      "localidade": Joi.string().required(),
      "uf": Joi.string().min(2).max(2).required(),
    });

    const { err, value } = schema.validate(obj);

    if (err) throw err;

    return value;
  },

  checkIfExists: async (cep) => {
    const exist = await cepModels.checkIfExists(cep);
    if (!exist) {
      const err = new Error('CEP não encontrado');
      err.code = 'notFound'
      err.status = 404
      throw err
    }
  },

  findByCep: async (cep) => {
    const cepResult = await cepModels.findByCep(cep);
    return cepResult;
  },

  create: async (obj) => {
    await cepModels.create(obj);
  },

};


module.exports = cepService;