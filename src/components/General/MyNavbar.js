import React, {useState} from 'react';
import NavbarView from "../../views/General/NavbarView";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../AuthProvider";

const MyNavbar = ({search}) => {

    const navigate = useNavigate();
    const { user, token } = useAuth();
    const [searchInput, setSearchInput] = useState(null);

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSearch = (e) => {
        navigate('/search', { state: { input: searchInput, genre: null } });
    }

    const handleDropdownClick = (e) => {
        if (e.target.name === "all") {
            console.log(e.target.name);
            navigate('/search', { state: { input: null, genre: null } });
        } else {
            navigate('/search', {state: {input: null, genre: e.target.name}});
        }
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            handleSearch();  // Trigger handleSearch when Enter is pressed
        }
    };

    return (
        <NavbarView
            user={user ? token : null}
            search={search}
            handleSearch={handleSearch}
            handleSearchInputChange={handleSearchInputChange}
            handleDropdownClick={handleDropdownClick}
            handleEnter={handleEnter}
        />
    )
};

export default MyNavbar;