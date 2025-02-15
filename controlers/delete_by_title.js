const { movie } = require('../models/movies_model');

let deleteMovieByTitle = async (req, res) => {
    const delete_movie = await movie.findOneAndDelete({ title: req.params.title });

    if (!delete_movie) {
        return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie deleted successfully" });
};

module.exports = { deleteMovieByTitle };
