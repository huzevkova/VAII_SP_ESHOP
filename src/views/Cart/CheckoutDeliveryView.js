import {Form} from "react-bootstrap";
import React from "react";

const CheckoutDeliveryView = ({orderOptions, delivery, payment, handleInputChange}) => {
    return (
        <>
            <h3>Výber doručenia</h3>
            <Form>
                <div className="mb-3">
                    {delivery.map((item, index) => (
                        <Form.Check
                            type="radio"
                            id={index}
                            label={item.type + " (" + item.price + "€)"}
                            name="delivery"
                            value={item.id_delivery}
                            checked={parseInt(orderOptions.delivery) === item.id_delivery}
                            onChange={handleInputChange}
                        />
                    ))}
                </div>
            </Form>
            <h3>Výber platby</h3>
            <Form>
                <div className="mb-3">
                    {payment.map((item, index) => (
                        <Form.Check
                            type="radio"
                            id={index}
                            label={item.type + " (" + parseFloat(item.extra).toFixed(2) + "€)"}
                            name="payment"
                            value={item.id_payment}
                            checked={parseInt(orderOptions.payment) === item.id_payment}
                            onChange={handleInputChange}
                        />
                    ))}
                </div>
            </Form>
        </>
    );
}

export default CheckoutDeliveryView;