"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const Users_1 = __importDefault(require("../Models/Users"));
const UserService_1 = __importDefault(require("../services/UserService"));
const userRouter = (0, express_1.Router)();
const userModel = new Users_1.default;
const userService = new UserService_1.default(userModel);
const userController = new UserController_1.default(userService);
userRouter.get('/', (req, res) => userController.findAll(req, res));
userRouter.get('/:id', (req, res) => userController.findOne(req, res));
exports.default = userRouter;
