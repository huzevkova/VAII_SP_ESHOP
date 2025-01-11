const API_URL = 'http://localhost:5000/api/users';

/**
 * AJAX volanie na získanie všetkých používateľov. (GET)
 * @returns {Promise<any>}
 */
export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie konkrétneho používateľa podľa ID. (GET)
 * @param {string} id - ID používateľa
 * @returns {Promise<any>}
 */
export const fetchUserById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return response.json();
};

/**
 * AJAX volanie na vytvorenie nového používateľa. (POST)
 * @param {Object} userData - Údaje o používateľovi, ktorý má byť vytvorený
 * @returns {Promise<any>}
 */
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

/**
 * AJAX volanie na aktualizáciu údajov používateľa podľa ID. (POST)
 * @param {Object} userData - Údaje o používateľovi vrátane ID
 * @returns {Promise<any>}
 */
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

/**
 * AJAX volanie na odstránenie používateľa podľa ID. (POST)
 * @param {string} userId - ID používateľa, ktorý má byť odstránený
 * @returns {Promise<any>}
 */
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
