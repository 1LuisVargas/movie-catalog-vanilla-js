// Creating the controller for movies requests
const moviesController = (req, res) => {
    res.send("We received a get request for movies");
};

// Exporting the controller
module.exports = moviesController;