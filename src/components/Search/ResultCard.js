import {FaShoppingCart} from "react-icons/fa";
import React from "react";
import {useNavigate} from "react-router-dom";


const ResultCard = () => {

    const navigate = useNavigate();

    return (
            <div className="row bg-light p-3 mb-3 border rounded align-items-center relative-position clickable-component" onClick={() => navigate('/book_detail')}>
                <div className="col-md-3">
                    <img src="/images/book.jpg" alt="Book Cover" className="img-fluid"/>
                </div>
                <div className="col-md-8">
                    <h5 className="title">Názov knihy</h5>
                    <p className="text-muted author">Meno autora</p>
                    <p className="line-clamp description">Krátky popis danej knihy, zobratí
                        z detailu knihy. V prípade, že je príliš dlhý, tak sa ukáže iba
                        kúsok a zvyšok sa usekne pridaním trojbodky. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-md-1 cart-price-container">
                    <button className="top-button align-content-center" type="button"><FaShoppingCart/></button>
                    <h4 className="mt-2 bottom">CENA</h4>
                </div>
            </div>
)
}

export default ResultCard;