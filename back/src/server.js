// Importing express, the router, morgan and cors
const express = require("express");
const router = require("./routes/moviesRoute");
const morgan = require("morgan");
const cors = require("cors");

// Creating the express app
const app = express();

// Using all the middlewares and the router
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(router);

// Exporting the app
module.exports = app;
