const db = require('../db');

const getAllBooks = async () => {
    const query = 'SELECT * FROM books left join images on (books.image = images.id_image)';
    const [results] = await db.query(query);
    return results;
};

const getBookById = async (id) => {
    const query = 'SELECT b.id_book, title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, isbn, description, path, genre_name as genre FROM books b LEFT JOIN images i on (i.id_image = b.image) LEFT JOIN genres_to_book gb on (gb.id_book = b.id_book) LEFT JOIN genres g on (g.id_genre = gb.id_genre) WHERE b.id_book = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
};

const getBooksByGenre = async (genre) => {
    const query = 'select * from books join genres_to_book using (id_book) left join genres using (id_genre) left join images on (books.image = images.id_image) where genre_name like ?';
    const [results] = await db.query(query, [genre]);
    return results;
};

const getBooksByName = async (name) => {
    const query = 'SELECT * FROM books left join images on (books.image = images.id_image) WHERE title like ?';
    const nameSearch = '%' + name + '%';
    const [results] = await db.query(query, [nameSearch]);
    return results;
};

const getRandomBooks = async (number) => {
    const query = 'SELECT id_book, title, path, b.description FROM books b LEFT JOIN images i on (b.image = i.id_image) ORDER BY RAND() LIMIT ?';
    const [results] = await db.query(query, number);
    return results;
}

const getFilteredBooks = async (author, language, priceStart, priceEnd) => {
    const query = 'select * from books left join images on (books.image = images.id_image) where author like ? or language like ? or (price > ? and price < ?)';
    const [results] = await db.query(query, [author, language, priceStart, priceEnd]);
    return results;
};

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

const getGenresById = async (id) => {
    const query = 'SELECT * FROM genres_to_book left join genres using(id_genre) where id_book = ?';
    const [results] = await db.query(query, [id]);
    return results;
}

const getGenres = async () => {
    const query = 'SELECT id_genre as id, genre_name as value, genre_name as label FROM genres';
    const [results] = await db.query(query);
    return results;
}

const getAuthors = async () => {
    const query = 'SELECT ROW_NUMBER() OVER (ORDER BY author) AS id, author AS value, author AS label FROM (SELECT DISTINCT author FROM books) AS distinct_authors'
    const [results] = await db.query(query);
    return results;
}

const getLanguages = async () => {
    const query = 'SELECT ROW_NUMBER() OVER (ORDER BY language) AS id, language AS value, language AS label FROM (SELECT DISTINCT language FROM books) AS distinct_languages'
    const [results] = await db.query(query);
    return results;
}

module.exports = { getAllBooks, getBookById, getBooksByName, createBook, updateBook, deleteBook, getRandomBooks, getBookSeries, getGenres, getAuthors, getLanguages, getGenresById, getFilteredBooks, getBooksByGenre};
