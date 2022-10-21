import IBook from "../interfaces/IBook";
import IService from "../interfaces/IService";
import MongoModel from "../Models/MongoModel";

export default class BookService implements IService<IBook> {
  constructor(private _model: MongoModel<IBook>) { }

  public async findAll(): Promise<IBook[]> {
    const books = await this._model.findAll()
    return books;
  }

  public async findOne(_id: string): Promise<IBook> {
    const book = await this._model.findOne(_id)
    if (!book) throw new Error('Book não existe')
    return book
  }
}