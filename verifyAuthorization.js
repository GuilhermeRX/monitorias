const verifyAuthorization = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 16) throw new Error('Token inválido!')

  next();
};

module.exports = verifyAuthorization;