const { movie } = require('../models/movies_model');

let addMovie = async (req, res) => {
    const {title, category, rating } = req.body;

    if (!title || !category || !rating) {
        return res.status(400).json({ message: "You Must Complete The Required Data " });
    }

    if (rating < 0 || rating > 10) {
        return res.status(400).json({ message: "Rating must be between 0 and 10" });
    }
    try {
        const newMovie = await movie.create({
            title,
            category,
            rating
        });

        return res.status(201).json({
            massege: "Movie added successfully",
            newMovie,
        });

    } catch (error) {
        res.status(400).json({ message: "Error adding movie" });
    }

};

module.exports = { addMovie };
