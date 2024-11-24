import {Alert} from "react-bootstrap";
import React from "react";

const CheckoutSummaryView = ({formData}) => {
    return (
        <Alert variant="success">
            <h4>Zhrnutie</h4>
            <p><b>Meno a priezvisko:</b> {formData.name + " " + formData.surname}</p>
            <p><b>Email:</b> {formData.email}</p>
            <p>
                <b>Adresa:</b> {`${formData.street} ${formData.house}, ${formData.postal_code} ${formData.city}`}
            </p>
            <p><b>Doručenie:</b> {formData.delivery_option}</p>
            <p><b>Platba:</b> {formData.payment_option}</p>
            <p><b>Objednávka:</b> {formData.books.join(", ")}</p>
            <p><b>Cena:</b> ${formData.total.toFixed(2)}</p>
        </Alert>
    )
};

export default CheckoutSummaryView;