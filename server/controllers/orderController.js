const orderModel = require('../models/orderModel');

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.getAllOrders();
        if (orders.length > 0) {
            res.status(200).json(orders);
        } else {
            res.status(404).json({ message: 'Orders empty' });
        }

    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getUserOrders = async (req, res) => {
    const { id } = req.params;
    try {
        const orders = await orderModel.getUserOrders(id);
        if (orders.length > 0) {
            res.status(200).json(orders);
        } else {
            res.status(200).json([]);
        }
    } catch (error) {
        console.error('Error fetching user orders:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getCartItems = async (req, res) => {
    const { id } = req.params;
    try {
        const orders = await orderModel.getCartItems(parseInt(id));
        if (orders.length > 0) {
            res.status(200).json(orders);
        } else {
            res.status(404).json({ message: 'Cart empty' });
        }
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getUserCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await orderModel.getUserCart(id);
        if (cart) {
            res.status(200).json(cart);
        } else {
            const insertCart = await orderModel.createCart(id);
            if (insertCart) {
                const newCart = await orderModel.getUserCart(id);
                res.status(200).json(newCart);
            } else {
                res.status(404).json({ message: 'Cart could not be created' });
            }
        }
    } catch (error) {
        console.error('Error fetching user orders:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const insertIntoCart = async (req, res) => {
    const { id_book, id_order } = req.body;
    try {
        const item = await orderModel.insertIntoCart({id_book, id_order})
        if (item) {
            res.status(201).json({message: 'Item added successfully'});
        }
    } catch (error) {
        console.error('Error inserting item to cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const removeFromCart = async (req, res) => {
    const { id_book, id_order } = req.body;
    try {
        const item = await orderModel.removeFromCart({id_book, id_order})
        if (item) {
            res.status(201).json({message: 'Item removed successfully'});
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        console.error('Error inserting item to cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const updateCartItemCount = async (req, res) => {
    const { count, id_order, id_book } = req.body;
    try {
        const item = await orderModel.updateCartItemCount({count, id_order, id_book})
        if (item) {
            res.status(201).json({message: 'Item count updated successfully'});
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        console.error('Error updating item in cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const updateOrderStatus = async (req, res) => {
    const {status, id_order, id_user} = req.body;
    try {
        const item = await orderModel.updateOrderStatus({status, id_order, id_user});
        if (item) {
            res.status(201).json({message: 'Order updated successfully'});
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const updateOrderDeliveryAndPayment = async (req, res) => {
    const {delivery, payment, id_order} = req.body;
    try {
        const item = await orderModel.updateDeliveryAndPayment({delivery, payment, id_order});
        if (item) {
            res.status(201).json({message: 'Order updated successfully'});
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        console.error('Error updating order:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {getUserOrders, getAllOrders, getCartItems, getUserCart, insertIntoCart, removeFromCart, updateOrderStatus, updateCartItemCount, updateOrderDeliveryAndPayment};