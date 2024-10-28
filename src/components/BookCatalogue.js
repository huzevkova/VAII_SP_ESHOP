import React from "react";
import BookCard from './BookCard';

const BookCatalogue = () => (
    <section className="featured-books py-5">
        <div className="container">
            <h2 className="text-center mb-4">Ponuka kníh:</h2>
            <div className="row">
                {[1, 2, 3].map(i => (
                    <BookCard
                        key={i}
                        image="images/book.jpg"
                        title={`Kniha č. ${i}`}
                        description="Popis knihy."
                    />
                ))}
            </div>
            <div className="row top-buffer">
                {[1, 2, 3].map(i => (
                    <BookCard
                        key={i + 3}
                        image="images/book.jpg"
                        title={`Kniha č. ${i}`}
                        description="Popis knihy."
                    />
                ))}
            </div>
        </div>
    </section>
);

export default BookCatalogue;