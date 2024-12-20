const bookModel = require('../models/bookModel');

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

const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await bookModel.getBookById(id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getBooksByName = async (req, res) => {
    const { name } = req.params;
    try {
        const books = await bookModel.getBooksByName(name);
        if (books.lenght > 0) {
            res.status(200).json(books);
        } else {
            res.status(404).json({ message: `Books by ${name} found` });
        }
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

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
        console.error('Error fetching book:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

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

module.exports = { getBookById, createBook, getAllBooks, updateBook, deleteBook, getBooksByName, getRandomBooks, getBookSeries};
