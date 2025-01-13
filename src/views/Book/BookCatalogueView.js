import BookCardView from "./BookCardView";
import React from "react";
import "./book-style.css";


const BookCatalogueView = ({books, openBookDetail}) => {
    return (
        <section className="featured-books py-5">
            <div className="container">
                <h2 className="text-center mb-4">Ponuka kníh:</h2>
                <div className="row">
                    {books ? books.slice(0, 3).map((book, index)=> (
                        <BookCardView
                            key={index}
                            image={book.path ? `http://localhost:5000/images/${book.path}` : 'http://localhost:5000/images/book.jpg'}
                            title={book.title}
                            description={book.description}
                            id={book.id_book}
                            openBookDetail={openBookDetail}
                        />
                    )) : <></>}
                </div>
                <div className="row mt-5">
                    {books ? books.slice(3, 6).map((book, index) => (
                        <BookCardView
                            key={index}
                            image={book.path ? `http://localhost:5000/images/${book.path}` : 'http://localhost:5000/images/book.jpg'}
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