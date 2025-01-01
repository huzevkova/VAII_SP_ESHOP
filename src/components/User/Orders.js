import React, {useEffect, useState} from 'react';
import {useAuth} from "../../AuthProvider";
import {useNavigate} from "react-router-dom";
import MyNavbar from "../General/MyNavbar";
import Footer from "../General/Footer";
import Sidebar from "../General/Sidebar";
import {fetchCartItems, fetchUserOrders} from "../../api/orderApi";
import {format} from "date-fns";

const Orders = () => {

    const navigate = useNavigate();
    const [orders, setOrders] = useState(null);
    const [orderData, setOrderData] = useState(null);
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

    useEffect(() => {
        const loadOrdersItems = async () => {
            try {
                const responses = await Promise.all(
                    orders.map(order => fetchCartItems(order.id_order))
                );

                const dataMap = orders.reduce((acc, order, index) => {
                    acc[order.id_order] = responses[index];
                    return acc;
                }, {});

                setOrderData(dataMap);
            } catch (err) {
                console.error(err);
                setOrderData([]);
            }
        };

        if (orders != null) {
            loadOrdersItems();
        }
    }, [orders]);

    if (orders == null) {
        return;
    } else {
        if (orders.length > 0 && orderData == null) {
            return;
        }
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
                                <div className="row bg-light p-3 mb-3 border rounded align-items-center relative-position">
                                    <div className="col-md-8 col-sm-7">
                                        <h4 className="fw-bold">Objednávka: {order.id_order}</h4>
                                        <h5>Dátum: {format(new Date(order.purchase_date), "dd/MM/yyyy HH:mm")}</h5>
                                        <h5>Stav: {order.description}</h5>
                                    </div>
                                    <div className="col-md-4 col-sm-3 cart-price-container text-center">
                                        <h5 className="align-content-center fw-bold">Cena: {order.price}</h5>
                                        <h5 className="bottom mb-2">Počet položiek: {order.number_of_items}</h5>
                                        <h5>Položky: {orderData[order.id_order].map(book => book.title).join(", ")}</h5>
                                    </div>
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