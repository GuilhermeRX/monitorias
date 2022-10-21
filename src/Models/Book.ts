import { model as mongooseCreateModel, Schema } from "mongoose";
import IBook from "../interfaces/IBook";
import MongoModel from "./MongoModel";

const bookMongooseSchema = new Schema<IBook>({
  title: String,
  author: String,
})

export default class Book extends MongoModel<IBook> {
  constructor(model = mongooseCreateModel('books', bookMongooseSchema)) {
    super(model)
  }
}