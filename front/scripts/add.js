const axios = require("axios");

// Ensuring that the DOM is loaded before executing the code. This is necessary for the "require("./add");" not to break the entire bundle in index.js
document.addEventListener("DOMContentLoaded", () => {
    // Clear button
    const clearButton = document.getElementById("clear-button");
  
    clearButton.addEventListener("click", () => {
      // Get form inputs
      const titleInput = document.getElementById("title");
      const yearInput = document.getElementById("year");
      const directorInput = document.getElementById("director");
      const durationInput = document.getElementById("duration");
      const genreInputs = document.querySelectorAll('input[name="genre"]');
      const rateInput = document.getElementById("rate");
      // Clear form inputs
      titleInput.value = "";
      yearInput.value = "";
      directorInput.value = "";
      durationInput.value = "";
      genreInputs.forEach(input => input.checked = false);
      rateInput.value = "";
    });
  
    // Add movie form
    const addForm = document.getElementById("add-form");
  
    addForm.addEventListener("submit", async (event) => {
      // Prevent form submission
      event.preventDefault();
  
      // Get form data
      const titleInput = document.getElementById("title");
      const yearInput = document.getElementById("year");
      const directorInput = document.getElementById("director");
      const durationInput = document.getElementById("duration");
      const genreInputs = document.querySelectorAll('input[name="genre"]:checked');
      const genres = Array.from(genreInputs).map((input) => input.value);
      const rateInput = document.getElementById("rate");
      const posterInput = document.getElementById("poster");
  
      // Create movie object
      const movie = {
        title: titleInput.value,
        year: yearInput.value,
        director: directorInput.value,
        duration: durationInput.value,
        genre: genres,
        rate: rateInput.value,
        poster: posterInput.value,
      };
  
      // Send POST request
      try {
        const response = await axios.post("http://localhost:3000/movies", movie, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // Handle response
        console.log("Movie added:", response.data);
        titleInput.value = "";
        yearInput.value = "";
        directorInput.value = "";
        durationInput.value = "";
        genreInputs.forEach((input) => (input.checked = false)); // reset checkboxes
        rateInput.value = "";
        posterInput.value = "";
      } catch (error) {
        // Handle error
        console.error("Error adding movie:", error);
      }
    });
  });
  