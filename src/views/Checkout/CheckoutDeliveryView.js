import {Form} from "react-bootstrap";
import React from "react";

const CheckoutDeliveryView = ({formData, handleInputChange}) => {
    return (
        <>
            <h3>Choose Delivery</h3>
            <Form>
                <div className="mb-3">
                    <Form.Check
                        type="radio"
                        id="delivery-SPS"
                        label="Doručenie na adresu - Slovenská pošta (+2,99€)"
                        name="delivery_option"
                        value="Doručenie na adresu - Slovenská pošta"
                        checked={formData.delivery_option === "Doručenie na adresu - Slovenská pošta"}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="radio"
                        id="delivery-packeta"
                        label="Doručenie na adresu - Packeta (+2,99€)"
                        name="delivery_option"
                        value="Doručenie na adresu - Packeta"
                        checked={formData.delivery_option === "Doručenie na adresu - Packeta"}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="radio"
                        id="delivery-GLS"
                        label="Doručenie na adresu - GLS (+2,99€)"
                        name="delivery_option"
                        value="Doručenie na adresu - GLS"
                        checked={formData.delivery_option === "Doručenie na adresu - GLS"}
                        onChange={handleInputChange}
                    />
                </div>
            </Form>
            <h3>Výber platby</h3>
            <Form>
                <div className="mb-3">
                    <Form.Check
                        type="radio"
                        id="credit-card"
                        label="Platba prevodom"
                        name="payment_option"
                        value="Platba prevodom"
                        checked={formData.payment_option === "Platba prevodom"}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="radio"
                        id="cash-on-delivery"
                        label="Dobierka (+1,00€)"
                        name="payment_option"
                        value="Dobierka"
                        checked={formData.payment_option === "Dobierka"}
                        onChange={handleInputChange}
                    />
                </div>
            </Form>
        </>
    );
}

export default CheckoutDeliveryView;