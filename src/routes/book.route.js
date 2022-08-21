const { Router } = require("express");
const bookController = require('../controllers/bookController');

const bookRouter = Router();

bookRouter.post('/', bookController.create)
bookRouter.get('/', bookController.findAll)
bookRouter.get('/', bookController.findById)
bookRouter.put('/', bookController.update)
bookRouter.delete('/', bookController.delete)

module.exports = bookRouter;