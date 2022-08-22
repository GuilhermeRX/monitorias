const jwtService = require("../services/JwtService");
require('dotenv/config');
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const { data } = jwtService.validateToken(authorization, secret);
  req.email = data;
  next();
};