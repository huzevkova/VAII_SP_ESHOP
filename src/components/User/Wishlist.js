import React, {useEffect, useState} from 'react';
import {useAuth} from "../../AuthProvider";
import {useNavigate} from "react-router-dom";
import MyNavbar from "../General/MyNavbar";
import Footer from "../General/Footer";
import Sidebar from "../General/Sidebar";
import {fetchWishlist, removeFromWishlist} from "../../api/wishlistApi";
import ResultCard from "../Search/ResultCard";
import {addToCart, fetchUserCart} from "../../api/orderApi";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";

const Wishlist = () => {

    const navigate = useNavigate();
    const [wishlist, setWishlist] = useState(null);
    const [cart, setCart] = useState(null);
    const [openCart, setOpenCart] = useState(false);
    const {user} = useAuth();

    if (!user) {
        navigate('/login');
    }

    useEffect(() => {
        const loadWishlist = async () => {
            try {
                const response = await fetchWishlist(user);
                setWishlist(response);
            } catch (err) {
                console.error(err);
                setWishlist([]);
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

        loadCart();
        loadWishlist();
    });

    if (wishlist == null) {
        return;
    }

    const handleDelete = async (id_book) => {
        try {
            await removeFromWishlist({user, id_book})
        } catch (err) {
            console.error(err);
        }
    }
    const openBookDetail = (id) => {
        navigate('/book_detail', { state: { bookId: id } });
    }

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

    return (
        <>
            <MyNavbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3" id="sidebar">
                        <Sidebar/>
                    </div>
                    <div className="container col-lg-8 col-md-7">
                        <h2 className="mt-3 text-center text-primary">WISHLIST</h2>
                        <div className="container mt-4">
                            {wishlist.map((book, index) => (
                                <div className="d-flex justify-content-end" key={index}>
                                    <ResultCard bookData={book} openBookDetail={openBookDetail} addToCart={addToCartClick}/>
                                    <button
                                        className="btn btn-danger btn-sm position-absolute delete-button mt-1"
                                        onClick={() => handleDelete(book.id_book)}>
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
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
}
export default Wishlist;