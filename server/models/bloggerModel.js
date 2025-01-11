const db = require('../db');

/**
 * Získa všetky blog posty.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAllBlogPosts = async () => {
    const query = 'SELECT * FROM blog_posts';
    const [results] = await db.query(query, []);
    return results;
}

/**
 * Získa konkrétny blog post podľa číselného id.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getBlogPost = async (id) => {
    const query = 'SELECT * FROM blog_posts WHERE id_post = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
}

module.exports = { getBlogPost, getAllBlogPosts };
