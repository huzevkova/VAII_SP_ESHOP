import React, {useState} from 'react';
import NavbarView from "../../views/General/NavbarView";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../AuthProvider";

const MyNavbar = ({search}) => {

    const navigate = useNavigate();
    const { user, token } = useAuth();
    const [searchInput, setSearchInput] = useState(null);

    /**
     * Spracovanie zmeny vstupu vo vyhľadávacom poli.
     * @param e
     */
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    /**
     * Spracovanie vyhľadávania cez vyhľadávacie pole.
     * @param e
     */
    const handleSearch = (e) => {
        navigate('/search', { state: { input: searchInput, genre: null } });
    }

    /**
     * Spracovanie kliknutia na možnosť z menu.
     * @param e
     */
    const handleDropdownClick = (e) => {
        if (e.target.name === "all") {
            navigate('/search', { state: { input: null, genre: null } });
        } else {
            navigate('/search', {state: {input: null, genre: e.target.name}});
        }
    }

    /**
     * Spracovanie stlačenia "enter" vo vyhľadávacom poli.
     * @param event
     */
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
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