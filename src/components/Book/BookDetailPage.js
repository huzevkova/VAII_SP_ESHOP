import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import {useNavigate} from "react-router-dom";
import BookDetailView from "../../views/BookDetailView";

const BookDetailPage = () => {

    const navigate = useNavigate();

    const [openCart, setOpenCart] = React.useState(false);
    const [openWish, setOpenWish] = React.useState(false);

    const handleCloseCart = () => {
        setOpenCart(false);
    };

    const handleCloseWish = () => {
        setOpenWish(false);
    };

    const bookData = {
        image: '/images/book.jpg',
        title: 'Názov knihy',
        part: 'X. Diel série',
        author: 'Meno Autora',
        genre: 'Fikcia',
        year: '2024',
        language: 'Slovenský',
        original: 'Book name',
        page_count: '200',
        size: '20x20cm',
        cover: 'pevný',
        isbn: '9781529113396',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis, nisi at pharetra volutpat, felis odio convallis massa, nec bibendum justo nisi ut arcu.'
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