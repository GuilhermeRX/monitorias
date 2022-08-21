const userModels = require("../models/userModels");

const userService = {
  create: async (user) => {
    const insertId = await userModels.create(user);
    return insertId;
  },

  delete: async (id) => {
    await userModels.delete(id);
  },

  update: async (user, id) => {
    await userModels.update(user, id);
  },

  findById: async (id) => {
    const user = await userModels.findById(id);
    return user;
  },

  findAll: async () => {
    const users = await userModels.findAll();
    return users;
  },
};

module.exports = userService;