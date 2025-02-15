const { movie } = require('../models/movies_model');
const mongoose = require('mongoose');

let updateMovieRate = async (req, res) => {
    const { rating } = req.body;

    if (!rating || rating < 0 || rating > 10) {
        return res.status(400).json({ message: "Rating must be between 0 and 10" });
    }

    const update_movie = await movie.findByIdAndUpdate(req.params._id, { rating }, { new: true });


    if (!update_movie) return res.status(404).json({ message: "Movie not found" });
    res.json(update_movie);
};

module.exports = { updateMovieRate };