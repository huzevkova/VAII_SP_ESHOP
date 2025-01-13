import {Button, Form, Image, InputGroup, Row} from "react-bootstrap";
import {FaTrashAlt} from "react-icons/fa";
import React from "react";

const CartItemView = ({itemData, quantity, handleDecrement, handleIncrement, handleRemove}) => {
    return (
        <Row className="align-items-center border-bottom py-3 bg-light border border-dark-subtle rounded">
            <div className="col-md-3 col-sm-1">
                <Image src={"/images/" + (itemData.path ? itemData.path : "book.jpg")} alt={itemData.name} thumbnail className="cart-item-image" />
            </div>
            <div className="col-md-4 col-sm-4">
                <h5 className="mb-1">{itemData.title}</h5>
                <small className="text-muted">{itemData.author}</small>
            </div>
            <div className="col-md-1 col-sm-2 text-center">
                <h5>{itemData.price}</h5>
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
    )
};

export default CartItemView;