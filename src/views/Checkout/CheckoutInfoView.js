import {Col, Form, Row} from "react-bootstrap";
import React from "react";

const CheckoutInfoView = ({userData, handleInputChange}) => {

    return(
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Meno</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Zadajte svoje meno a priezvisko"
                    value={userData.name}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    placeholder="Zadajte svoj email"
                    value={userData.email}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Telefónne číslo</Form.Label>
                <Form.Control
                    type="phone"
                    name="phone_number"
                    placeholder="Zadajte svoje telefónne číslo"
                    value={userData.phone_number}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Ulica</Form.Label>
                <Form.Control
                    type="text"
                    name="street"
                    placeholder="Zadajte ulicu"
                    value={userData.street}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Číslo domu</Form.Label>
                        <Form.Control
                            type="text"
                            name="house_number"
                            placeholder="Zadajte číslo domu"
                            value={userData.house_number}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>PSČ</Form.Label>
                        <Form.Control
                            type="text"
                            name="city_code"
                            placeholder="Zadajte PSČ"
                            value={userData.city_code}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3">
                <Form.Label>Mesto</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    placeholder="Zadajte mesto"
                    value={userData.city}
                    onChange={handleInputChange}
                />
            </Form.Group>
        </Form>
    )
};

export default CheckoutInfoView;