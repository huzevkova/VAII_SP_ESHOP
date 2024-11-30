const bcrypt = require('bcrypt');
const bloggerModel = require('../models/bloggerModel');

const getAllBloggers = async (req, res) => {
    try {
        const bloggers = await bloggerModel.getAllBloggers()
        if (bloggers.length > 0) {
            res.status(200).json(bloggers);
        } else {
            res.status(404).json({ message: 'bloggers empty' });
        }

    } catch (error) {
        console.error('Error fetching bloggers:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const getBloggerById = async (req, res) => {
    const { id } = req.params;
    try {
        const blogger = await bloggerModel.getBloggerById(id);
        if (blogger) {
            res.status(200).json(blogger);
        } else {
            res.status(404).json({ message: 'Blogger not found' });
        }
    } catch (error) {
        console.error('Error fetching blogger:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getBloggerByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const blogger = await bloggerModel.getBloggerByEmail(email);
        if (blogger) {
            res.status(200).json(blogger);
        } else {
            res.status(404).json({ message: 'Blogger not found' });
        }
    } catch (error) {
        console.error('Error fetching blogger:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createBlogger = async (req, res) => {
    const { name, email, image, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Fields name, email and password are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newBloggerId = await bloggerModel.createBlogger({ name, email, image });
        try {
            await bloggerModel.saveBloggerPassword({newBloggerId, hashedPassword});
            res.status(201).json({message: 'Blogger created successfully', bloggerId: newBloggerId});
        } catch (err) {
            await bloggerModel.deleteBlogger(newBloggerId);
        }
    } catch (err) {
        console.error('Error creating blogger:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateBlogger = async (req, res) => {
    const { id, name, email, image } = req.body;
    try {
        const result = await bloggerModel.updateBlogger({id, name, email, image});
        if (result) {
            res.status(200).json({ message: 'Blogger updated successfully' });
        } else {
            res.status(404).json({ message: 'Blogger could not be updated' });
        }
    } catch (error) {
        console.error('Error updating blogger:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const deleteBlogger = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await bloggerModel.deleteBlogger(id);
        if (result) {
            res.status(200).json({ message: 'Blogger deleted successfully' });
        } else {
            res.status(404).json({ message: 'Blogger could not be deleted' });
        }
    } catch (error) {
        console.error('Error deleting blogger:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getBloggerById, createBlogger, getAllBloggers, updateBlogger, deleteBlogger, getBloggerByEmail};
