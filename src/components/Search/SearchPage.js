import React, {useState} from 'react';
import SearchView from "../../views/SearchView";
import {useNavigate} from "react-router-dom";

const SearchPage = () => {

    const navigate = useNavigate();

    const [books, setBooks] = useState([
        {id: 1,
            title: 'Kniha 1',
            author: 'Autor knihy',
            price: 'CENA',
            description: 'Krátky popis danej knihy, zobratí z detailu knihy. V prípade, že je príliš dlhý, tak sa ukáže iba kúsok a zvyšok sa usekne pridaním trojbodky. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 2,
            title: 'Kniha 2',
            author: 'Autor knihy',
            price: 'CENA',
            description: 'Krátky popis danej knihy, zobratí z detailu knihy. V prípade, že je príliš dlhý, tak sa ukáže iba kúsok a zvyšok sa usekne pridaním trojbodky. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 3,
            title: 'Kniha 3',
            author: 'Autor knihy',
            price: 'CENA',
            description: 'Krátky popis danej knihy, zobratí z detailu knihy. V prípade, že je príliš dlhý, tak sa ukáže iba kúsok a zvyšok sa usekne pridaním trojbodky. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]);

    const goToBookDetail = (index) => {
        navigate('/book_detail')
    }

    const handleDropdownClick = (e) => {

    }

    const handleSearch = (e) => {

    }

    const applyFilters = () => {

    };

    return (
        <SearchView
            books={books}
            handleSearch={handleSearch}
            goToBookDetail={goToBookDetail}
            handleDropdownClick={handleDropdownClick}
            applyFilters={applyFilters}
        />
    )
};

export default SearchPage;