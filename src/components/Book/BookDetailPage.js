import React, {useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import {useLocation, useNavigate} from "react-router-dom";
import BookDetailView from "../../views/BookDetailView";
import {fetchBookById, fetchBookSeries} from "../../api/bookApi";

const BookDetailPage = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const { bookId } = location.state;

    const [bookData, setBookData] = useState(null);
    const [series, setSeries] = useState(null);
    const [openCart, setOpenCart] = useState(false);
    const [openWish, setOpenWish] = useState(false);

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

        loadBookData();
        loadBookSeries();
    }, [bookId]);

    if (bookData == null || series == null) {
        return;
    } else {
        console.log(series);
    }

    const handleCloseCart = () => {
        setOpenCart(false);
    };

    const handleCloseWish = () => {
        setOpenWish(false);
    };

    const onTableClick = (e) => {
        const id = e.target.id;
        const value = e.target.textContent;
        console.log(`ID: ${id}, Value: ${value}`);
        navigate('/search');
    };

    const onCartClick = () => {
        setOpenCart(true);
    }

    const onWishlistClick = () => {
        setOpenWish(true);
    }

    return (
        <>
            <BookDetailView
            bookData={bookData}
            bookSeries={series.length === 0 ? null : series}
            onCartClick={onCartClick}
            onWishlistClick={onWishlistClick}
            onTableClick={onTableClick}
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