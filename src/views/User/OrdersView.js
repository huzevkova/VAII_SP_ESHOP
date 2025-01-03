import MyNavbar from "../../components/General/MyNavbar";
import Sidebar from "../../components/General/Sidebar";
import {format} from "date-fns";
import FooterView from "../General/FooterView";
import React from "react";

const OrderView = ({orders, orderData}) => {
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
                            {orders.map((order) => (
                                <div className="row bg-light p-3 mb-3 border rounded align-items-center relative-position">
                                    <div className="col-md-8 col-sm-7">
                                        <h4 className="fw-bold">Objednávka: {order.id_order}</h4>
                                        <h5>Dátum: {format(new Date(order.purchase_date), "dd/MM/yyyy HH:mm")}</h5>
                                        <h5>Stav: {order.description}</h5>
                                    </div>
                                    <div className="col-md-4 col-sm-3 cart-price-container text-center">
                                        <h5 className="align-content-center fw-bold">Cena: {order.price}</h5>
                                        <h5 className="bottom mb-2">Počet položiek: {order.number_of_items}</h5>
                                        <h5>Položky: {orderData[order.id_order].map(book => book.title + " (" + book.count + "ks)").join(", ")}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <FooterView/>
        </>
    )
};

export default OrderView;