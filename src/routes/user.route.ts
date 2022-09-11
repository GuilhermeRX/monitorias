import { Router } from "express";
import UserController from "../controllers/UserController";
import UserService from "../services/UserService";

const userService = new UserService()
const userController = new UserController(userService);

const router = Router();

router.get('/', (req, res) => userController.findAll(req, res))
router.get('/:id', (req, res) => userController.findById(req, res))

export default router;