import React, { useState } from "react";
import CartItemView from "../../views/Cart/CartItemView";

const CartItem = ({ itemData, index, handleRemoveItem, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(itemData.count);

    /**
     * Spracovnaie zvýšenia počtu kusov knihy.
     */
    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        onQuantityChange(index, quantity + 1);
    };

    /**
     * Spracovnaie zvníženia počtu kusov knihy.
     */
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            onQuantityChange(index, quantity - 1);
        }
    };

    /**
     * Spracovanie odstránenia knihy z košíka.
     */
    const handleRemove = () => {
        handleRemoveItem(index);
    };

    return (
        <CartItemView
            itemData={itemData}
            quantity={quantity}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleRemove={handleRemove}
        />
    );
};

export default CartItem;