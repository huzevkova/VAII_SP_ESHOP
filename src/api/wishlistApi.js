const API_URL = 'http://localhost:5000/api/wishlists';

export const fetchWishlist = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch wishlist');
    }
    return response.json();
};

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