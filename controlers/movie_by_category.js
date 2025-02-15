const { movie } = require('../models/movies_model');

let getMoviesByCategory = async (req, res) => {
    try {

        const movies = await movie.find({ category: req.params.category });
        res.json(movies);

    } catch (error) {
        res.status(400).json({ message: "Error getting movies by category" });
    }
};

module.exports = { getMoviesByCategory };