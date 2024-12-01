import React from "react";

const BookCard = ({ image, title, description, id, openBookDetail }) => {
    return (
    <div className="col-md-4">
        <div className="card book-card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="line-clamp card-text">{description}</p>
                <button className="btn btn-primary stretched-link" onClick={() => openBookDetail(id)}>Detaily</button>
            </div>
        </div>
    </div>
    )
};

export default BookCard;