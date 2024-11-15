import React from "react";
import MyNavbar from "../General/MyNavbar";
import Footer from "../General/Footer";
import Checkout from "./Checkout";
import {Container} from "react-bootstrap";

const CheckoutPage = () => {

    return (
        <>
            <MyNavbar/>
            <Container className="my-4 col-md-8">
                <Checkout/>
            </Container>
            <Footer/>
        </>
    )

}

export default CheckoutPage;