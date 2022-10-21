import { model as mongooseCreateModel, Schema } from "mongoose";
import IUser from "../interfaces/IUser";
import MongoModel from "./MongoModel";

const userMongooseSchema = new Schema<IUser>({
  name: String,
  password: String,
})

export default class User extends MongoModel<IUser> {
  constructor(model = mongooseCreateModel('users', userMongooseSchema)) {
    super(model)
  }
}