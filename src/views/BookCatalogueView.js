import BookCard from "../components/Book/BookCard";
import React from "react";

const BookCatalogueView = ({books, openBookDetail}) => {
    return (
        <section className="featured-books py-5">
            <div className="container">
                <h2 className="text-center mb-4">Ponuka kníh:</h2>
                <div className="row">
                    {books.slice(0, 3).map((book, index)=> (
                        <BookCard
                            key={index}
                            image={'images/' + book.image}
                            title={book.title}
                            description={book.description}
                            index={index}
                            openBookDetail={openBookDetail}
                        />
                    ))}
                </div>
                <div className="row top-buffer">
                    {books.slice(3, 6).map((book, index) => (
                        <BookCard
                            key={index}
                            image={'images/' + book.image}
                            title={book.title}
                            description={book.description}
                            openBookDetail={openBookDetail}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default BookCatalogueView;