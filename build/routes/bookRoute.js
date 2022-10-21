"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookController_1 = __importDefault(require("../controllers/BookController"));
const Book_1 = __importDefault(require("../Models/Book"));
const BookService_1 = __importDefault(require("../services/BookService"));
const bookRouter = (0, express_1.Router)();
const bookModel = new Book_1.default();
const bookService = new BookService_1.default(bookModel);
const bookController = new BookController_1.default(bookService);
bookRouter.get('/', (req, res) => bookController.findAll(req, res));
bookRouter.get('/:id', (req, res) => bookController.findOne(req, res));
exports.default = bookRouter;
