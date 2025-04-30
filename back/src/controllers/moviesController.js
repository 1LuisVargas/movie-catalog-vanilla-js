// Importing the service for movies
const moviesService = require("../services/moviesService");

// Exporting the controllers for movies
module.exports = {
  // Creating the controller for movies requests
  getMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMovies(req, res);
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addMovie: async (req, res) => {
    try {
      const movie = await moviesService.addMovie(req, res);
      res.status(201).json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};