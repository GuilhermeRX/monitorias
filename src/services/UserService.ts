import IService from "../interfaces/IService";
import IUser from "../interfaces/IUser";
import MongoModel from "../Models/MongoModel";

export default class UserService implements IService<IUser> {
  constructor(private _model: MongoModel<IUser>) { }

  public async findAll(): Promise<IUser[]> {
    const users = await this._model.findAll()
    return users;
  }

  public async findOne(_id: string): Promise<IUser> {
    const user = await this._model.findOne(_id)
    if (!user) throw new Error('User não existe')
    return user
  }
}