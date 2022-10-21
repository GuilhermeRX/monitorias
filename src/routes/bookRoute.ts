import { Router } from "express";
import BookController from "../controllers/BookController";
import Book from "../Models/Book";
import BookService from "../services/BookService";

const bookRouter = Router();
const bookModel = new Book();
const bookService = new BookService(bookModel);
const bookController = new BookController(bookService);


bookRouter.get('/', (req, res) => bookController.findAll(req, res))
bookRouter.get('/:id', (req, res) => bookController.findOne(req, res))

export default bookRouter;