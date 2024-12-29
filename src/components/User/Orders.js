import React, {useEffect, useState} from 'react';
import {useAuth} from "../../AuthProvider";
import {useNavigate} from "react-router-dom";
import MyNavbar from "../General/MyNavbar";
import Footer from "../General/Footer";
import Sidebar from "../General/Sidebar";
import {fetchUserOrders} from "../../api/orderApi";

const Orders = () => {

    const navigate = useNavigate();
    const [orders, setOrders] = useState(null);
    const {user} = useAuth();

    if (!user) {
        navigate('/login');
    }

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const response = await fetchUserOrders(user);
                setOrders(response);
            } catch (err) {
                console.error("Trying here");
                setOrders([]);
            }
        };

        loadOrders();
    });

    if (orders == null) {
        return;
    }

    return (
        <>
            <MyNavbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3" id="sidebar">
                        <Sidebar/>
                    </div>
                    <div className="container col-lg-8 col-md-7">
                        <h2 className="mt-3 text-center text-primary">OBJEDNÁVKY</h2>
                        <div className="container mt-4">
                            {orders.map((order, index) => (
                                <div className="d-flex justify-content-end" key={index}>
                                    <>
                                        <div>
                                            <div className="col-md-6 col-sm-5">
                                                <h4 className="title">Objednávka: {order.id_order}</h4>
                                                <h5 className="text-muted author">Dátum: {order.purchase_date}</h5>
                                                <h5 className="line-clamp description">Stav: {order.description}</h5>
                                            </div>
                                            <div className="col-md-6 col-sm-5 cart-price-container text-center">
                                                <h4 className="top-button align-content-center">Cena: {order.price}</h4>
                                                <h4 className="bottom">Počet položiek: {order.number_of_items}</h4>
                                            </div>
                                        </div>
                                    </>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Orders;