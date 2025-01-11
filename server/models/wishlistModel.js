const db = require('../db');

/**
 * Získa wishlist konkrétneho používateľa z DB podľa id.
 * @param id
 * @returns {Promise<*>}
 */
const getUserWishlist = async (id) => {
    const query = 'SELECT * FROM wishlists JOIN books USING (id_book) LEFT JOIN images ON (id_image = image) WHERE id_user = ?';
    const [results] = await db.query(query, [id]);
    return results;
};

/**
 * Vloží knihu do wishlistu konkrétneho používateľa v DB podľa ich id.
 * @param ids
 * @returns {Promise<boolean>}
 */
const insertBookIntoWishlist = async (ids) => {
    const {user, id_book} = ids;
    const query = 'INSERT into wishlists VALUES (?, ?)';
    try {
        const [result] = await db.query(query, [user, id_book]);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Odstráni knihu z wishlistu konkrétneho používateľa v DB podľa ich id.
 * @param ids
 * @returns {Promise<boolean>}
 */
const deleteBookFromWishlist = async (ids) => {
    const {user, id_book} = ids;
    const query = 'DELETE FROM wishlists WHERE id_user = ? AND id_book = ?';
    try {
        const [result] = await db.query(query, [user, id_book]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
};

module.exports = { getUserWishlist, insertBookIntoWishlist, deleteBookFromWishlist };