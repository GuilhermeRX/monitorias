import { Router } from "express";
import UserController from "../controllers/UserController";
import User from "../Models/Users";
import UserService from "../services/UserService";

const userRouter = Router();
const userModel = new User;
const userService = new UserService(userModel);
const userController = new UserController(userService);


userRouter.get('/', (req, res) => userController.findAll(req, res))
userRouter.get('/:id', (req, res) => userController.findOne(req, res))

export default userRouter;