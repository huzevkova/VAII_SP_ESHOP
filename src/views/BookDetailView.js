import MyNavbar from "../components/General/MyNavbar";
import BookInfoTable from "../components/Book/BookInfoTable";
import Footer from "../components/General/Footer";
import React from "react";

const BookDetailView = ({bookData, bookGenres, bookSeries, onTableClick, onCartClick, onWishlistClick}) => {
    return (
        <>
            <MyNavbar/>
            <div className="container py-5">
                <div className="row">

                    <div className="col-md-5">
                        <img src={'/images/books/' + (bookData.path ? bookData.path : 'book.jpg')} alt="Book Cover" className="img-fluid shadow rounded"/>
                    </div>

                    <div className="col-md-7">
                        <h1 className="book">{bookData.title}</h1>
                        <h4 className="book mt-3 mb-3">{bookSeries ? (bookSeries.part + '. diel ' + bookSeries.name) : ''}</h4>
                        <h4 className="text-muted">{bookData.author}</h4>
                        <div className="d-flex justify-content-between align-items-start mt-3">
                            <BookInfoTable bookData={bookData} bookGenres={bookGenres} onTableClick={onTableClick} />
                            <p className="price">{bookData.price}</p>
                        </div>
                        <p className="fw-bold">Popis:</p>
                        <p className="mt-4">
                            {bookData.description}
                        </p>
                        <div className="d-flex align-items-center mt-4">
                            <button className="btn btn-primary me-3" onClick={onCartClick}>Do košíka</button>
                            <button className="btn btn-outline-secondary" onClick={onWishlistClick}>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default BookDetailView;