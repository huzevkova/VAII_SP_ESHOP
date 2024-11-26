const API_URL = 'http://localhost:5000/api/users'; // Update URL as needed

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
        throw new Error('Failed to create user');
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

export const deleteUser = async (userData) => {
    const response = await fetch(`${API_URL}/delete/${userData.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Failed to delete user');
    }
    return response.json();
};