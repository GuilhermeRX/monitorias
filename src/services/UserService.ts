import UserModel from '../database/models/UserModel';

interface IUserService {
  findAll(): Promise<UserModel[]>
  findById(id: number): Promise<UserModel>
}

export default class UserService implements IUserService {
  private db = UserModel;

  async findAll(): Promise<UserModel[]> {
    const users = await this.db.findAll()
    return users;
  }

  async findById(id: number): Promise<UserModel> {
    const user = await this.db.findByPk(id)
    return user as UserModel
  }
}