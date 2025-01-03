import MyNavbar from "../../components/General/MyNavbar";
import SearchFilter from "../../components/Search/SearchFilter";
import SearchBarView from "../General/SearchBarView";
import ResultListView from "../Search/ResultListView";
import FooterView from "../General/FooterView";
import React from "react";
import "./search-style.css";

const SearchView = ({books, addToCart, handleSearch, handleInputChange, openBookDetail, handleDropdownClick, applyFilters, handleCheckboxChange, handlePriceChange, handleEnter}) => {
    return (
        <>
            <MyNavbar search={false}/>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <SearchFilter applyFilters={applyFilters} handleCheckboxChange={handleCheckboxChange} handlePriceChange={handlePriceChange}/>
                    </div>
                    <div className="col-md-9 py-2">
                        <SearchBarView handleSearchInputChange={handleInputChange} handleSearch={handleSearch} handleEnter={handleEnter}/>
                        <ResultListView books={books} openBookDetail={openBookDetail} handleDropdownClick={handleDropdownClick} addToCart={addToCart}/>
                    </div>
                </div>
            </div>
            <FooterView/>
        </>
    )
};

export default SearchView;