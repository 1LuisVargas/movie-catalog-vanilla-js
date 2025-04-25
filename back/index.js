// Requiring express and the database
const app = require("./src/server");
const connectDB = require("./src/config/conDB");

// Connecting to the database
connectDB()
  .then((res) => {
    // Starting the server
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
