"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractController_1 = __importDefault(require("./AbstractController"));
class UserController extends AbstractController_1.default {
    constructor(_service) {
        super(_service);
        this._service = _service;
    }
}
exports.default = UserController;
