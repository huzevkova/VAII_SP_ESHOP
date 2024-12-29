import React, {useState} from 'react';
import NavbarView from "../../views/General/NavbarView";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../AuthProvider";

const MyNavbar = () => {

    const navigate = useNavigate();
    const { user, token } = useAuth();
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
            user={user ? token : null}
            handleSearch={handleSearch}
            handleSearchInputChange={handleSearchInputChange}
            handleDropdownClick={handleDropdownClick}
        />
    )
};

export default MyNavbar;