import { Router } from "express";
import UserController from "../Controllers/UserController";
import UserService from "../Services/UserService";

const userService = new UserService();
const userController = new UserController(userService)
const userRoute = Router();

userRoute.get('/', (req, res) => userController.findAll(req, res))
userRoute.get('/test', userController.test)
userRoute.get('/:id', (req, res) => userController.findById(req, res))
export default userRoute;