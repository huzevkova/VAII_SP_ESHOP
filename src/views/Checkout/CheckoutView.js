import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CheckoutInfoView from "./CheckoutInfoView";
import CheckoutDeliveryView from "./CheckoutDeliveryView";
import CheckoutSummaryView from "./CheckoutSummaryView";

const CheckoutView = ({currentStep, formData, handleInputChange, handlePrevious, handleOrder, handleNext, buttonDisable }) => {

    return (
        <Container fluid="md">
            <Row className="out-progress">
                <Col className={`arrow ${currentStep === 1 ? "active" : ""}`} md={4}>
                    1
                </Col>
                <Col className={`arrow ${currentStep === 2 ? "active" : ""}`} md={4}>
                    2
                </Col>
                <Col className={`arrow ${currentStep === 3 ? "active" : ""}`} md={4}>
                    3
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    {currentStep === 1 ? <CheckoutInfoView formData={formData} handleInputChange={handleInputChange}/>
                        : currentStep === 2 ? <CheckoutDeliveryView formData={formData} handleInputChange={handleInputChange}/>
                            : <CheckoutSummaryView formData={formData}/>}
                </Col>
            </Row>
            <Row className="mt-4">
                <Col className="text-center">
                    <Button className="mr-5"
                            disabled={
                                (currentStep === 1)
                            }
                            onClick={handlePrevious}
                    >
                        Späť
                    </Button>
                </Col>
                <Col className="text-center">
                    <Button
                        disabled={buttonDisable}
                        onClick={currentStep === 3 ? handleOrder : handleNext}
                    >
                        {currentStep === 3 ? "Kúpiť" : "Ďalej"}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CheckoutView;