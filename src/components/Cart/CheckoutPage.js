import React, {useEffect} from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import CheckoutView from "../../views/Checkout/CheckoutView";
import MyNavbar from "../General/MyNavbar";
import {Container} from "react-bootstrap";
import Footer from "../General/Footer";
import {useAuth} from "../../AuthProvider";
import {fetchCartItems, fetchUserCart, updateOrder, updateOrderOptions} from "../../api/orderApi";
import {fetchUserById, updateUser} from "../../api/userApi";

const CheckoutPage = () => {

    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState(null);
    const [cart, setCart] = useState(null);
    const [orderData, setOrderData] = useState(null);
    const [orderOptions, setOrderOptions] = useState({
        delivery: "",
        payment: "",});
    const {user} = useAuth();

    if (!user) {
        navigate('/login');
    }

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const response = await fetchUserById(user);
                setUserData(response);
            } catch (err) {
                console.error(err);
                setUserData([]);
            }
        }
        const loadUserCart = async () => {
            try {
                const response = await fetchUserCart(user);
                setCart(response);
            } catch (err) {
                console.error(err);
                setCart([]);
            }
        };

        loadUserCart();
        loadUserData();
    }, []);


    useEffect(() => {
        const loadOrderData = async () => {
            try {
                const id = parseInt(cart.id_order);
                const response = await fetchCartItems(id);
                setOrderData(response);
            } catch (err) {
                console.error(err);
                setOrderData([]);
            }
        };

        loadOrderData();
    }, [cart]);

    if (userData == null || cart == null) {
        return;
    } else if (orderData == null) {
        return;
    }

    const isStep1Valid =
        userData.name &&
        userData.email &&
        userData.phone_number &&
        userData.street &&
        userData.house_number &&
        userData.city &&
        userData.city_code;

    const isStep2Valid =
        orderOptions.delivery && orderOptions.payment;

    const handleNext = () => {
        if (currentStep === 1 && isStep1Valid) {
            setCurrentStep(2);
        } else if (currentStep === 2 && isStep2Valid) {
            setCurrentStep(3);
        }
    };

    const handlePrevious = () => {
        if (currentStep === 2) {
            setCurrentStep(1);
        } else if (currentStep === 3) {
            setCurrentStep(2);
        }
    };

    const handleInputChange = (e) => {
        if (currentStep === 1) {
            setUserData({...userData, [e.target.name]: e.target.value});
        } else if (currentStep == 2) {
            setOrderOptions({...orderOptions, [e.target.name]: e.target.value})
        }
    };

    const handleOrder = async () => {
        try {
            const id_order = cart.id_order;
            const id_user = user;
            const status = 2;
            const delivery = orderOptions.delivery;
            const payment = orderOptions.payment;
            await updateOrderOptions( {delivery, payment, id_order});
            await updateOrder({status, id_order, id_user});
            const updatedUserData = userData;
            updatedUserData.id = updatedUserData.id_user;
            delete updatedUserData.id_user;
            await updateUser(updatedUserData);
            navigate('/order_done');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <MyNavbar/>
            <Container className="my-4 col-md-8">
                <CheckoutView
                    currentStep={currentStep}
                    userData={userData}
                    orderData={orderData}
                    orderOptions={orderOptions}
                    cart={cart}
                    handleInputChange={handleInputChange}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    handleOrder={handleOrder}
                    buttonDisable={(currentStep === 1 && !isStep1Valid) ||
                        (currentStep === 2 && !isStep2Valid)}
                />
            </Container>
            <Footer/>
        </>
    );
}

export default CheckoutPage;