"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./routes/user.route"));
const express = require('express');
const app = express();
const port = 3000;
const useRouter = user_route_1.default;
app.use(express.json());
app.use('/user', useRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
