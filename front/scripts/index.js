// Importing functions
require("./add"); // Importing add.js script, which is necessary for the bundle to work
const renderCards = require("./renderCards");
const axios = require("axios");

// Fetching movies
document.addEventListener("DOMContentLoaded", () => {
    axios.get('http://localhost:3000/movies')
        .then((response) => {
            renderCards(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
})