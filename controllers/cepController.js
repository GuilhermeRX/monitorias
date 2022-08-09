const cepServices = require("../services/cepServices");

const cepController = {
  findByCep: async (req, res) => {
    cepServices.validate(req.params.cep);
    await cepServices.checkIfExists(req.params.cep);
    const cep = await cepServices.findByCep(req.params.cep);
    res.status(200).json(cep);
  },

  create: async (req, res) => {
    const cepObj = cepServices.validateBody(req.body);
    await cepServices.create(cepObj);
    res.status(201).json(cepObj);
  },

};


module.exports = cepController;