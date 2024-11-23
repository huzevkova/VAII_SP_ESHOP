const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = db;
