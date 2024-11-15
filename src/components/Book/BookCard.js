import React from "react";
import {useNavigate} from "react-router-dom";

const BookCard = ({ image, title, description }) => {

    const navigate = useNavigate();

    return (
    <div className="col-md-4">
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary stretched-link" onClick={()=>navigate('/book_detail')}>Detaily</button>
            </div>
        </div>
    </div>
    )
};

export default BookCard;