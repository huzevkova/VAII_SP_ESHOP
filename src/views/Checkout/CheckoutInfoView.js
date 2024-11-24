import {Col, Form, Row} from "react-bootstrap";
import React from "react";

const CheckoutInfoView = ({formData, handleInputChange}) => {

    return(
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Meno</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Zadajte svoje meno"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Priezvisko</Form.Label>
                <Form.Control
                    type="text"
                    name="surname"
                    placeholder="Zadajte svoje priezvisko"
                    value={formData.surname}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Zadajte svoj email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Telefónne číslo</Form.Label>
                <Form.Control
                    type="phone"
                    name="phone"
                    placeholder="Zadajte svoje telefónne číslo"
                    value={formData.phone}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Ulica</Form.Label>
                <Form.Control
                    type="text"
                    name="street"
                    placeholder="Zadajte ulicu"
                    value={formData.street}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Číslo domu</Form.Label>
                        <Form.Control
                            type="text"
                            name="house"
                            placeholder="Zadajte číslo domu"
                            value={formData.house}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>PSČ</Form.Label>
                        <Form.Control
                            type="text"
                            name="postal_code"
                            placeholder="Zadajte PSČ"
                            value={formData.postal_code}
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
                    value={formData.city}
                    onChange={handleInputChange}
                />
            </Form.Group>
        </Form>
    )
};

export default CheckoutInfoView;