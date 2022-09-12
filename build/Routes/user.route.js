"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../Controllers/UserController"));
const UserService_1 = __importDefault(require("../Services/UserService"));
const userService = new UserService_1.default();
const userController = new UserController_1.default(userService);
const userRoute = (0, express_1.Router)();
userRoute.get('/', (req, res) => userController.findAll(req, res));
userRoute.get('/test', userController.test);
userRoute.get('/:id', (req, res) => userController.findById(req, res));
exports.default = userRoute;
