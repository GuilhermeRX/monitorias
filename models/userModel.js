const db = require('./connection');

const userModel = {
  addUser: async (user) => {
    const { name, email, password } = user;
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ? ,?);'
    const [{ insertId }] = await db.query(sql, [name, email, password]);
    return insertId;
  },

  getUsers: async () => {
    const sql = 'SELECT * FROM users';
    const [users] = await db.query(sql);
    return users;
  },

};

module.exports = userModel;