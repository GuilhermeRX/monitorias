const userModel = require("../models/userModel");
const Joi = require('joi');

const userService = {
  validateBody: (obj) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required()
    });

    const { error, value } = schema.validate(obj);

    if (error) {
      const err = new Error('Usuario não existe');
      err.code = 430;
      throw err;
    }


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