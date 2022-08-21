const bookModels = require("../models/booksModel");

const bookService = {
  create: async (book) => {
    const insertId = await bookModels.create(book);
    return insertId;
  },

  delete: async (id) => {
    await bookModels.delete(id);
  },

  update: async (book, id) => {
    await bookModels.update(book, id);
  },

  findById: async (id) => {
    const book = await bookModels.findById(id);
    return book;
  },

  findAll: async () => {
    const books = await bookModels.findAll();
    return books;
  },
};

module.exports = bookService;