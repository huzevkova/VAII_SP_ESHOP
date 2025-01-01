const API_URL = 'http://localhost:5000/api/orders';

export const fetchOrders = async () => {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }
    return response.json();
};

export const fetchUserOrders = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user orders');
    }
    return response.json();
};

export const fetchCartItems = async (id) => {
    const response = await fetch(`${API_URL}/cart_items/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch cart items');
    }
    return response.json();
};

export const fetchUserCart = async (id) => {
    const response = await fetch(`${API_URL}/cart/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user cart');
    }
    return response.json();
};

export const fetchOrderOptions = async () => {
    const response = await fetch(`${API_URL}/order/options`);
    if (!response.ok) {
        throw new Error('Failed to fetch order options');
    }
    return response.json();
}

export const fetchDeliveryOptions = async () => {
    const response = await fetch(`${API_URL}/order/delivery`);
    if (!response.ok) {
        throw new Error('Failed to fetch delivery options');
    }
    return response.json();
}

export const fetchPaymentOptions = async () => {
    const response = await fetch(`${API_URL}/order/payment`);
    if (!response.ok) {
        throw new Error('Failed to fetch payment options');
    }
    return response.json();
}

export const addToCart = async (ids) => {
    const response = await fetch(`${API_URL}/insert`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ids),
    });
    if (response.status === 409) {
        throw new Error('This book is already in cart');
    }
    if (!response.ok) {
        throw new Error('Failed to add to cart');
    }
    return response.json();
};

export const removeFromCart = async (ids) => {
    const response = await fetch(`${API_URL}/delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ids),
    });
    if (!response.ok) {
        throw new Error('Failed to remove from cart');
    }
    return response.json();
};

export const updateItemCount = async (data) => {
    const response = await fetch(`${API_URL}/update_count`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to update item count');
    }
    return response.json();
}

export const updateOrder = async (data) => {
    const response = await fetch(`${API_URL}/update/${data.id_order}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to update order');
    }
    return response.json();
}

export const updateOrderOptions = async (data) => {
    const response = await fetch(`${API_URL}/update_options/${data.id_order}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to update order');
    }
    return response.json();
}