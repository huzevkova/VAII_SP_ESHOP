const wishlistModel = require("../models/wishlistModel");

const getWishlistByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const wishlist = await wishlistModel.getUserWishlist(id);
        if (wishlist) {
            res.status(200).json(wishlist);
        } else {
            res.status(404).json({ message: 'Wishlist empty' });
        }
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const insertIntoWishlist = async (req, res) => {
    const { user, id_book } = req.body;
    try {
        const newEntry = await wishlistModel.insertBookIntoWishlist({user, id_book});
        if (newEntry) {
            res.status(201).json({message: 'New entry created successfully'});
        }
    } catch (err) {
        console.error('Error inserting.', err);
        if (err.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ message: 'This entry already exists in your wishlist' });
        } else {
            res.status(500).json({ message: 'Server error' });
        }
    }
}

const deleteFromWishlist = async (req, res) => {
    const { user, id_book } = req.body;
    try {
        const result = await wishlistModel.deleteBookFromWishlist({user, id_book});
        if (result) {
            res.status(200).json({ message: 'Entry deleted successfully' });
        } else {
            res.status(404).json({ message: 'Entry could not be deleted' });
        }
    } catch (error) {
        console.error('Error deleting entry:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getWishlistByUserId, insertIntoWishlist, deleteFromWishlist };