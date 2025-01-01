const express = require('express');
const router = express.Router();
const bloggerController = require('../controllers/bloggerController');

router.get('/', bloggerController.getAllBlogPosts);
router.get('/:id', bloggerController.getBlogPostById);

module.exports = router;
