import React from "react";
import ResultCardView from "./ResultCardView";
import Dropdown from "react-bootstrap/Dropdown";
import "./search-style.css";

const ResultListView = ({books, addToCart, openBookDetail, handleDropdownClick}) => {
    return (
        <section className="py-3">
            <div className="container">
                <div className="container d-flex justify-content-between align-items-center">
                    <h4 className="search">Výsledky: {books.length}</h4>
                    <Dropdown>
                        <Dropdown.Toggle id="orderByDrop" size="sm">
                            Zoraď podľa:
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item id="lowest_price" onClick={handleDropdownClick}>Najnižšej ceny</Dropdown.Item>
                            <Dropdown.Item id="highest_price" onClick={handleDropdownClick}>Najvyššej ceny</Dropdown.Item>
                            <Dropdown.Item id="year" onClick={handleDropdownClick}>Roku vydania</Dropdown.Item>
                            <Dropdown.Item id="alphabetical" onClick={handleDropdownClick}>Abecedne</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="container mt-4">
                    {books.map((book, index) => (
                        <ResultCardView key={index} bookData={book} openBookDetail={openBookDetail} addToCart={addToCart}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ResultListView;