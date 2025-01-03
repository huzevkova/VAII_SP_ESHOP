import MyNavbar from "../../components/General/MyNavbar";
import Sidebar from "../../components/General/Sidebar";
import ResultCardView from "../../components/Search/ResultCardView";
import Footer from "../../components/General/Footer";
import React from "react";

const WishlistView = ({wishlist, openBookDetail, addToCartClick, handleDelete}) => {

    return (
        <>
            <MyNavbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3" id="sidebar">
                        <Sidebar/>
                    </div>
                    <div className="container col-lg-8 col-md-7">
                        <h2 className="mt-3 text-center text-primary">WISHLIST</h2>
                        <div className="container mt-4">
                            {wishlist.map((book, index) => (
                                <div className="d-flex justify-content-end" key={index}>
                                    <ResultCardView bookData={book} openBookDetail={openBookDetail} addToCart={addToCartClick}/>
                                    <button
                                        className="btn btn-danger btn-sm position-absolute delete-button mt-1"
                                        onClick={() => handleDelete(book.id_book)}>
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default WishlistView;