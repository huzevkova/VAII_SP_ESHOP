const API_URL = 'http://localhost:5000/api/books';

export const fetchBooks = async () => {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
        throw new Error('Failed to fetch book');
    }
    return response.json();
};

export const fetchBookById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch book');
    }
    return response.json();
};

export const fetchBooksByName = async (name) => {
    const response = await fetch(`${API_URL}/search/${name}`);
    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }
    return response.json();
};

export const fetchRandomBooks = async (number) => {
    const response = await fetch(`${API_URL}/random/${number}`);
    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }
    return response.json();
};

export const fetchBookSeries = async (bookId) => {
    const response = await fetch(`${API_URL}/series/${bookId}`);
    if (!response.ok) {
        return null;
    }
    return response.json();
}

export const createBook = async (bookData) => {
    const response = await fetch(`${API_URL}/insert`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
    });
    if (!response.ok) {
        throw new Error('Failed to create book');
    }
    return response.json();
};

export const updateBook = async (bookData) => {
    const response = await fetch(`${API_URL}/update/${bookData.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
    });
    if (!response.ok) {
        throw new Error('Failed to update book');
    }
    return response.json();
};

export const deleteBook = async (bookId) => {
    const response = await fetch(`${API_URL}/delete/${bookId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to delete book');
    }
    return response.json();
};
