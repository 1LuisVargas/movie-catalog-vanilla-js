// Importing express and the controller for movies
const express = require("express");
const moviesController = require("../controllers/moviesController");

// Creating the router
const router = express.Router();

// Creating the route and associating it to the corresponding controller
router.get("/movies", moviesController.getMovies);
router.post("/movies", moviesController.addMovie);

// Exporting the router
module.exports = router;