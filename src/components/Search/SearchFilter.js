import React, {useEffect, useState} from "react";
import SearchFilterView from "../../views/Search/SearchFilterView";
import {fetchAuthors, fetchGenres, fetchLanguages} from "../../api/bookApi";

const SearchFilter = ({ applyFilters, handleCheckboxChange, handlePriceChange }) => {

    const [genres, setGenres] = useState(null);
    const [authors, setAuthors] = useState(null);
    const [languages, setLanguages] = useState(null);

    /*
    const availability=[
            { id: 'inStock', value: 'Na sklade', label: 'Na sklade' },
            { id: 'preOrder', value: 'Predobjednávka', label: 'Predobjednávka' },
        ];*/

    useEffect(() => {
        const loadGenres = async () => {
            try {
                const response = await fetchGenres();
                setGenres(response);
                console.log(response);
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

    if (genres == null || authors == null || languages == null) {
        return;
    }

    const renderCheckboxList = (items, category) => {
        return items.map((item) => (
            <div className="form-check" key={item.id}>
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={item.value}
                    id={item.id}
                    onChange={() => handleCheckboxChange(category, item.value)}
                />
                <label className="form-check-label" htmlFor={item.id}>
                    {item.label}
                </label>
            </div>
        ));
    };

    return (
        <SearchFilterView
            renderCheckboxList={renderCheckboxList}
            genres={genres}
            authors={authors}
            languages={languages}
            handlePriceChange={handlePriceChange}
            applyFilters={applyFilters}
        />
    );
};

export default SearchFilter;
