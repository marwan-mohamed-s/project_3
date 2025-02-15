const { movie } = require('../models/movies_model');

let getAllMovies = async (req, res) => {
    try {
        const movies = await movie.find();
        return res.json(movies);
    } catch (error) {
        res.status(400).json({ message: "Error getting all movies" });
    }
};
module.exports = { getAllMovies }