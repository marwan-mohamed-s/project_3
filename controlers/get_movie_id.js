const { movie } = require('../models/movies_model');
let getMovieById = async (req, res) => {
    let id = req.params._id;
    const movie_id = await movie.findById(id);
    if (!movie_id) {
        return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie_id);

};

module.exports = { getMovieById }