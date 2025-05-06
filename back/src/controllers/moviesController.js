// Importing the service for movies and the error catcher
const moviesService = require("../services/moviesService");
const catchAsyncError = require("../utils/errorCatcher");

// Creating the controller for movies
const getMovies = async (req, res) => {
    const movies = await moviesService.getMovies(req, res);
    res.status(200).json(movies);
  };

const addMovie = async (req, res) => {
    const movie = await moviesService.addMovie(req, res);
    res.status(201).json(movie);
  };

// Exporting the controllers for movies after passing them through the error catcher
module.exports = {
    getMovies: catchAsyncError(getMovies),
    addMovie: catchAsyncError(addMovie),
};