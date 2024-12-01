const db = require('../db');

const getAllBooks = async () => {
    const query = 'SELECT * FROM books';
    const [results] = await db.query(query);
    return results;
};

const getBookById = async (id) => {
    const query = 'SELECT b.id_book, title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, isbn, description, path, genre_name as genre FROM books b LEFT JOIN images i on (i.id_image = b.image) LEFT JOIN genres_to_book gb on (gb.id_book = b.id_book) LEFT JOIN genres g on (g.id_genre = gb.id_genre) WHERE b.id_book = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
};

const getBooksByName = async (name) => {
    const query = 'SELECT * FROM books WHERE title like ?';
    const nameSearch = '%' + name + '%';
    const [results] = await db.query(query, [nameSearch]);
    return results;
};

const getRandomBooks = async (number) => {
    const query = 'SELECT id_book, title, path, b.description FROM books b LEFT JOIN images i on (b.image = i.id_image) ORDER BY RAND() LIMIT ?';
    const [results] = await db.query(query, number);
    return results;
}

const getBookSeries = async (id) => {
    const query = 'SELECT part, name FROM book_to_series bt JOIN book_series bs on (bs.id_series = bt.id_series) WHERE id_book = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
}
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

module.exports = { getAllBooks, getBookById, getBooksByName, createBook, updateBook, deleteBook, getRandomBooks, getBookSeries };
