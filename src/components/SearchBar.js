import {FaSearch} from "react-icons/fa";
import React from "react";


const SearchBar = () => {

    return (
        <div className="d-flex">
            <input className="form-control flex-grow-1 searchBar" type="text"
                   placeholder="Search.."/>
            <button type="submit"><FaSearch/></button>
        </div>
    )
}

export default SearchBar;