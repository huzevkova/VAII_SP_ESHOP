const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

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

const createUser = async (req, res) => {
    const { name, email, phone_number, city, city_code, street, house_number, password } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Fields name and email are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUserId = await userModel.createUser({ name, email, phone_number, city, city_code, street, house_number });
        const savePass = await userModel.saveUserPassword(newUserId, hashedPassword);
        if (savePass) {
            res.status(201).json({message: 'User created successfully', userId: newUserId});
        }
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

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

module.exports = { getUserById, createUser, getAllUsers, updateUser, deleteUser};
