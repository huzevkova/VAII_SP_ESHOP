import {FaSearch} from "react-icons/fa";
import React from "react";


const SearchBar = ({handleSearchInputChange, handleSearch}) => {
    return (
        <div className="d-flex">
            <input className="form-control flex-grow-1 searchBar" type="text"
                   placeholder="Search.." onChange={handleSearchInputChange}/>
            <button className="searchIcon" type="submit" onClick={handleSearch}><FaSearch/></button>
        </div>
    )
}

export default SearchBar;