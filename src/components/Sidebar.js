import React from "react";

const Sidebar = () => {

    return (
        <div className="sticky-top p-3">
            <h4>Knižné novinky a recenzie:</h4>
            <button className="clickable-component rounded border-0 mt-3">
                <p className="fw-bold">(Recenzia) Na čom skutočne v živote záleží?</p>
                <p>"Víťaz je sám" od Paula Coelha</p>
            </button>
            <button className="clickable-component rounded border-0 mt-3">
                <p className="fw-bold">Nadchádzajúce vydania:</p>
                <p>Nová kniha od Brandona Sandersona už 20. októbra!</p>
            </button>
        </div>
    )
};

export default Sidebar;