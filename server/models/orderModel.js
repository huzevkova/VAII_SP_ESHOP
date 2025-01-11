const db = require('../db');


/**
 * Získa všetky objednávky z DB.
 * @returns {Promise<*>}
 */
const getAllOrders = async () => {
    const query = 'SELECT * FROM orders JOIN order_status ON (id_status = status) WHERE status not like 1';
    const [results] = await db.query(query, []);
    return results;
}

/**
 * Získa objednávky používateľa z DB podľa id.
 * @param id
 * @returns {Promise<*>}
 */
const getUserOrders = async (id) => {
    const query = 'SELECT * FROM orders JOIN order_status ON (id_status = status) WHERE id_user = ? AND status not like 1';
    const [results] = await db.query(query, [id]);
    return results;
}

/**
 * Získa obsah (knihy) v konkrétnom košíku z DB podľa id.
 * @param id
 * @returns {Promise<*>}
 */
const getCartItems = async (id) => {
    const query = 'SELECT * FROM book_to_order JOIN books USING (id_book) LEFT JOIN images ON (id_image = image) WHERE id_order = ?';
    const [results] = await db.query(query, [id]);
    return results;
}

/**
 * Získa košík (objednávka zo stavom 1) konkrétneho používateľa podľa id.
 * @param id
 * @returns {Promise<*>}
 */
const getUserCart = async (id) => {
    const query = 'SELECT * FROM orders WHERE id_user = ? AND status = 1';
    const [results] = await db.query(query, [id]);
    return results[0];
}

/**
 * Vytvorí košík v DB pre konkrétneho používateľa podľa id.
 * @param id
 * @returns {Promise<number>}
 */
const createCart = async (id) => {
    const query = 'INSERT into orders VALUES (null, ?, 0, null, 1, 0, null, null)';
    try {
        const [result] = await db.query(query, [id]);
        return result.insertId;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

/**
 * Vloží do knihu košíka v DB podľa ich id.
 * @param ids
 * @returns {Promise<*>}
 */
const insertIntoCart = async (ids) => {
    const query = 'INSERT into book_to_order VALUES (?, ?, 1)';
    const {id_book, id_order} = ids;

    try {
        const [result] = await db.query(query, [id_book, id_order]);
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

/**
 * Odstráni knihu z košíka v DB podľa ich id.
 * @param ids
 * @returns {Promise<boolean>}
 */
const removeFromCart = async (ids) => {
    const query = 'DELETE FROM book_to_order WHERE id_book = ? AND id_order = ?';
    const {id_book, id_order} = ids;
    try {
        const [result] = await db.query(query, [id_book, id_order]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}

/**
 * Aktualizuje počet kusov knihy v košíku v DB podľa ich id.
 * @param data
 * @returns {Promise<boolean>}
 */
const updateCartItemCount = async (data) => {
    const query = 'UPDATE book_to_order SET count = ? WHERE id_order = ? and id_book = ?';
    const {count, id_order, id_book} = data;
    try {
        const [result] = await db.query(query, [count, id_order, id_book]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}

/**
 * Získa všetky možnosti stavu objednávok z DB.
 * @returns {Promise<*>}
 */
const getOrderStatusOptions = async () => {
    const query = 'SELECT * FROM order_status';
    const [results] = await db.query(query, []);
    return results;
}

/**
 * Aktualizuje stav objednávky používateľa v DB podľa ich id.
 * @param data
 * @returns {Promise<boolean>}
 */
const updateOrderStatus = async (data) => {
    const query = 'UPDATE orders SET status = ? WHERE id_order = ? AND id_user = ?';
    const {status, id_order, id_user} = data;

    try {
        const [result] = await db.query(query, [status, id_order, id_user]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}

/**
 * Aktualizuje možnosti doručenia objednávky v DB podľa id.
 * @param data
 * @returns {Promise<boolean>}
 */
const updateDeliveryAndPayment = async (data) => {
    const query = 'UPDATE orders SET delivery = ?, payment = ? WHERE id_order = ?';
    const {delivery, payment, id_order} = data;
    try {
        const [result] = await db.query(query, [delivery, payment, id_order]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}

/**
 * Získa všetky možnosti doručenia objednávky z DB.
 * @returns {Promise<*>}
 */
const getDeliveryOptions = async () => {
    const query = 'SELECT * FROM delivery_options';
    const [results] = await db.query(query, []);
    return results;
}

/**
 * Získa všetky možnosti platby za objednávku z DB.
 * @returns {Promise<*>}
 */
const getPaymentOptions = async () => {
    const query = 'SELECT * FROM payment_options';
    const [results] = await db.query(query, []);
    return results;
}

module.exports = {getAllOrders, getUserOrders, getCartItems, getUserCart,
    insertIntoCart, createCart, updateOrderStatus, removeFromCart,
    updateCartItemCount, updateDeliveryAndPayment, getOrderStatusOptions,
    getPaymentOptions, getDeliveryOptions};