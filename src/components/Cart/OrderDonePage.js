import React from "react";
import MyNavbar from "../General/MyNavbar";
import Footer from "../General/Footer";
import {Container} from "react-bootstrap";

const OrderDonePage = () => {
    return (
        <>
            <MyNavbar/>
            <Container className="my-4 col-md-8 text-center">
                <h1>Ďakujeme za Váš nákup!</h1>
                <h2 className="mt-5">Objednávka dokončená. O stave objednávky Vás budeme informovať prostredníctvom emailu.</h2>
            </Container>
            <Footer/>
        </>
    )
}

export default OrderDonePage;