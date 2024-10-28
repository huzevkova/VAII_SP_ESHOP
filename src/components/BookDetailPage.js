import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import BookInfoTable from "./BookInfoTable";

class BookDetailPage extends React.Component {

    render() {

        const bookData = {
            title: 'Názov knihy',
            part: 'X. Diel série',
            author: 'Meno Autora',
            genre: 'Fikcia',
            date: '01.01.2024',
            language: 'Slovenský',
            original: 'Book name',
            page_count: '200',
            size: '20x20cm',
            cover: 'pevný',
            isbn: '9781529113396',
        };

        return (
            <>
                <Navbar/>
                <div className="container py-5">
                    <div className="row">

                        <div className="col-md-5">
                            <img src="/images/book.jpg" alt="Book Cover" className="img-fluid shadow rounded"/>
                        </div>

                        <div className="col-md-7">
                            <h1 className="book">{bookData.title}</h1>
                            <h1 className="book right-h1">{bookData.part}</h1>
                            <h4 className="text-muted">{bookData.author}</h4>
                            <div className="d-flex justify-content-between align-items-start mt-3">
                                <BookInfoTable bookData={bookData} />
                                <p className="price">CENA</p>
                            </div>
                            <p className="fw-bold">Popis:</p>
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis, nisi at
                                pharetra volutpat, felis odio convallis massa, nec bibendum justo nisi ut arcu.
                            </p>
                            <div className="d-flex align-items-center mt-4">
                                <button className="btn btn-primary me-3">Do košíka</button>
                                <button className="btn btn-outline-secondary">Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default BookDetailPage;