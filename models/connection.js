const mysql = require('mysql2/promise');


const connection = mysql.createPool({
  host: 'localhost',
  user: 'dev',
  password: '460625gg',
  database: 'cep_lookup'
});

module.exports = connection;