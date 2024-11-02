import {FaShoppingCart} from "react-icons/fa";
import React from "react";
import ResultCard from "./ResultCard";
import Dropdown from "react-bootstrap/Dropdown";


const ResultList = () => {

    return (
        <section className="py-3">
            <div className="container">
                <div className="container d-flex justify-content-between align-items-center">
                    <h4 className="search">Výsledky: 3</h4>
                    <Dropdown>
                        <Dropdown.Toggle id="orderByDrop" size="sm">
                            Zoraď podľa:
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Najnižšej ceny</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Najvyššej ceny</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Obľúbenosti</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">Roku vydania</Dropdown.Item>
                            <Dropdown.Item href="#/action-5">Abecedne</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
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