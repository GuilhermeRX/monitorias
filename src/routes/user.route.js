const { Router } = require("express");
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/', userController.create)
userRouter.get('/', userController.findAll)
userRouter.get('/', userController.findById)
userRouter.put('/', userController.update)
userRouter.delete('/', userController.delete)

module.exports = userRouter;