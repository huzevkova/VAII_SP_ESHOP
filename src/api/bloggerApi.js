const API_URL = 'http://localhost:5000/api/bloggers';

export const fetchBloggers = async () => {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
        throw new Error('Failed to fetch blogger');
    }
    return response.json();
};

export const fetchBloggerById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch blogger');
    }
    return response.json();
};

export const checkBloggerCredentials = async (data) => {
    console.log(data);
    const response = await fetch(`${API_URL}/auth/${data}`);

    if (!response.ok) {
        throw new Error('Failed to authorize blogger');
    }
    return response.json();
};


export const createBlogger = async (bloggerData) => {
    console.log(bloggerData);
    const response = await fetch(`${API_URL}/insert`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bloggerData),
    });
    if (!response.ok) {
        throw new Error('Failed to create blogger');
    }
    return response.json();
};

export const updateBlogger = async (bloggerData) => {
    const response = await fetch(`${API_URL}/update/${bloggerData.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bloggerData),
    });
    if (!response.ok) {
        throw new Error('Failed to update blogger');
    }
    return response.json();
};

export const deleteBlogger = async (bloggerId) => {
    const response = await fetch(`${API_URL}/delete/${bloggerId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to delete blogger');
    }
    return response.json();
};
