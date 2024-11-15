import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { Row, Button, Image, Form, InputGroup } from "react-bootstrap";

const CartItem = ({ image, title, author, price, number, onRemove, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(number);
    const navigate = useNavigate();

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        onQuantityChange(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            onQuantityChange(quantity - 1);
        }
    };

    const handleRemove = () => {
        onRemove();  // Trigger removal from cart
    };

    return (
        <Row className="align-items-center border-bottom py-3 bg-light border border-dark-subtle rounded">
            <div className="col-md-3 col-sm-1">
                <Image src={image} alt={title} thumbnail className="cart-item-image" />
            </div>
            <div className="col-md-4 col-sm-4">
                <h5 className="mb-1">{title}</h5>
                <small className="text-muted">{author}</small>
            </div>
            <div className="col-md-1 col-sm-2 text-center">
                <h5>{price}</h5>
            </div>
            <div className="col-md-3 col-sm-3 text-center">
                <InputGroup>
                    <Button variant="outline-secondary" size="sm" className="cart-number-button" onClick={handleDecrement}>
                        -
                    </Button>
                    <Form.Control
                        type="text"
                        value={quantity}
                        readOnly
                        className="text-center"
                    />
                    <Button variant="outline-secondary" size="sm" onClick={handleIncrement}>
                        +
                    </Button>
                </InputGroup>
            </div>
            <div className="col-md-1 col-sm-1 text-end mt-md-0">
                <Button variant="outline-danger" onClick={handleRemove}>
                    <FaTrashAlt />
                </Button>
            </div>
        </Row>
    );
};

export default CartItem;