import React from "react";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <div className="sticky-top p-3">
            <h4 className="clickable-component" onClick={() => navigate('/blog')}>Knižné novinky a recenzie:</h4>
            <button className="blog-btn clickable-component rounded border-0 mt-3" onClick={() => navigate('/blog')}>
                <p className="fw-bold">(Recenzia) Na čom skutočne v živote záleží?</p>
                <p>"Víťaz je sám" od Paula Coelha</p>
            </button>
            <button className="blog-btn clickable-component rounded border-0 mt-3" onClick={() => navigate('/blog')}>
                <p className="fw-bold">Nadchádzajúce vydania:</p>
                <p>Nová kniha od Brandona Sandersona už 20. októbra!</p>
            </button>
        </div>
    )
};

export default Sidebar;