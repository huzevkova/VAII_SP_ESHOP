import React, {useEffect, useState} from "react";
import BookCatalogueView from "../../views/Book/BookCatalogueView";
import {useNavigate} from "react-router-dom";
import {fetchRandomBooks} from "../../api/bookApi";

const BookCatalogue = () => {

    const navigate = useNavigate();

    const [books, setBooks] = useState(null);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const response = await fetchRandomBooks(6);
                setBooks(response);
            } catch (err) {
                console.error(err);
                setBooks([]);
            }
        };

        if (books == null) {
            loadBooks();
        }
    });

    const openBookDetail = (id) => {
        navigate('/book_detail', { state: { bookId: id } });
    }

    return (
        <BookCatalogueView
            books={books}
            openBookDetail={openBookDetail}
        />
    )
};

export default BookCatalogue;