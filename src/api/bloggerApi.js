const API_URL = 'http://localhost:5000/api/blog';

export const fetchBlogPosts = async () => {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
    }
    return response.json();
};

export const fetchBlogPostById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch blog post');
    }
    return response.json();
};