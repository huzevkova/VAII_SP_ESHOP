const db = require('../db');

/**
 * Získa všetkých používateľov z BD.
 * @returns {Promise<*>}
 */
const getAllUsers = async () => {
    const query = 'SELECT * FROM users';
    const [results] = await db.query(query);
    return results;
};

/**
 * Získa konkrétneho používateľa z DB podľa id.
 * @param id
 * @returns {Promise<*>}
 */
const getUserById = async (id) => {
    const query = 'SELECT * FROM users WHERE id_user = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
};

/**
 * Získa konkrétneho používateľa z DB podľa emailu.
 * @param email
 * @returns {Promise<*>}
 */
const getUserByEmail = async (email) => {
    const query = 'SELECT id_user, name, type, password FROM users JOIN user_passwords using (id_user) WHERE email = ?';
    const [results] = await db.query(query, [email]);
    return results[0];
};

/**
 * Vytvorí nového používateľa do DB podľa zadaných údajov.
 * @param userData
 * @returns {Promise<number>}
 */
const createUser = async (userData) => {
    const query = 'INSERT into users VALUES(null, ?, ?, ?, ?, ?, ?, ?, null, 0)';
    const {name, email, phone_number, city, city_code, street, house_number} = userData;

    try {
        const [result] = await db.query(query, [name, email, phone_number, city, city_code, street, house_number]);
        return result.insertId;
    } catch (err) {
        throw err;
    }
};

/**
 * Uloží heslo používateľa do DB.
 * @param userData
 * @returns {Promise<number|boolean>}
 */
const saveUserPassword = async (userData) => {
    const query = 'INSERT into user_passwords VALUES(null, ?, ?)';
    const {newUserId, hashedPassword} = userData;

    try {
        const [result] = await db.query(query, [newUserId, hashedPassword]);
        return result.insertId;
    } catch (err) {
        console.error(err);
        return false;
    }
}

/**
 * Aktualizuje dáta používateľa v DB podľa id.
 * @param userData
 * @returns {Promise<boolean>}
 */
const updateUser = async (userData) => {
    const query = 'UPDATE users SET name = ?, email = ?, phone_number = ?, city = ?, city_code = ?, street = ?, house_number = ? WHERE id_user = ?';
    const {id, name, email, phone_number, city, city_code, street, house_number} = userData;

    try {
        const [result] = await db.query(query, [name, email, phone_number, city, city_code, street, house_number, id]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}

/**
 * Zmaže konkrétneho používateľa z DB podľa id.
 * @param id
 * @returns {Promise<boolean>}
 */
const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id_user = ?';
    try {
        const [result] = await db.query(query, [id]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }

}

module.exports = { getUserById, createUser, saveUserPassword, getAllUsers, deleteUser, updateUser, getUserByEmail };
