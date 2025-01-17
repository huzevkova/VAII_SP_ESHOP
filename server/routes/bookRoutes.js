const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.get('/book/:id', bookController.getBookById);
router.get('/book/genre/:id', bookController.getGenresById);
router.get('/genre/:genre', bookController.getBooksByGenre);
router.get('/search/:name', bookController.getBooksByName);
router.get('/random/:number', bookController.getRandomBooks);
router.get('/series/:id', bookController.getBookSeries)
router.post('/insert', bookController.createBook);
router.post('/update/:id', bookController.updateBook);
router.post('/delete/:id', bookController.deleteBook);
router.get('/genres', bookController.getGenres);
router.get('/authors', bookController.getAuthors);
router.get('/languages', bookController.getLangugages);
router.get('/filtered', bookController.getFilteredBooks);
router.get('/images', bookController.getImages);
router.post('/book_image', bookController.createBookImage);
router.post('/image/update', bookController.updateImage);
router.post('/book_image/update', bookController.updateBookImage);
router.post('/image/delete/:id', bookController.deleteImage);

module.exports = router;
