import React, {useState} from "react";
import CartView from "../../views/Cart/CartView";

const CartPage = () => {

    const [cartItems, setCartItems] = useState([
        {
            image: 'images/book.jpg',
            title: 'Názov knihy 1',
            author: 'Autor knihy 1',
            price: '10.00€',
            number: 1
        },
        {
            image: 'images/book.jpg',
            title: 'Názov knihy 2',
            author: 'Autor knihy 2',
            price: '10.00€',
            number: 2
        },
        {
            image: 'images/book.jpg',
            title: 'Názov knihy 3',
            author: 'Autor knihy 3',
            price: '10.00€',
            number: 1
        }
    ]);

    const handleQuantityChange = (index, newQuantity) => {
        if (newQuantity === 0) {
            handleRemoveItem(index);
        } else {
            setCartItems((prevCartItems) =>
                prevCartItems.map((item, i) =>
                    i === index ? {...item, number: newQuantity} : item
                )
            );
        }
    };

    const handleRemoveItem = (index) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((_, i) => i !== index)
        );
    };

    return (
        <CartView
            cartItems={cartItems}
            handleQuantityChange={handleQuantityChange}
            handleRemoveItem={handleRemoveItem}
        />
    )
};

export default CartPage;