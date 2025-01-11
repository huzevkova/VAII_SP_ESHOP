import React, {useEffect, useState} from "react";
import CartView from "../../views/Cart/CartView";
import {useAuth} from "../../AuthProvider";
import {fetchCartItems, fetchUserCart, removeFromCart, updateItemCount} from "../../api/orderApi";

const CartPage = () => {

    const [cartItems, setCartItems] = useState(null);
    const [cart, setCart] = useState(null);
    const {user} = useAuth();

    /**
     * Načítanie košíka pri spustení, po načítaní používateľa.
     */
    useEffect(() => {
        const loadUserCart = async () => {
            try {
                const response = await fetchUserCart(user);
                setCart(response);
            } catch (err) {
                console.error(err);
                setCart([]);
            }
        };

        if (user) {
            loadUserCart();
        }
    }, [user]);

    /**
     * Načítanie dát pri spustení, po načítaní košíka.
     */
    useEffect(() => {
        if (cart && cart.id_order) {
            const loadCartItems = async () => {
                try {
                    const id = parseInt(cart.id_order);
                    const response = await fetchCartItems(id);
                    setCartItems(response);
                } catch (err) {
                    console.error(err);
                    setCartItems([]);
                }
            };

            if (cartItems == null) {
                loadCartItems();
            }
        }
    }, [cart]);

    /**
     * Kontrola či sú potrebné dáta načítané.
     */
    if (!user || cart == null || cartItems == null) {
        return;
    }

    /**
     * Spracovanie zmeny počtu kusov knihy.
     * @param index
     * @param newQuantity
     * @returns {Promise<void>}
     */
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

    /**
     * Spracovanie odstránenia knihy z košíka.
     * @param id_book
     * @returns {Promise<void>}
     */
    const handleRemoveItem = async (id_book) => {
        try {
            const id_order = cart.id_order;
            await removeFromCart({ id_book, id_order });
            setCartItems((prevCartItems) =>
                prevCartItems.filter((item) => item.id_book !== id_book)
            );
        } catch (err) {
            console.error(err);
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