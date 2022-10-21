import IBook from "../interfaces/IBook";
import BookService from "../services/BookService";
import AbstractController from "./AbstractController";

export default class BookController extends AbstractController<IBook> {
  constructor(protected _service: BookService) {
    super(_service)
  }
}