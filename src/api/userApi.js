const API_URL = 'http://localhost:5000/api/users';

export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return response.json();
};

export const fetchUserById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return response.json();
};

export const createUser = async (userData) => {
    const response = await fetch(`${API_URL}/insert`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Niečo sa pokazilo.');
    }
    return response.json();
};

export const updateUser = async (userData) => {
    const response = await fetch(`${API_URL}/update/${userData.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Failed to update user');
    }
    return response.json();
};

export const deleteUser = async (userId) => {
    const response = await fetch(`${API_URL}/delete/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to delete user');
    }
    return response.json();
};
