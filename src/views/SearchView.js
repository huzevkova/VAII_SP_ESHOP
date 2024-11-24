import MyNavbar from "../components/General/MyNavbar";
import SearchFilter from "../components/Search/SearchFilter";
import SearchBar from "../components/General/SearchBar";
import ResultList from "../components/Search/ResultList";
import Footer from "../components/General/Footer";
import React from "react";

const SearchView = ({books, handleSearch, goToBookDetail, handleDropdownClick, applyFilters}) => {
    return (
        <>
            <MyNavbar/>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <SearchFilter applyFilters={applyFilters}/>
                    </div>
                    <div className="col-md-9 py-2">
                        <SearchBar handleSearch={handleSearch}/>
                        <ResultList books={books} goToBookDetail={goToBookDetail} handleDropdownClick={handleDropdownClick}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default SearchView;