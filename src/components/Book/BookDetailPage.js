import React, {useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import {useLocation, useNavigate} from "react-router-dom";
import BookDetailView from "../../views/Book/BookDetailView";
import {fetchBookById, fetchBookSeries, fetchGenresById} from "../../api/bookApi";
import {addToWishlist} from "../../api/wishlistApi";
import {useAuth} from "../../AuthProvider";
import {addToCart, fetchUserCart} from "../../api/orderApi";

const BookDetailPage = () => {

    const navigate = useNavigate();
    const {user} = useAuth();

    const location = useLocation();
    const { bookId } = location.state;

    const [cart, setCart] = useState(null);
    const [bookData, setBookData] = useState(null);
    const [bookGenres, setBookGenres] = useState(null);
    const [series, setSeries] = useState(null);
    const [openCart, setOpenCart] = useState(false);
    const [openWish, setOpenWish] = useState(false);

    /**
     * Načítanie dát pri spustení, po načítaní id knihy.
     */
    useEffect(() => {
        const loadBookData = async () => {
            try {
                const response = await fetchBookById(bookId);
                setBookData(response);
            } catch (err) {
                console.error(err);
                setBookData([]);
            }
        };

        const loadBookGenres = async () => {
            try {
                const response = await fetchGenresById(bookId);
                let genresString = "";
                for (let i = 0; i < response.length; i++) {
                    genresString += response[i].genre_name + " ";
                }
                setBookGenres(genresString);
            } catch (err) {
                console.error(err);
                setBookGenres([]);
            }
        };

        const loadBookSeries = async () => {
            try {
                const response = await fetchBookSeries(bookId);
                if (response == null) {
                    setSeries([]);
                } else {
                    setSeries(response);
                }
            } catch (err) {
                console.error(err);
                setSeries([]);
            }
        };

        const loadCart = async () => {
            try {
                const response = await fetchUserCart(user);
                setCart(response);
            } catch (err) {
                console.error(err);
                setCart([]);
            }
        }

        loadBookData();
        loadBookGenres();
        loadBookSeries();
        if (user) {
            loadCart();
        } else {
            setCart([]);
        }
    }, [bookId]);

    /**
     * Kontrola či sú potrebné dáta načítané.
     */
    if (bookData == null || series == null || bookGenres == null || cart == null) {
        return;
    }

    /**
     * Spracovnaie zavretia dialógového okna informujúceho o pridaní do košíka.
     */
    const handleCloseCart = () => {
        setOpenCart(false);
    };

    /**
     * Spracovnaie zavretia dialógového okna informujúceho o pridaní do wishlistu.
     */
    const handleCloseWish = () => {
        setOpenWish(false);
    };

    /**
     * Spracovanie pridania knihy do košíka.
     * @returns {Promise<void>}
     */
    const onCartClick = async () => {
        if (user) {
            try {
                const id_book = bookId;
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

    /**
     * Spracovanie pridania knihy do wishlistu.
     * @returns {Promise<void>}
     */
    const onWishlistClick = async () => {
        if (user) {
            try {
                const id_book = bookId;
                await addToWishlist({user, id_book});
                setOpenWish(true);
            } catch (err) {
                console.error(err);
                if (err.message === 'This entry already exists in your wishlist') {
                    alert('Knihu už máte vo wishliste!');
                }
            }
        } else {
            navigate('/login');
        }
    }

    return (
        <>
            <BookDetailView
            bookData={bookData}
            bookGenres={bookGenres}
            bookSeries={series.length === 0 ? null : series}
            onCartClick={onCartClick}
            onWishlistClick={onWishlistClick}
            />
            <Dialog open={openCart}>
                <DialogTitle>
                    {"Kniha bola pridaná do košíka"}
                </DialogTitle>
                <IconButton onClick={handleCloseCart}>
                    OK
                </IconButton>
            </Dialog>
            <Dialog open={openWish}>
                <DialogTitle>
                    {"Kniha bola pridaná do wishlistu"}
                </DialogTitle>
                <IconButton onClick={handleCloseWish}>
                    OK
                </IconButton>
            </Dialog>
        </>
    )
};

export default BookDetailPage;