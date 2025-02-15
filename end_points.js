const {app} = require('./server');
const {getAllMovies} = require('./controlers/all_movies');
const {getMovieById} = require('./controlers/get_movie_id');
const {getMoviesByCategory} = require('./controlers/movie_by_category');
const {addMovie} = require('./controlers/add_movie');
const {deleteMovieByTitle} = require('./controlers/delete_by_title');
const {updateMovieRate} = require('./controlers/update_movie');




app.get('/allmovies', getAllMovies);
app.get('/movie/:_id', getMovieById);
app.get('/moviebycategory/:category', getMoviesByCategory);
app.post('/addmovie', addMovie);
app.delete('/deletemoviebytitle/:title', deleteMovieByTitle);
app.put('/updatemovierate/:_id', updateMovieRate);