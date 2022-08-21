const bookService = require("../services/bookService");

const bookController = {
  create: async (req, res) => {
    const book = req.body
    const insertId = await bookService.create(book);
    res.status(201).json({ id: insertId, ...book })
  },

  delete: async (req, res) => {
    const id = req.params.id
    await bookService.delete(id);
    res.status(204).json({ message: 'Livro Deletado!' })
  },

  update: async (req, res) => {
    const book = req.body;
    const id = req.params.id;
    await bookService.update(book, id);
    res.status(200).json({ id, ...book })
  },

  findById: async (req, res) => {
    const id = req.params.id;
    const book = await bookService.findById(id);
    res.status(200).json(book);
  },

  findAll: async (req, res) => {
    const books = await bookService.findAll();
    res.status(200).json(books)
  },
};

module.exports = bookController;