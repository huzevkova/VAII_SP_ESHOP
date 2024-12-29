import MyNavbar from "../../components/General/MyNavbar";
import {Button, Container} from "react-bootstrap";
import CartItem from "../../components/Cart/CartItem";
import Footer from "../../components/General/Footer";
import React from "react";
import {useNavigate} from "react-router-dom";

const CartView = ({cartItems, price, handleRemoveItem, handleQuantityChange }) => {

    const navigate = useNavigate();

    return (
        <>
            <MyNavbar/>
            <section className="py-3">
                <div className="container">
                    <h3 className="search">Obsah košíka:</h3>
                    <Container className="my-4 col-md-10">
                        {cartItems.map((item, index) => (
                            <CartItem
                                itemData={item}
                                index={item.id_book}
                                handleRemoveItem={handleRemoveItem}
                                onQuantityChange={handleQuantityChange}
                            />
                        ))}
                        <h3 className="mt-3 text-end">Spolu: {price}</h3>
                        <Button onClick={() => navigate('/checkout')}>Prejsť k objednávke</Button>
                    </Container>
                </div>
            </section>
            <Footer/>
        </>
    )
};

export default CartView;