import {FaShoppingCart} from "react-icons/fa";
import React from "react";

const ResultCard = ({bookData, goToBookDetail}) => {
    return (
            <div className="row bg-light p-3 mb-3 border rounded align-items-center relative-position clickable-component" onClick={() => goToBookDetail(bookData.id)}>
                <div className="col-md-2 col-sm-3">
                    <img src="/images/books/book.jpg" alt="Book Cover" className="img-fluid"/>
                </div>
                <div className="col-md-8 col-sm-7">
                    <h5 className="title">{bookData.title}</h5>
                    <p className="text-muted author">{bookData.author}</p>
                    <p className="line-clamp description">{bookData.description}</p>
                </div>
                <div className="col-md-2 col-sm-2 cart-price-container text-center">
                    <button className="top-button align-content-center" type="button"><FaShoppingCart/></button>
                    <h4 className="bottom">{bookData.price}</h4>
                </div>
            </div>
    )
};

export default ResultCard;