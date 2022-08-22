const jwt = require('jsonwebtoken');
require('dotenv/config');

const secret = process.env.JWT_SECRET

const jwtService = {
  generateToken: (info) => {
    const token = jwt.sign({ data: info }, secret, {
      expiresIn: '1m',
      algorithm: 'HS256',
    })

    return token;
  },

  validateToken: (token) => {
    try {
      const decode = jwt.verify(token, secret);
      return decode;
    } catch (err) {
      throw new Error('Token inválido');
    };
  },
};

module.exports = jwtService;