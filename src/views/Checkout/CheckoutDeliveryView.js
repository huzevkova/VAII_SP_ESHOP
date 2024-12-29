import {Form} from "react-bootstrap";
import React from "react";

const CheckoutDeliveryView = ({orderOptions, handleInputChange}) => {
    return (
        <>
            <h3>Choose Delivery</h3>
            <Form>
                <div className="mb-3">
                    <Form.Check
                        type="radio"
                        id="delivery-SPS"
                        label="Doručenie na adresu - Slovenská pošta (+2,99€)"
                        name="delivery"
                        value="Doručenie na adresu - Slovenská pošta"
                        checked={orderOptions.delivery === "Doručenie na adresu - Slovenská pošta"}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="radio"
                        id="delivery-packeta"
                        label="Doručenie na adresu - Packeta (+2,99€)"
                        name="delivery"
                        value="Doručenie na adresu - Packeta"
                        checked={orderOptions.delivery === "Doručenie na adresu - Packeta"}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="radio"
                        id="delivery-GLS"
                        label="Doručenie na adresu - GLS (+2,99€)"
                        name="delivery"
                        value="Doručenie na adresu - GLS"
                        checked={orderOptions.delivery === "Doručenie na adresu - GLS"}
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
                        name="payment"
                        value="Platba prevodom"
                        checked={orderOptions.payment === "Platba prevodom"}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="radio"
                        id="cash-on-delivery"
                        label="Dobierka (+1,00€)"
                        name="payment"
                        value="Dobierka"
                        checked={orderOptions.payment === "Dobierka"}
                        onChange={handleInputChange}
                    />
                </div>
            </Form>
        </>
    );
}

export default CheckoutDeliveryView;