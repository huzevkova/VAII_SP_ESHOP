import React, {useState} from 'react';
import NavbarView from "../../views/General/NavbarView";
import {useNavigate} from "react-router-dom";

const MyNavbar = () => {

    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState(null);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSearch = (e) => {
        navigate('/search', { state: { input: searchInput } });
    }

    const handleDropdownClick = (e) => {
        navigate('/search', { state: { input: searchInput } });
    }

    return (
        <NavbarView
            handleSearch={handleSearch}
            handleSearchInputChange={handleSearchInputChange}
            handleDropdownClick={handleDropdownClick}
        />
    )
};

export default MyNavbar;