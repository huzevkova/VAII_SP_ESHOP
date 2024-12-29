import React, { useState } from "react";
import CartItemView from "../../views/Cart/CartItemView";

const CartItem = ({ itemData, index, handleRemoveItem, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(itemData.count);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        onQuantityChange(index, quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            onQuantityChange(index, quantity - 1);
        }
    };

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