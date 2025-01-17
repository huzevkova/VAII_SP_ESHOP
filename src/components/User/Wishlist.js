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

    /**
     * Načítanie dát pri spustení.
     */
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

    /**
     * Kontrola či sú potrebné dáta načítané.
     */
    if (wishlist == null) {
        return;
    }

    /**
     * Spracovanie odstránenia knihy z wishlistu.
     * @param id_book
     * @returns {Promise<void>}
     */
    const handleDelete = async (id_book) => {
        try {
            await removeFromWishlist({user, id_book})
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Spracovanie otvorenia knihy.
     * @param id
     */
    const openBookDetail = (id) => {
        navigate('/book_detail', { state: { bookId: id } });
    }

    /**
     * Spracovanie zatvorenia dialógoévho okna po pridaní knihy do košíka.
     */
    const handleCloseCart = () => {
        setOpenCart(false);
    };

    /**
     * Spracovnaie pridania knihy do košíka.
     * @param id
     * @returns {Promise<void>}
     */
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