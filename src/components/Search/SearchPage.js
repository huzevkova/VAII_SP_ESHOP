import React, {useEffect, useState} from 'react';
import SearchView from "../../views/SearchView";
import {useNavigate} from "react-router-dom";
import {fetchBooks, fetchBooksByName} from "../../api/bookApi";

const SearchPage = () => {

    const navigate = useNavigate();

    const [books, setBooks] = useState(null);
    const [searchInput, setSearchInput] = useState(null);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const response = await fetchBooks();
                setBooks(response);
                console.log(response);
            } catch (err) {
                console.error(err);
                setBooks([]);
            }
        };

        loadBooks();
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

    const handleSearch = async (e) => {
        e.preventDefault();
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

    const applyFilters = () => {

    };

    return (
        <SearchView
            books={books}
            handleSearch={handleSearch}
            handleInputChange={handleInputChange}
            openBookDetail={openBookDetail}
            handleDropdownClick={handleDropdownClick}
            applyFilters={applyFilters}
        />
    )
};

export default SearchPage;