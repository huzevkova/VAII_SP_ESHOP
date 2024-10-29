import Accordion from "react-bootstrap/Accordion";
import React from "react";

const SearchFilter = () => {

    return (
        <div className="bg-white p-3 shadow-sm rounded">
            <h4 className="mb-4">FILTRUJ PODĽA:</h4>

            <Accordion id="filterAccordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header id="headingGenre">
                        Žáner
                    </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Fantasy"
                                   id="genreFantasy"/>
                            <label className="form-check-label"
                                   htmlFor="genreFantasy">Fantasy</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Sci-fi"
                                   id="genreSciFi"/>
                            <label className="form-check-label"
                                   htmlFor="genreSciFi">Sci-fi</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                                   value="Biografia" id="genreBiography"/>
                            <label className="form-check-label"
                                   htmlFor="genreBiography">Biografia</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                                   value="Romantika" id="genreRomance"/>
                            <label className="form-check-label"
                                   htmlFor="genreRomance">Romantika</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Učebnica"
                                   id="genreStudy"/>
                            <label className="form-check-label"
                                   htmlFor="genreStudy">Učebnica</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header id="headingAuthor">
                        Autor
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Autor1"
                                   id="author1"/>
                            <label className="form-check-label" htmlFor="author1">Autor
                                1</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Autor2"
                                   id="author2"/>
                            <label className="form-check-label" htmlFor="author2">Autor
                                2</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Autor3"
                                   id="author3"/>
                            <label className="form-check-label" htmlFor="author3">Autor
                                3</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header id="headingLanguage">
                        Jazyk
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                                   value="Slovenský" id="languageSlovak"/>
                            <label className="form-check-label"
                                   htmlFor="languageSlovak">Slovenský</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="Anglický"
                                   id="languageEnglish"/>
                            <label className="form-check-label"
                                   htmlFor="languageEnglish">Anglický</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header id="headingAvailability">
                        Dostupnosť
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                                   value="Na sklade" id="inStock"/>
                            <label className="form-check-label" htmlFor="inStock">Na
                                sklade</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                                   value="Predobjednávka" id="preOrder"/>
                            <label className="form-check-label"
                                   htmlFor="preOrder">Predobjednávka</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header id="headingPrice">
                        Cena
                    </Accordion.Header>
                    <Accordion.Body>
                        <label htmlFor="priceFrom" className="form-label">Od:</label>
                        <input type="number" className="form-control mb-3" id="priceFrom"
                               placeholder="0"/>
                        <label htmlFor="priceTo" className="form-label">Do:</label>
                        <input type="number" className="form-control" id="priceTo"
                               placeholder="100"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default SearchFilter;