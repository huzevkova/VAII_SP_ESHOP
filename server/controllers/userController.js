const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

/**
 * Získa všetkých používateľov.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers()
        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: 'Users empty' });
        }

    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Získa konkrétneho používateľa podľa id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.getUserById(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Získa konkrétneho používateľa podľa emailu a skotroluje heslo. Vráti informáciu o tom či je zlé heslo, alebo email neexistuje.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUserByEmail = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.getUserByEmail(email);
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                res.status(200).json(user);
            } else {
                res.status(401).json({ message: 'Zlé heslo.' });
            }
        } else {
            res.status(404).json({ message: 'Používateľ s daným emailom nebol nájdený.' });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Vytvorí nového používateľa, ak sú vyplnené všetky potebné údaje. Zaheshuje a uloží aj jeho heslo.
 * Vráti informáciu o tom, ak používateľ s daným emailom už existuje.
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const createUser = async (req, res) => {
    const { name, email, phone_number, city, city_code, street, house_number, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Fields name, email and password are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUserId = await userModel.createUser({ name, email, phone_number, city, city_code, street, house_number });
        try {
            await userModel.saveUserPassword({newUserId, hashedPassword});
            res.status(201).json({message: 'User created successfully', userId: newUserId});
        } catch (err) {
            await userModel.deleteUser(newUserId);
            res.status(500).json({ message: 'Server error' });
        }
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: 'Používateľ s daným emailom už existuje.' });
        }

        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Aktualizuje dáta používateľa podľa id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateUser = async (req, res) => {
    const { id, name, email, phone_number, city, city_code, street, house_number, type } = req.body;
    try {
        const result = await userModel.updateUser({id, name, email, phone_number, city, city_code, street, house_number});
        if (result) {
            res.status(200).json({ message: 'User updated successfully' });
        } else {
            res.status(404).json({ message: 'User could not be updated' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

/**
 * Zmaže konkrétneho používateľa podľa id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userModel.deleteUser(id);
        if (result) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User could not be deleted' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getUserById, createUser, getAllUsers, updateUser, deleteUser, getUserByEmail};
