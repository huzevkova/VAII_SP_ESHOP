const orderModel = require('../models/orderModel');

/**
 * Získa všetky objednávky.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Získa objednávky používateľa podľa id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Získa obsah (knihy) v konkrétnom košíku podľa id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Získa košík konkrétneho používateľa podľa id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUserCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await orderModel.getUserCart(id);
        if (cart) {
            res.status(200).json(cart);
        } else {
            if (id != null) {
                const insertCart = await orderModel.createCart(id);
                if (insertCart) {
                    const newCart = await orderModel.getUserCart(id);
                    res.status(200).json(newCart);
                } else {
                    res.status(404).json({message: 'Cart could not be created'});
                }
            } else {
                res.status(404).json({message: 'Cart could not be created'});
            }
        }
    } catch (error) {
        console.error('Error fetching user orders:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Vloží do knihu košíka podľa ich id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Odstráni knihu z košíka podľa ich id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Aktualizuje počet kusov knihy v košíku podľa ich id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Získa všetky možnosti stavu objednávok.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getOrderStatusOptions = async (req, res) => {
    try {
        const options = await orderModel.getOrderStatusOptions();
        if (options.length > 0) {
            res.status(200).json(options);
        } else {
            res.status(404).json({ message: 'Options empty' });
        }

    } catch (error) {
        console.error('Error fetching options:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Aktualizuje stav objednávky používateľa podľa ich id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Aktualizuje možnosti doručenia objednávky podľa id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Získa všetky možnosti doručenia objednávky.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getDeliveryOptions = async (req, res) => {
    try {
        const options = await orderModel.getDeliveryOptions();
        if (options.length > 0) {
            res.status(200).json(options);
        } else {
            res.status(404).json({ message: 'Delivery options empty' });
        }
    } catch (error) {
        console.error('Error fetching delivery options:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Získa všetky možnosti platby za objednávku z DB.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getPaymentOptions = async (req, res) => {
    try {
        const options = await orderModel.getPaymentOptions();
        if (options.length > 0) {
            res.status(200).json(options);
        } else {
            res.status(404).json({ message: 'Payment options empty' });
        }
    } catch (error) {
        console.error('Error fetching payment options:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {getUserOrders, getAllOrders, getCartItems, getUserCart,
    insertIntoCart, removeFromCart, updateOrderStatus, updateCartItemCount,
    updateOrderDeliveryAndPayment, getOrderStatusOptions, getDeliveryOptions, getPaymentOptions};