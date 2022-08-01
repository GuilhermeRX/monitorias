const validateBody = (req, res, next) => {
  const { productName, infos } = req.body;
  const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
  if (!productName) return res.status(400).json({ message: 'O Campo productName é obrigatório' })
  if (productName.length < 4) return res.status(400).json({ message: 'O campo productName deve ter pelo menos 4 caracteres' })

  if (!infos) return res.status(400).json({ message: 'O campo infos é obrigatório' })
  if (!infos.saleDate) return res.status(400).json({ message: 'O campo saleDate é obrigatório' })
  if (!regexDate.test(infos.saleDate)) return res.status(400).json({ message: 'O campo saleDate não é uma data válida' })

  if (!infos.warrantyPeriod) return res.status(400).json({ message: "O campo warrantyPeriod é obrigatório" })
  if (infos.warrantyPeriod < 1 || infos.warrantyPeriod > 3) return res.status(400).json({ message: "O campo warrantyPeriod precisa estar entre 1 e 3" });

  next();
};

module.exports = validateBody;