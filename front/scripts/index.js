const renderCards = require("./renderCards");
const axios = require("axios");

axios.get('https://students-api.up.railway.app/movies')
    .then((response) => {
        renderCards(response.data);
    })
    .catch((error) => {
        console.error(error);
    });