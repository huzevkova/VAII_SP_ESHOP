import React, {useState} from "react";
import BookCatalogueView from "../../views/BookCatalogueView";
import {useNavigate} from "react-router-dom";

const BookCatalogue = () => {

    const navigate = useNavigate();

    const [books, setBooks] = useState([
        {title: 'Kniha č. 1',
            image: 'book.jpg',
            description: 'Popis knihy.'},
        {title: 'Kniha č. 2',
            image: 'book.jpg',
            description: 'Popis knihy.'},
        {title: 'Kniha č. 3',
            image: 'book.jpg',
            description: 'Popis knihy.'},
        {title: 'Kniha č. 4',
            image: 'book.jpg',
            description: 'Popis knihy.'},
        {title: 'Kniha č. 5',
            image: 'book.jpg',
            description: 'Popis knihy.'},
        {title: 'Kniha č. 6',
            image: 'book.jpg',
            description: 'Popis knihy.'}
    ]);

    const openBookDetail = (index) => {
        navigate('/book_detail');
    }

    return (
        <BookCatalogueView
            books={books}
            openBookDetail={openBookDetail}
        />
    )
};

export default BookCatalogue;