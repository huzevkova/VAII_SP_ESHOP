const db = require('../db');

const getAllBooks = async () => {
    const query = 'SELECT * FROM books';
    const [results] = await db.query(query);
    return results;
};

const getBookById = async (id) => {
    const query = 'SELECT * FROM books WHERE id_book = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
};

const getBooksByName = async (name) => {
    const query = 'SELECT * FROM books WHERE title like ?';
    const nameSearch = '%' + name + '%';
    const [results] = await db.query(query, [nameSearch]);
    return results;
};

const createBook = async (bookData) => {
    const query = 'INSERT into books VALUES(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const {title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, image, isbn, description} = bookData;

    try {
        const [result] = await db.query(query, [title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, image, isbn, description]);
        return result.insertId;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const updateBook = async (bookData) => {
    const query = 'UPDATE books SET title = ?, original_title = ?, author = ?, language = ?, page_count = ?, publish_year = ?, publisher = ?, size = ?, price = ?, cover = ?, image = ?, isbn = ?, description = ? WHERE id_book = ?';
    const {id, title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, image, isbn, description} = bookData;

    try {
        const [result] = await db.query(query, [title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, image, isbn, description, id]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}

const deleteBook = async (id) => {
    const query = 'DELETE FROM books WHERE id_book = ?';
    try {
        const [result] = await db.query(query, [id]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }

}

module.exports = { getAllBooks, getBookById, getBooksByName, createBook, updateBook, deleteBook };
