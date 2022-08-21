const { Router } = require("express");
const bookController = require('../controllers/bookController');

const bookRouter = Router();

bookRouter.post('/', bookController.create)
bookRouter.get('/', bookController.findAll)
bookRouter.get('/:id', bookController.findById)
bookRouter.put('/:id', bookController.update)
bookRouter.delete('/:id', bookController.delete)

module.exports = bookRouter;