import React from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";
import {FaSearch, FaShoppingCart} from "react-icons/fa";

class SearchPage extends React.Component {

    render() {
        return (
            <>
                <Navbar/>

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="bg-white p-3 shadow-sm rounded">
                                <h4 className="mb-4">FILTRUJ PODĽA:</h4>

                                <div className="accordion" id="filterAccordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingGenre">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseGenre" aria-expanded="true"
                                                    aria-controls="collapseGenre">
                                                Žáner
                                            </button>
                                        </h2>
                                        <div id="collapseGenre" className="accordion-collapse collapse show"
                                             aria-labelledby="headingGenre">
                                            <div className="accordion-body">
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
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingAuthor">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAuthor"
                                                    aria-expanded="false" aria-controls="collapseAuthor">
                                                Autor
                                            </button>
                                        </h2>
                                        <div id="collapseAuthor" className="accordion-collapse collapse"
                                             aria-labelledby="headingAuthor">
                                            <div className="accordion-body">
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
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingLanguage">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseLanguage"
                                                    aria-expanded="false" aria-controls="collapseLanguage">
                                                Jazyk
                                            </button>
                                        </h2>
                                        <div id="collapseLanguage" className="accordion-collapse collapse"
                                             aria-labelledby="headingLanguage">
                                            <div className="accordion-body">
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
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingAvailability">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseAvailability"
                                                    aria-expanded="false" aria-controls="collapseAvailability">
                                                Dostupnosť
                                            </button>
                                        </h2>
                                        <div id="collapseAvailability" className="accordion-collapse collapse"
                                             aria-labelledby="headingAvailability">
                                            <div className="accordion-body">
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
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingPrice">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapsePrice"
                                                    aria-expanded="false" aria-controls="collapsePrice">
                                                Cena
                                            </button>
                                        </h2>
                                        <div id="collapsePrice" className="accordion-collapse collapse"
                                             aria-labelledby="headingPrice">
                                            <div className="accordion-body">
                                                <label htmlFor="priceFrom" className="form-label">Od:</label>
                                                <input type="number" className="form-control mb-3" id="priceFrom"
                                                       placeholder="0"/>
                                                <label htmlFor="priceTo" className="form-label">Do:</label>
                                                <input type="number" className="form-control" id="priceTo"
                                                       placeholder="100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 py-2">
                            <div className="d-flex">
                                <input className="form-control flex-grow-1 searchBar" type="text"
                                       placeholder="Search.."/>
                                <button type="submit"><FaSearch/></button>
                            </div>
                            <section className="py-3">
                                <div className="container">
                                    <h4 className="search">Výsledky: 3</h4>
                                    <h4 className="search right-h4">Zoraď podľa</h4>
                                    <div className="container mt-4">
                                        <div
                                            className="row bg-light p-3 mb-3 border rounded align-items-center relative-position">
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
                                                <button className="top-button" type="button"><FaShoppingCart/></button>
                                                <h4 className="mt-2 bottom">CENA</h4>
                                            </div>
                                            <a className="stretched-link"></a>
                                        </div>

                                        <div
                                            className="row bg-light p-3 mb-3 border rounded align-items-center relative-position">
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
                                                <button className="top-button" type="button"><FaShoppingCart/></button>
                                                <h4 className="mt-2 bottom">CENA</h4>
                                            </div>
                                            <a className="stretched-link"></a>
                                        </div>

                                        <div
                                            className="row bg-light p-3 mb-3 border rounded align-items-center relative-position">
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
                                                <button className="top-button" type="button"><FaShoppingCart/></button>
                                                <h4 className="mt-2 bottom">CENA</h4>
                                            </div>
                                            <a className="stretched-link"></a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <Footer/>
            </>
        )
    }
}

export default SearchPage;