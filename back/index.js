// Requiring express and the router
const app = require("./src/server");
const routerMovies = require("./src/routes/movies");

// Using the router
app.use(routerMovies);

// Starting the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});