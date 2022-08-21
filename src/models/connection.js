const mysql = require('mysql2/promise');
require('dotenv/config');

const db = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

module.exports = db;