const db = require('../db');
const {id} = require("date-fns/locale");

/**
 * Získa všetky knihy z DB.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllBooks = async () => {
    const query = 'SELECT * FROM books left join images on (books.image = images.id_image)';
    const [results] = await db.query(query);
    return results;
};

/**
 * Získa konkrétnu knihu z DB podľa číselného id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getBookById = async (id) => {
    const query = 'SELECT b.id_book, title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, isbn, description, path, genre_name as genre FROM books b LEFT JOIN images i on (i.id_image = b.image) LEFT JOIN genres_to_book gb on (gb.id_book = b.id_book) LEFT JOIN genres g on (g.id_genre = gb.id_genre) WHERE b.id_book = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
};

/**
 * Získa žánre konkrétnej knihy z DB podľa jej id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getGenresById = async (id) => {
    const query = 'SELECT * FROM genres_to_book left join genres using(id_genre) where id_book = ?';
    const [results] = await db.query(query, [id]);
    return results;
}

/**
 * Získa knihy z DB podľa názvu (skontroluje či v názve obsahujú zadaný string).
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getBooksByName = async (name) => {
    const query = 'SELECT * FROM books left join images on (books.image = images.id_image) WHERE title like ?';
    const nameSearch = '%' + name + '%';
    const [results] = await db.query(query, [nameSearch]);
    return results;
};

/**
 * Získa knihy z DB podľa názvu žánru.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getBooksByGenre = async (genre) => {
    const query = 'select * from books join genres_to_book using (id_book) left join genres using (id_genre) left join images on (books.image = images.id_image) where genre_name like ?';
    const [results] = await db.query(query, [genre]);
    return results;
};

/**
 * Získa knihy z DB vyhovujúce podmienkam - autor, jazyk, cena (OR).
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getFilteredBooks = async (author, language, priceStart, priceEnd) => {
    const query = 'select * from books left join images on (books.image = images.id_image) where author like ? or language like ? or (price > ? and price < ?)';
    const [results] = await db.query(query, [author, language, priceStart, priceEnd]);
    return results;
};

/**
 * Získa náhodné knihy z DB. Počet kníh je zadaný.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getRandomBooks = async (number) => {
    const query = 'SELECT id_book, title, path, b.description FROM books b LEFT JOIN images i on (b.image = i.id_image) ORDER BY RAND() LIMIT ?';
    const [results] = await db.query(query, number);
    return results;
}

/**
 * Získa názov knižnej série a číslo časti z DB podľa id knihy.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getBookSeries = async (id) => {
    const query = 'SELECT part, name FROM book_to_series bt JOIN book_series bs on (bs.id_series = bt.id_series) WHERE id_book = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
}

/**
 * Vytvorí novú knihu v DB, ak sú zadané všetky potrebné údaje. Vracia nové id.
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
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

/**
 * Aktualizuje knihu v DB podľa zadaných údajov.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Zmaže knihu z DB podľa id. Vracia úspech (true) / neúspech (false).
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
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

/**
 * Získa všetky žánre z DB.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getGenres = async () => {
    const query = 'SELECT id_genre as id, genre_name as value, genre_name as label FROM genres';
    const [results] = await db.query(query);
    return results;
}

/**
 * Získa všetkých autorov z DB.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAuthors = async () => {
    const query = 'SELECT ROW_NUMBER() OVER (ORDER BY author) AS id, author AS value, author AS label FROM (SELECT DISTINCT author FROM books) AS distinct_authors'
    const [results] = await db.query(query);
    return results;
}

/**
 * Získa všetky jazyky z DB.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getLanguages = async () => {
    const query = 'SELECT ROW_NUMBER() OVER (ORDER BY language) AS id, language AS value, language AS label FROM (SELECT DISTINCT language FROM books) AS distinct_languages'
    const [results] = await db.query(query);
    return results;
}

/**
 * Získa všetky obrázky z DB (ku knihám).
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getImages = async () => {
    const query = 'SELECT id_image, path, name, id_book FROM images LEFT JOIN books ON (id_image = image)';
    const [results] = await db.query(query);
    return results;
}

/**
 * Vytvorí nový obrázok do DB podľa zadaných údajov.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const insertImage = async (data) => {
    const query = 'INSERT into images VALUES (null, ?, ?)';
    const {path, name } = data;
    try {
        const [result] = await db.query(query, [path, name]);
        return result.insertId;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

/**
 * Aktualizuje obrázok v DB podľa zadaných údajov.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateImage = async (data) => {
    const query = 'UPDATE images SET path = ?, name = ? WHERE id_image = ?';
    const {path, name, id} = data;
    try {
        const [result] = await db.query(query, [path, name, id]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}

/**
 * Aktualizuje obrázok konkrétnej knihy v DB podľa ich id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateBookImage = async (ids) => {
    const query = 'UPDATE books SET image = ? WHERE id_book = ?';
    const {id_image, id_book} = ids;
    try {
        const [result] = await db.query(query, [id_image, id_book]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}

/**
 * Zmaže obrázok z DB podľa id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteImage = async (id) => {
    const query = 'DELETE FROM images WHERE id_image = ?';
    try {
        const [result] = await db.query(query, [id]);
        return result.affectedRows !== 0;
    } catch (err) {
        console.error(err);
        return false;
    }
}

module.exports = { getAllBooks, getBookById, getBooksByName, createBook, updateBook, deleteBook,
    getRandomBooks, getBookSeries, getGenres, getAuthors, getLanguages, getGenresById,
    getFilteredBooks, getBooksByGenre, getImages, insertImage, updateBookImage, updateImage, deleteImage};
