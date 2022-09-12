import { INTEGER, Model, STRING } from "sequelize";
import db from '.';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  modelName: 'users',
  sequelize: db,
})

export default User