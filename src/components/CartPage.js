import React from "react";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import CartItem from "./CartItem";
import {Button, Container} from "react-bootstrap";

const CartPage = () => {

    const handleQuantityChange = (index, newQuantity) => {

    };

    const handleRemoveItem = (index) => {

    };

    return (
        <>
            <MyNavbar/>
            <section className="py-3">
                <div className="container">
                    <h3 className="search">Obsah košíka:</h3>
                    <Container className="my-4 col-md-10">
                        <CartItem
                            image="images/book.jpg"
                            title="Názov knihy"
                            author="Autor knihy"
                            price={"10.00€"}
                            number={1}
                            onRemove={() => handleRemoveItem(1)}
                            onQuantityChange={(newQuantity) => handleQuantityChange(1, newQuantity)}
                        />
                        <CartItem
                            image="images/book.jpg"
                            title="Názov knihy"
                            author="Autor knihy"
                            price={"10.00€"}
                            number={1}
                            onRemove={() => handleRemoveItem(1)}
                            onQuantityChange={(newQuantity) => handleQuantityChange(1, newQuantity)}
                        />
                        <CartItem
                            image="images/book.jpg"
                            title="Názov knihy"
                            author="Autor knihy"
                            price={"10.00€"}
                            number={1}
                            onRemove={() => handleRemoveItem(1)}
                            onQuantityChange={(newQuantity) => handleQuantityChange(1, newQuantity)}
                        />
                        <h3 className="mt-3 text-end">Spolu: 30.00€</h3>
                        <Button>Prejsť k objednávke</Button>
                    </Container>
                </div>
            </section>
            <Footer/>
        </>
    )
};

export default CartPage;