import React, {useEffect, useState} from "react";
import SearchFilterView from "../../views/Search/SearchFilterView";
import {fetchAuthors, fetchGenres, fetchLanguages} from "../../api/bookApi";

const SearchFilter = ({ applyFilters, handleCheckboxChange, handlePriceChange }) => {

    const [genres, setGenres] = useState(null);
    const [authors, setAuthors] = useState(null);
    const [languages, setLanguages] = useState(null);

    /**
     * Načítanie dát pri spustení.
     */
    useEffect(() => {
        const loadGenres = async () => {
            try {
                const response = await fetchGenres();
                setGenres(response);
            } catch (err) {
                console.error(err);
                setGenres([]);
            }
        };
        const loadAuthors = async () => {
            try {
                const response = await fetchAuthors();
                setAuthors(response);
            } catch (err) {
                console.error(err);
                setAuthors([]);
            }
        };
        const loadLanguages = async () => {
            try {
                const response = await fetchLanguages();
                setLanguages(response);
            } catch (err) {
                console.error(err);
                setLanguages([]);
            }
        };

        loadGenres();
        loadAuthors();
        loadLanguages();
    }, []);

    /**
     * Kontrola či sú potrebné dáta načítané.
     */
    if (genres == null || authors == null || languages == null) {
        return;
    }

    return (
        <SearchFilterView
            genres={genres}
            authors={authors}
            languages={languages}
            handlePriceChange={handlePriceChange}
            handleCheckboxChange={handleCheckboxChange}
            applyFilters={applyFilters}
        />
    );
};

export default SearchFilter;
