// Importing the movie model
const Movie = require("../models/movieModel");

// Importing the movies data through a function
module.exports = {
  // Function to get all the movies
  getMovies: async (req, res) => {
    const movies = await Movie.find();
    return movies;
  },

  // Function to add a movie to the database
  addMovie: async (req, res) => {
    const movie = await Movie.create(req.body);
    return movie;
  },
};
