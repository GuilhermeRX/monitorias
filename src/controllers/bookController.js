const bookController = {
  create: (req, res) => {
    res.status(201).json()
  },

  delete: (req, res) => {
    res.status(204).json()
  },

  update: (req, res) => {
    res.status(200).json()
  },

  findById: (req, res) => {
    res.status(200).json()
  },

  findAll: (req, res) => {
    res.status(200).json()
  },
};

module.exports = bookController;