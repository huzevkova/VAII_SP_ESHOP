import React, {useEffect, useState} from 'react';
import SearchView from "../../views/Search/SearchView";
import {useLocation, useNavigate} from "react-router-dom";
import {fetchBooks, fetchBooksByGenre, fetchBooksByName} from "../../api/bookApi";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import {addToCart, fetchUserCart} from "../../api/orderApi";
import {useAuth} from "../../AuthProvider";

const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { input, genre } = location.state || [];
    const {user} = useAuth();

    const [allBooks, setAllBooks] = useState(null);
    const [books, setBooks] = useState(null);
    const [cart, setCart] = useState(null);
    const [searchInput, setSearchInput] = useState(input);
    const [openCart, setOpenCart] = useState(false);

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
        } else if (genre != null) {
            const loadBooksGenre = async () => {
                try {
                    const response = await fetchBooksByGenre(genre);
                    setBooks(response);
                } catch (err) {
                    console.error(err);
                    setBooks([]);
                }
            };

            loadBooksGenre();
        }

        const loadBooks = async () => {
            try {
                const response = await fetchBooks();
                setAllBooks(response);
                if (input == null && genre == null) {
                    setBooks(response);
                }
            } catch (err) {
                console.error(err);
                setBooks([]);
            }
        };

        loadBooks();

        const loadCart = async () => {
            try {
                const response = await fetchUserCart(user);
                setCart(response);
            } catch (err) {
                console.error(err);
                setCart([]);
            }
        }

        if (user) {
            loadCart();
        } else {
            setCart([]);
        }
    }, [location.state]);

    if (books == null || cart == null) {
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
            } else if (allBooks[i].price > parseFloat(selectedFilters.price.from) && allBooks[i].price < parseFloat(selectedFilters.price.to)) {
                filteredBooks.push(allBooks[i]);
            }
        }

        setBooks(filteredBooks);
    };

    const handleCloseCart = () => {
        setOpenCart(false);
    };


    const addToCartClick = async (id) => {
        if (user) {
            try {
                const id_book = id;
                const id_order = cart.id_order;
                await addToCart({id_book, id_order});
                setOpenCart(true);
            } catch (err) {
                console.error(err);
                if (err.message === 'This book is already in cart') {
                    alert('Knihu už máte v košíku!');
                }
            }
        } else {
            navigate('/login');
        }
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            handleSearch();  // Trigger handleSearch when Enter is pressed
        }
    };

    return (
        <>
        <SearchView
            books={books}
            handleSearch={handleSearch}
            addToCart={addToCartClick}
            handleInputChange={handleInputChange}
            openBookDetail={openBookDetail}
            handleDropdownClick={handleDropdownClick}
            applyFilters={applyFilters}
            handleCheckboxChange={handleCheckboxChange}
            handlePriceChange={handlePriceChange}
            handleEnter={handleEnter}
        />
            <Dialog open={openCart}>
                <DialogTitle>
                    {"Kniha bola pridaná do košíka"}
                </DialogTitle>
                <IconButton onClick={handleCloseCart}>
                    OK
                </IconButton>
            </Dialog>
        </>
    )
};

export default SearchPage;