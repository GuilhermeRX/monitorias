"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./Routes/user.route"));
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use('/user', user_route_1.default);
app.listen(port, () => console.log(`Escutando na porta ${port}!`));
