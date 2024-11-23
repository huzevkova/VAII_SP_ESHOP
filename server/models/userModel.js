const db = require('../db');

const getUserById = async (id) => {
    const query = 'SELECT * FROM users WHERE id_user = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
};

const createUser = async (userData) => {
    const query = 'INSERT into users VALUES(null, ?, ?, ?, ?, ?, ?, ?, null)';
    const {name, email, phone_number, city, city_code, street, house_number} = userData;

    try {
        const [result] = await db.query(query, [name, email, phone_number, city, city_code, street, house_number]);
        return result.insertId;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const saveUserPassword = async (userData) => {
    const query = 'INSERT into user_passwords VALUES(null, ?, ?)';
    const {id, password} = userData;

    try {
        const [result] = await db.query(query, [id], password);
        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = { getUserById, createUser, saveUserPassword };
