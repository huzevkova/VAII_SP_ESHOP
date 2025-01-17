import React, {useEffect, useState} from 'react';
import {useAuth} from "../../AuthProvider";
import {fetchCartItems, fetchUserOrders} from "../../api/orderApi";
import OrderView from "../../views/User/OrdersView";

const Orders = () => {

    const [orders, setOrders] = useState(null);
    const [orderData, setOrderData] = useState(null);
    const {user} = useAuth();

    /**
     * Načítanie objednávok pri spustení.
     */
    useEffect(() => {
        const loadOrders = async () => {
            try {
                const response = await fetchUserOrders(user);
                setOrders(response);
            } catch (err) {
                console.error(err);
                setOrders([]);
            }
        };

        loadOrders();
    });

    /**
     * Načítanie dát pri spustení, po načítaní objednávok.
     */
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

    /**
     * Kontrola či sú potrebné dáta načítané.
     */
    if (orders == null) {
        return;
    } else {
        if (orders.length > 0 && orderData == null) {
            return;
        }
    }

    return (
        <>
            <OrderView orders={orders} orderData={orderData} />
        </>
    )
}
export default Orders;