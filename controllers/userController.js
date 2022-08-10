const userService = require("../services/userService");

const userController = {
  addUser: async (req, res) => {
    const userObj = userService.validateBody(req.body);
    const id = await userService.addUser(userObj);
    res.status(201).json({ id, ...userObj });
  },

  getUsers: async (req, res) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
  },

};

module.exports = userController;