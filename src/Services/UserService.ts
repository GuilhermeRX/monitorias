import User from '../database/models/UserModel';

interface IUserService {
  findAll(): Promise<User[]>
  findById(id: number): Promise<User>
}

export default class UserService implements IUserService {
  private db = User

  async findAll(): Promise<User[]> {
    const users = await this.db.findAll();
    return users;
  }

  async findById(id: number): Promise<User> {
    const user = await this.db.findByPk(id)
    return user as User;
  }
}

