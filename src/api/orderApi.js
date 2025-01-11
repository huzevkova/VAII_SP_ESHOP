const API_URL = 'http://localhost:5000/api/orders';

/**
 * AJAX volanie na získanie všetkých objednávok. (GET)
 * @returns {Promise<any>}
 */
export const fetchOrders = async () => {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie objednávok konkrétneho používateľa podľa ID. (GET)
 * @param {string} id - ID používateľa
 * @returns {Promise<any>}
 */
export const fetchUserOrders = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user orders');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie položiek v košíku konkrétneho používateľa podľa ID. (GET)
 * @param {string} id - ID používateľa
 * @returns {Promise<any>}
 */
export const fetchCartItems = async (id) => {
    const response = await fetch(`${API_URL}/cart_items/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch cart items');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie košíka konkrétneho používateľa podľa ID. (GET)
 * @param {string} id - ID používateľa
 * @returns {Promise<any>}
 */
export const fetchUserCart = async (id) => {
    const response = await fetch(`${API_URL}/cart/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user cart');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie možností objednávky. (GET)
 * @returns {Promise<any>}
 */
export const fetchOrderOptions = async () => {
    const response = await fetch(`${API_URL}/order/options`);
    if (!response.ok) {
        throw new Error('Failed to fetch order options');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie možností doručenia. (GET)
 * @returns {Promise<any>}
 */
export const fetchDeliveryOptions = async () => {
    const response = await fetch(`${API_URL}/order/delivery`);
    if (!response.ok) {
        throw new Error('Failed to fetch delivery options');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie možností platby. (GET)
 * @returns {Promise<any>}
 */
export const fetchPaymentOptions = async () => {
    const response = await fetch(`${API_URL}/order/payment`);
    if (!response.ok) {
        throw new Error('Failed to fetch payment options');
    }
    return response.json();
};

/**
 * AJAX volanie na pridanie položiek do košíka. (POST)
 * @param {Object} ids - Objekt obsahujúci ID položiek na pridanie
 * @returns {Promise<any>}
 */
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

/**
 * AJAX volanie na odstránenie položiek z košíka. (POST)
 * @param {Object} ids - Objekt obsahujúci ID položiek na odstránenie
 * @returns {Promise<any>}
 */
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

/**
 * AJAX volanie na aktualizáciu počtu položiek v košíku. (POST)
 * @param {Object} data - Objekt obsahujúci ID položky a nový počet
 * @returns {Promise<any>}
 */
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
};

/**
 * AJAX volanie na aktualizáciu objednávky podľa ID. (POST)
 * @param {Object} data - Údaje o objednávke vrátane ID objednávky
 * @returns {Promise<any>}
 */
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
};

/**
 * AJAX volanie na aktualizáciu možností objednávky. (POST)
 * @param {Object} data - Údaje o možnostiach objednávky vrátane ID objednávky
 * @returns {Promise<any>}
 */
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
};
