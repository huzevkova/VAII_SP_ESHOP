const bloggerModel = require('../models/bloggerModel');

/**
 * Získa všetky blog posty.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllBlogPosts = async (req, res) => {
    try {
        const posts = await bloggerModel.getAllBlogPosts();
        if (posts.length > 0) {
            res.status(200).json(posts);
        } else {
            res.status(404).json({ message: 'Blog posts empty' });
        }
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

/**
 * Získa konkrétny blog post podľa číselného id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getBlogPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await bloggerModel.getBlogPost(id);
        if (blog) {
            res.status(200).json(blog);
        } else {
            res.status(404).json({ message: 'Blog post not found' });
        }
    } catch (error) {
        console.error('Error fetching blog post:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getAllBlogPosts, getBlogPostById};
