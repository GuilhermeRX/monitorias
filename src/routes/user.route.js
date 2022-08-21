const { Router } = require("express");
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/', userController.create)
userRouter.get('/', userController.findAll)
userRouter.get('/:id', userController.findById)
userRouter.put('/:id', userController.update)
userRouter.delete('/:id', userController.delete)

module.exports = userRouter;