import React, {useEffect, useState} from "react";
import CartView from "../../views/Cart/CartView";
import {useAuth} from "../../AuthProvider";
import {useNavigate} from "react-router-dom";
import {fetchCartItems, fetchUserCart, removeFromCart, updateItemCount} from "../../api/orderApi";

const CartPage = () => {

    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState(null);
    const [cart, setCart] = useState(null);
    const {user} = useAuth();

    useEffect(() => {
        const loadUserCart = async () => {
            try {
                const response = await fetchUserCart(user);
                setCart(response);
            } catch (err) {
                console.error(err);
                setCart([]);  // Fallback to empty cart on error
            }
        };

        if (user) {
            loadUserCart();
        }
    }, [user]);

    useEffect(() => {
        if (cart && cart.id_order) {
            const loadCartItems = async () => {
                try {
                    const id = parseInt(cart.id_order);
                    const response = await fetchCartItems(id);
                    setCartItems(response);
                } catch (err) {
                    console.error(err);
                    setCartItems([]);  // Fallback to empty items on error
                }
            };

            loadCartItems();
        }
    }, [cart]);

    if (!user || cart == null || cartItems == null) {
        return;
    }

    const handleQuantityChange = async (index, newQuantity) => {
        if (newQuantity === 0) {
            await handleRemoveItem(index);
        } else {
            try {
                const count = newQuantity;
                const id_book = index;
                const id_order = cart.id_order;
                await updateItemCount({count, id_order, id_book});
                setCartItems((prevCartItems) =>
                    prevCartItems.map((item, i) =>
                        i === index ? {...item, number: newQuantity} : item
                    )
                );
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleRemoveItem = async (index) => {
        try {
            const id_book = index;
            const id_order = cart.id_order;
            await removeFromCart({id_book, id_order});
            setCartItems((prevCartItems) =>
                prevCartItems.filter((_, i) => i !== index)
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <CartView
            cartItems={cartItems}
            price={cart.price}
            handleQuantityChange={handleQuantityChange}
            handleRemoveItem={handleRemoveItem}
        />
    )
};

export default CartPage;