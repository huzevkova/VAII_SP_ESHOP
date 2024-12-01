import BookCard from "../components/Book/BookCard";
import React from "react";

const BookCatalogueView = ({books, openBookDetail}) => {
    return (
        <section className="featured-books py-5">
            <div className="container">
                <h2 className="text-center mb-4">Ponuka kníh:</h2>
                <div className="row">
                    {books ? books.slice(0, 3).map((book, index)=> (
                        <BookCard
                            key={index}
                            image={'images/books/' + (book.path ? book.path : 'book.jpg')}
                            title={book.title}
                            description={book.description}
                            id={book.id_book}
                            openBookDetail={openBookDetail}
                        />
                    )) : <></>}
                </div>
                <div className="row mt-5">
                    {books ? books.slice(3, 6).map((book, index) => (
                        <BookCard
                            key={index}
                            image={'images/books/' + (book.path ? book.path : 'book.jpg')}
                            title={book.title}
                            description={book.description}
                            id={book.id_book}
                            openBookDetail={openBookDetail}
                        />
                    )) : <></>}
                </div>
            </div>
        </section>
    )
};

export default BookCatalogueView;