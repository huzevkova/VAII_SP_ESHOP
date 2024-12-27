import React, {useEffect, useState} from 'react';
import SearchView from "../../views/SearchView";
import {useLocation, useNavigate} from "react-router-dom";
import {fetchBooks, fetchBooksByGenre, fetchBooksByName} from "../../api/bookApi";

const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { input } = location.state;

    const [allBooks, setAllBooks] = useState(null);
    const [books, setBooks] = useState(null);
    const [searchInput, setSearchInput] = useState(input);

    const [selectedFilters, setSelectedFilters] = useState({
        genres: [],
        authors: [],
        languages: [],
        price: { from: null, to: null },
    });

    useEffect(() => {
        if (input != null) {
            setSearchInput(input);
            const loadSearch = async () => {
                try {
                    const response = await fetchBooksByName(searchInput);
                    setBooks(response);
                } catch (err) {
                    console.error(err);
                    setBooks([]);
                }
            }

            loadSearch();
        } else {
            const loadBooks = async () => {
                try {
                    const response = await fetchBooks();
                    setAllBooks(response);
                    setBooks(response);
                } catch (err) {
                    console.error(err);
                    setBooks([]);
                }
            };

            loadBooks();
        }
    }, []);

    if (books == null) {
        return;
    }

    const openBookDetail = (id) => {
        navigate('/book_detail', { state: { bookId: id } });
    }

    const handleDropdownClick = (e) => {
        let sortedBooks = books;
        if (e.target.id === "lowest_price") {
            sortedBooks = [...books].sort((a, b) => a.price - b.price);
        } else if (e.target.id === "highest_price") {
            sortedBooks = [...books].sort((a, b) => b.price - a.price);
        } else if (e.target.id === "year") {
            sortedBooks = [...books].sort((a, b) => a.year - b.year);
        } else if (e.target.id === "alphabetical") {
            sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
        }
        setBooks(sortedBooks);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleCheckboxChange = (category, value) => {
        setSelectedFilters((prevFilters) => {
            const updatedCategory = prevFilters[category].includes(value)
                ? prevFilters[category].filter((item) => item !== value)
                : [...prevFilters[category], value];

            return { ...prevFilters, [category]: updatedCategory };
        });
        console.log(selectedFilters);
    };

    const handlePriceChange = (field, value) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            price: { ...prevFilters.price, [field]: value },
        }));
    };

    const handleSearch = async (e) => {
        if (searchInput) {
            try {
                const response = await fetchBooksByName(searchInput);
                setBooks(response);
            } catch (err) {
                console.error(err);
                setBooks([]);
            }
        }
    }
    const applyFilters = async () => {
        let filteredBooks = [];
        if (selectedFilters.genres.length > 0) {
            for (let i = 0; i < selectedFilters.genres.length; i++) {
                try {
                    const response = await fetchBooksByGenre(selectedFilters.genres[i]);
                    filteredBooks.push(...response);
                } catch (err) {
                    console.error(err);
                }
            }
        }

        for (let i = 0; i < allBooks.length; i++) {
            if (selectedFilters.authors.length > 0 && selectedFilters.authors.includes(allBooks[i].author)) {
                filteredBooks.push(allBooks[i]);
            } else if (selectedFilters.languages.length > 0 && selectedFilters.languages.includes(allBooks[i].language)) {
                filteredBooks.push(allBooks[i]);
            } else if (allBooks[i].price > selectedFilters.price.from && allBooks[i].price < selectedFilters.price.to) {
                filteredBooks.push(allBooks[i]);
            }
        }

        setBooks(filteredBooks);
    };

    return (
        <SearchView
            books={books}
            handleSearch={handleSearch}
            handleInputChange={handleInputChange}
            openBookDetail={openBookDetail}
            handleDropdownClick={handleDropdownClick}
            applyFilters={applyFilters}
            handleCheckboxChange={handleCheckboxChange}
            handlePriceChange={handlePriceChange}
        />
    )
};

export default SearchPage;