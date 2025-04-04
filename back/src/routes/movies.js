// Importing express and the controller for movies
const express = require("express");
const moviesController = require("../controllers/movies");

// Creating the router
const router = express.Router();

// Creating the route and associating it to the controller
router.get("/movies", moviesController);

// Exporting the router
module.exports = router;