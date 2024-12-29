const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

router.get('/:id', wishlistController.getWishlistByUserId)
router.post('/insert', wishlistController.insertIntoWishlist);
router.post('/delete', wishlistController.deleteFromWishlist);

module.exports = router;