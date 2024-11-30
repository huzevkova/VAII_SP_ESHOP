const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.get('/search/:name', bookController.getBooksByName);
router.post('/insert', bookController.createBook);
router.post('/update/:id', bookController.updateBook);
router.post('/delete/:id', bookController.deleteBook);

module.exports = router;
