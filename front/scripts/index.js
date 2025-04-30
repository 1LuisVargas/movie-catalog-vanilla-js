const renderCards = require("./renderCards");
const axios = require("axios");

axios.get('http://localhost:3000/movies')
    .then((response) => {
        renderCards(response.data);
    })
    .catch((error) => {
        console.error(error);
    });