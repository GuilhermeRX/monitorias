const UserService = require("../services/UserService");

const UserController = {
  findAll: async (req, res) => {
    const users = await UserService.findAll();
    res.status(200).json(users);
  },

  findById: async (req, res) => {
    const user = await UserService.findById(req.params.id);
    res.status(200).json(user);
  },

  create: async (req, res) => {
    const user = await UserService.create(req.body);
    res.status(201).json(user);
  },

  updated: async (req, res) => {
    await UserService.updated(req.body, req.params.id);
    res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  },

  delete: async (req, res) => {
    await UserService.delete(req.params.id);
    res.status(204).end
  },
};

module.exports = UserController;