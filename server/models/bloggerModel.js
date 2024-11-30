const db = require('../db');

const getAllBloggers = async () => {
    const query = 'SELECT * FROM bloggers';
    const [results] = await db.query(query);
    return results;
};

const getBloggerById = async (id) => {
    const query = 'SELECT * FROM bloggers WHERE id_blogger = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
};

const getBloggerByEmail = async (email) => {
    const query = 'SELECT id_blogger FROM bloggers WHERE email = ?';
    const [results] = await db.query(query, [email]);
    return results[0];
};

const createBlogger = async (bloggerData) => {
    const query = 'INSERT into bloggers VALUES(null, ?, ?, ?)';
    const {name, email, image} = bloggerData;
    try {
        const [result] = await db.query(query, [name, email, image]);
        return result.insertId;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const saveBloggerPassword = async (bloggerData) => {
    const query = 'INSERT into blogger_passwords VALUES(null, ?, ?)';
    const {newBloggerId, hashedPassword} = bloggerData;
    try {
        const [result] = await db.query(query, [newBloggerId, hashedPassword]);
        return result.insertId;
    } catch (err) {
        console.error(err);
        return false;
    }
}

const updateBlogger = async (bloggerData) => {
    const query = 'UPDATE bloggers SET name = ?, email = ?, image_id = ? WHERE id_blogger = ?';
    const {id, name, email, image} = bloggerData;

    try {
        const [result] = await db.query(query, [name, email, image, id]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}

const deleteBlogger = async (id) => {
    const query = 'DELETE FROM bloggers WHERE id_blogger = ?';
    try {
        const [result] = await db.query(query, [id]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }

}

module.exports = { getBloggerById, getAllBloggers, getBloggerByEmail, updateBlogger, createBlogger, deleteBlogger, saveBloggerPassword };
