"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserService_1 = __importDefault(require("../services/UserService"));
const userService = new UserService_1.default();
const userController = new UserController_1.default(userService);
const router = (0, express_1.Router)();
router.get('/', (req, res) => userController.findAll(req, res));
router.get('/:id', (req, res) => userController.findById(req, res));
exports.default = router;
