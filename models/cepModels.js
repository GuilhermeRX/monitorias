const db = require('./connection');

const cepModels = {
  checkIfExists: async (cep) => {
    const sql = 'SELECT * FROM ceps WHERE cep = ?';
    const [[exist]] = await db.query(sql, [cep]);
    return exist;
  },

  findByCep: async (cep) => {
    const sql = 'SELECT * FROM ceps WHERE cep = ?';
    const [[cepResult]] = await db.query(sql, [cep]);
    return cepResult;
  },

  create: async (obj) => {
    const { cep, logradouro, bairro, localidade, uf } = obj;
    const sql = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
    await db.query(sql, [cep, logradouro, bairro, localidade, uf]);
  },

};

module.exports = cepModels;