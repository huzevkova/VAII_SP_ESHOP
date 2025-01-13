const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up storage for uploaded images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, './images'));  // Destination folder
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

// File filter to allow only images
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

// Route to handle image upload
router.post('/image/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded or invalid file type' });
    }

    // Respond with the file path
    res.status(200).json({
        message: 'File uploaded successfully',
        filePath: `${req.file.filename}`
    });
});

router.delete('/image/delete/:imageName', async (req, res) => {
    const { imageName } = req.params;

    try {

        // Await the result of deleteImage function
        const result = await deleteImage(imageName);

        // Respond with the result
        if (result.success) {
            res.status(200).json({ message: result.message });
        } else {
            res.status(500).json({ error: result.message });
        }
    } catch (error) {
        // Handle any errors that occur during the deletion process
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
