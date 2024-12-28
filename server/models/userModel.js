const db = require('../db');

const getAllUsers = async () => {
    const query = 'SELECT * FROM users';
    const [results] = await db.query(query);
    return results;
};

const getUserById = async (id) => {
    const query = 'SELECT * FROM users WHERE id_user = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
};

const getUserByEmail = async (email) => {
    const query = 'SELECT id_user, type, password FROM users JOIN user_passwords using (id_user) WHERE email = ?';
    const [results] = await db.query(query, [email]);
    return results[0];
};

const createUser = async (userData) => {
    const query = 'INSERT into users VALUES(null, ?, ?, ?, ?, ?, ?, ?, null, 0)';
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
    const {newUserId, hashedPassword} = userData;

    try {
        const [result] = await db.query(query, [newUserId, hashedPassword]);
        return result.insertId;
    } catch (err) {
        console.error(err);
        return false;
    }
}

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
