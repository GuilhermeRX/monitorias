const db = require('./connection');

const userModel = {
  checkIfExists: async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [[user]] = await db.query(sql, [id]);
    if (!user) throw new Error('User not Found');
  },

  create: async (user) => {
    const { firstName, lastName, email, password } = user;
    const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);';
    const [{ insertId }] = await db.query(sql, [firstName, lastName, email, password]);
    return insertId;
  },

  findAll: async () => {
    const sql = 'SELECT * FROM users';
    const [users] = await db.query(sql);
    return users;
  },

  findById: async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [[user]] = await db.query(sql, [id])
    return user;
  },

  update: async (id, user) => {
    const { firstName, lastName, password, email } = user;
    const sql = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;'
    await db.query(sql, [firstName, lastName, email, password, id]);
  },

  delete: async (id) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    await db.query(sql, [id]);
  },
};

module.exports = userModel;