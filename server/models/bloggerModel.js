const db = require('../db');

const getAllBlogPosts = async () => {
    const query = 'SELECT * FROM blog_posts';
    const [results] = await db.query(query, []);
    return results;
}

const getBlogPost = async (id) => {
    const query = 'SELECT * FROM blog_posts WHERE id_post = ?';
    const [results] = await db.query(query, [id]);
    return results[0];
}

module.exports = { getBlogPost, getAllBlogPosts };
