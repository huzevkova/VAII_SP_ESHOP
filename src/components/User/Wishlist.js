import React, {useEffect, useState} from 'react';
import {useAuth} from "../../AuthProvider";
import {useNavigate} from "react-router-dom";
import {fetchWishlist, removeFromWishlist} from "../../api/wishlistApi";
import {addToCart, fetchUserCart} from "../../api/orderApi";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import WishlistView from "../../views/User/WishlistView";

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
            <WishlistView wishlist={wishlist} openBookDetail={openBookDetail} addToCartClick={addToCartClick} handleDelete={handleDelete}/>
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