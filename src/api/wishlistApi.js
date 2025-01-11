const API_URL = 'http://localhost:5000/api/wishlists';

/**
 * AJAX volanie na získanie wishlistu používateľa podľa ID. (GET)
 * @param {string} id - ID používateľa
 * @returns {Promise<any>}
 */
export const fetchWishlist = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch wishlist');
    }
    return response.json();
};

/**
 * AJAX volanie na pridanie položky do wishlistu. (POST)
 * @param {Object} ids - Údaje o položkách, ktoré sa majú pridať do wishlistu
 * @returns {Promise<any>}
 */
export const addToWishlist = async (ids) => {
    const response = await fetch(`${API_URL}/insert`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ids),
    });
    if (response.status === 409) {
        throw new Error('This entry already exists in your wishlist');
    }
    if (!response.ok) {
        throw new Error('Failed to add to wishlist');
    }
    return response.json();
};

/**
 * AJAX volanie na odstránenie položky z wishlistu. (POST)
 * @param {Object} ids - Údaje o položkách, ktoré sa majú odstrániť z wishlistu
 * @returns {Promise<any>}
 */
export const removeFromWishlist = async (ids) => {
    const response = await fetch(`${API_URL}/delete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ids),
    });
    if (!response.ok) {
        throw new Error('Failed to remove from wishlist');
    }
    return response.json();
};
