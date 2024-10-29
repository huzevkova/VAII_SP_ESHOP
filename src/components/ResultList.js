import {FaShoppingCart} from "react-icons/fa";
import React from "react";
import ResultCard from "./ResultCard";


const ResultList = () => {

    return (
        <section className="py-3">
            <div className="container">
                <h4 className="search">Výsledky: 3</h4>
                <h4 className="search right-h4">Zoraď podľa</h4>
                <div className="container mt-4">
                    <ResultCard/>
                    <ResultCard/>
                    <ResultCard/>
                </div>
            </div>
        </section>
    )
}

export default ResultList;