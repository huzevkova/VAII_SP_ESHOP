import React, {useEffect, useState} from 'react';
import {useAuth} from "../../AuthProvider";
import {useNavigate} from "react-router-dom";
import MyNavbar from "../General/MyNavbar";
import Footer from "../General/Footer";
import Sidebar from "../General/Sidebar";
import {fetchUserOrders} from "../../api/orderApi";
import {format} from "date-fns";

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
                                <div className="row bg-light p-3 mb-3 border rounded align-items-center relative-position clickable-component">
                                    <div className="col-md-8 col-sm-7">
                                        <h4>Objednávka: {order.id_order}</h4>
                                        <h5>Dátum: {format(new Date(order.purchase_date), "dd/MM/yyyy HH:mm")}</h5>
                                        <h5>Stav: {order.description}</h5>
                                    </div>
                                    <div className="col-md-4 col-sm-3 cart-price-container text-center">
                                        <h4 className="align-content-center">Cena: {order.price}</h4>
                                        <h4 className="bottom">Počet položiek: {order.number_of_items}</h4>
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