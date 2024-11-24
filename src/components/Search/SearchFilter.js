import React, { useState } from "react";
import SearchFilterView from "../../views/SearchFilterView";

const SearchFilter = ({ applyFilters }) => {

    const genres=[
            { id: 'genreFantasy', value: 'Fantasy', label: 'Fantasy' },
            { id: 'genreSciFi', value: 'Sci-fi', label: 'Sci-fi' },
        ];
    const authors=[
            { id: 'author1', value: 'Autor1', label: 'Autor 1' },
            { id: 'author2', value: 'Autor2', label: 'Autor 2' }
        ];
    const languages=[
            { id: 'languageSlovak', value: 'Slovenský', label: 'Slovenský' },
            { id: 'languageEnglish', value: 'Anglický', label: 'Anglický' },
        ];
    const availability=[
            { id: 'inStock', value: 'Na sklade', label: 'Na sklade' },
            { id: 'preOrder', value: 'Predobjednávka', label: 'Predobjednávka' },
        ];

    const [selectedFilters, setSelectedFilters] = useState({
        genres: [],
        authors: [],
        languages: [],
        availability: [],
        price: { from: null, to: null },
    });

    const handleCheckboxChange = (category, value) => {
        setSelectedFilters((prevFilters) => {
            const updatedCategory = prevFilters[category].includes(value)
                ? prevFilters[category].filter((item) => item !== value)
                : [...prevFilters[category], value];

            return { ...prevFilters, [category]: updatedCategory };
        });
    };

    const handlePriceChange = (field, value) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            price: { ...prevFilters.price, [field]: value },
        }));
    };

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
            availability={availability}
            handlePriceChange={handlePriceChange}
            applyFilters={applyFilters}
        />
    );
};

export default SearchFilter;
