import React from 'react';
import NavbarView from "../../views/NavbarView";
import {useNavigate} from "react-router-dom";

const MyNavbar = () => {

    const navigate = useNavigate();

    const handleSearchInputChange = (e) => {

    }

    const handleSearch = (e) => {
        navigate('/search');
    }

    const handleDropdownClick = (e) => {
        navigate('/search');
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