import React, {useEffect} from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import CheckoutView from "../../views/Cart/CheckoutView";
import MyNavbar from "../General/MyNavbar";
import {Container} from "react-bootstrap";
import FooterView from "../../views/General/FooterView";
import {useAuth} from "../../AuthProvider";
import {
    fetchCartItems,
    fetchDeliveryOptions,
    fetchPaymentOptions,
    fetchUserCart,
    updateOrder,
    updateOrderOptions
} from "../../api/orderApi";
import {fetchUserById, updateUser} from "../../api/userApi";

const CheckoutPage = () => {

    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState(null);
    const [cart, setCart] = useState(null);
    const [delivery, setDelivery] = useState(null);
    const [payment, setPayment] = useState(null);
    const [orderData, setOrderData] = useState(null);
    const [extra, setExtra] = useState(0);
    const [orderOptions, setOrderOptions] = useState({
        delivery: null,
        payment: null,});
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

    const {user} = useAuth();


    /**
     * Načítanie dát pri spustení, po načítaní používateľa.
     */
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

        const loadDeliveryOptions = async () => {
            try {
                const response = await fetchDeliveryOptions();
                setDelivery(response);
            } catch (err) {
                console.error(err);
                setDelivery([]);
            }
        };
        const loadPaymentOptions = async () => {
            try {
                const response = await fetchPaymentOptions();
                setPayment(response);
            } catch (err) {
                console.error(err);
                setPayment([]);
            }
        };


        loadUserCart();
        loadUserData();
        loadDeliveryOptions();
        loadPaymentOptions();
    }, [user]);

    /**
     * Načítanie dát pri spustení, po načítaní košíka.
     */
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

    /**
     * Kontrola či sú potrebné dáta načítané.
     */
    if (userData == null || cart == null || delivery == null || payment == null) {
        return;
    } else if (orderData == null) {
        return;
    }

    /**
     * Spracovanie prechodu na ďalší krok objednávania.
     */
    const handleNext = () => {
        if (currentStep === 1 && isStep1Valid) {
            setCurrentStep(2);
        } else if (currentStep === 2 && isStep2Valid) {
            setCurrentStep(3);
            setExtra(delivery.find((item) => item.id_delivery === parseInt(orderOptions.delivery)).price +
                payment.find((item) => item.id_payment === parseInt(orderOptions.payment)).extra);
        }
    };

    /**
     * Spracovanie návratu na predchádzajúci krok objednávania.
     */
    const handlePrevious = () => {
        if (currentStep === 2) {
            setCurrentStep(1);
        } else if (currentStep === 3) {
            setCurrentStep(2);
        }
    };

    /**
     * Spracovanie zmeny vstupných údajov (údaje, možnosti doručenia).
     * @param e
     */
    const handleInputChange = (e) => {
        if (currentStep === 1) {
            setUserData({...userData, [e.target.name]: e.target.value});
        } else if (currentStep === 2) {
            setOrderOptions({...orderOptions, [e.target.name]: e.target.value})
        }
    };

    /**
     * Spracovanie vytvorenia objednávky.
     * @returns {Promise<void>}
     */
    const handleOrder = async () => {
        try {
            const id_order = cart.id_order;
            const id_user = user;
            const status = 2;
            const delivery = parseInt(orderOptions.delivery);
            const payment = parseInt(orderOptions.payment);
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
                    payment={payment}
                    delivery={delivery}
                    cart={cart}
                    handleInputChange={handleInputChange}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                    handleOrder={handleOrder}
                    buttonDisable={(currentStep === 1 && !isStep1Valid) ||
                        (currentStep === 2 && !isStep2Valid)}
                    extra={extra}
                />
            </Container>
            <FooterView/>
        </>
    );
}

export default CheckoutPage;