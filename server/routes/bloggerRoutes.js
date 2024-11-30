const express = require('express');
const router = express.Router();
const bloggerController = require('../controllers/bloggerController');

router.get('/', bloggerController.getAllBloggers);
router.get('/:id', bloggerController.getBloggerById);
router.get('/auth/:email', bloggerController.getBloggerByEmail);
router.post('/insert', bloggerController.createBlogger);
router.post('/update/:id', bloggerController.updateBlogger);
router.post('/delete/:id', bloggerController.deleteBlogger);

module.exports = router;
