const userModel = require("../models/userModel");
const Joi = require('joi');

const userService = {
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

  addUser: async (user) => {
    const id = await userModel.addUser(user)
    return id;
  },

  getUsers: async () => {
    const users = await userModel.getUsers();
    return users;
  },

};

module.exports = userService;