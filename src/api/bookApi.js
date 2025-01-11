const API_URL = 'http://localhost:5000/api/books';

/**
 * AJAX volanie na získanie všetkých kníh. (GET)
 * @returns {Promise<any>}
 */
export const fetchBooks = async () => {
    const response = await fetch(`${API_URL}/`);
    if (!response.ok) {
        throw new Error('Failed to fetch book');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie konkrétnej knihy podľa ID. (GET)
 * @param {string} id - ID knihy
 * @returns {Promise<any>}
 */
export const fetchBookById = async (id) => {
    const response = await fetch(`${API_URL}/book/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch book');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie kníh podľa žánru. (GET)
 * @param {string} genre - Názov žánru
 * @returns {Promise<any>}
 */
export const fetchBooksByGenre = async (genre) => {
    const response = await fetch(`${API_URL}/genre/${genre}`);
    if (!response.ok) {
        throw new Error('Failed to fetch book from genre');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie žánrov konkrétnej knihy podľa ID. (GET)
 * @param {string} id - ID knihy
 * @returns {Promise<any>}
 */
export const fetchGenresById = async (id) => {
    const response = await fetch(`${API_URL}/book/genre/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch book genres');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie kníh podľa názvu. (GET)
 * @param {string} name - Názov knihy
 * @returns {Promise<any>}
 */
export const fetchBooksByName = async (name) => {
    const response = await fetch(`${API_URL}/search/${name}`);
    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie náhodných kníh. (GET)
 * @param {number} number - Počet náhodných kníh
 * @returns {Promise<any>}
 */
export const fetchRandomBooks = async (number) => {
    const response = await fetch(`${API_URL}/random/${number}`);
    if (!response.ok) {
        throw new Error('Failed to fetch books');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie série konkrétnej knihy podľa ID. (GET)
 * @param {string} bookId - ID knihy
 * @returns {Promise<any>|null}
 */
export const fetchBookSeries = async (bookId) => {
    const response = await fetch(`${API_URL}/series/${bookId}`);
    if (!response.ok) {
        return null;
    }
    return response.json();
};

/**
 * AJAX volanie na vytvorenie novej knihy. (POST)
 * @param {Object} bookData - Údaje o knihe
 * @returns {Promise<any>}
 */
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

/**
 * AJAX volanie na aktualizáciu knihy. (POST)
 * @param {Object} bookData - Údaje o knihe vrátane ID
 * @returns {Promise<any>}
 */
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

/**
 * AJAX volanie na vymazanie knihy podľa ID. (POST)
 * @param {string} bookId - ID knihy
 * @returns {Promise<any>}
 */
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

/**
 * AJAX volanie na získanie všetkých žánrov. (GET)
 * @returns {Promise<any>}
 */
export const fetchGenres = async () => {
    const response = await fetch(`${API_URL}/genres`);
    if (!response.ok) {
        throw new Error('Failed to fetch genres');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie všetkých autorov. (GET)
 * @returns {Promise<any>}
 */
export const fetchAuthors = async () => {
    const response = await fetch(`${API_URL}/authors`);
    if (!response.ok) {
        throw new Error('Failed to fetch authors');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie všetkých jazykov. (GET)
 * @returns {Promise<any>}
 */
export const fetchLanguages = async () => {
    const response = await fetch(`${API_URL}/languages`);
    if (!response.ok) {
        throw new Error('Failed to fetch languages');
    }
    return response.json();
};

/**
 * AJAX volanie na získanie všetkých obrázkov. (GET)
 * @returns {Promise<any>}
 */
export const fetchImages = async () => {
    const response = await fetch(`${API_URL}/images`);
    if (!response.ok) {
        throw new Error('Failed to fetch images');
    }
    return response.json();
};

/**
 * AJAX volanie na vytvorenie nového obrázku knihy. (POST)
 * @param {Object} imageData - Údaje o obrázku
 * @returns {Promise<any>}
 */
export const createImage = async (imageData) => {
    const response = await fetch(`${API_URL}/book_image`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(imageData),
    });
    if (!response.ok) {
        throw new Error('Failed to create image');
    }
    return response.json();
};

/**
 * AJAX volanie na aktualizáciu obrázku. (POST)
 * @param {Object} imageData - Údaje o obrázku
 * @returns {Promise<any>}
 */
export const updateImage = async (imageData) => {
    const response = await fetch(`${API_URL}/image/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(imageData),
    });
    if (!response.ok) {
        throw new Error('Failed to update image');
    }
    return response.json();
};

/**
 * AJAX volanie na aktualizáciu obrázku knihy. (POST)
 * @param {Object} data - Údaje o aktualizácii obrázku
 * @returns {Promise<any>}
 */
export const updateBookImage = async (data) => {
    const response = await fetch(`${API_URL}/book_image/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Niečo sa pokazilo.');
    }
    return response.json();
};

/**
 * AJAX volanie na vymazanie obrázku podľa ID. (POST)
 * @param {string} id - ID obrázku
 * @returns {Promise<any>}
 */
export const deleteImage = async (id) => {
    const response = await fetch(`${API_URL}/image/delete/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to delete image');
    }
    return response.json();
};
