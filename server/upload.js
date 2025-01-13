const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, './images'));
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed'), false);
    }
};

const deleteImage = (image) => {
    const imagePath = path.join(__dirname, './images/', image);

    return fs.promises.unlink(imagePath)
        .then(() => ({ success: true, message: 'Image deleted successfully' }))
        .catch((err) => {
            console.error('Error deleting file:', err);
            return { success: false, message: 'Failed to delete the image' };
        });
};

const upload = multer({ storage, fileFilter });

router.post('/image/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded or invalid file type' });
    }

    res.status(200).json({
        message: 'File uploaded successfully',
        filePath: `${req.file.filename}`
    });
});

router.delete('/image/delete/:imageName', async (req, res) => {
    const { imageName } = req.params;

    try {

        const result = await deleteImage(imageName);

        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(500).json({ error: result.message });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
