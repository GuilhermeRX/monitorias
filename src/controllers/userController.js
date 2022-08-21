const userService = require("../services/userService");

const userController = {
  create: async (req, res) => {
    const user = req.body;
    const insertId = await userService.create(user);
    res.status(201).json({ id: insertId, ...user });
  },

  delete: async (req, res) => {
    const id = req.params.id;
    await userService.delete(id);
    res.status(204).json({ message: 'Usuário deletado!' });
  },

  update: async (req, res) => {
    const user = req.body;
    const id = req.params.id;
    await userService.update(user, id);
    res.status(200).json({ id, ...user });
  },

  findById: async (req, res) => {
    const id = req.params.id;
    const user = await userService.findById(id);
    res.status(200).json(user);
  },

  findAll: async (req, res) => {
    const users = await userService.findAll(users);
    res.status(200).json(users);
  },
};

module.exports = userController;