const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); // Import path module
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const bloggerRoutes = require('./routes/bloggerRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');
const orderRoutes = require('./routes/orderRoutes');
const upload = require('./upload');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
console.log('Serving images from:', path.join(__dirname, 'images'));

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/blog', bloggerRoutes);
app.use('/api/wishlists', wishlistRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/uploads', upload);

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
