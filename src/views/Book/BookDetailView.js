import MyNavbar from "../../components/General/MyNavbar";
import BookInfoTableView from "./BookInfoTableView";
import FooterView from "../General/FooterView";
import React from "react";
import "./book-style.css";


const BookDetailView = ({bookData, bookGenres, bookSeries, onCartClick, onWishlistClick}) => {
    return (
        <>
            <MyNavbar/>
            <div className="container py-5">
                <div className="row">

                    <div className="col-md-5">
                        <img
                            src={bookData.path ? `http://localhost:5000/images/${bookData.path}` : 'http://localhost:5000/images/book.jpg'}
                            alt="Book Cover"
                            className="img-fluid shadow rounded"
                        />
                    </div>

                    <div className="col-md-7">
                        <h1 className="book">{bookData.title}</h1>
                        <h4 className="book mt-3 mb-3">{bookSeries ? (bookSeries.part + '. diel ' + bookSeries.name) : ''}</h4>
                        <h4 className="text-muted">{bookData.author}</h4>
                        <div className="d-flex justify-content-between align-items-start mt-3">
                            <BookInfoTableView bookData={bookData} bookGenres={bookGenres} />
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
            <FooterView/>
        </>
    )
};

export default BookDetailView;