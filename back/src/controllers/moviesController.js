// Importing the service for movies
const moviesService = require("../services/moviesService");

// Creating the controller for movies requests
const moviesController = async (req, res) => {
  try {
    const movies = await moviesService.getMovies(req, res);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Exporting the controller
module.exports = moviesController;
