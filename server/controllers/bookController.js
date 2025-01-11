const bookModel = require('../models/bookModel');

/**
 * Získa všetky knihy.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.getAllBooks()
        if (books.length > 0) {
            res.status(200).json(books);
        } else {
            res.status(404).json({ message: 'books empty' });
        }

    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Získa konkrétnu knihu podľa číselného id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await bookModel.getBookById(id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: `Book by ${id} not found` });
        }
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Získa žánre konkrétnej knihy podľa jej id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getGenresById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await bookModel.getGenresById(id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: `Genres for ${id} not found` });
        }
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Získa knihy podľa názvu.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getBooksByName = async (req, res) => {
    const { name } = req.params;
    try {
        const books = await bookModel.getBooksByName(name);
        if (books.length > 0) {
            res.status(200).json(books);
        } else {
            res.status(404).json({ message: `Books by ${name} not found` });
        }
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Získa knihy podľa názvu žánru.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getBooksByGenre = async (req, res) => {
    const { genre } = req.params;
    try {
        const books = await bookModel.getBooksByGenre(genre);
        if (books.length > 0) {
            res.status(200).json(books);
        } else {
            res.status(404).json({ message: `Books by ${genre} not found` });
        }
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Získa knihy vyhovujúce podmienkam - autor, jazyk, cena (OR).
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getFilteredBooks = async (req, res) => {
    const { author, language, priceStart, priceEnd } = req.params;
    try {
        const books = await bookModel.getFilteredBooks(author, language, priceStart, priceEnd);
        if (books.length > 0) {
            res.status(200).json(books);
        } else {
            res.status(404).json({ message: `Books filtered not found` });
        }
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Získa náhodné knihy. Počet kníh je zadaný.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getRandomBooks = async (req, res) => {
    const { number } = req.params;
    try {
        const books = await bookModel.getRandomBooks(parseInt(number, 10));
        if (books.length > 0) {
            res.status(200).json(books);
        } else {
            res.status(404).json({ message: `Books not found` });
        }
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Získa knižnú sériu podľa id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getBookSeries = async (req, res) => {
    const { id } = req.params;
    try {
        const series = await bookModel.getBookSeries(id);
        if (series) {
            res.status(200).json(series);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error('Error fetching book series:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Vytvorí novú knihu, ak sú zadané všetky potrebné údaje. Vracia nové id.
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const createBook = async (req, res) => {
    const { title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, image, isbn, description } = req.body;

    if (!title || !author || !language || !page_count || !publish_year || !publisher || !size || !price || !cover ) {
        return res.status(400).json({ message: 'Not all required fields are filled.' });
    }

    try {
        const newBookId = await bookModel.createBook({ title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, image, isbn, description });
        res.status(201).json({message: 'Book created successfully', bookId: newBookId});
    } catch (err) {
        console.error('Error creating book:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Aktualizuje knihu podľa zadaných údajov.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateBook = async (req, res) => {
    const { id, title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, image, isbn, description } = req.body;
    try {
        const result = await bookModel.updateBook({id, title, original_title, author, language, page_count, publish_year, publisher, size, price, cover, image, isbn, description});
        if (result) {
            res.status(200).json({ message: 'Book updated successfully' });
        } else {
            res.status(404).json({ message: 'Book could not be updated' });
        }
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Zmaže knihu podľa id. Vracia úspech (true) / neúspech (false).
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await bookModel.deleteBook(id);
        if (result) {
            res.status(200).json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ message: 'Book could not be deleted' });
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Získa všetky žánre.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getGenres = async (req, res) => {
    try {
        const genres = await bookModel.getGenres()
        if (genres.length > 0) {
            res.status(200).json(genres);
        } else {
            res.status(404).json({ message: 'genres empty' });
        }

    } catch (error) {
        console.error('Error fetching genres:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Získa všetkých autorov.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAuthors = async (req, res) => {
    try {
        const authors = await bookModel.getAuthors()
        if (authors.length > 0) {
            res.status(200).json(authors);
        } else {
            res.status(404).json({ message: 'authors empty' });
        }

    } catch (error) {
        console.error('Error fetching authors:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Získa všetky jazyky.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getLangugages = async (req, res) => {
    try {
        const languages = await bookModel.getLanguages()
        if (languages.length > 0) {
            res.status(200).json(languages);
        } else {
            res.status(404).json({ message: 'languages empty' });
        }

    } catch (error) {
        console.error('Error fetching languages:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Získa všetky obrázky (ku knihám).
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getImages = async (req, res) => {
    try {
        const images = await bookModel.getImages()
        if (images.length > 0) {
            res.status(200).json(images);
        } else {
            res.status(404).json({ message: 'images empty' });
        }

    } catch (error) {
        console.error('Error fetching images:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Vytvorí nový obrázok knihy, ak sú zadané všetky potrebné údaje.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const createBookImage = async (req, res) => {
    const {path, name, id_book} = req.body;
    try {
        const id_image = await bookModel.insertImage({path, name})
        if (id_image && id_book != null) {
            try {
                await bookModel.updateBookImage({id_image, id_book});
                res.status(201).json({message: 'Image created succesfully', id: id_image});
            } catch (err) {
                console.error('Error assigning image:', err);
                res.status(500).json({ message: 'Server error' });
            }
        } else {
            res.status(201).json({message: 'Image created succesfully', id: id_image});
        }
    } catch (error) {
        console.error('Error creating image:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Aktualizuje obrázok podľa zadaných údajov.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateImage = async (req, res) => {
    const {path, name, id} = req.body;
    try {
        const result = await bookModel.updateImage({path, name, id});
        if (result) {
            res.status(200).json({ message: 'Image updated successfully' });
        } else {
            res.status(404).json({ message: 'Image could not be updated' });
        }
    } catch (error) {
        console.error('Error updating image:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Aktualizuje obrázok konkrétnej knihy podľa ich id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateBookImage = async (req, res) => {
    const {id_image, id_book} = req.body;
    try {
        const result = await bookModel.updateBookImage({id_image, id_book});
        if (result) {
            res.status(200).json({ message: 'Book image updated successfully' });
        } else {
            res.status(404).json({ message: 'Kniha s daným ID nebola nájdená' });
        }
    } catch (error) {
        console.error('Error updating book image:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Zmaže obrázok podľa id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteImage = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await bookModel.deleteImage(id);
        if (result) {
            res.status(200).json({ message: 'Image deleted successfully' });
        } else {
            res.status(404).json({ message: 'Image could not be deleted' });
        }
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getBookById, createBook, getAllBooks, updateBook, deleteBook, getBooksByName,
    getRandomBooks, getBookSeries, getGenres, getAuthors, getLangugages, getGenresById,
    getFilteredBooks, getBooksByGenre, getImages, createBookImage, updateBookImage, updateImage, deleteImage};
