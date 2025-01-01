import {Alert} from "react-bootstrap";
import React from "react";

const CheckoutSummaryView = ({userData, orderData, orderOptions, cart, extra}) => {
    return (
        <Alert variant="success">
            <h4>Zhrnutie</h4>
            <p><b>Meno a priezvisko:</b> {userData.name}</p>
            <p><b>Email:</b> {userData.email}</p>
            <p>
                <b>Adresa:</b> {`${userData.street} ${userData.house_number}, ${userData.city_code} ${userData.city}`}
            </p>
            <p><b>Doručenie:</b> {orderOptions.delivery}</p>
            <p><b>Platba:</b> {orderOptions.payment}</p>
            <p><b>Objednávka:</b> {orderData.map(book => book.title).join(", ")}</p>
            <p><b>Cena:</b> ${parseFloat(parseFloat(cart.price) + extra).toFixed(2)}</p>
        </Alert>
    )
};

export default CheckoutSummaryView;