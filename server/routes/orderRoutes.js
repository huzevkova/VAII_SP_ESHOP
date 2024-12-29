const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getUserOrders);
router.get('/cart/:id', orderController.getUserCart);
router.get('/cart_items/:id', orderController.getCartItems);
router.post('/insert', orderController.insertIntoCart);
router.post('/delete', orderController.removeFromCart);
router.post('/update_count', orderController.updateCartItemCount);
router.post('/update/:id', orderController.updateOrderStatus);
router.post('/update_options/:id', orderController.updateOrderDeliveryAndPayment);

module.exports = router;