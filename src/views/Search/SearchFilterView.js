import Accordion from "react-bootstrap/Accordion";
import {Button} from "react-bootstrap";
import React from "react";

const SearchFilterView = ({renderCheckboxList, genres, authors, languages, handlePriceChange, applyFilters}) => {
    return (
        <div className="bg-white p-3 shadow-sm rounded">
            <h4 className="mb-4">FILTRUJ PODĽA:</h4>
            <Accordion id="filterAccordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header id="headingGenre">Žáner</Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        {renderCheckboxList(genres, "genres")}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header id="headingAuthor">Autor</Accordion.Header>
                    <Accordion.Body>{renderCheckboxList(authors, "authors")}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header id="headingLanguage">Jazyk</Accordion.Header>
                    <Accordion.Body>{renderCheckboxList(languages, "languages")}</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header id="headingPrice">Cena</Accordion.Header>
                    <Accordion.Body>
                        <label htmlFor="priceFrom" className="form-label">
                            Od:
                        </label>
                        <input
                            type="number"
                            className="form-control mb-3"
                            id="priceFrom"
                            placeholder="0"
                            onChange={(e) => handlePriceChange("from", e.target.value)}
                        />
                        <label htmlFor="priceTo" className="form-label">
                            Do:
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="priceTo"
                            placeholder="100"
                            onChange={(e) => handlePriceChange("to", e.target.value)}
                        />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Button className="mt-3" onClick={applyFilters}>
                Použi
            </Button>
        </div>
    )
};

export default SearchFilterView;