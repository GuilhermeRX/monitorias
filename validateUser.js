const validateUser = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone) throw new Error('missing fields')

  next();
};

module.exports = validateUser;